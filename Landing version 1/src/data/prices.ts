export type PriceItem = {
  id: string;
  name: string;
  price: string;
  desc?: string;
};

export type PriceCategory = {
  id: string;
  category: string;
  items: PriceItem[];
};

export const prices: PriceCategory[] = [
  {
    id: "mens-haircuts",
    category: "МУЖСКИЕ СТРИЖКИ",
    items: [
      { id: "poh", name: "«Пох»", price: "400 ₽", desc: "1 насадка • без мытья" },
      { id: "short-sides", name: "Бока короче / верх длиннее", price: "500 ₽", desc: "Насадки • мытье • укладка" },
      { id: "classic", name: "Классика", price: "600 ₽", desc: "Верх ножницами • мытье • укладка" },
      { id: "stylish", name: "Стильно", price: "800 ₽", desc: "Фейд • мытье • укладка" },
      { id: "make-it-nice", name: "«Сделай красиво»", price: "1000 ₽", desc: "Сложный фейд • мытье • укладка" },
    ],
  },
  {
    id: "beard-and-shave",
    category: "БОРОДА & БРИТЬЕ",
    items: [
      { id: "beard", name: "Борода", price: "500 ₽", desc: "Коррекция формы" },
      { id: "royal-shave", name: "Королевское бритье", price: "800 ₽", desc: "Опасная бритва • распаривание" },
      { id: "blade-trim", name: "Окантовка лезвием", price: "0 ₽", desc: "ВСЕГДА БОНУСОМ" },
    ],
  },
  {
    id: "kids",
    category: "ДЕТИ (ДО 14 ЛЕТ)",
    items: [
      { id: "schoolboy", name: "Школьник", price: "600 ₽", desc: "6-14 лет" },
      { id: "tough-kid", name: "Трудный ребенок", price: "1000 ₽", desc: "0-5 лет • особый подход" },
    ],
  },
  {
    id: "details-and-care",
    category: "ДЕТАЛИ & УХОД",
    items: [
      { id: "wax-full", name: "Воск «под ключ»", price: "500 ₽", desc: "Нос • уши • межбровье" },
      { id: "wax-zone", name: "Воск одной зоны", price: "200 ₽" },
      { id: "eyebrows", name: "Брови", price: "100 ₽", desc: "Коррекция" },
      { id: "peeling", name: "Пилинг головы", price: "200 ₽", desc: "Очищение кожи" },
      { id: "perm", name: "Биозавивка / Химия", price: "1500 ₽", desc: "Без стрижки и мытья" },
      { id: "coloring", name: "Окрашивание", price: "от 1500 ₽", desc: "По длине" },
    ],
  },
];
