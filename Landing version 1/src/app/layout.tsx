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
        {children}
        <Script src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1758698230" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
