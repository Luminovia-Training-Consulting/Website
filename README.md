# Carina Sophie Schoppe Lecturer Website

Professionelle Website fuer Carina Sophie Schoppe als AI-, IT- und Business-Dozentin, Trainerin, Speakerin und Consultant fuer moderne digitale Bildung.

Die Seite ist als statisch deploybare React/Vite-Website gebaut. Sie ist darauf ausgelegt, direkt bei Hostinger in `public_html/` betrieben zu werden, ohne Node-Backend, ohne SMTP-Serverlogik und ohne serverseitige Environment-Variablen.

## Ziel der Website

Die Website soll innerhalb weniger Sekunden beantworten:

- Wer ist Carina Sophie Schoppe?
- Wofuer kann sie gebucht werden?
- Fuer welche Kundengruppen ist sie passend?
- Welche Themen, Trainingsformate und Referenzen gibt es?
- Wie kann man Kontakt aufnehmen oder direkt einen Termin buchen?

Positionierung:

- AI Lecturer
- IT Trainer
- Business Consultant
- Digital Education Expert
- Cybersecurity, Software Development, Business Informatics und AI Governance
- Remote Live Training aus Brisbane fuer Europa, Australien und internationale Bildungspartner

## Technischer Stack

- React
- React Router
- Vite
- Tailwind CSS via `@tailwindcss/vite`
- Vitest
- Testing Library
- Google Analytics mit Consent-Banner
- Statischer Build fuer Hostinger / Apache Hosting

Die Anwendung nutzt kein SSR, kein Node-Backend und keine Serverless Functions.

## Projektstruktur

```text
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── .htaccess
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── lecturer.zip
│   ├── carina-sophie-schoppe-lecturer-profile.html
│   ├── carina-sophie-schoppe-training-portfolio.html
│   └── carina-sophie-schoppe-ai-it-training-catalogue.html
├── src/
│   ├── App.jsx
│   ├── i18n.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── test/
└── .github/workflows/node.js.yml
```

## Seiten

Die Website ist eine Single Page Application mit mehreren Routen:

- `/` - Startseite mit Positionierung, Services, Zielgruppen, Proof, Blog Preview, Prozess, FAQ und Kontakt-CTA
- `/training` - Training & Services
- `/skills` - Skills und Themenlandkarte
- `/software` - Software- und GitHub-Projektportfolio
- `/portfolio` - ehemalige Kunden, Collaborations und Proof-Projekte
- `/pricing` - Preisorientierung in EUR oder USD je nach Sprache
- `/my-way` - beruflicher Weg / Timeline
- `/blog` - Bloguebersicht
- `/blog/:slug` - einzelne Blogbeitraege
- `/contact` - Kontakt, direkte Links und Google Calendar Booking
- `/imprint` - Impressum / Legal Notice
- `/privacy` - Datenschutz / Privacy Policy
- `*` - eigene 404-Seite

## Inhalte pflegen

Die wichtigsten Inhalte liegen nicht hart verteilt in Komponenten, sondern zentral in Datendateien.

### Profil, Links, Telefonnummern und Assets

Datei:

```text
src/data/profile.js
```

Dort werden unter anderem gepflegt:

- Name
- E-Mail
- Telefonnummer Australien
- Telefonnummer Deutschland
- Adresse
- LinkedIn
- GitHub
- Google Calendar Appointment Link
- Google Analytics Measurement ID
- Download-Links fuer Lecturer Profile, Training Portfolio und AI & IT Training Catalogue
- Bildpfade

### Englische Inhalte

Datei:

```text
src/data/content.js
```

Dort liegen viele englische Content-Strukturen:

- Trust Stats
- Core Offers
- Training Topics
- Service Offerings
- Featured Training Topics
- Former Clients
- Testimonials / Proof
- Credentials
- Timeline
- Software Projects
- Blog Posts
- FAQ

### Deutsche Inhalte und Uebersetzungen

Datei:

```text
src/data/localizedContent.js
```

Dort liegen die deutschen Varianten fuer:

- Trainingsthemen
- Service-Angebote
- Zielgruppen
- Trust-Signale
- Timeline
- FAQ
- weitere lokalisierte Inhalte

### UI-Texte, Navigation und feste Labels

Datei:

```text
src/i18n.jsx
```

Dort liegen die festen englischen und deutschen UI-Texte, zum Beispiel:

- Navigation
- Header-Labels
- Button-Texte
- Home-Sektionstitel
- Contact-Texte
- Analytics-Banner
- 404-Seite
- Jump Navigation

## Mehrsprachigkeit

Die Website unterstuetzt Englisch und Deutsch.

- Standardsprache: Englisch
- Umschaltung: Header-Sprachbutton
- Speicherung: `localStorage`
- HTML-Sprache wird dynamisch auf `en` oder `de` gesetzt

Die deutsche Version zeigt deutschsprachige Inhalte und EUR-Preise. Die englische Version zeigt englische Inhalte und gerundete USD-Orientierungswerte.

