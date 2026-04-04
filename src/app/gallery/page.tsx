"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// В этот массив вы потом впишете пути к вашим реальным фотографиям.
// Закиньте фото в папку public/gallery/ и напишите тут "/gallery/photo1.webp"
const PHOTOS = [
  { id: 1, src: "/logo_white.webp", alt: "Barbershop interior view", rotation: "-2deg" },
  { id: 2, src: "/logo_white.webp", alt: "Barbershop details", rotation: "3deg" },
  { id: 3, src: "/logo_white.webp", alt: "Barber tools", rotation: "-1deg" },
  { id: 4, src: "/logo_white.webp", alt: "Lounge area", rotation: "4deg" },
  { id: 5, src: "/logo_white.webp", alt: "Chair view", rotation: "-3deg" },
  { id: 6, src: "/logo_white.webp", alt: "Work process", rotation: "2deg" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black uppercase overflow-x-hidden pt-24 pb-20">
      
      {/* Navigation */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-12 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl hover:text-red-500 transition-colors brutal-border border-white hover:border-red-500 px-4 py-2 w-fit"
        >
          <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          НАЗАД
        </Link>
        <Image
          src="/logo_white.webp"
          alt="13x13 Logo"
          width={120}
          height={60}
          className="h-[30px] md:h-[40px] w-auto mix-blend-lighten opacity-50"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <h1 className="font-[family-name:var(--font-oswald)] font-black text-[12vw] md:text-[8rem] leading-[0.8] tracking-tighter mb-16 brutal-shadow text-white">
          ГАЛЕРЕЯ
        </h1>

        {/* BRUTALIST MASONRY / COLLAGE GRID */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
          {PHOTOS.map((photo) => (
            <div 
              key={photo.id}
              className="break-inside-avoid w-full group relative"
              style={{ transform: `rotate(${photo.rotation})` }}
            >
              <div className="bg-neutral-800 aspect-[4/5] sm:aspect-auto sm:min-h-[400px] border-4 md:border-8 border-white brutal-shadow group-hover:transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 relative overflow-hidden flex items-center justify-center">
                
                {/* 
                  Поменяйте src={photo.src} на ваши реальные фотки в массиве PHOTOS выше. 
                */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 opacity-30 group-hover:opacity-100"
                />
                
                {/* Подсказка-плейсхолдер на случай если реальной фотки нет */}
                <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-jetbrains-mono)] font-bold text-white opacity-40 pointer-events-none z-10 text-center px-4">
                  МЕСТО ДЛЯ ФОТО #{photo.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl border-l-4 border-red-600 pl-6 md:pl-10">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl md:text-3xl font-medium text-neutral-400">
            ЗДЕСЬ БУДУТ ВАШИ АТМОСФЕРНЫЕ ФОТОГРАФИИ.
            МЫ МОЖЕМ ИСПОЛЬЗОВАТЬ ЛУЧШИЕ КАДРЫ ДЛЯ ЗАМЕНЫ ЧЕРНОГО ФОНА В Главном меню.
          </p>
        </div>
      </div>
    </main>
  );
}
