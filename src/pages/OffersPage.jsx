import {ArrowDown} from "lucide-react";
import {Link} from "react-router-dom";
import {useLanguage} from "../i18n.jsx";
import {pricingForLanguage} from "../data/pricing.js";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const quotePath = "/contact?intent=quote#enquiry";

const content = {
    de: {
        badge: "Angebote",
        title: "Vier Formate für Training und Beratung.",
        intro: "Vom Fachvortrag bis zur Projektbegleitung. Finden Sie das passende Format für Ihr Team.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#packages", "Formate"], ["#programmes", "Programme"], ["#proof", "Referenzen"], ["#next", "Anfrage"]],
        packagesTitle: "Leistungen und Richtpreise",
        compare: "Formate vergleichen",
        pricing: "Preisdetails ansehen",
        packagesCopy: "Auf Deutsch oder Englisch. In der Regel live online.",
        sessionCopy: "Die Halb- und Tagessätze enthalten Vorbereitung, vereinbarte Standardmaterialien und den Online-Termin.",
        packages: [
            {
                title: "Training für IT, KI und Wirtschaft",
                copy: "Für Teams und Lerngruppen. Sie üben an Beispielen aus dem Arbeitsalltag und erhalten Unterlagen für die Praxis.",
                scope: "90 Minuten bis mehrere Wochen",
                pricingKey: "training",
                to: "/training#details",
                cta: "Trainingskatalog öffnen",
            },
            {
                title: "KI-, IT- und Prozessberatung",
                copy: "Für Entscheidungen zu Software, Infrastruktur, KI oder Prozessen. Sie erhalten eine Vorlage, Leitlinien oder einen Umsetzungsplan.",
                scope: "Sprint, Workshop, fachliche Prüfung oder Projektbegleitung",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Beratung ansehen",
            },
            {
                title: "Kurs- und Programmentwicklung",
                copy: "Für Bildungsanbieter und Weiterbildungsteams. Sie erhalten Lernziele, Übungen und einen Ablauf für Live- und Selbstlernphasen.",
                scope: "Kursentwurf, Materialien oder Gesamtprogramm",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Kursentwicklung ansehen",
            },
            {
                title: "Fachimpulse und Vorträge",
                copy: "Vorträge, Briefings und Fragerunden für Veranstaltungen und Lerntage. Themen sind verantwortungsvolle KI, IT-Sicherheit, Industrie 5.0 und Digitalisierung.",
                scope: "30 bis 90 Minuten, Halbtag oder nach Absprache",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "Vorträge ansehen",
            },
        ],
        scopeLabel: "Typischer Umfang",
        priceLabel: "Richtpreis netto",
        programmesTitle: "Mehrere Formate verbinden",
        programmesCopy: "Wir kombinieren Training, Beratung und Materialien. Für längere Programme und größere Materialproduktionen erhalten Sie ein Projektangebot mit Umfang, Terminen und Ergebnissen.",
        proofTitle: "Erfahrung in der Lehre",
        proofCopy: "Die Referenzen reichen von IT-Weiterbildung bei CBW Hamburg bis zu KI-Zertifizierungstrainings für Fast Lane.",
        proofLink: "Referenzen ansehen",
        nextTitle: "Was haben Sie vor?",
        nextCopy: "Teilen Sie uns Ziel, Zielgruppe und Zeitraum mit. Gemeinsam finden wir das passende Format.",
        primary: "Angebot anfragen",
        secondary: "Erstgespräch anfragen",
    },
    en: {
        badge: "Offers",
        title: "Compare training and consulting formats.",
        intro: "Find the right format for your team, from a guest talk to longer project support.",
        jumpLabel: "On this page",
        jumpItems: [["#packages", "Formats"], ["#programmes", "Programmes"], ["#proof", "References"], ["#next", "Enquire"]],
        packagesTitle: "Services and rates",
        compare: "Compare formats",
        pricing: "See pricing details",
        packagesCopy: "Available in English or German, usually live online.",
        sessionCopy: "Half-day and full-day rates cover preparation, agreed standard materials and the online session.",
        packages: [
            {
                title: "IT, AI and business training",
                copy: "For teams and learners. Practise with examples from your work and take away materials you can use afterwards.",
                scope: "90 minutes to several weeks",
                pricingKey: "training",
                to: "/training#details",
                cta: "Browse the training catalogue",
            },
            {
                title: "AI, IT and process consulting",
                copy: "For decisions on software, infrastructure, AI or processes. Get a decision brief, practical guidelines or an implementation plan.",
                scope: "Sprint, workshop, review or project support",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Explore consulting options",
            },
            {
                title: "Course and programme design",
                copy: "For education providers and training teams. Get learning objectives, exercises and a plan for live and self-paced learning.",
                scope: "Course outline, materials or full programme",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Explore course development",
            },
            {
                title: "Expert sessions and talks",
                copy: "Talks, briefings and Q&As for events and training days. Topics include responsible AI, IT security, Industry 5.0 and digital transformation.",
                scope: "30 to 90 minutes, half day or as agreed",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "View talks",
            },
        ],
        scopeLabel: "Typical scope",
        priceLabel: "Net planning rate",
        programmesTitle: "Combine formats for a larger programme",
        programmesCopy: "We combine training, consulting and materials. Longer programmes and larger materials projects receive a custom quote with scope, dates and deliverables.",
        proofTitle: "Teaching experience",
        proofCopy: "Our references include IT training at CBW Hamburg and AI certification courses for Fast Lane.",
        proofLink: "View references",
        nextTitle: "What are you planning?",
        nextCopy: "Tell us your goal, audience and timing. We’ll find a format that fits.",
        primary: "Request a quote",
        secondary: "Request an introductory call",
    },
};

