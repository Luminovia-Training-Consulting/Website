import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import {useLanguage} from "../i18n.jsx";

const terms = [
    "Payment is due by the date stated on this invoice. Please quote the invoice number as the payment reference when making payment.",
    "Unless otherwise stated, all amounts are expressed in Australian Dollars (AUD).",
    "This invoice has been issued by Luminovia Training & Consulting in accordance with Australian taxation and accounting requirements. GST, where applicable, has been applied in accordance with Australian Goods and Services Tax legislation.",
    "Services, training, consulting, learning materials, documentation, and related deliverables remain the intellectual property of Luminovia Training & Consulting unless otherwise agreed in writing. The client is granted a non-exclusive right to use the provided materials for internal business or learning purposes only. Materials may not be copied, resold, redistributed, published, or used for commercial training delivery without prior written consent.",
    "Any cancellations, postponements, or changes to agreed work should be communicated as early as possible. Where work has already been prepared, delivered, or scheduled, reasonable fees may apply.",
    "Any invoice queries must be raised in writing within 7 days of the invoice date. If no query is raised within this period, the invoice will be treated as accepted.",
    "Luminovia Training & Consulting will take reasonable care in providing professional training and consulting services. However, the client remains responsible for how any advice, training content, tools, or recommendations are implemented within their own organisation.",
    "This invoice has been issued by Luminovia Training & Consulting in accordance with Australian taxation and accounting requirements.",
    "Unless otherwise stated, all amounts are expressed in Australian Dollars (AUD). GST has been applied in accordance with Australian tax legislation where applicable.",
    "Please use the invoice number as your payment reference.",
];

const banks = [
    {
        title: "German Bank",
        rows: [
            ["Bank", "C24 Bank"],
            ["IBAN", "DE95 5002 4024 2924 9764 37"],
            ["BIC", "DEFFDEFFXXX"],
        ],
    },
    {
        title: "Australian Bank",
        rows: [
            ["Bank", "Commonwealth Bank of Australia"],
            ["BSB", "062-948"],
            ["Account Nr", "7329 9001"],
        ],
    },
];

export default function TermsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Terms & Conditions",
            title: "Terms & Conditions und Zahlungsinformationen.",
            intro: "Diese Bedingungen gelten fuer Rechnungen, Trainings, Consulting, Lernmaterialien, Dokumentation und zugehoerige Leistungen von Luminovia Training & Consulting, sofern nichts anderes schriftlich vereinbart wurde.",
            termsTitle: "Rechnungs- und Leistungsbedingungen",
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
                            {terms.map((term) => (
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
                                {banks.map((bank) => (
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
