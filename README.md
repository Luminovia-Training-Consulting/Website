# Luminovia Training & Consulting Website

Static bilingual website for **Luminovia Training & Consulting**. The site presents the company as a remote-first training and consulting organisation led by CEO and founder **Carina Sophie Schoppe**, with bookable training, consulting, offers, teaching and project experience, projects, pricing and contact options in German and English.

Production repository: https://github.com/Luminovia-Training-Consulting/Website.git

## Purpose

The website is designed to answer these visitor questions quickly:

- What does Luminovia Training & Consulting offer?
- Which training, consulting and project formats can be booked?
- Who is the CEO/founder and why is she credible?
- Which former client and education partner contexts support the profile?
- How can a company, academy, university or partner request a booking?

The site is static. There is no backend, no server-side rendering, no form endpoint and no production `.env` requirement.

## Core Features

- German and English language switch, with English as the default.
- Light and dark themes, with light as the default.
- Luminovia visual system with the supplied logo, founder photography and violet, mint, coral and yellow accents.
- Static React/Vite app with React Router routes.
- GitHub Pages custom-domain build for `https://luminovia.org/`.
- Production build uses Preact compatibility mode and loads page-specific styles on demand.
- Direct contact by email and phone. Introductory calls are arranged by email.
- Google Analytics consent banner.
- SEO metadata, canonical links, sitemap, robots file and JSON-LD structured data.
- GitHub Pages deployment workflow that builds Vite into `dist`.

## Main Pages

| Route | Purpose |
| --- | --- |
| `/` | Founder-led homepage with three service routes, training examples and a contact link. |
| `/training` | Detailed training topics, service cards, formats and audiences. |
| `/offers` | Concrete bookable packages for training, consulting, curriculum, expert sessions and larger programmes. |
| `/consulting` | Consulting portfolio for AI, IT, business, curriculum, roadmaps and digital enablement. |
| `/clients` | Selected teaching, project and research experience with links to organisations. |
| `/projects` | Project portfolio connected to training and consulting practice. |
| `/pricing` | Net starting rates and consulting/project pricing on request. |
| `/about` | CEO/founder profile for Carina Sophie Schoppe. |
| `/contact` | Direct contact, appointment scheduler, email and phone links. |
| `/imprint` | Legal notice. |
| `/privacy` | Privacy policy. |
| `/terms` | Terms & Conditions, payment terms and bank information. |

Training detail pages live under `/training/:slug`. Each topic has a dedicated outline in English and German.

## Project Structure

```text
.
├── .github/workflows/
│   ├── node.js.yml          # CI: install, lint, build, test
│   └── static.yml           # GitHub Pages deployment from dist
├── public/
│   ├── images/              # Carina images and Luminovia logo assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/                # Profile, localized content, training details, SEO data
│   ├── pages/               # Route-level pages
│   ├── styles/              # Styles for business and company pages
│   ├── test/                # Vitest setup and render helpers
│   ├── App.jsx              # Router, theme, layout shell
│   ├── i18n.jsx             # German/English language provider
│   └── index.css            # Tailwind import, global theme, layout and shared styles
├── vite.config.js           # Build, test and prerender route configuration
└── package.json
```

## Technology

- Vite
- React API for development and tests
- Preact compatibility for production browser build
- React Router
- Tailwind CSS via `@tailwindcss/vite`
- Vitest
- Testing Library
- jsdom
- ESLint flat config

The required Node version is declared in `package.json` as `>=24.0.0`; CI currently uses Node 26.

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Test Strategy

The project has unit, integration and full-route smoke coverage.

Important test files:

| File | Coverage |
| --- | --- |
| `src/App.test.jsx` | Language defaults, route rendering, contact links, pricing language switch. |
| `src/pages/PagesSmoke.test.jsx` | Main static routes render in English. |
| `src/pages/FullSiteRoutes.test.jsx` | Reads `public/sitemap.xml` and renders every internal app route. |
| `src/data/trainingDetails.test.js` | Every training topic, service chip and sitemap training detail page is connected. |
| `src/data/localizationQuality.test.js` | German localization text avoids common encoding/mojibake markers. |
| `src/components/AnalyticsConsent.test.jsx` | Consent decline/accept behavior and Google tag script loading. |
| `src/components/ClientProofSection.test.jsx` | Organisation links and reference wording. |
| `src/utils/browser.test.js` | Storage wrappers and stale chunk error detection. |

