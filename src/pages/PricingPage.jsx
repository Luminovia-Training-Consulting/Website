import { PROFILE } from "../data/profile.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

const content = {
  en: {
    badge: "Pricing",
    title: "Transparent orientation rates for training, teaching and talks.",
    intro: "The rates below are planning ranges for professional education, corporate training and speaking engagements. Final pricing depends on audience, preparation effort, duration, materials, delivery format and booking scope.",
    currencyNote: "English prices are shown in rounded USD planning figures, based on an approximate EUR/USD rate of 1.17. EUR invoices or local tax handling can be discussed individually.",
    unit: "Teaching unit",
    cards: [
      {
        title: "Publicly funded education / AZAV-style programmes",
        price: "$60-65",
        suffix: "per 45-minute teaching unit",
        copy: "For German education-sector programmes, funded training contexts, retraining cohorts and structured vocational education delivery.",
        details: ["Remote live teaching", "Professional education and retraining", "Suitable for longer course blocks", "Final rate depends on scope and preparation"],
      },
      {
        title: "Corporate and company training",
        price: "$90-100",
        suffix: "per 45-minute teaching unit",
        copy: "For companies, teams, universities, training providers and organisations booking practical AI, IT, cybersecurity or digital business training.",
        details: ["Approx. $120 per hour as orientation", "Workshops, live training or course modules", "German or English delivery", "Custom materials can be quoted separately"],
      },
      {
        title: "Talks, keynotes and expert sessions",
        price: "from $1,800",
        suffix: "per 8-hour day",
        copy: "For individual talks, conferences, expert sessions, leadership briefings or special event formats. Pricing depends strongly on audience, topic, preparation and travel or time-zone requirements.",
        details: ["Individual quote recommended", "Short impulse talks or full-day formats", "AI, governance, cybersecurity, education or digital transformation", "Remote-first delivery from Brisbane"],
      },
    ],
    customTitle: "Need something outside these ranges?",
    customCopy: "For curriculum design, multi-week delivery, blended learning, advisory work, bundled training programmes or special event formats, please request an individual quote.",
    contact: "Request pricing",
    appointment: "Book a pricing call",
    footnote: "All prices are indicative planning values, not binding offers. Travel, special preparation, licensing, materials, VAT/tax handling or third-party platform requirements may affect the final quote.",
  },
  de: {
    badge: "Preise",
    title: "Transparente Richtwerte fuer Trainings, Lehre und Vortraege.",
    intro: "Die folgenden Preise sind Orientierungswerte fuer Bildungsbereich, Corporate Training und Vortraege. Die finale Kalkulation haengt von Zielgruppe, Vorbereitung, Dauer, Materialien, Format und Umfang der Buchung ab.",
    currencyNote: "Die deutsche Version zeigt EUR-Richtwerte. Bei internationalen Buchungen koennen Waehrung, Rechnungsstellung und steuerliche Anforderungen individuell geklaert werden.",
    unit: "Unterrichtseinheit",
    cards: [
      {
        title: "Bildungsbereich / AZAV-gefoerderte Massnahmen",
        price: "50-55 EUR",
        suffix: "pro 45-Minuten-Unterrichtseinheit",
        copy: "Fuer bildungsgefoerderte Massnahmen, Umschulungen, Weiterbildungen und strukturierte Kursdurchfuehrung im deutschen Bildungsbereich.",
        details: ["Remote-Live-Unterricht", "Berufliche Bildung und Umschulung", "Geeignet fuer laengere Kursbloecke", "Finaler Satz je nach Umfang und Vorbereitung"],
      },
      {
        title: "Corporate- und Firmentraining",
        price: "75-85 EUR",
        suffix: "pro 45-Minuten-Unterrichtseinheit",
        copy: "Fuer Unternehmen, Teams, Hochschulen, Bildungsanbieter und Organisationen, die praxisnahes AI-, IT-, Cybersecurity- oder Digital-Business-Training buchen.",
        details: ["Ca. 100 EUR pro Stunde als Orientierung", "Workshops, Live-Training oder Kursmodule", "Durchfuehrung auf Deutsch oder Englisch", "Individuelle Materialien separat kalkulierbar"],
      },
      {
        title: "Vortraege, Keynotes und Expert Sessions",
        price: "ab 1.500 EUR",
        suffix: "pro 8-Stunden-Tag",
        copy: "Fuer einzelne Vortraege, Konferenzen, Expert Sessions, Leadership Briefings oder besondere Veranstaltungsformate. Der Preis haengt stark von Audience, Gruppe, Thema und Vorbereitung ab.",
        details: ["Individuelles Angebot empfohlen", "Impulsvortrag oder Tagesformat", "AI, Governance, Cybersecurity, Bildung oder digitale Transformation", "Remote-first aus Brisbane"],
      },
    ],
    customTitle: "Andere Situation oder groesserer Umfang?",
    customCopy: "Fuer Curriculum Design, mehrwoechige Durchfuehrung, Blended Learning, Beratung, Paketbuchungen oder besondere Eventformate bitte ein individuelles Angebot anfragen.",
    contact: "Preise anfragen",
    appointment: "Preisgespraech buchen",
    footnote: "Alle Preise sind unverbindliche Richtwerte und keine bindenden Angebote. Reiseaufwand, besondere Vorbereitung, Lizenzen, Materialien, Umsatzsteuer-/Steuerfragen oder Plattformanforderungen koennen das finale Angebot beeinflussen.",
  },
};

export default function PricingPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge>{copy.badge}</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
            <p className="mt-5 rounded-[1.5rem] border border-sky-100/16 bg-sky-100/[0.07] p-4 text-sm leading-7 text-slate-300">{copy.currencyNote}</p>
          </div>
        </div>

        <section className="mt-14 grid gap-5 lg:grid-cols-3">
          {copy.cards.map((item) => (
            <Card key={item.title} className="self-start">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{copy.unit}</div>
              <h2 className="mt-4 text-2xl font-black text-white">{item.title}</h2>
              <div className="mt-6 rounded-[1.4rem] border border-white/12 bg-white/[0.08] p-4">
                <div className="text-4xl font-black tracking-[-0.04em] text-white">{item.price}</div>
                <div className="mt-2 text-sm font-bold text-slate-300">{item.suffix}</div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{item.copy}</p>
              <div className="mt-5 grid gap-2">
                {item.details.map((detail) => (
                  <span key={detail} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{detail}</span>
                ))}
              </div>
            </Card>
          ))}
        </section>

        <section className="mt-14 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_18%_0%,rgba(186,230,253,.16),transparent_42%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045))] p-6 shadow-[0_28px_105px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white">{copy.customTitle}</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">{copy.customCopy}</p>
              <p className="mt-4 max-w-4xl text-xs leading-6 text-slate-400">{copy.footnote}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button to="/contact#contact-options">{copy.contact}</Button>
              <Button href={PROFILE.appointmentSchedule} variant="secondary">{copy.appointment}</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
