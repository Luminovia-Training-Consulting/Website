import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";

const content = {
    en: {
        badge: "Pricing",
        title: "Transparent starting rates for training, teaching and talks.",
        intro: "The rates below are net starting prices and planning averages for funded vocational education, non-funded education, corporate training and speaking engagements. Final pricing depends on audience, preparation effort, duration, materials, delivery format and booking scope.",
        currencyNote: "English prices are shown as rounded USD planning figures, based on an approximate EUR/USD rate of 1.17. Prices are net starting prices. EUR invoices, VAT/tax handling or local requirements can be discussed individually.",
        unit: "Teaching unit",
        cards: [
            {
                title: "Funded vocational education / AZAV-style programmes",
                price: "from $65",
                suffix: "per 45-minute teaching unit",
                copy: "For publicly funded German vocational education, AZAV-style measures, retraining cohorts and structured long-form course delivery.",
                details: ["Net starting price", "Average around $65 per teaching unit", "Remote live teaching", "Suitable for longer funded course blocks"],
            },
            {
                title: "Corporate training and non-funded education",
                price: "from $120",
                suffix: "per hour as planning average",
                copy: "For companies, teams, universities, non-funded education providers and organisations booking practical AI, IT, cybersecurity or digital business training.",
                details: ["Net starting price", "Average around $120 per hour", "Workshops, live training or course modules", "Custom materials can be quoted separately"],
            },
            {
                title: "Talks, keynotes and expert sessions",
                price: "from $1,200",
                suffix: "per talk / keynote",
                copy: "For individual talks, conferences, expert sessions, leadership briefings or special event formats. Pricing depends strongly on audience, topic, preparation depth, event visibility and time-zone requirements.",
                details: ["Net starting price", "Based on EUR 1,000+ per talk or keynote", "Short impulse talks or custom event formats", "Remote-first delivery from Brisbane for Europe, Australia and the world"],
            },
        ],
        customTitle: "Need something outside these ranges?",
        customCopy: "For curriculum design, multi-week delivery, blended learning, advisory work, bundled training programmes or special event formats, please request an individual quote.",
        contact: "Request pricing",
        appointment: "Book a pricing call",
        footnote: "All prices are indicative net starting values, not binding offers. Travel, special preparation, licensing, materials, VAT/tax handling or third-party platform requirements may affect the final quote.",
        jumpLabel: "On this page",
        jumpItems: [["#rates", "Rates"], ["#custom", "Custom quote"]],
    },
    de: {
        badge: "Preise",
        title: "Transparente Netto-Ab-Preise für Trainings, Lehre und Vorträge.",
        intro: "Die folgenden Preise sind Ab-Preise und verstehen sich netto. Sie dienen als Planungsdurchschnitt für AZAV- beziehungsweise bildungsgeförderte Maßnahmen, nicht geförderte Bildungsangebote, Corporate Training, Firmentraining und Vorträge. Die finale Kalkulation hängt von Zielgruppe, Vorbereitung, Dauer, Materialien, Format und Umfang der Buchung ab.",
        currencyNote: "Alle deutschen Preisangaben sind Netto-Ab-Preise. Umsatzsteuer, Rechnungsstellung, internationale Währungen oder besondere Plattformanforderungen können individuell geklärt werden.",
        unit: "Unterrichtseinheit",
        cards: [
            {
                title: "AZAV / bildungsgeförderter Bereich",
                price: "ab 50 EUR",
                suffix: "pro 45-Minuten-Unterrichtseinheit",
                copy: "Für AZAV-Kontexte, bildungsgeförderte Maßnahmen, Umschulungen, Weiterbildungen und strukturierte Kursdurchführung im deutschen geförderten Bildungsbereich.",
                details: ["Netto-Ab-Preis", "Orientierung: Standard 55 EUR pro Unterrichtseinheit", "Remote-Live-Unterricht", "Geeignet für längere geförderte Kursblöcke"],
            },
            {
                title: "Corporate-, Firmentraining und nicht geförderte Bildung",
                price: "ab 75 EUR",
                suffix: "pro 45-Minuten-Unterrichtseinheit",
                copy: "Für Unternehmen, Teams, Hochschulen, nicht geförderte Bildungsanbieter und Organisationen, die praxisnahes AI-, IT-, Cybersecurity- oder Digital-Business-Training buchen.",
                details: ["Netto-Ab-Preis", "Standardpreis: 100 EUR pro Stunde", "Workshops, Live-Training oder Kursmodule", "Individuelle Materialien separat kalkulierbar"],
            },
            {
                title: "Vorträge, Keynotes und Expert Sessions",
                price: "ab 1.000 EUR",
                suffix: "pro Vortrag / Keynote",
                copy: "Für einzelne Vorträge, Keynotes, Konferenzen, Expert Sessions, Leadership Briefings oder besondere Veranstaltungsformate. Der Preis hängt stark von Zielgruppe, Gruppengröße, Thema, Vorbereitung und Sichtbarkeit der Veranstaltung ab.",
                details: ["Netto-Ab-Preis", "Ab 1.000 EUR je Vortrag oder Keynote", "Impulsvortrag oder individuelles Eventformat", "Remote-first aus Brisbane für Europa, Australien und die Welt"],
            },
        ],
        customTitle: "Andere Situation oder größerer Umfang?",
        customCopy: "Für Curriculum Design, mehrwöchige Durchführung, Blended Learning, Beratung, Paketbuchungen oder besondere Eventformate bitte ein individuelles Angebot anfragen.",
        contact: "Preise anfragen",
        appointment: "Preisgespräch buchen",
        footnote: "Alle Preise sind unverbindliche Netto-Ab-Preise und keine bindenden Angebote. Reiseaufwand, besondere Vorbereitung, Lizenzen, Materialien, Umsatzsteuer-/Steuerfragen oder Plattformanforderungen können das finale Angebot beeinflussen.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#rates", "Preise"], ["#custom", "Anfrage"]],
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const copy = content[language];

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <Badge>{copy.badge}</Badge>
                        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
                        <p className="mt-5 rounded-[1.5rem] border border-sky-100/16 bg-sky-100/[0.07] p-4 text-sm leading-7 text-slate-300">{copy.currencyNote}</p>
                    </div>
                </div>
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="rates" className="mt-14 grid scroll-mt-36 gap-5 lg:grid-cols-3">
                    {copy.cards.map((item) => (
                        <Card key={item.title} className="self-start">
                            <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{copy.unit}</div>
                            <h2 className="mt-4 text-2xl font-black text-white">{item.title}</h2>
                            <div className="mt-6 rounded-[1.4rem] border border-white/12 bg-white/[0.08] p-4">
                                <div className="text-4xl font-black tracking-[-0.04em] text-white">{item.price}</div>
                                <div className="mt-2 text-sm font-bold text-slate-300">{item.suffix}</div>
                            </div>
                            <p className="mt-5 text-sm leading-7 text-slate-300">{item.copy}</p>
                            <div className="mt-5 grid gap-2">
                                {item.details.map((detail) => (
                                    <span key={String(detail)} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{detail}</span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </section>

                <section id="custom" className="mt-14 scroll-mt-36 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_18%_0%,rgba(186,230,253,.16),transparent_42%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045))] p-6 shadow-[0_28px_105px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-black text-white">{copy.customTitle}</h2>
                            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">{copy.customCopy}</p>
                            <p className="mt-4 max-w-4xl text-xs leading-6 text-slate-400">{copy.footnote}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#contact-options">{copy.contact}</Button>
                            <Button href={PROFILE.appointmentSchedule} variant="secondary">{copy.appointment}</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
