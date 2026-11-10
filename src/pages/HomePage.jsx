import {ArrowDownRight, ArrowUpRight, BookOpen, Compass, Layers3} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";
import HomePractice from "../components/HomePractice.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/home.css";

const content = {
    de: {
        headline: ["Technik verstehen.", "Selbst anwenden."],
        label: "Training & Beratung",
        intro: "Live-Trainings und Beratung zu KI, IT und Cybersecurity. Wir arbeiten mit Beispielen aus Ihrem Alltag, damit Ihr Team das Gelernte im nächsten Projekt einsetzen kann.",
        training: "Trainings entdecken",
        role: "Gründerin · Trainerin · Beraterin",
        location: "Aus Brisbane für internationale Teams",
        languages: "Live auf Deutsch und Englisch",
        audience: "Für Unternehmen, Bildungsanbieter und Hochschulen",
        offers: {
            label: "Angebot",
            title: "Was möchten Sie angehen?",
            example: "Ein mögliches Ergebnis",
            entries: [
                ["Training & Workshops", "Üben Sie mit Ihrem Team, KI-Antworten zu prüfen, Daten mit Python und SQL auszuwerten oder Sicherheitsrisiken zu erkennen.", "Ein Team kann KI-Entwürfe nach gemeinsamen Kriterien prüfen.", "Trainings ansehen"],
                ["Beratung", "Klären Sie, welche KI-Anwendungen sich für Ihre Abläufe eignen, welche Risiken Sie berücksichtigen und wo Sie mit der Umsetzung anfangen.", "Ein KI-Pilot mit klaren Prüfkriterien und Zuständigkeiten.", "Beratung entdecken"],
                ["Lernprogramme", "Entwickeln Sie einen Kurs oder Lernpfad mit Lernzielen, Übungen und Aufgaben, an denen sich der Fortschritt erkennen lässt.", "Ein Modulplan mit Übungen und passenden Lernchecks.", "Formate ansehen"],
            ],
        },
        topics: {
            label: "Ein Blick ins Training",
            title: "Vom Support-Ticket zur Auswertung",
            intro: "Welches Team hat die meisten offenen Tickets? Welches hat die meisten geschlossenen? Wechseln Sie den Status und sehen Sie, wie die SQL-Abfrage und das Ergebnis darauf reagieren.",
            worksheet: "Beispielübung",
            output: "Ergebnis mit Beispieldaten",
            count: "Tickets",
            lesson: "Zum Training für Python, SQL und Daten",
            link: "Zum Trainingskatalog",
            entries: [
                ["KI & GenAI", "Einen Arbeitsablauf auswählen und KI-Ergebnisse an fachlichen Kriterien prüfen."],
                ["Cybersecurity", "Sicherheitslücken in einer geschützten Übungsumgebung nachvollziehen."],
                ["Python, SQL & Daten", "Daten abfragen, aufbereiten und auswerten."],
            ],
        },
        aboutLabel: "Über Luminovia",
        aboutTitle: "Wer hinter Luminovia steht",
        aboutCopy: `Carina Sophie Schoppe leitet Luminovia und entwickelt Trainings für Unternehmen, Hochschulen und Bildungsanbieter. Der Softwareentwickler und KI-Architekt ${PROFILE.nenad.name} arbeitet mit ihr im Team.`,
        aboutLink: "Carina kennenlernen",
        teamLink: "Das Team kennenlernen",
        workLink: "Lehr- und Projekterfahrung",
        notesTitle: "So entsteht ein Training",
        notes: [
            ["Aufgabe auswählen", "Eine Aufgabe aus Ihrem Alltag gibt der Übung ein konkretes Ziel."],
            ["Im Kurs ausprobieren", "Die Gruppe bearbeitet die Aufgabe und bespricht, woran sie ein gutes Ergebnis erkennt."],
            ["Für später festhalten", "Eine Vorlage, Checkliste oder Übungsdatei hilft beim nächsten Versuch im eigenen Team."],
        ],
        contactTitle: "Was soll Ihr Team danach können?",
        contactCopy: "Schreiben Sie uns kurz, für wen Sie planen und was sich im Arbeitsalltag ändern soll. Das passende Format besprechen wir gemeinsam.",
        contactLink: "Kontakt aufnehmen",
    },
    en: {
        headline: ["Understand technology.", "Put it to work."],
        label: "Training & consulting",
        intro: "Live training and consulting in AI, IT and cybersecurity. We use examples from your work so your team can apply what it learns on the next project.",
        training: "Explore training",
        role: "Founder · Trainer · Consultant",
        location: "Based in Brisbane, working with teams worldwide",
        languages: "Live in German and English",
        audience: "For businesses, education providers and universities",
        offers: {
            label: "Services",
            title: "What would you like to tackle?",
            example: "An example outcome",
            entries: [
                ["Training & workshops", "Give your team practice checking AI responses, analysing data with Python and SQL, or recognising security risks.", "A team can review AI drafts against a shared checklist.", "Browse training"],
                ["Consulting", "Identify where AI fits into your workflows, what risks to consider and where to begin implementation.", "An AI pilot with clear review criteria and owners.", "Explore consulting"],
                ["Learning programmes", "Design a course or learning path with clear objectives, practical exercises and tasks that show learners’ progress.", "A course outline with exercises and ways to check progress.", "Explore formats"],
            ],
        },
        topics: {
            label: "Inside the training",
            title: "From support tickets to a clear picture",
            intro: "Which team has the most open tickets? Which has the most closed tickets? Switch the status to see how the SQL query and the result change.",
            worksheet: "Sample exercise",
            output: "Result using sample data",
            count: "Tickets",
            lesson: "Explore Python, SQL and data training",
            link: "Browse the training catalogue",
            entries: [
                ["AI & GenAI", "Choose a workflow and check AI outputs against criteria that matter in your field."],
                ["Cybersecurity", "Explore how vulnerabilities work in a controlled lab."],
                ["Python, SQL & data", "Query, prepare and analyse data."],
            ],
        },
        aboutLabel: "About Luminovia",
        aboutTitle: "Who’s behind Luminovia",
        aboutCopy: `Carina Sophie Schoppe leads Luminovia and develops training for companies, universities and education providers. Software engineer and AI architect ${PROFILE.nenad.name} works alongside her.`,
        aboutLink: "Meet Carina",
        teamLink: "Meet the team",
        workLink: "Teaching and project experience",
        notesTitle: "How a session comes together",
        notes: [
            ["Pick a task", "An example from your work gives the exercise a clear goal."],
            ["Try it in the session", "The group works through the task and discusses what a good result looks like."],
            ["Keep something to reuse", "A template, checklist or exercise file helps the team repeat the task at work."],
        ],
        contactTitle: "What should your team be able to do next?",
        contactCopy: "Tell us who you’re planning for and what should change in their day-to-day work. We’ll discuss which format fits.",
        contactLink: "Get in touch",
    },
};

