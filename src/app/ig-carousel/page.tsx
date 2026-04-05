"use client";

import Image from "next/image";
import { useState } from "react";

// Тексты для слайдов, разбитые на короткие, бьющие фразы.
const CAROUSEL_SLIDES = [
  {
    type: "title",
    title: "ПОЧЕМУ\nВЫ\nПЕРЕПЛАЧИВАЕТЕ?",
    subtitle: "И как платить только за результат",
    accent: "13x13",
    bgImage: "" 
  },
  {
    type: "text",
    title: "5000 ПУСТЫХ\nРУБЛЕЙ",
    text: "Многие устали платить 5000₽ за стрижку, понимая, что половина этой суммы — это бренд барбершопа, позолоченный интерьер и навязанные «бонусы». Вы платите за воздух.",
    sticker: "ФАКТ",
    bgImage: ""
  },
  {
    type: "comparison",
    title: "ПРОСТАЯ\nАРИФМЕТИКА",
    left: { title: "ДРУГИЕ", val: "1 стрижка", price: "5000₽" },
    right: { title: "13x13", val: "3 стрижки", price: "5000₽" },
    footer: "Тот же уровень сервиса. В 3 раза больше стиля."
  },
  {
    type: "list",
    title: "ОСТАВИЛИ\nГЛАВНОЕ",
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
    title: "УМНЫЙ\nРАСХОД",
    text: "Мы используем профессиональные бренды — не обязательно самые раскрученные, но действительно работающие. Наша задача — снизить цену, не снижая качество.",
    sticker: "БАЛАНС"
  },
  {
    type: "outro",
    title: "ОСОЗНАННЫЙ\nВЫБОР",
    text: "Стиль без переплаты. Сервис, который стоит своих денег.",
    cta: "ЗАПИШИСЬ СЕЙЧАС",
    bgImage: ""
  }
];

