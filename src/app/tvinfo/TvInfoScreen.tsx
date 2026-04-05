"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, MapPin, Scissors, ShieldAlert } from "lucide-react";
import BootScreen from "@/components/BootScreen";
import { prices } from "@/data/prices";

const GradientBlinds = dynamic(() => import("@/components/GradientBlinds"), { ssr: false });

const SCENES = ["hero", "philosophy", "prices"] as const;
type SceneId = (typeof SCENES)[number];

const TV_NOTES = [
  "13X13 • ДЕМО РЕЖИМ ДЛЯ ЗАЛА",
  "СТРИЖКИ ОТ 400 ₽ • БОРОДА ОТ 400 ₽",
  "СОЧИ • ГОРЬКОГО 81А • НАПРОТИВ DDX",
  "ЧЕСТНЫЕ ЦЕНЫ • БЕЗ ПЕРЕПЛАТЫ ЗА ВОЗДУХ",
  "АВТОРЕЖИМ: HERO • ФИЛОСОФИЯ • ПРАЙС",
];

const PHILOSOPHY_POINTS = [
  {
    title: "ОСОЗНАННЫЙ ВЫБОР",
    text: "13x13 для тех, кто ценит качество, но не готов платить за лишний маркетинг.",
    icon: "choice",
  },
  {
    title: "ЧЕСТНЫЙ ПРАЙС",
    text: "Цена прозрачная до начала работы. Без скрытых услуг и доплат после кресла.",
    icon: "price",
  },
  {
    title: "СТАБИЛЬНЫЙ УРОВЕНЬ",
    text: "Регламенты, сильные мастера и чистая дисциплина времени каждый день.",
    icon: "quality",
  },
];

const DEMO_RELOAD_MIN_MS = 1000 * 60 * 12; // 12 minutes
const DEMO_RELOAD_MAX_MS = 1000 * 60 * 22; // 22 minutes

