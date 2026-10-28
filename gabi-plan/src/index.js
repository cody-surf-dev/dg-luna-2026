import { DurableObject } from "cloudflare:workers";
import { SEED } from "./seed.js";
import { MIGRATIONS } from "./migrations.js";
import { APP_HTML, LOGIN_HTML, NO_PASSWORD_HTML } from "./pages.js";

const COOKIE = "gp_auth";
const GROUPS = ["vet", "permit", "flight", "russia", "bag"];
const PEOPLE = ["dasha", "evgen", ""];
const MAX_TASKS = 300;

// ---------- auth ----------
async function token(password) {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("gabi-phuket-v1"));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
function getCookie(req, name) {
  const h = req.headers.get("Cookie") || "";
  for (const part of h.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return "";
}
async function isAuthed(req, env) {
  const c = getCookie(req, COOKIE);
  return c && safeEqual(c, await token(env.PASSWORD));
}

const html = (body, status = 200, headers = {}) =>
  new Response(body, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", ...headers } });
const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

// ---------- worker ----------
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!env.PASSWORD) return html(NO_PASSWORD_HTML, 503);

    if (url.pathname === "/login" && req.method === "POST") {
      const form = await req.formData();
      const pw = String(form.get("password") || "");
      const [given, real] = await Promise.all([token(pw), token(env.PASSWORD)]);
      if (pw && safeEqual(given, real)) {
        return new Response(null, {
          status: 303,
          headers: {
            Location: "/",
            "Set-Cookie": `${COOKIE}=${real}; Path=/; Max-Age=31536000; HttpOnly; Secure; SameSite=Lax`,
          },
        });
      }
      return html(LOGIN_HTML.replace("<!--ERR-->", '<p class="err">Неверный пароль</p>'), 401);
    }

    if (url.pathname === "/logout") {
      return new Response(null, { status: 303, headers: { Location: "/", "Set-Cookie": `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax` } });
    }

    const authed = await isAuthed(req, env);

    if (url.pathname.startsWith("/api/")) {
      if (!authed) return json({ error: "auth" }, 401);
      const stub = env.STORE.get(env.STORE.idFromName("main"));
      if (url.pathname === "/api/state" && req.method === "GET") return json(await stub.getState());
      if (url.pathname === "/api/op" && req.method === "POST") {
        let body;
        try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
        const res = await stub.apply(body);
        return json(res, res.error ? 400 : 200);
      }
      return json({ error: "not_found" }, 404);
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return html(authed ? APP_HTML : LOGIN_HTML);
    }
    return new Response("Not found", { status: 404 });
  },
};

// ---------- storage ----------
function cleanTask(input, base = {}) {
  const t = { ...base };
  if ("title" in input) t.title = String(input.title || "").slice(0, 300);
  if ("group" in input && GROUPS.includes(input.group)) t.group = input.group;
  if ("due" in input) t.due = /^\d{4}-\d{2}-\d{2}$/.test(input.due) ? input.due : "";
  if ("done" in input) t.done = !!input.done;
  if ("who" in input && PEOPLE.includes(input.who)) t.who = input.who;
  if ("doneBy" in input && PEOPLE.includes(input.doneBy)) t.doneBy = input.doneBy;
  if ("doneAt" in input) t.doneAt = String(input.doneAt || "").slice(0, 40);
  if ("order" in input && Number.isFinite(input.order)) t.order = input.order;
  return t;
}

export class Store extends DurableObject {
  async load() {
    let s = await this.ctx.storage.get("state");
    if (!s) {
      s = { rev: 1, tasks: SEED.tasks, plan: SEED.plan || {} };
      await this.ctx.storage.put("state", s);
    }
    // migrate: single note string -> list of notes with authors
    let changed = false;
    for (const t of s.tasks) {
      if (!Array.isArray(t.notes)) {
        t.notes = t.note ? [{ id: "n0", by: "", text: t.note, at: "2026-10-28T06:00:00Z" }] : [];
        delete t.note;
        changed = true;
      }
    }
    s.applied = s.applied || [];
    for (const m of MIGRATIONS) {
      if (s.applied.includes(m.id)) continue;
      m.run(s);
      s.applied.push(m.id);
      s.rev += 1;
      changed = true;
    }
    if (changed) await this.ctx.storage.put("state", s);
    return s;
  }
  async getState() {
    return await this.load();
  }
  async apply(op) {
    const s = await this.load();
    const tasks = s.tasks;
    switch (op && op.op) {
      case "update": {
        const i = tasks.findIndex(t => t.id === op.id);
        if (i < 0) return { error: "not_found", state: s };
        tasks[i] = cleanTask(op.patch || {}, tasks[i]);
        break;
      }
      case "add": {
        if (tasks.length >= MAX_TASKS) return { error: "too_many", state: s };
        const order = tasks.reduce((m, t) => Math.max(m, t.order || 0), 0) + 10;
        const t = cleanTask({ title: "", group: "vet", due: "", done: false, who: "", order, ...(op.task || {}) });
        t.notes = [];
        if (!t.title.trim()) return { error: "empty", state: s };
        t.id = "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        tasks.push(t);
        break;
      }
      case "delete": {
        const i = tasks.findIndex(t => t.id === op.id);
        if (i >= 0) tasks.splice(i, 1);
        break;
      }
      case "note_add": {
        const t = tasks.find(t => t.id === op.id);
        if (!t) return { error: "not_found", state: s };
        const text = String(op.text || "").trim().slice(0, 2000);
        if (!text) return { error: "empty", state: s };
        if (t.notes.length >= 100) return { error: "too_many", state: s };
        t.notes.push({
          id: "n" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
          by: PEOPLE.includes(op.by) ? op.by : "",
          text,
          at: new Date().toISOString(),
        });
        break;
      }
      case "note_del": {
        const t = tasks.find(t => t.id === op.id);
        if (t) t.notes = t.notes.filter(n => n.id !== op.noteId);
        break;
      }
      case "plan": {
        const p = op.patch || {};
        if ("flightDate" in p) s.plan.flightDate = /^\d{4}-\d{2}-\d{2}$/.test(p.flightDate) ? p.flightDate : "";
        break;
      }
      default:
        return { error: "bad_op", state: s };
    }
    s.rev += 1;
    await this.ctx.storage.put("state", s);
    return s;
  }
}
