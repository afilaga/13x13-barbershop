# 13x13 Landing

Сайт барбершопа **13x13** в Сочи (ул. Горького, 81а, напротив DDX Fitness) на Next.js 16.

## Описание проекта

Проект решает две задачи:
- маркетинговый лендинг с акцентом на честный прайс и быструю запись;
- локальное SEO-присутствие (поиск по Сочи/району DDX) с корректной структурированной разметкой.

Ключевые возможности:
- главный лендинг с hero, прайсом, контактами, картой и CTA на онлайн-запись;
- отдельные страницы под SEO и найм (`/barbershop-ddx-sochi`, `/rabota-v-13x13`);
- страница галереи (`/gallery`);
- API-роут для формы отклика в раздел вакансий (`/api/hiring`);
- boot-screen и анимации интерфейса на Framer Motion/WebGL.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Playwright

## Requirements

- Node.js 20+
- npm 10+

## Getting Started

```bash
npm install
npm run dev
```

Откройте `http://127.0.0.1:3000`.

## Scripts

- `npm run dev` — запуск dev-сервера
- `npm run build` — production-сборка
- `npm run start` — запуск production-сервера
- `npm run lint` — ESLint
- `npx playwright test` — e2e-тесты

## Project Structure

```text
src/
  app/
    layout.tsx               # глобальная обертка, metadata, JSON-LD
    page.tsx                 # главная страница
    barbershop-ddx-sochi/    # SEO-страница "рядом с DDX"
    rabota-v-13x13/          # страница вакансий
    gallery/                 # страница галереи
    api/hiring/route.ts      # обработка формы отклика
    globals.css              # глобальные стили
  components/
    BootScreen.tsx           # стартовый загрузочный экран
    GradientBlinds.jsx       # WebGL-эффект для boot-screen
  data/
    prices.ts                # прайс-лист
tests/
  landing.spec.ts            # smoke e2e
playwright.config.ts
```

## SEO & Local Search

- `metadata` (title/description/OpenGraph/Twitter/canonical) в `src/app/layout.tsx`
- `LocalBusiness` JSON-LD (тип `Barbershop`) в `src/app/layout.tsx`

## E2E Notes

- Тесты используют `baseURL` из `playwright.config.ts`.
- Для переходов внутри тестов используется `page.goto('/')`.
- Отчет Playwright: `playwright-report/index.html`.

## Deployment

Минимальный production-flow:

```bash
npm ci
npm run lint
npm run build
npm run start
```

## Assets & Content

- Брендовые файлы лежат в `public/`.
- Контент для услуг и цен хранится в `src/data/prices.ts`.
- Базовые бизнес-данные и прайс (исходник) — `LANDING_DATA.md`.
