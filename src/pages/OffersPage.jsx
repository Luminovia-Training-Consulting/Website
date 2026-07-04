import {Link} from "react-router-dom";
import {useLanguage} from "../i18n.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {PROFILE} from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

const content = {
    de: {
        badge: "Angebote",
        title: "Klare Luminovia-Angebote fuer Training, Consulting und digitale Umsetzung.",
                intro: "Diese Seite sortiert, was konkret gebucht werden kann: Live-Training, Consulting-Sprints, Projektbegleitung, Expert Sessions, Curriculum Design und groessere Enablement-Programme. Ideal, wenn Sie schnell entscheiden wollen, welches Format zur Anfrage passt.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#packages", "Pakete"], ["#decision", "Auswahl"], ["#scope", "Umfang"], ["#programmes", "Programme"], ["#proof", "Nachweise"], ["#next", "Anfrage"]],
        packagesTitle: "Buchbare Pakete",
        packagesCopy: "Jedes Paket kann auf Deutsch oder Englisch remote-first für Europa, Australien und internationale Teams geplant werden.",
        packages: [
            {
                title: "AI & Digital Skills Training",
                tag: "Training",
                copy: "Praxisnahe Workshops und Kurse zu AI Literacy, GenAI, Prompt Engineering, Cybersecurity, Python, SQL, Business IT und digitaler Transformation.",
                outcomes: ["klare Lernziele", "Uebungen und Transfer", "Live-Remote-Durchfuehrung", "Materialien und Recaps"],
                scope: "90 Minuten bis mehrwoechige Kursdurchfuehrung",
                pricing: "ab 50 EUR / 85 AUD / 65 USD je 45-Min.-UE oder ab 100 EUR / 165 AUD / 120 USD je Stunde",
                to: "/training",
                cta: "Training ansehen",
            },
            {
                title: "AI, IT & Business Consulting",
                tag: "Consulting",
                copy: "Beratung fuer Use Cases, Prozesse, Tool-Entscheidungen, AI Governance, Roadmaps, Lernarchitektur und digitale Arbeitsmodelle.",
                outcomes: ["Use-Case-Map", "Roadmap", "Entscheidungsvorlage", "Guidelines"],
                scope: "Consulting-Sprint, Workshop, Review oder laufende Projektbegleitung",
                pricing: "individuell kalkuliert nach Verantwortung, Ergebnis und Laufzeit",
                to: "/consulting",
                cta: "Consulting ansehen",
            },
            {
                title: "Curriculum & Programme Design",
                tag: "Education",
                copy: "Strukturierte Lernpfade, Trainingsprogramme, Workshop-Reihen, Slides, Labs, Lernchecks und Materialien fuer Bildungsanbieter.",
                outcomes: ["Curriculum", "Blended-Learning-Struktur", "Labs und Aufgaben", "Qualitaetscheck"],
                scope: "Konzeptphase, Materialdesign oder komplette Programmarchitektur",
                pricing: "Projektangebot nach Umfang und Materialtiefe",
                to: "/training#details",
                cta: "Details ansehen",
            },
            {
                title: "Expert Sessions & Talks",
                tag: "Talks",
                copy: "Vortraege zu Responsible AI, Cybersecurity Awareness, Future Skills, AI in Bildung, Industry 5.0 und digitaler Transformation.",
                outcomes: ["Impulsvortrag", "Q&A", "Executive Briefing", "Event-Format"],
                scope: "30-90 Minuten, Halbtag oder individuelles Eventformat",
                pricing: "ab 1.000 EUR / 1.650 AUD / 1.200 USD",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "Talks ansehen",
            },
        ],
        scopeTitle: "Was genau im Angebot enthalten sein kann",
        scopeCopy: "Der konkrete Umfang wird vorab gescoped. Je nach Paket koennen Live-Durchfuehrung, Uebungen, Materialien, Roadmaps, Entscheidungsnotizen, Follow-up-Recaps oder Projekt-Reviews enthalten sein.",
        scopeLabel: "Typischer Umfang",
        priceLabel: "Preislogik",
        decisionTitle: "Welches Format passt?",
        decision: [
            ["Wir brauchen Skills im Team", "Training oder Workshop", "/training"],
            ["Wir muessen Entscheidungen treffen", "Consulting-Sprint", "/consulting"],
            ["Wir bauen ein Bildungsprogramm", "Curriculum & Materialdesign", "/training#details"],
            ["Wir brauchen einen starken Impuls", "Expert Session oder Talk", "/training/coaching-keynotes-expert-talks"],
            ["Wir wollen Umfang und Budget klaeren", "Preis- und Fit-Gespraech", "/pricing"],
        ],
        programmesTitle: "Groessere Programme",
        programmesCopy: "Fuer groessere Kunden kann Luminovia mehrere Formate verbinden: Erstberatung, Zielbild, Training, Umsetzungssparring, Materialentwicklung und Review.",
        programmeSteps: [
            ["01", "Scope", "Zielgruppe, Ausgangslage, Risiken, Zeitfenster und Erfolgskriterien klaeren."],
            ["02", "Architecture", "Formatmix aus Training, Consulting, Projektarbeit und Materialdesign planen."],
            ["03", "Delivery", "Live-Sessions, Workshops, Reviews und asynchrone Arbeitsartefakte umsetzen."],
            ["04", "Transfer", "Roadmap, Guidelines, Lernpfade und naechste Schritte dokumentieren."],
        ],
        proofTitle: "Warum Luminovia?",
        nextTitle: "Bereit fuer die naechste Anfrage?",
        nextCopy: "Senden Sie Thema, Zielgruppe, Ziel, Zeitraum und gewünschten Umfang. Danach schlägt Luminovia ein passendes Format vor.",
        primary: "Kontakt aufnehmen",
        secondary: "Termin buchen",
    },
    en: {
        badge: "Offers",
        title: "Clear Luminovia offers for training, consulting and digital implementation.",
        intro: "This page structures what can be booked concretely: live training, consulting sprints, project support, expert sessions, curriculum design and larger enablement programmes. Use it to decide quickly which format fits your request.",
        jumpLabel: "On this page",
        jumpItems: [["#packages", "Packages"], ["#decision", "Choice"], ["#scope", "Scope"], ["#programmes", "Programmes"], ["#proof", "Proof"], ["#next", "Contact"]],
        packagesTitle: "Bookable packages",
        packagesCopy: "Every package can be planned in English or German with remote-first delivery for Europe, Australia and international teams.",
        packages: [
            {
                title: "AI & Digital Skills Training",
                tag: "Training",
                copy: "Practical workshops and courses on AI literacy, GenAI, prompt engineering, cybersecurity, Python, SQL, business IT and digital transformation.",
                outcomes: ["clear learning goals", "exercises and transfer", "remote live delivery", "materials and recaps"],
                scope: "90 minutes to multi-week course delivery",
                pricing: "from EUR 50 / AUD 85 / USD 65 per 45-min unit or EUR 100 / AUD 165 / USD 120 per hour",
                to: "/training",
                cta: "View training",
            },
            {
                title: "AI, IT & Business Consulting",
                tag: "Consulting",
                copy: "Advisory work for use cases, processes, tool decisions, AI governance, roadmaps, learning architecture and digital working models.",
                outcomes: ["use-case map", "roadmap", "decision brief", "guidelines"],
                scope: "consulting sprint, workshop, review or ongoing project accompaniment",
                pricing: "quoted by responsibility, deliverables and timeline",
                to: "/consulting",
                cta: "View consulting",
            },
            {
                title: "Curriculum & Programme Design",
                tag: "Education",
                copy: "Structured learning paths, training programmes, workshop series, slides, labs, checks and materials for education providers.",
                outcomes: ["curriculum", "blended learning structure", "labs and tasks", "quality check"],
                scope: "concept phase, material design or full programme architecture",
                pricing: "project quote by scope and material depth",
                to: "/training#details",
                cta: "View details",
            },
            {
                title: "Expert Sessions & Talks",
                tag: "Talks",
                copy: "Talks on responsible AI, cybersecurity awareness, future skills, AI in education, Industry 5.0 and digital transformation.",
                outcomes: ["impulse talk", "Q&A", "executive briefing", "event format"],
                scope: "30-90 minutes, half-day or custom event format",
                pricing: "from EUR 1,000 / AUD 1,650 / USD 1,200",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "View talks",
            },
        ],
        scopeTitle: "What can be included in an offer",
        scopeCopy: "The concrete scope is agreed upfront. Depending on the package, it can include live delivery, exercises, materials, roadmaps, decision notes, follow-up recaps or project reviews.",
        scopeLabel: "Typical scope",
        priceLabel: "Pricing logic",
        decisionTitle: "Which format fits?",
        decision: [
            ["We need team skills", "Training or workshop", "/training"],
            ["We need to make decisions", "Consulting sprint", "/consulting"],
            ["We are building an education programme", "Curriculum and material design", "/training#details"],
            ["We need a strong impulse", "Expert session or talk", "/training/coaching-keynotes-expert-talks"],
            ["We need scope and budget clarity", "Pricing and fit call", "/pricing"],
        ],
        programmesTitle: "Larger programmes",
        programmesCopy: "For larger clients, Luminovia can combine several formats: discovery, target state, training, implementation sparring, material development and review.",
        programmeSteps: [
            ["01", "Scope", "Clarify audience, current situation, risks, timing and success criteria."],
            ["02", "Architecture", "Plan the mix of training, consulting, project support and material design."],
            ["03", "Delivery", "Run live sessions, workshops, reviews and asynchronous artefacts."],
            ["04", "Transfer", "Document roadmap, guidelines, learning paths and next steps."],
        ],
        proofTitle: "Why Luminovia?",
        nextTitle: "Ready for the next request?",
        nextCopy: "Send topic, audience, goal, timing and desired scope. Luminovia will suggest the right format.",
        primary: "Contact Luminovia",
        secondary: "Book appointment",
    },
};

