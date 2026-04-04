"use client";

import { useState } from "react";
import { ArrowUpRight, Scissors, Star, Users, Zap, Briefcase, CheckCircle2, BarChart3, Clock, Wallet, Hammer, TrendingUp, Phone, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CareerLanding() {
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", phone: "", age: "", experience: "" });
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("loading");

        try {
            const res = await fetch("/api/hiring", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, agreed }),
            });

            if (res.ok) {
                setFormStatus("success");
                setFormData({ name: "", phone: "", age: "", experience: "" });
                setAgreed(false);
            } else {
                setFormStatus("error");
            }
        } catch (err) {
            setFormStatus("error");
        }
    };

    const comparison = [
        { label: "ПРОЦЕНТ", network: "35-40%", our: "50%", icon: <Wallet className="w-5 h-5" />, isSame: false },
        { label: "СМЕНА", network: "12 ЧАСОВ", our: "12 ЧАСОВ", icon: <Clock className="w-5 h-5" />, isSame: true },
        { label: "ВЫПЛАТЫ", network: "2 РАЗА / МЕС", our: "КАЖДЫЙ ДЕНЬ", icon: <Zap className="w-5 h-5" />, isSame: false },
        { label: "ГАРАНТИЯ", network: "НЕТ / МАЛО", our: "3 000 ₽ / СМЕНА", icon: <Briefcase className="w-5 h-5" />, isSame: false },
        { label: "ИНСТРУМЕНТ", network: "СВОЙ", our: "СВОЙ (НОРМА)", icon: <Scissors className="w-5 h-5" />, isSame: true },
        { label: "ОФОРМЛЕНИЕ", network: "НЕТ / ЧЕРНУЮ", our: "ОФИЦИАЛЬНО", icon: <CheckCircle2 className="w-5 h-5" />, isSame: false },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">
            {/* Meta (Handled by Layout/Metadata API if possible, but here we can add it via Head if needed. For App Router, metadata is usually in a separate file or exported from the layout/page. Since this is "use client", we move metadata to a separate layout or sibling page file. For now, we focus on UI.) */}
            
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black brutal-border-b text-white">
                <div className="flex justify-between items-center px-4 md:px-8 py-2 md:py-4 max-w-[1600px] mx-auto">
                    <Link href="/">
                        <Image
                            src="/logo_white.webp"
                            alt="13x13 Logo"
                            width={100}
                            height={50}
                            className="h-[30px] md:h-[50px] w-auto mix-blend-lighten"
                        />
                    </Link>
                    <div className="flex gap-4 md:gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-base md:text-xl uppercase">
                        <Link href="/" className="hover:line-through opacity-80 decoration-2">На главную</Link>
                        <a href="https://t.me/barber_13x13" target="_blank" rel="noopener noreferrer" className="hover:line-through opacity-80 decoration-2">TG</a>
                        <a href="tel:+79996551313" className="bg-white text-black px-3 py-1.5 md:px-5 md:py-2.5 brutal-border border-white shadow-[3px_3px_0px_0px_#fff] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all text-sm md:text-base">
                            ПОЗВОНИТЬ
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 px-4 md:px-8 brutal-border-b bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="inline-block bg-black text-white px-3 py-1 font-[family-name:var(--font-oswald)] font-black text-[10px] md:text-xl mb-6 tracking-widest transform -rotate-1">
                        ВАКАНСИЯ: БАРБЕР
                    </div>

                    <h1 className="font-[family-name:var(--font-oswald)] text-[12vw] md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 md:mb-12 italic uppercase">
                        НУЖНЫ <br />
                        <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>МАСТЕРА</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end">
                        <div className="space-y-4">
                            <h2 className="font-[family-name:var(--font-oswald)] text-2xl md:text-5xl font-black uppercase italic leading-none">
                                ПОЛУЧАЙ 50% <br /> С КАЖДОЙ СТРИЖКИ
                            </h2>
                            <p className="font-[family-name:var(--font-inter)] text-base md:text-xl font-bold leading-tight max-w-xl text-neutral-800">
                                МЫ СОЗДАЛИ МЕСТО, В КОТОРОМ ПРИЯТНО РАБОТАТЬ. ЧЕСТНЫЙ ПРОЦЕНТ, СТОЛОВАЯ РЯДОМ, ДЕНЬГИ КАЖДЫЙ ДЕНЬ.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8 md:mt-0">
                            <a
                                href="tel:+79996551313"
                                className="flex-1 flex items-center justify-between bg-black text-white p-6 md:p-8 brutal-border border-black shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <div className="flex flex-col">
                                    <span className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-black uppercase">ПОЗВОНИТЬ</span>
                                    <span className="text-sm md:text-lg font-bold opacity-50">+7 (999) 655-13-13</span>
                                </div>
                                <Phone className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" />
                            </a>

                            <a
                                href="https://t.me/InvestEliteSochi"
                                target="_blank"
                                className="flex-1 flex items-center justify-between bg-white text-black p-6 md:p-8 brutal-border border-black shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <div className="flex flex-col">
                                    <span className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-black uppercase">ТЕЛЕГРАМ</span>
                                    <span className="text-sm md:text-lg font-bold opacity-50">@InvestEliteSochi</span>
                                </div>
                                <Send className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 md:py-40 px-4 md:px-8 brutal-border-b bg-black relative">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-6xl font-black mb-12 md:mb-24 tracking-tighter uppercase italic leading-tight text-center md:text-left">
                        ПОЧЕМУ МАСТЕРА <span className="text-neutral-500">УХОДЯТ ИЗ СЕТЕЙ</span> К НАМ?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {comparison.map((item, i) => (
                            <div key={i} className="brutal-border border-white p-5 md:p-10 flex flex-col gap-4 group hover:bg-white hover:text-black transition-all">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="bg-neutral-800 text-white p-3 brutal-border border-white group-hover:bg-black group-hover:border-black transform group-hover:rotate-3 transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="font-[family-name:var(--font-oswald)] text-base md:text-xl font-black uppercase opacity-60 group-hover:opacity-100">{item.label}</span>
                                </div>

                                <div className="flex flex-col gap-1 md:gap-2">
                                    {!item.isSame ? (
                                        <>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-[10px] font-bold opacity-40 uppercase shrink-0">В СЕТЯХ:</span>
                                                <span className="text-sm md:text-lg font-black line-through text-neutral-600 transition-colors uppercase italic">{item.network}</span>
                                            </div>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-[10px] font-bold text-neutral-400 group-hover:text-black transition-colors uppercase shrink-0">У НАС:</span>
                                                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-black transition-colors uppercase italic leading-tight">{item.our}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex items-baseline gap-3 pt-4">
                                            <span className="text-2xl md:text-3xl font-black text-white group-hover:text-black transition-colors uppercase italic leading-tight">{item.our}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-20 md:py-40 px-4 md:px-8 bg-black brutal-border-b">
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        <div>
                            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-[0.9]">
                                ОСТАВЬ <br /> ЗАЯВКУ <br />
                                <span className="text-white" style={{ WebkitTextStroke: '2px white' }}>ПРЯМО СЕЙЧАС</span>
                            </h2>
                            <p className="font-bold text-neutral-400 text-lg md:text-xl max-w-sm uppercase italic">
                                Заполни 3 поля, и мы пригласим тебя на знакомство. Это займет 30 секунд.
                            </p>
                        </div>

                        <div className="bg-neutral-900 brutal-border border-white p-6 md:p-10 shadow-[10px_10px_0px_0px_#fff]">
                            <AnimatePresence mode="wait">
                                {formStatus === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
                                    >
                                        <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-full">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-[family-name:var(--font-oswald)] text-3xl font-black uppercase">ПРИНЯТО!</h3>
                                        <p className="font-bold text-neutral-400 uppercase italic">Скоро свяжемся с тобой. <br /> Добро пожаловать!</p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="text-white underline font-bold uppercase text-sm mt-4"
                                        >
                                            Отправить еще раз
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-50 block">Твоё имя</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="ИВАН"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black border-2 border-neutral-800 p-4 text-white font-bold tracking-widest outline-none focus:border-white transition-colors uppercase"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-50 block">Ваш номер</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+7 (999) 000-00-00"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-black border-2 border-neutral-800 p-4 text-white font-bold tracking-widest outline-none focus:border-white transition-colors uppercase"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase opacity-50 block">Возраст</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="25"
                                                    value={formData.age}
                                                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                                                    className="w-full bg-black border-2 border-neutral-800 p-4 text-white font-bold tracking-widest outline-none focus:border-white transition-colors uppercase"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase opacity-50 block">Опыт (Лет)</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="3 ГОДА"
                                                    value={formData.experience}
                                                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                                                    className="w-full bg-black border-2 border-neutral-800 p-4 text-white font-bold tracking-widest outline-none focus:border-white transition-colors uppercase"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 py-2">
                                            <input
                                                required
                                                id="consent"
                                                type="checkbox"
                                                checked={agreed}
                                                onChange={e => setAgreed(e.target.checked)}
                                                className="w-6 h-6 mt-1 rounded-none border-2 border-neutral-800 bg-black checked:bg-white transition-all cursor-pointer accent-white"
                                            />
                                            <label htmlFor="consent" className="text-[10px] md:text-xs font-bold uppercase opacity-50 leading-tight cursor-pointer select-none">
                                                Согласие на обработку персональных данных <br />
                                                ИП: МАЛХАСЯН ГЕОРГИЙ ГЕОРГИЕВИЧ <br />
                                                ИНН: 232003837758
                                            </label>
                                        </div>

                                        <button
                                            disabled={formStatus === "loading" || !agreed}
                                            type="submit"
                                            className="w-full bg-white text-black py-6 md:py-8 font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-black uppercase italic shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                                        >
                                            {formStatus === "loading" ? (
                                                <>
                                                    <Loader2 className="w-8 h-8 animate-spin" />
                                                    ОТПРАВЛЯЕМ...
                                                </>
                                            ) : (
                                                "ОТПРАВИТЬ АНКЕТУ"
                                            )}
                                        </button>
                                        
                                        {formStatus === "error" && (
                                            <p className="text-red-500 text-xs font-bold uppercase text-center italic">
                                                Ошибка отправки. Попробуй еще раз или позвони нам.
                                            </p>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing Strategy Section */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-white text-black">
                <div className="max-w-[1200px] mx-auto text-center md:text-left">
                    <div className="inline-block bg-black text-white px-4 py-1 font-[family-name:var(--font-oswald)] font-black text-lg md:text-2xl mb-8 tracking-widest transform -rotate-1">
                        НАША СТРАТЕГИЯ: РЕКЛАМА
                    </div>
                    <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-7xl lg:text-9xl font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">
                        МАРКЕТИНГ — <br />
                        <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>ЭТО ПРИОРИТЕТ</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-bold text-lg md:text-2xl text-neutral-800 leading-tight">
                        <p>
                            МЫ ВСЕГДА СЛЕДИМ ЗА РЕКЛАМОЙ И ЭТО НАША ОСНОВНАЯ СТРАТЕГИЯ РАЗВИТИЯ.
                        </p>
                        <p className="border-l-4 border-black pl-8 italic">
                            МЫ НЕ ЖДЕМ КЛИЕНТОВ — МЫ ИХ ПРИВОДИМ. ТВОЁ КРЕСЛО НИКОГДА НЕ БУДЕТ ПУСТОВАТЬ.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Conditions Section */}
            <section className="py-16 md:py-40 px-4 md:px-8 bg-neutral-900 brutal-border-b">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-6xl font-black mb-12 md:mb-24 tracking-tighter uppercase italic text-center">
                        УСЛОВИЯ РАБОТЫ <span className="text-neutral-500">(ДЕТАЛЬНО)</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Finance */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            <h3 className="bg-white text-black px-4 py-2 font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black w-fit transform -rotate-1">ФИНАНСЫ:</h3>
                            <ul className="space-y-3 font-bold text-sm md:text-lg text-neutral-300">
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> 50% С КАЖДОЙ УСЛУГИ</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ГАРАНТИЯ 3 000 ₽ / СМЕНА</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> 20% ОТ ПРОДАЖ КОСМЕТИКИ</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ОФИЦИАЛЬНОЕ УСТРОЙСТВО</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ВЫПЛАТЫ ЕЖЕДНЕВНО</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> +5% ЧЕРЕЗ 6 МЕСЯЦЕВ</li>
                            </ul>
                        </div>

                        {/* Schedule */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            <h3 className="bg-white text-black px-4 py-2 font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black w-fit transform rotate-1">ГРАФИК:</h3>
                            <ul className="space-y-3 font-bold text-sm md:text-lg text-neutral-300">
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> СМЕНЫ 12 ЧАСОВ</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ГРАФИК 2/2 ИЛИ 3/2</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ОБЕД 30 МИН (ОПЛАЧИВАЕМО)</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> СТОЛОВАЯ РЯДОМ</li>
                            </ul>
                        </div>

                        {/* Workplace */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            <h3 className="bg-white text-black px-4 py-2 font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-black w-fit transform rotate-1">ПЛЮШКИ:</h3>
                            <ul className="space-y-3 font-bold text-sm md:text-lg text-neutral-300">
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> НОВЫЙ СТИЛЬНЫЙ РЕМОНТ</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> КОНДИЦИОНЕР И КУХНЯ</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> RETRO: MORTAL KOMBAT</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-white" /> ИНСТРУМЕНТ: СВОЙ (НОРМА)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Path Section */}
            <section className="py-16 md:py-40 px-4 md:px-8 bg-black">
                <div className="max-w-[1200px] mx-auto text-center md:text-left">
                    <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-6xl font-black mb-12 md:mb-24 tracking-tighter uppercase italic leading-tight text-center md:text-left">
                        КАРЬЕРНЫЙ <span className="text-neutral-500">ТРЕК</span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-800 z-0" />

                        {["СТАЖЁР", "МАСТЕР", "СТАРШИЙ", "ПАРТНЁР"].map((step, i) => (
                            <div key={i} className="relative z-10 bg-black brutal-border border-white p-4 md:p-6 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 hover:bg-white hover:text-black transition-all cursor-default group w-full md:w-auto">
                                <span className="font-[family-name:var(--font-oswald)] text-lg md:text-2xl font-black">{step}</span>
                                <div className="bg-neutral-800 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center group-hover:bg-black transition-colors shrink-0">
                                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
                        <div className="p-6 md:p-8 border-l-4 border-white">
                            <h4 className="font-black text-xl md:text-2xl mb-2 md:mb-4 uppercase leading-none">БЕСПЛАТНОЕ ОБУЧЕНИЕ</h4>
                            <p className="text-neutral-400 font-bold uppercase text-xs">Повышаем квалификацию за наш счет.</p>
                        </div>
                        <div className="p-6 md:p-8 border-l-4 border-white">
                            <h4 className="font-black text-xl md:text-2xl mb-2 md:mb-4 uppercase leading-none">СТАНЬ ПАРТНЁРОМ</h4>
                            <p className="text-neutral-400 font-bold uppercase text-xs">Возможность стать совладельцем бизнеса.</p>
                        </div>
                        <div className="p-6 md:p-8 border-l-4 border-white">
                            <h4 className="font-black text-xl md:text-2xl mb-2 md:mb-4 uppercase leading-none">ТВОЯ БАЗА</h4>
                            <p className="text-neutral-400 font-bold uppercase text-xs">Клиенты остаются с мастером.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Buttons */}
            <section className="py-16 md:py-32 px-4 md:px-8 bg-white text-black text-center">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-7xl font-black mb-12 italic uppercase tracking-tighter">СВЯЗАТЬСЯ <span className="text-neutral-400">НАПРЯМУЮ</span></h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 w-full max-w-4xl mx-auto">
                        <a
                            href="tel:+79996551313"
                            className="flex-1 flex flex-col items-center justify-center bg-black text-white px-8 py-8 md:px-12 md:py-12 brutal-border border-black shadow-[6px_6px_0px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                        >
                            <span className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-black mb-2 uppercase">ПОЗВОНИТЬ</span>
                            <span className="text-lg md:text-xl font-bold opacity-70">+7 (999) 655-13-13</span>
                        </a>

                        <a
                            href="https://t.me/InvestEliteSochi"
                            target="_blank"
                            className="flex-1 flex flex-col items-center justify-center bg-white text-black px-8 py-8 md:px-12 md:py-12 brutal-border border-black shadow-[6px_6px_0px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                        >
                            <span className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-black mb-2 uppercase">ТЕЛЕГРАМ</span>
                            <span className="text-lg md:text-xl font-bold opacity-70">@InvestEliteSochi</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 px-4 md:px-8 border-t-2 border-white">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                    <Image
                        src="/logo_white.webp"
                        alt="13x13 Logo"
                        width={120}
                        height={60}
                        className="opacity-40 mix-blend-lighten grayscale"
                    />

                    <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
                        <a href="https://t.me/barber_13x13" target="_blank" rel="noopener noreferrer" className="text-white font-black text-lg md:text-xl hover:underline underline-offset-4 mb-2 uppercase">@BARBER_13X13</a>
                        <p className="font-[family-name:var(--font-inter)] text-neutral-600 font-bold text-[10px] md:text-xs">
                            © 2026. БАРБЕРШОП 13x13 СОЧИ. <br />
                            ДЕНЬГИ КАЖДЫЙ ДЕНЬ.
                        </p>
                        <Link href="/" className="text-white hover:line-through font-black text-base md:text-lg font-[family-name:var(--font-oswald)]">НА ГЛАВНУЮ</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
