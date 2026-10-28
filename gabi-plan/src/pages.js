// HTML pages served by the worker. No template literals inside the client script (keeps escaping simple).

const PAW = '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="16" rx="5.2" ry="4.4"/><ellipse cx="5.2" cy="10.2" rx="2.1" ry="2.7"/><ellipse cx="9.4" cy="6.2" rx="2.1" ry="2.8"/><ellipse cx="14.6" cy="6.2" rx="2.1" ry="2.8"/><ellipse cx="18.8" cy="10.2" rx="2.1" ry="2.7"/></svg>';


const DASHA = '<svg class="fig dasha" viewBox="0 0 40 56" aria-hidden="true"><path d="M13 7q-6 3-4 15q1 5 4 7l4-15z" fill="#8a5a3c"/><g stroke-linecap="round" fill="none"><path d="M17 31l-5 7-5 2" stroke="#3b3f4a" stroke-width="3.6"/><path d="M17 19l-6 7" stroke="#2f574b" stroke-width="3.4"/></g><path d="M14 16q5-3 9 0l2.5 15h-13.5z" fill="#3f6b5c"/><g stroke-linecap="round" fill="none"><path d="M21 31l5 7-1 8" stroke="#3b3f4a" stroke-width="3.6"/><path d="M22 19l6 5 3-4" stroke="#3f6b5c" stroke-width="3.4"/></g><circle cx="31" cy="20" r="1.8" fill="#f3cfb3"/><path d="M23 46h4" stroke="#5a3d2b" stroke-width="3.4" stroke-linecap="round"/><path d="M5 40l3-2" stroke="#5a3d2b" stroke-width="3.4" stroke-linecap="round"/><circle cx="19" cy="9" r="6.2" fill="#f3cfb3"/><path d="M12.8 9a6.3 6.3 0 0 1 12.5-1.5q-5-.5-8 2.5q-2 3-4.5 3.5z" fill="#8a5a3c"/><circle cx="22.3" cy="9.4" r=".9" fill="#2b2b2b"/><path d="M21.5 12.4q1.4.9 2.7 0" stroke="#b5634a" stroke-width=".9" fill="none" stroke-linecap="round"/></svg>';
const GABI = '<svg class="fig gabi" viewBox="0 0 32 24" aria-hidden="true"><path d="M5 11q-4-2-2-6q2 3 4 3" fill="#d9a35f"/><g stroke="#c08640" stroke-width="3" stroke-linecap="round"><path d="M10 15l-3 6"/><path d="M13 16l1 6"/><path d="M19 16l-2 6"/><path d="M22 15l4 5"/></g><ellipse cx="15" cy="12" rx="9.5" ry="6.2" fill="#d9a35f"/><circle cx="9" cy="9" r="3" fill="#e2b170"/><circle cx="14" cy="7.5" r="3" fill="#e2b170"/><circle cx="25" cy="8" r="5.6" fill="#e2b170"/><ellipse cx="22.2" cy="9.5" rx="2.6" ry="4.2" fill="#c08640"/><circle cx="26.6" cy="7.3" r=".9" fill="#2b2b2b"/><circle cx="30" cy="9" r="1.2" fill="#2b2b2b"/></svg>';
const ZHENYA = '<svg class="fig zhenya" viewBox="0 0 48 56" aria-hidden="true"><g stroke="#f0c4a4" stroke-width="3.6" stroke-linecap="round" fill="none"><path d="M17 20l-9-9"/><path d="M31 20l9-9"/></g><circle cx="7" cy="10" r="2.2" fill="#f0c4a4"/><circle cx="41" cy="10" r="2.2" fill="#f0c4a4"/><g stroke="#f0c4a4" stroke-width="3.6" stroke-linecap="round"><path d="M21 41v11"/><path d="M27 41v11"/></g><path d="M19 52h-2M29 52h2" stroke="#5a3d2b" stroke-width="3" stroke-linecap="round"/><rect x="16.5" y="17" width="15" height="17" rx="4" fill="#f4f4f2" stroke="#d6d3cd" stroke-width="1"/><path d="M17 33h14v7q0 2-2 2h-10q-2 0-2-2z" fill="#4aa3a8"/><circle cx="24" cy="9.5" r="6.8" fill="#f0c4a4"/><path d="M17.6 10.5q1 7 6.4 7t6.4-7q-1.5 2.5-6.4 2.5t-6.4-2.5z" fill="#c96a2b"/><circle cx="21.6" cy="8.6" r=".9" fill="#2b2b2b"/><circle cx="26.4" cy="8.6" r=".9" fill="#2b2b2b"/><path d="M22.2 13.2q1.8 1.1 3.6 0" stroke="#7a3a14" stroke-width=".9" fill="none" stroke-linecap="round"/></svg>';

const WINTER = '<svg class="scn winter" viewBox="0 0 80 62" aria-hidden="true"><ellipse cx="22" cy="58" rx="30" ry="6" fill="var(--snow)" opacity=".9"/><path d="M14 52l-9 0 9-12h-5l8-11h-4l7-10 7 10h-4l8 11h-5l9 12z" fill="#2f5e4e"/><path d="M15 21l-3 4h7zM10 31l-3 4h6M21 31l3 4h-6" fill="var(--snow)"/><rect x="14" y="52" width="4" height="5" fill="#6b4a33"/><ellipse cx="52" cy="59" rx="20" ry="4" fill="var(--snow)" opacity=".8"/></svg>';
const SUMMER = '<svg class="scn summer" viewBox="0 0 160 62" aria-hidden="true"><circle cx="62" cy="11" r="7" fill="var(--sun)"/><g stroke="var(--sun)" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M62 0v-1M73 11h2M70 3l1.5-1.5M70 19l1.5 1.5M51 11h-2M54 3l-1.5-1.5"/></g><path d="M0 58q40-8 160-4v8H0z" fill="var(--sand)"/><path d="M96 55q6-3 12 0t12 0t12 0t12 0" stroke="var(--sea)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/><path d="M14 56q2-22 10-38" stroke="#8a5a2b" stroke-width="3.2" fill="none" stroke-linecap="round"/><g fill="#3e9a63"><path d="M24 18q-12-6-20 2q10-2 20-2z"/><path d="M24 18q10-8 20-2q-10 0-20 2z"/><path d="M24 18q-4-10-14-10q8 4 14 10z"/><path d="M24 18q6-10 15-8q-9 2-15 8z"/><path d="M24 18q-10 2-14 12q6-8 14-12z"/></g><circle cx="23" cy="20" r="1.8" fill="#6b4a33"/><circle cx="26" cy="21" r="1.6" fill="#6b4a33"/></svg>';

