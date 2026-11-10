import {Link} from "react-router-dom";
import {useLanguage} from "../i18n.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {pricingForLanguage} from "../data/pricing.js";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const tones = ["lilac", "mint", "yellow", "coral"];

const content = {
    de: {
        badge: "Angebote",
        title: "Buchbare Formate für Training, Beratung und digitale Umsetzung.",
        intro: "Vergleichen Sie vier Formate vom Fachvortrag bis zum mehrwöchigen Programm. Zu jedem Angebot finden Sie den typischen Umfang, Beispiele und Richtpreise.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#packages", "Pakete"], ["#decision", "Auswahl"], ["#programmes", "Programme"], ["#scope", "Umfang"], ["#proof", "Nachweise"], ["#next", "Anfrage"]],
        packagesTitle: "Vier Formate im Vergleich",
        outcomesLabel: "Mögliche Ergebnisse",
        methods: "Arbeitsweise",
        consulting: "Beratung und Projektbegleitung",
        pricing: "Preise ansehen",
        packagesCopy: "Jedes Paket kann auf Deutsch oder Englisch remote-first für Europa, Australien und internationale Teams geplant werden.",
        packages: [
            {
                title: "KI- und Digitalkompetenz-Training",
                tag: "Training",
                copy: "Praxisnahe Workshops und Kurse zu KI-Kompetenz, generativer KI, Prompt Engineering, Cybersecurity, Python, SQL, Wirtschaftsinformatik und digitaler Transformation.",
                outcomes: ["klare Lernziele", "Übungen und Transferaufgaben", "Remote-Live-Durchführung", "wiederverwendbare Materialien"],
                scope: "90 Minuten bis mehrwöchige Kursdurchführung",
                pricingKey: "training",
                to: "/training",
                cta: "Training ansehen",
            },
            {
                title: "KI-, IT- und Prozessberatung",
                tag: "Beratung",
                copy: "Beratung zu KI-Anwendungsfällen, Prozessen, Werkzeugauswahl, KI-Governance, Umsetzungsfahrplänen, Lernarchitektur und digitalen Arbeitsmodellen.",
                outcomes: ["Anwendungsfallkarte", "Umsetzungsfahrplan", "Entscheidungsvorlage", "Nutzungsleitlinien"],
                scope: "Beratungssprint, Workshop, fachliche Prüfung oder laufende Projektbegleitung",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Consulting ansehen",
            },
            {
                title: "Curriculum- und Programmdesign",
                tag: "Bildung",
                copy: "Strukturierte Lernpfade, Trainingsprogramme, Workshop-Reihen, Präsentationen, Praxislabore, Lernchecks und Materialien für Bildungsanbieter.",
                outcomes: ["Curriculum", "Blended-Learning-Struktur", "Praxislabore und Aufgaben", "Qualitätsprüfung"],
                scope: "Konzeptphase, Materialentwicklung oder vollständige Programmarchitektur",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Lerndesign ansehen",
            },
            {
                title: "Fachimpulse und Vorträge",
                tag: "Vorträge",
                copy: "Fachimpulse zu verantwortungsvoller KI, Sicherheitsbewusstsein, Zukunftskompetenzen, KI in der Bildung, Industrie 5.0 und digitaler Transformation.",
                outcomes: ["Impulsvortrag", "Fragerunde", "Führungskräfte-Briefing", "Veranstaltungsformat"],
                scope: "30-90 Minuten, Halbtag oder individuelles Eventformat",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "Talks ansehen",
            },
        ],
        scopeTitle: "Was genau im Angebot enthalten sein kann",
        scopeCopy: "Der Leistungsumfang wird vor der Beauftragung verbindlich festgelegt. Je nach Paket umfasst er Live-Durchführung, Übungen, Materialien, Fahrpläne, Entscheidungsnotizen, Ergebniszusammenfassungen oder fachliche Prüfungen.",
        scopeLabel: "Typischer Umfang",
        priceLabel: "Richtpreis",
        decisionTitle: "Welches Format passt?",
        decision: [
            ["Unser Team soll etwas Neues lernen", "Training oder Workshop", "/training"],
            ["Wir müssen Entscheidungen treffen", "Beratungssprint", "/consulting"],
            ["Wir bauen ein Bildungsprogramm", "Curriculum- und Materialentwicklung", "/training#details"],
            ["Wir brauchen einen fachlichen Impuls", "Fachvortrag oder Expertengespräch", "/training/coaching-keynotes-expert-talks"],
            ["Wir wollen Umfang und Budget klären", "Preise und Angebotsanfrage", "/pricing"],
        ],
        programmesTitle: "Größere Programme",
        programmesCopy: "Für größere Vorhaben verbindet Luminovia Beratung, Zielbild, Training, Umsetzungsbegleitung, Materialentwicklung und Auswertung zu einem abgestimmten Programm.",
        programmeSteps: [
            ["01", "Auftrag klären", "Zielgruppe, Ausgangslage, Risiken, Zeitfenster und Erfolgskriterien festlegen."],
            ["02", "Format planen", "Training, Beratung, Projektarbeit und Materialentwicklung sinnvoll verbinden."],
            ["03", "Durchführen", "Live-Termine, Workshops, fachliche Prüfungen und begleitende Arbeitsmaterialien umsetzen."],
            ["04", "Transfer sichern", "Fahrplan, Leitlinien, Lernpfade und nächste Schritte dokumentieren."],
        ],
        proofTitle: "Warum Luminovia?",
        nextTitle: "Was haben Sie vor?",
        nextCopy: "Senden Sie Thema, Zielgruppe, Ziel, Zeitraum und gewünschten Umfang. Danach schlägt Luminovia ein passendes Format vor.",
        primary: "Kontakt aufnehmen",
        secondary: "Erstgespräch anfragen",
    },
    en: {
        badge: "Offers",
        title: "Clear Luminovia offers for training, consulting and digital implementation.",
        intro: "Compare four ways to work with Luminovia, from a guest talk to a training programme. Each format lists its scope, example deliverables and planning rates.",
        jumpLabel: "On this page",
        jumpItems: [["#packages", "Packages"], ["#decision", "Choice"], ["#programmes", "Programmes"], ["#scope", "Scope"], ["#proof", "Proof"], ["#next", "Contact"]],
        packagesTitle: "Compare the four formats",
        outcomesLabel: "Possible deliverables",
        methods: "How we work",
        consulting: "Consulting and project support",
        pricing: "View pricing",
        packagesCopy: "Every package can be planned in English or German with remote-first delivery for Europe, Australia and international teams.",
        packages: [
            {
                title: "AI & Digital Skills Training",
                tag: "Training",
                copy: "Practical workshops and courses on AI literacy, GenAI, prompt engineering, cybersecurity, Python, SQL, business IT and digital transformation - with exercises, transfer tasks and clear learning goals.",
                outcomes: ["clear learning goals", "exercises and transfer", "remote live delivery", "materials and recaps"],
                scope: "90 minutes to multi-week course delivery",
                pricingKey: "training",
                to: "/training",
                cta: "View training",
            },
            {
                title: "AI, IT & Business Consulting",
                tag: "Consulting",
                copy: "Advisory work for use cases, processes, tool decisions, AI governance, roadmaps, learning architecture and digital working models.",
                outcomes: ["use-case map", "roadmap", "decision brief", "guidelines"],
                scope: "consulting sprint, workshop, review or ongoing project accompaniment",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "View consulting",
            },
            {
                title: "Curriculum & Programme Design",
                tag: "Education",
                copy: "Structured learning paths, training programmes, workshop series, slides, labs, checks and materials for education providers.",
                outcomes: ["curriculum", "blended learning structure", "labs and tasks", "quality check"],
                scope: "concept phase, material design or full programme architecture",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Explore learning design",
            },
            {
                title: "Expert Sessions & Talks",
                tag: "Talks",
                copy: "Talks on responsible AI, cybersecurity awareness, future skills, AI in education, Industry 5.0 and digital transformation.",
                outcomes: ["impulse talk", "Q&A", "executive briefing", "event format"],
                scope: "30-90 minutes, half-day or custom event format",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "View talks",
            },
        ],
        scopeTitle: "What can be included in an offer",
        scopeCopy: "The concrete scope is agreed upfront. Depending on the package, it can include live delivery, exercises, materials, roadmaps, decision notes, follow-up recaps or project reviews.",
        scopeLabel: "Typical scope",
        priceLabel: "Planning rates",
        decisionTitle: "Which format fits?",
        decision: [
            ["We need team skills", "Training or workshop", "/training"],
            ["We need to make decisions", "Consulting sprint", "/consulting"],
            ["We are building an education programme", "Curriculum and material design", "/training#details"],
            ["We’re planning an event or briefing", "Expert session or talk", "/training/coaching-keynotes-expert-talks"],
            ["We need scope and budget clarity", "Pricing and quotes", "/pricing"],
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
        nextTitle: "What are you planning?",
        nextCopy: "Send topic, audience, goal, timing and desired scope. Luminovia will suggest the right format.",
        primary: "Contact Luminovia",
        secondary: "Request an introductory call",
    },
};

