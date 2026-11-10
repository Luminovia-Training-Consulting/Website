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
        title: "Buchbare Formate für Training und Beratung.",
        intro: "Vergleichen Sie vier Formate für IT, KI und Wirtschaft, vom Fachvortrag bis zum mehrwöchigen Programm. Zu jedem Angebot finden Sie den typischen Umfang, Beispiele und Richtpreise.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#packages", "Pakete"], ["#decision", "Auswahl"], ["#programmes", "Programme"], ["#scope", "Umfang"], ["#proof", "Nachweise"], ["#next", "Anfrage"]],
        packagesTitle: "Vier Formate im Vergleich",
        outcomesLabel: "Mögliche Ergebnisse",
        methods: "Arbeitsweise",
        consulting: "Beratung und Projektbegleitung",
        pricing: "Preise ansehen",
        packagesCopy: "Wir arbeiten überwiegend online mit Teams in Europa, Australien und anderen Regionen. Alle Formate sind auf Deutsch und Englisch möglich.",
        packages: [
            {
                title: "Trainings für IT, KI und Wirtschaft",
                tag: "Training",
                copy: "Wählen Sie Themen von Netzwerktechnik, Softwareentwicklung und KI bis zu BWL, Buchhaltung, Steuergrundlagen, Arbeitsrecht und Datenschutz. Wir stimmen Beispiele und Übungen auf Ihre Gruppe ab.",
                outcomes: ["klare Lernziele", "Übungen mit Bezug zum Arbeitsalltag", "Live-Unterricht online", "wiederverwendbare Materialien"],
                scope: "90 Minuten bis zu mehreren Wochen",
                pricingKey: "training",
                to: "/training#details",
                cta: "Training ansehen",
            },
            {
                title: "KI-, IT- und Prozessberatung",
                tag: "Beratung",
                copy: "Wir prüfen mit Ihnen Software, Infrastruktur und KI-Anwendungen und klären, welche Änderungen an Ihren Geschäftsprozessen sinnvoll sind. Dazu planen wir bei Bedarf die Umsetzung und Weiterbildung.",
                outcomes: ["Übersicht möglicher Einsatzfälle", "Plan für die Umsetzung", "Entscheidungsvorlage", "Nutzungsleitlinien"],
                scope: "Beratungssprint, Workshop, fachliche Prüfung oder laufende Projektbegleitung",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Beratung ansehen",
            },
            {
                title: "Curriculum- und Programmdesign",
                tag: "Bildung",
                copy: "Wir planen Kurse und Workshop-Reihen für Bildungsanbieter. Dazu gehören bei Bedarf Präsentationen, Übungen im Lab, Aufgaben und Lernkontrollen.",
                outcomes: ["Curriculum", "Plan für Live- und Selbstlernphasen", "Praxislabore und Aufgaben", "Qualitätsprüfung"],
                scope: "Kursentwurf, Entwicklung einzelner Materialien oder Planung eines gesamten Programms",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Lerndesign ansehen",
            },
            {
                title: "Fachimpulse und Vorträge",
                tag: "Vorträge",
                copy: "Fachimpulse zu verantwortungsvoller KI, Sicherheitsbewusstsein, Zukunftskompetenzen, KI in der Bildung, Industrie 5.0 und digitaler Transformation.",
                outcomes: ["Impulsvortrag", "Fragerunde", "Führungskräfte-Briefing", "Veranstaltungsformat"],
                scope: "30 bis 90 Minuten, ein halber Tag oder ein Format für Ihre Veranstaltung",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "Vorträge ansehen",
            },
        ],
        scopeTitle: "Was das Angebot umfassen kann",
        scopeCopy: "Im Angebot steht, was wir liefern und was wir gemeinsam erarbeiten. Je nach Auftrag gehören dazu Live-Termine, Übungen, Materialien, ein Plan für die Umsetzung, eine Entscheidungsvorlage oder eine fachliche Prüfung.",
        scopeLabel: "Typischer Umfang",
        priceLabel: "Richtpreis",
        decisionTitle: "Welches Format passt?",
        decision: [
            ["Unser Team soll etwas Neues lernen", "Training oder Workshop", "/training"],
            ["Wir müssen Entscheidungen treffen", "Beratungssprint", "/consulting"],
            ["Wir entwickeln ein Bildungsprogramm", "Curriculum- und Materialentwicklung", "/training#details"],
            ["Wir brauchen einen fachlichen Impuls", "Fachvortrag oder Expertengespräch", "/training/coaching-keynotes-expert-talks"],
            ["Wir wollen Umfang und Budget klären", "Preise und Angebotsanfrage", "/pricing"],
        ],
        programmesTitle: "Größere Programme",
        programmesCopy: "Für ein größeres Vorhaben können wir mehrere Angebote verbinden. Wir klären zuerst das Ziel, planen Training und Materialien und prüfen mit Ihnen, wie die Umsetzung läuft.",
        programmeSteps: [
            ["01", "Auftrag klären", "Zielgruppe, Ausgangslage, Risiken, Zeitfenster und Erfolgskriterien festlegen."],
            ["02", "Format planen", "Wir stimmen Training, Beratung und Materialien auf das Vorhaben ab."],
            ["03", "Durchführen", "Wir führen Live-Termine und Workshops durch, prüfen Ergebnisse und stellen die vereinbarten Materialien bereit."],
            ["04", "Ergebnisse festhalten", "Wir dokumentieren Leitlinien, Lernpfade und die nächsten Schritte für Ihr Team."],
        ],
        proofTitle: "Warum Luminovia?",
        nextTitle: "Was haben Sie vor?",
        nextCopy: "Erzählen Sie uns, was Sie vorhaben, wer beteiligt ist und wann es losgehen soll. Wir besprechen mit Ihnen, welches Format dazu passt.",
        primary: "Kontakt aufnehmen",
        secondary: "Erstgespräch anfragen",
    },
    en: {
        badge: "Offers",
        title: "Clear Luminovia offers for training and consulting.",
        intro: "Compare four formats for IT, AI and business, from a guest talk to a multi-week programme. See what each format can include, what you might take away and how to budget for it.",
        jumpLabel: "On this page",
        jumpItems: [["#packages", "Packages"], ["#decision", "Which format?"], ["#programmes", "Programmes"], ["#scope", "Scope"], ["#proof", "Experience"], ["#next", "Contact"]],
        packagesTitle: "Compare the four formats",
        outcomesLabel: "What you can take away",
        methods: "How we work",
        consulting: "Consulting and project support",
        pricing: "View pricing",
        packagesCopy: "We work primarily online with teams in Europe, Australia and elsewhere. Every format is available in English and German.",
        packages: [
            {
                title: "IT, AI and Business Training",
                tag: "Training",
                copy: "Choose topics from networking, software development and AI to business administration, bookkeeping, tax fundamentals, employment law and data protection. We tailor the examples and exercises to your group.",
                outcomes: ["clear learning goals", "exercises drawn from your work", "live online sessions", "materials and recaps"],
                scope: "90 minutes to several weeks",
                pricingKey: "training",
                to: "/training#details",
                cta: "View training",
            },
            {
                title: "AI, IT and Process Consulting",
                tag: "Consulting",
                copy: "Review software, infrastructure and AI applications and work out how to improve your business processes. We can also help you plan implementation and training.",
                outcomes: ["use-case map", "roadmap", "decision brief", "guidelines"],
                scope: "short consulting engagement, workshop, review or ongoing project support",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "View consulting",
            },
            {
                title: "Curriculum & Programme Design",
                tag: "Education",
                copy: "We plan courses and workshop series for education providers. That can include slides, practical labs, exercises and ways to check progress.",
                outcomes: ["curriculum", "plan for live and self-paced learning", "labs and tasks", "quality check"],
                scope: "course outline, development of selected materials or a full programme plan",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Explore learning design",
            },
            {
                title: "Expert Sessions & Talks",
                tag: "Talks",
                copy: "Talks on responsible AI, cybersecurity awareness, future skills, AI in education, Industry 5.0 and digital transformation.",
                outcomes: ["guest talk", "Q&A", "executive briefing", "event format"],
                scope: "30 to 90 minutes, half a day or a format tailored to your event",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "View talks",
            },
        ],
        scopeTitle: "What can be included in an offer",
        scopeCopy: "The quote sets out what we’ll provide and what we’ll work on together. That might mean live sessions, exercises, course materials, an implementation plan, a briefing or a project review.",
        scopeLabel: "Typical scope",
        priceLabel: "Planning rates",
        decisionTitle: "Which format fits?",
        decision: [
            ["Our team needs to learn something new", "Training or workshop", "/training"],
            ["We need to make decisions", "Consulting sprint", "/consulting"],
            ["We are building an education programme", "Curriculum and material design", "/training#details"],
            ["We’re planning an event or briefing", "Expert session or talk", "/training/coaching-keynotes-expert-talks"],
            ["We need to work out the scope and budget", "Pricing and quotes", "/pricing"],
        ],
        programmesTitle: "Larger programmes",
        programmesCopy: "For a larger project, we can combine several formats. We start with what you want to achieve, then plan the training and materials and check in as the work progresses.",
        programmeSteps: [
            ["01", "Agree on the goal", "We discuss who’s involved, what could get in the way, the timing and how we’ll tell if the programme is working."],
            ["02", "Plan the work", "We agree on the mix of training, consulting, project support and materials."],
            ["03", "Delivery", "We run the live sessions, review the work and prepare materials people can use on their own."],
            ["04", "Write up the results", "We document guidelines, learning paths and the next steps for your team."],
        ],
        proofTitle: "Why Luminovia?",
        nextTitle: "What are you planning?",
        nextCopy: "Tell us what you’re planning, who’s involved and when you’d like to start. We’ll talk through which format suits the work.",
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
        <main className="business-page" data-business-section="offers">
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
