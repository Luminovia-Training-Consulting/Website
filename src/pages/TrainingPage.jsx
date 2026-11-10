import {Link} from "react-router-dom";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import DemoVideoSection from "../components/DemoVideoSection.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";
import "../styles/training.css";

const subjectAreas = [
    {
        id: "it-software",
        de: ["IT und Software", "Netzwerke, Softwareentwicklung, Systembetrieb und IT-Sicherheit."],
        en: ["IT and software", "Networks, software development, system operations and cybersecurity."],
    },
    {
        id: "ai-data",
        de: ["KI und Daten", "Von Grundlagen und Datenanalyse bis zu agentischen Arbeitsabläufen und KI-Governance."],
        en: ["AI and data", "From AI literacy and data analysis to agentic workflows and AI governance."],
    },
    {
        id: "business-law",
        de: ["Wirtschaft, Recht und Datenschutz", "BWL und VWL, Rechnungswesen, Arbeitsrecht, Datenschutz und Projektarbeit."],
        en: ["Business, law and data protection", "Economics, accounting, employment law, data protection and project work."],
    },
    {
        id: "learning-communication",
        de: ["Bildung und Kommunikation", "Lehrpläne, Vorträge, Präsentationen und digitale Werkzeuge."],
        en: ["Education and communication", "Course design, expert talks, presentations and digital tools."],
    },
];

const copy = {
    de: {
        label: "Live-Trainings & Kurse",
        title: "Training für IT, KI und Wirtschaft.",
        intro: "Von Netzwerktechnik, Softwaredesign und IT-Sicherheit bis zu BWL, VWL, Buchhaltung, Steuern, Arbeitsrecht und Datenschutz. Für Unternehmen, Hochschulen und Bildungsträger passen wir Übungen und Tempo an die Lerngruppe an.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#details", "Themenkatalog"], ["#formats", "Formate"], ["#demo-session", "Demo"], ["#methods", "Arbeitsweise"]],
        browse: "Trainings finden",
        example: "Aufgaben aus dem Training",
        examples: ["Zugriffsrechte für einen Bericht festlegen.", "Eine KI-Zusammenfassung an der Quelle prüfen.", "Die Gewinnschwelle mit Musterzahlen berechnen."],
        tryExamples: "Übungen ausprobieren",
        catalog: "Themenkatalog",
        catalogCopy: "Wählen Sie ein Fachgebiet und öffnen Sie ein Training für Inhalte, Lernziele und Dauer.",
        catalogNav: "Fachgebiete",
        formats: "Formate und Dauer",
        formatsCopy: "Vom kurzen Briefing bis zur mehrwöchigen Kursreihe. Öffnen Sie ein Format, um den Ablauf und mögliche Ergebnisse zu sehen.",
        formatOutput: "Was Sie mitnehmen",
        offers: "Angebote vergleichen",
        methods: "So arbeiten wir im Training",
        methodsCopy: "Wir vereinbaren ein Lernziel, arbeiten an passenden Aufgaben und geben den Teilnehmenden Rückmeldung. Je nach Format erhalten sie Übungen, Checklisten oder Lernmaterialien für den Alltag.",
        scope: "Ablauf und Leistungsumfang",
        possible: "Mögliche Leistungen",
        limits: "Grenzen des Auftrags",
        audiences: "Für wen wir unterrichten",
        audiencesCopy: "Wir unterrichten Teams, Studierende und Menschen in der beruflichen Aus- und Weiterbildung. Die Termine finden live auf Deutsch oder Englisch statt.",
        proof: "Lehrerfahrung und Nachweise",
        proofCopy: "Carina unterrichtet in Unternehmen, an Hochschulen und bei Bildungsträgern. Ihre Nachweise und Forschungsarbeiten finden Sie bei den Referenzen.",
        references: "Referenzen ansehen",
        consulting: "Ein Training für Ihre Gruppe planen",
        consultingCopy: "Schreiben Sie uns, was die Teilnehmenden bereits können und was sie danach selbst erledigen sollen. Daraus entwickeln wir ein passendes Format.",
        consultingLink: "Beratung ansehen",
        ask: "Training anfragen",
    },
    en: {
        label: "Live training & courses",
        title: "Training in IT, AI and business.",
        intro: "Explore networking, software design and cybersecurity, or build skills in business administration, accounting, tax, employment law and data protection. We tailor workshops and courses to what teams and learners already know and what they need to do next.",
        jumpLabel: "On this page",
        jumpItems: [["#details", "Topic catalogue"], ["#formats", "Formats"], ["#demo-session", "Demo"], ["#methods", "How we work"]],
        browse: "Find a training topic",
        example: "Tasks from our training",
        examples: ["Set access permissions for a report.", "Check an AI summary against the source.", "Find the break-even point using sample figures."],
        tryExamples: "Try the exercises",
        catalog: "Topic catalogue",
        catalogCopy: "Choose a subject area and open a course to see what it covers, what you’ll learn and how long it takes.",
        catalogNav: "Subject areas",
        formats: "Formats and duration",
        formatsCopy: "From a short briefing to a course over several weeks. Open a format to see how it runs and what you can take away.",
        formatOutput: "What you can take away",
        offers: "Compare offers",
        methods: "How we teach",
        methodsCopy: "We agree on a learning goal, practise tasks that fit and give participants feedback. Depending on the format, they take away exercises, checklists or learning materials they can use at work.",
        scope: "Session plan and scope",
        possible: "Services available",
        limits: "Scope limits",
        audiences: "Who we teach",
        audiencesCopy: "We teach teams, university students, apprentices and adults in further education. Sessions run live in German or English.",
        proof: "Teaching experience and credentials",
        proofCopy: "Carina teaches in companies, universities and vocational education. Her credentials and research are available on the references page.",
        references: "View references",
        consulting: "Plan training for your group",
        consultingCopy: "Tell us what participants already know and what they should be able to do afterwards. We’ll suggest a format that fits.",
        consultingLink: "Explore consulting",
        ask: "Request training",
    },
};