Run all tests:

```bash
npm test
```

The enforced coverage threshold in `vite.config.js` is:

```text
lines: 99%
```

Vitest still reports statements, branches and functions so weaker areas remain visible in CI output, but the hard quality gate is 99% line coverage across application source files.

## Full-Site Test Code

`src/pages/FullSiteRoutes.test.jsx` is the broadest route-level safety net. It:

- reads every URL from `public/sitemap.xml`,
- keeps only internal app routes,
- excludes PDF/download assets,
- renders each route through `App`,
- verifies that a `<main>` and level-one heading exist,
- fails if the rendered page or browser title is a 404,
- checks the primary navigation and the additional footer links to pricing, experience and projects.

This test is meant to catch broken routes whenever the sitemap, router or navigation changes.

## SEO and Static Route Generation

SEO is handled in two places:

- `src/components/Seo.jsx` updates runtime metadata and JSON-LD.
- `vite.config.js` emits static `index.html` files for important routes during build.

Production builds use the root Vite base path `/` for the custom GitHub Pages domain `luminovia.org`, so generated assets, public files and internal routes match the live domain.

When adding a major page, update:

1. `src/App.jsx`
2. `src/components/Header.jsx` or `src/components/Footer.jsx` if it belongs in navigation
3. `src/i18n.jsx` navigation labels
4. `src/data/seoContent.js` for the route metadata used by the app and build
5. `src/components/Seo.jsx` if the page needs structured data
6. `public/sitemap.xml`
7. tests, especially `FullSiteRoutes.test.jsx` if route filtering changes

## Deployment

The target remote is:

```text
https://github.com/Luminovia-Training-Consulting/Website.git
```

Deployment runs through `.github/workflows/static.yml`:

1. checkout repository,
2. setup Node.js 24,
3. `npm ci`,
4. `npm run build`,
5. upload `./dist`,
6. deploy to GitHub Pages.

CI runs through `.github/workflows/node.js.yml`:

1. `npm ci`,
2. `npm run lint --if-present`,
3. `npm run build --if-present`,
4. `npm test --if-present`.

## Assets

Luminovia logo assets:

- `public/images/luminovia-logo-full.webp`: 640 px derivative of the supplied `Luminovia_Full_Logo.png`.
- `public/images/luminovia-logo-mark-160.webp`: lightweight derivative of `Luminovia circular book logo.png`, with reduced outer whitespace, used in the site header and footer.
- `public/images/luminovia-og.jpg`: 1200 × 630 social sharing preview from the supplied `Luminovia Banner.png`, fitted without cropping the lettering.

The previous unused raster-in-SVG logo wrappers have been replaced with compressed WebP assets.

Browser icons are resized from the supplied 4096 × 4096 `Luminovia_Icon.png`, preserving its white background and colours: `public/favicon.png` (48 × 48), `public/favicon.ico` (16, 32, 48 and 64 px), and `public/apple-touch-icon.png` (180 × 180). Their URLs in `index.html` are versioned so existing visitors receive replacements. Root-level icons are not cached by the service worker; replacing the header/footer branding under `/images/` also requires a service-worker cache version update.

Responsive versions of the founder portrait in `public/images/` serve the home and about pages. The display font is self-hosted in `public/fonts/`.

## Content Maintenance

Most business content is data-driven:

- `src/data/profile.js`: company profile, contact links and image paths.
- `src/data/content.js`: English base content.
- `src/data/localizedContent.js`: German localized content and localized mappings.
- `src/pages/HomePage.jsx`: homepage copy in both languages. The initial English hero is also present in `index.html` before the app loads.
- `src/data/trainingDetails.js`: training topics, English outlines, German overview copy and topic link mapping.
- `src/data/trainingDetailsDe.js`: German modules, learning outcomes and materials for each training topic.
- `src/i18n.jsx`: UI labels, homepage strings and contact copy.

Prefer editing these data files before hardcoding copy into components.

## Pre-Push Checklist

Before pushing changes:

```bash
npm test
npm run build
git status -sb
```

For rendered UI changes, also verify at least:

- desktop dark mode,
- desktop light mode,
- mobile dark mode,
- language switch,
- contact links,
- no horizontal overflow,
- no framework error overlay.

## License

The repository includes the license files committed in the project. Website copy, imagery and brand assets belong to their respective owners and should not be reused outside the Luminovia project without permission.
