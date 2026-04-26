# Carina Sophie Schoppe Lecturer Site

React/Vite website for Carina Sophie Schoppe's lecturer, AI trainer, speaker and software portfolio profile.

## Features

- Responsive marketing website with React Router pages
- Training, skills, software, client proof, timeline, blog, imprint and privacy pages
- Google Analytics integration with consent banner
- Direct email, phone and Google Calendar appointment contact flow
- Downloadable/printable lecturer profile at `public/carina-sophie-schoppe-lecturer-profile.html`
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

## Contact and booking

The site is static and does not require SMTP, PHP mail handling or `.env` variables.

Contact requests use direct links:

- Email: `info@carinaschoppe.com`
- Australia phone: `+61 451 448 724`
- Germany phone: `+49 175 5738 757`
- Google Calendar appointment scheduling on the contact page

## Google Analytics

Google Analytics is added directly in `index.html` with the Google tag `G-YNGD292XE5`.

## Important ignored files

- `node_modules/`
- `dist/`
- local `.env` files with private notes or legacy secrets
