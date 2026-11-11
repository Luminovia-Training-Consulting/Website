import {ArrowUpRight, BookOpen, Compass, Layers3, Play} from "lucide-react";
import {Link} from "react-router-dom";
import trainingTitles from "virtual:training-titles";
import Button from "../components/Button.jsx";
import DemoVideoSection from "../components/DemoVideoSection.jsx";
import HomePracticeExamples from "../components/HomePracticeExamples.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {teachingSubjects} from "../data/trainingSubjectTopics.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/home.css";

const content = {
    de: {
        headline: ["Technik verstehen.", "Selbst anwenden."],
        label: "IT · KI · Wirtschaft",
        intro: "Live-Trainings und Beratung für Teams. Im Kurs grenzen Sie Netzwerkfehler ein, prüfen KI-Ergebnisse oder buchen Geschäftsvorfälle.",
        training: "Trainings entdecken",
        video: "Beispielvideo: KI im Unternehmen",
        subjectsTitle: "Was wir unterrichten",
        subjectsCopy: "Diese Themen unterrichtet Carina in Unternehmen, an Hochschulen und bei Bildungsträgern. Die Kursseiten zeigen Inhalte, Lernziele und mögliche Formate.",
        allCourses: "Alle Kurse und Themen",
        role: "Dozentin · Beraterin · KI-Forscherin",
        languages: "Live auf Deutsch und Englisch",
        audience: "Für Unternehmen, Bildungsanbieter und Hochschulen",
        references: "Referenzen ansehen",
        offers: {
            title: "Unsere Leistungen",
            entries: [
                ["Training & Workshops", "Wählen Sie ein Thema aus dem Katalog oder lassen Sie einen Workshop auf Ihr Team zuschneiden.", "Trainings ansehen"],
                ["Beratung", "Wir klären Ihre Anforderungen und vergleichen passende Optionen für Software, Infrastruktur und KI.", "Beratung ansehen"],
                ["Lernprogramme", "Wir entwickeln Kurse für Bildungsträger, von den Lernzielen bis zu Übungen und Prüfungsaufgaben.", "Formate vergleichen"],
            ],
        },
        topics: {
            title: "Übungen zum Ausprobieren",
            worksheet: "Support-Tickets auswerten",
            output: "Ergebnis mit Beispieldaten",
            count: "Tickets",
            lesson: "Zum Training für Python, SQL und Daten",
            link: "Zum Trainingskatalog",
        },
        aboutTitle: "Das Team hinter Luminovia",
        aboutCopy: `Carina Sophie Schoppe verbindet Lehre, Beratung und KI-Forschung und leitet Luminovia. Im Team arbeitet sie mit ${PROFILE.nenad.name} zusammen, der Erfahrung in Softwareentwicklung und KI-Architektur einbringt.`,
        aboutLink: "Carina kennenlernen",
        teamLink: "Das Team kennenlernen",
        contactTitle: "Ihr Vorhaben besprechen",
        contactCopy: "Im Erstgespräch klären wir, was Ihr Team braucht und welches Format dafür passt.",
    },
    en: {
        headline: ["Understand technology.", "Put it to work."],
        label: "IT · AI · Business",
        intro: "Live training and consulting for teams. In class, you’ll troubleshoot networks, review AI outputs or record business transactions.",
        training: "Explore training",
        video: "Sample video: AI in business",
        subjectsTitle: "What we teach",
        subjectsCopy: "Carina teaches these subjects in businesses, universities and vocational education. Each course page outlines topics, learning goals and available formats.",
        allCourses: "All courses and topics",
        role: "Educator · Consultant · AI Researcher",
        languages: "Live in German and English",
        audience: "For businesses, education providers and universities",
        references: "See our references",
        offers: {
            title: "Our services",
            entries: [
                ["Training & workshops", "Pick a topic from the catalogue or ask us to tailor a workshop for your team.", "Browse training"],
                ["Consulting", "We clarify your requirements and compare options for software, infrastructure and AI.", "Explore consulting"],
                ["Learning programmes", "We develop courses for education providers, from learning objectives to exercises and assessments.", "Compare formats"],
            ],
        },
        topics: {
            title: "Try a training exercise",
            worksheet: "Query support tickets",
            output: "Result using sample data",
            count: "Tickets",
            lesson: "Explore Python, SQL and data training",
            link: "Browse the training catalogue",
        },
        aboutTitle: "The team behind Luminovia",
        aboutCopy: `Carina Sophie Schoppe brings together education, consulting and AI research as the founder of Luminovia. ${PROFILE.nenad.name} works alongside her, bringing experience in software development and AI architecture.`,
        aboutLink: "Meet Carina",
        teamLink: "Meet the team",
        contactTitle: "Let’s discuss your plans",
        contactCopy: "We’ll use the first call to understand what your team needs and find a format that fits.",
    },
};

