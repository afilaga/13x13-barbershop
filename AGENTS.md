# AGENTS.MD — PROJECT GUIDELINES (13x13 Barbershop)

> This file contains the primary instructions for AI Agents working on the 13x13 project. 
> Last Update: 2026-03-08

---

## 1. PROJECT CORE IDENTITY
- **Concept:** "Brutal Low-Cost" Barbershop.
- **Location:** Sochi, Central District, Gorkogo 81a (Opposite DDX Fitness & Sun City Mall).
- **Targeting:** Discipline-oriented men, athletes (DDX members), commuters.
- **Pricing:** 400 - 1000 RUB.
- **Unique Selling Point:** Speed, discipline, predictability, prime location near DDX.

---

## 2. TECHNOLOGY STACK
- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19
- **Stying:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Automation:** Playwright (E2E Tests)
- **Deployment:** Vercel (Main Branch)

---

## 3. DESIGN SYSTEM & AESTHETICS
- **Style:** Brutalist, sleek, high-contrast.
- **Colors:**
    - Background: Noir/Black (`#000`), Graphite (`#050505`).
    - Foreground: White (`#fff`), Neutral Grays.
    - Accents: Yellow for badges, but primary theme is BW.
- **Typography:**
    - Headers: Oswald (Bold / Black / Italic).
    - Body: Inter.
- **Components:**
    - "Brutal Borders": `border-4 border-black` (desktop) / `border-2` (mobile).
    - "Brutal Shadows": Hard offset shadows, no blurs.
    - Hover effects: Inversion, line-throughs, scale changes.

---

## 4. SEO & CONTENT STRATEGY
- **Primary Landmark:** DDX Fitness Sochi.
- **SEO Keywords:** 
    - "Барбершоп рядом с DDX Сочи"
    - "Барбершоп на Горького Сочи"
    - "Мужские стрижки Сочи центр"
- **Critical Meta:** All metadata and JSON-LD must mention "рядом с DDX" as a location marker.
- **Sitemap:** `/`, `/barbershop-ddx-sochi`, `/rabota-v-13x13`.

---

## 5. RECENT MILESTONES (DO NOT BREAK)
1. **DDX Landing:** Specialized page `/barbershop-ddx-sochi` for hyper-local search intent.
2. **Hiring Expansion:** Personalized recruitment portal `/rabota-v-13x13`.
3. **April 2026 Opening:** Mention April 2026 for the new facility launch.
4. **6-Chairs Capacity:** Highlight the scale (6 chairs) in branding/hiring.
5. **Dikidi Integration:** All booking links must point to `https://dikidi.net/#widget=205276`.

---

## 6. AGENT OPERATIONAL RULES
- **Surgical Precision:** Do not overwrite large files for small changes.
- **SEO Priority:** Before making page changes, check if it affects schema.org or metadata in `layout.tsx`.
- **Brutalism:** If a design looks "soft", "rounded", or "gradient-heavy", it is a failure. Keep it sharp.
- **Context7:** Always use `context7` for checking latest Next.js 15+ or Tailwind 4 features.
- **Git Protocol:** Always push to `main` with clear, conventional commits.

---

## 7. SCHEMA.ORG (JSON-LD)
- Maintain `LocalBusiness / Barbershop` version 2 in `layout.tsx`.
- Identification: `https://13x13.ru/#barbershop`.
- Opening hours: 10:00 - 22:00 (Standard, confirm if changed).
- Landmark mapping to DDX Fitness.
