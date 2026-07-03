# Portafolio — Retro Terminal Theme

[![Built with Astro](https://img.shields.io/badge/Astro-7.0-%23FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_4-0EA5E9?logo=tailwindcss)](https://tailwindcss.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A retro-styled terminal portfolio template built with **Astro 7** and **Tailwind CSS 4**. Features a CRT monitor aesthetic with scanlines, a blinking cursor, pixel-art fonts, and an interactive terminal overlay.

## Features

- **CRT aesthetic** — scanline overlay, blinking cursor, `Press Start 2P` pixel font
- **Interactive terminal** — click the `>_` button to open a fully functional terminal with custom commands
- **Single source of truth** — all content lives in `src/data/site.js`, easy to customize
- **Component-based** — clean separation of concerns following Astro best practices
- **Lightweight** — zero client-side frameworks, pure vanilla JS + CSS
- **No smooth transitions** — true to retro computing, everything is instant and abrupt

## Getting Started

```sh
# Clone the repo
git clone https://github.com/alejandrovasqueez/portafolio.git
cd portafolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Customization

Edit **`src/data/site.js`** — it contains all the content:

- Profile info, bio, and avatar
- Social links (LinkedIn, WhatsApp, Email)
- Projects, experience, and education entries
- Section titles and icons

Add or remove projects, experience, or education entries from the arrays — the components render them automatically.

### Replace the avatar and favicon

Swap the files in `public/`:

- `public/profile.jpg` — your photo
- `public/favicon.svg` / `favicon.png` / `favicon.ico` — your favicon

### Terminal commands

Edit `src/components/Terminal.astro` to add, remove, or customize commands in the `responses` object.

## Project Structure

```
src/
├── data/
│   └── site.js              ← All content (single source of truth)
├── components/
│   ├── HeadSeo.astro        ← Meta tags, JSON-LD, favicons
│   ├── Profile.astro        ← Header: photo, name, social links
│   ├── SocialLinks.astro    ← Social icon buttons
│   ├── Bio.astro            ← About paragraph + CV download
│   ├── SectionHeader.astro  ← Reusable section icon + title
│   ├── Projects.astro       ← Projects table
│   ├── Experience.astro     ← Experience table
│   ├── Education.astro      ← Education table
│   ├── TagBadge.astro       ← Technology badge
│   ├── Icon.astro           ← SVG icon renderer
│   ├── Terminal.astro       ← Interactive terminal overlay
│   └── CrtFlash.astro       ← CRT power-on flash effect
├── pages/
│   └── index.astro          ← Page composition (27 lines)
└── styles/
    └── global.css           ← Tailwind theme + CRT effects
```

## Deployment

```sh
npm run build
```

The output goes to `dist/`. Deploy that folder to any static host:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- GitHub Pages, etc.

## License

[MIT](LICENSE) — feel free to use this as a template for your own portfolio.
