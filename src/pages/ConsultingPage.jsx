import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const content = {
    en: {
        badge: "Consulting",
        title: "Consulting for AI, IT and digital capability that teams can use.",
        intro: "Which AI use case should you pilot? Where do handovers slow the team down? What should the next course teach? We help you answer questions like these and turn the decisions into a plan.",
        jumpLabel: "On this page",
        jumpItems: [["#consulting-areas", "Areas"], ["#deliverables", "Outcomes"], ["#process", "Process"], ["#scope", "Scope"], ["#next", "Request"]],
        areasTitle: "What we work on together",
        areasCopy: "Consulting can be scoped as a workshop, audit, sparring session, concept phase, implementation review or enablement sprint. Each format is designed to produce a concrete next decision.",
        areas: [
            ["AI use-case mapping", "Clarify where AI is useful, where it should not be used yet, and which human review points are needed."],
            ["Workflow and process analysis", "Map routines, tool use, handoffs, automation ideas and bottlenecks before training or implementation."],
            ["Digital capability roadmap", "Prioritise skills, formats, materials and decisions for a realistic next phase."],
            ["Training strategy and learning paths", "Shape enablement programmes around audience needs, learner level, transfer tasks and business outcomes."],
            ["Curriculum and material design", "Build modules, labs, slides, learning checks and blended-learning structures for professional cohorts."],
            ["Project support and implementation guidance", "Support initiatives with scope, review points, documentation and decision material."],
        ],
        deliverablesTitle: "Typical consulting outputs",
        deliverables: [
            "Use-case map prioritised by value, risk and feasibility",
            "Workflow or process map with practical recommendations",
            "AI usage guidelines, review routines or governance notes",
            "Digital capability roadmap with next steps and learning needs",
            "Workshop, training path or curriculum architecture",
            "Decision brief for management, programme owners or education providers",
        ],
        processTitle: "How we work together",
        processSteps: [
            ["1", "Short consultation", "Clarify audience, constraints, target outcome and the decision the work must support."],
            ["2", "Scope", "Define the practical format, responsibilities, materials and review points before work starts."],
            ["3", "Proposal", "Receive a clear recommendation with format, preparation needs, deliverables and next steps."],
            ["4", "Delivery", "Run workshops, reviews or consulting sessions with structured material and active decision support."],
            ["5", "Transfer", "Turn results into notes, roadmap items, guidelines or training actions your team can use."],
            ["6", "Follow-up", "Review open questions, update artefacts where useful and plan the next practical step."],
        ],
        scopeTitle: "Scope of the engagement",
        nextTitle: "What decision is coming up?",
        methodsTitle: "Methods we use",
        possible: "Services available",
        boundaries: "Limits of the engagement",
        example: ["Example: assessing AI use cases", "Bring two or three tasks your team could use AI for. We compare effort, data sensitivity and review needs. You leave with a shortlist and a first test to run."],
        nextCopy: "Send the topic, audience, current situation, timeframe, language and target outcome. Luminovia will suggest a suitable consulting sprint, workshop, roadmap or combined training format.",
        primary: "Request consulting",
        secondary: "View offers",
    },
    de: {
        badge: "Beratung",
        title: "Beratung für KI, IT und digitale Kompetenz, die im Arbeitsalltag funktioniert.",
        intro: "Welchen KI-Anwendungsfall sollten Sie zuerst testen? Wo stocken Übergaben? Was soll der nächste Kurs vermitteln? Wir helfen Ihnen, solche Fragen zu klären und daraus einen Plan zu machen.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#consulting-areas", "Bereiche"], ["#deliverables", "Ergebnisse"], ["#process", "Prozess"], ["#scope", "Umfang"], ["#next", "Anfrage"]],
        areasTitle: "Woran wir gemeinsam arbeiten",
        areasCopy: "Beratung kann als Workshop, Analyse, Konzeptphase, fachliche Prüfung oder zeitlich begrenzter Beratungssprint beauftragt werden. Jedes Format liefert eine belastbare Grundlage für die nächste Entscheidung.",
        areas: [
            ["KI-Anwendungsfälle bewerten", "Klären, wo KI sinnvoll ist, wo sie noch nicht eingesetzt werden sollte und welche menschlichen Prüfpunkte erforderlich sind."],
            ["Arbeitsablauf- und Prozessanalyse", "Arbeitsabläufe, Werkzeugnutzung, Übergaben, Automatisierungsideen und Engpässe vor Training oder Umsetzung sichtbar machen."],
            ["Digitaler Kompetenzfahrplan", "Kompetenzen, Formate, Materialien und Entscheidungen für die nächste realistische Phase priorisieren."],
            ["Trainingsstrategie und Lernpfade", "Kompetenzprogramme an Zielgruppe, Lernstand, Transferaufgaben und Geschäftszielen ausrichten."],
            ["Curriculum und Materialentwicklung", "Module, Praxislabore, Präsentationen, Lernchecks und Blended-Learning-Strukturen für professionelle Lerngruppen entwickeln."],
            ["Projekt- und Umsetzungsbegleitung", "Vorhaben mit klarem Leistungsumfang, Prüfpunkten, Dokumentation und Entscheidungsmaterial begleiten."],
        ],
        deliverablesTitle: "Typische Beratungsergebnisse",
        deliverables: [
            "Anwendungsfallkarte mit Priorisierung nach Nutzen, Risiko und Umsetzbarkeit",
            "Arbeitsablauf- oder Prozesslandkarte mit praktischen Empfehlungen",
            "KI-Nutzungsleitlinien, Prüfroutinen oder Governance-Hinweise",
            "Kompetenzfahrplan mit nächsten Schritten und Lernbedarf",
            "Workshop-, Trainingspfad- oder Curriculum-Architektur",
            "Entscheidungsvorlage für Management, Programmleitung oder Bildungsanbieter",
        ],
        processTitle: "So läuft die Zusammenarbeit ab",
        processSteps: [
            ["1", "Kurzgespräch", "Zielgruppe, Rahmenbedingungen, Zielbild und die zu klärende Entscheidung erfassen."],
            ["2", "Umfang", "Format, Verantwortlichkeiten, Materialien und Prüfpunkte vor Beginn konkret festlegen."],
            ["3", "Vorschlag", "Sie erhalten eine klare Empfehlung mit Format, Vorbereitung, Ergebnissen und nächsten Schritten."],
            ["4", "Durchführung", "Workshops, Abstimmungen oder Beratungstermine laufen mit strukturiertem Material und klarer Entscheidungshilfe."],
            ["5", "Transfer", "Ergebnisse werden in Notizen, Fahrplanpunkte, Leitlinien oder Trainingsmaßnahmen übersetzt."],
            ["6", "Nachbereitung", "Offene Fragen werden geklärt, Unterlagen bei Bedarf angepasst und der nächste Schritt geplant."],
        ],
        scopeTitle: "Rahmen der Zusammenarbeit",
        nextTitle: "Welche Entscheidung steht an?",
        methodsTitle: "So arbeiten wir",
        possible: "Mögliche Leistungen",
        boundaries: "Grenzen des Auftrags",
        example: ["Beispiel: KI-Anwendungsfälle bewerten", "Bringen Sie zwei oder drei Aufgaben mit, bei denen KI Ihr Team unterstützen könnte. Wir vergleichen Aufwand, Datensensibilität und Prüfbedarf. Daraus entstehen eine engere Auswahl und ein erster Test."],
        nextCopy: "Senden Sie Thema, Zielgruppe, Ausgangslage, Zeitraum, Sprache und gewünschtes Ergebnis. Luminovia empfiehlt anschließend einen passenden Beratungssprint, Workshop, Fahrplan oder ein kombiniertes Trainingsformat.",
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
