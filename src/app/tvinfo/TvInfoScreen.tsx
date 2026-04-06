"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, MapPin, Scissors, ShieldAlert } from "lucide-react";
import BootScreen from "@/components/BootScreen";
import { prices } from "@/data/prices";

const GradientBlinds = dynamic(() => import("@/components/GradientBlinds"), { ssr: false });

const SCENES = ["logo", "hero", "philosophy", "prices", "extras", "booking", "lounge"] as const;
type SceneId = (typeof SCENES)[number];

const TV_NOTES = [
  "СОЧИ. ГОРЬКОГО, 81А.",
  "ЧЕСТНЫЕ ЦЕНЫ. БЕЗ ПЕРЕПЛАТ.",
  "СТРИЖКА ОТ 400 РУБЛЕЙ.",
  "НЕ ЗАБУДЬТЕ СПРОСИТЬ ПРО ДОП УСЛУГИ.",
  "ПАТЧИ, ВОСК, ПИЛИНГ, БРОВИ — ВСЁ ЕСТЬ.",
  "13X13. МУЖСКОЙ КЛУБ.",
  "У НАС ЕСТЬ ОНЛАЙН ЗАПИСЬ.",
  "ПОДПИСЫВАЙТЕСЬ НА НАШИ СОЦ СЕТИ.",
  "SEGA, NINTENDO, APPLE II И ТАМАГОЧИ В ЗОНЕ ОЖИДАНИЯ.",
  "ХОТИТЕ КОФЕ? СПРАВА КОФЕЙНЫЙ АППАРАТ.",
];

const PHILOSOPHY_CARDS = [
  {
    icon: Scissors,
    title: "ОСТАВИЛИ ГЛАВНОЕ",
    desc: "Сильный сервис, опытные мастера, качественные материалы и полностью понятная честная цена.",
  },
  {
    icon: ShieldAlert,
    title: "БЕЗ ПЕРЕПЛАТ ЗА ВОЗДУХ",
    desc: "Никаких приставок, бесплатного алкоголя, включённого кофе и искусственно раздутой барбер-атмосферы.",
  },
  {
    icon: Clock3,
    title: "УМНЫЙ РАСХОД",
    desc: "Вместо одной стрижки за 5000 ₽ — 2-3 визита к нам. Тот же уровень профессионального сервиса без переплаты за люкс.",
  },
];

const PRICE_CATEGORY_ORDER = [
  "mens-haircuts",
  "beard-and-shave",
  "kids",
  "details-and-care",
] as const;

const DEMO_RELOAD_MIN_MS = 1000 * 60 * 12;
const DEMO_RELOAD_MAX_MS = 1000 * 60 * 22;
const SLIDE_DURATION_MS = 20000;
const PRICE_ROTATION_MS = 20000;

