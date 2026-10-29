// One-time data changes applied to the live store. Each runs once; its id is remembered in state.applied.
const note = (text) => ({ id: "n" + Math.random().toString(36).slice(2, 9), by: "", text, at: new Date().toISOString() });

export const MIGRATIONS = [
  {
    id: "2026-10-28-direct-flight",
    run(s) {
      // Route decided: direct Irkutsk → Phuket. Drop the "decide route" task.
      s.tasks = s.tasks.filter(t => t.id !== "t04");
      const t13 = s.tasks.find(t => t.id === "t13");
      if (t13) t13.title = "Перенести билеты на новую дату (дата пока не решена)";
      const t10 = s.tasks.find(t => t.id === "t10");
      if (t10) (t10.notes = t10.notes || []).push(note("Рейс прямой Иркутск → Пхукет, поэтому письмо — в карантинную службу Пхукета: qshk_hkt@dld.go.th"));
    },
  },
  {
    id: "2026-10-29-vet-passport",
    run(s) {
      // Vet passport photos received. No chip number or names here: this repo is public.
      const find = id => s.tasks.find(t => t.id === id);
      const push = (t, text) => { if (t) (t.notes = t.notes || []).push(note(text)); };
      const t01 = find("t01");
      if (t01) {
        t01.title = "Первые прививки после чипа";
        t01.done = true; t01.doneAt = "2026-10-29T06:00:00Z";
        push(t01, "29.10 сделаны Астерион DHPPI (чума, гепатит, парвовирус, парагрипп) и Астерион LR (бешенство + лептоспироз). Бешенство — на следующий день после чипа, как и нужно. Записано в паспорте в разделе «Вакцинация против бешенства».");
      }
      push(find("t02"), "Проверено по фото 29.10: чип 15 цифр (стандарт ISO), вживлён 28.10.2026 в левую лопатку, номер вклеен в паспорт и во вкладыш. Владелец во вкладыше — Даша.");
      const order = (find("t01") || {}).order || 10;
      if (!s.tasks.some(t => t.id === "t23")) s.tasks.push({
        id: "t23", group: "vet", order: order + 5, done: false, who: "",
        title: "Ревакцинация (второй укол) — по записи в паспорте 18–25 ноября",
        due: "2026-11-18",
        notes: [note("Лучше поставить в первый день окна, 18 ноября: от второго укола отсчитывают 21 день, и тогда заявку можно подать к 10 декабря. Если поставить 25-го, отсчёт закончится только 16 декабря.")],
      });
      push(find("t05"), "Вопрос на будущее: по правилам Таиланда бешенство нужно минимум за 21 день до вылета — от укола 29.10 это 19 ноября. Спросить, можно ли подать заявку уже после 19 ноября, не дожидаясь 21 дня после ревакцинации.");
    },
  },
  {
    id: "2026-10-29-aqs-reply",
    run(s) {
      const find = id => s.tasks.find(t => t.id === id);
      const push = (t, text) => { if (t) (t.notes = t.notes || []).push(note(text)); };
      const t05 = find("t05");
      if (t05) { t05.done = true; t05.doneBy = "dasha"; t05.doneAt = "2026-10-29T10:14:00Z";
        push(t05, "29.10 карантинная служба Пхукета ответила: заполнить форму R.1/1 и прислать фото билета. Ждать 21 день после второго укола не просят."); }
      push(find("t06"), "Бланк R.1/1 пришёл в ответном письме карантинной службы 29.10 (файл «แบบ ร-1-1.pdf»).");
      const t13 = find("t13");
      if (t13) { t13.due = "2026-11-05"; push(t13, "Сначала перенести билет: карантинная служба просит фото билета, и разрешение будет выписано на эту дату."); }
    },
  },
];
