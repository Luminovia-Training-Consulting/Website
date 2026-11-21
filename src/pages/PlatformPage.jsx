import {ArrowUpRight, BookOpenCheck, CalendarDays, MessagesSquare, ShieldCheck, UsersRound} from "lucide-react";
import Button from "../components/Button.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/platform.css";

const copy = {
    en: {
        label: "Luminovia Management Tool",
        title: "One workspace for learning operations.",
        intro: "A bilingual management platform designed to bring course delivery, teaching teams and day-to-day coordination together for education providers and organisations.",
        status: "Interactive preview available · product access by invitation",
        demo: "Explore the interactive demo",
        contact: "Discuss a pilot or partnership",
        github: "Platform overview on GitHub",
        howTitle: "What teams can coordinate",
        howIntro: "Keep the people, schedules and learning work around a course connected in one place.",
        features: [
            ["Courses and learning resources", "Organise course templates, scheduled sessions, materials and practical learning resources."],
            ["Teaching offers and assignments", "Publish teaching opportunities, match expertise and availability, and coordinate accepted work."],
            ["Calendars and collaboration", "Bring together work calendars, course communication, files and shared knowledge."],
            ["Provider and client workflows", "Coordinate course requests and delivery with education partners and client organisations."],
        ],
        builtFor: "Designed for real education workflows",
        builtCopy: "The platform brings together the operational side of delivering courses: planning, people, schedules, materials and communication. German and English interfaces support international teams.",
        privacy: "The public demo uses fictional sample data. The working portal is invitation-only; a pilot or organisational setup is discussed directly with Luminovia.",
        partnerTitle: "Build a better learning operation together.",
        partnerCopy: "We are looking for education providers and organisations interested in shaping practical digital workflows for teaching and learning. Tell us how your courses, people and processes work today.",
        demoNote: "No account is needed for the fictional-data demo.",
    },
    de: {
        label: "Luminovia Management Tool",
        title: "Lernangebote an einem Ort koordinieren.",
        intro: "Eine zweisprachige Managementplattform, die Kursdurchführung, Lehrteams und tägliche Abstimmung für Bildungsanbieter und Organisationen zusammenführt.",
        status: "Interaktive Vorschau verfügbar · Zugang zum Portal auf Einladung",
        demo: "Interaktive Demo ansehen",
        contact: "Pilot oder Zusammenarbeit besprechen",
        github: "Plattformübersicht auf GitHub",
        howTitle: "Was Teams damit koordinieren können",
        howIntro: "Menschen, Termine und Lernarbeit rund um einen Kurs bleiben miteinander verbunden.",
        features: [
            ["Kurse und Lernmaterialien", "Kursvorlagen, geplante Termine, Unterlagen und praktische Lernressourcen organisieren."],
            ["Lehraufträge und Einsätze", "Lehraufträge veröffentlichen, Fachgebiete und Verfügbarkeit zusammenbringen und übernommene Einsätze koordinieren."],
            ["Kalender und Zusammenarbeit", "Arbeitskalender, Kurskommunikation, Dateien und gemeinsames Wissen verbinden."],
            ["Abläufe mit Bildungsanbietern", "Kursanfragen und Kursdurchführung mit Bildungspartnern und Kundenorganisationen abstimmen."],
        ],
        builtFor: "Für echte Abläufe in der Bildung entwickelt",
        builtCopy: "Die Plattform bündelt organisatorische Aufgaben der Kursdurchführung: Planung, Menschen, Termine, Materialien und Kommunikation. Oberflächen auf Deutsch und Englisch unterstützen internationale Teams.",
        privacy: "Die öffentliche Demo nutzt ausschließlich fiktive Beispieldaten. Das Arbeitsportal ist zugangsbeschränkt; Pilotprojekte und die Einrichtung für Organisationen besprechen wir direkt mit Luminovia.",
        partnerTitle: "Gemeinsam bessere Lernabläufe gestalten.",
        partnerCopy: "Wir suchen Bildungsanbieter und Organisationen, die praxistaugliche digitale Abläufe für Lehre und Lernen mitgestalten möchten. Erzählen Sie uns, wie Ihre Kurse, Teams und Prozesse heute organisiert sind.",
        demoNote: "Für die Demo mit fiktiven Beispieldaten ist kein Konto nötig.",
    },
};

const icons = [BookOpenCheck, UsersRound, CalendarDays, MessagesSquare];

export default function PlatformPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="business-page platform-page" data-business-section="platform">
            <PageHero
                label={c.label}
                title={c.title}
                copy={c.intro}
                actions={(
                    <>
                        <a className="lumo-button" href={PROFILE.portalDemo} target="_blank" rel="noreferrer">
                            <span>{c.demo}</span><ArrowUpRight size={18} aria-hidden="true"/>
                        </a>
                        <Button to="/contact#appointment" variant="secondary">{c.contact}</Button>
                    </>
                )}
                visual={(
                    <div className="platform-preview-card">
                        <p className="business-kicker"><ShieldCheck size={17} aria-hidden="true"/>{c.status}</p>
                        <div className="platform-preview-steps" aria-hidden="true">
                            <span><BookOpenCheck/></span><i/><span><UsersRound/></span><i/><span><CalendarDays/></span>
                        </div>
                        <a href={PROFILE.managementTool} target="_blank" rel="noreferrer" className="people-text-link">
                            {c.github}<ArrowUpRight aria-hidden="true"/>
                        </a>
                    </div>
                )}
            />

            <Container className="platform-body">
                <section className="platform-features" aria-labelledby="platform-features-title">
                    <div className="business-heading">
                        <h2 id="platform-features-title">{c.howTitle}</h2>
                        <p>{c.howIntro}</p>
                    </div>
                    <div className="platform-feature-grid">
                        {c.features.map(([title, description], index) => {
                            const Icon = icons[index];
                            return (
                                <article key={title} className="platform-feature">
                                    <span><Icon aria-hidden="true"/></span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="platform-operation" aria-labelledby="platform-operation-title">
                    <div><h2 id="platform-operation-title">{c.builtFor}</h2><p>{c.builtCopy}</p></div>
                    <p className="platform-note">{c.privacy}</p>
                </section>

                <section className="platform-partners" aria-labelledby="platform-partners-title">
                    <div><p className="business-kicker">{language === "de" ? "Für Bildungspartner und Unternehmen" : "For education partners and organisations"}</p>
                        <h2 id="platform-partners-title">{c.partnerTitle}</h2><p>{c.partnerCopy}</p></div>
                    <div className="platform-partner-actions">
                        <Button to="/contact#appointment">{c.contact}</Button>
                        <p>{c.demoNote}</p>
                    </div>
                </section>
            </Container>
        </main>
    );
}
