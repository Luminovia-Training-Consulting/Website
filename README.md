# Carina Sophie Schoppe Lecturer Site

React/Vite website for Carina Sophie Schoppe's lecturer, AI trainer, speaker and software portfolio profile.

## Features

- Responsive marketing website with React Router pages
- Training, skills, software, client proof, timeline, blog, imprint and privacy pages
- Google Analytics integration with consent banner
- Hostinger-ready PHP contact form endpoint
- Static production build generated into `dist/`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the contents of `dist/` to Hostinger `public_html/`.

## Contact form setup

The real SMTP config is intentionally ignored by Git:

```txt
public/api/contact-config.php
```

Create it from:

```txt
public/api/contact-config.example.php
```

Then insert the real Hostinger mailbox credentials locally before building. Never commit the real password.

## Google Analytics

Analytics is configured in `src/data/profile.js` and loads only after visitor consent.

## Important ignored files

- `node_modules/`
- `dist/`
- `.env*` except `.env.example`
- `public/api/contact-config.php`
- contact form runtime logs
