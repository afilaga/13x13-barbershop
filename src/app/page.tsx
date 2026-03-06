"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Scissors, ShieldAlert, Clock, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { prices } from "@/data/prices";

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string>(prices[0]?.category ?? "");

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">

      {/* 
        Aesthetic Anchor: Floating brutalist navigation 
      */}
      <nav className="fixed top-0 md:top-6 left-0 md:left-6 right-0 md:right-6 z-50 pointer-events-none">
        <div className="flex justify-center md:justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none pointer-events-auto border-b-2 border-white/10 md:border-none">
          <Image
            src="/logo.png"
            alt="13x13 Logo"
            width={120}
            height={60}
            className="h-[35px] md:h-[70px] w-auto relative z-10"
            priority
          />
          <div className="hidden md:flex gap-4 md:gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-sm md:text-xl tracking-tight text-white mix-blend-difference">
            <a href="#price" className="hover:line-through uppercase">Прайс</a>
            <a href="#about" className="hover:line-through uppercase">Философия</a>
            <a href="tel:+79002871313" className="hover:line-through uppercase text-neutral-300 ml-4 pb-0.5 border-b-2 border-transparent hover:border-white transition-all">
              +7 900 287-13-13
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end px-4 md:px-8 pb-10 md:pb-24 pt-32 brutal-border-b">
        {/* Decorative Grid Overlay to enforce "Industrial" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[1600px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <div className="w-fit bg-white text-black px-3 py-1 md:px-4 md:py-2 font-[family-name:var(--font-oswald)] font-bold text-base md:text-2xl mb-6 md:mb-8 tracking-wide transform -rotate-1 origin-left brutal-border border-black">
              ОТКРЫТИЕ — АПРЕЛЬ 2026
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-6 lg:mb-12 w-full">
              <h1 className="w-full lg:w-auto flex justify-start lg:justify-center m-0 shrink-0">
                <span className="sr-only">13x13</span>
                <Image
                  src="/logo.png"
                  alt="13x13"
                  width={500}
                  height={500}
                  className="w-[70vw] sm:w-[50vw] lg:w-[320px] xl:w-[400px] h-auto object-contain object-left lg:object-center mix-blend-lighten"
                  priority
                />
              </h1>

              <h2 className="font-[family-name:var(--font-oswald)] text-[9.5vw] md:text-[6vw] lg:text-[4rem] xl:text-[5.5rem] 2xl:text-[6.5rem] leading-[0.9] lg:leading-[1] font-black tracking-tighter break-words w-fit bg-white text-black px-4 py-2 md:px-6 md:py-3 transform rotate-1 origin-left lg:origin-center shrink-0 lg:mt-0">
                ЛОУКОСТ<br className="hidden lg:block" /> БАРБЕРШОП<br className="hidden lg:block" /> В СОЧИ
              </h2>
            </div>

            <div className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl text-neutral-400 font-medium leading-relaxed mt-4 flex flex-col gap-2 md:gap-3">
              <span className="text-white font-bold">Новый барбершоп в Сочи с честными ценами.</span>
              <span>
                Стрижём и бреем
                <span className="bg-white text-black px-2 py-0.5 md:px-3 md:py-1 font-[family-name:var(--font-oswald)] font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter transform -rotate-2 inline-block mx-2 brutal-border border-transparent">
                  от 400 рублей!
                </span>
              </span>
              <span>Находимся на Горького 81а, напротив клуба DDX.</span>
              <span>Мы ценим ваше время и бережём бюджет.</span>
              <span className="text-white">Запись будет доступна в апреле.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4 md:gap-6 w-full mt-4 md:mt-0"
          >
            <a
              href="https://dikidi.net/#widget=205276"
              className="flex items-center justify-between bg-white text-black font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-black py-6 px-6 md:py-8 md:px-8 brutal-border border-black brutal-shadow group w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              aria-label="Записаться онлайн"
            >
              <span className="uppercase">ЗАПИСЬ В АПРЕЛЕ</span>
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300" strokeWidth={3} />
            </a>
            <div className="bg-black brutal-border border-white p-4 md:p-6 flex flex-col gap-2">
              <a href="https://yandex.ru/maps/-/CPuyYX37" target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center gap-3 text-neutral-400 font-[family-name:var(--font-inter)] text-sm md:text-base font-bold hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0 group-hover:-translate-y-1 transition-transform" />
                <span className="underline underline-offset-4 decoration-neutral-600 group-hover:decoration-white">г. Сочи, ул. Горького, 81а, напротив ТЦ Сан Сити</span>
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
            <a href="mailto:tsehthirteen@ya.ru" className="inline-flex items-center justify-between gap-4 bg-black text-white font-[family-name:var(--font-oswald)] text-xl sm:text-2xl md:text-4xl font-black py-4 px-6 md:py-6 md:px-12 brutal-border border-black brutal-shadow-inverse w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/50">
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

        <div className="w-full brutal-border-t border-white flex flex-col">
          {prices.map((category) => {
            const isOpen = openCategory === category.category;
            return (
              <div key={category.id} className="flex flex-col w-full brutal-border-b border-white">
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? "" : category.category)}
                  className="flex justify-between items-center w-full py-6 md:py-10 group cursor-pointer hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl lg:text-7xl font-black uppercase text-left sm:group-hover:pl-4 transition-all duration-300 px-4">
                    {category.category}
                  </h3>
                  <div className={`text-4xl md:text-6xl font-black font-[family-name:var(--font-oswald)] px-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#111111]"
                    >
                      <div className="p-4 md:p-10 flex flex-col w-full">
                        {category.items.map((item) => (
                          <div key={item.id} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 md:py-8 brutal-border-b border-neutral-800 last:border-0 hover:border-white transition-colors duration-300 gap-2 md:gap-4 cursor-default w-full">
                            <div className="flex flex-col gap-1 md:gap-2 w-full sm:w-auto">
                              <span className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-bold tracking-tight uppercase sm:group-hover:pl-4 transition-all duration-300">
                                {item.name}
                              </span>
                              {item.desc && (
                                <span className="font-[family-name:var(--font-inter)] text-sm md:text-base lg:text-lg text-neutral-500 font-medium sm:group-hover:pl-4 transition-all duration-300 delay-75">
                                  {item.desc}
                                </span>
                              )}
                            </div>
                            <span className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-black whitespace-nowrap text-white md:text-neutral-300 group-hover:text-white transition-colors self-end sm:self-auto mt-2 sm:mt-0">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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
