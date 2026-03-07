"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Scissors, ShieldAlert, Clock, MapPin, Search, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

// Helper component for the brutalist accordion price categories
const PriceCategory = ({ title, items }: { title: string, items: { id: string, name: string, price: number, desc: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortedItems = [...items].sort((a, b) => a.price - b.price);

  return (
    <div className="mb-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 bg-black border-4 border-neutral-800 hover:border-white transition-colors uppercase font-black text-xl md:text-3xl text-neutral-300 hover:text-white group brutal-shadow-inverse focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
      >
        <span>{title}</span>
        <ChevronDown className={`w-8 h-8 md:w-12 md:h-12 transform transition-transform ${isOpen ? 'rotate-180 text-white' : 'text-neutral-600 group-hover:text-white'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-10 bg-neutral-900 border-4 border-t-0 border-neutral-800 space-y-6">
              {sortedItems.map(item => (
                <div key={item.id} className="flex flex-col group/item">
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-dashed border-neutral-700 pb-4 group-hover/item:border-white transition-colors gap-2">
                    <span className="font-bold text-xl md:text-3xl uppercase text-neutral-300 group-hover/item:text-white font-[family-name:var(--font-oswald)]">{item.name}</span>
                    <span className="font-black text-white text-2xl md:text-4xl font-[family-name:var(--font-oswald)] bg-black px-4 py-2 border-2 border-neutral-800 md:ml-4 shrink-0 transition-transform group-hover/item:scale-105 group-hover/item:border-white">
                      {item.price} ₽
                    </span>
                  </div>
                  <span className="text-sm md:text-lg text-neutral-400 mt-3 font-[family-name:var(--font-inter)] font-semibold">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [budget, setBudget] = useState(1000);

  // Полная база услуг с разбивкой по категориям
  const menu = useMemo(() => ({
    hair: [
      { id: 'h1', name: '«Сделай красиво» (топ)', price: 1000, desc: 'Фейд включен, мытье, укладка' },
      { id: 'h2', name: 'Стильно', price: 800, desc: 'С фейдом, мытье, укладка' },
      { id: 'h3', name: 'Классика', price: 600, desc: 'Верх ножницами, мытье, укладка' },
      { id: 'h4', name: 'Бока короче / верх длиннее', price: 500, desc: 'Только насадки' },
      { id: 'h5', name: 'Фейд', price: 500, desc: 'Только фейд + мытье' },
      { id: 'h6', name: '«Пох»', price: 400, desc: '1 насадка, без мытья. Быстро и ровно' },
      { id: 'h7', name: 'Укладка (с мытьем)', price: 200, desc: 'Освежиться перед движем' },
    ],
    beard: [
      { id: 'b1', name: 'Королевское бритьё', price: 800, desc: 'С распариванием и кайфом' },
      { id: 'b2', name: 'Борода', price: 500, desc: 'Форма + окантовка лезвием бонусом' },
    ],
    kids: [
      { id: 'k1', name: 'Трудный ребёнок', price: 1000, desc: '0–5 лет. Найдем подход' },
      { id: 'k2', name: 'Школьник', price: 600, desc: 'Для ровных пацанов' },
    ],
    tuning: [
      { id: 't1', name: 'Окрашивание (по длине)', price: 2000, desc: 'От 1500 до 2000 ₽' },
      { id: 't2', name: 'Биозавивка / химия', price: 1500, desc: 'Стиль кудрявых' },
      { id: 't3', name: 'Обесцвечивание', price: 1300, desc: 'Стать блондом' },
      { id: 't4', name: 'Тонирование (1 зона)', price: 1000, desc: 'Скрыть седину. От 800 до 1000 ₽' },
    ],
    details: [
      { id: 'd1', name: 'Воск «под ключ»', price: 500, desc: 'Уберем лишнее везде' },
      { id: 'd2', name: 'Хайр-тату', price: 300, desc: 'Полоски, молнии' },
      { id: 'd3', name: 'Пилинг головы', price: 200, desc: 'Чистая кожа, свежая голова' },
      { id: 'd4', name: 'Воск (одна зона)', price: 200, desc: 'Нос / уши' },
      { id: 'd5', name: 'Брови', price: 100, desc: 'Четкий взгляд' },
      { id: 'd6', name: 'Пробор', price: 100, desc: 'Выбритый пробор' },
    ]
  }), []);

  const result = useMemo(() => {
    // Data logic now references memorized 'menu' variable.

    let status = { title: "ЧИСТО СПРОСИТЬ", desc: "Братан, на стрижку не хватит, но брови сделаем ровными." };
    let comboName = "СЕТ «НА МИНИМАЛКАХ»";
    let recommendations: { id: string; name: string; price: number; desc: string }[] = [];

    if (budget >= 100 && budget < 400) {
      status = { title: "ЛАЙТОВЫЙ ТЮНИНГ", desc: "Освежим детали. Будешь выглядеть опрятнее за копейки." };
      comboName = "СЕТ «ДЕТАЛИ»";
      recommendations = [menu.details[4], menu.details[3], menu.details[5]].filter(s => s.price <= budget);
    }
    else if (budget >= 400 && budget < 900) {
      status = { title: "БАЗА НА РАЙОНЕ", desc: "Быстро, четко, без лишних слов. То, что нужно для суеты." };
      comboName = "СЕТ «РОВНЫЙ ТИП»";
      if (budget >= 800) recommendations = [menu.hair[1]]; // Стильно
      else if (budget >= 600) recommendations = [menu.hair[2]]; // Классика
      else recommendations = [menu.hair[5]]; // Пох
    }
    else if (budget >= 900 && budget < 1600) {
      status = { title: "МЕСТНЫЙ АВТОРИТЕТ", desc: "Стрижем красиво, оформляем бороду. Девчонки уже оборачиваются." };
      comboName = "СЕТ «ПОЛНЫЙ ПОРЯДОК»";
      recommendations = [
        menu.hair[0], // Сделай красиво (1000)
        menu.beard[1] // Борода (500) - если бюджет 1500
      ];
      if (budget < 1500) recommendations.pop(); // Оставляем только стрижку, если на бороду не хватает
    }
    else if (budget >= 1600 && budget < 3000) {
      status = { title: "КОРОЛЬ ВЕЧЕРИНКИ", desc: "Заряжаем по полной. Отличная стрижка, спа-бритье и воск. Кайф обеспечен." };
      comboName = "СЕТ «КОРОЛЕВСКИЙ»";
      recommendations = [
        menu.hair[0], // Сделай красиво (1000)
        menu.beard[0], // Королевское бритье (800)
        menu.details[0] // Воск под ключ (500)
      ];
    }
    else if (budget >= 3000) {
      status = { title: "БАБКИ НЕ ПРОБЛЕМА", desc: "Тотальная трансформация. Химия или цвет, топовая стрижка. Заведение работает на тебя." };
      comboName = "СЕТ «ПЕРЕЗАГРУЗКА»";
      recommendations = [
        menu.tuning[1], // Биозавивка (1500)
        menu.hair[0], // Сделай красиво (1000)
        menu.beard[1], // Борода (500)
      ];
    }

    const comboTotal = recommendations.reduce((sum, item) => sum + item.price, 0);

    return { status, comboName, recommendations, comboTotal };
  }, [budget]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">

      {/* 
        Aesthetic Anchor: Solid brutalist navigation 
      */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black brutal-border-b text-white">
        <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-[1600px] mx-auto">
          {/* Logo */}
          <a href="#" className="relative z-50 focus-visible:outline-none">
            <Image
              src="/logo.png"
              alt="13x13 Logo"
              width={120}
              height={60}
              className="h-[35px] md:h-[50px] w-auto mix-blend-lighten"
              priority
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-xl uppercase tracking-widest">
            <a href="#price" className="hover:line-through transition-all hover:text-neutral-300">Услуги</a>
            <a href="#about" className="hover:line-through transition-all hover:text-neutral-300">Философия</a>
            <a href="tel:+79002871313" className="hover:line-through transition-all hover:text-neutral-300">
              +7 900 287-13-13
            </a>
            <a href="https://dikidi.net/#widget=205276" className="bg-white text-black px-4 py-2 hover:-translate-y-0.5 hover:-translate-x-0.5 brutal-border border-white shadow-[4px_4px_0px_0px_#fff] transition-transform ml-2">
              ЗАПИСЬ
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
                <a href="tel:+79002871313" onClick={() => setIsMenuOpen(false)} className="hover:line-through w-fit text-neutral-300">
                  +7 900 287-13-13
                </a>
                <div className="mt-4">
                  <a href="https://dikidi.net/#widget=205276" onClick={() => setIsMenuOpen(false)} className="inline-block bg-white text-black px-6 py-3 brutal-border border-white shadow-[6px_6px_0px_0px_#fff]">
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

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="13x13 Barbershop Background"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] md:bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0" />

        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,#0a0a0a_80%)] pointer-events-none z-0" />

        <div className="max-w-[1600px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-center lg:items-start"
          >
            <div className="w-fit bg-white text-black px-4 py-2 font-[family-name:var(--font-oswald)] font-black text-lg md:text-3xl mb-8 tracking-wider transform -rotate-2 brutal-border border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              ОТКРЫТИЕ — АПРЕЛЬ 2026
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8 lg:mb-16 w-full">
              <h1 className="w-full lg:w-auto flex justify-center lg:justify-start m-0 shrink-0">
                <span className="sr-only">13x13</span>
                <Image
                  src="/logo.png"
                  alt="13x13"
                  width={500}
                  height={500}
                  className="w-[70vw] sm:w-[50vw] lg:w-[220px] xl:w-[280px] h-auto object-contain object-left lg:object-center mix-blend-lighten relative z-10"
                  priority
                />
              </h1>

              <div className="flex flex-col gap-2 shrink-0 items-center lg:items-start">
                <h2 className="font-[family-name:var(--font-oswald)] text-[9.5vw] md:text-[6vw] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[0.8] font-black tracking-tighter break-words w-fit bg-white text-black px-4 py-2 md:px-6 md:py-3 transform rotate-1 brutal-border border-black brutal-shadow-inverse z-30">
                  ЛОУКОСТ
                </h2>
                <h2 className="font-[family-name:var(--font-oswald)] text-[9.5vw] md:text-[6vw] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[0.8] font-black tracking-tighter break-words w-fit bg-black text-white px-4 py-2 md:px-6 md:py-3 transform -rotate-1 brutal-border border-white brutal-shadow z-20 -mt-2 lg:-mt-4">
                  БАРБЕРШОП
                </h2>
                <h2 className="font-[family-name:var(--font-oswald)] text-[9.5vw] md:text-[6vw] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem] leading-[0.8] font-black tracking-tighter break-words w-fit bg-white text-black px-4 py-2 md:px-6 md:py-3 transform rotate-2 brutal-border border-black brutal-shadow-inverse z-10 -mt-2 lg:-mt-4 lg:ml-4 text-center lg:text-left">
                  В СОЧИ
                </h2>
              </div>
            </div>

            <div className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl text-white font-medium leading-relaxed flex flex-col gap-3 md:gap-4 items-center text-center lg:items-start lg:text-left">
              <span className="font-bold p-2 bg-black border-l-0 border-b-4 lg:border-l-4 lg:border-b-0 border-white inline-block">Новый барбершоп в Сочи с честными ценами.</span>
              <span className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                Стрижём и бреем
                <span className="bg-white text-black px-3 py-1 font-[family-name:var(--font-oswald)] font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter transform -rotate-2 brutal-border border-black shadow-[4px_4px_0px_0px_#fff]">
                  от 400 рублей!
                </span>
              </span>
              <span className="p-2 border-b-2 border-dotted border-white/50 w-fit">Находимся на Горького 81а, напротив клуба DDX.</span>
              <span className="text-neutral-400">Мы ценим ваше время и бережём бюджет.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6 w-full mt-8 md:mt-0"
          >
            <a
              href="https://dikidi.net/#widget=205276"
              className="flex items-center justify-between bg-white text-black font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-black py-6 px-6 md:py-8 md:px-8 brutal-border border-white shadow-[8px_8px_0px_0px_#fff] hover:shadow-[12px_12px_0px_0px_#fff] hover:-translate-y-1 hover:-translate-x-1 group w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition-all"
              aria-label="Записаться онлайн"
            >
              <span className="uppercase tracking-wide">ЗАПИСЬ В АПРЕЛЕ</span>
              <div className="bg-black text-white p-2 rounded-none transform group-hover:rotate-12 transition-transform">
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
              </div>
            </a>

            <div className="bg-black text-white brutal-border border-white shadow-[6px_6px_0px_0px_#fff] p-4 md:p-6 flex flex-col gap-2 transform rotate-1">
              <a href="https://yandex.ru/maps/-/CPuyYX37" target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center gap-3 text-neutral-300 font-[family-name:var(--font-inter)] text-sm md:text-base font-bold hover:text-white transition-colors group focus-visible:outline-none">
                <div className="bg-white text-black p-1.5 shrink-0 transition-transform group-hover:-translate-y-1">
                  <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                </div>
                <span className="underline underline-offset-4 decoration-neutral-500 group-hover:decoration-white uppercase tracking-wider leading-snug">г. Сочи, ул. Горького, 81а<br />напротив ТЦ Сан Сити</span>
              </a>
            </div>
          </motion.div>
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
            <h2 className="font-[family-name:var(--font-oswald)] text-[15vw] sm:text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase">
              ИЩЕМ<br /><span className="text-outline-white" style={{ WebkitTextStroke: '2px black' }}>МАСТЕРОВ</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-lg sm:text-2xl md:text-3xl font-medium mb-10 md:mb-16 max-w-xl text-neutral-700 leading-snug">
              Мастер? Хочешь работать в коллективе и зарабатывать стабильно, в комфорте в новом зале? Свяжись с нами!
            </p>
            <a href="tel:+79529787788" className="inline-flex items-center justify-between gap-4 bg-black text-white font-[family-name:var(--font-oswald)] text-xl sm:text-2xl md:text-4xl font-black py-4 px-6 md:py-6 md:px-12 brutal-border border-black brutal-shadow-inverse w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/50">
              <span>ОТПРАВИТЬ РЕЗЮМЕ</span> <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 shrink-0" />
            </a>
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

      {/* PRICE LIST */}
      <section id="price" className="py-16 md:py-40 px-4 md:px-8 max-w-[1600px] mx-auto w-full border-b-[3px] border-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-24 gap-4 md:gap-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-[18vw] md:text-[12vw] lg:text-[10rem] font-black tracking-tighter leading-none uppercase m-0 p-0">
            ПРАЙС
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base md:text-xl lg:text-2xl text-neutral-400 max-w-md text-left lg:text-right mb-2 md:mb-4">
            Точный расчет стоимости перед началом. Вы платите ровно ту сумму, что указана здесь.
          </p>
        </div>

        {/* ЗАГОЛОВОК ПРАЙСА */}
        <div className="w-full mb-12 border-b-[6px] border-white pb-6">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-7xl lg:text-9xl font-black uppercase text-left tracking-tighter mix-blend-difference">
            ВЕСЬ РАСКЛАД
          </h2>
        </div>

        {/* АККОРДЕОНЫ КАТЕГОРИЙ */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto w-full mb-20 md:mb-40">
          <PriceCategory title="Мужские стрижки" items={menu.hair} />
          <PriceCategory title="Борода и Бритье" items={menu.beard} />
          <PriceCategory title="Тюнинг (Химия / Цвет)" items={menu.tuning} />
          <PriceCategory title="Детали и Уход" items={menu.details} />
          <PriceCategory title="Мелкие (Дети)" items={menu.kids} />
        </div>

        <div className="w-full mt-10 md:mt-20 flex justify-center">
          <div className="bg-black border-[6px] border-white p-6 md:p-16 relative brutal-shadow-inverse w-full" style={{ boxShadow: '-15px 15px 0px 0px white' }}>
            <div className="mb-8 md:mb-12 relative z-10 w-full">
              <label className="text-4xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-oswald)] text-white uppercase tracking-tighter leading-[0.9] block">
                УЗНАЙ, ЧТО ТЫ МОЖЕШЬ СДЕЛАТЬ НА СВОЙ БЮДЖЕТ:
              </label>
            </div>

            {/* Status Section */}
            <div className={`mb-12 p-8 md:p-12 border-l-[12px] bg-white text-black border-black brutal-shadow`}>
              <div className="flex items-center mb-4">
                <h3 className="text-4xl md:text-7xl font-black font-[family-name:var(--font-oswald)] uppercase tracking-tighter leading-none">
                  {result.status.title}
                </h3>
              </div>
              <p className="text-xl md:text-3xl font-[family-name:var(--font-inter)] font-bold text-neutral-800 max-w-4xl">
                {result.status.desc}
              </p>
            </div>

            {/* Recommended Services */}
            <div className="bg-black p-8 md:p-12 border-[6px] border-white brutal-shadow-inverse mb-12 flex flex-col min-h-[450px] md:min-h-[600px]" style={{ boxShadow: '10px 10px 0px 0px white' }}>
              <div className="space-y-6 mb-auto">
                {result.recommendations.map((item, index) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between md:items-center group gap-2 md:gap-8 border-b-2 border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center gap-6">
                      <span className="text-3xl font-black font-[family-name:var(--font-oswald)] text-white/50 opacity-50 hidden md:block">0{index + 1}</span>
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-oswald)] uppercase text-white group-hover:pl-4 transition-all duration-300">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-3xl md:text-5xl font-black font-[family-name:var(--font-oswald)] text-white whitespace-nowrap bg-neutral-900 px-4 py-2 border-2 border-neutral-700 brutal-shadow-inverse group-hover:border-white group-hover:bg-black">
                      {item.price} ₽
                    </span>
                  </div>
                ))}
                {result.recommendations.length === 0 && (
                  <div className="text-neutral-500 font-bold text-3xl py-8 font-[family-name:var(--font-oswald)] uppercase">
                    Слишком мало... Двигай ползунок.
                  </div>
                )}
              </div>

              {result.recommendations.length > 0 && (
                <div className="flex flex-col md:flex-row justify-between md:items-end border-t-[8px] border-white pt-8 gap-6 mt-12">
                  <span className="text-4xl md:text-6xl font-black font-[family-name:var(--font-oswald)] text-neutral-400 uppercase tracking-tighter">
                    СУММА:
                  </span>
                  <span className="text-[4rem] md:text-[8rem] font-black font-[family-name:var(--font-oswald)] text-white bg-black px-6 leading-[0.8] inline-block transform -rotate-1 border-[4px] border-white brutal-shadow-inverse pt-8 pb-4">
                    {result.comboTotal} ₽
                  </span>
                </div>
              )}
            </div>

            {/* BIG SLIDER AT BOTTOM */}
            <div className="mt-8 mb-4 relative z-10 w-full h-[64px] md:h-[80px] flex items-center">
              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="brutal-slider w-full outline-none focus:outline-none focus:ring-0 appearance-none h-8 md:h-12 bg-white brutal-border border-white"
                style={{
                  backgroundImage: `linear-gradient(to right, #000000 ${((budget - 100) / 2900) * 100}%, transparent ${((budget - 100) / 2900) * 100}%)`,
                }}
              />
            </div>

            {/* Small Text / Rules */}
            <div className="text-center font-[family-name:var(--font-inter)] text-lg md:text-2xl font-black text-neutral-400 flex flex-col gap-4 mt-10 pt-10 border-t-2 border-neutral-800">
              <span className="uppercase tracking-[0.2em]">Честные цены. Без скрытых доплат.</span>
              <span className="text-xl md:text-3xl text-white">* Минимальная услуга — стрижка от 400 ₽</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32 w-full">
          <a
            href="https://dikidi.net/#widget=205276"
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
          <h2 className="font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl md:text-[8rem] font-black tracking-tighter mb-10 md:mb-20 leading-none uppercase">
            ПОЧЕМУ <span className="text-neutral-500">МЫ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Scissors className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "СТАНДАРТ КАЧЕСТВА",
                desc: "Мастера работают по строгим регламентам. Вы всегда получаете предсказуемый результат, независимо от того, в чьем кресле оказались."
              },
              {
                icon: <ShieldAlert className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "ПРАЙС БЕЗ СЮРПРИЗОВ",
                desc: "Забудьте про навязанные услуги и скрытые чеки. Вы знаете точную сумму до того, как мастер возьмет в руки машинку."
              },
              {
                icon: <Clock className="w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8" strokeWidth={1.5} />,
                title: "ДИСЦИПЛИНА ВРЕМЕНИ",
                desc: "Никаких задержек и томительных ожиданий. Мы уважаем ваше время: садитесь в кресло ровно в назначенную минуту, стрижем быстро, качественно и строго по делу."
              }
            ].map((item) => (
              <div key={item.title} className="bg-black text-white p-6 md:p-10 lg:p-14 brutal-border group hover:bg-white hover:text-black transition-colors duration-300 flex flex-col h-full cursor-default">
                <div className="text-white group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 uppercase">{item.title}</h3>
                <p className="font-[family-name:var(--font-inter)] text-neutral-400 group-hover:text-neutral-600 leading-relaxed text-base md:text-lg lg:text-xl mt-auto font-medium transition-colors">
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
              src="/logo.png"
              alt="13x13 Logo"
              width={300}
              height={300}
              className="w-full max-w-[200px] md:max-w-[280px] h-auto mix-blend-lighten"
            />
          </div>

          <div className="p-8 md:p-16 brutal-border-b border-white lg:border-b-0 lg:brutal-border-r flex flex-col justify-center text-center lg:text-left">
            <h4 className="font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black mb-4 md:mb-8 text-neutral-500 uppercase tracking-widest">ЛОКАЦИЯ</h4>
            <address className="not-italic font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] uppercase mb-4 text-white">
              г. Сочи<br />
              ул. Горького, 81а
            </address>
            <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl font-bold text-neutral-400">
              Район ЖД Вокзала
            </p>
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left">
            <h4 className="font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black mb-4 md:mb-8 text-neutral-500 uppercase tracking-widest">СВЯЗЬ</h4>
            <a href="tel:+79002871313" className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-black leading-none hover:underline underline-offset-8 mb-6 md:mb-8 inline-block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 p-2 -ml-2 text-white">
              +7 900 287-13-13
            </a>
            <div className="font-[family-name:var(--font-inter)] text-base md:text-lg font-medium text-neutral-400 space-y-2">
              <div>Резюме и сотрудничество:</div>
              <a href="mailto:tsehthirteen@ya.ru" className="text-xl md:text-2xl text-white font-bold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20">tsehthirteen@ya.ru</a><br />
              <span className="mt-4 inline-block">Управляющий: <a href="tel:+79529787788" className="text-white font-bold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20">+7 952 978-77-88</a></span>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-16 py-6 md:py-8 text-xs sm:text-sm md:text-base font-[family-name:var(--font-inter)] font-medium bg-[#111] text-neutral-500 gap-4">
          <div className="text-center md:text-left flex flex-col gap-1">
            <span>ИП МАЛХАСЯН ГЕОРГИЙ ГЕОРГИЕВИЧ</span>
            <span>ИНН: 232003837758 / ОГРН: 1027700067328</span>
          </div>
          <div className="text-center md:text-right uppercase font-bold tracking-widest text-neutral-400">
            © {new Date().getFullYear()} 13x13.
          </div>
        </div>
      </footer>
    </main>
  );
}
