import {ArrowDownRight, ArrowUpRight, BookOpen, Compass, Layers3} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const content = {
    de: {
        headline: ["Technik verstehen.", "Selbst anwenden."],
        label: "Training & Beratung",
        intro: "Luminovia bietet Trainings und Beratung zu KI, IT und Cybersecurity. Wir arbeiten mit den Aufgaben, die Ihr Team im Alltag lösen muss.",
        training: "Trainings entdecken",
        role: "Gründerin · Trainerin · Beraterin",
        location: "Aus Brisbane für internationale Teams",
        languages: "Live auf Deutsch und Englisch",
        audience: "Für Unternehmen, Bildungsanbieter und Hochschulen",
        offers: {
            label: "Angebot",
            title: "Was möchten Sie angehen?",
            entries: [
                ["Training & Workshops", "Üben Sie mit Ihrem Team, KI-Antworten zu prüfen, Daten mit Python und SQL auszuwerten oder Sicherheitsrisiken zu erkennen.", "Trainings ansehen"],
                ["Beratung", "Klären Sie, welche KI-Anwendungen sich für Ihre Abläufe eignen, welche Risiken Sie berücksichtigen und wo Sie mit der Umsetzung anfangen.", "Beratung entdecken"],
                ["Lernprogramme", "Entwickeln Sie einen Kurs oder Lernpfad mit Lernzielen, Übungen und Aufgaben, an denen sich der Fortschritt erkennen lässt.", "Formate ansehen"],
            ],
        },
        topics: {
            label: "Aus dem Trainingsangebot",
            title: "Was Sie im Training ausprobieren.",
            link: "Zum Trainingskatalog",
            entries: [
                ["KI & GenAI", "Einen Arbeitsablauf auswählen und KI-Ergebnisse an fachlichen Kriterien prüfen."],
                ["Cybersecurity", "Sicherheitslücken in einer geschützten Übungsumgebung nachvollziehen."],
                ["Python, SQL & Daten", "Daten abfragen, aufbereiten und auswerten."],
            ],
        },
        aboutLabel: "Über Luminovia",
        aboutTitle: "Technische Praxis und Erfahrung in der Lehre.",
        aboutCopy: "Carina Sophie Schoppe verbindet Wirtschaftsinformatik und Softwareentwicklung mit Erwachsenenbildung. Sie entwickelt Übungen und Lernmaterialien für konkrete Arbeitsabläufe und vermittelt technische Themen auf Deutsch und Englisch.",
        aboutLink: "Carina kennenlernen",
        workLink: "Lehr- und Projekterfahrung",
        contactTitle: "Was soll Ihr Team danach können?",
        contactCopy: "Schreiben Sie uns kurz, für wen Sie planen und was sich im Arbeitsalltag ändern soll. Das passende Format besprechen wir gemeinsam.",
        contactLink: "Kontakt aufnehmen",
    },
    en: {
        headline: ["Understand technology.", "Put it to work."],
        label: "Training & consulting",
        intro: "Luminovia provides training and consulting in AI, IT and cybersecurity. We work with the tasks your team needs to solve at work.",
        training: "Explore training",
        role: "Founder · Trainer · Consultant",
        location: "Based in Brisbane, working with teams worldwide",
        languages: "Live in German and English",
        audience: "For businesses, education providers and universities",
        offers: {
            label: "Services",
            title: "What would you like to tackle?",
            entries: [
                ["Training & workshops", "Give your team practice checking AI responses, analysing data with Python and SQL, or recognising security risks.", "Browse training"],
                ["Consulting", "Identify where AI fits into your workflows, what risks to consider and where to begin implementation.", "Explore consulting"],
                ["Learning programmes", "Design a course or learning path with clear objectives, practical exercises and tasks that show learners’ progress.", "Explore formats"],
            ],
        },
        topics: {
            label: "From the training catalogue",
            title: "What you’ll try in training.",
            link: "Browse the training catalogue",
            entries: [
                ["AI & GenAI", "Choose a workflow and check AI outputs against criteria that matter in your field."],
                ["Cybersecurity", "Explore how vulnerabilities work in a controlled lab."],
                ["Python, SQL & data", "Query, prepare and analyse data."],
            ],
        },
        aboutLabel: "About Luminovia",
        aboutTitle: "Hands-on technical work meets teaching experience.",
        aboutCopy: "Carina Sophie Schoppe combines business information systems and software development with adult education. She develops exercises and learning materials around real workflows and teaches technical topics in German and English.",
        aboutLink: "Meet Carina",
        workLink: "Teaching and project experience",
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
                            <Button to="/training">{copy.training}</Button>
                            <Button to="/contact#appointment" variant="secondary">{t.bookTraining}</Button>
                        </div>
                    </div>
                    <figure className="home-portrait" id="founder">
                        <Photo src={IMAGES.headshot} alt={PROFILE.founder} className="home-portrait-photo" fetchPriority="high"
                            sizes="(min-width: 1200px) 410px, (min-width: 850px) 36vw, 86vw"/>
                        <figcaption>
                            <div><strong>{PROFILE.founder}</strong><span>{copy.role}</span></div>
                            <Link to="/about" aria-label={copy.aboutLink}><ArrowUpRight aria-hidden="true" size={21}/></Link>
                        </figcaption>
                    </figure>
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
                            const [title, description, action] = copy.offers.entries[index];
                            return (
                                <article key={to} className="home-service" data-colour={colour}>
                                    <div className="home-service-top"><span>0{index + 1}</span><Icon size={30} strokeWidth={1.5} aria-hidden="true"/></div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <Link to={to}>{action}<ArrowUpRight size={20} aria-hidden="true"/></Link>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="home-section home-topics" id="offers">
                <Container className="home-topics-grid">
                    <div>
                        <p className="lumo-section-label">{copy.topics.label}</p>
                        <h2>{copy.topics.title}</h2>
                        <Link className="lumo-text-link" to="/training">{copy.topics.link}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                    </div>
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
                </Container>
            </section>

            <section className="home-section" id="process">
                <Container className="home-about">
                    <div><p className="lumo-section-label">{copy.aboutLabel}</p><h2>{copy.aboutTitle}</h2></div>
                    <div><p>{copy.aboutCopy}</p>
                        <div className="home-about-links">
                            <Link className="lumo-text-link" to="/about">{copy.aboutLink}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                            <Link className="lumo-text-link" to="/clients">{copy.workLink}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                        </div>
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
