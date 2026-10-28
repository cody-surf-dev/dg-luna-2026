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
];
