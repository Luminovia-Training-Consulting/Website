import LegalLayout from "../components/LegalLayout.jsx";
import {useLanguage} from "../i18n.jsx";

const terms = {
    en: [
        "Payment is due by the date stated on the invoice. Please use the invoice number as the payment reference.",
        "Prices and invoices use the currency stated in the proposal or invoice. Published EUR rates are planning references; AUD or USD may be agreed for international engagements.",
        "Australian GST and other taxes are applied where legally required. The proposal or invoice confirms the applicable tax treatment.",
        "Training materials, documentation and other deliverables remain the intellectual property of Luminovia Training & Consulting unless agreed otherwise in writing. Clients receive a non-exclusive licence for the internal business or learning purpose stated in the engagement. Resale, publication, redistribution or commercial training delivery requires prior written consent.",
        "Cancellations, postponements or changes should be communicated as early as possible. Reasonable fees may apply to preparation already completed, reserved delivery time or work already performed.",
        "Invoice queries must be raised in writing within 7 days of the invoice date.",
        "Luminovia provides professional training and consulting with reasonable care. The client remains responsible for operational, legal and organisational decisions and for implementing advice, tools or recommendations in its own environment.",
    ],
    de: [
        "Zahlungen sind bis zu dem auf der Rechnung genannten Datum fällig. Bitte verwenden Sie die Rechnungsnummer als Verwendungszweck.",
        "Es gilt die im Angebot oder auf der Rechnung ausgewiesene Währung. Veröffentlichte EUR-Preise dienen als Planungsgrundlage; für internationale Aufträge können AUD oder USD vereinbart werden.",
        "Australische GST und andere Steuern werden berechnet, soweit dies gesetzlich erforderlich ist. Angebot oder Rechnung weisen die jeweils geltende steuerliche Behandlung aus.",
        "Trainingsmaterialien, Dokumentationen und weitere Arbeitsergebnisse bleiben geistiges Eigentum von Luminovia Training & Consulting, sofern nichts anderes schriftlich vereinbart wurde. Auftraggeber erhalten ein nicht ausschließliches Nutzungsrecht für den vereinbarten internen Geschäfts- oder Lernzweck. Weiterverkauf, Veröffentlichung, Weitergabe oder kommerzielle Trainingsdurchführung bedürfen der vorherigen schriftlichen Zustimmung.",
        "Absagen, Verschiebungen oder Änderungen sollen so früh wie möglich mitgeteilt werden. Für bereits erbrachte Vorbereitung, reservierte Durchführungszeit oder geleistete Arbeit können angemessene Kosten anfallen.",
        "Rückfragen zu Rechnungen müssen innerhalb von 7 Tagen nach Rechnungsdatum schriftlich gestellt werden.",
        "Luminovia erbringt Training und Consulting mit professioneller Sorgfalt. Die Verantwortung für betriebliche, rechtliche und organisatorische Entscheidungen sowie die Umsetzung von Empfehlungen, Werkzeugen oder Maßnahmen im eigenen Umfeld verbleibt beim Auftraggeber.",
    ],
};

const bankAccounts = {
    en: [
        {title: "German bank account", rows: [["Bank", "C24 Bank"], ["IBAN", "DE95 5002 4024 2924 9764 37"], ["BIC", "DEFFDEFFXXX"]]},
        {title: "Australian bank account", rows: [["Bank", "Commonwealth Bank of Australia"], ["BSB", "062-948"], ["Account number", "7329 9001"]]},
    ],
    de: [
        {title: "Deutsches Bankkonto", rows: [["Bank", "C24 Bank"], ["IBAN", "DE95 5002 4024 2924 9764 37"], ["BIC", "DEFFDEFFXXX"]]},
        {title: "Australisches Bankkonto", rows: [["Bank", "Commonwealth Bank of Australia"], ["BSB", "062-948"], ["Kontonummer", "7329 9001"]]},
    ],
};

export default function TermsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Geschäftsbedingungen",
            title: "Geschäfts- und Zahlungsbedingungen.",
            intro: "Diese Bedingungen gelten für Rechnungen, Trainings, Consulting, Lernmaterialien, Dokumentation und zugehörige Leistungen von Luminovia Training & Consulting, sofern nichts anderes schriftlich vereinbart wurde.",
            termsTitle: "Leistungs- und Zahlungsbedingungen",
            bankTitle: "Bankinformationen",
        }
        : {
            badge: "Terms & Conditions",
            title: "Terms & Conditions and payment information.",
            intro: "These terms apply to invoices, training, consulting, learning materials, documentation and related services provided by Luminovia Training & Consulting unless otherwise agreed in writing.",
            termsTitle: "Invoice and service terms",
            bankTitle: "Bank information",
        };

    return (
        <LegalLayout label={copy.badge} title={copy.title} intro={copy.intro}>
            <section className="legal-section">
                <h2>{copy.termsTitle}</h2>
                <ol className="legal-terms">
                    {terms[language].map((term) => <li key={term}>{term}</li>)}
                </ol>
            </section>
            <section className="legal-section">
                <h2>{copy.bankTitle}</h2>
                <div className="legal-bank-grid">
                    {bankAccounts[language].map(({title, rows}) => (
                        <div key={title}>
                            <h3>{title}</h3>
                            <dl>
                                {rows.map(([label, value]) => (
                                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>
            </section>
        </LegalLayout>
    );
}
