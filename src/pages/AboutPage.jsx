import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        badge: "Company",
        title: "Luminovia Training & Consulting is built for practical digital capability.",
        intro: "Luminovia is a remote-first training and consulting company for organisations that need AI, IT, cybersecurity, software, data and business technology translated into usable capability.",
        follow: "The company is led by CEO and founder Carina Sophie Schoppe. Her background in business computer science, AI, cybersecurity, software development, didactics and consulting shapes Luminovia's professional delivery model.",
        linkedin: "View LinkedIn",
        github: "View GitHub",
        timeline: "Company background",
        cards: [
            ["Didactic", "Complex topics are translated into structured, learner-friendly formats with exercises and transfer logic."],
            ["Technical", "AI, software, cybersecurity, data and business IT are taught through systems, workflows and examples that connect concepts with implementation reality."],
            ["Professional", "Remote-first, bilingual and built for adult learners, corporate teams and education providers."],
        ],
        links: [
            ["Company background", "A compact timeline behind Luminovia's leadership, academic profile, training practice and international delivery model.", "/my-way"],
            ["Skills", "A skill map for AI, software development, cybersecurity, business IT, teaching design and communication.", "/skills"],
            ["Blog", "Long-form articles on AI governance, digital education, automation risk, project work and responsible technology adoption.", "/blog"],
        ],
        timelineTitle: "Company and leadership background",
    },
    de: {
        badge: "Unternehmen",
        title: "Luminovia Training & Consulting steht für praktische digitale Kompetenz.",
        intro: "Luminovia ist ein remote-first Trainings- und Consulting-Unternehmen für Organisationen, die AI, IT, Cybersecurity, Software, Daten und Business Technology in nutzbare Kompetenz übersetzen wollen.",
        follow: "Das Unternehmen wird von CEO und Gründerin Carina Sophie Schoppe geführt. Ihr Hintergrund in Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung, Didaktik und Consulting prägt das professionelle Liefermodell von Luminovia.",
        linkedin: "LinkedIn ansehen",
        github: "GitHub ansehen",
        timeline: "Unternehmenshintergrund",
        cards: [
            ["Didaktisch", "Komplexe Themen werden in strukturierte, lernfreundliche Formate mit Übungen und Transferlogik übersetzt."],
            ["Technisch", "AI, Software, Cybersecurity, Daten und Business-IT werden über Systeme, Arbeitsabläufe und Beispiele vermittelt, die Konzepte mit Umsetzungspraxis verbinden."],
            ["Professionell", "Remote-first, zweisprachig und ausgelegt auf Erwachsenenbildung, Unternehmensteams und Bildungsanbieter."],
        ],
        links: [
            ["Unternehmenshintergrund", "Eine kompakte Timeline hinter Luminovias Führung, akademischem Profil, Trainingspraxis und internationalem Liefermodell.", "/my-way"],
            ["Kompetenzen", "Eine Kompetenzübersicht für AI, Softwareentwicklung, Cybersecurity, Business-IT, Didaktik und Kommunikation.", "/skills"],
            ["Blog", "Ausführliche Beiträge zu AI Governance, digitaler Bildung, Automationsrisiken, Projektarbeit und verantwortungsvoller Technologieeinführung.", "/blog"],
        ],
        timelineTitle: "Unternehmens- und Führungshintergrund",
    },
};

export default function AboutPage() {
    const {language, t} = useLanguage();
    const {timeline} = useSiteContent();
    const c = copy[language];

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="rose">{c.badge}</Badge>
                <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{c.title}</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">{c.intro}</p>
                        <p className="mt-5 text-lg leading-8 text-slate-300">{c.follow}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button href={PROFILE.linkedin}>{c.linkedin}</Button>
                            <Button href={PROFILE.github} variant="secondary">{c.github}</Button>
                            <Button to="/my-way" variant="secondary">{c.timeline}</Button>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Photo src={IMAGES.headshot} alt="Leadership portrait for Luminovia Training & Consulting" className="aspect-[3/4] rounded-2xl" imgClass="object-[50%_20%]"/>
                        <div className="grid gap-4">
                            {c.cards.map(([title, text]) => (
                                <Card key={title}>
                                    <h2 className="text-xl font-black text-white">{title}</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {c.links.map(([title, text, to]) => (
                        <Card key={title}>
                            <h2 className="text-2xl font-black text-white">{title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
                            <div className="mt-6">
                                <Button to={to} variant="secondary">{t.open}</Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-black text-white">{c.timelineTitle}</h2>
                    <div className="mt-6 grid gap-4 lg:grid-cols-5">
                        {timeline.map((item) => (
                            <Card key={item.year}>
                                <div className="text-sm font-black text-sky-100">{item.year}</div>
                                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