export default function TrainingPage() {
    const {language} = useLanguage();
    const c = copy[language];
    const {durationModels, methods, boundaries} = businessOfferingsForLanguage(language);
    const detailTopics = trainingDetailsForLanguage(language);

    return (
        <main className="business-page" data-business-section="training">
            <PageHero
                label={c.label}
                title={c.title}
                copy={c.intro}
                actions={<><a href="#details" className="business-link">{c.browse}<span aria-hidden="true">↓</span></a><Button to="/contact#contact-options">{c.ask}</Button></>}
                visual={
                    <div className="business-panel business-stack" data-tone="yellow">
                        <p className="business-kicker">{c.example}</p>
                        <ul className="business-list">{c.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                        <Link to="/#offers" className="business-link">{c.tryExamples}<span aria-hidden="true">↗</span></Link>
                    </div>
                }
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="details" className="training-catalog" aria-labelledby="training-catalog-title">
                    <div id="services" className="business-heading">
                        <h2 id="training-catalog-title">{c.catalog}</h2>
                        <p>{c.catalogCopy}</p>
                    </div>
                    <SectionJumpNav label={c.catalogNav} items={subjectAreas.map((area) => ["#training-" + area.id, area[language][0]])}/>
                    <div id="topics" className="training-catalog-groups">
                        {subjectAreas.map((area) => {
                            const [title, description] = area[language];
                            const sectionId = "training-" + area.id;

                            return (
                                <section key={area.id} id={sectionId} className="training-catalog-group" aria-labelledby={sectionId + "-title"}>
                                    <h3 id={sectionId + "-title"}>{title}</h3>
                                    <p className="business-muted">{description}</p>
                                    <ul className="training-topic-grid" role="list">
                                        {detailTopics.filter((topic) => topic.subjectArea === area.id).map((topic) => (
                                            <li key={topic.slug} className="training-topic-card">
                                                <h4><Link to={"/training/" + topic.slug} className="business-link">{topic.title}<span aria-hidden="true">↗</span></Link></h4>
                                                <p className="business-muted">{topic.summary}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            );
                        })}
                    </div>
                </section>

                <section id="formats" aria-labelledby="training-formats-title">
                    <div className="business-heading">
                        <h2 id="training-formats-title">{c.formats}</h2>
                        <p>{c.formatsCopy}</p>
                    </div>
                    <div id="duration" className="business-accordion training-format-grid">
                        {durationModels.map((model) => (
                            <details key={model.title}>
                                <summary>{model.title}</summary>
                                <div className="business-stack">
                                    <p>{model.scope}</p>
                                    <p className="business-muted"><strong>{c.formatOutput}</strong> · {model.output}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                    <Link to="/offers" className="business-link mt-4">{c.offers}<span aria-hidden="true">↗</span></Link>
                </section>

                <DemoVideoSection className="business-demo"/>

                <section id="methods" aria-labelledby="training-methods-title">
                    <div className="business-heading">
                        <h2 id="training-methods-title">{c.methods}</h2>
                        <p>{c.methodsCopy}</p>
                    </div>
                    <div className="business-accordion">
                        <details>
                            <summary>{c.scope}</summary>
                            <div className="business-layout">
                                <dl className="business-facts">
                                    {methods.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
                                </dl>
                                <div className="business-stack">
                                    <h3>{c.possible}</h3>
                                    <ul className="business-list">{boundaries.possible.map((item) => <li key={item}>{item}</li>)}</ul>
                                    <h3>{c.limits}</h3>
                                    <ul className="business-list">{boundaries.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                <div className="business-layout">
                    <section id="audiences" className="business-panel business-stack" aria-labelledby="training-audiences-title">
                        <h2 id="training-audiences-title">{c.audiences}</h2>
                        <p>{c.audiencesCopy}</p>
                    </section>
                    <section id="proof" className="business-panel business-stack" data-tone="lilac" aria-labelledby="training-proof-title">
                        <h2 id="training-proof-title">{c.proof}</h2>
                        <p>{c.proofCopy}</p>
                        <Link to="/clients" className="business-link">{c.references}<span aria-hidden="true">↗</span></Link>
                    </section>
                </div>

                <section id="consulting" className="business-panel business-stack" data-tone="mint">
                    <h2 className="business-h2">{c.consulting}</h2>
                    <p>{c.consultingCopy}</p>
                    <div className="lumo-action-row">
                        <Button to="/contact#contact-options">{c.ask}</Button>
                        <Button to="/consulting" variant="secondary">{c.consultingLink}</Button>
                    </div>
                </section>
            </Container>
        </main>
    );
}
