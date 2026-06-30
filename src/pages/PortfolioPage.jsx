import {useSiteContent} from "../data/localizedContent.js";
import {publications} from "../data/publications.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";

export default function PortfolioPage() {
    const {language} = useLanguage();
    const {selectedProjects} = useSiteContent();
    const copy = language === "de"
        ? {
            badge: "Referenzprojekte",
            title: "Projektpraxis hinter IT- und Business-Trainings.",
            intro: "Diese Auswahl zeigt Arbeitsbeispiele aus Software, AI, Research, digitalen Lernformaten und Bildungspartner-Kontexten. Sie macht sichtbar, dass technische Inhalte nicht nur theoretisch vermittelt werden, sondern aus eigener Praxis, Umsetzungserfahrung und didaktischer Übersetzung entstehen.",
            reference: "Referenz ansehen ->",
            jumpLabel: "Auf dieser Seite",
            jumpItems: [["#consulting", "Consulting"], ["#consulting-areas", "Bereiche"], ["#publications", "Publikationen"], ["#projects", "Projekte"]],
            consulting: {
                eyebrow: "Consulting-Portfolio",
                title: "IT- und Business-Consulting für Organisationen, die digitale Kompetenz wirklich nutzbar machen wollen.",
                copy: "Neben Training und Lehre unterstütze ich Bildungsanbieter, Unternehmen und Institutionen bei der Einordnung, Planung und Umsetzung digitaler Vorhaben. Der Schwerpunkt liegt auf realistischen AI-Use-Cases, IT- und Prozessverständnis, verantwortungsvoller Tool-Nutzung, Lernarchitektur, Automatisierung und Business-Technology-Entscheidungen.",
                signals: ["AI-Strategie und Enablement", "IT- und Prozessberatung", "Business-Technology-Workshops", "Curriculum- und Lernpfad-Design"],
            },
            areasTitle: "Beratungsfelder",
            areasCopy: "Consulting kann als Workshop, Audit, Sparring, Konzeptphase, Umsetzungsbegleitung oder Enablement-Sprint gebucht werden. Ziel ist nicht mehr Theorie, sondern ein klarer nächster Schritt.",
            areas: [
                {
                    title: "IT Consulting",
                    tag: "Systeme, Prozesse, technische Orientierung",
                    copy: "Unterstützung bei IT-Grundsatzfragen, Tool-Auswahl, Softwareprojekt-Struktur, Datenflüssen, Automatisierungsideen und technischer Entscheidungslogik zwischen Fachbereich, Management und Umsetzung.",
                    points: ["IT-Prozessanalyse", "Software- und Tool-Einordnung", "Daten-, API- und Automatisierungskonzepte", "Projektstruktur und technische Roadmaps"],
                },
                {
                    title: "AI Consulting",
                    tag: "Use Cases, Governance, sichere Anwendung",
                    copy: "Beratung zu generativer AI, Prompt-Workflows, agentischen Arbeitsmustern, AI-Governance, Risiko- und Datenschutzfragen sowie verantwortungsvoller Einführung in Teams oder Bildungsprogrammen.",
                    points: ["AI-Use-Case-Workshops", "Prompt- und Workflow-Design", "Responsible-AI-Guidelines", "AI Literacy für Entscheider und Teams"],
                },
                {
                    title: "Business Consulting",
                    tag: "Transformation, New Work, digitale Bildung",
                    copy: "Business-orientierte Beratung für digitale Transformation, New Work, Projektmanagement, Lernprogramme, Stakeholder-Kommunikation und die Übersetzung technischer Möglichkeiten in tragfähige Organisationsentscheidungen.",
                    points: ["Digital-Business-Strategie", "Workshop-Facilitation", "Change- und Kommunikationslogik", "Learning- und Enablement-Konzepte"],
                },
            ],
            deliverablesTitle: "Typische Ergebnisse",
            deliverables: [
                "Use-Case-Landkarte mit Priorisierung nach Nutzen, Risiko und Umsetzbarkeit",
                "AI- oder IT-Roadmap mit realistischen nächsten Schritten",
                "Workshop-Konzept, Trainingspfad oder Curriculum für Teams und Kohorten",
                "Tool-, Prozess- oder Automatisierungsbewertung mit Handlungsempfehlungen",
                "Guidelines für sichere AI-Nutzung, Prompting, Datenbewusstsein und Governance",
                "Entscheidungsvorlage für Management, Programmleitung oder Bildungsanbieter",
            ],
            processTitle: "So läuft Consulting mit mir ab",
            process: [
                ["01", "Kontext klären", "Zielgruppe, Problem, Systemlandschaft, Wissensstand und Entscheidungsdruck werden sortiert."],
                ["02", "Problem strukturieren", "Use Cases, Risiken, Abhängigkeiten, Lernbedarf und Business-Ziele werden sichtbar gemacht."],
                ["03", "Lösung entwerfen", "Wir entwickeln Roadmap, Workshop, Lernpfad, Prozessanpassung oder AI-/IT-Arbeitsmodell."],
                ["04", "Transfer absichern", "Ergebnisse werden so dokumentiert, dass Teams, Programmverantwortliche oder Entscheider weiterarbeiten können."],
            ],
            projectsTitle: "Praxis- und Referenzprojekte",
            projectsCopy: "Diese Beispiele zeigen den praktischen Unterbau: Software, Research Automation, Cybersecurity-Labs, digitale Lernsysteme und AI-Adoption fließen direkt in Beratung, Training und Umsetzungssparring ein.",
            publicationsTitle: "Publikationen und akademische Arbeiten",
            publicationsCopy: "Diese Arbeiten bilden die wissenschaftliche Grundlage meiner Consulting- und Trainingsarbeit rund um generative AI, AI Governance, Human-Machine Interaction und Cybersecurity Awareness.",
            downloadPublication: "PDF herunterladen",
            ctaTitle: "Consulting oder Training mit Beratungsanteil planen?",
            ctaCopy: "Senden Sie Thema, Zielgruppe, Ausgangslage und gewünschtes Ergebnis. Ich schlage vor, ob ein Workshop, Consulting-Sprint, Training, Vortrag oder kombiniertes Enablement-Format sinnvoll ist.",
            ctaPrimary: "Consulting anfragen",
            ctaSecondary: "Business Consulting ansehen",
        }
        : {
            badge: "Selected proof projects",
            title: "Project practice behind IT and business training.",
            intro: "This selection shows practical work across software, AI, research, digital learning formats and education partner contexts. It demonstrates that technical topics are taught from implementation experience, applied problem-solving and didactic translation, not from slide theory alone.",
            reference: "View reference ->",
            jumpLabel: "On this page",
            jumpItems: [["#consulting", "Consulting"], ["#consulting-areas", "Areas"], ["#publications", "Publications"], ["#projects", "Projects"]],
            consulting: {
                eyebrow: "Consulting portfolio",
                title: "IT and business consulting for organisations that need digital capability to become usable.",
                copy: "Alongside training and teaching, I support education providers, companies and institutions with digital planning, decision-making and implementation. The focus is realistic AI use cases, IT and process understanding, responsible tool adoption, learning architecture, automation and business-technology decisions.",
                signals: ["AI strategy and enablement", "IT and process advisory", "Business technology workshops", "Curriculum and learning-path design"],
            },
            areasTitle: "Consulting areas",
            areasCopy: "Consulting can be booked as a workshop, audit, sparring format, concept phase, implementation support or enablement sprint. The goal is not more theory, but a clear next move.",
            areas: [
                {
                    title: "IT Consulting",
                    tag: "Systems, processes and technical orientation",
                    copy: "Support for IT questions, tool selection, software project structure, data flows, automation ideas and technical decision logic between business teams, management and implementation.",
                    points: ["IT process analysis", "Software and tool assessment", "Data, API and automation concepts", "Project structure and technical roadmaps"],
                },
                {
                    title: "AI Consulting",
                    tag: "Use cases, governance and safer adoption",
                    copy: "Advisory work around generative AI, prompt workflows, agentic work patterns, AI governance, risk and privacy questions, and responsible adoption in teams or education programmes.",
                    points: ["AI use-case workshops", "Prompt and workflow design", "Responsible AI guidelines", "AI literacy for leaders and teams"],
                },
                {
                    title: "Business Consulting",
                    tag: "Transformation, New Work and digital education",
                    copy: "Business-oriented consulting for digital transformation, New Work, project management, learning programmes, stakeholder communication and translating technical options into workable organisational decisions.",
                    points: ["Digital business strategy", "Workshop facilitation", "Change and communication logic", "Learning and enablement concepts"],
                },
            ],
            deliverablesTitle: "Typical outcomes",
            deliverables: [
                "Use-case map prioritised by value, risk and feasibility",
                "AI or IT roadmap with realistic next steps",
                "Workshop concept, training path or curriculum for teams and cohorts",
                "Tool, process or automation assessment with recommendations",
                "Guidelines for safer AI use, prompting, data awareness and governance",
                "Decision brief for management, programme owners or education providers",
            ],
            processTitle: "How consulting works with me",
            process: [
                ["01", "Clarify context", "Audience, problem, system landscape, knowledge level and decision pressure are sorted out."],
                ["02", "Structure the problem", "Use cases, risks, dependencies, learning needs and business goals become visible."],
                ["03", "Design the answer", "We shape a roadmap, workshop, learning path, process change or IT working model."],
                ["04", "Secure transfer", "Results are documented so teams, programme owners or decision-makers can continue working."],
            ],
            projectsTitle: "Practice and proof projects",
            projectsCopy: "These examples show the practical foundation: software, research automation, cybersecurity labs, digital learning systems and AI adoption feed directly into advisory work, training and implementation sparring.",
            publicationsTitle: "Publications and academic work",
            publicationsCopy: "These papers provide the academic foundation behind my consulting and training work around generative AI, AI governance, human-machine interaction and cybersecurity awareness.",
            downloadPublication: "Download PDF",
            ctaTitle: "Planning consulting or training with an advisory component?",
            ctaCopy: "Send the topic, audience, current situation and desired outcome. I will suggest whether a workshop, consulting sprint, training, talk or combined enablement format makes sense.",
            ctaPrimary: "Request consulting",
            ctaSecondary: "View business consulting",
        };

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="violet">{copy.badge}</Badge>
                <div className="mt-6 text-center">
                    <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">{copy.title}</h1>
                    <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-300">{copy.intro}</p>
                </div>
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="consulting" className="mt-12 scroll-mt-36 overflow-hidden rounded-[2.1rem] border border-sky-200/18 bg-[radial-gradient(circle_at_15%_0%,rgba(125,211,252,.24),transparent_38%),linear-gradient(135deg,rgba(13,27,54,.95),rgba(7,12,25,.96)_58%,rgba(21,28,48,.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_28px_110px_rgba(0,0,0,.32)] sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
                        <div>
                            <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">{copy.consulting.eyebrow}</div>
                            <h2 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">{copy.consulting.title}</h2>
                            <p className="mt-5 max-w-5xl text-base leading-8 text-slate-200">{copy.consulting.copy}</p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {copy.consulting.signals.map((signal) => (
                                <div key={signal} className="rounded-[1.1rem] border border-white/13 bg-white/[0.075] px-4 py-3 text-sm font-black leading-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.09)]">
                                    {signal}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="consulting-areas" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="violet">{copy.areasTitle}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.areasTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.areasCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {copy.areas.map((area) => (
                            <Card key={area.title}>
                                <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{area.tag}</div>
                                <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white">{area.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{area.copy}</p>
                                <div className="mt-5 grid gap-2">
                                    {area.points.map((point) => (
                                        <span key={point} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{point}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                    <Card className="p-5 sm:p-6">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">{copy.deliverablesTitle}</h2>
                        <div className="mt-6 grid gap-3">
                            {copy.deliverables.map((deliverable) => (
                                <div key={deliverable} className="rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-4 text-sm font-bold leading-7 text-slate-200">
                                    {deliverable}
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card id="consulting-process" className="scroll-mt-36 p-5 sm:p-6">
                        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">{copy.processTitle}</h2>
                        <div className="mt-6 grid gap-4">
                            {copy.process.map(([number, title, description]) => (
                                <div key={number} className="grid gap-4 rounded-[1.2rem] border border-sky-100/12 bg-[#071225]/72 p-4 sm:grid-cols-[auto_1fr]">
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-100/18 bg-sky-100/10 text-sm font-black text-sky-100">{number}</div>
                                    <div>
                                        <h3 className="text-lg font-black text-white">{title}</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                <section id="publications" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.publicationsTitle}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.publicationsTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.publicationsCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {publications.map((publication) => (
                            <a key={publication.key} href={publication.href} download className="soft-link-card group flex min-h-[330px] flex-col p-5 focus:outline-none focus:ring-2 focus:ring-sky-200/80">
                                <div className="mb-5 flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{publication.type[language]}</div>
                                        <div className="mt-2 text-xs font-bold text-zinc-500">{publication.year}</div>
                                    </div>
                                    <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100 transition group-hover:border-sky-100/40">
                                        PDF
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-white">{publication.title[language]}</h3>
                                <p className="mt-4 text-sm leading-7 text-zinc-300">{publication.description[language]}</p>
                                <div className="mt-auto pt-6 text-sm font-black text-sky-200 transition group-hover:text-white">{copy.downloadPublication}</div>
                            </a>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="white">{copy.badge}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.projectsTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.projectsCopy}</p>
                    </div>
                </section>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {selectedProjects.map((project) => (
                        <Card key={project.title}>
                            <Badge tone="white">{project.tag}</Badge>
                            <h2 className="mt-5 text-2xl font-black text-white">{project.title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{project.copy}</p>
                            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-bold text-slate-300">{project.stack}</div>
                            <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-sky-200 transition hover:text-white">{copy.reference}</a>
                        </Card>
                    ))}
                </div>

                <section className="mt-14 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_18%_0%,rgba(186,230,253,.16),transparent_42%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045))] p-6 shadow-[0_28px_105px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-black text-white">{copy.ctaTitle}</h2>
                            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">{copy.ctaCopy}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#contact-options">{copy.ctaPrimary}</Button>
                            <Button to="/training/business-consulting-new-work" variant="secondary">{copy.ctaSecondary}</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
