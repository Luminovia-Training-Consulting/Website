import {ArrowDown} from "lucide-react";
import {pricingForLanguage} from "../data/pricing.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const quotePath = "/contact?intent=quote#enquiry";

const content = {
    en: {
        badge: "Pricing",
        title: "Clear rates for training and consulting.",
        intro: "Plan your budget for recurring online courses, specialist consulting or a one-off session.",
        browse: "See net rates",
        rateHeading: "Four net rates at a glance",
        eligibility: "What do the half-day and full-day rates cover?",
        eligibilityCopy: "The half-day and full-day rates cover preparation, the standard materials we agree on and the live online session.",
        currencyTitle: "International quotes",
        currencyCopy: "The rates shown are in euros. We can agree to invoice in Australian or US dollars when we prepare your quote.",
        customTitle: "A quote for your project",
        customCopy: "We quote separately for larger curriculum projects, extensive custom materials, multi-week programmes, licensing, travel and implementation work.",
        contact: "Request a quote",
        appointment: "Request an introductory call",
        footnote: "Your quote confirms scope, dates, taxes, currency and any extra costs before you book.",
        jumpLabel: "On this page",
        jumpItems: [["#rates", "Rates"], ["#booking-eligibility", "What’s included"], ["#custom", "Custom quote"], ["#currency", "International quotes"]],
    },
    de: {
        badge: "Preise",
        title: "Klare Preise für Training und Beratung.",
        intro: "Planen Sie Ihr Budget für laufende Online-Kurse, Fachberatung oder einzelne Termine.",
        browse: "Nettopreise ansehen",
        rateHeading: "Vier Nettopreise auf einen Blick",
        eligibility: "Was ist im Halb- und Tagessatz enthalten?",
        eligibilityCopy: "Im Halb- und Tagessatz sind die Vorbereitung, die vereinbarten Standardmaterialien und der Live-Termin online enthalten.",
        currencyTitle: "Internationale Angebote",
        currencyCopy: "Die Preise sind in Euro angegeben. Bei der Angebotserstellung können wir eine Rechnung in australischen oder US-Dollar vereinbaren.",
        customTitle: "Ein Angebot für Ihr Vorhaben",
        customCopy: "Für größere Curricula, umfangreiche individuelle Materialien, mehrwöchige Programme, Lizenzen, Reisen und Umsetzungsarbeit erstellen wir ein eigenes Angebot.",
        contact: "Angebot anfragen",
        appointment: "Erstgespräch anfragen",
        footnote: "Vor der Buchung bestätigt das Angebot Leistungen, Termine, Steuern, Währung und mögliche Zusatzkosten.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#rates", "Preise"], ["#booking-eligibility", "Enthaltene Leistungen"], ["#custom", "Anfrage"], ["#currency", "International"]],
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {rates} = pricingForLanguage(language);

    return (
        <main className="business-page" data-business-section="pricing">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<>
                    <a className="lumo-button" href="#rates">{c.browse}<ArrowDown size={18} aria-hidden="true"/></a>
                    <Button to={quotePath} variant="secondary">{c.contact}</Button>
                </>}
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="rates">
                    <div className="business-heading"><h2>{c.rateHeading}</h2></div>
                    <div className="business-grid business-grid--two">
                        {rates.map((rate) => (
                            <article key={rate.id} className="business-panel business-stack business-rate">
                                <h3>{rate.title}</h3>
                                <div>
                                    <div className="business-price">{rate.price}</div>
                                    <p>{rate.suffix}</p>
                                </div>
                                <p>{rate.copy}</p>
                            </article>
                        ))}
                    </div>
                    <p className="business-muted mt-4">{c.footnote}</p>
                </section>

                <div className="business-layout">
                    <section id="booking-eligibility" className="business-panel">
                        <div className="business-heading"><h2>{c.eligibility}</h2></div>
                        <p>{c.eligibilityCopy}</p>
                    </section>
                    <section id="custom" className="business-panel business-stack" data-tone="mint">
                        <h2 className="business-h2">{c.customTitle}</h2>
                        <p>{c.customCopy}</p>
                        <div className="lumo-action-row">
                            <Button to={quotePath}>{c.contact}</Button>
                            <Button to="/contact#appointment" variant="secondary">{c.appointment}</Button>
                        </div>
                    </section>
                </div>

                <section id="currency">
                    <div className="business-heading"><h2>{c.currencyTitle}</h2><p>{c.currencyCopy}</p></div>
                </section>
            </Container>
        </main>
    );
}
