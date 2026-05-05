# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Astro dev server (hot reload, fastest iteration).
- `npm run build` — static build to `dist/`.
- `npm run dev:wrangler` — build then run locally under Wrangler (use only when verifying Cloudflare Workers asset behavior; slower).
- `npm run deploy` — `astro build && wrangler deploy` to Cloudflare Workers.

There is no test suite or linter configured. TypeScript uses `astro/tsconfigs/strict` and is checked by Astro at build time.

## Architecture

Static marketing site for tokensquirrel.com. **Astro 5** generates static HTML (`output: 'static'`); `dist/` is served as static assets by a Cloudflare Worker (`wrangler.jsonc` points `assets.directory` at `./dist` — there is no Worker script, just static asset serving).

### Content collections (`src/content/config.ts`)

Three collections drive the routing:

- `guides` and `tutorials` — both share `levelSchema` with a required `level` field constrained to `'100' | '200' | '300'` (Beginner/Intermediate/Advanced). The level value is also used as the slug, so files are named `100.md`, `200.md`, `300.md`.
- `blog` — standard fields (`title`, `pubDate`, `description?`, `draft?`, `tags?`, `heroImage?`).

When adding a new guide/tutorial level, the schema enforces the three-level constraint; don't introduce a fourth level without updating both the schema and `LeveledPage.astro`'s `order` array and `levelLabel` mapping.

### Routing

- `src/pages/{guides,tutorials}/[level].astro` — dynamic routes generated via `getStaticPaths()` from the collection. Both delegate rendering to `src/layouts/LeveledPage.astro`, which renders breadcrumbs, a level badge, the MDX/MD content, and prev/next navigation computed from the fixed `['100','200','300']` order.
- `src/pages/blog/[slug].astro` — per-post route from the `blog` collection.
- Index pages (`index.astro` in each section) list entries.

`LeveledPage.astro` is the canonical pattern for any future leveled content — keep new leveled collections going through it rather than duplicating the breadcrumb/nav logic.

### Styling

CSS-only design system, no framework. Token files in `src/styles/` (`design-tokens.css`, `squirrel-tokens.css`, `typography.css`, `global.css`) define CSS custom properties (`--color-squirrel`, `--space-*`, `--text-*`, `--font-serif/sans/mono`, `--border-thin`). Components and layouts reference these tokens — do not hardcode colors, spacings, or font stacks. `Layout.astro` imports `global.css` and `squirrel-tokens.css` once for the whole site.

Code blocks in markdown are styled by `LeveledPage.astro`'s scoped `.prose :global(...)` rules and get a copy button injected by the inline script in `Layout.astro`. Shiki theme is `github-light` (set in `astro.config.mjs`).

### Integrations

`@astrojs/mdx` (MDX in content collections) and `@astrojs/sitemap` (auto-generates `sitemap-index.xml` at build using `site: 'https://tokensquirrel.com'`). `compressHTML: false` is intentional — leave it off so the served HTML stays readable.
