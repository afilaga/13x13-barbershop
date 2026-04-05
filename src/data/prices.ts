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
      { id: "poh", name: "«Пох»", price: "400 ₽", desc: "Под 1 насадку / машинкой" },
      { id: "classic", name: "«Классика»", price: "600 ₽", desc: "Бока короче / верх длиннее • мытье • укладка" },
      { id: "stylish", name: "«Стильно»", price: "800 ₽", desc: "Фейд с 0 • мытье • укладка" },
      { id: "long", name: "«Удлиненная»", price: "1000 ₽", desc: "Полностью ножницами • мытье • укладка" },
    ],
  },
  {
    id: "beard-and-shave",
    category: "БОРОДА & БРИТЬЕ",
    items: [
      { id: "beard-modeling", name: "Моделирование бороды", price: "600 ₽", desc: "С окантовкой лезвием" },
      { id: "machine-shave", name: "Бритьё", price: "400 ₽", desc: "Машинкой" },
      { id: "royal-shave", name: "Королевское бритье", price: "800 ₽", desc: "Опасная бритва • распаривание" },
      { id: "mustache", name: "Оформление усов", price: "200 ₽" },
    ],
  },
  {
    id: "kids",
    category: "ДЕТСКИЕ СТРИЖКИ",
    items: [
      { id: "tough-kid", name: "Трудный ребёнок", price: "1000 ₽", desc: "0-5 лет • особый подход" },
      { id: "schoolboy", name: "Школьник", price: "600 ₽", desc: "Мытье • укладка" },
      { id: "teen", name: "Подросток", price: "800 ₽", desc: "От 12 лет и выше" },
    ],
  },
  {
    id: "details-and-care",
    category: "ДЕТАЛИ & УХОД",
    items: [
      { id: "head-wash", name: "Мытьё головы", price: "200 ₽" },
      { id: "part", name: "Пробор", price: "100 ₽" },
      { id: "hair-tattoo", name: "Hair tattoo", price: "300 ₽" },
      { id: "eyebrows", name: "Брови", price: "100 ₽" },
      { id: "eyebrow-wax", name: "Коррекция бровей воском", price: "250 ₽" },
      { id: "wax-zone", name: "Воск (1 зона)", price: "200 ₽" },
      { id: "wax-full", name: "Воск «под ключ»", price: "500 ₽", desc: "Нос • уши • межбровье" },
      { id: "pro-view", name: "Уход «Pro-взгляд»", price: "200 ₽", desc: "Патчи" },
      { id: "peeling", name: "Пилинг головы / лица", price: "200 ₽" },
      { id: "face-control", name: "Уход «Фейс контроль»", price: "500 ₽", desc: "Альгинатная или тканевая маска" },
      { id: "max-care", name: "Уход «На максималках»", price: "700 ₽", desc: "Маска + патчи" },
    ],
  },
];
