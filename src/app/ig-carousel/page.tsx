"use client";

import Image from "next/image";

// Тексты для слайдов, разбитые на короткие, бьющие фразы.
const CAROUSEL_SLIDES = [
  {
    type: "title",
    title: "ПОЧЕМУ\\nВЫ\\nПЕРЕПЛАЧИВАЕТЕ?",
    subtitle: "И как платить только за результат",
    accent: "13x13"
  },
  {
    type: "text",
    title: "5000 ПУСТЫХ\\nРУБЛЕЙ",
    text: "Многие устали платить 5000₽ за стрижку, понимая, что половина этой суммы — это бренд барбершопа, позолоченный интерьер и навязанные «бонусы». Вы платите за воздух.",
    sticker: "ФАКТ"
  },
  {
    type: "list",
    title: "ОСТАВИЛИ\\nГЛАВНОЕ",
    items: [
      "СИЛЬНЫЙ СЕРВИС",
      "ОПЫТНЫЕ МАСТЕРА",
      "КАЧЕСТВЕННЫЕ МАТЕРИАЛЫ",
      "ЧЕСТНАЯ И ПОНЯТНАЯ ЦЕНА"
    ],
    sticker: "СУТЬ"
  },
  {
    type: "list_negative",
    title: "БЕЗ ПЕРЕПЛАТЫ ЗА:",
    items: [
      "ПРИСТАВКИ И РАЗВЛЕЧЕНИЯ",
      "АЛКОГОЛЬ И КОФЕ «В ПОДАРОК»",
      "ФАЛЬШИВУЮ ПРЕМИАЛЬНОСТЬ",
      "ЧУЖИЕ АМБИЦИИ"
    ]
  },
  {
    type: "text",
    title: "УМНЫЙ\\nРАСХОД",
    text: "Если раньше вы тратили 5000₽ на одну стрижку, то у нас за те же деньги вы получаете 2-3 качественных визита. Тот же уровень профессионального сервиса, но без переплаты за люкс.",
    sticker: "БАЛАНС"
  },
  {
    type: "outro",
    title: "ОСОЗНАННЫЙ\\nВЫБОР",
    text: "Стиль без переплаты. Сервис, который стоит своих денег.",
    cta: "ЗАПИШИСЬ СЕЙЧАС"
  }
];

export default function IGCarouselGenerator() {
  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-auto overflow-y-hidden p-8 flex gap-8 items-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      {/* Объяснение для пользователя */}
      <div className="fixed top-4 left-4 bg-black text-white p-4 border border-white/20 z-50 rounded-lg shadow-2xl max-w-sm font-[family-name:var(--font-jetbrains-mono)] text-xs lg:text-sm">
        <h3 className="font-bold text-red-500 mb-2 uppercase">Instagram Carousel Generator</h3>
        <p>Здесь карточки идеального размера для Инстаграма (1080x1350 px). Сжимайте масштаб страницы (Ctrl -) чтобы увидеть их целиком.</p>
        <p className="mt-2 text-neutral-400">Делайте скриншоты (например с помощью расширений браузера для захвата нод) или вызовите меню разработчика (F12) -></p>
        <code className="block mt-2 bg-neutral-800 p-2 text-green-400">Ctrl+Shift+P -> Capture node screenshot</code>
      </div>

      <div className="flex gap-16 mx-auto pt-20 pb-10">
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={i}
            id={`slide-${i}`}
            // Размеры Инстаграма: 1080 x 1350 (соотношение 4:5)
            className="w-[1080px] h-[1350px] bg-black text-white relative shrink-0 border-[20px] border-black overflow-hidden group flex flex-col justify-between p-24 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* ФОНОВЫЙ ШУМ & ЭФФЕКТЫ */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "300px" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-[#100303] z-[-1]" />

            {/* HEADER (Номер слайда и лого) */}
            <div className="flex justify-between items-start w-full relative z-10">
              <div className="w-40">
                <Image src="/logo_white.webp" alt="13x13" width={200} height={100} className="w-full mix-blend-lighten opacity-80" />
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold bg-white text-black px-6 py-2 border-[4px] border-black brutal-shadow-inverse transform rotate-3">
                {String(i + 1).padStart(2, '0')}/06
              </div>
            </div>

            {/* CONTENT BASED ON TYPE */}
            <div className="flex-1 flex flex-col justify-center relative z-10">
              
              {slide.type === "title" && (
                <div className="space-y-12">
                  <div className="inline-block bg-red-600 text-white px-8 py-4 text-4xl font-bold transform -rotate-2 uppercase tracking-widest border-4 border-black brutal-shadow-inverse">
                    {slide.accent}
                  </div>
                  <h1 className="text-[140px] font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-white" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                    {slide.title}
                  </h1>
                  <h2 className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-400 font-bold max-w-[800px] leading-snug">
                    {slide.subtitle}
                  </h2>
                </div>
              )}

              {slide.type === "text" && (
                <div className="space-y-16">
                  {slide.sticker && (
                    <div className="absolute -top-20 -right-10 bg-white text-black text-4xl font-bold px-8 py-4 transform rotate-12 border-8 border-black shadow-[15px_15px_0_0_#e50000]">
                      {slide.sticker}
                    </div>
                  )}
                  <h1 className="text-[120px] font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-red-600">
                    {slide.title}
                  </h1>
                  <p className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-white font-medium max-w-[900px] leading-[1.4]">
                    {slide.text}
                  </p>
                </div>
              )}

              {slide.type === "list" && (
                <div className="space-y-20">
                  <h1 className="text-[120px] font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line bg-white text-black px-8 py-4 inline-block transform -rotate-1 border-[6px] border-red-600 brutal-shadow">
                    {slide.title}
                  </h1>
                  <ul className="space-y-10">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-6xl font-black uppercase flex items-center gap-8">
                        <span className="w-16 h-16 bg-red-600 inline-block shrink-0 border-[4px] border-white shadow-[8px_8px_0_0_#fff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "list_negative" && (
                <div className="space-y-20">
                  <h1 className="text-[120px] font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-white">
                    {slide.title}
                  </h1>
                  <ul className="space-y-10 border-l-[16px] border-red-600 pl-16 py-8">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-5xl font-black uppercase text-neutral-400 flex items-center gap-8">
                        <span className="text-red-600 text-6xl">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "outro" && (
                <div className="space-y-16 flex flex-col items-center text-center">
                  <h1 className="text-[150px] font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line text-white">
                    {slide.title}
                  </h1>
                  <p className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 font-bold max-w-[800px] leading-snug">
                    {slide.text}
                  </p>
                  <div className="mt-12 bg-red-600 text-white text-6xl px-16 py-8 font-black uppercase transform rotate-2 border-8 border-white shadow-[20px_20px_0_0_#fff]">
                    {slide.cta}
                  </div>
                </div>
              )}

            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-end w-full relative z-10 opacity-60">
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold tracking-widest uppercase">
                SOCHI • GORKOGO 81A
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-red-500 uppercase">
                @barber_13x13
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
