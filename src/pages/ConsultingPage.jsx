import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const content = {
    en: {
        badge: "Consulting",
        title: "Consulting for AI, IT and business processes.",
        intro: "We assess where AI could help, plan software and infrastructure, and look at how work moves through your team. Together we decide what to change and how to start.",
        jumpLabel: "On this page",
        jumpItems: [["#consulting-areas", "Areas and outcomes"], ["#process", "Process"], ["#scope", "Scope"], ["#next", "Request"]],
        areasTitle: "Areas and outcomes",
        resultLabel: "Example outcome",
        areas: [
            ["Assess AI use cases", "We compare tasks by benefit, effort and risk.", "A shortlist for a pilot with criteria for checking the results."],
            ["Design and review IT systems", "We compare software architecture, networking and infrastructure options against your requirements, costs and security needs.", "A decision brief with options and a recommendation."],
            ["Improve business processes", "We trace handovers, tools and bottlenecks to identify what to simplify or automate.", "A process map and a plan for the first change."],
            ["Plan training and curricula", "We turn what your group needs to do at work into a sequence of sessions, practice tasks and learning checks.", "A course outline with clear objectives and sample activities."],
        ],
        processTitle: "How we work together",
        processSteps: [
            ["01", "Agree on the brief", "In the first call we clarify the decision and who’s involved. The proposal records the scope, dates and deliverables."],
            ["02", "Review the options", "We work through your examples and compare options in a workshop or review. For larger projects, we agree when to review progress."],
            ["03", "Plan the next step", "We document decisions and responsibilities. If agreed, we support implementation or follow up on open questions."],
        ],
        scopeTitle: "Consulting scope",
        scopeCopy: "We usually work online in German or English. We can agree on a single workshop, a technical review or support across several sessions.",
        scopeLimits: "What’s outside the scope",
        nextTitle: "What decision is coming up?",
        example: ["Example from consulting", "A support team wants to try AI. Together we choose a task, decide which data it can use and define how the team will check the output."],
        nextCopy: "Tell us what you need to decide and when. We’ll work out what kind of support fits.",
        primary: "Request consulting",
        pricing: "View consulting rates",
        secondary: "View offers",
    },
    de: {
        badge: "Beratung",
        title: "Beratung für KI, IT und Geschäftsprozesse.",
        intro: "Wir helfen Ihnen, KI-Anwendungen zu bewerten, Software und Infrastruktur zu planen und betriebliche Abläufe zu verbessern. Gemeinsam halten wir fest, was Ihr Team als Nächstes umsetzen kann.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#consulting-areas", "Bereiche und Ergebnisse"], ["#process", "Ablauf"], ["#scope", "Umfang"], ["#next", "Anfrage"]],
        areasTitle: "Beratungsbereiche und Ergebnisse",
        resultLabel: "Mögliches Ergebnis",
        areas: [
            ["KI-Anwendungsfälle bewerten", "Wir vergleichen Aufgaben nach Nutzen, Aufwand und Risiko.", "Eine engere Auswahl für einen Pilotversuch mit Kriterien zur Prüfung der Ergebnisse."],
            ["IT-Systeme entwerfen und prüfen", "Wir vergleichen Varianten für Softwarearchitektur, Netzwerke und Infrastruktur anhand Ihrer Anforderungen, Kosten und Sicherheitsziele.", "Eine Entscheidungsvorlage mit Varianten und einer Empfehlung."],
            ["Geschäftsprozesse verbessern", "Wir untersuchen Übergaben, Werkzeuge und Engpässe und zeigen, was sich vereinfachen oder automatisieren lässt.", "Eine Übersicht des Prozesses und ein Plan für die erste Änderung."],
            ["Weiterbildung und Lehrpläne entwickeln", "Wir leiten aus den Aufgaben der Lerngruppe passende Termine, Übungen und Lernkontrollen ab.", "Ein Kursentwurf mit konkreten Lernzielen und Beispielaufgaben."],
        ],
        processTitle: "So läuft die Zusammenarbeit ab",
        processSteps: [
            ["01", "Auftrag klären", "Im Erstgespräch klären wir die Entscheidung und wer beteiligt ist. Im Angebot stehen der Umfang, die Termine und die vereinbarten Ergebnisse."],
            ["02", "Möglichkeiten prüfen", "Wir arbeiten an Ihren Beispielen und vergleichen Varianten im Workshop oder in einer fachlichen Prüfung. Bei größeren Projekten vereinbaren wir Termine für Rücksprachen."],
            ["03", "Nächsten Schritt planen", "Wir halten Entscheidungen und Zuständigkeiten fest. Bei Bedarf vereinbaren wir Unterstützung bei der Umsetzung oder bei offenen Fragen."],
        ],
        scopeTitle: "Rahmen der Zusammenarbeit",
        scopeCopy: "Wir beraten in der Regel online auf Deutsch oder Englisch. Möglich sind ein einzelner Workshop, eine fachliche Prüfung oder die Begleitung über mehrere Termine.",
        scopeLimits: "Grenzen des Beratungsauftrags",
        nextTitle: "Welche Entscheidung steht an?",
        example: ["Beispiel aus der Beratung", "Ein Supportteam möchte KI ausprobieren. Gemeinsam wählen wir eine Aufgabe aus und legen fest, welche Daten es verwenden darf und wie es die Ergebnisse prüft."],
        nextCopy: "Schreiben Sie uns, welche Entscheidung ansteht und bis wann Sie Klarheit brauchen. Wir besprechen, welche Unterstützung passt.",
        primary: "Beratung anfragen",
        pricing: "Beratungspreise ansehen",
        secondary: "Angebote ansehen",
    },
};

