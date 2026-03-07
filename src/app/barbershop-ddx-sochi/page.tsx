import { ArrowUpRight, MapPin, Clock, Scissors, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Барбершоп рядом с DDX в Сочи — 13x13 на Горького 81а",
    description: "Ищете барбершоп рядом с DDX в Сочи? 13x13 находится прямо напротив входа в DDX Fitness на Горького 81а. Стрижки от 400 ₽ для тех, кто ценит дисциплину и время.",
    keywords: [
        "барбершоп рядом с ddx сочи",
        "барбершоп напротив ddx",
        "барбершоп около ddx в сочи",
        "барбер горького сочи",
        "мужская стрижка у ddx сочи"
    ],
};

export default function DDXLanding() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black uppercase flex flex-col overflow-x-hidden">
            {/* Mini Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black brutal-border-b text-white">
                <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-[1600px] mx-auto">
                    <Link href="/" className="relative z-50">
                        <Image
                            src="/logo.png"
                            alt="Барбершоп 13x13 рядом с DDX в Сочи на Горького 81а"
                            width={120}
                            height={60}
                            className="h-[35px] md:h-[50px] w-auto mix-blend-lighten"
                        />
                    </Link>
                    <div className="flex gap-4 md:gap-8 items-center font-[family-name:var(--font-oswald)] font-bold text-lg md:text-xl uppercase">
                        <Link href="/" className="hover:line-through">На главную</Link>
                        <a href="https://dikidi.net/#widget=205276" className="bg-white text-black px-4 py-2 brutal-border border-white shadow-[4px_4px_0px_0px_#fff]">
                            ЗАПИСЬ
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 md:px-8 brutal-border-b overflow-hidden">
                <div className="max-w-[1200px] mx-auto z-10 relative text-center md:text-left">
                    <div className="w-fit bg-white text-black px-4 py-1 font-[family-name:var(--font-oswald)] font-black text-sm md:text-xl mb-6 tracking-widest transform -rotate-1 brutal-border border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mx-auto md:mx-0">
                        ЛОКАЦИЯ: НАПРОТИВ DDX FITNESS
                    </div>

                    <h1 className="font-[family-name:var(--font-oswald)] text-[10vw] md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8 italic uppercase">
                        БАРБЕРШОП <br />
                        <span className="text-neutral-500">РЯДОМ С DDX В СОЧИ</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
                        <div className="space-y-8">
                            <p className="font-[family-name:var(--font-inter)] text-xl md:text-3xl font-bold leading-tight">
                                Ищете барбершоп <span className="bg-white text-black px-1">РЯДОМ С DDX В СОЧИ</span>? <br />
                                Мы на Горького 81а. <br />
                                Через дорогу от входа в зал.
                            </p>

                            <div className="bg-neutral-900 p-8 brutal-border border-neutral-700 space-y-4">
                                <div className="flex items-center gap-4 text-white justify-center md:justify-start">
                                    <Clock className="w-8 h-8" />
                                    <span className="font-black text-2xl font-[family-name:var(--font-oswald)]">ЭКОНОМИМ ВРЕМЯ</span>
                                </div>
                                <p className="font-medium text-neutral-400 normal-case">
                                    Заходи до тренировки или сразу после. Мы стрижем быстро и по делу. Никаких поездок через весь город.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="bg-white text-black p-8 brutal-border border-black shadow-[10px_10px_0px_0px_#fff]">
                                <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-black mb-4 tracking-tighter uppercase">ПЕРВАЯ СТРИЖКА</h2>
                                <p className="font-bold text-2xl mb-6 uppercase">ПОЛУЧИ СПЕЦЦЕНУ ПРИ ПЕРВОМ ПОСЕЩЕНИИ!</p>
                                <a href="https://dikidi.net/#widget=205276" className="flex items-center justify-between bg-black text-white p-6 font-black uppercase text-xl hover:bg-neutral-800 transition-colors">
                                    Забронировать <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Guide Section */}
            <section className="py-16 md:py-32 px-4 md:px-8 bg-[#050505]">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-black mb-16 tracking-tighter text-center italic">
                        FAQ: КАК НАС НАЙТИ
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Где находится барбершоп рядом с DDX в Сочи?",
                                a: "13x13 находится на ул. Горького, 81а, напротив клуба DDX (район ЖД вокзала, рядом с ТЦ Сан Сити)."
                            },
                            {
                                q: "Сколько времени идти от DDX?",
                                a: "Меньше 30 секунд. Мы находимся прямо напротив центрального входа в фитнес-клуб."
                            },
                            {
                                q: "Сколько стоит мужская стрижка?",
                                a: "Стрижки и оформление бороды от 400 ₽. У нас лоукост подход к сервису при сохранении высокого качества."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-black border-2 border-neutral-800 p-8 hover:border-white transition-colors group">
                                <h3 className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-black mb-4 text-white group-hover:text-neutral-300">
                                    {faq.q}
                                </h3>
                                <p className="font-medium text-neutral-500 normal-case leading-relaxed text-lg group-hover:text-neutral-400">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footnote Map */}
            <section className="h-[400px] md:h-[600px] brutal-border-t border-white relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?z=18&ol=biz&oid=92378568380"
                    className="w-full h-full border-0"
                    style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen={true}
                    title="Карта проезда от DDX"
                />
            </section>

            {/* Mini Footer */}
            <footer className="bg-black py-12 px-4 md:px-8 border-t-4 border-white text-center">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
                    <Image
                        src="/logo.png"
                        alt="13x13 Logo"
                        width={100}
                        height={50}
                        className="opacity-50 mix-blend-lighten"
                    />
                    <p className="font-[family-name:var(--font-inter)] text-neutral-500 font-bold">
                        © 2026. 13x13 БАРБЕРШОП НА ГОРЬКОГО. ЛОКАЦИЯ ПРЯМО У DDX FITNESS.
                    </p>
                    <Link href="/" className="text-white hover:underline font-bold">Вернуться на главную</Link>
                </div>
            </footer>
        </main>
    );
}
