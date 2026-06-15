"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Scissors, ShieldAlert, Clock, MapPin, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import BootScreen from "@/components/BootScreen";
import { haircutPriceNote, prices } from "@/data/prices";

const GradientBlinds = dynamic(() => import('@/components/GradientBlinds'), { ssr: false });

const PriceCategoryBlock = ({ category }: { category: (typeof prices)[number] }) => {
  return (
    <section className="bg-black brutal-border border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
      <div className="flex items-end justify-between gap-4 border-b-[3px] border-white p-4 md:p-6">
        <h3 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-black leading-none tracking-tight text-white">
          {category.category}
        </h3>
        <span className="hidden h-4 w-4 shrink-0 bg-white md:block" />
      </div>

      <div className="divide-y divide-dashed divide-neutral-700">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="group grid grid-cols-1 gap-3 p-4 transition-colors hover:bg-white hover:text-black md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:p-6"
          >
            <div>
              <div className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-black leading-tight tracking-tight text-white group-hover:text-black">
                {item.name}
              </div>
              {item.desc && (
                <div className="mt-1 font-[family-name:var(--font-jetbrains-mono)] text-sm md:text-base font-bold leading-snug text-neutral-400 normal-case group-hover:text-neutral-700">
                  {item.desc}
                </div>
              )}
            </div>

            <div className="w-fit bg-white px-3 py-2 font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-black leading-none text-black brutal-border border-white group-hover:border-black md:justify-self-end">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">
      <AnimatePresence>
        {isBooting && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* 
        Aesthetic Anchor: Solid brutalist navigation 
      */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black brutal-border-b text-white">
        <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-[1600px] mx-auto">
          {/* Logo */}
          <a href="#" className="relative z-50 inline-block focus-visible:outline-none">
            <Image
              src="/logo_white.webp"
              alt="13x13 Logo"
              width={120}
              height={60}
              className="block h-[35px] md:h-[50px] w-auto mix-blend-lighten"
              style={{ width: "auto" }}
              priority
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-xl uppercase tracking-widest">
            <a href="#price" className="hover:line-through transition-all hover:text-neutral-300">Услуги</a>
            <a href="#about" className="hover:line-through transition-all hover:text-neutral-300">Философия</a>
            <Link href="/gallery" className="hover:line-through transition-all hover:text-neutral-300 text-red-500">Галерея</Link>
            <a href="https://t.me/barber_13x13" target="_blank" rel="noopener noreferrer" className="hover:line-through transition-all hover:text-neutral-300">TG</a>
            <a href="tel:+79002871313" className="hover:line-through transition-all hover:text-neutral-300 text-neutral-400">
              +7 900 287-13-13
            </a>
            <a href="https://dikidi.net/#widget=207607" className="bg-white text-black px-4 py-2 hover:-translate-y-0.5 hover:-translate-x-0.5 brutal-border border-white shadow-[4px_4px_0px_0px_#fff] transition-transform ml-2">
              ЗАПИСАТЬСЯ
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 bg-white text-black brutal-border border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus-visible:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" strokeWidth={3} /> : <Menu className="w-6 h-6" strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-black brutal-border-b border-t-0 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6 font-[family-name:var(--font-oswald)] font-bold text-3xl uppercase tracking-widest p-6 pb-10">
                <a href="#price" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit">Услуги</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit">Философия</a>
                <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit text-red-500">ГАЛЕРЕЯ</Link>
                <a href="https://t.me/barber_13x13" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit">TELEGRAM</a>
                <a href="tel:+79002871313" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit text-neutral-400">
                  +7 900 287-13-13
                </a>
                <div className="mt-4">
                  <a href="https://dikidi.net/#widget=207607" onClick={() => setIsMenuOpen(false)} className="inline-block bg-white text-black px-6 py-3 brutal-border border-white shadow-[6px_6px_0px_0px_#fff]">
                    ЗАПИСЬ ОНЛАЙН
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION - NEO-BRUTALIST */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end px-4 md:px-8 pb-10 md:pb-24 pt-32 brutal-border-b bg-[#0a0a0a] overflow-hidden">

        {/* Background Animation */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen overflow-hidden">
          {!isBooting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <GradientBlinds
                className=""
                dpr={1}
                gradientColors={["#1100ff","#ff0000"]}
                angle={-75}
                noise={0.58}
                blindCount={50}
                blindMinWidth={50}
                mouseDampening={0.45}
                mirrorGradient={false}
                spotlightRadius={0.7}
                spotlightSoftness={0.7}
                spotlightOpacity={0.95}
                distortAmount={1}
                shineDirection="left"
              />
            </motion.div>
          )}
        </div>

        <div className="max-w-[1600px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-center lg:items-start relative"
          >
            <div className="w-fit bg-red-600 text-white px-3 py-1 md:px-10 md:py-4 font-[family-name:var(--font-oswald)] font-black text-xl md:text-5xl mb-3 md:mb-10 tracking-[0.1em] md:tracking-[0.2em] transform -rotate-1 brutal-border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
              МЫ РАБОТАЕМ!
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-16 w-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={!isBooting ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-auto flex flex-col items-center lg:items-start shrink-0 self-center lg:self-start relative"
              >
                <h1 className="m-0 flex w-full justify-center lg:justify-start">
                  <span className="sr-only">13x13</span>
                  <Image
                    src="/logo_white.webp"
                    alt="13x13"
                    width={600}
                    height={600}
                    className="block w-[70vw] sm:w-[60vw] lg:w-[350px] xl:w-[450px] h-auto object-contain object-center mix-blend-lighten relative z-10"
                    style={{ height: "auto" }}
                    priority
                  />
                </h1>
                <div className="mt-2 font-[family-name:var(--font-jetbrains-mono)] font-light text-sm md:text-base tracking-widest text-[#a3a3a3] uppercase self-center lg:self-start">
                  ЧЕСТНЫЕ ЦЕНЫ
                </div>
                <div className="mt-3 font-[family-name:var(--font-oswald)] text-2xl md:text-4xl lg:text-5xl font-black tracking-tight normal-case text-white self-center lg:self-start text-center lg:text-left">
                  Позволь себе немного чаще.
                </div>
              </motion.div>

              <div className="flex flex-col gap-2 shrink-0 items-center lg:items-start">
                <h2 className="font-[family-name:var(--font-oswald)] text-[9vw] md:text-[6vw] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[0.8] font-black tracking-tighter break-words w-fit bg-black text-white px-4 py-2 md:px-6 md:py-3 transform -rotate-1 brutal-border border-white brutal-shadow z-20">
                  БАРБЕРШОП
                </h2>
                <h2 className="font-[family-name:var(--font-oswald)] text-[9vw] md:text-[6vw] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[0.8] font-black tracking-tighter break-words w-fit bg-white text-black px-4 py-2 md:px-6 md:py-3 transform rotate-2 brutal-border border-black brutal-shadow-inverse z-10 -mt-2 lg:-mt-4 lg:ml-4 text-center lg:text-left">
                  В СОЧИ
                </h2>
              </div>
            </div>

            {/* Mobile Action Buttons (visible only on md and below) - Fixed to viewport */}
            <div className="fixed right-2 top-1/2 -translate-y-[calc(50%+50px)] flex flex-col gap-3 z-[100] md:hidden pointer-events-auto">
              <a href="#price" className="relative group w-[60px] h-[60px] rounded-full bg-[#111] border border-neutral-800 flex items-center justify-center font-[family-name:var(--font-oswald)] font-bold text-[13px] uppercase text-red-500 active:scale-95 transition-transform overflow-visible">
                <span className="relative z-10 flex">ЦЕНЫ</span>
                <div className="absolute -inset-1 rounded-full bg-red-600 opacity-20 blur-md pointer-events-none z-0" />
                <div className="absolute inset-px rounded-full border border-red-600/30 pointer-events-none z-10" />
              </a>
              <a href="https://dikidi.net/#widget=207607" className="relative group w-[60px] h-[60px] rounded-full bg-[#111] border border-neutral-800 flex items-center justify-center font-[family-name:var(--font-oswald)] font-bold text-[13px] uppercase text-blue-500 active:scale-95 transition-transform overflow-visible">
                <span className="relative z-10 flex text-center leading-none">ЗАПИСЬ</span>
                <div className="absolute -inset-1 rounded-full bg-blue-600 opacity-20 blur-md pointer-events-none z-0" />
                <div className="absolute inset-px rounded-full border border-blue-600/30 pointer-events-none z-10" />
              </a>
            </div>

            <div className="font-[family-name:var(--font-jetbrains-mono)] text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl text-white font-medium leading-relaxed flex flex-col gap-3 md:gap-4 items-center text-center lg:items-start lg:text-left">
              <span className="font-bold p-2 bg-black border-l-0 border-b-4 lg:border-l-4 lg:border-b-0 border-white inline-block">Новый барбершоп в Сочи с честными ценами.</span>
              <span className="p-2 border-b-2 border-dotted border-white/50 w-fit">Находимся на Горького 81а, напротив клуба DDX.</span>
              <span className="text-neutral-400 mb-2 mt-1">Мы ценим ваше время и бережём бюджет.</span>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6 w-full mt-8 md:mt-0"
          >
            <a
              href="https://dikidi.net/#widget=207607"
              className="flex items-center justify-between bg-white text-black font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-black py-6 px-6 md:py-8 md:px-8 brutal-border border-white shadow-[8px_8px_0px_0px_#fff] hover:shadow-[12px_12px_0px_0px_#fff] hover:-translate-y-1 hover:-translate-x-1 group w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition-all"
              aria-label="Записаться онлайн"
            >
              <span className="uppercase tracking-wide">ЗАПИСАТЬСЯ</span>
              <div className="bg-black text-white p-2 rounded-none transform group-hover:rotate-12 transition-transform">
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
              </div>
            </a>

            <div className="bg-black text-white brutal-border border-white shadow-[6px_6px_0px_0px_#fff] p-4 md:p-6 flex flex-col gap-2 transform rotate-1">
              <a href="https://yandex.ru/maps/-/CPuyYX37" target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center gap-3 text-neutral-300 font-[family-name:var(--font-jetbrains-mono)] text-sm md:text-base font-bold hover:text-white transition-colors group focus-visible:outline-none">
                <div className="bg-white text-black p-1.5 shrink-0 transition-transform group-hover:-translate-y-1">
                  <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                </div>
                <span className="underline underline-offset-4 decoration-neutral-500 group-hover:decoration-white uppercase tracking-wider leading-snug">г. Сочи, ул. Горького, 81а<br />напротив ТЦ Сан Сити</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section id="price" className="py-16 md:py-40 px-4 md:px-8 max-w-[1600px] mx-auto w-full border-b-[3px] border-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-24 gap-4 md:gap-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-[14vw] md:text-[12vw] lg:text-[10rem] font-black tracking-tighter leading-none uppercase m-0 p-0">
            ПРАЙС
          </h2>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-base md:text-xl lg:text-2xl text-neutral-400 max-w-md text-left lg:text-right mb-2 md:mb-4">
            Точный расчет стоимости перед началом. Вы платите ровно ту сумму, что указана здесь.
          </p>
        </div>

        <div className="w-full mb-12 border-b-[6px] border-white pb-6">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-7xl lg:text-9xl font-black uppercase text-left tracking-tighter mix-blend-difference">
            ВЕСЬ РАСКЛАД
          </h2>
          <p className="mt-5 max-w-3xl font-[family-name:var(--font-jetbrains-mono)] text-sm md:text-lg font-bold leading-relaxed text-neutral-400 normal-case">
            {haircutPriceNote}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:gap-10 xl:grid-cols-2 mb-20 md:mb-40">
          {prices.map((category) => (
            <PriceCategoryBlock key={category.id} category={category} />
          ))}
        </div>



        <div className="mt-16 md:mt-32 w-full">
          <a
            href="https://dikidi.net/#widget=207607"
            className="group w-full flex flex-row items-center justify-between bg-white text-black p-6 md:p-16 brutal-border border-black brutal-shadow hover:bg-neutral-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            <span className="font-[family-name:var(--font-oswald)] text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter">
              ЗАПИСАТЬСЯ
            </span>
            <div className="bg-black text-white rounded-full p-3 md:p-4 group-hover:rotate-45 transition-transform duration-300 ml-4">
              <ArrowUpRight className="w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24" strokeWidth={2} />
            </div>
          </a>
        </div>
      </section>

      {/* HIRING / RECRUITMENT BLOCK */}
      <section className="bg-white text-black py-16 md:py-40 px-4 md:px-8 brutal-border-b relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" strokeWidth={3} />
              <span className="font-[family-name:var(--font-oswald)] text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-wide">ВАКАНСИЯ</span>
            </div>
            <h2 className="font-[family-name:var(--font-oswald)] text-[12vw] sm:text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase">
              ИЩЕМ<br /><span className="text-outline-white" style={{ WebkitTextStroke: '2px black' }}>МАСТЕРОВ</span>
            </h2>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-base sm:text-2xl md:text-3xl font-medium mb-10 md:mb-16 max-w-xl text-neutral-700 leading-snug">
              Барбер? Хочешь работать в сильном коллективе и зарабатывать стабильно в новом зале? Пиши нам!
            </p>
            <Link href="/rabota-v-13x13" className="inline-flex items-center justify-between gap-4 bg-black text-white font-[family-name:var(--font-oswald)] text-xl sm:text-2xl md:text-4xl font-black py-4 px-6 md:py-6 md:px-12 brutal-border border-black brutal-shadow-inverse w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/50 hover:bg-neutral-900 transition-colors group">
              <span>ПОДРОБНЕЕ О ВАКАНСИИ</span> <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 shrink-0 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full mt-8 lg:mt-0 flex items-center justify-center">
            {/* Added Images */}
            <div className="absolute right-0 md:right-[10%] w-[60%] aspect-[3/4] border-[3px] md:border-4 border-black brutal-shadow-inverse z-20 rotate-3 transform origin-bottom-right overflow-hidden bg-neutral-200">
              <Image src="/hiring-interior.png" alt="Интерьер барбершопа" fill sizes="(max-width: 768px) 60vw, 30vw" className="object-cover mix-blend-multiply" />
            </div>
            <div className="absolute left-0 md:left-[5%] bottom-0 md:bottom-[-10%] w-[55%] aspect-[4/5] border-[3px] md:border-4 border-black brutal-shadow-inverse z-10 -rotate-6 overflow-hidden bg-neutral-300">
              <Image src="/hiring-work.png" alt="Барбер в работе" fill sizes="(max-width: 768px) 55vw, 25vw" className="object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE TYPOGRAPHY MARQUEE */}
      <div className="flex overflow-hidden bg-white text-black py-4 md:py-8 brutal-border-b border-y-4 border-black">
        <div className="animate-marquee flex whitespace-nowrap items-center gap-6 md:gap-12 px-3 md:px-6 font-[family-name:var(--font-oswald)] text-3xl md:text-5xl lg:text-7xl font-black tracking-tight uppercase flex-shrink-0">
          <span>СОЧИ. ГОРЬКОГО, 81А.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>ЧЕСТНАЯ СТРИЖКА.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>МУЖСКОЙ КЛУБ.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span className="text-outline-white" style={{ WebkitTextStroke: '2px black' }}>13x13</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>ДОСТУПНАЯ ЦЕНА.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
        </div>
        <div className="animate-marquee flex whitespace-nowrap items-center gap-6 md:gap-12 px-3 md:px-6 font-[family-name:var(--font-oswald)] text-3xl md:text-5xl lg:text-7xl font-black tracking-tight uppercase flex-shrink-0" aria-hidden="true">
          <span>СОЧИ. ГОРЬКОГО, 81А.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>ЧЕСТНАЯ СТРИЖКА.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>МУЖСКОЙ КЛУБ.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span className="text-outline-white" style={{ WebkitTextStroke: '2px black' }}>13x13</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
          <span>ДОСТУПНАЯ ЦЕНА.</span> <span className="w-2 h-2 md:w-4 md:h-4 bg-black" />
        </div>
      </div>

      {/* PHILOSOPHY SECTION */}
      <section id="about" className="py-16 md:py-40 px-4 md:px-8 border-b-[3px] border-white relative overflow-hidden bg-black">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl md:text-[8rem] font-black tracking-tighter mb-10 md:mb-16 leading-none uppercase text-white">
            ФИЛОСОФИЯ <span className="text-red-600 block">БРЕНДА</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 text-white font-[family-name:var(--font-jetbrains-mono)]">
            <div className="text-xl md:text-3xl font-bold leading-tight space-y-8 uppercase">
              <p>Наш клиент — человек, который понимает ценность денег. Он не ищет самое дешёвое — но и не готов переплачивать за имя, тренды и маркетинг.</p>
              <p className="text-red-500">13x13 — это барбершоп для тех, кто устал платить 5000 рублей за стрижку, понимая, что половина этой суммы — это бренд, интерьер и навязанные «бонусы».</p>
            </div>
            <div className="text-lg md:text-xl font-medium leading-relaxed text-neutral-400 space-y-6">
              <p>Он знает, что высокая цена не всегда равна высокому качеству. И выбирает осознанно. Мы убрали всё лишнее и оставили главное.</p>
              <p>Он не пойдёт в дешёвую парикмахерскую. Но и не видит смысла в завышенных ценах. Для него оптимум — это разумная стоимость и стабильное качество.</p>
              <p className="text-white bg-red-600 p-4 font-bold border-4 border-white transform rotate-1 mt-8 brutal-shadow">
                13x13 — ЭТО ПРО ОСОЗНАННЫЙ ВЫБОР. ПРО СТИЛЬ БЕЗ ПЕРЕПЛАТЫ. ПРО СЕРВИС, КОТОРЫЙ СТОИТ СВОИХ ДЕНЕГ.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Scissors className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "ОСТАВИЛИ ГЛАВНОЕ",
                desc: "Сильный сервис, опытные мастера, качественные материалы и полностью понятная честная цена."
              },
              {
                icon: <ShieldAlert className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "БЕЗ ПЕРЕПЛАТ ЗА ВОЗДУХ",
                desc: "Никаких приставок, бесплатного алкоголя, включённого кофе и искусственно раздутой барбер-атмосферы."
              },
              {
                icon: <Clock className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "УМНЫЙ РАСХОД",
                desc: "Вместо одной стрижки за 5000₽ — 2-3 визита к нам. Тот же уровень профессионального сервиса без переплаты за люкс."
              }
            ].map((item) => (
              <div key={item.title} className="bg-black text-white p-6 md:p-10 lg:p-14 border-4 border-white group hover:bg-white hover:text-black transition-colors duration-300 flex flex-col h-full cursor-default brutal-shadow">
                <div className="text-white group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 uppercase">{item.title}</h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-neutral-400 group-hover:text-neutral-600 leading-relaxed text-base md:text-lg lg:text-xl mt-auto font-medium transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacts" className="bg-black text-white relative brutal-border-t">
        {/* YANDEX MAP */}
        <div className="w-full h-[300px] md:h-[450px] border-b-[3px] border-white relative overflow-hidden bg-neutral-900 group">
          <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10 bg-black/20 mix-blend-multiply" />
          <iframe
            src="https://yandex.ru/map-widget/v1/?z=18&ol=biz&oid=92378568380"
            className="w-full h-full border-0 grayscale hover:grayscale-0 contrast-125 transition-all duration-700 ease-in-out"
            style={{ filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen={true}
            title="Яндекс Карта: 13x13"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-b-[3px] border-white">

          <div className="p-8 md:p-16 brutal-border-b border-white lg:border-b-0 lg:brutal-border-r flex justify-center items-center h-full bg-black">
            <Image
              src="/logo_white.webp"
              alt="Барбершоп 13x13 рядом с DDX в Сочи на Горького 81а"
              width={300}
              height={300}
              className="w-full max-w-[200px] md:max-w-[280px] h-auto mix-blend-lighten"
              style={{ height: "auto" }}
            />
          </div>

          <div className="p-8 md:p-16 brutal-border-b border-white lg:border-b-0 lg:brutal-border-r flex flex-col justify-center text-center lg:text-left">
            <h4 className="font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black mb-4 md:mb-8 text-neutral-500 uppercase tracking-widest flex flex-col gap-2">
              <span>ЛОКАЦИЯ</span>
              <span className="text-white text-sm md:text-base tracking-normal normal-case font-bold bg-neutral-900 px-3 py-1 border border-neutral-700 w-fit mx-auto lg:mx-0">
                Напротив DDX Fitness
              </span>
            </h4>
            <h2 className="not-italic font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] uppercase mb-4 text-white">
              Находимся напротив DDX:<br />
              ул. Горького, 81а
            </h2>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg md:text-xl font-bold text-neutral-400 space-y-4">
              <p>Район ЖД Вокзала</p>
              <p className="text-sm md:text-base font-medium leading-relaxed max-w-md">
                Ищете барбершоп рядом с DDX в Сочи? Мы находимся на ул. Горького, 81а, напротив клуба DDX и рядом с ТЦ Сан Сити. Удобно зайти до тренировки или сразу после — стрижка и оформление бороды без лишнего ожидания.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left">
            <h4 className="font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black mb-4 md:mb-8 text-neutral-500 uppercase tracking-widest">СВЯЗЬ</h4>
            <a href="tel:+79002871313" className="font-[family-name:var(--font-oswald)] text-3xl sm:text-5xl md:text-6xl font-black leading-none hover:underline underline-offset-8 mb-6 md:mb-8 inline-block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 p-2 -ml-2 text-white">
              +7 900 287-13-13
            </a>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-base md:text-lg font-medium text-neutral-400 space-y-2">
              <a href="https://t.me/barber_13x13" target="_blank" rel="noopener noreferrer" className="block text-xl md:text-2xl text-white font-bold hover:underline underline-offset-4 mb-4">@BARBER_13X13</a>
              <div>Резюме и сотрудничество:</div>
              <a href="mailto:tsehthirteen@ya.ru" className="text-xl md:text-2xl text-white font-bold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20">tsehthirteen@ya.ru</a><br />
              <span className="mt-4 inline-block">Управляющий: <a href="tel:+79529787788" className="text-white font-bold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20">+7 952 978-77-88</a></span>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-16 py-6 md:py-8 text-xs sm:text-sm md:text-base font-[family-name:var(--font-jetbrains-mono)] font-medium bg-[#111] text-neutral-500 gap-4">
          <div className="text-center md:text-left flex flex-col gap-1">
            <span>ИП МАЛХАСЯН ГЕОРГИЙ ГЕОРГИЕВИЧ</span>
            <span>ИНН: 232003837758 / ОГРН: 1027700067328</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-center md:text-right uppercase font-bold tracking-widest text-neutral-400">
              © {new Date().getFullYear()} 13x13.
            </div>
            <a
              href="https://it.filatiev.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center md:items-end transition-all duration-300"
            >
              <div className="flex flex-col items-center md:items-end">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors leading-none mb-1">Разработано</span>
                <span className="text-sm md:text-lg font-black font-[family-name:var(--font-oswald)] text-neutral-400 group-hover:text-white transition-colors leading-none uppercase">Андрей Филатьев</span>
                <span className="text-[10px] md:text-xs text-neutral-600 group-hover:text-neutral-500 transition-colors mt-1 font-bold">Помогаю бизнесу работать удобно</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