export default function OffersPage() {
    const {language} = useLanguage();
    const {offerPricing, sessionPricing} = pricingForLanguage(language);
    const c = content[language];

    return (
        <main className="business-page" data-business-section="offers">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<>
                    <a className="lumo-button" href="#packages">{c.compare}<ArrowDown size={18} aria-hidden="true"/></a>
                    <Button to={quotePath} variant="secondary">{c.primary}</Button>
                </>}
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="packages" aria-labelledby="offer-formats-title">
                    <div id="decision" className="business-heading"><h2 id="offer-formats-title">{c.packagesTitle}</h2><p>{c.packagesCopy}</p></div>
                    <div className="business-grid business-grid--two">
                        {c.packages.map((offer) => (
                            <article key={offer.pricingKey} className="business-panel business-stack business-package">
                                <h3>{offer.title}</h3>
                                <p>{offer.copy}</p>
                                <dl className="business-facts">
                                    <div><dt>{c.priceLabel}</dt><dd>{offerPricing[offer.pricingKey]}</dd></div>
                                    <div><dt>{c.scopeLabel}</dt><dd>{offer.scope}</dd></div>
                                </dl>
                                <Link to={offer.to} className="business-link">{offer.cta}<span aria-hidden="true">↗</span></Link>
                            </article>
                        ))}
                    </div>
                    <div className="business-session-note">
                        <p><strong>{sessionPricing}</strong> {c.sessionCopy}</p>
                        <div className="lumo-action-row">
                            <Button to={quotePath}>{c.primary}</Button>
                            <Link className="business-link" to="/pricing#rates">{c.pricing}<span aria-hidden="true">↗</span></Link>
                        </div>
                    </div>
                </section>

                <div className="business-grid business-grid--two">
                    <section id="programmes" className="business-panel business-stack" aria-labelledby="offer-programmes-title">
                        <div id="scope"><h2 id="offer-programmes-title" className="business-h2">{c.programmesTitle}</h2></div>
                        <p>{c.programmesCopy}</p>
                    </section>
                    <section id="proof" className="business-panel business-stack" aria-labelledby="offer-proof-title">
                        <h2 id="offer-proof-title" className="business-h2">{c.proofTitle}</h2>
                        <p>{c.proofCopy}</p>
                        <Link to="/clients" className="business-link">{c.proofLink}<span aria-hidden="true">↗</span></Link>
                    </section>
                </div>
            </Container>
            <div id="next" className="business-end">
                <CTASection
                    title={c.nextTitle}
                    copy={c.nextCopy}
                    primary={<Button to={quotePath}>{c.primary}</Button>}
                    secondary={<Button to="/contact#appointment" variant="secondary">{c.secondary}</Button>}
                />
            </div>
        </main>
    );
}
