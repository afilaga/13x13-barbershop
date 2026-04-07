# AGENTS.MD — AI OPERATIONAL PROTOCOL
*Version: April 2026*

---

## 1. IDENTITY & CAPABILITIES
- **Agent:** Antigravity (Advanced Agentic AI).
- **Extended Memory:** 1256+ specialized skills in archive (access via `.gemini/antigravity/skills-disabled`).
- **Standard:** Surgical precision. Do not refactor what isn't broken.

## 2. DEVELOPMENT STANDARDS
- **Tech Stack:** Next.js (App Router), React 19, Tailwind CSS v4, Framer Motion, Playwright. 
- **Code Style:** Dry, typed (TypeScript), performant.
- **Git:** Conventional commits to `main`.
- **Workflow:** View file -> Plan -> Execute -> Verify (`npm run build` + Tests/Lint).
- **Build Gate:** Before every push to `main`, run `npm run build` locally. Do not push if build fails.

## 3. UI/UX & AESTHETICS
- **Rule:** High-end, premium aesthetics by default.
- **Design System:** Use project-defined variables (CSS variables/Tailwind extend).
- **Visual Integrity:** No generic colors, no default browser styles, no placeholders.

## 4. OPS & SEO
- **SEO Priority:** Metadata and Schema.org must be checked before structural changes.
- **Automation:** Proactive use of Playwright for regression testing.
- **Context:** Always check `context7` for latest framework documentation.
- **Deployment Verification (Vercel):**
  - After each push to `main`, verify deployment status (`Ready`/`Error`) via Vercel CLI.
  - If deployment is `Error`, inspect build logs immediately and fix root cause before claiming release is live.
  - Confirm production alias (`13x13.ru`) points to the latest successful deployment.

## 5. SKILL-CALL PROTOCOL
- Before starting complex tasks, check if specialized skills (from the 1200+ list) are needed. 
- Proactively suggest activation of relevant tools (e.g., Performance, Security, CRO).
