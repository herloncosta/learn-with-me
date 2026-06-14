# AGENTS.md

## Project

Software engineering blog built with **Astro** + **MDX**. Static site, zero JS by default.

```
src/
├── content/blog/        # MDX posts (edit these to add articles)
├── layouts/             # BaseLayout.astro (HTML shell)
├── components/          # Header, Footer, PostCard, PostList
├── pages/
│   ├── index.astro               # Homepage (4 latest posts)
│   ├── blog/index.astro          # /blog — all posts with infinite scroll
│   └── blog/[...slug].astro      # Individual post pages
├── styles/global.css    # Tailwind v4 + dark mode + component styles
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview built site |
| `npm run dev -- --port 4321` | Dev on specific port |

## Content workflow

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter: `title`, `description`, `pubDate`, optional `updatedDate`, `draft`
3. Rebuild or restart dev server

The schema is in `src/content/config.ts`.

## Framework notes

- Astro 5.x with content collections v3 API (`glob` loader, `render()` to get `<Content />`)
- Route `blog/[...slug].astro` generates pages from content collection entries automatically
- Posts sorted by `pubDate` descending on homepage
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first config, no `tailwind.config.mjs`
- Design tokens (colors, fonts) in `@theme` block in `global.css`
- Dark mode via `.dark` class on `<html>` — toggled by Header script, persisted in localStorage, respects `prefers-color-scheme`
- CSS variables (`--_primary`, `--_ink`, `--_surface`, etc.) in `:root` (light) / `.dark` (dark) — referenced by `@theme` for Tailwind utilities and by component styles directly
- Homepage shows 4 latest posts; `/blog` lists all posts with infinite scroll (IntersectionObserver, batches of 3)
- Sticky header with `bg-surface/80 backdrop-blur-md`, back-to-top button on blog listing (`opacity` state via inline `style` to avoid Tailwind dynamic class issue)
- Max content width: `max-w-[56rem]` (896px) on `<main>` and header `<nav>`
- No client-side JS runtime except scroll/reveal features and theme toggle — fully static output
- Reduced motion respected: all animations disabled when `prefers-reduced-motion: reduce`

## Dark Mode

- Defined via `@custom-variant dark (&:where(.dark, .dark *))` in `global.css`
- CSS variables on `.dark` override light values — Tailwind `dark:` utility classes also available
- Theme toggle in Header: sun icon (light) / moon icon (dark)
- Script runs immediately (IIFE) to prevent flash of wrong theme

## Design Context (from PRODUCT.md)

- **Register**: brand — a software engineering blog (design IS the product)
- **Brand personality**: technical, minimalista — quiet confidence, engineered simplicity
- **Design principles**: content first, engineered simplicity, performance is a feature, quiet confidence, usability as default
- **Anti-references**: SaaS generic patterns (identical card grids, gradient text, glassmorphism, uppercase kickers, side-stripe borders)
- **Accessibility**: WCAG AA
- **Visual direction (seed)**: blue-cyan committed color, mono-forward typography, choreographed motion, flat-by-default elevation
- **References**: tecmundo, hackernews, hackersec

Use `/impeccable` for any design/UI task. Start by reading PRODUCT.md and DESIGN.md.
