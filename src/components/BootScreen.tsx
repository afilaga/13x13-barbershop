import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  "кстати у нас стрижки от 400 рублей",
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

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const durationMs = 4500; // 4.5 seconds
  const iterations = 3;
  const intervalMs = durationMs / iterations;

  useEffect(() => {
    // Generate 3 random unique phrases
    const shuffled = [...PHRASES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, iterations);
    
    let currentIndex = 0;
    setCurrentPhrase(selected[currentIndex]);

    const timer = setInterval(() => {
      currentIndex++;
      if (currentIndex < iterations) {
        setCurrentPhrase(selected[currentIndex]);
      } else {
        clearInterval(timer);
      }
    }, intervalMs);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete, intervalMs, iterations]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Barber Pole Background Element */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #FF0000 0, #FF0000 40px, #FFFFFF 40px, #FFFFFF 80px, #0011FF 80px, #0011FF 120px, #FFFFFF 120px, #FFFFFF 160px)"
          }}
          animate={{ x: ["0%", "-5.5%"], y: ["0%", "5.5%"] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-xl md:text-3xl font-medium text-white shadow-black drop-shadow-2xl uppercase tracking-tighter"
          >
            {currentPhrase}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-neutral-900 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
    </motion.div>
  );
}