## Kontakt und Booking

Es gibt bewusst kein Kontaktformular mehr.

Warum:

- Die Seite ist statisch deploybar.
- Es gibt keine SMTP-Abhaengigkeit.
- Es gibt keine `.env`- oder Server-Konfiguration fuer Mailversand.
- Anfragen sollen nicht an Backend-Mailproblemen scheitern.

Kontakt funktioniert ueber:

- Mailto-Link an `info@carinaschoppe.com`
- Telefon Australien: `+61 451 448 724`
- Telefon Deutschland: `+49 175 5738 757`
- Google Calendar Appointment Scheduling Embed
- Google Calendar Appointment Button

Wichtige Datei:

```text
src/pages/ContactPage.jsx
```

## Preise

Die Preis-Seite liegt in:

```text
src/pages/PricingPage.jsx
```

Aktuelle Richtwerte:

- AZAV / bildungsgefoerderte Massnahmen: `50-55 EUR` pro 45-Minuten-Unterrichtseinheit
- Corporate Training: `75-85 EUR` pro 45-Minuten-Unterrichtseinheit
- Vortraege, Keynotes und Expert Sessions: `ab 1.000 EUR` pro 8-Stunden-Tag
- Englische Version: gerundete USD-Werte, z. B. `from $1,200`

Alle Preise sind unverbindliche Orientierungswerte.

## FAQ

Die Homepage enthaelt am unteren Seitenbereich einen FAQ-Block mit den Top-10-Fragen vor einer Buchung.

Die Inhalte liegen hier:

```text
src/data/content.js
src/data/localizedContent.js
```

Der Block wird auf der Homepage in:

```text
src/pages/HomePage.jsx
```

gerendert.

## Blog

Blogdaten liegen in:

```text
src/data/content.js
```

Die Blogseiten sind:

```text
src/pages/BlogPage.jsx
src/pages/BlogPostPage.jsx
```

Ein Blogpost sollte enthalten:

- `slug`
- `title`
- `date`
- `readTime`
- `category`
- `hubCategory`
- `excerpt`
- `content`

Die Bloguebersicht sortiert Posts newest-first und stellt den neuesten Post prominent dar.

## Downloadbare Assets

Die Website enthaelt mehrere Download-/Profil-Assets im `public/` Ordner:

- `lecturer.zip`
- `carina-sophie-schoppe-lecturer-profile.html`
- `carina-sophie-schoppe-training-portfolio.html`
- `carina-sophie-schoppe-ai-it-training-catalogue.html`

Diese Dateien werden beim Build unveraendert in `dist/` kopiert und koennen direkt von der Live-Seite verlinkt werden.

Wenn eines dieser Assets ersetzt wird:

1. Datei im `public/` Ordner ersetzen.
2. Falls der Dateiname gleich bleibt, muss im Code nichts angepasst werden.
3. Falls der Dateiname geaendert wird, Links in `src/data/profile.js` anpassen.
4. `npm run build` ausfuehren.

## Google Analytics

Google Analytics ist in `index.html` eingebunden.

Measurement ID:

```text
G-YNGD292XE5
```

Zusaetzlich gibt es einen Consent-Banner:

```text
src/components/AnalyticsConsent.jsx
```

Der Consent-Banner speichert die Entscheidung im Browser. Analytics wird erst nach Zustimmung aktiv genutzt.

## SEO, Robots und Sitemap

Wichtige Dateien:

```text
index.html
public/robots.txt
public/sitemap.xml
```

`index.html` enthaelt:

- Title
- Meta Description
- Open Graph Tags
- Twitter Card
- Canonical URL
- hreflang-Eintraege
- schema.org Person / ProfessionalService JSON-LD
- Google Tag

`robots.txt` erlaubt Crawling und verweist auf die Sitemap.

`sitemap.xml` listet die wichtigsten Seiten und Blogposts.

## Mobile Rendering

Die Seite wurde bewusst fuer Mobile stabilisiert.

Wichtige Entscheidungen:

- Keine Flip-Effekte bei Client-/Proof-Karten
- Keine Content-Reveal-Lazy-Animationen
- Keine `IntersectionObserver`-basierte Textanzeige
- Mobile: reduzierte teure Blur-/Backdrop-/Hover-Effekte
- Root-Layout nutzt `overflow-x-hidden`, damit vertikaler Inhalt nicht abgeschnitten wird
- Bilder laden eager/sync, aber bleiben als externe Assets separat
- Vite baut CSS und JS in je ein Hauptbundle

Damit soll Chrome Mobile den Text sofort rendern und nicht erst beim Scrollen nachladen oder kurz verschwinden lassen.

## Lokale Entwicklung

Voraussetzung:

```text
Node.js >= 20.19.0
```

Installation:

```bash
npm install
```

Lokaler Dev-Server:

```bash
npm run dev
```

Preview nach Build:

```bash
npm run build
npm run preview
```

## Tests

Tests ausfuehren:

