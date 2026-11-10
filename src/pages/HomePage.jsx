import {ArrowDownRight, ArrowUpRight, BookOpen, Compass, Layers3} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";
import HomePracticeExamples from "../components/HomePracticeExamples.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/home.css";

const content = {
    de: {
        headline: ["Technik verstehen.", "Selbst anwenden."],
        label: "IT · KI · Wirtschaft",
        intro: "Live-Trainings und Beratung für Teams, die IT, KI und Wirtschaft praktisch anwenden. Von Netzwerktechnik und Softwareentwicklung bis zu IT-Sicherheit und Rechnungswesen.",
        training: "Trainings entdecken",
        role: "Gründerin · Trainerin · Beraterin",
        languages: "Live auf Deutsch und Englisch",
        audience: "Für Unternehmen, Bildungsanbieter und Hochschulen",
        references: "Referenzen ansehen",
        offers: {
            label: "Angebot",
            title: "Was möchten Sie angehen?",
            entries: [
                ["Training & Workshops", "Netzwerke einrichten, KI-Ergebnisse prüfen oder Geschäftsvorfälle buchen. Ihr Team übt an konkreten Aufgaben.", "Trainings ansehen"],
                ["Beratung", "Software, Infrastruktur und KI-Anwendungen vergleichen. Gemeinsam klären wir Anforderungen und planen die nächsten Schritte.", "Beratung ansehen"],
                ["Lernprogramme", "Kurse und Lernpfade mit klaren Lernzielen, Übungen und Aufgaben für Ihren Bildungsträger entwickeln.", "Formate vergleichen"],
            ],
        },
        topics: {
            label: "Ein Blick ins Training",
            title: "Vier kleine Aufgaben zum Ausprobieren",
            intro: "Wählen Sie eine Aufgabe und probieren Sie aus, wie ein Beispiel aus unseren Trainings funktioniert.",
            worksheet: "Support-Tickets auswerten",
            output: "Ergebnis mit Beispieldaten",
            count: "Tickets",
            lesson: "Zum Training für Python, SQL und Daten",
            link: "Zum Trainingskatalog",
        },
        aboutLabel: "Über Luminovia",
        aboutTitle: "Wer hinter Luminovia steht",
        aboutCopy: `Carina Sophie Schoppe leitet Luminovia und entwickelt die Trainings. Im Team arbeitet sie mit ${PROFILE.nenad.name} zusammen, der Erfahrung in Softwareentwicklung und KI-Architektur einbringt.`,
        aboutLink: "Carina kennenlernen",
        teamLink: "Das Team kennenlernen",
        contactTitle: "Was soll Ihr Team danach können?",
        contactCopy: "Erzählen Sie uns kurz von Ihrem Ziel. Gemeinsam finden wir das passende Format.",
    },
    en: {
        headline: ["Understand technology.", "Put it to work."],
        label: "IT · AI · Business",
        intro: "Live training and consulting for teams putting IT, AI and business skills to work, from networking and software development to cybersecurity and accounting.",
        training: "Explore training",
        role: "Founder · Trainer · Consultant",
        languages: "Live in German and English",
        audience: "For businesses, education providers and universities",
        references: "See our references",
        offers: {
            label: "Services",
            title: "What would you like to tackle?",
            entries: [
                ["Training & workshops", "Configure networks, check AI outputs or record business transactions. Your team practises on concrete tasks.", "Browse training"],
                ["Consulting", "Compare software, infrastructure and AI options. We help you clarify requirements and plan the next steps.", "Explore consulting"],
                ["Learning programmes", "Design courses and learning paths for your education organisation, with clear objectives, exercises and assessments.", "Compare formats"],
            ],
        },
        topics: {
            label: "Inside the training",
            title: "Four short exercises to try",
            intro: "Pick a task and see how a practical example from our training works.",
            worksheet: "Query support tickets",
            output: "Result using sample data",
            count: "Tickets",
            lesson: "Explore Python, SQL and data training",
            link: "Browse the training catalogue",
        },
        aboutLabel: "About Luminovia",
        aboutTitle: "Who’s behind Luminovia",
        aboutCopy: `Carina Sophie Schoppe leads Luminovia and designs its training. ${PROFILE.nenad.name} works alongside her, bringing experience in software development and AI architecture.`,
        aboutLink: "Meet Carina",
        teamLink: "Meet the team",
        contactTitle: "What should your team be able to do next?",
        contactCopy: "Tell us what you’d like to achieve and we’ll work out which format fits.",
    },
};

const services = [
    {to: "/training#details", Icon: BookOpen, colour: "mint"},
    {to: "/consulting", Icon: Compass, colour: "coral"},
    {to: "/offers", Icon: Layers3, colour: "yellow"},
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
                            <Button to="/training#details" variant="secondary">{copy.training}</Button>
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
                    <ul>
                        <li>{copy.audience}</li>
                        <li>{copy.languages}</li>
                        <li><Link className="lumo-text-link" to="/clients#organisations">{copy.references}<ArrowUpRight size={16} aria-hidden="true"/></Link></li>
                    </ul>
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

            <section className="home-section home-topics" id="offers" aria-labelledby="home-practice-heading">
                <Container>
                    <div className="home-topics-grid">
                        <div className="home-topics-heading">
                            <p className="lumo-section-label">{copy.topics.label}</p>
                            <h2 id="home-practice-heading">{copy.topics.title}</h2>
                            <p className="home-topics-intro">{copy.topics.intro}</p>
                        </div>
                        <div className="home-topics-exercises">
                            <HomePracticeExamples sqlCopy={copy.topics} sqlTrainingPath="/training/python-sql-data-skills"/>
                        </div>
                        <div className="home-topics-links">
                            <Link className="lumo-text-link" to="/training#details">{copy.topics.link}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home-section" id="process">
                <Container className="home-about">
                    <div>
                        <p className="lumo-section-label">{copy.aboutLabel}</p>
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
