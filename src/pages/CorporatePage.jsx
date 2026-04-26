import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

const copy = {
  en: {
    badge: "For organisations",
    title: "Training solutions for companies, education providers and events.",
    intro: "Book me when your audience needs digital skills explained clearly and practised properly, from AI literacy to cybersecurity, programming and business IT.",
    process: [
      ["01", "Clarify", "Target group, level, goals, timeframe and desired learning outcome."],
      ["02", "Design", "Course structure, exercises, examples, materials and transfer logic."],
      ["03", "Deliver", "Live online training, workshop, lecture, keynote or multi-week course."],
      ["04", "Transfer", "Recap, templates, handouts, exercises and practical next steps."],
    ],
    ctaTitle: "Need a reliable lecturer or speaker?",
    ctaCopy: "Send the topic, audience, format and date range. I will suggest a suitable training setup.",
    cta: "Request availability",
  },
  de: {
    badge: "Für Organisationen",
    title: "Trainingslösungen für Unternehmen, Bildungsanbieter und Events.",
    intro: "Buchen Sie mich, wenn Ihr Publikum digitale Themen klar erklärt und praktisch geübt braucht, von AI Literacy über Cybersecurity bis Programmierung und Business IT.",
    process: [
      ["01", "Klären", "Zielgruppe, Level, Ziele, Zeitraum und gewünschtes Lernergebnis."],
      ["02", "Konzipieren", "Kursstruktur, Übungen, Beispiele, Materialien und Transferlogik."],
      ["03", "Durchführen", "Live-Online-Training, Workshop, Vorlesung, Keynote oder mehrwöchiger Kurs."],
      ["04", "Transfer sichern", "Recap, Templates, Handouts, Übungen und konkrete nächste Schritte."],
    ],
    ctaTitle: "Brauchen Sie eine verlässliche Dozentin oder Speakerin?",
    ctaCopy: "Senden Sie Thema, Zielgruppe, Format und Zeitraum. Ich schlage ein passendes Trainingssetup vor.",
    cta: "Verfügbarkeit anfragen",
  },
};

export default function CorporatePage() {
  const { language } = useLanguage();
  const { audienceCards } = useSiteContent();
  const c = copy[language];

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>{c.badge}</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{c.title}</h1>
          <p className="text-lg leading-8 text-slate-300">{c.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {audienceCards.map((audience) => (
            <Card key={audience.title}>
              <h2 className="text-2xl font-black text-white">{audience.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{audience.copy}</p>
              <div className="mt-5 space-y-2">
                {audience.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200">{bullet}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {c.process.map(([step, title, text]) => (
            <Card key={step}>
              <div className="text-5xl font-black text-white/10">{step}</div>
              <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-sky-200/20 bg-sky-200/10 p-6 shadow-2xl shadow-black/25 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white">{c.ctaTitle}</h2>
              <p className="mt-3 max-w-3xl text-slate-300">{c.ctaCopy}</p>
            </div>
            <Button to="/contact#contact-options">{c.cta}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
