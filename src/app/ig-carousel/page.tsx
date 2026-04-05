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
  const [zoom, setZoom] = useState(0.35);
  const [format, setFormat] = useState<"post" | "story">("post");

  const dimensions = format === "post" 
    ? { width: 1080, height: 1350 } 
    : { width: 1080, height: 1920 };

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-auto overflow-y-auto p-12 flex flex-col items-start" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      {/* КОНТРОЛЬНАЯ ПАНЕЛЬ */}
      <div className="fixed top-6 left-6 bg-black text-white p-6 border border-white/20 z-50 rounded-none shadow-[20px_20px_0_0_rgba(0,0,0,0.5)] max-w-sm font-[family-name:var(--font-jetbrains-mono)] text-sm">
        <h3 className="font-black text-red-600 mb-2 uppercase text-xl italic tracking-tighter leading-none underline">13x13 CONTENT LAB</h3>
        <p className="text-neutral-500 mb-6 text-xs uppercase font-bold tracking-widest leading-tight">Интерфейс для генерации визуала</p>
        
        <div className="space-y-6">
          <div className="flex bg-neutral-900 p-1 border border-neutral-800">
             <button 
                onClick={() => setFormat("post")}
                className={`flex-1 py-3 px-4 font-black transition-all text-xs uppercase tracking-widest ${format === "post" ? "bg-white text-black shadow-lg" : "text-neutral-500 hover:text-white"}`}
             >
                POST
             </button>
             <button 
                onClick={() => setFormat("story")}
                className={`flex-1 py-3 px-4 font-black transition-all text-xs uppercase tracking-widest ${format === "story" ? "bg-white text-black shadow-lg" : "text-neutral-500 hover:text-white"}`}
             >
                STORY
             </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px] uppercase font-bold text-neutral-400">
               <span>Preview Scale</span>
               <span>{Math.round(zoom * 100)}%</span>
            </div>
            <input 
              type="range" 
              min="0.1" 
              max="1" 
              step="0.01" 
              value={zoom} 
              onChange={(e) => setZoom(parseFloat(e.target.value))} 
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
          </div>
          
          <div className="p-4 bg-red-600/10 border-l-4 border-l-red-600 mt-4 shadow-xl shadow-red-600/5">
            <p className="text-[11px] text-white mb-2 font-black uppercase tracking-widest leading-none">Как скачать 4K:</p>
            <ol className="list-decimal list-inside text-[10px] space-y-2 text-neutral-400 font-medium leading-relaxed">
              <li>Открой F12</li>
              <li>Нажми <span className="text-white">Ctrl+Shift+C</span> и выбери слайд</li>
              <li><span className="text-white">Ctrl+Shift+P</span> -{">"} "Capture node screenshot"</li>
            </ol>
          </div>
        </div>
      </div>

      <div 
        className="flex gap-12 pt-12 pb-24 origin-top-left transition-all duration-300 ease-out" 
        style={{ transform: `scale(${zoom})` }}
      >
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={i}
            id={`slide-${i}`}
            style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
            className="bg-black text-white relative shrink-0 overflow-hidden group flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)] border-[20px] border-black"
          >
            {/* ФОНОВЫЙ ШУМ */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "400px" }} />
            
            {/* BACKGROUND */}
            {slide.bgImage ? (
              <div className="absolute inset-0 z-0">
                <Image src={slide.bgImage} alt="bg" fill className="object-cover opacity-50 grayscale contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#1a0c0c] z-0" />
            )}

            {/* HEADER - NOW ABSOLUTE TO NOT TAKE UP CONTENT SPACE */}
            <div className="absolute top-16 left-16 right-16 flex justify-between items-start z-30">
              <div className="w-48 opacity-80 mix-blend-lighten">
                <Image src="/logo_white.webp" alt="13x13" width={240} height={120} className="w-full" />
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-black bg-white text-black px-8 py-3 border-[6px] border-black shadow-[10px_10px_0_0_#e50000] rotate-1">
                {String(i + 1).padStart(2, '0')}/07
              </div>
            </div>

            {/* CONTENT - MORE VERTICAL FREEDOM */}
            <div className="flex-1 flex flex-col justify-center relative z-20 gap-12 px-16 pt-32 pb-40 overflow-hidden">
              
              {slide.type === "title" && (
                <div className="space-y-10">
                  <div className="inline-block bg-red-600 text-white px-10 py-5 text-4xl font-black transform -rotate-1 uppercase tracking-widest border-4 border-white shadow-[12px_12px_0_0_#000]">
                    {slide.accent}
                  </div>
                  <h1 className="text-[140px] font-[family-name:var(--font-oswald)] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white break-words" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                    {slide.title}
                  </h1>
                  <h2 className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-red-600 font-black max-w-[850px] leading-tight underline underline-offset-[16px] decoration-[10px] decoration-white">
                    {slide.subtitle}
                  </h2>
                </div>
              )}

              {slide.type === "text" && (
                <div className="space-y-12 relative flex flex-col">
                  {slide.sticker && (
                    <div className="absolute top-0 right-0 bg-white text-black text-5xl font-black px-12 py-6 transform rotate-6 border-[10px] border-black shadow-[20px_20px_0_0_#e50000] z-30 -translate-y-full mb-10 translate-x-4">
                      {slide.sticker}
                    </div>
                  )}
                  <h1 className="text-[120px] font-[family-name:var(--font-oswald)] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white mb-4 break-words">
                     <span className="text-red-700 block italic leading-none text-8xl mb-4">STOP ELITE.</span>
                    {slide.title}
                  </h1>
                  <div className="bg-white/5 backdrop-blur-md p-10 border-l-[30px] border-red-600">
                    <p className="text-5.5xl md:text-6xl font-[family-name:var(--font-jetbrains-mono)] text-white font-black leading-[1.25] uppercase break-words tracking-tighter">
                      {slide.text}
                    </p>
                  </div>
                </div>
              )}

              {slide.type === "comparison" && (
                <div className="flex flex-col gap-14 items-center w-full">
                   <h1 className="text-[120px] font-[family-name:var(--font-oswald)] font-black leading-[0.8] tracking-tighter uppercase text-white mb-4 border-b-[16px] border-red-600 pb-8 w-full text-center">
                    {slide.title}
                  </h1>
                  <div className="grid grid-cols-2 gap-10 w-full px-4">
                    <div className="bg-neutral-900 border-[6px] border-white p-12 shadow-[15px_15px_0_0_rgba(255,255,255,0.05)] flex flex-col items-center gap-6 opacity-40 scale-90 grayscale">
                       <span className="text-2xl font-black uppercase tracking-widest opacity-60">ДРУГИЕ</span>
                       <span className="text-4xl font-black text-red-500 whitespace-nowrap">{slide.left?.val}</span>
                       <span className="text-[80px] font-black leading-none">{slide.left?.price}</span>
                    </div>
                    <div className="bg-white border-[8px] border-black p-12 shadow-[25px_25px_0_0_#e50000] flex flex-col items-center gap-6 transform -rotate-2 scale-110 z-30">
                       <span className="text-2xl font-black text-black opacity-30 uppercase tracking-widest leading-none">13x13</span>
                       <span className="text-6xl font-black text-blue-600 tracking-tighter whitespace-nowrap">{slide.right?.val}</span>
                       <span className="text-[110px] font-black text-black leading-none">{slide.right?.price}</span>
                       <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-6 py-2 transform rotate-12 text-2xl border-4 border-black">WIN</div>
                    </div>
                  </div>
                  <p className="text-4.5xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 text-center mt-12 font-black bg-neutral-950 px-10 py-5 border-2 border-neutral-800 uppercase tracking-tighter">
                    {slide.footer}
                  </p>
                </div>
              )}

              {slide.type === "list" && (
                <div className="space-y-20">
                  <h1 className="text-[130px] font-[family-name:var(--font-oswald)] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line bg-white text-black px-12 py-6 inline-block transform -rotate-1 border-[10px] border-red-600 shadow-[20px_20px_0_0_#fff] break-words">
                    {slide.title}
                  </h1>
                  <ul className="space-y-12 mt-10">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-7xl font-black uppercase flex items-center gap-12 leading-none tracking-tighter">
                        <span className="w-16 h-16 bg-red-600 inline-block shrink-0 border-[6px] border-white shadow-[10px_10px_0_0_#000]" />
                        <span className="break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "list_negative" && (
                <div className="space-y-16">
                  <h1 className="text-[130px] font-[family-name:var(--font-oswald)] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white italic">
                    {slide.title}
                  </h1>
                  <ul className="space-y-12 border-l-[30px] border-red-600 pl-16 py-12 bg-white/5 backdrop-blur-md">
                    {slide.items?.map((item, idx) => (
                      <li key={idx} className="text-6.5xl font-black uppercase text-neutral-500 flex items-center gap-12 leading-none whitespace-nowrap">
                        <span className="text-red-700 text-8xl font-black opacity-60">/</span>
                        <span className="line-through decoration-white/20">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === "outro" && (
                <div className="space-y-20 flex flex-col items-center text-center px-10 pt-20">
                  <h1 className="text-[180px] font-[family-name:var(--font-oswald)] font-black leading-[0.75] tracking-tighter uppercase text-white scale-y-105 italic">
                    {slide.title}
                  </h1>
                  <p className="text-6.5xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 font-black max-w-[850px] leading-tight uppercase tracking-tighter">
                    {slide.text}
                  </p>
                  <div className="mt-16 bg-red-600 text-white text-[85px] px-20 py-10 font-black uppercase transform rotate-2 border-[14px] border-white shadow-[30px_30px_0_0_#000]">
                    {slide.cta}
                  </div>
                </div>
              )}

            </div>

            {/* FOOTER - ALWAYS FIXED AT BOTTOM */}
            <div className="absolute bottom-16 left-16 right-16 flex justify-between items-end z-20 opacity-90 border-t-[10px] border-red-600 pt-12">
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-black tracking-widest uppercase text-white">
                SOCHI • GORKOGO 81A
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-black text-black bg-white px-8 py-3 uppercase italic transform rotate-1 border-4 border-black">
                @BARBER_13X13
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
