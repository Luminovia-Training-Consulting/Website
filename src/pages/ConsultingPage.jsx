import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const content = {
    en: {
        badge: "Consulting",
        title: "Consulting for AI, IT and digital capability.",
        intro: "How should you design a new system? Which tasks could AI help with? Where do handovers slow the team down? We help you compare options and plan changes to your systems and business processes.",
        jumpLabel: "On this page",
        jumpItems: [["#consulting-areas", "Areas"], ["#deliverables", "Outcomes"], ["#process", "Process"], ["#scope", "Scope"], ["#next", "Request"]],
        areasTitle: "What we work on together",
        areasCopy: "A workshop or short review can help with a specific decision. We also support longer projects when you need to plan the work or review it as it progresses.",
        areas: [
            ["Choosing where to use AI", "Compare the tasks AI could help with. Decide where to hold off and where someone needs to check the result."],
            ["Reviewing business processes", "Trace who does what, which tools they use and where work gets stuck. Use that to decide what to improve or automate."],
            ["Designing and reviewing IT systems", "Compare approaches to software architecture, networking and infrastructure against your requirements, operating costs and security needs."],
            ["Training strategy and learning paths", "Plan training around what people know now, what the business needs and the tasks the team will do afterwards."],
            ["Curriculum and material design", "Develop course modules, labs, slides and ways to check progress. Plan how live sessions and independent practice fit together."],
            ["Project support and implementation guidance", "Agree on the scope, review work at key points and document what the team needs to make decisions."],
        ],
        deliverablesTitle: "What you can leave with",
        deliverables: [
            "List of potential AI uses ranked by benefit, risk and feasibility",
            "Map of how work moves through the team, with suggestions for improving it",
            "Guidelines on how to use AI, what to check and who is responsible",
            "Plan for what the team needs to learn and in what order",
            "Outline for a workshop, a series of courses or a curriculum",
            "Decision brief for choosing software, infrastructure or a new workflow",
        ],
        processTitle: "How we work together",
        processSteps: [
            ["1", "Short consultation", "We discuss who’s involved, what’s getting in the way and what you need to decide."],
            ["2", "Scope", "Together, we agree on the format, who does what and when to review progress."],
            ["3", "Proposal", "You get a proposal that sets out the work, what to prepare and what you’ll get."],
            ["4", "Delivery", "We run the agreed workshops or reviews and work through the open decisions with you."],
            ["5", "Put it to use", "We record the decisions and turn them into practical next steps, guidelines or training tasks."],
            ["6", "Follow-up", "We go over any open questions and update the documents if needed."],
        ],
        scopeTitle: "What the work can include",
        nextTitle: "What decision is coming up?",
        methodsTitle: "Methods we use",
        possible: "Services available",
        boundaries: "What’s outside the scope",
        example: ["A closer look at AI use cases", "Bring two or three tasks your team could use AI for. We compare effort, data sensitivity and review needs. You leave with a shortlist and a first test to run."],
        nextCopy: "Tell us what you need to decide, who’s involved and when you need an answer. We’ll discuss whether a workshop, a short review or a longer piece of work makes sense.",
        primary: "Request consulting",
        secondary: "View offers",
    },
    de: {
        badge: "Beratung",
        title: "Beratung für KI, IT und digitale Kompetenz.",
        intro: "Wie soll ein neues System aufgebaut sein? Bei welchen Aufgaben kann KI helfen? Wo stocken Übergaben? Wir helfen Ihnen, Lösungen zu vergleichen und Änderungen an IT-Systemen und Geschäftsprozessen zu planen.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#consulting-areas", "Bereiche"], ["#deliverables", "Ergebnisse"], ["#process", "Prozess"], ["#scope", "Umfang"], ["#next", "Anfrage"]],
        areasTitle: "Woran wir gemeinsam arbeiten",
        areasCopy: "Für eine einzelne Entscheidung kann ein Workshop oder eine kurze Analyse reichen. Bei längeren Projekten helfen wir bei der Planung und prüfen mit Ihnen, wie die Umsetzung läuft.",
        areas: [
            ["KI-Anwendungsfälle bewerten", "Wir vergleichen Aufgaben, bei denen KI helfen könnte. Gemeinsam klären wir, wo Sie den Einsatz zurückstellen sollten und wann jemand das Ergebnis prüfen muss."],
            ["Geschäftsprozesse untersuchen", "Wir schauen, wer welche Aufgabe übernimmt, welche Werkzeuge im Einsatz sind und wo es hakt. Daraus leiten wir ab, was sich verbessern oder automatisieren lässt."],
            ["IT-Systeme entwerfen und prüfen", "Wir vergleichen Varianten für Softwarearchitektur, Netzwerke und Infrastruktur anhand Ihrer Anforderungen, der Betriebskosten und des Sicherheitsbedarfs."],
            ["Trainingsstrategie und Lernpfade", "Wir planen das Training danach, was die Gruppe schon kann, was der Betrieb braucht und welche Aufgaben die Teilnehmenden danach übernehmen sollen."],
            ["Curriculum und Materialentwicklung", "Wir entwickeln Kursmodule, Übungen im Lab, Präsentationen und Lernkontrollen. Dazu planen wir, wie Live-Termine und Selbstlernphasen zusammenspielen."],
            ["Projekt- und Umsetzungsbegleitung", "Wir vereinbaren den Umfang, prüfen den Stand an wichtigen Etappen und halten fest, was das Team für seine Entscheidungen braucht."],
        ],
        deliverablesTitle: "Was Sie aus der Beratung mitnehmen können",
        deliverables: [
            "Liste möglicher KI-Anwendungen, geordnet nach Nutzen, Risiko und Aufwand",
            "Übersicht über den Arbeitsablauf mit konkreten Vorschlägen für Verbesserungen",
            "Leitlinien zum KI-Einsatz mit Prüfschritten und Zuständigkeiten",
            "Plan, was Ihr Team lernen sollte und in welcher Reihenfolge",
            "Entwurf für einen Workshop, eine Kursreihe oder ein Curriculum",
            "Entscheidungsvorlage für Software, Infrastruktur oder einen neuen Arbeitsablauf",
        ],
        processTitle: "So läuft die Zusammenarbeit ab",
        processSteps: [
            ["1", "Kurzgespräch", "Wir besprechen, wer beteiligt ist, wo es hakt und welche Entscheidung ansteht."],
            ["2", "Umfang", "Wir vereinbaren das Format, die Zuständigkeiten und wann wir den Stand gemeinsam prüfen."],
            ["3", "Vorschlag", "Sie erhalten einen Vorschlag zum Ablauf, zur Vorbereitung und zu den vereinbarten Ergebnissen."],
            ["4", "Durchführung", "In Workshops und Beratungsterminen gehen wir die offenen Entscheidungen mit Ihnen durch."],
            ["5", "In die Praxis", "Wir halten Entscheidungen fest und leiten daraus nächste Schritte, Leitlinien oder Trainingsaufgaben ab."],
            ["6", "Nachbereitung", "Wir klären offene Fragen und passen bei Bedarf die Unterlagen an."],
        ],
        scopeTitle: "Rahmen der Zusammenarbeit",
        nextTitle: "Welche Entscheidung steht an?",
        methodsTitle: "So arbeiten wir",
        possible: "Mögliche Leistungen",
        boundaries: "Was nicht zum Auftrag gehört",
        example: ["So lässt sich der KI-Einsatz prüfen", "Bringen Sie zwei oder drei Aufgaben mit, bei denen KI Ihr Team unterstützen könnte. Wir vergleichen Aufwand, Datensensibilität und Prüfbedarf. Daraus entstehen eine engere Auswahl und ein erster Test."],
        nextCopy: "Sagen Sie uns, was Sie entscheiden müssen, wer beteiligt ist und bis wann Sie Klarheit brauchen. Wir besprechen, ob ein Workshop, eine kurze Analyse oder eine längere Begleitung passt.",
        primary: "Beratung anfragen",
        secondary: "Angebote ansehen",
    },
};