const randomMs = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function pickDifferent<T>(arr: readonly T[], current: T): T {
  if (arr.length <= 1) return current;
  const filtered = arr.filter((item) => item !== current);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function TvInfoScreen() {
  const [activeScene, setActiveScene] = useState<SceneId>("hero");
  const [activeNote, setActiveNote] = useState<string>(TV_NOTES[0]);
  const [activePriceCategoryId, setActivePriceCategoryId] = useState<string>(prices[0]?.id ?? "");
  const [isBooting, setIsBooting] = useState(true);
  const [bootCycle, setBootCycle] = useState(0);
  const [timeLabel, setTimeLabel] = useState("--:--:--");

  const priceCategoryIds = useMemo(() => prices.map((category) => category.id), []);

  const activeCategory = useMemo(
    () => prices.find((category) => category.id === activePriceCategoryId) ?? prices[0],
    [activePriceCategoryId]
  );

  useEffect(() => {
    const updateTime = () => setTimeLabel(new Date().toLocaleTimeString("ru-RU"));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isBooting) return;
    const timer = window.setInterval(() => {
      setActiveNote((prev) => pickDifferent(TV_NOTES, prev));
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isBooting]);

  useEffect(() => {
    if (isBooting) return;
    const timeout = window.setTimeout(() => {
      setActiveScene((prev) => pickDifferent(SCENES, prev));
    }, randomMs(9000, 15000));
    return () => window.clearTimeout(timeout);
  }, [activeScene, isBooting]);

  useEffect(() => {
    if (isBooting || activeScene !== "prices") return;
    const interval = window.setInterval(() => {
      setActivePriceCategoryId((prev) => pickDifferent(priceCategoryIds, prev));
    }, 5000);
    return () => window.clearInterval(interval);
  }, [activeScene, isBooting, priceCategoryIds]);

  useEffect(() => {
    if (isBooting) return;
    const timeout = window.setTimeout(() => {
      setActiveScene(pickRandom(SCENES));
      setActivePriceCategoryId(pickRandom(priceCategoryIds));
      setBootCycle((prev) => prev + 1);
      setIsBooting(true);
    }, randomMs(45000, 90000));
    return () => window.clearTimeout(timeout);
  }, [isBooting, priceCategoryIds, bootCycle]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.reload();
    }, randomMs(DEMO_RELOAD_MIN_MS, DEMO_RELOAD_MAX_MS));
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white uppercase selection:bg-white selection:text-black">
      <div className="absolute inset-0 z-0 opacity-45 mix-blend-screen">
        <GradientBlinds
          className="absolute inset-0"
          dpr={1}
          gradientColors={["#080808", "#0A3DFF", "#E10600", "#080808"]}
          angle={-65}
          noise={0.45}
          blindCount={32}
          blindMinWidth={70}
          mouseDampening={0}
          mirrorGradient={false}
          spotlightRadius={0.72}
          spotlightSoftness={0.85}
          spotlightOpacity={0.95}
          distortAmount={0.6}
          shineDirection="left"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(225,6,0,0.22),transparent_50%),linear-gradient(135deg,rgba(0,0,0,0.75),rgba(0,0,0,0.92))]" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="border-b-2 border-white/35 px-8 py-5">
          <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Image
                src="/logo_white.webp"
                alt="13x13 Logo"
                width={220}
                height={100}
                className="h-[58px] w-auto mix-blend-lighten"
                priority
              />
              <div className="rounded-none border border-white/45 bg-black/60 px-4 py-2 font-[family-name:var(--font-oswald)] text-xl tracking-[0.18em] text-neutral-300">
                TV DEMO
              </div>
            </div>

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
            {activeScene === "hero" && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-8"
              >
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="mb-6 inline-flex w-fit border border-white bg-red-700 px-5 py-2 font-[family-name:var(--font-oswald)] text-3xl font-black tracking-[0.18em]">
                    ГЛАВНАЯ СТРАНИЦА
                  </div>
                  <h1 className="font-[family-name:var(--font-oswald)] text-[6.6rem] leading-[0.82] font-black tracking-tight">
                    БАРБЕРШОП
                    <br />
                    <span className="bg-white px-4 text-black">13X13</span>
                    <br />
                    В СОЧИ
                  </h1>
                  <p className="mt-8 max-w-5xl font-[family-name:var(--font-jetbrains-mono)] text-2xl font-medium leading-relaxed text-neutral-200 normal-case">
                    Новый зал с честной ценой и взрослым сервисом. Стрижки и борода без переплаты за декорации.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <span className="border border-white/50 bg-black/70 px-5 py-3 font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-widest text-white">
                      СТРИЖКА ОТ 400 ₽
                    </span>
                    <span className="border border-white/50 bg-black/70 px-5 py-3 font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-widest text-white">
                      БОРОДА ОТ 400 ₽
                    </span>
                  </div>
                </div>

                <div className="col-span-4 flex items-center">
                  <div className="w-full border-2 border-white bg-black/70 p-7 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.25)]">
                    <h2 className="mb-4 font-[family-name:var(--font-oswald)] text-4xl font-black tracking-tight">НА ЭКРАНЕ СЕЙЧАС</h2>
                    <div className="space-y-4 font-[family-name:var(--font-jetbrains-mono)] text-xl text-neutral-300">
                      <p>HERO • ЛОГОТИП • АКЦЕНТЫ ЦЕНЫ</p>
                      <p>ДАЛЕЕ АВТОМАТИЧЕСКИ: ФИЛОСОФИЯ И ПРАЙС</p>
                      <p className="text-white">BOOT SCREEN ПЕРЕЗАПУСКАЕТСЯ СЛУЧАЙНО</p>
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
                <div className="mb-8 inline-flex w-fit border border-white bg-black/70 px-5 py-2 font-[family-name:var(--font-oswald)] text-3xl font-black tracking-[0.18em]">
                  ФИЛОСОФИЯ БРЕНДА
                </div>
                <div className="grid flex-1 grid-cols-3 gap-6">
                  {PHILOSOPHY_POINTS.map((point) => (
                    <div
                      key={point.title}
                      className="flex h-full flex-col border-2 border-white/40 bg-black/70 p-8"
                    >
                      <div className="mb-6 text-red-500">
                        {point.icon === "choice" && <Scissors className="h-14 w-14" strokeWidth={1.8} />}
                        {point.icon === "price" && <ShieldAlert className="h-14 w-14" strokeWidth={1.8} />}
                        {point.icon === "quality" && <Clock3 className="h-14 w-14" strokeWidth={1.8} />}
                      </div>
                      <h3 className="font-[family-name:var(--font-oswald)] text-5xl font-black leading-[0.95] tracking-tight text-white">
                        {point.title}
                      </h3>
                      <p className="mt-6 font-[family-name:var(--font-jetbrains-mono)] text-2xl leading-relaxed text-neutral-300 normal-case">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeScene === "prices" && activeCategory && (
              <motion.div
                key="prices"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.65 }}
                className="grid h-full grid-cols-12 gap-7"
              >
                <aside className="col-span-4 border-2 border-white/45 bg-black/70 p-5">
                  <div className="mb-5 font-[family-name:var(--font-oswald)] text-4xl font-black tracking-tight text-white">
                    МЕНЮ ЦЕН 16:9
                  </div>
                  <div className="flex flex-col gap-3">
                    {prices.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActivePriceCategoryId(category.id)}
                        className={`border px-4 py-4 text-left font-[family-name:var(--font-oswald)] text-[1.55rem] font-black tracking-wide transition-colors ${
                          category.id === activeCategory.id
                            ? "border-white bg-white text-black"
                            : "border-white/35 bg-black/50 text-white hover:border-white"
                        }`}
                      >
                        {category.category}
                      </button>
                    ))}
                  </div>
                </aside>

                <div className="col-span-8 flex flex-col border-2 border-white/45 bg-black/70 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="font-[family-name:var(--font-oswald)] text-5xl font-black leading-none tracking-tight text-white">
                      {activeCategory.category}
                    </h2>
                    <span className="border border-white/35 bg-black/60 px-3 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-[0.16em] text-neutral-300">
                      АВТОПЕРЕКЛЮЧЕНИЕ: 5С
                    </span>
                  </div>

                  <div className="grid flex-1 grid-cols-2 gap-4 overflow-hidden">
                    {activeCategory.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col justify-between border border-white/25 bg-black/45 p-4"
                      >
                        <div>
                          <h3 className="font-[family-name:var(--font-oswald)] text-[1.95rem] font-black leading-tight tracking-tight text-white">
                            {item.name}
                          </h3>
                          {item.desc && (
                            <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-base leading-snug text-neutral-400 normal-case">
                              {item.desc}
                            </p>
                          )}
                        </div>
                        <div className="mt-4 inline-flex w-fit border border-white bg-white px-3 py-1 font-[family-name:var(--font-oswald)] text-3xl font-black tracking-wide text-black">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <footer className="absolute bottom-0 left-0 right-0 border-t-2 border-white/35 bg-black/85 py-3">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="tv-marquee flex shrink-0 items-center gap-10 px-6 font-[family-name:var(--font-oswald)] text-2xl font-black tracking-[0.16em] text-neutral-200">
              <span>{activeNote}</span>
              <span className="h-2 w-2 bg-white" />
              <span>ТЕЛЕГРАМ: @BARBER_13X13</span>
              <span className="h-2 w-2 bg-white" />
              <span>СОЧИ • ГОРЬКОГО 81А • +7 900 287-13-13</span>
              <span className="h-2 w-2 bg-white" />
              <span>13X13 • TV DEMO MODE</span>
            </div>
            <div
              aria-hidden="true"
              className="tv-marquee flex shrink-0 items-center gap-10 px-6 font-[family-name:var(--font-oswald)] text-2xl font-black tracking-[0.16em] text-neutral-200"
            >
              <span>{activeNote}</span>
              <span className="h-2 w-2 bg-white" />
              <span>ТЕЛЕГРАМ: @BARBER_13X13</span>
              <span className="h-2 w-2 bg-white" />
              <span>СОЧИ • ГОРЬКОГО 81А • +7 900 287-13-13</span>
              <span className="h-2 w-2 bg-white" />
              <span>13X13 • TV DEMO MODE</span>
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
              setActiveScene(pickRandom(SCENES));
              setActivePriceCategoryId(pickRandom(priceCategoryIds));
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
              animation: tvMarquee 22s linear infinite;
            }
          `,
        }}
      />
    </main>
  );
}
