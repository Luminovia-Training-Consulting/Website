import {Link} from "react-router-dom";
import {useLanguage} from "../i18n.jsx";
import {pricingForLanguage} from "../data/pricing.js";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const tones = ["lilac", "mint", "yellow", "coral"];

const content = {
    de: {
        badge: "Angebote",
        title: "Vier Formate für Training und Beratung.",
        intro: "Vergleichen Sie Leistungen und Nettorichtpreise für IT, KI und Wirtschaft. Die Formate reichen vom kurzen Fachvortrag bis zum längeren Projekt.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#packages", "Formate"], ["#programmes", "Programme"], ["#proof", "Referenzen"], ["#next", "Anfrage"]],
        packagesTitle: "Leistungen und Richtpreise",
        compare: "Formate vergleichen",
        outcomeLabel: "Mögliches Ergebnis",
        pricing: "Alle Preise und Leistungen ansehen",
        packagesCopy: "Alle Formate sind auf Deutsch und Englisch buchbar. Wir arbeiten überwiegend online.",
        packages: [
            {
                title: "Trainings für IT, KI und Wirtschaft",
                tag: "Training",
                copy: "Für Teams und Lerngruppen, die eine konkrete Aufgabe üben oder ein Fachgebiet vertiefen möchten. Die Beispiele richten sich nach dem Thema und dem Vorwissen.",
                outcome: "Übungen mit Bezug zum Arbeitsalltag und Unterlagen für die weitere Praxis.",
                scope: "90 Minuten bis zu mehreren Wochen",
                pricingKey: "training",
                to: "/training#details",
                cta: "Trainingskatalog öffnen",
            },
            {
                title: "KI-, IT- und Prozessberatung",
                tag: "Beratung",
                copy: "Für Entscheidungen über Software, Infrastruktur, KI-Anwendungen oder Geschäftsprozesse. Wir vergleichen Optionen und planen bei Bedarf die Umsetzung.",
                outcome: "Eine Entscheidungsvorlage, ein Umsetzungsplan oder konkrete Nutzungsleitlinien.",
                scope: "Beratungssprint, Workshop, fachliche Prüfung oder laufende Projektbegleitung",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Beratung ansehen",
            },
            {
                title: "Curriculum- und Programmdesign",
                tag: "Bildung",
                copy: "Für Bildungsanbieter und interne Weiterbildungsteams, die einen Kurs oder eine Workshop-Reihe entwickeln.",
                outcome: "Ein Lehrplan mit Lernzielen, Übungen und einem Ablauf für Live- und Selbstlernphasen.",
                scope: "Kursentwurf, Entwicklung einzelner Materialien oder Planung eines gesamten Programms",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Kursentwicklung ansehen",
            },
            {
                title: "Fachimpulse und Vorträge",
                tag: "Vorträge",
                copy: "Für Veranstaltungen und interne Lerntage, etwa zu verantwortungsvoller KI, IT-Sicherheit, Industrie 5.0 oder digitaler Transformation.",
                outcome: "Ein Vortrag, eine Fragerunde oder ein Briefing für Ihre Zielgruppe.",
                scope: "30 bis 90 Minuten, ein halber Tag oder ein Format für Ihre Veranstaltung",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "Vorträge ansehen",
            },
        ],
        scopeLabel: "Typischer Umfang",
        priceLabel: "Richtpreis netto",
        programmesTitle: "Mehrere Formate verbinden",
        programmesCopy: "Für längere Vorhaben verbinden wir Training, Beratung und Materialentwicklung. Im Angebot halten wir fest, welche Leistungen wir übernehmen, wann die Termine stattfinden und was Ihr Team erhält.",
        proofTitle: "Erfahrung in der Lehre",
        proofCopy: "Die Referenzen reichen von IT-Weiterbildung bei CBW Hamburg bis zu KI-Zertifizierungstrainings für Fast Lane.",
        proofLink: "Referenzen ansehen",
        nextTitle: "Was haben Sie vor?",
        nextCopy: "Schildern Sie uns Ihr Ziel, die Zielgruppe und den gewünschten Zeitraum. Gemeinsam finden wir ein passendes Format.",
        primary: "Angebot anfragen",
        secondary: "Erstgespräch anfragen",
    },
    en: {
        badge: "Offers",
        title: "Compare training and consulting formats.",
        intro: "Choose from a guest talk, a workshop or a longer project in IT, AI and business. Compare what each format includes and what to budget for.",
        jumpLabel: "On this page",
        jumpItems: [["#packages", "Formats"], ["#programmes", "Programmes"], ["#proof", "References"], ["#next", "Enquire"]],
        packagesTitle: "Services and rates",
        compare: "Compare formats",
        outcomeLabel: "Example outcome",
        pricing: "See all rates and what’s included",
        packagesCopy: "Every format is available in English and German. We work primarily online.",
        packages: [
            {
                title: "IT, AI and Business Training",
                tag: "Training",
                copy: "For teams and learners who want to practise a task or go deeper into a subject. We tailor examples to the topic and the group’s experience.",
                outcome: "Exercises drawn from your work and materials you can use afterwards.",
                scope: "90 minutes to several weeks",
                pricingKey: "training",
                to: "/training#details",
                cta: "Browse the training catalogue",
            },
            {
                title: "AI, IT and Process Consulting",
                tag: "Consulting",
                copy: "For decisions about software, infrastructure, AI applications or business processes. We compare options and can help you plan implementation.",
                outcome: "A decision brief, an implementation plan or guidelines for using a tool.",
                scope: "short consulting engagement, workshop, review or ongoing project support",
                pricingKey: "consulting",
                to: "/consulting",
                cta: "Explore consulting options",
            },
            {
                title: "Curriculum & Programme Design",
                tag: "Education",
                copy: "For education providers and in-house training teams developing a course or workshop series.",
                outcome: "A curriculum with objectives, exercises and a plan for live and self-paced learning.",
                scope: "course outline, development of selected materials or a full programme plan",
                pricingKey: "education",
                to: "/training/curriculum-design-blended-learning",
                cta: "Explore course development",
            },
            {
                title: "Expert Sessions & Talks",
                tag: "Talks",
                copy: "For events and in-house training days. Topics include responsible AI, IT security, Industry 5.0 and digital transformation.",
                outcome: "A guest talk, Q&A or briefing tailored to your audience.",
                scope: "30 to 90 minutes, half a day or a format tailored to your event",
                pricingKey: "talks",
                to: "/training/coaching-keynotes-expert-talks",
                cta: "View talks",
            },
        ],
        scopeLabel: "Typical scope",
        priceLabel: "Net planning rate",
        programmesTitle: "Combine formats for a larger programme",
        programmesCopy: "For longer projects, we can combine training, consulting and materials development. Your quote sets out what we’ll provide, when the sessions take place and what your team will receive.",
        proofTitle: "Teaching experience",
        proofCopy: "Our references include IT training at CBW Hamburg and AI certification courses for Fast Lane.",
        proofLink: "View references",
        nextTitle: "What are you planning?",
        nextCopy: "Tell us what you want to achieve, who it’s for and when you’d like to start. We’ll find a format that fits.",
        primary: "Request a quote",
        secondary: "Request an introductory call",
    },
};