export default function IGCarouselGenerator() {
  const [zoom, setZoom] = useState(0.3);
  const [format, setFormat] = useState<"post" | "story">("post");

  const dimensions = format === "post" 
    ? { width: 1080, height: 1350, ratio: "4/5" } 
    : { width: 1080, height: 1920, ratio: "9/16" };

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-auto overflow-y-auto p-8 flex flex-col items-start" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      {/* Объяснение и Контроль */}
      <div className="fixed top-4 left-4 bg-black text-white p-6 border border-white/20 z-50 rounded-lg shadow-2xl max-w-sm font-[family-name:var(--font-jetbrains-mono)] text-sm">
        <h3 className="font-bold text-red-500 mb-2 uppercase text-lg italic">IG CONTENT CREATOR</h3>
        <p className="text-neutral-400 mb-4 animate-pulse">Генератор контента из философии 13x13</p>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
             <button 
                onClick={() => setFormat("post")}
                className={`py-2 px-4 border-2 font-black transition-colors ${format === "post" ? "bg-white text-black border-white" : "text-white border-neutral-800 hover:border-neutral-500"}`}
             >
                POST (4:5)
             </button>
             <button 
                onClick={() => setFormat("story")}
                className={`py-2 px-4 border-2 font-black transition-colors ${format === "story" ? "bg-white text-black border-white" : "text-white border-neutral-800 hover:border-neutral-500"}`}
             >
                STORY (9:16)
             </button>
          </div>

          <div>
            <label className="block text-xs uppercase mb-1 font-bold">Zoom Preview: {Math.round(zoom * 100)}%</label>
            <input 
              type="range" 
              min="0.1" 
              max="0.8" 
              step="0.05" 
              value={zoom} 
              onChange={(e) => setZoom(parseFloat(e.target.value))} 
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>
          
          <div className="p-4 bg-neutral-800 rounded-none border-l-4 border-l-red-600 shadow-xl">
            <p className="text-xs text-white mb-2 font-black uppercase tracking-widest">ИНСТРУКЦИЯ ПО ЗАХВАТУ</p>
            <ol className="list-decimal list-inside text-[11px] space-y-2 text-neutral-400 font-bold">
              <li>Открой ПАНЕЛЬ РАЗРАБОТЧИКА (F12)</li>
              <li>Нажми значок "ВЫБОР КУРСОРОМ" (Ctrl+Shift+C)</li>
              <li>Кликни на нужный слайд</li>
              <li>Ctrl+Shift+P -{">"} "Capture node screenshot"</li>
            </ol>
            <p className="mt-4 text-[10px] text-neutral-500 italic uppercase underline opacity-50">Результат будет в 4К разрешении для идеального качества</p>
          </div>
        </div>
      </div>

      <div 
        className="flex gap-16 pt-20 pb-20 origin-top-left transition-all duration-500 ease-in-out" 
        style={{ transform: `scale(${zoom})` }}
      >
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={i}
            id={`slide-${i}`}
            style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
            className="bg-black text-white relative shrink-0 border-[30px] border-black overflow-hidden group flex flex-col justify-between p-24 shadow-[0_0_150px_rgba(0,0,0,1)] selection:bg-red-600 selection:text-white"
          >
            {/* ФОНОВЫЙ ШУМ */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "400px" }} />
            
            {/* BACKGROUND IMAGE OR GRADIENT */}
            {slide.bgImage ? (
              <div className="absolute inset-0 z-0">
                <Image src={slide.bgImage} alt="bg" fill className="object-cover opacity-50 grayscale contrast-150 brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#250505] z-0" />
            )}

            {/* HEADER */}
            <div className="flex justify-between items-start w-full relative z-20">
              <div className="w-56 italic">
                <Image src="/logo_white.webp" alt="13x13" width={280} height={140} className="w-full mix-blend-lighten drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-6xl font-black bg-white text-black px-10 py-4 border-[8px] border-black shadow-[15px_15px_0_0_#e50000] transform rotate-2">
                {String(i + 1).padStart(2, '0')}/07
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-center relative z-20 gap-16">
              
              {slide.type === "title" && (
                <div className="space-y-16">
                  <div className="inline-block bg-red-600 text-white px-12 py-6 text-6xl font-black transform -rotate-1 uppercase tracking-tighter border-8 border-white shadow-[20px_20px_0_0_#000]">
                    {slide.accent}
                  </div>
                  <h1 className="text-[170px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white" style={{ WebkitTextStroke: "4px white", color: "transparent" }}>
                    {slide.title}
                  </h1>
                  <h2 className="text-7xl font-[family-name:var(--font-jetbrains-mono)] text-red-500 font-black max-w-[950px] leading-tight underline underline-offset-[20px] decoration-8 decoration-white">
                    {slide.subtitle}
                  </h2>
                </div>
              )}

              {slide.type === "text" && (
                <div className="space-y-20 relative">
                  {slide.sticker && (
                    <div className="absolute -top-40 -right-12 bg-white text-black text-6xl font-black px-16 py-8 transform -rotate-6 border-[12px] border-black shadow-[30px_30px_0_0_#e50000] z-30">
                      {slide.sticker}
                    </div>
                  )}
                  <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white mb-12">
                     <span className="text-red-700 block">STOP.</span>
                    {slide.title}
                  </h1>
                  <p className="text-7xl font-[family-name:var(--font-jetbrains-mono)] text-white font-black max-w-[950px] leading-[1.2] uppercase bg-black/50 p-8 border-l-[24px] border-red-600 backdrop-blur-md">
                    {slide.text}
                  </p>
                </div>
              )}

              {slide.type === "comparison" && (
                <div className="flex flex-col gap-16 items-center">
                   <h1 className="text-[130px] font-black leading-[0.85] tracking-tighter uppercase text-white mb-12 border-b-[16px] border-red-600 pb-8 w-full text-center italic">
                    {slide.title}
                  </h1>
                  <div className="grid grid-cols-2 gap-16 w-full px-12">
                    <div className="bg-neutral-900 border-[8px] border-white p-16 shadow-[25px_25px_0_0_rgba(255,255,255,0.1)] flex flex-col items-center gap-8 opacity-60 scale-90 grayscale">
                       <span className="text-4xl font-black opacity-80 uppercase tracking-widest">{slide.left?.title}</span>
                       <span className="text-6xl font-black text-red-500">{slide.left?.val}</span>
                       <span className="text-[100px] font-black">{slide.left?.price}</span>
                    </div>
                    <div className="bg-white border-[10px] border-black p-16 shadow-[35px_35px_0_0_#e50000] flex flex-col items-center gap-8 transform -rotate-3 scale-110 z-30">
                       <span className="text-4xl font-black text-black opacity-30 uppercase tracking-widest leading-none">{slide.right?.title}</span>
                       <span className="text-7xl font-black text-blue-600 tracking-tighter">{slide.right?.val}</span>
                       <span className="text-[130px] font-black text-black leading-none drop-shadow-xl">{slide.right?.price}</span>
                       <div className="absolute top-0 right-0 bg-red-600 text-white font-black px-4 py-2 transform rotate-12 -translate-y-1/2 translate-x-1/2 text-2xl border-4 border-black">WIN</div>
                    </div>
                  </div>
                  <p className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-white text-center mt-20 font-black bg-neutral-900 border-4 border-white px-10 py-5">{slide.footer}</p>
                </div>
              )}

              {slide.type === "list" && (
                <div className="space-y-32">
                  <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line bg-white text-black px-16 py-8 inline-block transform -rotate-2 border-[12px] border-red-600 shadow-[25px_25px_0_0_#fff]">
                    {slide.title}
                  </h1>
                  <ul className="space-y-14">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-[85px] font-black uppercase flex items-center gap-14 group">
                        <span className="w-24 h-24 bg-red-600 inline-block shrink-0 border-[8px] border-white shadow-[12px_12px_0_0_#000]" />
                        <span className="tracking-tighter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "list_negative" && (
                <div className="space-y-20">
                  <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white italic">
                    {slide.title}
                  </h1>
                  <ul className="space-y-14 border-l-[32px] border-red-600 pl-24 py-16 bg-neutral-900/80 backdrop-blur-xl shadow-2xl">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-7xl font-black uppercase text-neutral-400 flex items-center gap-14">
                        <span className="text-red-600 text-[120px] leading-none font-light opacity-50">/</span>
                        <span className="line-through decoration-white/20">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "outro" && (
                <div className="space-y-24 flex flex-col items-center text-center px-12">
                  <h1 className="text-[200px] font-black leading-[0.7] tracking-tighter uppercase text-white scale-y-110 drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                    {slide.title}
                  </h1>
                  <p className="text-7xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 font-black max-w-[900px] leading-none uppercase tracking-tighter italic">
                    {slide.text}
                  </p>
                  <div className="mt-16 bg-red-600 text-white text-[95px] px-24 py-12 font-black uppercase transform rotate-1 border-[16px] border-white shadow-[40px_40px_0_0_#000] hover:scale-110 shadow-red-600/20 active:translate-x-4 active:translate-y-4 transition-all">
                    {slide.cta}
                  </div>
                </div>
              )}

            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-end w-full relative z-20 opacity-90 border-t-[12px] border-red-600 pt-16 mt-auto">
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-5xl font-black tracking-widest uppercase text-white">
                SOCHI • GORKOGO 81A
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-5xl font-black text-black bg-white px-8 py-3 uppercase italic transform -rotate-1 border-4 border-black">
                @BARBER_13X13
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