```bash
npm test
```

Die Tests nutzen:

- Vitest
- Testing Library
- jsdom
- Coverage via V8

Coverage wird als Text und JSON erzeugt. HTML-Coverage wurde bewusst deaktiviert, damit IDEs nicht tausende generierte HTML/CSS/JS-Warnungen aus `coverage/` melden.

## Production Build

Build erzeugen:

```bash
npm run build
```

Ergebnis:

```text
dist/
```

Der Build erzeugt:

- eine produktive `index.html`
- eine CSS-Datei
- eine JS-Datei
- kopierte Dateien aus `public/`

## Deployment bei Hostinger

Fuer normales statisches Hosting:

1. Lokal ausfuehren:

   ```bash
   npm install
   npm run build
   ```

2. Den Inhalt von `dist/` hochladen nach:

   ```text
   public_html/
   ```

3. Nicht den Projektordner selbst hochladen, sondern den Inhalt des `dist/` Ordners.

4. Sicherstellen, dass `.htaccess` aus `public/` im Build enthalten ist.

Die `.htaccess` ist wichtig fuer React Router, damit direkte URLs wie `/contact`, `/pricing` oder `/blog/...` auf Hostinger funktionieren.

## Keine Environment-Variablen erforderlich

Aktueller Stand:

- Keine `.env` erforderlich
- Kein SMTP
- Kein Kontaktformular
- Keine API-Keys fuer den Live-Betrieb
- Keine Hostinger Environment Settings notwendig

Die Datei `.env` ist lokal ignoriert und sollte nicht committed werden.

## Git und Ignored Files

Wichtige ignorierte Dateien:

- `node_modules/`
- `dist/`
- `coverage/`
- `.env`
- `.env.*`
- lokale Preview-Logs
- Screenshots
- IDE-Artefakte

Die `.gitignore` ist so ausgelegt, dass keine Secrets, Build-Ausgaben oder lokalen Testartefakte committed werden.

## GitHub Actions

Workflow:

```text
.github/workflows/node.js.yml
```

Der Workflow baut und testet das Projekt in GitHub Actions.

Wichtig: Vite benoetigt Node.js `>=20.19.0`. Wenn GitHub Actions mit Node 18 laeuft, schlaegt der Build fehl. Der Workflow muss deshalb Node 20.19+ oder Node 22 verwenden.

## Wartung

Typische Aenderungen:

### Telefonnummer oder E-Mail aendern

```text
src/data/profile.js
```

### Preise aendern

```text
src/pages/PricingPage.jsx
```

### FAQ aendern

```text
src/data/content.js
src/data/localizedContent.js
```

### Blogpost hinzufuegen

```text
src/data/content.js
```

Danach:

```bash
npm test
npm run build
```

### Trainingsthemen oder Services aendern

```text
src/data/content.js
src/data/localizedContent.js
```

### Navigation aendern

```text
src/data/profile.js
src/i18n.jsx
```

### Farben, Glassmorphism oder Mobile-Verhalten aendern

```text
src/index.css
src/components/Card.jsx
src/components/Button.jsx
```

## Troubleshooting

### Seite zeigt bei Hostinger nur 404 bei direkten Unterseiten

Pruefen:

- Ist `.htaccess` in `dist/` vorhanden?
- Wurde der Inhalt von `dist/` nach `public_html/` hochgeladen?
- Liegt `index.html` direkt in `public_html/`?

### Kontaktformular fehlt

Das ist beabsichtigt.

Die Seite nutzt direkte Kontaktlinks und Google Calendar Booking, damit keine SMTP-/Serverprobleme entstehen.

### Mobile Seite wirkt leer oder laedt beim Scrollen nach

Pruefen:

- Wurde der neueste Build hochgeladen?
- Browser-Cache leeren
- Hostinger Cache leeren
- Auf Chrome Mobile im Inkognito-Modus testen

Die aktuelle Implementierung nutzt keine Flip-Karten, keine Text-Reveal-Lazy-Animationen und keine `IntersectionObserver`-Textlogik.

### Preise stimmen nicht

Datei pruefen:

```text
src/pages/PricingPage.jsx
```

Danach neu bauen und deployen.

### Google Analytics trackt nicht

Pruefen:

- Consent im Banner akzeptiert?
- Measurement ID in `index.html` korrekt?
- Browser blockiert Tracking?
- Google Analytics Realtime View pruefen

## Qualitaetscheck vor Deployment

Vor Upload zu Hostinger:

```bash
npm test
npm run build
```

Optional lokal previewen:

```bash
npm run preview
```

Danach auf Mobile pruefen:

- Startseite
- Contact
- Pricing
- Blog
- Portfolio / Clients
- FAQ unten auf der Homepage

## Lizenz

Die Projektdateien liegen im Repository. Inhalte, Texte, Bilder, Profile und Downloads sind fuer die Website von Carina Sophie Schoppe bestimmt und sollten nicht ohne Freigabe fuer andere Projekte wiederverwendet werden.