export default function OffersPage() {
    const {language} = useLanguage();
    const {trustSignals} = useSiteContent();
    const {consultingModels, methods} = businessOfferingsForLanguage(language);
    const {offerPricing} = pricingForLanguage(language);
    const c = content[language];

    return (
        <main className="business-page">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<><a href="#packages" className="business-link">{c.packagesTitle}<span aria-hidden="true">↓</span></a><Button to="/pricing" variant="secondary">{c.pricing}</Button></>}
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="packages">
                    <div className="business-heading"><h2>{c.packagesTitle}</h2><p>{c.packagesCopy}</p></div>
                    <div className="business-grid business-grid--two">
                        {c.packages.map((offer, index) => (
                            <article key={offer.title} className="business-panel business-stack business-package" data-tone={tones[index]}>
                                <p className="business-kicker">{offer.tag}</p>
                                <h3>{offer.title}</h3>
                                <p>{offer.copy}</p>
                                <dl className="business-facts">
                                    <div><dt>{c.scopeLabel}</dt><dd>{offer.scope}</dd></div>
                                    <div><dt>{c.outcomesLabel}</dt><dd>{offer.outcomes.join(" · ")}</dd></div>
                                    <div><dt>{c.priceLabel}</dt><dd>{offerPricing[offer.pricingKey]}</dd></div>
                                </dl>
                                <Link to={offer.to} className="business-link">{offer.cta}<span aria-hidden="true">↗</span></Link>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="decision" className="business-layout business-layout--reverse">
                    <div className="business-heading"><h2>{c.decisionTitle}</h2></div>
                    <ul>
                        {c.decision.map(([need, answer, to]) => (
                            <li key={need} className="business-row">
                                <p>{need}</p>
                                <Link to={to} className="business-link">{answer}<span aria-hidden="true">↗</span></Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="programmes">
                    <div className="business-heading"><h2>{c.programmesTitle}</h2><p>{c.programmesCopy}</p></div>
                    <ol className="business-process">
                        {c.programmeSteps.map(([number, title, description]) => (
                            <li key={number}><span aria-hidden="true">{number}</span><h3>{title}</h3><p>{description}</p></li>
                        ))}
                    </ol>
                </section>

                <section id="scope">
                    <div className="business-heading"><h2>{c.scopeTitle}</h2><p>{c.scopeCopy}</p></div>
                    <div className="business-grid business-grid--two">
                        <div className="business-stack">
                            <h3>{c.consulting}</h3>
                            <div className="business-accordion">
                                {consultingModels.map((model) => (
                                    <details key={model.title}><summary>{model.title}</summary><p>{model.meaning}</p></details>
                                ))}
                            </div>
                        </div>
                        <div className="business-stack">
                            <h3>{c.methods}</h3>
                            <div className="business-accordion">
                                {methods.map(([title, description]) => (
                                    <details key={title}><summary>{title}</summary><p>{description}</p></details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="proof">
                    <div className="business-heading"><h2>{c.proofTitle}</h2></div>
                    <div className="business-index">
                        {trustSignals.map((signal) => (
                            <article key={signal.title}><h3>{signal.title}</h3><p>{signal.copy}</p></article>
                        ))}
                    </div>
                </section>
            </Container>
            <div id="next" className="business-end">
                <CTASection
                    title={c.nextTitle}
                    copy={c.nextCopy}
                    primary={<Button to="/contact#contact-options">{c.primary}</Button>}
                    secondary={<Button to="/contact#appointment" variant="secondary">{c.secondary}</Button>}
                />
            </div>
        </main>
    );
}
