import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, ProcessTimeline} from "../components/LuminoviaDesign.jsx";

const content = {
    en: {
        badge: "Consulting & Enablement",
        title: "Consulting for AI, IT and digital capability that teams can use.",
        intro: "Luminovia helps organisations structure digital decisions: AI use cases, workflow design, learning architecture, curriculum planning, roadmaps and implementation support.",
        jumpLabel: "On this page",
        jumpItems: [["#consulting-areas", "Areas"], ["#deliverables", "Outcomes"], ["#process", "Process"], ["#scope", "Scope"], ["#next", "Request"]],
        areasTitle: "From a specific question to a workable digital capability plan.",
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
        processTitle: "A structured path from first idea to practical capability.",
        processSteps: [
            ["1", "Short consultation", "Clarify audience, constraints, target outcome and the decision the work must support."],
            ["2", "Scope", "Define the practical format, responsibilities, materials and review points before work starts."],
            ["3", "Proposal", "Receive a clear recommendation with format, preparation needs, deliverables and next steps."],
            ["4", "Delivery", "Run workshops, reviews or consulting sessions with structured material and active decision support."],
            ["5", "Transfer", "Turn results into notes, roadmap items, guidelines or training actions your team can use."],
            ["6", "Follow-up", "Review open questions, update artefacts where useful and plan the next practical step."],
        ],
        scopeTitle: "What is in scope, and what is not.",
        nextTitle: "Request consulting support for your organisation.",
        nextCopy: "Send the topic, audience, current situation, timeframe, language and target outcome. Luminovia will suggest a suitable consulting sprint, workshop, roadmap or combined training format.",
        primary: "Request consulting",
        secondary: "View offers",
    },
    de: {
        badge: "Beratung & Kompetenzaufbau",
        title: "Beratung für KI, IT und digitale Kompetenz, die im Arbeitsalltag funktioniert.",
        intro: "Luminovia unterstützt Organisationen dabei, digitale Vorhaben klar zu strukturieren: KI-Anwendungsfälle, Arbeitsabläufe, Lernarchitektur, Curriculum-Planung, Roadmaps und Umsetzungsbegleitung.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#consulting-areas", "Bereiche"], ["#deliverables", "Ergebnisse"], ["#process", "Prozess"], ["#scope", "Umfang"], ["#next", "Anfrage"]],
        areasTitle: "Von der konkreten Frage zum umsetzbaren Kompetenzplan.",
        areasCopy: "Beratung kann als Workshop, Analyse, Sparring, Konzeptphase, Umsetzungsreview oder Enablement-Sprint beauftragt werden. Jedes Format liefert eine belastbare Grundlage für die nächste Entscheidung.",
        areas: [
            ["KI-Anwendungsfälle bewerten", "Klären, wo KI sinnvoll ist, wo sie noch nicht eingesetzt werden sollte und welche menschlichen Prüfpunkte erforderlich sind."],
            ["Workflow- und Prozessanalyse", "Arbeitsabläufe, Tool-Nutzung, Übergaben, Automatisierungsideen und Engpässe vor Training oder Umsetzung sichtbar machen."],
            ["Digitaler Kompetenzfahrplan", "Kompetenzen, Formate, Materialien und Entscheidungen für die nächste realistische Phase priorisieren."],
            ["Trainingsstrategie und Lernpfade", "Enablement-Programme nach Zielgruppe, Lernstand, Transferaufgaben und Business-Zielen formen."],
            ["Curriculum und Materialdesign", "Module, Labs, Slides, Lernchecks und Blended-Learning-Strukturen für professionelle Kohorten entwickeln."],
            ["Projekt- und Umsetzungsbegleitung", "Vorhaben mit Scope, Reviewpunkten, Dokumentation und Entscheidungsmaterial begleiten."],
        ],
        deliverablesTitle: "Typische Beratungsergebnisse",
        deliverables: [
            "Use-Case-Map mit Priorisierung nach Nutzen, Risiko und Umsetzbarkeit",
            "Workflow- oder Prozesslandkarte mit praktischen Empfehlungen",
            "AI-Nutzungsleitlinien, Reviewroutinen oder Governance-Notizen",
            "Digital-Capability-Roadmap mit nächsten Schritten und Lernbedarf",
            "Workshop-, Trainingspfad- oder Curriculum-Architektur",
            "Entscheidungsvorlage für Management, Programmleitung oder Bildungsanbieter",
        ],
        processTitle: "Ein strukturierter Weg von der ersten Idee zu praktischer Kompetenz.",
        processSteps: [
            ["1", "Kurzgespräch", "Zielgruppe, Rahmenbedingungen, Zielbild und die zu klärende Entscheidung erfassen."],
            ["2", "Umfang", "Format, Verantwortlichkeiten, Materialien und Prüfpunkte vor Beginn konkret festlegen."],
            ["3", "Vorschlag", "Sie erhalten eine klare Empfehlung mit Format, Vorbereitung, Ergebnissen und nächsten Schritten."],
            ["4", "Durchführung", "Workshops, Reviews oder Beratungssessions laufen mit strukturiertem Material und Entscheidungshilfe."],
            ["5", "Transfer", "Ergebnisse werden in Notizen, Roadmap-Punkte, Leitlinien oder Trainingsmaßnahmen übersetzt."],
            ["6", "Nachbereitung", "Offene Fragen werden geklärt, Unterlagen bei Bedarf angepasst und der nächste Schritt geplant."],
        ],
        scopeTitle: "Was enthalten ist – und was nicht.",
        nextTitle: "Consulting-Unterstützung für Ihre Organisation anfragen.",
        nextCopy: "Senden Sie Thema, Zielgruppe, Ausgangslage, Zeitraum, Sprache und Ziel. Luminovia schlägt ein passendes Consulting-Sprint-, Workshop-, Roadmap- oder kombiniertes Trainingsformat vor.",
        primary: "Beratung anfragen",
        secondary: "Angebote ansehen",
    },
};

