# XPay Labs — Agent Guide

Single-package Next.js 15 App Router site (TypeScript, Tailwind v4, Motion, next-intl). No monorepo, no CI, no test framework.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build (standalone output) |
| `npm run lint` | ESLint (flat config, `.mjs`) |
| `npm run clean` | `next clean` |

No formatter, no typecheck script (`tsc --noEmit` runs during `build` only).

## Translation (next-intl) — nonstandard

Translations are **not** in `messages/`. They live in `lib/translations/en.ts` and `lib/translations/zh.ts`, exported as typed objects and imported manually:

```tsx
import { translations } from '@/lib/translations';
// Page wraps children:
<NextIntlClientProvider locale="en" messages={translations.en}>
```

Components use `useTranslations()` from `next-intl` normally. The file `i18n/request.ts` is a stub (always returns `en` with empty messages) — do not rely on `next-intl/server` routing.

Every page sets its own `metadata` from `translations.en.meta`.

## Code conventions

- **All components are `'use client'`** — only pages, layout, sitemap, and opengraph-image are server components.
- **`@/*` maps to project root** (`baseUrl: "."`), e.g. `@/lib/constants`.
- **Animation**: `motion/react` (not framer-motion).
- **Styling**: Tailwind v4 syntax (`@import "tailwindcss"`, `@theme {}` in globals.css). No `tailwind.config.ts`. Custom utility classes in `app/globals.css`: `.glass-panel`, `.gradient-bg`, `.glow-*`, `.text-gradient-purple-blue`, `.custom-scrollbar`, `.bg-grid`.
- **`cn()`** utility at `lib/utils.ts` (clsx + tailwind-merge).
- **`components/ui/` is empty** — shadcn/ui not yet installed.
- **No `loading.tsx`, `error.tsx`, `not-found.tsx`** — these are missing and should be added if the app needs them.

## Env

Two variables (see `.env.example`):
```
GEMINI_API_KEY="..."
APP_URL="https://www.xpaylabs.com"
```

`.env*` files are gitignored except `.env.example`.

## Dev quirks

- Set `DISABLE_HMR=true` to disable HMR file watching (for AI Studio / agent editing sessions).
- ESLint dual config exists (`.eslintrc.json` legacy + `eslint.config.mjs` flat). ESLint 9 uses the flat config; the legacy file is ignored.
- `next.config.ts`: `output: 'standalone'` (Docker/self-hosted), `transpilePackages: ['motion']`, `eslint.ignoreDuringBuilds: true`.
- No CI/CD, no test framework, no formatter.
- Gateway image: `ghcr.io/xpay-labs/gateway:latest` (external; this repo is the marketing website only).

## Architecture

Pages under `app/` mirror the site routes (`/docs`, `/blog`, `/alternatives/*`, `/solutions/*`, `/guides/*`, `/zh/*`). Key non-page files: `app/sitemap.ts` (dynamic sitemap), `app/opengraph-image.tsx` (Edge OG image).

The repo has no direct relation to the gateway backend (Java/Spring Boot/MyBatis — hosted separately).
