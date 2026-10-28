// Initial tasks, copied from the claude.ai tracker on 2026-10-28.
export const SEED = {
 "tasks": [
  {
   "id": "t01",
   "title": "Уточнить дату второй прививки и что в неё входит (бешенство, чума, гепатит, парвовирус, лептоспироз)",
   "group": "vet",
   "due": "2026-11-20",
   "done": false,
   "who": "dasha",
   "note": "Чип поставлен только 28 октября. Прививка от бешенства должна быть сделана после чипирования, с номером чипа в паспорте. Если бешенство кололи раньше — уточнить у ветеринара, засчитается ли.",
   "order": 10,
   "doneBy": ""
  },
  {
   "id": "t02",
   "title": "Проверить номер чипа в ветпаспорте: ISO, 15 цифр, совпадает со сканом",
   "group": "vet",
   "due": "2026-11-20",
   "done": true,
   "who": "dasha",
   "note": "Чип поставлен 28 октября. Проверить, что номер вписан в ветпаспорт.",
   "order": 20,
   "doneAt": "2026-10-28T06:00:00Z",
   "doneBy": ""
  },
  {
   "id": "t03",
   "title": "Обработка от блох, клещей и глистов, запись в паспорт",
   "group": "vet",
   "due": "",
   "done": false,
   "who": "dasha",
   "note": "За несколько дней до вылета, до формы №1",
   "order": 30,
   "doneBy": ""
  },
  {
   "id": "t04",
   "title": "Решить маршрут: прямой рейс в Пхукет или через Бангкок",
   "group": "permit",
   "due": "2026-11-15",
   "done": false,
   "who": "",
   "note": "От этого зависит, на какой email писать",
   "order": 40,
   "doneBy": ""
  },
  {
   "id": "t05",
   "title": "Спросить карантинную службу: можно ли подать заявку до 10 декабря",
   "group": "permit",
   "due": "2026-11-10",
   "done": false,
   "who": "evgen",
   "note": "",
   "order": 50,
   "doneBy": ""
  },
  {
   "id": "t06",
   "title": "Заполнить форму R1/1",
   "group": "permit",
   "due": "2026-12-05",
   "done": false,
   "who": "",
   "note": "",
   "order": 60,
   "doneBy": ""
  },
  {
   "id": "t07",
   "title": "Скан страницы паспорта Даши с фото",
   "group": "permit",
   "due": "2026-12-05",
   "done": false,
   "who": "dasha",
   "note": "",
   "order": 70,
   "doneBy": ""
  },
  {
   "id": "t08",
   "title": "Цветное фото Габи, морда хорошо видна",
   "group": "permit",
   "due": "2026-12-05",
   "done": false,
   "who": "dasha",
   "note": "",
   "order": 80,
   "doneBy": ""
  },
  {
   "id": "t09",
   "title": "Сканы ветпаспорта: чип, все прививки и обработки",
   "group": "permit",
   "due": "2026-12-08",
   "done": false,
   "who": "dasha",
   "note": "",
   "order": 90,
   "doneBy": ""
  },
  {
   "id": "t10",
   "title": "Отправить заявку на email карантинной службы",
   "group": "permit",
   "due": "2026-12-10",
   "done": false,
   "who": "",
   "note": "Тема: Request an Import Permit",
   "order": 100,
   "doneBy": ""
  },
  {
   "id": "t11",
   "title": "Позвонить и убедиться, что письмо получено",
   "group": "permit",
   "due": "2026-12-11",
   "done": false,
   "who": "evgen",
   "note": "",
   "order": 110,
   "doneBy": ""
  },
  {
   "id": "t12",
   "title": "Разрешение получено и распечатано",
   "group": "permit",
   "due": "2026-12-21",
   "done": false,
   "who": "",
   "note": "",
   "order": 120,
   "doneBy": ""
  },
  {
   "id": "t13",
   "title": "Перенести билеты (сейчас на середину ноября) на дату после получения разрешения",
   "group": "flight",
   "due": "2026-12-08",
   "done": false,
   "who": "",
   "note": "Вылет не раньше ~24 декабря, если заявку подаём 10-го. Узнать условия и цену переноса.",
   "order": 130,
   "doneBy": ""
  },
  {
   "id": "t14",
   "title": "Место для Габи в салоне",
   "group": "flight",
   "due": "2026-12-08",
   "done": true,
   "who": "",
   "note": "Выкуплено отдельное кресло рядом с Дашей. При переносе билетов проверить, что место Габи тоже переносится.",
   "order": 140,
   "doneAt": "2026-10-28T06:00:00Z",
   "doneBy": ""
  },
  {
   "id": "t15",
   "title": "Проверить переноску по весу и габаритам авиакомпании",
   "group": "flight",
   "due": "2026-12-08",
   "done": true,
   "who": "dasha",
   "note": "Даша проверила, переноска подходит.",
   "order": 150,
   "doneAt": "2026-10-28T06:00:00Z",
   "doneBy": ""
  },
  {
   "id": "t16",
   "title": "Узнать часы работы ветконтроля в аэропорту вылета",
   "group": "russia",
   "due": "2026-12-15",
   "done": false,
   "who": "",
   "note": "",
   "order": 160,
   "doneBy": ""
  },
  {
   "id": "t17",
   "title": "Форма №1 в госветклинике (СББЖ)",
   "group": "russia",
   "due": "",
   "done": false,
   "who": "dasha",
   "note": "За 3–5 дней до вылета",
   "order": 170,
   "doneBy": ""
  },
  {
   "id": "t18",
   "title": "Сертификат 5а на ветконтроле в аэропорту",
   "group": "russia",
   "due": "",
   "done": false,
   "who": "dasha",
   "note": "В день вылета, приехать с запасом",
   "order": 180,
   "doneBy": ""
  },
  {
   "id": "t19",
   "title": "Распечатка разрешения на ввоз",
   "group": "bag",
   "due": "",
   "done": false,
   "who": "",
   "note": "",
   "order": 190,
   "doneBy": ""
  },
  {
   "id": "t20",
   "title": "Оригинал сертификата 5а",
   "group": "bag",
   "due": "",
   "done": false,
   "who": "",
   "note": "",
   "order": 200,
   "doneBy": ""
  },
  {
   "id": "t21",
   "title": "Ветпаспорт",
   "group": "bag",
   "due": "",
   "done": false,
   "who": "",
   "note": "",
   "order": 210,
   "doneBy": ""
  },
  {
   "id": "t22",
   "title": "Копия паспорта Даши",
   "group": "bag",
   "due": "",
   "done": false,
   "who": "",
   "note": "",
   "order": 220,
   "doneBy": ""
  }
 ],
 "plan": {"flightDate": "2026-12-25"}
};
