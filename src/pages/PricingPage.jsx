import {pricingForLanguage} from "../data/pricing.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const tones = ["mint", "lilac", "yellow", "coral"];

const content = {
    en: {
        badge: "Pricing",
        title: "Clear rates for training and consulting.",
        intro: "For regular courses, we charge per 45-minute lesson. Consulting is billed by the hour. For a one-off workshop, talk or training day, see the half-day and full-day rates.",
        rateHeading: "Four net rates at a glance",
        eligibility: "What do the half-day and full-day rates cover?",
        eligibilityCopy: "The half-day and full-day rates cover preparation, the standard materials we agree on and the live online session.",
        currencyTitle: "International quotes",
        currencyCopy: "The rates shown are in euros. We can agree to invoice in Australian or US dollars when we prepare your quote.",
        customTitle: "Planning a larger project?",
        customCopy: "We quote separately for larger curriculum projects, extensive custom materials, multi-week programmes, licensing, travel and implementation work.",
        contact: "Request a quote",
        appointment: "Request an introductory call",
        footnote: "Use these net rates to plan your budget. Before you book, your quote sets out what’s included, the invoice currency, taxes and any extra costs.",
        jumpLabel: "On this page",
        jumpItems: [["#rates", "Rates"], ["#booking-eligibility", "What’s included"], ["#custom", "Custom quote"], ["#currency", "International quotes"]],
    },
    de: {
        badge: "Preise",
        title: "Klare Preise für Training und Beratung.",
        intro: "Bei laufenden Kursen rechnen wir in Einheiten von 45 Minuten ab. Fachberatung berechnen wir pro Stunde. Für einzelne Workshops, Vorträge und Trainingstage gibt es Halb- und Tagessätze.",
        rateHeading: "Vier Nettopreise auf einen Blick",
        eligibility: "Was ist im Halb- und Tagessatz enthalten?",
        eligibilityCopy: "Im Halb- und Tagessatz sind die Vorbereitung, die vereinbarten Standardmaterialien und der Live-Termin online enthalten.",
        currencyTitle: "Internationale Angebote",
        currencyCopy: "Die Preise sind in Euro angegeben. Bei der Angebotserstellung können wir eine Rechnung in australischen oder US-Dollar vereinbaren.",
        customTitle: "Planen Sie ein größeres Projekt?",
        customCopy: "Für größere Curricula, umfangreiche individuelle Materialien, mehrwöchige Programme, Lizenzen, Reisen und Umsetzungsarbeit erstellen wir ein eigenes Angebot.",
        contact: "Angebot anfragen",
        appointment: "Erstgespräch anfragen",
        footnote: "Die Nettopreise helfen Ihnen bei der Budgetplanung. Im Angebot stehen Dauer, Leistungen, Rechnungswährung, Steuern und mögliche Zusatzkosten.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#rates", "Preise"], ["#booking-eligibility", "Enthaltene Leistungen"], ["#custom", "Anfrage"], ["#currency", "International"]],
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {rates, currencies} = pricingForLanguage(language);

    return (
        <main className="business-page" data-business-section="pricing">
            <PageHero
                label={c.badge}
                title={c.title}
                copy={c.intro}
                actions={<><a href="#rates" className="business-link">{c.rateHeading}<span aria-hidden="true">↓</span></a><Button to="/contact#contact-options" variant="secondary">{c.contact}</Button></>}
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="rates">
                    <div className="business-heading"><h2>{c.rateHeading}</h2></div>
                    <div className="business-grid business-grid--two">
                        {rates.map((rate, index) => (
                            <article key={rate.id} className="business-panel business-stack" data-tone={tones[index]}>
                                <p className="business-kicker">{rate.label}</p>
                                <h3>{rate.title}</h3>
                                <div>
                                    <div className="business-price">{rate.price}</div>
                                    <p>{rate.suffix}</p>
                                </div>
                                <p>{rate.copy}</p>
                                <ul className="business-list">
                                    {rate.details.map((detail) => <li key={detail}>{detail}</li>)}
                                </ul>
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
                            <Button to="/contact#contact-options">{c.contact}</Button>
                            <Button to="/contact#appointment" variant="secondary">{c.appointment}</Button>
                        </div>
                    </section>
                </div>

                <section id="currency">
                    <div className="business-heading"><h2>{c.currencyTitle}</h2><p>{c.currencyCopy}</p></div>
                    <div className="business-accordion">
                        {currencies.map((rate) => (
                            <details key={rate.title}>
                                <summary>{rate.title}</summary>
                                <div>
                                    <dl className="business-facts business-currency">
                                        <div><dt>EUR</dt><dd>{rate.eur}</dd></div>
                                        <div><dt>AUD</dt><dd>{rate.aud}</dd></div>
                                        <div><dt>USD</dt><dd>{rate.usd}</dd></div>
                                    </dl>
                                    <p>{rate.note}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}