const HEAD = `<!doctype html><html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#fbf4ec" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e1a24" media="(prefers-color-scheme: dark)">
<title>Габи → Пхукет</title>
<script>try{var th=localStorage.getItem("gp_theme");if(th=="light"||th=="dark")document.documentElement.setAttribute("data-theme",th)}catch(e){}</script>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23ff7a59'%3E%3Cellipse cx='12' cy='16' rx='5.2' ry='4.4'/%3E%3Cellipse cx='5.2' cy='10.2' rx='2.1' ry='2.7'/%3E%3Cellipse cx='9.4' cy='6.2' rx='2.1' ry='2.8'/%3E%3Cellipse cx='14.6' cy='6.2' rx='2.1' ry='2.8'/%3E%3Cellipse cx='18.8' cy='10.2' rx='2.1' ry='2.7'/%3E%3C/g%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;700&family=Nunito:wght@400;600;700;800&display=swap">
<style>
/* Layout: a postcard-like hero (countdown + route Irkutsk → Phuket with Gabi's paw moving along it), then the journey's task groups, then reference. */
:root{
  --bg:#fbf4ec; --surface:#ffffff; --ink:#1d2a33; --muted:#6b7780; --line:#efe2d5;
  --sea:#14949a; --sea-soft:#dcf1f1; --sunset:#ff7a59; --sunset-soft:#ffe6dc; --sun:#ffc65c;
  --sky-a:#e3f3f4; --sky-b:#ffe9dc; --winter:#dbeaf5; --summer:#ffe0c2; --snow:#ffffff; --sand:#f3d39c;
  --bad:#c8352b; --bad-soft:#fde2de; --warn:#b86a12; --warn-soft:#fff0d9; --ok:#2e8a4a; --ok-soft:#e1f4e6;
  --f-display:"Comfortaa","Nunito",system-ui,sans-serif;
  --f-body:"Nunito",system-ui,-apple-system,"Segoe UI",sans-serif;
  color-scheme:light;
}
@media (prefers-color-scheme: dark){:root:not([data-theme=light]){
  --bg:#0e1a24; --surface:#16242f; --ink:#eef3f5; --muted:#9aaab3; --line:#24353f;
  --sea:#4cc6c9; --sea-soft:#163a40; --sunset:#ff8f73; --sunset-soft:#3a2420; --sun:#ffd27a;
  --sky-a:#132c3a; --sky-b:#2a2032; --winter:#1a3046; --summer:#3b2a2a; --snow:#cfdde8; --sand:#8a6b3e;
  --bad:#ff8a80; --bad-soft:#3d1d1b; --warn:#f0b05a; --warn-soft:#3a2a17; --ok:#7fd494; --ok-soft:#173222; color-scheme:dark;}}
:root[data-theme=dark]{
  --bg:#0e1a24; --surface:#16242f; --ink:#eef3f5; --muted:#9aaab3; --line:#24353f;
  --sea:#4cc6c9; --sea-soft:#163a40; --sunset:#ff8f73; --sunset-soft:#3a2420; --sun:#ffd27a;
  --sky-a:#132c3a; --sky-b:#2a2032; --winter:#1a3046; --summer:#3b2a2a; --snow:#cfdde8; --sand:#8a6b3e;
  --bad:#ff8a80; --bad-soft:#3d1d1b; --warn:#f0b05a; --warn-soft:#3a2a17; --ok:#7fd494; --ok-soft:#173222; color-scheme:dark;}
*{box-sizing:border-box}
[hidden]{display:none!important}
html{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--f-body);font-size:16px;line-height:1.45}
.wrap{max-width:760px;margin:0 auto;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:18px 56px;display:flex;flex-direction:column;gap:24px}
h1,h2,.display{font-family:var(--f-display);font-weight:700;margin:0;text-wrap:balance;letter-spacing:-.01em}
h2{font-size:18px}
.sub{color:var(--muted);margin:0}
.num{font-variant-numeric:tabular-nums}
.btn{font:inherit;font-size:15px;font-weight:700;border:0;border-radius:14px;padding:10px 16px;background:var(--sea);color:var(--surface);cursor:pointer}
input:focus-visible,button:focus-visible,textarea:focus-visible,summary:focus-visible{outline:2px solid var(--sunset);outline-offset:2px}
a{color:var(--sea)}
.paw svg{width:100%;height:100%;fill:currentColor;display:block}
</style>`;

export const LOGIN_HTML = HEAD + `
<style>
body{background:linear-gradient(180deg,var(--sky-a),var(--sky-b) 70%,var(--bg));min-height:100vh}
.login{max-width:380px;margin:0 auto;padding-top:14vh;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));display:flex;flex-direction:column;gap:14px}
.login .paw{width:44px;height:44px;color:var(--sunset)}
.login h1{font-size:30px}
.login input{font:inherit;font-size:17px;color:var(--ink);background:var(--surface);border:2px solid var(--line);border-radius:14px;padding:12px 14px;width:100%}
.err{color:var(--bad);margin:0;font-weight:700}
</style></head><body>
<form class="login" method="post" action="/login">
  <span class="paw">${PAW}</span>
  <h1>Габи летит к Жене</h1>
  <p class="sub">Наш общий план переезда Габи на Пхукет.</p>
  <!--ERR-->
  <label for="pw" class="sub">Пароль</label>
  <input id="pw" name="password" type="password" autocomplete="current-password" required autofocus>
  <button class="btn" type="submit">Войти</button>
</form></body></html>`;

