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
  const [zoom, setZoom] = useState(0.4);
  const [format, setFormat] = useState<"post" | "story">("post");

  const dimensions = format === "post" 
    ? { width: 1080, height: 1350 } 
    : { width: 1080, height: 1920 };

  return (
    <div className="flex h-screen bg-neutral-950 overflow-hidden" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      
      {/* SIDEBAR - STATIC WIDTH */}
      <div className="w-[400px] shrink-0 h-full bg-black border-r border-white/10 p-10 flex flex-col justify-between z-50">
        <div>
          <div className="mb-12">
            <h3 className="font-black text-red-600 text-2xl italic tracking-tighter leading-none mb-2">13x13 CONTENT LAB</h3>
            <div className="h-1 w-20 bg-red-600 mb-4" />
            <p className="text-neutral-500 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase font-bold tracking-[0.2em]">Visual Generation System</p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-black text-white/40 tracking-widest block">Format</label>
              <div className="flex gap-2 font-[family-name:var(--font-jetbrains-mono)]">
                <button 
                  onClick={() => setFormat("post")}
                  className={`flex-1 py-4 border-2 transition-all text-xs font-black italic tracking-tighter ${format === "post" ? "bg-white text-black border-white" : "border-neutral-800 text-neutral-500 hover:border-neutral-700"}`}
                >
                  POST (4:5)
                </button>
                <button 
                  onClick={() => setFormat("story")}
                  className={`flex-1 py-4 border-2 transition-all text-xs font-black italic tracking-tighter ${format === "story" ? "bg-white text-black border-white" : "border-neutral-800 text-neutral-500 hover:border-neutral-700"}`}
                >
                  STORY (9:16)
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase font-black text-white/40 tracking-widest">
                <span>View Scale</span>
                <span className="text-red-500 text-sm font-black">{Math.round(zoom * 100)}%</span>
              </div>
              <input 
                type="range" min="0.1" max="1" step="0.01" 
                value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} 
                className="w-full h-1.5 bg-neutral-900 appearance-none cursor-pointer accent-red-600 border border-neutral-800 rounded-full"
              />
            </div>

            <div className="bg-red-600/5 border border-red-600/20 p-8 space-y-4 shadow-[0_20px_40px_rgba(229,0,0,0.05)] translate-x-2">
               <h4 className="text-white text-xs font-black uppercase tracking-tighter italic">Export Manual</h4>
               <ul className="space-y-3 font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-neutral-500 font-bold uppercase leading-snug">
                  <li className="flex gap-3"><span className="text-red-600">01</span> F12 (Inspect)</li>
                  <li className="flex gap-3"><span className="text-red-600">02</span> Ctrl+Shift+C</li>
                  <li className="flex gap-3"><span className="text-red-600">03</span> Select slide</li>
                  <li className="flex gap-3 whitespace-pre-wrap"><span className="text-red-600">04</span> Ctrl+Shift+P -{">"}<br/>&quot;Capture node screenshot&quot;</li>
               </ul>
            </div>
          </div>
        </div>

        <div className="opacity-10 text-[9px] font-black uppercase tracking-[0.4em] leading-tight mt-20 vertical-rl">
          13x13 — CONSCIOUS CHOICE — NO BULLSHIT
        </div>
      </div>

      {/* VIEWPORT - SCROLLABLE STAGE */}
      <div className="flex-1 overflow-auto bg-neutral-900 p-20 relative pattern-grid">
         {/* GRID DECORATION */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
         
         <div 
            className="flex gap-20 origin-top-left transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `scale(${zoom})` }}
         >
            {CAROUSEL_SLIDES.map((slide, i) => (
              <div
                key={i}
                id={`slide-${i}`}
                style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
                className="bg-black text-white relative shrink-0 overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,1)] border-[24px] border-black"
              >
                {/* NOISE & OVERLAY */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "400px" }} />
                
                {/* BG SELECTION */}
                {slide.bgImage ? (
                  <div className="absolute inset-0 z-0">
                    <Image src={slide.bgImage} alt="bg" fill className="object-cover opacity-50 grayscale contrast-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#1a0c0c] z-0" />
                )}

                {/* BRAND HEADER */}
                <div className="absolute top-16 left-16 right-16 flex justify-between items-start z-30">
                  <div className="w-48 opacity-90 drop-shadow-2xl">
                    <Image src="/logo_white.webp" alt="13x13" width={240} height={120} className="w-full mix-blend-lighten" />
                  </div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-black bg-white text-black px-10 py-4 border-[8px] border-black shadow-[15px_15px_0_0_#e50000] transform -rotate-1">
                    {String(i + 1).padStart(2, '0')}/07
                  </div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 flex flex-col justify-center relative z-20 gap-14 px-20 pt-40 pb-48 overflow-hidden">
                  
                  {slide.type === "title" && (
                    <div className="space-y-12">
                      <div className="inline-block bg-red-600 text-white px-12 py-6 text-5xl font-black transform -rotate-1 uppercase tracking-tighter border-8 border-white shadow-[20px_20px_0_0_#000]">
                        {slide.accent}
                      </div>
                      <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line text-white" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                        {slide.title}
                      </h1>
                      <h2 className="text-6xl font-[family-name:var(--font-jetbrains-mono)] text-red-600 font-black max-w-[850px] leading-tight underline underline-offset-[20px] decoration-[12px] decoration-white">
                        {slide.subtitle}
                      </h2>
                    </div>
                  )}

                  {slide.type === "text" && (
                    <div className="space-y-14 relative flex flex-col items-start translate-y-6">
                      {slide.sticker && (
                        <div className="absolute -top-10 right-0 bg-white text-black text-6xl font-black px-16 py-8 transform rotate-6 border-[12px] border-black shadow-[25px_25px_0_0_#e50000] z-30 -translate-y-full translate-x-6">
                          {slide.sticker}
                        </div>
                      )}
                      <h1 className="text-[120px] font-black leading-[0.8] tracking-tighter uppercase text-white mb-6">
                         <span className="text-red-700 block italic leading-none text-9xl mb-6">STOP ELITE.</span>
                        {slide.title}
                      </h1>
                      <div className="bg-white/5 backdrop-blur-xl p-12 border-l-[30px] border-red-600 shadow-2xl">
                        <p className="text-7xl font-[family-name:var(--font-jetbrains-mono)] text-white font-black leading-[1.2] uppercase tracking-tighter">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {slide.type === "comparison" && (
                    <div className="flex flex-col gap-14 items-center w-full">
                       <h1 className="text-[130px] font-black leading-[0.8] tracking-tighter uppercase text-white mb-10 border-b-[20px] border-red-600 pb-10 w-full text-center italic">
                        {slide.title}
                      </h1>
                      <div className="grid grid-cols-2 gap-12 w-full px-4">
                        <div className="bg-neutral-900 border-[8px] border-white p-14 shadow-[20px_20px_0_0_rgba(255,255,255,.05)] flex flex-col items-center gap-8 opacity-40 scale-90 grayscale">
                           <span className="text-3xl font-black uppercase tracking-[0.2em] opacity-80 opacity-60">ДРУГИЕ</span>
                           <span className="text-5xl font-black text-red-600">{slide.left?.val}</span>
                           <span className="text-[110px] font-black leading-none">{slide.left?.price}</span>
                        </div>
                        <div className="bg-white border-[10px] border-black p-14 shadow-[30px_30px_0_0_#e50000] flex flex-col items-center gap-8 transform -rotate-3 scale-110 z-30">
                           <span className="text-3xl font-black text-black opacity-30 uppercase tracking-[0.2em] leading-none">13X13</span>
                           <span className="text-7xl font-black text-blue-600 tracking-tighter leading-none mb-1">{slide.right?.val}</span>
                           <span className="text-[140px] font-black text-black leading-none drop-shadow-2xl">{slide.right?.price}</span>
                           <div className="absolute -top-6 -right-6 bg-red-600 text-white font-black px-8 py-4 transform rotate-12 text-3xl border-[6px] border-black shadow-xl">WIN</div>
                        </div>
                      </div>
                      <p className="text-5xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 text-center mt-20 font-black bg-neutral-950 px-12 py-6 border-4 border-neutral-800 uppercase tracking-tighter italic">
                        {slide.footer}
                      </p>
                    </div>
                  )}

                  {slide.type === "list" && (
                    <div className="space-y-24">
                      <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-line bg-white text-black px-16 py-8 inline-block transform -rotate-1 border-[14px] border-red-600 shadow-[25px_25px_0_0_#fff]">
                        {slide.title}
                      </h1>
                      <ul className="space-y-14 mt-12 bg-black/40 backdrop-blur-sm p-10 border-l-[24px] border-red-600">
                        {slide.items?.map((item, idx) => (
                          <li key={idx} className="text-7.5xl font-black uppercase flex items-center gap-14 leading-none tracking-tighter">
                            <span className="text-red-600 text-[100px] leading-none font-bold">-{">"}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {slide.type === "list_negative" && (
                    <div className="space-y-20">
                      <h1 className="text-[140px] font-black leading-[0.8] tracking-tighter uppercase text-white italic">
                        {slide.title}
                      </h1>
                      <ul className="space-y-12 border-l-[32px] border-red-600 pl-20 py-16 bg-white/5 backdrop-blur-xl">
                        {slide.items?.map((item, idx) => (
                          <li key={idx} className="text-7xl font-black uppercase text-neutral-500 flex items-center gap-14 leading-none grayscale">
                            <span className="text-red-700 text-9xl font-black opacity-30">/</span>
                            <span className="line-through decoration-white/10">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {slide.type === "outro" && (
                    <div className="space-y-24 flex flex-col items-center text-center px-10">
                      <h1 className="text-[200px] font-black leading-[0.7] tracking-tighter uppercase text-white scale-y-110 italic drop-shadow-[0_40px_80px_rgba(229,0,0,0.2)]">
                        {slide.title}
                      </h1>
                      <p className="text-7xl font-[family-name:var(--font-jetbrains-mono)] text-neutral-300 font-black max-w-[900px] leading-none uppercase tracking-tighter italic">
                        {slide.text}
                      </p>
                      <div className="mt-20 bg-red-600 text-white text-[100px] px-24 py-12 font-black uppercase transform rotate-2 border-[18px] border-white shadow-[40px_40px_0_0_#000] hover:scale-110 active:translate-x-4 active:translate-y-4 transition-all">
                        {slide.cta}
                      </div>
                    </div>
                  )}

                </div>

                {/* SYSTEM FOOTER */}
                <div className="absolute bottom-16 left-16 right-16 flex justify-between items-end z-30 opacity-95 border-t-[14px] border-red-600 pt-16">
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-5xl font-black tracking-widest uppercase text-white scale-x-110 origin-left">
                    SOCHI • GORKOGO 81A
                  </div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-6xl font-black text-black bg-white px-10 py-4 uppercase italic transform -rotate-1 border-[6px] border-black shadow-[15px_15px_0_0_#000]">
                    13X13.RU
                  </div>
                </div>

              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
