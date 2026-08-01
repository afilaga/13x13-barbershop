import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { prices } from "@/data/prices";
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

const siteDescription =
  "13x13 — барбершоп в Сочи с честной ценой, сильным сервисом и мужскими стрижками без переплаты за лишнее. Стрижки от 400 ₽, комплекс «под ключ» — 2000 ₽.";

function getPriceSchema(price: string) {
  const amounts = price.match(/\d+/g)?.map(Number) ?? [];

  if (amounts.length > 1 && amounts[0] !== amounts[amounts.length - 1]) {
    return {
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": Math.min(...amounts),
        "maxPrice": Math.max(...amounts),
        "priceCurrency": "RUB",
      },
    };
  }

  return {
    "price": amounts[0] ?? price,
    "priceCurrency": "RUB",
  };
}

const serviceOfferCatalog = {
  "@type": "OfferCatalog",
  "name": "Услуги барбершопа 13x13",
  "itemListElement": prices.map((category) => ({
    "@type": "OfferCatalog",
    "name": category.category,
    "itemListElement": category.items.map((item) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": item.name,
        ...(item.desc ? { "description": item.desc } : {}),
      },
      ...getPriceSchema(item.price),
    })),
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "13x13 — барбершоп в Сочи на Горького 81а",
  description: siteDescription,
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
    title: "13x13 — барбершоп в Сочи на Горького 81а",
    description: siteDescription,
    siteName: "13x13",
    images: [
      {
        url: "/logo_black.webp",
        width: 1200,
        height: 630,
        alt: "Барбершоп 13x13 в Сочи на Горького 81а",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13x13 — барбершоп в Сочи на Горького 81а",
    description: siteDescription,
    images: ["/logo_black.webp"],
  },
  keywords: [
    "барбершоп сочи",
    "барбершоп на горького 81а",
    "мужская стрижка сочи",
    "мужская стрижка горького 81а",
    "стрижка и борода сочи",
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
  "description": "13x13 — барбершоп в Сочи с честной ценой, сильным сервисом и понятным подходом без переплаты за лишнее. Мужские стрижки, борода и уход на Горького 81а.",
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
  "priceRange": "100-3000 RUB",
  "currenciesAccepted": "RUB",
  "paymentAccepted": "Cash, Credit Card",
  "sameAs": [
    "https://dikidi.net/#widget=207607",
    "https://yandex.ru/maps/org/13x13/92378568380/"
  ],
  "hasOfferCatalog": serviceOfferCatalog
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (() => {
              let loaded = false;
              const loadMetrika = () => {
                if (loaded) return;
                loaded = true;
                (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');
                ym(${YANDEX_METRIKA_ID}, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
              };

              window.addEventListener('pointerdown', loadMetrika, { once: true, passive: true });
              window.addEventListener('scroll', loadMetrika, { once: true, passive: true });
              window.addEventListener('keydown', loadMetrika, { once: true });
              window.setTimeout(loadMetrika, 15000);
            })();
          `}
        </Script>

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
