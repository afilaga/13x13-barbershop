import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic", "latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://13x13.ru"),
  title: "13x13 | Лоукост барбершоп в Сочи",
  description: "Новый барбершоп в Сочи с честными ценами. Стрижём и бреем от 400 рублей! Находимся на Горького 81а, напротив клуба DDX.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://13x13.ru",
    title: "13x13 | Лоукост барбершоп в Сочи",
    description: "Новый барбершоп в Сочи с честными ценами. Стрижём и бреем от 400 рублей! Находимся на Горького 81а, напротив клуба DDX.",
    siteName: "13x13",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Интерьер барбершопа 13x13",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13x13 | Лоукост барбершоп в Сочи",
    description: "Новый барбершоп в Сочи с честными ценами. Стрижём и бреем от 400 рублей! Находимся на Горького 81а, напротив клуба DDX.",
    images: ["/og-image.png"],
  },
  keywords: [
    "барбершоп сочи",
    "мужская стрижка сочи",
    "барбер сочи",
    "бритье сочи",
    "13x13",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: "13x13",
  url: "https://13x13.ru",
  image: "https://13x13.ru/logo.png",
  telephone: "+79002871313",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Сочи",
    streetAddress: "ул. Горького, 81а",
    addressCountry: "RU",
  },
  areaServed: "Сочи",
  sameAs: ["https://dikidi.net/#widget=205276"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-black text-white font-sans selection:bg-white selection:text-black`}
      >
        <Script id="local-business-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessJsonLd)}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107197201', 'ym');

            ym(107197201, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/107197201" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {children}
        <Script src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1758698230" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