export default function ConsultingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {methods, boundaries} = businessOfferingsForLanguage(language);

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={c.badge}
                    title={c.title}
                    copy={c.intro}
                    actions={<><Button to="/contact#contact-options">{c.primary}</Button><Button to="/offers" variant="secondary">{c.secondary}</Button></>}
                    visual={<ProcessTimeline steps={c.processSteps} headingLevel={2}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems} className="mt-8"/>

                <section id="consulting-areas" className="mt-12 scroll-mt-36 overflow-hidden rounded-[2.2rem] border border-sky-200/18 bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,.24),transparent_38%),radial-gradient(circle_at_92%_8%,rgba(234,165,20,.16),transparent_40%),linear-gradient(135deg,rgba(13,27,54,.96),rgba(7,12,25,.96)_58%,rgba(22,23,48,.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_30px_120px_rgba(0,0,0,.34)] sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">{c.badge}</div>
                            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{c.areasTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-slate-200 sm:text-lg">{c.areasCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {c.areas.map(([title, copy], index) => (
                            <div key={title} className="consulting-map-card">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{title}</h3>
                                <p>{copy}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="deliverables" className="mt-16 grid scroll-mt-36 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                    <Card className="p-5 sm:p-6">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">{c.deliverablesTitle}</h2>
                        <div className="mt-6 grid gap-3">
                            {c.deliverables.map((deliverable) => (
                                <div key={deliverable} className="rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-4 text-sm font-bold leading-7 text-slate-200">
                                    {deliverable}
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="p-5 sm:p-6">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">{language === "de" ? "Arbeitsweise" : "Working method"}</h2>
                        <div className="mt-6 grid gap-3">
                            {methods.slice(0, 6).map(([title, description]) => (
                                <div key={title} className="rounded-[1.1rem] border border-sky-100/12 bg-[#071225]/72 p-4">
                                    <h3 className="text-base font-black text-sky-100">{title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                <section id="process" className="mt-16 scroll-mt-36">
                    <Badge tone="cyan">{language === "de" ? "Prozess" : "Process"}</Badge>
                    <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{c.processTitle}</h2>
                    <div className="process-stepper mt-8">
                        {c.processSteps.map(([number, title, copy]) => (
                            <div key={number} className="process-step-card">
                                <div className="process-step-node">{number}</div>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="scope" className="mt-16 grid scroll-mt-36 gap-5 lg:grid-cols-2">
                    <Card className="p-5 sm:p-6">
                        <h2 className="text-3xl font-black text-white">{language === "de" ? "Möglich im Scope" : "Possible in scope"}</h2>
                        <div className="mt-5 grid gap-2">
                            {boundaries.possible.map((item) => <span key={item} className="text-sm leading-6 text-slate-300">{item}</span>)}
                        </div>
                    </Card>
                    <Card className="p-5 sm:p-6">
                        <h2 className="text-3xl font-black text-white">{language === "de" ? "Nicht Teil des Standardangebots" : "Not part of the standard offer"}</h2>
                        <div className="mt-5 grid gap-2">
                            {boundaries.notIncluded.map((item) => <span key={item} className="text-sm leading-6 text-slate-300">{item}</span>)}
                        </div>
                    </Card>
                </section>

                <section id="next" className="mt-16 scroll-mt-36 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_18%_0%,rgba(186,230,253,.16),transparent_42%),radial-gradient(circle_at_92%_18%,rgba(234,165,20,.13),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045))] p-6 shadow-[0_28px_105px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-black text-white">{c.nextTitle}</h2>
                            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">{c.nextCopy}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#contact-options">{c.primary}</Button>
                            <Button to="/pricing" variant="secondary">{language === "de" ? "Preise ansehen" : "View pricing"}</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
