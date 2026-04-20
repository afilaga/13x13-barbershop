import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const GradientBlinds = dynamic(() => import('@/components/GradientBlinds'), { ssr: false });

const PHRASES = [
  "Затачиваем ножницы",
  "чистим цены от мусора",
  "подбираем насадку",
  "готовим кресло",
  "нагреваем воду",
  "дезенфицируем инструменты",
  "отпариваем полотенца",
  "снижаем цены",
  "генерируем образ",
  "обходим блокировку высоких цен",
  "запускаем модуль бронирования",
  "кстати у нас честная цена без переплаты",
  "ЭТО НЕ ДЁШЕВО!",
  "да, серьезно за 600 можно стрижку",
  "включаем Battle todds",
  "У нас вроде печеньки есть",
  "у нас можно со своей стрижкой - исправим",
  "зовём нормальных мастеров",
  "отсеиваем лишнее",
  "да такой сайт у барбершопа",
  "можешь забронировать в 2гис или яндекс",
  "Ну, привет! Тебя и ждали!",
  "Земля — плоская, но это не точно",
  "Хлеб — всему голова со стрижкой"
];

const BOOT_DURATION_MS = 7500; // 7.5 seconds
const BOOT_ITERATIONS = 5;
const BOOT_INTERVAL_MS = BOOT_DURATION_MS / BOOT_ITERATIONS;

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isPoleReady, setIsPoleReady] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Run one boot cycle per mount and avoid resetting timers on parent rerenders.
    const shuffled = [...PHRASES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, BOOT_ITERATIONS);

    let currentIndex = 0;
    setCurrentPhrase(selected[currentIndex]);

    const timer = setInterval(() => {
      currentIndex++;
      if (currentIndex < BOOT_ITERATIONS) {
        setCurrentPhrase(selected[currentIndex]);
      } else {
        clearInterval(timer);
      }
    }, BOOT_INTERVAL_MS);

    const finishTimer = setTimeout(() => {
      onCompleteRef.current();
    }, BOOT_DURATION_MS);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4 md:mb-8 mt-4 md:mt-0"
      >
        <Image
          src="/logo_white.webp"
          alt="13x13 Logo"
          width={200}
          height={100}
          className="w-[120px] md:w-[200px] h-auto mix-blend-lighten opacity-80"
          priority
        />
      </motion.div>

      {/* Realistic React Component Barber Pole */}
      <div className="relative mb-6 md:mb-12 w-16 h-48 md:w-24 md:h-80 rounded-full overflow-hidden brutal-border border-4 border-neutral-800 shadow-[0_0_50px_rgba(255,255,255,0.1)] shrink-0">
        {/* CSS fallback for slow/delayed webgl init (e.g. in-app browsers) */}
        <div
          className="absolute inset-0 boot-pole-fallback z-[1] pointer-events-none transition-opacity duration-700"
          style={{ opacity: isPoleReady ? 0.58 : 1 }}
        />
        <GradientBlinds
          className=""
          dpr={1}
          onReady={() => setIsPoleReady(true)}
          gradientColors={['#FFFFFF', '#0A3DFF', '#E10600', '#FFFFFF']}
          angle={30}
          noise={0.1}
          blindCount={4}
          blindMinWidth={30}
          mouseDampening={0}
          mirrorGradient={false}
          spotlightRadius={0.8}
          spotlightSoftness={1}
          spotlightOpacity={1}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
        {/* Gloss reflection overlay for 3D pill effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/30 to-transparent z-20 pointer-events-none mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-4 md:px-6 text-center h-20 md:h-32 flex items-center justify-center shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-xl sm:text-2xl md:text-4xl font-black text-white drop-shadow-2xl uppercase tracking-tighter leading-tight"
          >
            {currentPhrase}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 w-[85vw] max-w-xl h-2 md:h-4 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7.5, ease: "linear" }}
          className="h-full bg-white relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)] w-24 blur-sm"
               style={{ animation: 'shimmer 2s infinite' }} />
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500px); }
        }

        @keyframes barberFallbackFlow {
          0% { background-position: 0 0; }
          100% { background-position: 120px 0; }
        }

        .boot-pole-fallback {
          background:
            repeating-linear-gradient(
              45deg,
              #ffffff 0px,
              #ffffff 14px,
              #0A3DFF 14px,
              #0A3DFF 28px,
              #E10600 28px,
              #E10600 42px
            );
          animation: barberFallbackFlow 1.2s linear infinite;
          transform: scale(1.05);
        }
      `}} />
    </motion.div>
  );
}