const services = [
    {to: "/training#details", Icon: BookOpen, colour: "mint"},
    {to: "/consulting", Icon: Compass, colour: "coral"},
    {to: "/offers#packages", Icon: Layers3, colour: "yellow"},
];

export default function HomePage() {
    const {language, t} = useLanguage();
    const copy = content[language];
    const courseTitles = new Map(trainingTitles[language]);

    return (
        <main className="lumo-home">
            <section className="home-hero" aria-labelledby="home-title">
                <Container className="home-hero-grid">
                    <div className="home-hero-copy">
                        <p className="lumo-section-label">{copy.label}</p>
                        <h1 id="home-title">{copy.headline[0]} <span>{copy.headline[1]}</span></h1>
                        <p className="home-lead">{copy.intro}</p>
                        <div className="lumo-action-row">
                            <Button to="/contact#appointment">{t.bookTraining}</Button>
                            <Button to="/training#details" variant="secondary">{copy.training}</Button>
                        </div>
                        <a href="#demo-session" className="lumo-text-link home-video-link"><Play size={17} aria-hidden="true"/>{copy.video}</a>
                    </div>
                    <div className="home-portrait-stage">
                        <figure className="home-portrait" id="founder">
                            <Photo src={IMAGES.homeHero} alt={PROFILE.founder} className="home-portrait-photo" fetchPriority="high" width={860} height={688}
                                sizes="(min-width: 1200px) 410px, (min-width: 850px) 36vw, 86vw"/>
                            <figcaption>
                                <div><strong>{PROFILE.founder}</strong><span>{copy.role}</span></div>
                                <Link to="/about" aria-label={copy.aboutLink}><ArrowUpRight aria-hidden="true" size={21}/></Link>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            <div className="home-context" id="capabilities">
                <Container>
                    <ul>
                        <li>{copy.audience}</li>
                        <li>{copy.languages}</li>
                        <li><Link className="lumo-text-link" to="/clients#organisations">{copy.references}<ArrowUpRight size={16} aria-hidden="true"/></Link></li>
                    </ul>
                </Container>
            </div>

            <section className="home-section" id="routes">
                <Container>
                    <h2 className="home-section-heading">{copy.offers.title}</h2>
                    <div className="home-service-grid">
                        {services.map(({to, Icon, colour}, index) => {
                            const [title, description, action] = copy.offers.entries[index];
                            return (
                                <article key={to} className="home-service" data-colour={colour}>
                                    <h3><Icon size={24} strokeWidth={1.5} aria-hidden="true"/><span>{title}</span></h3>
                                    <p>{description}</p>
                                    <Link to={to}>{action}<ArrowUpRight size={20} aria-hidden="true"/></Link>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="home-section home-subjects" id="teaching-topics" aria-labelledby="home-subjects-heading">
                <Container>
                    <div className="home-subjects-intro">
                        <div>
                            <h2 id="home-subjects-heading">{copy.subjectsTitle}</h2>
                            <p>{copy.subjectsCopy}</p>
                        </div>
                        <Link className="lumo-text-link" to="/training#details">{copy.allCourses}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                    </div>
                    <ul className="home-subject-list" role="list">
                        {teachingSubjects.map((subject) => (
                            <li key={subject.id}>
                                <h3>{subject[language].title}</h3>
                                <p>{subject[language].topics}</p>
                                <ul className="home-subject-courses" role="list">
                                    {subject.courses.map((slug) => (
                                        <li key={slug}>
                                            <Link to={"/training/" + slug}>{courseTitles.get(slug)}<ArrowUpRight size={16} aria-hidden="true"/></Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <DemoVideoSection variant="home" className="home-demo"/>

            <section className="home-section home-topics" id="offers" aria-labelledby="home-practice-heading">
                <Container className="home-topics-grid">
                    <h2 id="home-practice-heading">{copy.topics.title}</h2>
                    <HomePracticeExamples sqlCopy={copy.topics} sqlTrainingPath="/training/python-sql-data-skills"/>
                    <Link className="lumo-text-link home-topics-link" to="/training#details">
                        {copy.topics.link}<ArrowUpRight size={18} aria-hidden="true"/>
                    </Link>
                </Container>
            </section>

            <section className="home-section" id="process">
                <Container className="home-about">
                    <div>
                        <h2>{copy.aboutTitle}</h2>
                        <p className="home-about-copy">{copy.aboutCopy}</p>
                        <Link className="lumo-text-link home-team-link" to="/about#team">{copy.teamLink}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                    </div>
                    <section className="home-next-step" aria-labelledby="home-contact-heading">
                        <h2 id="home-contact-heading">{copy.contactTitle}</h2>
                        <p>{copy.contactCopy}</p>
                        <Button to="/contact#appointment">{t.bookTraining}</Button>
                    </section>
                </Container>
            </section>
        </main>
    );
}
