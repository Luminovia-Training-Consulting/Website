import {ArrowUpRight, BookOpenCheck, CalendarDays, MessagesSquare, UsersRound} from "lucide-react";
import Button from "../components/Button.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/business.css";
import "../styles/platform.css";

const copy = {
    en: {
        label: "Luminovia Management Tool",
        title: "One workspace for learning operations.",
        intro: "A bilingual management platform designed to bring course delivery, teaching teams and day-to-day coordination together for education providers and organisations.",
        open: "Open the LMS",
        contact: "Request an offer",
        github: "View the project on GitHub",
        howTitle: "What teams can coordinate",
        howIntro: "Keep the people, schedules and learning work around a course connected in one place.",
        features: [
            ["Courses and learning resources", "Organise course templates, scheduled sessions, materials and practical learning resources."],
            ["Teaching offers and assignments", "Publish teaching opportunities, match expertise and availability, and coordinate accepted work."],
            ["Calendars and collaboration", "Bring together work calendars, course communication, files and shared knowledge."],
            ["Provider and client workflows", "Coordinate course requests and delivery with education partners and client organisations."],
        ],
        builtFor: "Example: planning a new course intake",
        builtCopy: "An education provider reuses a course template, schedules the new group and publishes a teaching assignment. Once an instructor accepts, the organiser and instructor can coordinate dates and share materials for that course.",
        partnerTitle: "Bring the LMS to your organisation",
        partnerCopy: "Tell us which courses you run, who needs access and what you want to make easier. We’ll discuss the scope and prepare an offer.",
    },
    de: {
        label: "Luminovia Management Tool",
        title: "Lernangebote an einem Ort koordinieren.",
        intro: "Eine zweisprachige Managementplattform, die Kursdurchführung, Lehrteams und tägliche Abstimmung für Bildungsanbieter und Organisationen zusammenführt.",
        open: "LMS öffnen",
        contact: "Angebot anfragen",
        github: "Projekt auf GitHub ansehen",
        howTitle: "Was Teams damit koordinieren können",
        howIntro: "Menschen, Termine und Lernarbeit rund um einen Kurs bleiben miteinander verbunden.",
        features: [
            ["Kurse und Lernmaterialien", "Kursvorlagen, geplante Termine, Unterlagen und praktische Lernressourcen organisieren."],
            ["Lehraufträge und Einsätze", "Lehraufträge veröffentlichen, Fachgebiete und Verfügbarkeit zusammenbringen und übernommene Einsätze koordinieren."],
            ["Kalender und Zusammenarbeit", "Arbeitskalender, Kurskommunikation, Dateien und gemeinsames Wissen verbinden."],
            ["Abläufe mit Bildungsanbietern", "Kursanfragen und Kursdurchführung mit Bildungspartnern und Kundenorganisationen abstimmen."],
        ],
        builtFor: "Beispiel: einen neuen Kursdurchlauf planen",
        builtCopy: "Ein Bildungsanbieter nutzt eine bestehende Kursvorlage, plant die Termine für die neue Gruppe und veröffentlicht einen Lehrauftrag. Nach der Zusage stimmen Kursorganisation und Lehrkraft Termine ab und teilen die dazugehörigen Materialien.",
        partnerTitle: "Das LMS für Ihre Organisation",
        partnerCopy: "Erzählen Sie uns, welche Kurse Sie anbieten, wer Zugang braucht und welche Abläufe Sie vereinfachen möchten. Wir stimmen den Umfang ab und erstellen ein Angebot.",
    },
};

const icons = [BookOpenCheck, UsersRound, CalendarDays, MessagesSquare];
const platformEnquiryPath = "/contact?intent=platform#enquiry";

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
                        <Button to={platformEnquiryPath}>{c.contact}</Button>
                        <Button href={PROFILE.learningPlatform} variant="secondary">{c.open}</Button>
                    </>
                )}
                visual={(
                    <div className="platform-operation">
                        <h2>{c.builtFor}</h2>
                        <p>{c.builtCopy}</p>
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

                <section className="platform-partners" aria-labelledby="platform-partners-title">
                    <div><p className="business-kicker">{language === "de" ? "Für Bildungspartner und Unternehmen" : "For education partners and organisations"}</p>
                        <h2 id="platform-partners-title">{c.partnerTitle}</h2><p>{c.partnerCopy}</p></div>
                    <div className="platform-partner-actions">
                        <Button to={platformEnquiryPath}>{c.contact}</Button>
                        <a href={PROFILE.managementTool} target="_blank" rel="noreferrer" className="lumo-text-link">
                            {c.github}<ArrowUpRight size={18} aria-hidden="true"/>
                        </a>
                    </div>
                </section>
            </Container>
        </main>
    );
}
