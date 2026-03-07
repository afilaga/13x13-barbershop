import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "13x13 | Лоукост барбершоп в Сочи",
  description: "Новый барбершоп в Сочи с честными ценами. Стрижём и бреем от 400 рублей! Находимся на Горького 81а, напротив клуба DDX.",
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
  "@id": `${SITE_URL}/#barbershop`,
  "name": "13x13",
  "legalName": "ИП МАЛХАСЯН ГЕОРГИЙ ГЕОРГИЕВИЧ",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": [
    `${SITE_URL}/og-image.png`,
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
  "priceRange": "400-3000 RUB",
  "currenciesAccepted": "RUB",
  "paymentAccepted": "Cash, Credit Card",
  "sameAs": [
    "https://dikidi.net/#widget=205276",
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
              "name": "Мужская стрижка",
              "description": "Классические и современные мужские стрижки"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 400,
              "maxPrice": 1000,
              "priceCurrency": "RUB"
            }
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
              "name": "Оформление бороды и бритье",
              "description": "Королевское бритье и коррекция бороды"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 500,
              "maxPrice": 800,
              "priceCurrency": "RUB"
            }
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
              "name": "Детская стрижка",
              "description": "Стрижки для детей от 0 до 12 лет"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 600,
              "maxPrice": 1000,
              "priceCurrency": "RUB"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Тюнинг и окрашивание",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Окрашивание и биозавивка",
              "description": "Стильные решения для волос"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 800,
              "maxPrice": 2000,
              "priceCurrency": "RUB"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Детали и уход",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Дополнительные услуги",
              "description": "Воск, брови, пилинг головы"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 100,
              "maxPrice": 500,
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
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {children}
        <Script src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1758698230" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