export default function ConsultingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {boundaries} = businessOfferingsForLanguage(language);

    return (
        <main className="business-page">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<><Button to="/contact#contact-options">{c.primary}</Button><Button to="/pricing#rates" variant="secondary">{c.pricing}</Button></>}
                visual={
                    <div className="business-panel business-stack" data-tone="lilac">
                        <p className="business-kicker">{c.example[0]}</p>
                        <p>{c.example[1]}</p>
                    </div>
                }
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="consulting-areas" aria-labelledby="consulting-areas-title">
                    <div id="deliverables" className="business-heading"><h2 id="consulting-areas-title">{c.areasTitle}</h2></div>
                    {c.areas.map(([title, description, result]) => (
                        <article className="business-row" key={title}>
                            <h3>{title}</h3>
                            <div>
                                <p>{description}</p>
                                <p className="business-muted mt-2"><strong>{c.resultLabel}</strong> · {result}</p>
                            </div>
                        </article>
                    ))}
                </section>

                <section id="process">
                    <div className="business-heading"><h2>{c.processTitle}</h2></div>
                    <ol className="business-process">
                        {c.processSteps.map(([number, title, description]) => (
                            <li key={number}><span aria-hidden="true">{number}</span><h3>{title}</h3><p>{description}</p></li>
                        ))}
                    </ol>
                </section>

                <section id="scope" className="business-layout business-layout--reverse">
                    <div className="business-heading"><h2>{c.scopeTitle}</h2><p>{c.scopeCopy}</p></div>
                    <div className="business-accordion">
                        <details>
                            <summary>{c.scopeLimits}</summary>
                            <div><ul className="business-list">{boundaries.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul></div>
                        </details>
                    </div>
                </section>
            </Container>
            <div id="next" className="business-end">
                <CTASection
                    title={c.nextTitle}
                    copy={c.nextCopy}
                    primary={<Button to="/contact#contact-options">{c.primary}</Button>}
                    secondary={<Button to="/offers" variant="secondary">{c.secondary}</Button>}
                />
            </div>
        </main>
    );
}
