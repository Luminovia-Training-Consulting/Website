import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
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
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="cyan">{copy.badge}</Badge>
                <div className="mt-6 max-w-5xl">
                    <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">{copy.intro}</p>
                </div>

                <section className="mt-12 grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <Card>
                        <h2 className="text-3xl font-black text-white">{copy.termsTitle}</h2>
                        <div className="mt-6 grid gap-3">
                            {terms[language].map((term) => (
                                <p key={term} className="rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4 text-sm leading-7 text-slate-300">
                                    {term}
                                </p>
                            ))}
                        </div>
                    </Card>

                    <div className="grid gap-5">
                        <Card>
                            <h2 className="text-3xl font-black text-white">{copy.bankTitle}</h2>
                            <div className="mt-6 grid gap-4">
                                {bankAccounts[language].map((bank) => (
                                    <div key={bank.title} className="rounded-[1.35rem] border border-sky-100/16 bg-[#071225]/72 p-4">
                                        <h3 className="text-xl font-black text-white">{bank.title}</h3>
                                        <div className="mt-4 grid gap-2">
                                            {bank.rows.map(([label, value]) => (
                                                <div key={label} className="grid gap-1 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3">
                                                    <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{label}</div>
                                                    <div className="font-bold text-white">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    );
}
