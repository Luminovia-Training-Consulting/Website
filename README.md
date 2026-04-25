# Carina Sophie Schoppe Lecturer Site

React/Vite website for Carina Sophie Schoppe's lecturer, AI trainer, speaker and software portfolio profile.

## Features

- Responsive marketing website with React Router pages
- Training, skills, software, client proof, timeline, blog, imprint and privacy pages
- Google Analytics integration with consent banner
- Hostinger-ready PHP contact form endpoint
- Direct email and calendar fallback on the contact page
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

## Contact form setup

The contact form uses Hostinger SMTP through `public/api/contact.php`.

Create a `.env` file from `.env.example` and upload that `.env` to the same folder as `index.html` on Hostinger, usually `public_html/.env`.

Used environment variables:

```txt
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=ssl
SMTP_VERIFY_PEER=true
SMTP_USERNAME=info@carinaschoppe.com
SMTP_PASSWORD=CHANGE_ME
MAIL_FROM=info@carinaschoppe.com
MAIL_FROM_NAME="Carina Sophie Schoppe Website"
MAIL_TO=info@carinaschoppe.com
CONTACT_DEBUG=false
CONTACT_TRANSPORT=auto
```

`MAIL_TO` is where the message is sent. For this site it should stay `info@carinaschoppe.com`, so contact-form messages arrive in the same mailbox. The real `.env` is intentionally ignored by Git and must not be committed.

`CONTACT_TRANSPORT=auto` tries authenticated SMTP first and falls back to PHP `mail()`. If Hostinger blocks outbound SMTP sockets on the web hosting plan, set `CONTACT_TRANSPORT=mail`. If you want to force SMTP only, set `CONTACT_TRANSPORT=smtp`.

Keep `SMTP_VERIFY_PEER=true` by default. Only set it to `false` temporarily if Hostinger PHP cannot validate the SMTP TLS certificate and the contact log says certificate verification failed.

Local `npm run dev` and `npm run preview` do not execute PHP. The contact form can only send on a PHP-capable server such as Hostinger, or when tested through a local PHP server.

The older `public/api/contact-config.php` file is still supported as a fallback for local testing, but `.env` is the preferred Hostinger setup.

## Google Analytics

Analytics is configured in `src/data/profile.js` and loads only after visitor consent.

## Important ignored files

- `node_modules/`
- `dist/`
- `.env*` except `.env.example`
- `public/api/contact-config.php`
- contact form runtime logs
