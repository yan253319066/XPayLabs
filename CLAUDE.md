# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

XPayLabs marketing website, Next.js 15 App Router + TypeScript + Tailwind v4 + Motion + next-intl. No monorepo, no CI, no test framework.

## Commands

```bash
npm run dev      # Dev server on :3000
npm run build    # Production build (standalone output)
npm run lint     # ESLint 9 flat config (eslint.config.mjs)
npm run clean    # next clean
```

No formatter or typecheck script (`tsc --noEmit` runs during `build` only).

## Architecture

### Routing
- Pages under `app/` mirror site routes (`/`, `/blog/*`, `/alternatives/*`, `/solutions/*`, `/guides/*`, `/pricing`, `/zh/*`)
- Chinese site mirrors all English pages under `app/zh/`
- `middleware.ts` injects `x-pathname` header for client-side path detection

### Component Conventions
- **All components are `'use client'`** — only pages, layout, sitemap, and opengraph-image are server components
- `@/*` maps to project root (`baseUrl: "."`)
- `motion/react` for animation (not framer-motion)
- `components/ui/` is empty (shadcn/ui not yet installed)
- `cn()` utility (clsx + tailwind-merge) at `lib/utils.ts`

### Internationalization
- English + Simplified Chinese (path prefix `/zh`)
- Translation files: `lib/translations/en.ts` / `lib/translations/zh.ts` (typed objects)
- `I18nProvider.tsx` client component detects locale via `usePathname()`
- Page metadata is hardcoded (not from translation files)

### Brand Tokens (Tailwind v4 Theme)
- `--color-brand-blue`: #5B8CFF
- `--color-brand-purple`: #7C4DFF
- `--color-brand-cyan`: #00D1FF
- `--color-brand-bg`: #060816
- `--color-brand-panel`: #0d1026
- Custom utilities: `.glass-panel`, `.gradient-bg`, `.glow-*`, `.text-gradient-purple-blue`

### SEO
- Dynamic sitemap.xml (~65 entries, EN + ZH)
- Edge OG image generation (`opengraph-image.tsx`, 1200x630 PNG)
- JSON-LD structured data (Organization, WebSite, SoftwareApplication)
- `llms.txt` in `public/` for LLM discovery
- robots.txt allows all crawlers including AI crawlers

### Environment Variables
- `GEMINI_API_KEY` — Gemini AI API key
- `APP_URL` — deployment URL (`https://www.xpaylabs.com`)
- `DISABLE_HMR=true` to disable HMR file watching (useful during AI editing sessions)

## Deployment

- `output: 'standalone'` (Docker/self-hosted)
- `transpilePackages: ['motion']`
- `eslint.ignoreDuringBuilds: true`
- Gateway backend (Java/Spring Boot) is a separate deployment, unrelated to this repo

## Dev Notes

- ESLint dual config exists (`.eslintrc.json` legacy + `eslint.config.mjs` flat). ESLint 9 uses flat config; legacy file ignored.
- No Tailwind config file — all configured in `app/globals.css` via `@theme` and `@import "tailwindcss"`
