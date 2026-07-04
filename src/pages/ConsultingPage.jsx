import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";

const content = {
    en: {
        badge: "Consulting & Enablement",
        title: "Consulting for AI, IT and digital capability that becomes usable.",
        intro: "Luminovia supports organisations that need to turn digital questions into practical structures: AI use cases, workflow decisions, learning architecture, curriculum design, roadmaps and implementation support.",
        jumpLabel: "On this page",
        jumpItems: [["#consulting-areas", "Areas"], ["#deliverables", "Outcomes"], ["#process", "Process"], ["#scope", "Scope"], ["#next", "Request"]],
        areasTitle: "From individual questions to larger digital capability programmes.",
        areasCopy: "Consulting can be scoped as a workshop, audit, sparring session, concept phase, implementation review or enablement sprint. The goal is a clearer next decision, not more generic theory.",
        areas: [
            ["AI use-case mapping", "Clarify where AI can help, where it should not be used yet, and which human review points are needed."],
            ["Workflow and process analysis", "Map work routines, tool use, handoffs, automation ideas and bottlenecks before training or implementation."],
            ["Digital capability roadmap", "Prioritise the skills, formats, materials and decisions needed for a realistic next phase."],
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
        scopeTitle: "What is in scope, and what is not.",
        nextTitle: "Request consulting support for your organisation.",
        nextCopy: "Send the topic, audience, current situation, timeframe, language and target outcome. Luminovia will suggest a suitable consulting sprint, workshop, roadmap or combined training format.",
        primary: "Request consulting",
        secondary: "View offers",
    },
    de: {
        badge: "Consulting & Enablement",
        title: "Consulting fuer AI, IT und digitale Kompetenz, die praktisch nutzbar wird.",
        intro: "Luminovia unterstuetzt Organisationen dabei, digitale Fragen in klare Strukturen zu uebersetzen: AI Use Cases, Workflow-Entscheidungen, Lernarchitektur, Curriculum Design, Roadmaps und Umsetzungsbegleitung.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#consulting-areas", "Bereiche"], ["#deliverables", "Ergebnisse"], ["#process", "Prozess"], ["#scope", "Scope"], ["#next", "Anfrage"]],
        areasTitle: "Von Einzelfrage bis Digital-Capability-Programm.",
        areasCopy: "Consulting kann als Workshop, Audit, Sparring, Konzeptphase, Umsetzungsreview oder Enablement-Sprint gescoped werden. Ziel ist eine klarere naechste Entscheidung, nicht mehr generische Theorie.",
        areas: [
            ["AI Use-Case Mapping", "Klaeren, wo AI helfen kann, wo sie noch nicht sinnvoll ist und welche menschlichen Reviewpunkte gebraucht werden."],
            ["Workflow- und Prozessanalyse", "Arbeitsablaeufe, Tool-Nutzung, Uebergaben, Automatisierungsideen und Engpaesse vor Training oder Umsetzung sichtbar machen."],
            ["Digital Capability Roadmap", "Skills, Formate, Materialien und Entscheidungen fuer eine realistische naechste Phase priorisieren."],
            ["Trainingsstrategie und Lernpfade", "Enablement-Programme nach Zielgruppe, Lernstand, Transferaufgaben und Business-Zielen formen."],
            ["Curriculum und Materialdesign", "Module, Labs, Slides, Lernchecks und Blended-Learning-Strukturen fuer professionelle Kohorten entwickeln."],
            ["Projekt- und Umsetzungsbegleitung", "Vorhaben mit Scope, Reviewpunkten, Dokumentation und Entscheidungsmaterial begleiten."],
        ],
        deliverablesTitle: "Typische Consulting-Ergebnisse",
        deliverables: [
            "Use-Case-Map mit Priorisierung nach Nutzen, Risiko und Umsetzbarkeit",
            "Workflow- oder Prozesslandkarte mit praktischen Empfehlungen",
            "AI-Nutzungsleitlinien, Reviewroutinen oder Governance-Notizen",
            "Digital-Capability-Roadmap mit naechsten Schritten und Lernbedarf",
            "Workshop-, Trainingspfad- oder Curriculum-Architektur",
            "Entscheidungsvorlage fuer Management, Programmleitung oder Bildungsanbieter",
        ],
        processTitle: "Ein strukturierter Weg von der ersten Idee zu praktischer Kompetenz.",
        scopeTitle: "Was im Scope liegt, und was nicht.",
        nextTitle: "Consulting-Unterstuetzung fuer Ihre Organisation anfragen.",
        nextCopy: "Senden Sie Thema, Zielgruppe, Ausgangslage, Zeitraum, Sprache und Ziel. Luminovia schlaegt ein passendes Consulting-Sprint-, Workshop-, Roadmap- oder kombiniertes Trainingsformat vor.",
        primary: "Consulting anfragen",
        secondary: "Angebote ansehen",
    },
};

export default function ConsultingPage() {
    const {language, t} = useLanguage();
    const c = content[language];
    const {methods, boundaries} = businessOfferingsForLanguage(language);

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="violet">{c.badge}</Badge>
                <div className="mt-6 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
                    <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">{c.title}</h1>
                    <div>
                        <p className="text-lg leading-8 text-slate-300">{c.intro}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button to="/contact#contact-options">{c.primary}</Button>
                            <Button to="/offers" variant="secondary">{c.secondary}</Button>
                        </div>
                    </div>
                </div>
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
                        {t.home.processSteps.map(([number, title, copy]) => (
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
                        <h2 className="text-3xl font-black text-white">{language === "de" ? "Moeglich im Scope" : "Possible in scope"}</h2>
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
