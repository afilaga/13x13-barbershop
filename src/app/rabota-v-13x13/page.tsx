import { ArrowUpRight, Scissors, Star, Users, Zap, Briefcase, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Работа в 13x13 | Вакансия Барбера в Сочи | Стань частью команды",
    description: "Ищем талантливых мастеров в новый лоукост барбершоп 13x13 в Сочи. Стабильный поток клиентов, новый интерьер на Горького 81а, дружный коллектив. Отправь резюме!",
    keywords: [
        "работа барбером сочи",
        "вакансия барбер сочи",
        "работа в барбершопе сочи",
        "ищем мастеров сочи",
        "барбершоп 13x13 вакансии"
    ],
};

export default function CareerLanding() {
    const benefits = [
        {
            title: "СТАБИЛЬНЫЙ ПОТОК",
            desc: "Локация напротив DDX и ТЦ Сан Сити гарантирует постоянный трафик. У тебя всегда будут клиенты.",
            icon: <Zap className="w-10 h-10" />
        },
        {
            title: "НОВЫЙ ЗАЛ",
            desc: "Работай в комфорте: свежий брутальный ремонт, профессиональное оборудование и свет.",
            icon: <Star className="w-10 h-10" />
        },
        {
            title: "ПРОЗРАЧНОСТЬ",
            desc: "Честная оплата без скрытых вычетов. Мы лоукост, но ценим труд мастера и платим вовремя.",
            icon: <CheckCircle2 className="w-10 h-10" />
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black brutal-border-b text-white">
                <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-[1600px] mx-auto">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="13x13 Logo"
                            width={120}
                            height={60}
                            className="h-[35px] md:h-[50px] w-auto mix-blend-lighten"
                        />
                    </Link>
                    <div className="flex gap-4 md:gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-lg md:text-xl uppercase">
                        <Link href="/" className="hover:line-through">На главную</Link>
                        <a href="tel:+79529787788" className="bg-white text-black px-4 py-2 brutal-border border-white shadow-[4px_4px_0px_0px_#fff]">
                            ПОЗВОНИТЬ
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 md:px-8 brutal-border-b bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="inline-block bg-black text-white px-4 py-1 font-[family-name:var(--font-oswald)] font-black text-sm md:text-xl mb-6 tracking-widest transform -rotate-1">
                        МЫ В ПОИСКЕ
                    </div>

                    <h1 className="font-[family-name:var(--font-oswald)] text-[12vw] md:text-9xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter mb-12 italic">
                        НУЖНЫ <br />
                        <span className="text-white" style={{ WebkitTextStroke: '3px black' }}>МАСТЕРА</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <p className="font-[family-name:var(--font-inter)] text-xl md:text-4xl font-bold leading-none max-w-2xl">
                            ТЫ БАРБЕР? ХОЧЕШЬ РАБОТАТЬ В КОМАНДЕ, ГДЕ ТЕБЯ ЦЕНЯТ? <br />
                            <span className="text-neutral-500 mt-4 block text-lg md:text-2xl font-medium normal-case">
                                Мы открыли новый брутальный лоукост барбершоп 13x13 в самом центре Сочи. Нам нужны люди с руками и стилем.
                            </span>
                        </p>

                        <div className="flex flex-col gap-6">
                            <a
                                href="tel:+79529787788"
                                className="flex items-center justify-between bg-black text-white p-8 md:p-12 brutal-border border-black shadow-[10px_10px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                            >
                                <div className="flex flex-col">
                                    <span className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl font-black">СВЯЗАТЬСЯ</span>
                                    <span className="text-lg md:text-xl font-bold opacity-50">+7 (952) 978-77-88</span>
                                </div>
                                <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 group-hover:rotate-45 transition-transform" />
                            </a>
                            <p className="font-bold text-center text-sm md:text-base opacity-60 normal-case">Или напиши нам в Telegram/WhatsApp по этому номеру</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 md:py-40 px-4 md:px-8 border-b-2 border-white">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-8xl font-black mb-20 tracking-tighter text-center italic">
                        ЧТО ТЫ ПОЛУЧИШЬ
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 brutal-border border-white">
                        {benefits.map((b, i) => (
                            <div key={i} className={`p-10 md:p-16 flex flex-col gap-8 ${i !== benefits.length - 1 ? 'md:brutal-border-r border-white' : ''} ${i !== 0 ? 'border-t-2 md:border-t-0 border-white' : ''} hover:bg-neutral-900 transition-colors`}>
                                <div className="bg-white text-black p-4 w-fit brutal-border border-black">
                                    {b.icon}
                                </div>
                                <h3 className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-black">{b.title}</h3>
                                <p className="font-medium text-neutral-400 normal-case text-lg leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 md:py-40 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-square brutal-border border-white overflow-hidden grayscale group rotate-2">
                        <Image
                            src="/hiring-work.png"
                            alt="Barber working"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>

                    <div className="space-y-12">
                        <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            ОТ ТЕБЯ <br /> НУЖНО:
                        </h2>

                        <ul className="space-y-8">
                            {[
                                "Опыт работы в мужских стрижках",
                                "Пунктуальность и дисциплина",
                                "Умение общаться с клиентами",
                                "Желание развиваться и много работать",
                                "Чувство стиля и чистота на рабочем месте"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start font-[family-name:var(--font-inter)] text-xl md:text-2xl font-bold italic border-b border-neutral-800 pb-4">
                                    <span className="text-neutral-500 font-black">0{idx + 1}</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8">
                            <p className="font-medium text-neutral-500 normal-case text-lg mb-8 italic">
                                Если ты узнал себя — не жди, пока вакансию займет кто-то другой. Нам нужны лучшие.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action CTA */}
            <section className="py-20 md:py-40 px-4 md:px-8 bg-white text-black text-center">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center">
                    <h2 className="font-[family-name:var(--font-oswald)] text-[10vw] md:text-8xl font-black mb-12 tracking-tighter leading-none uppercase">
                        ГОТОВ?
                    </h2>
                    <a
                        href="tel:+79529787788"
                        className="inline-flex flex-col items-center justify-center bg-black text-white px-12 py-10 md:px-24 md:py-16 brutal-border border-black shadow-[15px_15px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all active:scale-95"
                    >
                        <span className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl font-black mb-4">ЖМИ СЮДА</span>
                        <span className="text-xl md:text-2xl font-bold">+7 (952) 978-77-88</span>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-16 px-4 md:px-8 border-t-4 border-white">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <Image
                        src="/logo.png"
                        alt="13x13 Logo"
                        width={150}
                        height={75}
                        className="opacity-50 mix-blend-lighten"
                    />

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <p className="font-[family-name:var(--font-inter)] text-neutral-500 font-bold text-center md:text-right">
                            © 2026. БАРБЕРШОП 13x13 СОЧИ. <br />
                            ПРИСОЕДИНЯЙСЯ К НАМ.
                        </p>
                        <Link href="/" className="text-white hover:line-through font-black text-xl font-[family-name:var(--font-oswald)]">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