export const NO_PASSWORD_HTML = HEAD + `</head><body><div class="wrap">
<h1>Габи → Пхукет</h1>
<p>Сайт почти готов: в настройках воркера в Cloudflare нужно добавить секрет <b>PASSWORD</b> (Settings → Variables and Secrets) и нажать Deploy.</p>
</div></body></html>`;

export const APP_HTML = HEAD + `
<style>
/* ---------- hero postcard ---------- */
.hero{border-radius:22px;background:linear-gradient(100deg,var(--winter) 0%,var(--winter) 25%,var(--summer) 85%);padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.hrow{display:flex;align-items:center;justify-content:space-between;gap:8px 14px;flex-wrap:wrap}
.count{display:flex;align-items:baseline;gap:8px;min-width:0}
.count .big{font-family:var(--f-display);font-weight:700;font-size:40px;line-height:1;color:var(--sunset)}
.count .unit{font-family:var(--f-display);font-weight:700;font-size:16px}
.when{display:flex;align-items:center;gap:6px;color:var(--muted);font-size:13px;font-weight:700}
.when input{font:inherit;font-size:14px;font-weight:600;color:var(--ink);background:color-mix(in srgb,var(--surface) 75%,transparent);border:1px solid var(--line);border-radius:10px;padding:4px 8px}
.journey{position:relative;display:flex;flex-direction:column;gap:2px}
.scene{position:absolute;left:-16px;right:-16px;top:0;height:62px;pointer-events:none;overflow:hidden}
.scn{position:absolute;bottom:0;height:56px}
.scn.winter{left:2px;width:72px}
.scn.summer{right:0;width:160px}
.flake{position:absolute;top:-6px;width:4px;height:4px;border-radius:50%;background:var(--snow);opacity:.9;animation:fall linear infinite}
@keyframes fall{to{transform:translate(8px,80px)}}
.lane{z-index:1}
.lane{position:relative;height:62px;margin-right:50px;--p:0}
.lane .bar{position:absolute;left:0;right:-6px;bottom:6px;height:6px;border-radius:99px;background:linear-gradient(90deg,color-mix(in srgb,var(--snow) 85%,var(--ink)),var(--sand))}
.lane .bar>i{display:block;height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,var(--sea),var(--sunset));transition:width .9s}
.runner{position:absolute;bottom:9px;left:max(0px,calc(var(--p) * 100% - 62px));display:flex;align-items:flex-end;transition:left .9s cubic-bezier(.3,.7,.2,1)}
.fig{display:block}
.fig.dasha{width:36px;height:50px;animation:hop .5s ease-in-out infinite alternate}
.fig.gabi{width:28px;height:21px;margin-left:-2px;animation:hop .32s ease-in-out infinite alternate}
.papa{position:absolute;right:-52px;bottom:2px;width:48px}
.fig.zhenya{width:48px;height:56px;transform-origin:50% 100%;animation:wave 1.6s ease-in-out infinite}
.lane.met .fig{animation:none}
@keyframes hop{from{transform:translateY(0)}to{transform:translateY(-3px)}}
@keyframes wave{0%,100%{transform:rotate(0)}50%{transform:rotate(-3deg)}}
.ends{display:flex;justify-content:space-between;font-size:12px;font-weight:800;color:var(--muted)}
@media (prefers-reduced-motion:reduce){.fig,.flake{animation:none!important}.flake{display:none}.runner,.lane .bar>i{transition:none}}

/* ---------- me + next ---------- */
.row{display:flex;gap:12px;flex-wrap:wrap;align-items:stretch}
.next{flex:1 1 300px;min-width:0;background:var(--surface);border-radius:20px;padding:14px 16px;display:flex;flex-direction:column;gap:4px;border:2px solid var(--sea-soft)}
.next .lbl{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--sea)}
.next .t{font-weight:700}
.mebox{background:var(--surface);border-radius:20px;padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.mebox .lbl{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.seg{display:inline-flex;background:var(--bg);border-radius:99px;padding:3px;gap:2px}
.seg button{font:inherit;font-size:14px;font-weight:700;border:0;background:transparent;color:var(--muted);padding:5px 12px;border-radius:99px;cursor:pointer}
.seg button[aria-pressed=true]{background:var(--sea);color:var(--surface)}
.seg.small button{font-size:12px;padding:3px 9px}

.notice{border-radius:16px;padding:12px 14px;background:var(--warn-soft);font-size:14px}

/* ---------- tasks ---------- */
.group{display:flex;flex-direction:column;gap:10px}
.ghead{display:flex;align-items:center;gap:10px}
.ghead h2{flex:1;min-width:0}
.gpaw{width:22px;height:22px;color:var(--sunset);flex:none}
.gcount{font-weight:800;font-size:13px;color:var(--muted);background:var(--surface);border-radius:99px;padding:2px 10px}
.gcount.full{background:var(--ok-soft);color:var(--ok)}
.task{background:var(--surface);border-radius:16px;display:grid;grid-template-columns:auto 1fr;align-items:center;column-gap:10px;padding:4px 6px 4px 12px;border:2px solid transparent;transition:background .3s}
.task[data-state=overdue]{border-color:var(--bad-soft)}
.task.done{background:color-mix(in srgb,var(--ok-soft) 55%,var(--surface))}
.task.done .ttl{color:var(--muted);text-decoration:line-through;text-decoration-color:color-mix(in srgb,var(--muted) 50%,transparent)}
.chk{appearance:none;-webkit-appearance:none;width:26px;height:26px;margin:0;border-radius:50%;border:2.5px solid var(--sea);background:var(--surface);cursor:pointer;display:grid;place-content:center;transition:transform .15s}
.chk:checked{background:var(--ok);border-color:var(--ok)}
.chk:checked::after{content:"";width:11px;height:6px;border:3px solid #fff;border-top:0;border-right:0;transform:rotate(-45deg) translate(1px,-1px)}
.chk:active{transform:scale(.9)}
.rowbtn{font:inherit;color:inherit;text-align:left;background:none;border:0;padding:8px 6px;min-width:0;display:grid;grid-template-columns:1fr auto;align-items:center;gap:4px 10px;cursor:pointer;border-radius:12px}
.ttl{font-weight:700;font-size:15px;line-height:1.3;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.task.open .ttl{-webkit-line-clamp:unset;display:block}
.side{display:flex;align-items:center;gap:6px;color:var(--muted);font-size:12px;font-weight:800;white-space:nowrap}
.cnt{display:inline-flex;align-items:center;gap:3px}
.cnt svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2}
.chev{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.5;transition:transform .2s}
.task.open .chev{transform:rotate(180deg)}
.details{grid-column:1/-1;display:flex;flex-direction:column;gap:10px;padding:2px 6px 12px 36px}
.meta{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;font-size:13px;color:var(--muted)}
.meta input[type=date]{font:inherit;font-size:13px;color:var(--ink);background:var(--bg);border:0;border-radius:10px;padding:4px 8px;max-width:100%}
.pill{font-size:12px;border-radius:99px;padding:2px 9px;font-weight:800;white-space:nowrap}
.pill.plain{background:transparent;color:var(--muted);padding:0}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st{background:var(--surface);border-radius:18px;padding:10px 12px;display:flex;flex-direction:column;align-items:flex-start}
.st b{font-family:var(--f-display);font-size:26px;line-height:1.1}
.st span{font-size:12px;font-weight:800;color:var(--muted)}
.st.left b{color:var(--sea)}.st.okk b{color:var(--ok)}.st.bad b{color:var(--bad)}.st.bad.zero b{color:var(--muted)}
.list{display:flex;flex-direction:column;gap:6px}
.donebox{background:transparent;padding:0;border-radius:0}
.donebox>summary{font-family:var(--f-body);font-size:13px;font-weight:800;color:var(--ok);padding:6px 4px;list-style:none;display:flex;align-items:center;gap:6px}
.donebox>summary::-webkit-details-marker{display:none}
.donebox>summary .chev{width:14px;height:14px}
.donebox[open]>summary .chev{transform:rotate(180deg)}
.donebox>.list{margin-top:4px}
.add input{padding:7px 12px!important;font-size:14px!important}
.add .btn{padding:7px 12px;font-size:14px}
.pill.overdue{background:var(--bad-soft);color:var(--bad)}
.pill.soon{background:var(--warn-soft);color:var(--warn)}
.pill.okp{background:var(--sea-soft);color:var(--sea)}
.pill.donep{background:var(--ok-soft);color:var(--ok)}
.notes{display:flex;flex-direction:column;gap:6px}
.nt{background:var(--bg);border-radius:12px;padding:8px 10px;font-size:14px;display:flex;flex-direction:column;gap:2px}
.nt.mine{background:color-mix(in srgb,var(--sea-soft) 70%,var(--bg))}
.nt .by{font-size:12px;font-weight:800;color:var(--muted);display:flex;gap:8px;align-items:baseline}
.nt .by b{color:var(--sea)}
.nt .by .x{margin-left:auto;font:inherit;font-size:12px;border:0;background:none;color:var(--muted);cursor:pointer;padding:0}
.nt .by .x.armed{color:var(--bad)}
.nt .tx{white-space:pre-wrap;overflow-wrap:anywhere}
.nform{display:flex;gap:6px;align-items:flex-end}
.nform textarea{flex:1;min-width:0;font:inherit;font-size:14px;color:var(--ink);background:transparent;border:2px dashed var(--line);border-radius:12px;padding:6px 10px;resize:none;min-height:36px;max-height:160px}
.nform button{font:inherit;font-size:13px;font-weight:800;border:0;border-radius:12px;padding:8px 12px;background:var(--sea-soft);color:var(--sea);cursor:pointer}
.topbar{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}
.hello{font-weight:700;color:var(--muted);font-size:14px}
.hello button{font:inherit;font-weight:800;color:var(--sea);background:none;border:0;padding:0;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.welcome{position:fixed;inset:0;z-index:70;background:color-mix(in srgb,var(--ink) 45%,transparent);display:grid;place-items:center;padding:max(16px,env(safe-area-inset-left,0px))}
.welcome .card{background:var(--surface);border-radius:26px;padding:26px 22px;max-width:360px;width:100%;display:flex;flex-direction:column;gap:14px;text-align:center}
.welcome .paw{width:40px;height:40px;color:var(--sunset);margin:0 auto}
.welcome .pick{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.welcome .pick button{font:inherit;font-family:var(--f-display);font-weight:700;font-size:18px;border:0;border-radius:18px;padding:16px 8px;cursor:pointer;background:var(--sea-soft);color:var(--sea)}
.welcome .pick button:last-child{background:var(--sunset-soft);color:var(--sunset)}
.del{font:inherit;font-size:12px;border:0;background:none;color:var(--muted);cursor:pointer;padding:2px 4px;margin-left:auto}
.del.armed{color:var(--bad);font-weight:800}
.add{display:flex;gap:8px}
.add input{flex:1;min-width:0;font:inherit;font-size:15px;color:var(--ink);background:transparent;border:2px dashed var(--line);border-radius:14px;padding:9px 12px}
.empty{color:var(--muted);font-size:15px;padding:16px;border:2px dashed var(--line);border-radius:18px}

/* ---------- reference ---------- */
details{background:var(--surface);border-radius:18px;padding:14px 16px}
summary{font-family:var(--f-display);font-weight:700;font-size:15px;cursor:pointer}
details ul,details ol{padding-left:20px;margin:10px 0 0;display:flex;flex-direction:column;gap:6px}
.copyrow{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.mail{font-weight:700;overflow-wrap:anywhere}
.copy{font:inherit;font-size:12px;font-weight:700;border:0;background:var(--sea-soft);color:var(--sea);border-radius:99px;padding:3px 10px;cursor:pointer}
.tbl{overflow-x:auto}
table{border-collapse:collapse;font-size:14px;width:100%}
td,th{border-bottom:1px solid var(--line);padding:7px 8px;text-align:left;vertical-align:top}
.foot{font-size:13px;color:var(--muted);display:flex;gap:14px;flex-wrap:wrap;justify-content:center}

/* ---------- paw confetti ---------- */
.burst{position:fixed;width:18px;height:18px;pointer-events:none;z-index:50;animation:fly .9s ease-out forwards}
@keyframes fly{0%{opacity:1;transform:translate(0,0) scale(.6) rotate(0)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(1.1) rotate(var(--r))}}
.celebrate{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);font-weight:700;border-radius:99px;padding:10px 18px;z-index:60;max-width:calc(100% - 32px);text-align:center;animation:pop 2.6s ease forwards}
@keyframes pop{0%{opacity:0;transform:translate(-50%,12px)}12%,80%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,8px)}}
@media (prefers-reduced-motion:reduce){.burst{display:none}#marker,.route .trail,.bar>i{transition:none}.celebrate{animation:none}}
</style></head><body>
<div class="wrap">

  <div class="topbar">
    <span class="hello" id="hello"></span>
    <span class="seg small" id="theme" role="group" aria-label="Тема оформления">
      <button type="button" data-th="auto">Авто</button><button type="button" data-th="light">Светлая</button><button type="button" data-th="dark">Тёмная</button>
    </span>
  </div>

  <section class="hero" aria-label="До встречи">
    <div class="hrow">
      <div class="count"><span class="big num" id="cdNum">—</span><span class="unit" id="cdUnit">до встречи</span></div>
      <div class="when"><label for="flightDate">Вылет</label><input type="date" id="flightDate"></div>
    </div>
    <div class="journey" aria-label="Прогресс подготовки">
      <div class="scene">${WINTER}<i class="flake" style="left:10px;animation-duration:3.2s;animation-delay:-0.4s;width:4px;height:4px"></i><i class="flake" style="left:28px;animation-duration:4.1s;animation-delay:-2.2s;width:3px;height:3px"></i><i class="flake" style="left:44px;animation-duration:3.6s;animation-delay:-1.1s;width:4px;height:4px"></i><i class="flake" style="left:62px;animation-duration:4.6s;animation-delay:-3.0s;width:3px;height:3px"></i><i class="flake" style="left:80px;animation-duration:3.9s;animation-delay:-0.9s;width:3px;height:3px"></i><i class="flake" style="left:98px;animation-duration:5.0s;animation-delay:-2.6s;width:4px;height:4px"></i><i class="flake" style="left:116px;animation-duration:4.3s;animation-delay:-1.7s;width:3px;height:3px"></i><i class="flake" style="left:132px;animation-duration:5.4s;animation-delay:-3.6s;width:3px;height:3px"></i>${SUMMER}</div>
      <div class="lane" id="lane"><div class="bar"><i id="progressBar"></i></div><div class="runner">${DASHA}${GABI}</div><div class="papa">${ZHENYA}</div></div>
      <div class="ends"><span>Иркутск</span><span>Пхукет</span></div>
    </div>
  </section>

  <div class="stats" aria-label="Сводка">
    <div class="st left"><b class="num" id="stLeft">—</b><span>осталось</span></div>
    <div class="st okk"><b class="num" id="stDone">—</b><span>сделано</span></div>
    <div class="st bad" id="stBadBox"><b class="num" id="stBad">—</b><span>просрочено</span></div>
  </div>

  <div class="row">
    <div class="next" id="next"><span class="lbl">Следующий шаг</span><span class="t" id="nextT">…</span><span class="sub" id="nextD"></span></div>
  </div>

  <div id="status" class="notice" hidden></div>
  <div id="groups" style="display:flex;flex-direction:column;gap:26px">
    <div class="empty">Загружаю список задач…</div>
  </div>

  <section style="display:flex;flex-direction:column;gap:10px" aria-label="Справка">
    <h2>Шпаргалка</h2>
    <details>
      <summary>Что нужно Габи для Таиланда</summary>
      <div class="tbl"><table>
        <tr><th>Что</th><th>Требование</th></tr>
        <tr><td>Чип</td><td>ISO 11784/11785, 15 цифр, номер в ветпаспорте. Прививка от бешенства — после чипирования</td></tr>
        <tr><td>Бешенство</td><td>Не позже чем за 21 день до вылета и не старше 1 года</td></tr>
        <tr><td>Чума, гепатит, парвовирус</td><td>Не позже чем за 21 день до вылета</td></tr>
        <tr><td>Лептоспироз</td><td>За 21+ день до вылета или отрицательный тест за 30 дней</td></tr>
        <tr><td>Паразиты</td><td>Обработка от блох, клещей и глистов перед вылетом</td></tr>
        <tr><td>Переноска</td><td>Закрытая, без выхода носа и лап</td></tr>
      </table></div>
    </details>
    <details>
      <summary>Куда отправлять заявку</summary>
      <ul>
        <li>Рейс прямой Иркутск → Пхукет, поэтому пишем в карантинную службу аэропорта Пхукета. Тема письма: <b>Request an Import Permit</b>.</li>
        <li><div class="copyrow"><span class="mail" id="e1">qshk_hkt@dld.go.th</span><button class="copy" data-copy="e1">Копировать</button></div>Тел. <span class="num">+66 76 351 514</span></li>
        <li>Приложить: форму R1/1, скан паспорта Даши, цветное фото Габи, ветпаспорт (чип и прививки), бронь рейса, адрес в Таиланде.</li>
        <li>Ответ через 3–7 рабочих дней, разрешение действует 60 дней. Для Пхукета одна инструкция просит подавать не позднее чем за 14 дней до прилёта.</li>
      </ul>
    </details>
    <details>
      <summary>Россия: форма №1 и сертификат 5а</summary>
      <ol>
        <li>Форма №1 — в госветклинике (СББЖ) за 3–5 дней до вылета, с ветпаспортом, после обработки от паразитов.</li>
        <li>В день вылета — обмен на сертификат 5а на ветконтроле Россельхознадзора в аэропорту, откуда самолёт уходит за границу.</li>
        <li>С собой в самолёт: распечатка разрешения, оригинал 5а, ветпаспорт, копия паспорта Даши.</li>
      </ol>
    </details>
    <details>
      <summary>Источники</summary>
      <ul>
        <li><a href="https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_(Revised_30Jan2025).pdf" target="_blank" rel="noopener">Инструкция МИД Таиланда: все аэропорты и email</a></li>
        <li><a href="https://www.opsmoac.go.th/moscow-dwl-files-421991791251" target="_blank" rel="noopener">Требования DLD к ввозу собак и кошек</a></li>
        <li><a href="https://www.opsmoac.go.th/dc-news-files-431591791833" target="_blank" rel="noopener">Документы для Пхукета (срок 14 дней)</a></li>
        <li><a href="https://phuket.airportthai.co.th/service/airport-guide/detail/AnimalQuarantineStation_HKT" target="_blank" rel="noopener">Карантинная станция аэропорта Пхукета</a></li>
      </ul>
    </details>
  </section>
  <div class="welcome" id="welcome" hidden>
    <div class="card" role="dialog" aria-modal="true" aria-labelledby="wq">
      <span class="paw">${PAW}</span>
      <h2 id="wq">Кто зашёл?</h2>
      <p class="sub">Ваши галочки и заметки будут подписаны вашим именем. Выбор запомнится на этом устройстве.</p>
      <div class="pick"><button type="button" data-pick="dasha">Даша</button><button type="button" data-pick="evgen">Женя</button></div>
    </div>
  </div>
  <div class="foot"><span id="sync">Синхронизация…</span><a href="/logout">Выйти</a></div>
</div>

<script>
var PAW='${PAW}';
var GROUPS=[["vet","Ветпаспорт и прививки"],["permit","Разрешение Таиланда"],["flight","Перелёт"],["russia","Перед вылетом из России"],["bag","Папка с собой в самолёт"]];
var WHO={dasha:"Даша",evgen:"Женя"};
var MON=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
var state={rev:0,tasks:[],plan:{}},me="",lastDone=-1,drafts={};
try{me=localStorage.getItem("gp_me")||""}catch(e){}
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function $(s){return document.querySelector(s)}
function today(){var d=new Date();d.setHours(0,0,0,0);return d}
function parse(s){if(!s)return null;var p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2])}
function days(s){var d=parse(s);return d?Math.round((d-today())/864e5):null}
function plural(n,a,b,c){n=Math.abs(n)%100;var k=n%10;if(n>10&&n<20)return c;if(k>1&&k<5)return b;if(k==1)return a;return c}
function dd(n){return n+" "+plural(n,"день","дня","дней")}
function when(iso){if(!iso)return"";var d=new Date(iso);if(isNaN(d))return"";var t=today(),dd0=new Date(d);dd0.setHours(0,0,0,0);var diff=Math.round((t-dd0)/864e5);var hm=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");return diff===0?"сегодня "+hm:diff===1?"вчера "+hm:d.getDate()+" "+MON[d.getMonth()]+" "+hm}
function longDate(s){var d=parse(s);return d?d.getDate()+" "+MON[d.getMonth()]:""}
function showStatus(msg){var el=$("#status");el.textContent=msg||"";el.hidden=!msg}

function renderMe(){
  var h=$("#hello");h.innerHTML="";
  if(me){h.appendChild(document.createTextNode("Привет, "+WHO[me]+"! "));var c=document.createElement("button");c.type="button";c.textContent="Это не я";c.addEventListener("click",function(){$("#welcome").hidden=false});h.appendChild(c)}
  $("#welcome").hidden=!!me;
}
document.querySelectorAll("[data-pick]").forEach(function(b){b.addEventListener("click",function(){me=b.dataset.pick;try{localStorage.setItem("gp_me",me)}catch(e){}renderMe();render()})});
var theme="auto";try{theme=localStorage.getItem("gp_theme")||"auto"}catch(e){}
function renderTheme(){
  if(theme==="auto")document.documentElement.removeAttribute("data-theme");else document.documentElement.setAttribute("data-theme",theme);
  document.querySelectorAll("#theme button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.th===theme?"true":"false")});
}
document.querySelectorAll("#theme button").forEach(function(b){b.addEventListener("click",function(){theme=b.dataset.th;try{localStorage.setItem("gp_theme",theme)}catch(e){}renderTheme()})});

var routeLen=0;
function placeMarker(pct){var l=$("#lane");l.style.setProperty("--p",pct.toFixed(3));l.classList.toggle("met",pct>=1)}
function cheerText(pct,overdue){
  var t;
  if(pct>=1)t="Всё готово! Габи летит к Жене.";
  else if(pct>=.75)t="Финишная прямая. Ещё чуть-чуть, и вы вместе.";
  else if(pct>=.5)t="Больше половины позади. Габи уже пакует любимую игрушку.";
  else if(pct>=.25)t="Четверть пути пройдена. Отличный темп!";
  else if(pct>0)t="Первые шаги сделаны. Каждая галочка приближает встречу.";
  else t="Начинаем путь. Каждая галочка приближает встречу.";
  if(overdue>0)t+=" "+(overdue===1?"Одна задача просрочена":"Просроченных задач: "+overdue)+" — они отмечены красным.";
  return t;
}
function renderHero(){
  var fi=$("#flightDate");
  if(document.activeElement!==fi)fi.value=state.plan.flightDate||"";
  var n=days(state.plan.flightDate);
  if(n===null){$("#cdNum").textContent="скоро";$("#cdUnit").textContent="увидимся — выберите дату вылета";}
  else if(n>0){$("#cdNum").textContent=n;$("#cdUnit").textContent=plural(n,"день","дня","дней")+" до встречи"}
  else if(n===0){$("#cdNum").textContent="сегодня";$("#cdUnit").textContent="встречаемся!"}
  else{$("#cdNum").textContent="вместе";$("#cdUnit").textContent=""}
  var t=state.tasks,done=t.filter(function(x){return x.done}).length,pct=t.length?done/t.length:0;
  var overdue=t.filter(function(x){return!x.done&&x.due&&days(x.due)<0}).length;
  $("#progressBar").style.width=(pct*100)+"%";
  $("#stLeft").textContent=t.length-done;$("#stDone").textContent=done;$("#stBad").textContent=overdue;$("#stBadBox").classList.toggle("zero",overdue===0);
  placeMarker(pct);
  var open=t.filter(function(x){return!x.done}).sort(function(a,b){
    if(!!a.due!==!!b.due)return a.due?-1:1;if(a.due!==b.due)return a.due<b.due?-1:1;return(a.order||0)-(b.order||0)});
  var nx=open[0];
  if(!nx){$("#nextT").textContent="Всё сделано. Ура!";$("#nextD").textContent=""}
  else{$("#nextT").textContent=nx.title;var d=days(nx.due);
    $("#nextD").textContent=nx.due?(d<0?"просрочено на "+dd(-d):d===0?"сегодня":"до "+longDate(nx.due)+", осталось "+dd(d)):"без срока"}
  if(lastDone>=0&&t.length&&done===t.length&&lastDone<t.length)celebrate("Все задачи выполнены! Габи готова к полёту.");
  lastDone=done;
}
function stateOf(t){if(t.done||!t.due)return"";var n=days(t.due);if(n<0)return"overdue";if(n<=3)return"soon";return""}

var PRAISE=["Ещё на шаг ближе!","Отлично!","Габи одобряет!","Так держать!","Минус одна задача!","Супер, едем дальше!"];
function burst(x,y){
  if(reduce)return;
  for(var i=0;i<9;i++){var s=document.createElement("span");s.className="burst paw";s.innerHTML=PAW;
    var a=Math.random()*Math.PI*2,r=50+Math.random()*60;
    s.style.left=(x-9)+"px";s.style.top=(y-9)+"px";s.style.color=["var(--sunset)","var(--sea)","var(--sun)"][i%3];
    s.style.setProperty("--dx",(Math.cos(a)*r).toFixed(0)+"px");s.style.setProperty("--dy",(Math.sin(a)*r-30).toFixed(0)+"px");s.style.setProperty("--r",(Math.random()*120-60).toFixed(0)+"deg");
    document.body.appendChild(s);setTimeout(function(el){return function(){el.remove()}}(s),1000)}
}
var celT;
function celebrate(msg){var old=$(".celebrate");if(old)old.remove();clearTimeout(celT);var c=document.createElement("div");c.className="celebrate";c.setAttribute("role","status");c.textContent=msg;document.body.appendChild(c);celT=setTimeout(function(){c.remove()},2700)}

var MS=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];
var openSet={},openDone={};
var CHEV='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
var BUBBLE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';
function shortDue(t){
  if(t.done)return{cls:"donep",txt:"готово"+(t.doneBy&&WHO[t.doneBy]?" · "+WHO[t.doneBy]:"")};
  if(!t.due)return null;var n=days(t.due),d=parse(t.due);
  if(n<0)return{cls:"overdue",txt:"просрочено"};
  if(n===0)return{cls:"soon",txt:"сегодня"};
  if(n<=3)return{cls:"soon",txt:"через "+dd(n)};
  return{cls:"plain",txt:"до "+d.getDate()+" "+MS[d.getMonth()]};
}
function taskEl(t){
  var el=document.createElement("article");el.className="task"+(t.done?" done":"")+(openSet[t.id]?" open":"");
  var st=stateOf(t);if(st)el.dataset.state=st;
  var cb=document.createElement("input");cb.type="checkbox";cb.className="chk";cb.checked=!!t.done;cb.id="c-"+t.id;cb.setAttribute("aria-label","Готово: "+t.title);
  cb.addEventListener("change",function(){
    if(cb.checked){var r=cb.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);celebrate(PRAISE[Math.floor(Math.random()*PRAISE.length)])}
    op({op:"update",id:t.id,patch:{done:cb.checked,doneBy:cb.checked?me:"",doneAt:cb.checked?new Date().toISOString():""}})});
  var rb=document.createElement("button");rb.type="button";rb.className="rowbtn";rb.setAttribute("aria-expanded",openSet[t.id]?"true":"false");
  var ttl=document.createElement("span");ttl.className="ttl";ttl.textContent=t.title;rb.appendChild(ttl);
  var side=document.createElement("span");side.className="side";
  var sd=shortDue(t);if(sd){var p=document.createElement("span");p.className="pill "+sd.cls;p.textContent=sd.txt;side.appendChild(p)}
  var nn=(t.notes||[]).length;if(nn){var c=document.createElement("span");c.className="cnt";c.innerHTML=BUBBLE;c.appendChild(document.createTextNode(nn));c.title="Заметок: "+nn;side.appendChild(c)}
  side.insertAdjacentHTML("beforeend",CHEV);rb.appendChild(side);
  rb.addEventListener("click",function(){if(openSet[t.id])delete openSet[t.id];else openSet[t.id]=1;render()});
  el.appendChild(cb);el.appendChild(rb);
  if(!openSet[t.id])return el;
  var b=document.createElement("div");b.className="details";
  var meta=document.createElement("div");meta.className="meta";
  if(!t.done&&t.due){var n=days(t.due);var q=document.createElement("span");q.className="pill "+(n<0?"overdue":n<=3?"soon":"okp");
    q.textContent=n<0?"просрочено на "+dd(-n):n===0?"сегодня":"осталось "+dd(n);meta.appendChild(q)}
  var dl=document.createElement("label");dl.textContent="срок";dl.htmlFor="d-"+t.id;
  var di=document.createElement("input");di.type="date";di.id="d-"+t.id;di.value=t.due||"";
  di.addEventListener("change",function(){op({op:"update",id:t.id,patch:{due:di.value}})});
  var dw=document.createElement("span");dw.style.cssText="display:inline-flex;align-items:center;gap:6px";dw.appendChild(dl);dw.appendChild(di);meta.appendChild(dw);
  var del=document.createElement("button");del.type="button";del.className="del";del.textContent="Удалить задачу";var armT;
  del.addEventListener("click",function(){if(del.classList.contains("armed")){clearTimeout(armT);op({op:"delete",id:t.id})}else{del.classList.add("armed");del.textContent="Точно удалить?";armT=setTimeout(function(){del.classList.remove("armed");del.textContent="Удалить задачу"},3500)}});
  meta.appendChild(del);b.appendChild(meta);
  var nl=document.createElement("div");nl.className="notes";
  (t.notes||[]).forEach(function(n){
    var d=document.createElement("div");d.className="nt"+(n.by&&n.by===me?" mine":"");
    var by=document.createElement("div");by.className="by";
    var who2=document.createElement("b");who2.textContent=n.by&&WHO[n.by]?WHO[n.by]:"План";by.appendChild(who2);
    var tm=document.createElement("span");tm.textContent=when(n.at);by.appendChild(tm);
    var x=document.createElement("button");x.type="button";x.className="x";x.textContent="удалить";var xt;
    x.addEventListener("click",function(){if(x.classList.contains("armed")){clearTimeout(xt);op({op:"note_del",id:t.id,noteId:n.id})}else{x.classList.add("armed");x.textContent="точно?";xt=setTimeout(function(){x.classList.remove("armed");x.textContent="удалить"},3000)}});
    by.appendChild(x);
    var tx=document.createElement("div");tx.className="tx";tx.textContent=n.text;
    d.appendChild(by);d.appendChild(tx);nl.appendChild(d);
  });
  var nf=document.createElement("form");nf.className="nform";
  var ta=document.createElement("textarea");ta.className="note";ta.id="n-"+t.id;ta.rows=1;ta.placeholder="Написать заметку…";ta.setAttribute("aria-label","Заметка к задаче: "+t.title);
  ta.value=drafts[t.id]||"";
  ta.addEventListener("input",function(){drafts[t.id]=ta.value;ta.style.height="auto";ta.style.height=ta.scrollHeight+"px"});
  var sb=document.createElement("button");sb.type="submit";sb.textContent="Отправить";
  nf.appendChild(ta);nf.appendChild(sb);
  nf.addEventListener("submit",function(e){e.preventDefault();var v=ta.value.trim();if(!v)return;if(!me){$("#welcome").hidden=false;return}ta.value="";delete drafts[t.id];ta.blur();op({op:"note_add",id:t.id,text:v,by:me})});
  nl.appendChild(nf);b.appendChild(nl);el.appendChild(b);
  return el;
}

function busyTyping(){var a=document.activeElement;return a&&(a.classList.contains("note")||(a.id||"").indexOf("add-")===0)}
var pendingRender=false;
function render(){
  renderHero();
  if(busyTyping()){pendingRender=true;return}
  pendingRender=false;
  var root=$("#groups");root.innerHTML="";
  GROUPS.forEach(function(g){
    var list=state.tasks.filter(function(t){return(t.group||"vet")===g[0]}).sort(function(a,b){return(a.order||0)-(b.order||0)});
    var dn=list.filter(function(t){return t.done}).length;
    var sec=document.createElement("section");sec.className="group";
    var h=document.createElement("div");h.className="ghead";
    var pw=document.createElement("span");pw.className="gpaw paw";pw.innerHTML=PAW;
    var h2=document.createElement("h2");h2.textContent=g[1];
    var c=document.createElement("span");c.className="gcount num"+(list.length&&dn===list.length?" full":"");c.textContent=dn+" / "+list.length;
    h.appendChild(pw);h.appendChild(h2);h.appendChild(c);sec.appendChild(h);
    var todo=list.filter(function(t){return!t.done}),fin=list.filter(function(t){return t.done});
    var ul=document.createElement("div");ul.className="list";todo.forEach(function(t){ul.appendChild(taskEl(t))});sec.appendChild(ul);
    if(fin.length){var db=document.createElement("details");db.className="donebox";if(openDone[g[0]])db.open=true;
      var sm=document.createElement("summary");sm.innerHTML=CHEV;sm.insertBefore(document.createTextNode("Сделано · "+fin.length),sm.firstChild);db.appendChild(sm);
      var dl2=document.createElement("div");dl2.className="list";fin.forEach(function(t){dl2.appendChild(taskEl(t))});db.appendChild(dl2);
      db.addEventListener("toggle",function(){if(db.open)openDone[g[0]]=1;else delete openDone[g[0]]});
      sec.appendChild(db)}
    var f=document.createElement("form");f.className="add";
    var i=document.createElement("input");i.id="add-"+g[0];i.placeholder="+ добавить задачу";i.setAttribute("aria-label","Новая задача: "+g[1]);
    var btn=document.createElement("button");btn.className="btn";btn.textContent="Добавить";
    f.appendChild(i);f.appendChild(btn);
    f.addEventListener("submit",function(e){e.preventDefault();var v=i.value.trim();if(!v)return;i.value="";i.blur();op({op:"add",task:{title:v,group:g[0]}})});
    sec.appendChild(f);root.appendChild(sec);
  });
}
document.addEventListener("focusout",function(){setTimeout(function(){if(pendingRender&&!busyTyping())render()},0)});

function setState(s){if(s&&s.tasks){state=s;if(!state.plan)state.plan={};render()}}
function stamp(){var d=new Date();$("#sync").textContent="Обновлено в "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}

function op(body){
  return fetch("/api/op",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)})
    .then(function(r){if(r.status===401){location.reload();return null}return r.json()})
    .then(function(j){if(!j)return;if(j.error){showStatus("Не удалось сохранить, попробуйте ещё раз.");setState(j.state)}else{showStatus("");setState(j);stamp()}})
    .catch(function(){showStatus("Нет связи. Изменение не сохранилось — проверьте интернет.")});
}
function poll(){
  if(document.hidden)return;
  fetch("/api/state",{cache:"no-store"}).then(function(r){if(r.status===401){location.reload();return null}return r.json()})
    .then(function(j){if(!j)return;showStatus("");if(j.rev!==state.rev)setState(j);stamp()})
    .catch(function(){$("#sync").textContent="Нет связи, пробую снова…"});
}
$("#flightDate").addEventListener("change",function(e){op({op:"plan",patch:{flightDate:e.target.value}})});
document.addEventListener("click",function(e){
  var b=e.target.closest(".copy");if(!b)return;var src=document.getElementById(b.dataset.copy);
  var done=function(t){b.textContent=t;setTimeout(function(){b.textContent="Копировать"},1600)};
  if(navigator.clipboard)navigator.clipboard.writeText(src.textContent).then(function(){done("Скопировано")},function(){done("Не вышло")});
});
document.addEventListener("visibilitychange",poll);
renderTheme();renderMe();renderHero();poll();setInterval(poll,5000);
</script></body></html>`;