const randomMs = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function pickDifferent<T>(arr: readonly T[], current: T): T {
  if (arr.length <= 1) return current;
  const filtered = arr.filter((item) => item !== current);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function getNextScene(scene: SceneId): SceneId {
  const index = SCENES.indexOf(scene);
  return SCENES[(index + 1) % SCENES.length];
}

function getSceneDuration(scene: SceneId): number {
  if (scene === "prices") return PRICE_ROTATION_MS * PRICE_CATEGORY_ORDER.length + 1500;
  return SLIDE_DURATION_MS;
}

export default function TvInfoScreen() {
  const [activeScene, setActiveScene] = useState<SceneId>("hero");
  const [activeTicker, setActiveTicker] = useState<string>(TV_NOTES[0]);
  const [activePriceIndex, setActivePriceIndex] = useState(0);
  const [isBooting, setIsBooting] = useState(true);
  const [bootCycle, setBootCycle] = useState(0);
  const [timeLabel, setTimeLabel] = useState("--:--:--");

  const orderedPriceCategories = useMemo(
    () =>
      PRICE_CATEGORY_ORDER.map((id) => prices.find((category) => category.id === id)).filter(
        (category): category is (typeof prices)[number] => Boolean(category)
      ),
    []
  );

  const activeCategory =
    orderedPriceCategories[activePriceIndex % Math.max(orderedPriceCategories.length, 1)] ??
    orderedPriceCategories[0];
  const isDenseCategory = (activeCategory?.items.length ?? 0) > 8;

  useEffect(() => {
    const updateTime = () => setTimeLabel(new Date().toLocaleTimeString("ru-RU"));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isBooting) return;
    const timer = window.setInterval(() => {
      setActiveTicker((prev) => pickDifferent(TV_NOTES, prev));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [isBooting]);

  useEffect(() => {
    if (isBooting) return;
    const timeout = window.setTimeout(() => {
      const nextScene = getNextScene(activeScene);
      if (nextScene === "prices") {
        setActivePriceIndex(0);
      }
      setActiveScene(nextScene);
    }, getSceneDuration(activeScene));
    return () => window.clearTimeout(timeout);
  }, [activeScene, isBooting]);

  useEffect(() => {
    if (isBooting || activeScene !== "prices" || orderedPriceCategories.length <= 1) return;
    const interval = window.setInterval(() => {
      setActivePriceIndex((prev) => (prev + 1) % orderedPriceCategories.length);
    }, PRICE_ROTATION_MS);
    return () => window.clearInterval(interval);
  }, [activeScene, isBooting, orderedPriceCategories.length]);

  useEffect(() => {
    if (isBooting) return;
    const timeout = window.setTimeout(() => {
      setBootCycle((prev) => prev + 1);
      setIsBooting(true);
      setActiveScene("logo");
    }, randomMs(130000, 190000));
    return () => window.clearTimeout(timeout);
  }, [isBooting, activeScene]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.reload();
    }, randomMs(DEMO_RELOAD_MIN_MS, DEMO_RELOAD_MAX_MS));
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white uppercase selection:bg-white selection:text-black">
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen">
        <GradientBlinds
          className="absolute inset-0"
          dpr={1}
          gradientColors={["#070707", "#1100ff", "#ff0000", "#070707"]}
          angle={-75}
          noise={0.58}
          blindCount={50}
          blindMinWidth={50}
          mouseDampening={0}
          mirrorGradient={false}
          spotlightRadius={0.7}
          spotlightSoftness={0.7}
          spotlightOpacity={1}
          distortAmount={1}
          shineDirection="left"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.1),transparent_36%),radial-gradient(circle_at_72%_72%,rgba(225,6,0,0.18),transparent_42%),linear-gradient(135deg,rgba(0,0,0,0.18),rgba(0,0,0,0.78))]" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="border-b-2 border-white/35 px-8 py-5">
          <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6">
            <Image
              src="/logo_white.webp"
              alt="13x13"
              width={220}
              height={110}
              className="block h-[58px] w-auto mix-blend-lighten"
              priority
            />

            <div className="flex items-center gap-4">
              <div className="rounded-none border border-white/35 bg-black/55 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold tracking-[0.14em] text-neutral-300">
                <MapPin className="mr-2 inline h-4 w-4 align-[-2px]" />
                СОЧИ • ГОРЬКОГО 81А
              </div>
              <div className="rounded-none border border-white/35 bg-black/55 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold tracking-[0.14em] text-neutral-300">
                <Clock3 className="mr-2 inline h-4 w-4 align-[-2px]" />
                {timeLabel}
              </div>
            </div>
          </div>
        </header>

        <section className="relative mx-auto flex w-full max-w-[1920px] flex-1 flex-col px-8 pb-24 pt-8">
          <AnimatePresence mode="wait">
            {activeScene === "logo" && (
              <motion.div
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="flex h-full items-center justify-center"
              >
                <Image
                  src="/logo_white.webp"
                  alt="13x13"
                  width={960}
                  height={960}
                  className="block h-auto w-[560px] mix-blend-lighten"
                  priority
                />
              </motion.div>
            )}

            {activeScene === "hero" && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-8 items-end"
              >
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="mb-5 w-fit bg-red-600 px-8 py-3 font-[family-name:var(--font-oswald)] text-4xl font-black tracking-[0.14em] text-white brutal-border border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    ДОБРО ПОЖАЛОВАТЬ!
                  </div>

                  <div className="mb-10 flex items-center gap-10">
                    <div className="flex shrink-0 flex-col items-start">
                      <Image
                        src="/logo_white.webp"
                        alt="13x13"
                        width={620}
                        height={620}
                        className="block h-auto w-[420px] mix-blend-lighten"
                        priority
                      />
                      <div className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-lg tracking-[0.28em] text-neutral-300">
                        ЧЕСТНЫЕ ЦЕНЫ
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="w-fit bg-black px-8 py-4 font-[family-name:var(--font-oswald)] text-[5.5rem] leading-[0.8] font-black tracking-tighter text-white brutal-border border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                        БАРБЕРШОП
                      </div>
                      <div className="ml-8 w-fit bg-white px-8 py-4 font-[family-name:var(--font-oswald)] text-[5.5rem] leading-[0.8] font-black tracking-tighter text-black brutal-border border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                        В СОЧИ
                      </div>
                    </div>
                  </div>

                  <div className="max-w-5xl font-[family-name:var(--font-jetbrains-mono)] text-[1.75rem] font-medium leading-relaxed text-white">
                    <div className="mb-3 inline-block border-b-4 border-white bg-black px-4 py-3 font-bold">
                      Новый барбершоп в Сочи с честными ценами.
                    </div>
                    <div className="mb-4 w-fit border-b-2 border-dotted border-white/50 px-3 py-2 text-neutral-200">
                      Находимся на Горького 81а, напротив клуба DDX.
                    </div>
                    <div className="text-neutral-300">Мы ценим ваше время и бережём бюджет.</div>
                  </div>
                </div>

                <div className="col-span-4 flex flex-col gap-6">
                  <div className="bg-black/90 p-8 brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[3.5rem] leading-[0.88] font-black tracking-tight text-white">
                      СТРИЖКА ОТ 400 РУБЛЕЙ
                    </div>
                    <div className="mt-3 font-[family-name:var(--font-oswald)] text-[3.5rem] leading-[0.88] font-black tracking-tight text-white">
                      БОРОДА ОТ 400 РУБЛЕЙ
                    </div>
                  </div>

                  <div className="bg-black/90 p-6 brutal-border border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-2xl font-black tracking-[0.14em] text-neutral-400">
                      ЛОКАЦИЯ
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-oswald)] text-4xl font-black leading-tight text-white">
                      ГОРЬКОГО, 81А
                      <br />
                      НАПРОТИВ DDX
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScene === "philosophy" && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="flex h-full flex-col"
              >
                <div className="mb-8 font-[family-name:var(--font-oswald)] text-[5.5rem] leading-none font-black tracking-tighter text-white">
                  ФИЛОСОФИЯ <span className="block text-red-600">БРЕНДА</span>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-12 font-[family-name:var(--font-jetbrains-mono)] text-[1.4rem] leading-tight">
                  <div className="space-y-6 font-bold text-white">
                    <p>Наш клиент — человек, который понимает ценность денег. Он не ищет самое дешёвое, но и не готов переплачивать за имя, тренды и маркетинг.</p>
                    <p className="text-red-500">13x13 — это барбершоп для тех, кто устал платить 5000 рублей за стрижку, понимая, что половина этой суммы — это бренд, интерьер и навязанные «бонусы».</p>
                  </div>
                  <div className="space-y-6 text-neutral-300">
                    <p>Он знает, что высокая цена не всегда равна высокому качеству. И выбирает осознанно. Мы убрали всё лишнее и оставили главное.</p>
                    <p>Он не пойдёт в дешёвую парикмахерскую. Но и не видит смысла в завышенных ценах. Для него оптимум — это разумная стоимость и стабильное качество.</p>
                    <p className="bg-red-600 p-4 font-bold text-white brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                      13X13 — ЭТО ПРО ОСОЗНАННЫЙ ВЫБОР. ПРО СТИЛЬ БЕЗ ПЕРЕПЛАТЫ. ПРО СЕРВИС, КОТОРЫЙ СТОИТ СВОИХ ДЕНЕГ.
                    </p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-3 gap-5">
                  {PHILOSOPHY_CARDS.map((card) => {
                    const Icon = card.icon;

                    return (
                      <div
                        key={card.title}
                        className="flex h-full flex-col bg-black p-6 text-white brutal-border border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                      >
                        <Icon className="mb-4 h-11 w-11 text-white" strokeWidth={1.6} />
                        <h3 className="font-[family-name:var(--font-oswald)] text-[1.9rem] leading-[0.95] font-black tracking-tight">
                          {card.title}
                        </h3>
                        <p className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-[1rem] leading-relaxed text-neutral-300 normal-case">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeScene === "extras" && (
              <motion.div
                key="extras"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-8"
              >
                <div className="col-span-7 flex flex-col justify-center">
                  <div className="mb-6 font-[family-name:var(--font-oswald)] text-[5.2rem] leading-none font-black tracking-tighter text-white">
                    НЕ ЗАБУДЬТЕ
                    <br />
                    ДОБАВИТЬ <span className="text-red-600">ДОПЫ</span>
                  </div>
                  <div className="max-w-4xl font-[family-name:var(--font-jetbrains-mono)] text-[1.55rem] leading-relaxed text-neutral-200 normal-case">
                    Патчи, воск, пилинг, брови, уходы и hair tattoo удобно добавить прямо к визиту. Если хотите усилить результат, просто скажите мастеру до начала стрижки.
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {[
                      "ПАТЧИ • 200 ₽",
                      "ПИЛИНГ • 200 ₽",
                      "ВОСК 1 ЗОНА • 200 ₽",
                      "БРОВИ • 100 ₽",
                      "ВОСК ПОД КЛЮЧ • 500 ₽",
                      "УХОД НА МАКСИМАЛКАХ • 700 ₽",
                    ].map((text) => (
                      <div
                        key={text}
                        className="bg-black/90 px-5 py-4 font-[family-name:var(--font-oswald)] text-2xl font-black tracking-wide text-white brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-5 flex flex-col gap-5 justify-center">
                  <div className="bg-white p-6 text-black brutal-border border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.6rem] leading-[0.9] font-black tracking-tight">
                      СКАЖИТЕ МАСТЕРУ:
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xl leading-relaxed normal-case">
                      «Добавьте патчи», «сделайте воск», «давайте пилинг» или «оформим брови».
                    </div>
                  </div>
                  <div className="bg-black/90 p-6 text-white brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.6rem] leading-[0.9] font-black tracking-tight">
                      МЕЛОЧИ РЕШАЮТ
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xl leading-relaxed text-neutral-300 normal-case">
                      Именно допуслуги часто дают тот самый аккуратный финальный вид после стрижки или бороды.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScene === "booking" && (
              <motion.div
                key="booking"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-8"
              >
                <div className="col-span-7 flex flex-col justify-center">
                  <div className="mb-6 font-[family-name:var(--font-oswald)] text-[5.1rem] leading-none font-black tracking-tighter text-white">
                    У НАС ЕСТЬ
                    <br />
                    ОНЛАЙН <span className="text-red-600">ЗАПИСЬ</span>
                  </div>
                  <div className="max-w-4xl font-[family-name:var(--font-jetbrains-mono)] text-[1.55rem] leading-relaxed text-neutral-200 normal-case">
                    Запишитесь заранее в удобное Вам время. Подписывайтесь на наши соц сети. Есть предложения? Скажи!
                  </div>
                </div>

                <div className="col-span-5 flex flex-col gap-5 justify-center">
                  <div className="bg-white p-6 text-black brutal-border border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.5rem] leading-[0.9] font-black tracking-tight">
                      ЗАПИШИТЕСЬ
                      <br />
                      ЗАРАНЕЕ
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xl leading-relaxed normal-case">
                      Выберите удобное время и приходите без спешки и ожидания.
                    </div>
                  </div>
                  <div className="bg-black/90 p-6 text-white brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.5rem] leading-[0.9] font-black tracking-tight">
                      @BARBER_13X13
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xl leading-relaxed text-neutral-300 normal-case">
                      Подписывайтесь на наши соц сети и говорите, что можно сделать ещё лучше.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScene === "lounge" && (
              <motion.div
                key="lounge"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-8"
              >
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="mb-6 font-[family-name:var(--font-oswald)] text-[5.2rem] leading-none font-black tracking-tighter text-white">
                    ЗОНА ОЖИДАНИЯ
                    <br />
                    С <span className="text-red-600">ХАРАКТЕРОМ</span>
                  </div>
                  <div className="max-w-5xl font-[family-name:var(--font-jetbrains-mono)] text-[1.5rem] leading-relaxed text-neutral-200 normal-case">
                    У нас есть ретро игровой аппарат с играми на SEGA, Nintendo и даже Apple II. Плюс тамагочи, чтобы ожидание не было скучным.
                  </div>
                </div>

                <div className="col-span-4 flex flex-col gap-5 justify-center">
                  <div className="bg-black/90 p-6 text-white brutal-border border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.4rem] leading-[0.95] font-black">
                      SEGA
                      <br />
                      NINTENDO
                      <br />
                      APPLE II
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-lg leading-relaxed text-neutral-300 normal-case">
                      Можно залипнуть в классику, пока ждёте своё время или друга.
                    </div>
                  </div>

                  <div className="bg-white p-6 text-black brutal-border border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    <div className="font-[family-name:var(--font-oswald)] text-[2.4rem] leading-[0.95] font-black">
                      ХОТИТЕ КОФЕ?
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-lg leading-relaxed normal-case">
                      Справа кофейный аппарат. Берите кофе и устраивайтесь поудобнее.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeScene === "prices" && activeCategory && (
              <motion.div
                key={`prices-${activeCategory.id}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="flex h-full flex-col"
              >
                <div className="mb-6 flex items-end justify-between gap-6">
                  <div>
                    <div className="font-[family-name:var(--font-oswald)] text-[5.2rem] leading-none font-black tracking-tighter text-white">
                      ПРАЙС
                    </div>
                    <div className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-xl text-neutral-300 normal-case">
                      Точный расчет стоимости перед началом. Вы платите ровно ту сумму, что указана здесь.
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex gap-4">
                  {orderedPriceCategories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`px-4 py-[0.65rem] font-[family-name:var(--font-oswald)] text-[1.7rem] font-black tracking-wide brutal-border ${
                        index === activePriceIndex
                          ? "border-white bg-white text-black"
                          : "border-white/35 bg-black/60 text-neutral-400"
                      }`}
                    >
                      {category.category}
                    </div>
                  ))}
                </div>

                <div className="mb-4 border-b-[6px] border-white pb-3 font-[family-name:var(--font-oswald)] text-[4rem] leading-none font-black tracking-tighter text-white">
                  {activeCategory.category}
                </div>

                <div className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-lg text-neutral-300 normal-case">
                  Не забудьте спросить про допуслуги: патчи, воск, пилинг, брови и уходы.
                </div>

                <div className={`grid flex-1 ${isDenseCategory ? "grid-cols-4 gap-3" : "grid-cols-2 gap-4"}`}>
                  {activeCategory.items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col justify-between bg-black/88 brutal-border border-white ${isDenseCategory ? "p-3 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]" : "p-5 shadow-[7px_7px_0px_0px_rgba(255,255,255,1)]"}`}
                    >
                      <div>
                        <div className={`font-[family-name:var(--font-oswald)] leading-tight font-black tracking-tight text-white ${isDenseCategory ? "text-[1.22rem]" : "text-[2rem]"}`}>
                          {item.name}
                        </div>
                        {item.desc && (
                          <div className={`mt-2 font-[family-name:var(--font-jetbrains-mono)] leading-relaxed text-neutral-300 normal-case ${isDenseCategory ? "text-[0.72rem]" : "text-base"}`}>
                            {item.desc}
                          </div>
                        )}
                      </div>
                      <div className={`mt-4 inline-flex w-fit bg-white px-3 py-[0.35rem] font-[family-name:var(--font-oswald)] font-black tracking-wide text-black brutal-border border-black ${isDenseCategory ? "text-[1.28rem]" : "text-[1.9rem]"}`}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <footer className="absolute bottom-0 left-0 right-0 overflow-hidden border-t-2 border-white/35 bg-white py-3 text-black">
          <div className="flex whitespace-nowrap">
            <div className="tv-marquee flex shrink-0 items-center gap-8 px-6 font-[family-name:var(--font-oswald)] text-2xl font-black tracking-[0.14em]">
              <span>{activeTicker}</span>
              <span className="h-2 w-2 bg-black" />
              <span>13X13</span>
              <span className="h-2 w-2 bg-black" />
              <span>ДОСТУПНАЯ ЦЕНА</span>
              <span className="h-2 w-2 bg-black" />
              <span>@BARBER_13X13</span>
              <span className="h-2 w-2 bg-black" />
              <span>НЕ ЗАБУДЬТЕ ПРО ДОПЫ</span>
            </div>
            <div
              aria-hidden="true"
              className="tv-marquee flex shrink-0 items-center gap-8 px-6 font-[family-name:var(--font-oswald)] text-2xl font-black tracking-[0.14em]"
            >
              <span>{activeTicker}</span>
              <span className="h-2 w-2 bg-black" />
              <span>13X13</span>
              <span className="h-2 w-2 bg-black" />
              <span>ДОСТУПНАЯ ЦЕНА</span>
              <span className="h-2 w-2 bg-black" />
              <span>@BARBER_13X13</span>
              <span className="h-2 w-2 bg-black" />
              <span>НЕ ЗАБУДЬТЕ ПРО ДОПЫ</span>
            </div>
          </div>
        </footer>
      </div>

      <AnimatePresence mode="wait">
        {isBooting && (
          <BootScreen
            key={`boot-${bootCycle}`}
            onComplete={() => {
              setIsBooting(false);
              setActiveScene("logo");
            }}
          />
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes tvMarquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }

            .tv-marquee {
              animation: tvMarquee 24s linear infinite;
            }
          `,
        }}
      />
    </main>
  );
}
