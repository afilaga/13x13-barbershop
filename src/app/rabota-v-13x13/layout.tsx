import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Работа Барбером в Сочи - 13x13 | Лучшие условия для мастеров',
  description: 'Ищем активных барберов в команду 13x13 в Сочи. Выплаты 50%, ежедневная оплата, гарантия за смену. Мощный маркетинг и стабильный поток клиентов.',
  openGraph: {
    title: 'Работа Барбером в Сочи - 13x13',
    description: 'Лучшие условия для мастеров в Сочи: 50% честный доход, ежедневные выплаты. Присоединяйся к мощному бренду 13x13!',
    url: 'https://13x13.ru/rabota-v-13x13',
    siteName: '13x13 Барбершоп',
    images: [
      {
        url: 'https://13x13.ru/logo_white.webp',
        width: 1200,
        height: 630,
        alt: 'Работа в 13x13 Барбершоп Сочи',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Работа Барбером в Сочи - 13x13',
    description: 'Ищем мастеров в 13x13. Лучшие условия в городе.',
    images: ['https://13x13.ru/logo_white.webp'],
  },
};

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