const services = [
    {to: "/training", Icon: BookOpen, colour: "mint"},
    {to: "/consulting", Icon: Compass, colour: "coral"},
    {to: "/offers", Icon: Layers3, colour: "yellow"},
];

const topicPaths = [
    "/training/ai-genai-training",
    "/training/cybersecurity-pentesting-ethical-hacking",
    "/training/python-sql-data-skills",
];

export default function HomePage() {
    const {language, t} = useLanguage();
    const copy = content[language];

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
                            <Button to="/training" variant="secondary">{copy.training}</Button>
                        </div>
                    </div>
                    <div className="home-portrait-stage">
                        <figure className="home-portrait" id="founder">
                            <Photo src={IMAGES.headshot} alt={PROFILE.founder} className="home-portrait-photo" fetchPriority="high"
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
                    <ul><li>{copy.audience}</li><li>{copy.languages}</li><li>{copy.location}</li></ul>
                </Container>
            </div>

            <section className="home-section" id="routes">
                <Container>
                    <div className="home-section-heading">
                        <div><p className="lumo-section-label">{copy.offers.label}</p><h2>{copy.offers.title}</h2></div>
                        <ArrowDownRight size={45} strokeWidth={1.35} aria-hidden="true"/>
                    </div>
                    <div className="home-service-grid">
                        {services.map(({to, Icon, colour}, index) => {
                            const [title, description, example, action] = copy.offers.entries[index];
                            return (
                                <article key={to} className="home-service" data-colour={colour}>
                                    <div className="home-service-top"><span>0{index + 1}</span><Icon size={30} strokeWidth={1.5} aria-hidden="true"/></div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <p className="home-service-example"><strong>{copy.offers.example}</strong>{example}</p>
                                    <Link to={to}>{action}<ArrowUpRight size={20} aria-hidden="true"/></Link>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="home-section home-topics" id="offers" aria-labelledby="home-practice-heading">
                <Container>
                    <div className="home-topics-grid">
                        <div>
                            <p className="lumo-section-label">{copy.topics.label}</p>
                            <h2 id="home-practice-heading">{copy.topics.title}</h2>
                            <p className="home-topics-intro">{copy.topics.intro}</p>
                            <ul className="home-topic-list">
                                {copy.topics.entries.map(([title, description], index) => (
                                    <li key={title}>
                                        <Link to={topicPaths[index]}>
                                            <span><strong>{title}</strong><span>{description}</span></span>
                                            <ArrowUpRight size={23} aria-hidden="true"/>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link className="lumo-text-link" to="/training">{copy.topics.link}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                        </div>
                        <HomePractice copy={copy.topics} trainingPath={topicPaths[2]}/>
                    </div>
                </Container>
            </section>

            <section className="home-section" id="process">
                <Container className="home-about">
                    <div>
                        <p className="lumo-section-label">{copy.aboutLabel}</p>
                        <h2>{copy.aboutTitle}</h2>
                        <p className="home-about-copy">{copy.aboutCopy}</p>
                        <div className="home-about-links">
                            <Link className="lumo-text-link" to="/about#team">{copy.teamLink}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                            <Link className="lumo-text-link" to="/clients">{copy.workLink}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                        </div>
                    </div>
                    <div className="home-notes">
                        <h3>{copy.notesTitle}</h3>
                        <ol>
                            {copy.notes.map(([title, description]) => (
                                <li key={title}><strong>{title}</strong><p>{description}</p></li>
                            ))}
                        </ol>
                    </div>
                </Container>
            </section>

            <Container>
                <section className="lumo-final-cta">
                    <div><h2>{copy.contactTitle}</h2><p>{copy.contactCopy}</p></div>
                    <Button to="/contact#contact-options">{copy.contactLink}</Button>
                </section>
            </Container>
        </main>
    );
}