export default function OffersPage() {
    const {language} = useLanguage();
    const {trustSignals} = useSiteContent();
    const {consultingModels, methods} = businessOfferingsForLanguage(language);
    const copy = content[language];

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={copy.badge}
                    title={copy.title}
                    copy={copy.intro}
                    actions={<><Button to="/contact#contact-options">{copy.primary}</Button><Button to="/training" variant="secondary">{language === "de" ? "Training ansehen" : "View training"}</Button></>}
                    visual={<TrustRail items={[
                        {icon: "01", title: "Training", copy: "Workshops, courses and skills programmes"},
                        {icon: "02", title: "Consulting", copy: "Sprints, reviews and decision support"},
                        {icon: "03", title: "Programme design", copy: "Curriculum, labs and learning journeys"},
                    ]}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="packages" className="mt-12 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="blue">{copy.packagesTitle}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.packagesTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.packagesCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {copy.packages.map((item) => (
                            <Card key={item.title}>
                                <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{item.tag}</div>
                                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">{item.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{item.copy}</p>
                                <div className="mt-5 grid gap-2">
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm leading-6 text-slate-200"><strong className="text-sky-100">{copy.scopeLabel}:</strong> {item.scope}</div>
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm leading-6 text-slate-200"><strong className="text-sky-100">{copy.priceLabel}:</strong> {item.pricing}</div>
                                </div>
                                <div className="mt-5 grid gap-2">
                                    {item.outcomes.map((outcome) => (
                                        <span key={outcome} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{outcome}</span>
                                    ))}
                                </div>
                                <Button to={item.to} variant="secondary">{item.cta}</Button>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="decision" className="mt-16 scroll-mt-36">
                    <Badge tone="cyan">{copy.decisionTitle}</Badge>
                    <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.decisionTitle}</h2>
                    <div className="mt-8 grid gap-3">
                        {copy.decision.map(([need, answer, to]) => (
                            <Link key={need} to={to} className="group grid gap-3 rounded-[1.35rem] border border-white/12 bg-white/[0.065] p-4 transition hover:border-sky-200/35 hover:bg-white/[0.10] sm:grid-cols-[1fr_auto] sm:items-center">
                                <span className="text-lg font-black text-white">{need}</span>
                                <span className="rounded-full border border-sky-100/18 bg-sky-100/10 px-4 py-2 text-sm font-black text-sky-100 transition group-hover:bg-sky-100/16">{answer}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section id="scope" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="violet">{language === "de" ? "Umfang" : "Scope"}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.scopeTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.scopeCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                        <Card className="p-5 sm:p-6">
                            <h3 className="text-3xl font-black text-white">{language === "de" ? "Consulting und Projektbegleitung" : "Consulting and project accompaniment"}</h3>
                            <div className="mt-6 grid gap-4">
                                {consultingModels.map((model) => (
                                    <div key={model.title} className="rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4">
                                        <h4 className="text-lg font-black text-white">{model.title}</h4>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">{model.meaning}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card className="p-5 sm:p-6">
                            <h3 className="text-3xl font-black text-white">{language === "de" ? "Methodik" : "Methods"}</h3>
                            <div className="mt-6 grid gap-3">
                                {methods.map(([title, description]) => (
                                    <div key={title} className="rounded-[1.15rem] border border-sky-100/12 bg-[#071225]/72 p-4">
                                        <h4 className="text-base font-black text-sky-100">{title}</h4>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </section>

                <section id="programmes" className="mt-16 scroll-mt-36 overflow-hidden rounded-[2.1rem] border border-sky-200/18 bg-[radial-gradient(circle_at_15%_0%,rgba(125,211,252,.24),transparent_38%),radial-gradient(circle_at_92%_12%,rgba(245,158,11,.17),transparent_38%),linear-gradient(135deg,rgba(13,27,54,.95),rgba(7,12,25,.96)_58%,rgba(21,28,48,.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_28px_110px_rgba(0,0,0,.32)] sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">{copy.programmesTitle}</div>
                            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">{copy.programmesTitle}</h2>
                            <p className="mt-5 text-base leading-8 text-slate-200">{copy.programmesCopy}</p>
                        </div>
                        <div className="grid gap-4">
                            {copy.programmeSteps.map(([number, title, text]) => (
                                <div key={number} className="grid gap-4 rounded-[1.2rem] border border-white/12 bg-white/[0.075] p-4 sm:grid-cols-[auto_1fr]">
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-100/24 bg-amber-100/12 text-sm font-black text-amber-100">{number}</div>
                                    <div>
                                        <h3 className="text-lg font-black text-white">{title}</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="proof" className="mt-16 scroll-mt-36">
                    <Badge tone="emerald">{copy.proofTitle}</Badge>
                    <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.proofTitle}</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {trustSignals.map((signal) => (
                            <Card key={signal.title}>
                                <h3 className="text-xl font-black text-white">{signal.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{signal.copy}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="next" className="mt-16 scroll-mt-36 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_18%_0%,rgba(186,230,253,.16),transparent_42%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045))] p-6 shadow-[0_28px_105px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-black text-white">{copy.nextTitle}</h2>
                            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">{copy.nextCopy}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#contact-options">{copy.primary}</Button>
                            <Button href={PROFILE.appointmentSchedule} variant="secondary">{copy.secondary}</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
