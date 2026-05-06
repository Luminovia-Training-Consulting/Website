import {IMAGES} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        badge: "Keynotes & expert talks",
        title: "Keynotes and expert talks that turn digital change into clear decisions.",
        intro: "For conferences, internal learning days, education programmes and leadership sessions that need orientation on AI, cybersecurity, digital transformation or future skills. Talks are structured around practical examples, risk awareness and concrete next steps for the audience.",
        request: "Request speaker availability",
        proof: "View proof",
        topic: "Talk topic",
        talks: [
            ["AI in the workplace", "What generative AI changes, what it does not change, and how teams can use it responsibly."],
            ["Responsible AI without theatre", "Practical governance, accountability and risk awareness for real organisations."],
            ["Cybersecurity for everyday work", "Security awareness that goes beyond fear and turns into concrete daily habits."],
            ["Future skills in business IT", "How AI, data, automation and digital tools reshape professional competence."],
            ["Prompt engineering for professionals", "How to communicate with AI systems in a structured, high-quality and repeatable way."],
            ["Digital education that works", "How to design adult learning formats that are practical, engaging and outcome-focused."],
        ],
    },
    de: {
        badge: "Keynotes & Fachvorträge",
        title: "Keynotes und Fachvorträge, die digitalen Wandel greifbar machen.",
        intro: "Für Konferenzen, interne Lerntage, Bildungsprogramme und Leadership-Sessions, die Orientierung zu AI, Cybersecurity, digitaler Transformation oder Zukunftskompetenzen brauchen. Die Vorträge arbeiten mit Praxisbeispielen, Risikobewusstsein und konkreten nächsten Schritten für das Publikum.",
        request: "Vortragsverfügbarkeit anfragen",
        proof: "Nachweise ansehen",
        topic: "Vortragsthema",
        talks: [
            ["AI im Arbeitsalltag", "Was generative AI verändert, was nicht, und wie Teams sie verantwortungsvoll einsetzen können."],
            ["Responsible AI ohne Theater", "Praktische Governance, Verantwortlichkeit und Risikobewusstsein für echte Organisationen."],
            ["Cybersecurity im Alltag", "Security Awareness, die über Angst hinausgeht und in konkrete Arbeitsgewohnheiten übersetzt wird."],
            ["Zukunftskompetenzen in Business-IT", "Wie AI, Daten, Automatisierung und digitale Tools berufliche Kompetenz verändern."],
            ["Prompt Engineering für Fach- und Führungskräfte", "Wie man mit AI-Systemen strukturiert, hochwertig und wiederholbar kommuniziert."],
            ["Digitale Bildung, die funktioniert", "Wie Erwachsenenbildung praktisch, aktivierend und ergebnisorientiert gestaltet wird."],
        ],
    },
};

export default function KeynotesPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge>{c.badge}</Badge>
                <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{c.title}</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">{c.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button to="/contact#contact-options">{c.request}</Button>
                            <Button to="/credentials" variant="secondary">{c.proof}</Button>
                        </div>
                    </div>
                    <Photo src={IMAGES.headshot} alt="Headshot of Carina Sophie Schoppe for AI and IT keynote talks" className="aspect-[4/5] rounded-2xl" imgClass="object-[50%_18%]"/>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {c.talks.map(([title, text]) => (
                        <Card key={title}>
                            <Badge tone="white">{c.topic}</Badge>
                            <h2 className="mt-5 text-2xl font-black text-white">{title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
