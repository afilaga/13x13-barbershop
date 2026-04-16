import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://13x13.ru";
const YANDEX_VERIFICATION_TOKEN = "cfba217245b8e29c";
const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID ?? "107197201";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic", "latin"],
  weight: ["700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Барбершоп рядом с DDX в Сочи — 13x13 на Горького 81а",
  description: "Новый барбершоп в Сочи с честными ценами. Стрижки от 600 ₽. Комплексная стрижка и борода — 1200 ₽. Напротив DDX Fitness на Горького.",
  icons: {
    icon: [
      { url: "/favicon_white.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon_black.svg", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/favicon_white.svg",
    apple: "/favicon_white.svg",
  },
  verification: {
    yandex: YANDEX_VERIFICATION_TOKEN,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: "Барбершоп рядом с DDX в Сочи — 13x13",
    description: "Новый барбершоп в Сочи с честными ценами. Стрижки от 600 ₽. Комплексная стрижка и борода — 1200 ₽. Напротив DDX Fitness на Горького.",
    siteName: "13x13",
    images: [
      {
        url: "/logo_black.webp",
        width: 1200,
        height: 630,
        alt: "Барбершоп 13x13 рядом с DDX в Сочи на Горького 81а",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13x13 | Барбершоп рядом с DDX в Сочи",
    description: "Новый барбершоп в Сочи с честными ценами. Стрижки от 600 ₽. Комплексная стрижка и борода — 1200 ₽. Напротив DDX Fitness на Горького.",
    images: ["/logo_black.webp"],
  },
  keywords: [
    "барбершоп рядом с ddx сочи",
    "барбершоп напротив ddx",
    "мужская стрижка у ddx сочи",
    "барбер горького 81а",
    "барбершоп сочи",
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
  "@id": `${SITE_URL}/#barbershop`,
  "name": "13x13",
  "legalName": "ИП МАЛХАСЯН ГЕОРГИЙ ГЕОРГИЕВИЧ",
  "description": "Новый барбершоп в Сочи с честными ценами. Стрижки от 400 ₽. Комплексная стрижка и борода — 1200 ₽. Находимся на Горького 81а, напротив клуба DDX.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo_white.webp`,
  "image": [
    `${SITE_URL}/logo_white.webp`,
    `${SITE_URL}/hero-bg.png`
  ],
  "telephone": "+79002871313",
  "email": "tsehthirteen@ya.ru",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Горького, 81а",
    "addressLocality": "Сочи",
    "addressRegion": "Краснодарский край",
    "postalCode": "354000",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.593922,
    "longitude": 39.728148
  },
  "hasMap": "https://yandex.ru/maps/org/13x13/92378568380/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "400-2000 RUB",
  "currenciesAccepted": "RUB",
  "paymentAccepted": "Cash, Credit Card",
  "sameAs": [
    "https://dikidi.net/#widget=207607",
    "https://yandex.ru/maps/org/13x13/92378568380/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Услуги барбершопа 13x13",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Мужские стрижки",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Стрижка «Классика»",
              "description": "Бока короче, верх длиннее"
            },
            "price": 600,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Стрижка «Стильно»",
              "description": "Фейд с нуля"
            },
            "price": 800,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Стрижка «Машина»",
              "description": "Стрижка под одну насадку машинкой"
            },
            "price": 400,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Стрижка «Удлиненная»",
              "description": "Стрижка полностью ножницами"
            },
            "price": 1000,
            "priceCurrency": "RUB"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Борода и бритье",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Моделирование бороды",
              "description": "Оформление бороды с окантовкой лезвием"
            },
            "price": 600,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Королевское бритьё",
              "description": "Традиционное бритье с использованием опасной бритвы и горячего полотенца"
            },
            "price": 800,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Бритьё машинкой",
              "description": "Быстрое бритье бороды машинкой"
            },
            "price": 400,
            "priceCurrency": "RUB"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Детские стрижки",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Стрижка «Трудный ребёнок»",
              "description": "Стрижка детей от 0 до 5 лет"
            },
            "price": 1000,
            "priceCurrency": "RUB"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Уход и окрашивание",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Комплексная стрижка и борода",
              "description": "Полный комплекс: мужская стрижка и оформление бороды"
            },
            "price": 1200,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Воск «Под ключ»",
              "description": "Удаление волос воском во всех необходимых зонах"
            },
            "price": 500,
            "priceCurrency": "RUB"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Кудри Stile",
              "description": "Химическая завивка волос"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 1500,
              "maxPrice": 2000,
              "priceCurrency": "RUB"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Окрашивание волос",
              "description": "Профессиональное окрашивание по всей длине"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 1500,
              "maxPrice": 2000,
              "priceCurrency": "RUB"
            }
          }
        ]
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans selection:bg-white selection:text-black`}
      >
        <Script id="local-business-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(localBusinessJsonLd)}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>

        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}


        {children}
        <Script src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1773811740" strategy="lazyOnload" />
      </body>
    </html>
  );
}
