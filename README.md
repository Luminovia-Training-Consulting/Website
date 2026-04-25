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

Set the variables in Hostinger's environment/settings UI when possible. `public/api/contact.php` reads real server environment variables first (`getenv`, `$_ENV`, `$_SERVER`, including Hostinger-style redirected variables) and only then falls back to `.env` or `public/api/contact-config.php`.

If Hostinger does not expose environment variables for your hosting plan, create a `.env` file from `.env.example` and upload that `.env` to the same folder as `index.html`, usually `public_html/.env`.

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

The older `public/api/contact-config.php` file is still supported as a fallback for local testing, but Hostinger environment variables or `.env` are the preferred setup.

## Public website settings

Public website details can still be overridden with `VITE_*` variables during the Vite build, but they are separate from the SMTP/contact `.env.example`. Use these only in build environment settings if you need to override public contact details:

```txt
VITE_SITE_NAME="Carina Sophie Schoppe"
VITE_SITE_ROLE="Freelance IT Lecturer - AI Trainer - Business Technology Speaker"
VITE_SITE_LOCATION="Brisbane, Australia"
VITE_SITE_ADDRESS="Unit 28|436 Ann Street|Brisbane QLD 4000|Australia"
VITE_SITE_REMOTE="Remote delivery for Europe & APAC"
VITE_SITE_EMAIL=info@carinaschoppe.com
VITE_SITE_PHONE_AU="+61 451 448 724"
VITE_SITE_PHONE_DE="+49 175 5738 757"
VITE_SITE_GITHUB=https://github.com/CarinaSchoppe
VITE_SITE_LINKEDIN=https://www.linkedin.com/in/carinaschoppe/
VITE_LECTURER_PROFILE_URL=/lecturer.zip
VITE_TRAINING_PORTFOLIO_URL=/carina-sophie-schoppe-training-portfolio.html
VITE_TRAINING_CATALOGUE_URL=/carina-sophie-schoppe-ai-it-training-catalogue.html
VITE_APPOINTMENT_SCHEDULE_URL=https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DRa4OAiQN9y8F-86ull0Jqb25hCL2ZimE4Wo5dojeEF3eSVDBMk6mGJMUG0mZxUR8wSD5-BB6?gv=true
VITE_GA_MEASUREMENT_ID=G-YNGD292XE5
```

## Google Analytics

Analytics is configured through `VITE_GA_MEASUREMENT_ID` and loads only after visitor consent.

## Important ignored files

- `node_modules/`
- `dist/`
- `.env*` except `.env.example`
- `public/api/contact-config.php`
- contact form runtime logs