export default function ConsultingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {methods, boundaries} = businessOfferingsForLanguage(language);

    return (
        <main className="business-page">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<><Button to="/contact#contact-options">{c.primary}</Button><Button to="/offers" variant="secondary">{c.secondary}</Button></>}
                visual={
                    <div className="business-panel business-stack" data-tone="lilac">
                        <p className="business-kicker">{c.example[0]}</p>
                        <p>{c.example[1]}</p>
                    </div>
                }
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="consulting-areas">
                    <div className="business-heading"><h2>{c.areasTitle}</h2><p>{c.areasCopy}</p></div>
                    {c.areas.map(([title, description]) => (
                        <article className="business-row" key={title}>
                            <h3>{title}</h3><p>{description}</p>
                        </article>
                    ))}
                </section>

                <div className="business-layout business-layout--reverse">
                    <section id="deliverables" className="business-panel" data-tone="mint">
                        <div className="business-heading"><h2>{c.deliverablesTitle}</h2></div>
                        <ul className="business-list">
                            {c.deliverables.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </section>
                    <section>
                        <div className="business-heading"><h2>{c.methodsTitle}</h2></div>
                        <div className="business-accordion">
                            {methods.slice(0, 6).map(([title, description]) => (
                                <details key={title}><summary>{title}</summary><p>{description}</p></details>
                            ))}
                        </div>
                    </section>
                </div>

                <section id="process">
                    <div className="business-heading"><h2>{c.processTitle}</h2></div>
                    <ol className="business-process">
                        {c.processSteps.map(([number, title, description]) => (
                            <li key={number}><span aria-hidden="true">{number.padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></li>
                        ))}
                    </ol>
                </section>

                <section id="scope">
                    <div className="business-heading"><h2>{c.scopeTitle}</h2></div>
                    <div className="business-grid business-grid--two">
                        <div className="business-panel business-stack">
                            <h3>{c.possible}</h3>
                            <ul className="business-list">{boundaries.possible.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div className="business-panel business-stack">
                            <h3>{c.boundaries}</h3>
                            <ul className="business-list">{boundaries.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                    </div>
                </section>
            </Container>
            <div id="next" className="business-end">
                <CTASection
                    title={c.nextTitle}
                    copy={c.nextCopy}
                    primary={<Button to="/contact#contact-options">{c.primary}</Button>}
                    secondary={<Button to="/pricing" variant="secondary">{language === "de" ? "Preise ansehen" : "View pricing"}</Button>}
                />
            </div>
        </main>
    );
}
