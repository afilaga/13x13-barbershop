# 13x13 Landing

Лендинг барбершопа 13x13 (Сочи, ул. Северная, 6) на Next.js 16.

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
    layout.tsx      # глобальная обертка, metadata, JSON-LD
    page.tsx        # лендинг
    globals.css     # стили и утилиты
  data/
    prices.ts       # прайс-лист
tests/
  landing.spec.ts   # smoke e2e
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
