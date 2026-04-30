# Carina Sophie Schoppe Website

Professional website for Carina Sophie Schoppe as an AI lecturer, IT trainer, cybersecurity and software-development educator, business technology consultant, keynote speaker and digital education expert.

The site is built as a static React/Vite application. It is designed for deployment on classic static web hosting such as Hostinger, where the production build can be uploaded directly into `public_html/`. The project intentionally does not require a Node backend, serverless mail route, SMTP setup or production `.env` file.

## Table of Contents

- [Purpose](#purpose)
- [Business Positioning](#business-positioning)
- [Current Website Scope](#current-website-scope)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Routes and Pages](#routes-and-pages)
- [Content Architecture](#content-architecture)
- [Internationalisation](#internationalisation)
- [Contact and Booking Model](#contact-and-booking-model)
- [Downloadable Business Assets](#downloadable-business-assets)
- [Blog System](#blog-system)
- [SEO, Metadata and Structured Data](#seo-metadata-and-structured-data)
- [Google Analytics and Consent](#google-analytics-and-consent)
- [Mobile and Performance Decisions](#mobile-and-performance-decisions)
- [Local Development](#local-development)
- [Quality Checks](#quality-checks)
- [Production Build](#production-build)
- [Hostinger Deployment](#hostinger-deployment)
- [Environment Variables](#environment-variables)
- [Maintenance Guide](#maintenance-guide)
- [Troubleshooting](#troubleshooting)
- [Repository Hygiene](#repository-hygiene)
- [License and Content Ownership](#license-and-content-ownership)

## Purpose

This website should answer the following questions within a few seconds:

- Who is Carina Sophie Schoppe?
- What can she be booked for?
- Which target groups does she work with?
- Which training topics and services are available?
- Why is she credible for AI, IT, cybersecurity and digital education work?
- How can a visitor contact her or book a call?

The site is not meant to be a generic portfolio. It is a conversion-focused business website for booking Carina as a lecturer, trainer, consultant and speaker.

## Business Positioning

The core positioning is:

> AI, IT and Business Lecturer for modern digital education.

The website presents Carina as bookable for:

- AI and GenAI training
- AI literacy for teams
- Prompt engineering and agentic workflows
- AI governance and responsible AI
- Python, SQL and data skills
- Software development and APIs
- Cybersecurity and pentesting fundamentals
- Scrum, agile and digital project work
- Business informatics and digital transformation
- Curriculum design and blended learning
- Keynotes, expert talks and guest lectures
- Remote live training from Brisbane for Europe, Australia and international education partners

The target audience includes:

- Training providers
- Universities and higher education institutions
- Corporate learning and development teams
- Public sector organisations
- Startups and SMEs
- Bootcamps and coding schools
- German-speaking providers needing remote lecturers
- International clients looking for English or German delivery

## Current Website Scope

The website includes:

- A shortened homepage focused on conversion.
- A dedicated training and services page.
- A skills and topics map.
- A software portfolio page with selected GitHub projects.
- A portfolio/client proof page.
- A pricing page with language-specific price display.
- A personal timeline page.
- A blog overview and individual blog post pages.
- A contact page with direct email, phone and Google Calendar booking.
- Imprint and privacy pages.
- A custom 404 page.
- English and German UI/content switching.
- Google Analytics with consent handling.
- SEO metadata, sitemap, robots file and structured data.

## Technology Stack

Runtime and frontend:

- React
- React Router
- Vite
- Tailwind CSS through `@tailwindcss/vite`
- Static build output

Quality and testing:

- Vitest
- Testing Library
- jsdom
- V8 coverage
- ESLint flat config
- React Hooks lint rules

Deployment target:

- Hostinger / Apache static hosting
- Any static hosting provider that can serve a Vite build

The project does not use:

- Server-side rendering
- A Node production server
- Serverless functions
- A contact form backend
- SMTP in production
- Runtime `.env` configuration for the public site

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── node.js.yml
├── .node-version
├── public/
│   ├── .htaccess
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── lecturer.zip
│   ├── carina-sophie-schoppe-lecturer-profile.html
│   ├── carina-sophie-schoppe-training-portfolio.html
│   ├── carina-sophie-schoppe-ai-it-training-catalogue.html
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── test/
│   ├── App.jsx
│   ├── i18n.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Routes and Pages

The application is a React single page app with these routes:

| Route | Purpose |
| --- | --- |
| `/` | Short conversion-focused homepage with positioning, core services, booking fit, process, FAQ and contact CTA. |
| `/training` | Detailed training and services page. |
| `/skills` | Practical skill map for AI, software, cybersecurity, data and business IT. |
| `/software` | Selected GitHub/software projects. |
| `/portfolio` | Former clients, selected collaborations and proof projects. |
| `/pricing` | Orientation pricing in EUR or USD depending on selected language. |
| `/my-way` | Personal and professional timeline. |
| `/blog` | Blog overview with featured latest post and scrollable post list. |
| `/blog/:slug` | Individual blog post pages. |
| `/contact` | Direct email, phone links and Google Calendar booking. |
| `/imprint` | Legal notice / imprint. |
| `/privacy` | Privacy policy. |
| `*` | Custom 404 page. |

Route registration lives in:

```text
src/App.jsx
```

Navigation items live in:

```text
src/data/profile.js
```

Navigation labels live in:

```text
src/i18n.jsx
```

## Content Architecture

The project keeps most content in data files instead of scattering business copy across many components.

### Profile, Links and Global Assets

File:

```text
src/data/profile.js
```

This file contains:

- Name
- Role
- Location
- Address lines
- Email
- Australian phone number
- German phone number
- LinkedIn URL
- GitHub URL
- Google Calendar appointment URL
- Google Analytics measurement ID
- Download asset paths
- Image paths
- Top-level navigation items

Change this file when updating core contact details, profile links, appointment links, downloadable asset paths or image references.

### English Content

File:

```text
src/data/content.js
```

This file contains the main English content:

- Trust stats
- Core offers
- Delivery formats
- Training topics
- Service offerings
- Featured training topics
- Capabilities
- Audience cards
- Teaching proof
- Trust signals
- Credentials
- Former clients and collaborations
- Testimonial/proof statements
- Life milestones
- Skill groups
- Blog posts
- Software projects
- Timeline
- FAQ

### German Localised Content

File:

```text
src/data/localizedContent.js
```

This file maps the English content into German variants and returns the language-specific content through:

```js
useSiteContent()
```

It contains German versions of:

- Trust stats
- Services
- Training topics
- Audience cards
- FAQ
- Blog posts
- Timeline-related content
- Other content collections used by pages

### UI Labels and Static Interface Copy

File:

```text
src/i18n.jsx
```

This file contains:

- Navigation labels
- Header labels
- Button labels
- Homepage section titles
- Contact page labels
- Analytics consent text
- 404 text
- Jump navigation items
- Sticky booking bar copy
- Language switch handling

Use this file for short UI strings and repeated interface labels.

## Internationalisation

The website supports:

- English
- German

Current behaviour:

- Default language: English
- Language state is stored in `localStorage`.
- The `<html lang="...">` attribute is updated dynamically.
- The header language switch shows a round flag icon and the target language label.
- German mode uses German copy and EUR pricing.
- English mode uses English copy and rounded USD orientation pricing.

Important files:

```text
src/i18n.jsx
src/data/localizedContent.js
src/pages/PricingPage.jsx
```

## Contact and Booking Model

The website intentionally does not include a contact form.

Reasoning:

- The site is static.
- There is no backend mail route.
- There is no SMTP configuration.
- There are no production server environment variables.
- Contact should not fail because of mail server settings.

Contact options:

- `mailto:` link to `info@carinaschoppe.com`
- Australian phone number: `+61 451 448 724`
- German phone number: `+49 175 5738 757`
- Google Calendar appointment scheduling button
- Embedded Google Calendar appointment scheduler

Contact page:

```text
src/pages/ContactPage.jsx
```

Contact data:

```text
src/data/profile.js
```

## Downloadable Business Assets

The site provides downloadable business assets from the `public/` folder:

```text
public/lecturer.zip
public/carina-sophie-schoppe-lecturer-profile.html
public/carina-sophie-schoppe-training-portfolio.html
public/carina-sophie-schoppe-ai-it-training-catalogue.html
```

They are linked through:

```text
src/data/profile.js
```

During `npm run build`, Vite copies files from `public/` into `dist/` unchanged.

To replace an asset:

1. Replace the file in `public/`.
2. Keep the same filename if possible.
3. If the filename changes, update `src/data/profile.js`.
4. Run the quality checks.
5. Build and deploy.

## Blog System

Blog data lives in:

```text
src/data/content.js
```

Blog pages:

```text
src/pages/BlogPage.jsx
src/pages/BlogPostPage.jsx
```

Tests:

```text
src/pages/BlogPage.test.jsx
src/pages/BlogPostPage.test.jsx
src/data/blogData.test.jsx
```

Each blog post should include:

- `slug`
- `title`
- `date`
- `category`
- `hubCategory`
- `readTime`
- `excerpt`
- `body`
- `takeaway`
- `sources`

The blog overview:

- Sorts posts newest-first.
- Shows the latest post as a featured post.
- Displays remaining posts in a horizontally scrollable list.
- Includes category information, date, reading time, excerpt and read-more links.

Individual blog post pages are generated from the same data source.

## SEO, Metadata and Structured Data

SEO is handled in several layers.

### Static HTML Metadata

File:

```text
index.html
```

Includes:

- Charset and viewport
- Meta description
- Robots meta tag
- Open Graph metadata
- Twitter card metadata
- Canonical URL
- hreflang alternates
- Responsive hero/headshot image preload
- Base schema.org JSON-LD

### Dynamic Route Metadata

File:

```text
src/components/Seo.jsx
```

This component updates metadata per route:

- `document.title`
- Meta description
- Robots tag
- Open Graph title, description, URL, image and type
- Twitter title and description
- Canonical URL
- hreflang links

It also injects route-aware JSON-LD:

- `Person`
- `ProfessionalService`
- `Offer`
- `BreadcrumbList`
- `FAQPage` on the homepage
- `BlogPosting` on individual blog post pages

### Robots and Sitemap

Files:

```text
public/robots.txt
public/sitemap.xml
```

`robots.txt` allows indexing and points crawlers to the sitemap.

`sitemap.xml` lists:

- Main pages
- Training/service pages
- Pricing
- Blog overview
- Individual blog posts
- Contact
- Legal pages

When adding a new public route, update:

```text
public/sitemap.xml
src/components/Seo.jsx
```

## Google Analytics and Consent

Measurement ID:

```text
G-YNGD292XE5
```

Consent handling lives in:

```text
src/components/AnalyticsConsent.jsx
```

The consent component:

- Shows a privacy-friendly analytics banner.
- Stores the decision in `localStorage`.
- Loads Google Analytics only after acceptance.
- Sends route changes after consent.
- Uses IP anonymisation.
- Avoids a Google Tag Manager request on the initial page load before consent.

The measurement ID is also stored in:

```text
src/data/profile.js
```

## Mobile and Performance Decisions

The project has been adjusted to avoid mobile rendering issues, especially on Chrome mobile.

Important decisions:

- No flip cards for proof/client tiles.
- No text reveal lazy loading.
- No `IntersectionObserver`-based text visibility.
- No content that depends on scroll-triggered reveal to become readable.
- Expensive backdrop and animation effects are reduced on mobile.
- Mobile hover effects are disabled or reduced.
- Layout uses `overflow-x-hidden` to avoid horizontal clipping.
- Buttons use explicit `data-button-variant` attributes for mobile CSS overrides.
- Hero image uses high fetch priority.
- The homepage is intentionally shorter than the detailed subpages.
- The production build inlines the generated CSS into `index.html`, removing a render-blocking CSS file request.
- The homepage has a tiny static first-paint shell in `index.html`, so the initial hero text and portrait can appear before React finishes loading.
- Major route pages are code-split with `React.lazy`, so homepage, training, pricing, blog, portfolio, legal and contact page code can be loaded as focused route chunks.
- Large content collections are kept out of the initial homepage bundle; blog posts, client proof, software projects and timeline data load with the routes that need them.
- Google Analytics is consent-gated and does not create a tag-manager request on the first load before consent.
- Responsive WebP image variants are generated for the portrait images and used through `srcset`/`sizes`.
- The Vite build targets modern browsers with `es2022` output and disables the legacy modulepreload polyfill.
- React, ReactDOM and React Router are isolated in a stable vendor chunk for better long-term browser caching.
- Non-critical analytics consent UI and ambient background animation code load after idle instead of blocking the first route render.
- The project standardises on Node `24.x` for local development and CI, but the deployed site remains static and does not require Node at runtime.

Main CSS file:

```text
src/index.css
```

Key components:

```text
src/components/Button.jsx
src/components/Card.jsx
src/components/Header.jsx
src/components/StickyBookingBar.jsx
src/components/AmbientIntelligence.jsx
```

## Local Development

Required Node.js version:

```text
Node.js >= 24.0.0
```

The repository includes a `.node-version` file with `24`, and GitHub Actions runs on Node `24.x`.

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run production preview:

```bash
npm run build
npm run preview
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Run tests with coverage:

```bash
npm test
```

Run production build:

```bash
npm run build
```

Recommended pre-deployment command sequence:

```bash
npm run lint
npm test
npm run build
```

Current test setup:

- Vitest
- Testing Library
- jsdom
- V8 coverage

ESLint setup:

```text
eslint.config.js
```

The lint configuration checks:

- Standard JavaScript issues through `@eslint/js`
- React Hooks rules
- Unused variables and parameters
- Browser and Node globals

Coverage output is text/JSON focused. HTML coverage output is intentionally not used to avoid IDE noise from generated coverage assets.

## Production Build

Create a production build:

```bash
npm run build
```

Build output:

```text
dist/
```

The build includes:

- `index.html`
- Inlined production CSS
- Bundled JavaScript
- Files copied from `public/`
- `.htaccess`
- Images
- Downloadable assets
- `robots.txt`
- `sitemap.xml`

Do not commit `dist/`. It is build output and is ignored by Git.

## Hostinger Deployment

The site is designed for normal static hosting.

Deployment steps:

1. Install dependencies locally:

   ```bash
   npm install
   ```

2. Build the site:

   ```bash
   npm run build
   ```

3. Upload the contents of `dist/` into Hostinger:

   ```text
   public_html/
   ```

4. Upload the contents of `dist/`, not the project folder itself.

5. Make sure this file exists on the server:

   ```text
   public_html/.htaccess
   ```

The `.htaccess` file is important because this is a React Router single page app. It makes direct URLs such as `/contact`, `/pricing` and `/blog/...` work on Apache hosting.

## Environment Variables

No production environment variables are required.

Current production model:

- No `.env` required.
- No SMTP variables.
- No mail backend.
- No contact form API.
- No Hostinger environment settings needed.
- Google Analytics ID is public and stored in the code.
- Contact is handled through direct links and Google Calendar booking.

`.env` is ignored and should not be committed.

## Maintenance Guide

### Change Email, Phone Numbers, Address or Social Links

Edit:

```text
src/data/profile.js
```

Then run:

```bash
npm run lint
npm test
npm run build
```

### Change Navigation

Edit:

```text
src/data/profile.js
src/i18n.jsx
```

Update route registration if a new page is added:

```text
src/App.jsx
```

Update SEO and sitemap:

```text
src/components/Seo.jsx
public/sitemap.xml
```

### Change Homepage Sections

Edit:

```text
src/pages/HomePage.jsx
src/i18n.jsx
src/data/content.js
src/data/localizedContent.js
```

The homepage should remain short and conversion-focused. Detailed proof, software, blog and timeline content should stay on subpages where possible.

### Change Services or Training Topics

Edit English content:

```text
src/data/content.js
```

Edit German content:

```text
src/data/localizedContent.js
```

Service-related pages:

```text
src/pages/TrainingPage.jsx
src/pages/SkillsPage.jsx
src/pages/HomePage.jsx
```

### Change Pricing

Edit:

```text
src/pages/PricingPage.jsx
```

Current pricing logic:

- German view shows EUR values.
- English view shows rounded USD orientation values.
- All prices are non-binding orientation rates.

### Change FAQ

English FAQ:

```text
src/data/content.js
```

German FAQ:

```text
src/data/localizedContent.js
```

Homepage FAQ rendering:

```text
src/pages/HomePage.jsx
```

FAQ schema:

```text
src/components/Seo.jsx
```

### Add a Blog Post

Edit:

```text
src/data/content.js
```

Add a new object to `blogPosts`.

Required fields:

```js
{
    slug: "example-slug",
    title: "Example title",
    date: "2026-04-27",
    category: "AI & Governance",
    hubCategory: "AI & Governance",
    readTime: "8 min read",
    excerpt: "Short summary.",
    body: [
        {
            heading: "Section heading",
            paragraphs: ["Paragraph text."]
        }
    ],
    takeaway: "Main takeaway.",
    sources: [
        {label: "Source label", href: "https://example.com"}
    ]
}
```

Also update:

```text
public/sitemap.xml
```

If the blog post should have German content, add/adjust the German version in:

```text
src/data/localizedContent.js
```

### Change Images

Image files live in:

```text
public/images/
```

Image references live in:

```text
src/data/profile.js
```

The site uses WebP variants for faster delivery while keeping JPG files as fallbacks through the `Photo` component:

```text
public/images/*.jpg
public/images/*-480.webp
public/images/*-640.webp
public/images/*-960.webp
src/components/Photo.jsx
```

When replacing images:

- Keep filenames stable if possible.
- Replace both the JPG fallback and the matching WebP variant.
- Optimise image size before deploying.
- Check mobile and desktop rendering.
- Keep alt text meaningful.

### Change Visual Style

Main style file:

```text
src/index.css
```

Common component files:

```text
src/components/Button.jsx
src/components/Card.jsx
src/components/Header.jsx
src/components/Footer.jsx
src/components/ConversionStrip.jsx
src/components/StickyBookingBar.jsx
```

Design direction:

- Dark theme
- Premium liquid glass feel
- Blue, cyan, violet and subtle indigo accents
- Strong readability
- Avoid loud red/pink rainbow effects
- Avoid layout-shifting hover effects
- Avoid mobile-only content flicker

### Change Google Analytics

Edit:

```text
src/data/profile.js
```

If the measurement ID changes, update the profile setting. The Google script is loaded by `src/components/AnalyticsConsent.jsx` only after consent.

### Change Legal Pages

Edit:

```text
src/pages/ImprintPage.jsx
src/pages/PrivacyPage.jsx
```

Legal/contact information should stay consistent with:

```text
src/data/profile.js
```

## GitHub Actions

Workflow:

```text
.github/workflows/node.js.yml
```

The workflow runs on pushes and pull requests to `main`.

It currently performs:

```bash
npm ci
npm run lint
npm run build --if-present
npm test
```

The workflow uses Node `24.x`, matching the repository `.node-version` file and the package engine requirement.

## Troubleshooting

### Build Fails with a Node Version Error

Symptom:

```text
Vite requires Node.js version 20.19+ or 22.12+
```

Fix:

- Use Node.js `24.x` or newer.
- If you use a version manager, let it read `.node-version`.
- In GitHub Actions, keep the workflow on Node `24.x`.
- Locally, update Node before running `npm install` or `npm run build`.

### Direct Routes Return 404 on Hostinger

Examples:

```text
/contact
/pricing
/blog/agentic-ai-from-demo-to-delegation
```

Check:

- Was the content of `dist/` uploaded into `public_html/`?
- Is `index.html` directly inside `public_html/`?
- Is `.htaccess` directly inside `public_html/`?
- Did Hostinger cache an old build?

### Contact Form Is Missing

This is intentional.

The contact flow uses:

- Email link
- Phone links
- Google Calendar booking

There is no SMTP or contact form backend.

### Google Analytics Does Not Track

Check:

- Has the visitor accepted the consent banner?
- Is the measurement ID correct?
- Is tracking blocked by the browser or an extension?
- Is the Google Analytics realtime view open?
- Are you testing on the deployed site rather than a local preview?

### Mobile Content Appears Empty or Flickers

Check:

- Deploy the newest build.
- Clear browser cache.
- Clear Hostinger cache.
- Test in Chrome mobile incognito.

The current code avoids scroll-based text reveal and flip-card effects. If mobile content flickers again, inspect any newly added animation, lazy rendering or `IntersectionObserver` logic first.

### IntelliJ Reports Unused CSS Selectors

Some Tailwind-style class names and arbitrary values may confuse IDE inspections. The project already avoids the previous `btn-primary` / `btn-secondary` false-positive pattern by using:

```text
data-button-variant="primary"
data-button-variant="secondary"
```

Mobile button overrides in CSS should target these attributes instead of dynamic class names.

### Sitemap Is Outdated

Edit:

```text
public/sitemap.xml
```

Update it when adding:

- A public route
- A blog post
- A new important landing page

### Blog Post Shows 404

Check:

- The `slug` in `src/data/content.js`.
- The URL path.
- The route `/blog/:slug` in `src/App.jsx`.
- Whether the deployed build is current.

## Repository Hygiene

Ignored files include:

- `node_modules/`
- `dist/`
- `coverage/`
- `.env`
- `.env.*`
- local preview logs
- screenshots
- temporary files

Do not commit:

- Secrets
- SMTP passwords
- local `.env` files
- generated build output
- coverage output
- temporary screenshots

Before committing:

```bash
npm run lint
npm test
npm run build
git diff --check
git status --short
```

## Deployment Checklist

Before uploading a build:

- [ ] `npm run lint` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Homepage works on desktop.
- [ ] Homepage works on mobile.
- [ ] Contact page opens email, phone and booking links.
- [ ] Pricing page shows correct language-specific pricing.
- [ ] Blog overview and at least one blog post work.
- [ ] `/imprint` and `/privacy` work.
- [ ] Direct route reloads work after deployment.
- [ ] `robots.txt` is reachable.
- [ ] `sitemap.xml` is reachable.

## License and Content Ownership

This repository contains the website implementation and website-specific content for Carina Sophie Schoppe.

The texts, images, downloadable profiles, training catalogues, personal data, branding and business positioning are intended for this website. They should not be reused for other projects without permission.

Code dependencies are governed by their respective open-source licenses.