export default function OffersPage() {
    const {language} = useLanguage();
    const {offerPricing} = pricingForLanguage(language);
    const c = content[language];

    return (
        <main className="business-page" data-business-section="offers">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<><Button to="/contact#contact-options">{c.primary}</Button><a href="#packages" className="business-link">{c.compare}<span aria-hidden="true">↓</span></a></>}
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="packages" aria-labelledby="offer-formats-title">
                    <div id="decision" className="business-heading"><h2 id="offer-formats-title">{c.packagesTitle}</h2><p>{c.packagesCopy}</p></div>
                    <div className="business-grid business-grid--two">
                        {c.packages.map((offer, index) => (
                            <article key={offer.title} className="business-panel business-stack business-package" data-tone={tones[index]}>
                                <p className="business-kicker">{offer.tag}</p>
                                <h3>{offer.title}</h3>
                                <p>{offer.copy}</p>
                                <dl className="business-facts">
                                    <div><dt>{c.priceLabel}</dt><dd>{offerPricing[offer.pricingKey]}</dd></div>
                                    <div><dt>{c.scopeLabel}</dt><dd>{offer.scope}</dd></div>
                                    <div><dt>{c.outcomeLabel}</dt><dd>{offer.outcome}</dd></div>
                                </dl>
                                <Link to={offer.to} className="business-link">{offer.cta}<span aria-hidden="true">↗</span></Link>
                            </article>
                        ))}
                    </div>
                    <div className="lumo-action-row mt-5">
                        <Button to="/pricing#rates" variant="secondary">{c.pricing}</Button>
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
                    primary={<Button to="/contact#contact-options">{c.primary}</Button>}
                    secondary={<Button to="/contact#appointment" variant="secondary">{c.secondary}</Button>}
                />
            </div>
        </main>
    );
}
