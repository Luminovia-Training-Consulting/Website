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
        title: "Clear rates for training, consulting and working sessions.",
        intro: "Recurring teaching is priced per 45-minute unit and advisory work by the hour. For a standalone workshop, talk or training day, use the half-day or full-day rate.",
        rateHeading: "Four net rates at a glance",
        eligibility: "Which rate applies?",
        eligibilityCopy: "The teaching-unit rate is for recurring courses. Focused advisory work uses the consulting rate. Half-day and full-day packages include preparation, agreed standard materials and remote live delivery.",
        currencyTitle: "International quotes",
        currencyCopy: "EUR is the reference currency. AUD or USD can be agreed when the proposal is prepared.",
        customTitle: "Planning a larger project?",
        customCopy: "We quote separately for larger curriculum projects, extensive custom materials, multi-week programmes, licensing, travel and implementation work.",
        contact: "Request a quote",
        appointment: "Request an introductory call",
        footnote: "These net rates are for planning. Your proposal confirms the scope, invoice currency, taxes and any additional costs before you book.",
        jumpLabel: "On this page",
        jumpItems: [["#rates", "Rates"], ["#booking-eligibility", "Rate model"], ["#custom", "Custom quote"], ["#currency", "International quotes"]],
    },
    de: {
        badge: "Preise",
        title: "Klare Preise für Training, Beratung und Sessions.",
        intro: "Laufenden Unterricht berechnen wir je 45-Minuten-Einheit, Fachberatung nach Stunden. Für einzelne Workshops, Vorträge und Trainingstage gelten Halb- oder Tagessätze.",
        rateHeading: "Vier Nettopreise auf einen Blick",
        eligibility: "Welcher Satz gilt für Ihr Vorhaben?",
        eligibilityCopy: "Der Unterrichtssatz gilt für laufende Kurse. Fachberatung rechnen wir nach Beratungszeit ab. Im Halb- und Tagessatz sind Vorbereitung, vereinbarte Standardmaterialien und die Live-Durchführung online enthalten.",
        currencyTitle: "Internationale Angebote",
        currencyCopy: "EUR ist die Referenzwährung. Wir können bei der Angebotserstellung AUD oder USD als Rechnungswährung vereinbaren.",
        customTitle: "Planen Sie ein größeres Projekt?",
        customCopy: "Für größere Curricula, umfangreiche individuelle Materialien, mehrwöchige Programme, Lizenzen, Reisen und Umsetzungsarbeit erstellen wir ein eigenes Angebot.",
        contact: "Angebot anfragen",
        appointment: "Erstgespräch anfragen",
        footnote: "Die Nettopreise dienen der Planung. Dauer, Leistungen, Rechnungswährung, Steuern und mögliche Zusatzkosten stehen vor der Buchung im Angebot.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#rates", "Preise"], ["#booking-eligibility", "Preismodell"], ["#custom", "Anfrage"], ["#currency", "International"]],
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const c = content[language];
    const {rates, currencies} = pricingForLanguage(language);

    return (
        <main className="business-page">
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
