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

export const haircutPriceNote =
  "В стоимость мужских и детских стрижек входит мытьё головы и укладка.";

export const prices: PriceCategory[] = [
  {
    id: "mens-haircuts",
    category: "МУЖСКИЕ СТРИЖКИ",
    items: [
      { id: "machine", name: "Машина", price: "400 ₽", desc: "Одна насадка / машинкой" },
      { id: "classic-short", name: "Классика", price: "600 ₽", desc: "Бока короче" },
      { id: "classic-fade", name: "Классика", price: "800 ₽", desc: "Верх длиннее / фейд" },
      { id: "trend", name: "Стильно / Тренд", price: "1000 ₽", desc: "Фейд с нуля" },
      { id: "long", name: "Удлинённая", price: "1200 ₽", desc: "Ножницами" },
      {
        id: "turnkey",
        name: "Под ключ",
        price: "2000 ₽",
        desc: "Стрижка + борода + воск все зоны + патчи",
      },
    ],
  },
  {
    id: "beard-and-shave",
    category: "БОРОДА / БРИТЬЁ",
    items: [
      { id: "machine-shave", name: "Бритьё машинкой", price: "400 ₽", desc: "Под одну насадку" },
      { id: "beard-modeling", name: "Моделирование бороды", price: "600 ₽", desc: "С окантовкой лезвием" },
      { id: "royal-shave", name: "Королевское бритьё", price: "800 ₽", desc: "С распариванием и лезвием" },
      { id: "mustache", name: "Оформление усов", price: "200 ₽" },
    ],
  },
  {
    id: "kids",
    category: "ДЕТСКИЕ СТРИЖКИ",
    items: [
      { id: "tough-kid", name: "Трудный ребёнок", price: "1000 ₽", desc: "От 0 до 5 лет, неусидчивые дети" },
      { id: "kids-classic", name: "Детская классика", price: "600 ₽" },
      { id: "kids-fade", name: "Детский фейд", price: "800 ₽" },
      { id: "kids-trend", name: "Детская стильно / тренд", price: "1000 ₽" },
    ],
  },
  {
    id: "details-and-care",
    category: "ТЮНИНГ",
    items: [
      { id: "wax-zone", name: "Ваксинг", price: "200 ₽", desc: "1 зона" },
      { id: "wax-full", name: "Ваксинг под ключ", price: "500 ₽" },
      { id: "eyebrows", name: "Брови", price: "100 ₽", desc: "Подровнять" },
      { id: "eyebrow-wax", name: "Брови", price: "250 ₽", desc: "Коррекция воском" },
      { id: "part", name: "Пробор", price: "100 ₽" },
      { id: "hair-tattoo", name: "Hair Tattoo", price: "300 ₽" },
      { id: "head-wash", name: "Мытьё головы", price: "200 ₽", desc: "Дополнительно" },
      { id: "patches", name: "Патчи", price: "200 ₽" },
      { id: "peeling", name: "Пилинг головы / лица", price: "200 ₽" },
      { id: "mask", name: "Маска", price: "500 ₽" },
      { id: "max-care", name: "Максималка", price: "700 ₽", desc: "Маска + патчи" },
    ],
  },
  {
    id: "chemistry-and-curls",
    category: "ХИМИЯ",
    items: [
      { id: "stile-curls-short", name: "Кудри Stile", price: "2500 ₽", desc: "Короткие волосы" },
      { id: "stile-curls-long", name: "Кудри Stile", price: "3000 ₽", desc: "Длинные волосы" },
    ],
  },
  {
    id: "coloring",
    category: "ОКРАШИВАНИЕ",
    items: [
      { id: "beard-camouflage", name: "Камуфляж бороды", price: "1000 ₽" },
      { id: "gray-camouflage", name: "Камуфляж седины головы", price: "1000 ₽" },
      { id: "bleached-toning", name: "Тонирование осветлённых волос", price: "1000 ₽" },
      { id: "bleach", name: "Осветление волос", price: "1500 ₽" },
      { id: "full-color", name: "Окрашивание волос", price: "1500-2000 ₽", desc: "По длине" },
    ],
  },
];
