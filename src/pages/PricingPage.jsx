import {PROFILE} from "../data/profile.js";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

const content = {
    en: {
        badge: "Pricing",
        title: "Clear pricing guidance for training, teaching and talks.",
        intro: "These are net starting rates for planning conversations. Final pricing depends on audience, preparation effort, duration, materials, delivery format and booking scope.",
        currencyNote: "Prices are planning values, not fixed quotes. EUR is the reference currency; AUD and USD values can be discussed for international bookings.",
        unit: "Teaching unit",
        cards: [
            {
                title: "Funded vocational education / AZAV-style programmes",
                price: "from $65",
                suffix: "per 45-minute teaching unit",
                copy: "For publicly funded German vocational education, AZAV-style measures, retraining cohorts and structured long-form course delivery.",
                details: ["Net starting price", "Remote live teaching", "Suitable for longer funded course blocks", "Quoted by timetable and scope"],
            },
            {
                title: "Corporate training and non-funded education",
                price: "from $120",
                suffix: "per hour as planning average",
                copy: "For companies, teams, universities, non-funded education providers and organisations booking practical IT, cybersecurity or digital business training.",
                details: ["Net starting price", "Workshops, live training or course modules", "Custom materials can be scoped separately", "Quoted by audience and outcome"],
            },
            {
                title: "Talks, keynotes and expert sessions",
                price: "from $1,200",
                suffix: "per talk / keynote",
                copy: "For individual talks, conferences, expert sessions, leadership briefings or special event formats. Pricing depends strongly on audience, topic, preparation depth, event visibility and time-zone requirements.",
                details: ["Net starting price", "Short impulse talks or custom event formats", "Remote-first delivery from Brisbane", "Quoted by topic and preparation depth"],
            },
            {
                title: "Consulting and project implementation",
                price: "on request",
                suffix: "for individual projects or larger programmes",
                copy: "For IT and business consulting, implementation support, use-case workshops, roadmaps, curriculum programmes and larger digital enablement projects.",
                details: ["Scoped individually", "Single projects or major programmes", "Consulting sprints and implementation support", "Proposal after fit check"],
            },
        ],
        customTitle: "Need something outside these ranges?",
        customCopy: "For curriculum design, multi-week delivery, blended learning, advisory work, bundled training programmes or special event formats, please request an individual quote.",
        contact: "Request pricing",
        appointment: "Book a pricing call",
        eligibility: {
            eyebrow: "Pricing scope",
            title: "These rates apply to education-related bookings.",
            copy: "The listed orientation prices are for education providers, academies, universities, corporate training and professional learning contexts. Consulting, implementation support, larger programmes and special scopes are quoted individually.",
            points: ["AZAV-style and funded education", "Corporate training and professional learning", "Consulting and project work on request"],
        },
        footnote: "All prices are indicative net starting values, not binding offers. Special preparation, licensing, materials, VAT/tax handling or third-party platform requirements may affect the final quote.",
        jumpLabel: "On this page",
        jumpItems: [["#booking-eligibility", "Booking fit"], ["#rates", "Rates"], ["#currency", "Currencies"], ["#custom", "Custom quote"]],
        currencyTitle: "Planning prices in EUR, AUD and USD.",
        currencyCopy: "Currency figures are orientation values for planning conversations. The final invoice currency, tax handling and exchange-rate logic are confirmed in the proposal.",
    },
    de: {
        badge: "Preise",
        title: "Klare Preisorientierung für Training, Lehre und Vorträge.",
        intro: "Die folgenden Angaben sind Netto-Ab-Preise für Planungsgespräche. Die finale Kalkulation hängt von Zielgruppe, Vorbereitung, Dauer, Materialien, Format und Buchungsumfang ab.",
        currencyNote: "EUR ist die Referenzwährung. AUD- und USD-Werte können für internationale Buchungen als Planungswerte geklärt werden.",
        unit: "Unterrichtseinheit",
        cards: [
            {
                title: "AZAV / bildungsgeförderter Bereich",
                price: "ab 50 EUR",
                suffix: "pro 45-Minuten-Unterrichtseinheit",
                copy: "Für AZAV-Kontexte, bildungsgeförderte Maßnahmen, Umschulungen, Weiterbildungen und strukturierte Kursdurchführung im deutschen geförderten Bildungsbereich.",
                details: ["Netto-Ab-Preis", "Remote-Live-Unterricht", "Geeignet für längere geförderte Kursblöcke", "Kalkulation nach Zeitplan und Umfang"],
            },
            {
                title: "Corporate-, Firmentraining und nicht geförderte Bildung",
                price: "ab 75 EUR",
                suffix: "pro 45-Minuten-Unterrichtseinheit",
                copy: "Für Unternehmen, Teams, Hochschulen und Bildungsanbieter, die praxisnahes Training zu IT, Cybersecurity oder digitaler Arbeit buchen.",
                details: ["Netto-Ab-Preis", "Workshops, Live-Training oder Kursmodule", "Materialien werden separat kalkuliert", "Kalkulation nach Zielgruppe und Ergebnis"],
            },
            {
                title: "Vorträge, Keynotes und Fachimpulse",
                price: "ab 1.000 EUR",
                suffix: "pro Vortrag / Keynote",
                copy: "Für Vorträge, Konferenzen, Fachimpulse oder Briefings. Der Preis richtet sich nach Zielgruppe, Thema, Vorbereitung, Gruppengröße und Veranstaltungsrahmen.",
                details: ["Netto-Ab-Preis", "Impulsvortrag oder individuelles Eventformat", "Remote-first aus Brisbane", "Kalkulation nach Thema und Vorbereitung"],
            },
            {
                title: "Beratung und Projektbegleitung",
                price: "auf Anfrage",
                suffix: "für Einzelprojekte oder größere Programme",
                copy: "Für digitale Vorhaben, Prozess- und Bedarfsanalysen, Lernarchitektur, Umsetzungsbegleitung und größere Programme.",
                details: ["Individuell kalkuliert", "Einzelprojekte oder Programme", "Beratung und Umsetzungsbegleitung", "Angebot nach Erstgespräch"],
            },
        ],
        customTitle: "Andere Situation oder größerer Umfang?",
        customCopy: "Für Curriculum Design, mehrwöchige Durchführung, Blended Learning, Beratung, Paketbuchungen oder besondere Eventformate bitte ein individuelles Angebot anfragen.",
        contact: "Preise anfragen",
        appointment: "Preisgespräch buchen",
        eligibility: {
            eyebrow: "Buchungshinweis",
            title: "Diese Preise gelten für bildungsbezogene Buchungen.",
            copy: "Die aufgeführten Orientierungspreise beziehen sich auf Bildungsanbieter, Akademien, Hochschulen, Corporate Training, Firmentraining und professionelle Weiterbildungskontexte. Consulting, Umsetzungsbegleitung, größere Programme oder Sonderumfänge werden individuell kalkuliert.",
            points: ["AZAV und bildungsgeförderter Bereich", "Firmentraining und professionelle Weiterbildung", "Beratung und Projektarbeit auf Anfrage"],
        },
        footnote: "Alle Preise sind unverbindliche Netto-Ab-Preise und keine bindenden Angebote. Besondere Vorbereitung, Lizenzen, Materialien, Umsatzsteuer-/Steuerfragen oder Plattformanforderungen können das finale Angebot beeinflussen.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#booking-eligibility", "Buchungsfit"], ["#rates", "Preise"], ["#currency", "Währungen"], ["#custom", "Anfrage"]],
        currencyTitle: "Planungspreise in EUR, AUD und USD.",
        currencyCopy: "Die Währungsangaben sind Orientierungswerte für Planungsgespräche. Rechnungswährung, Steuerlogik und Wechselkursbasis werden im Angebot geklärt.",
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const copy = content[language];
    const {currencies} = businessOfferingsForLanguage(language);

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={copy.badge}
                    title={copy.title}
                    copy={copy.intro}
                    actions={<><Button to="/contact#contact-options">{copy.contact}</Button><Button href={PROFILE.appointmentSchedule} variant="secondary">{copy.appointment}</Button></>}
                    visual={<TrustRail items={[
                        {icon: "€", title: "EUR", copy: language === "de" ? "Planungswerte für Deutschland" : "German planning values"},
                        {icon: "$", title: "AUD / USD", copy: language === "de" ? "Internationale Planungswerte" : "International planning values"},
                        {icon: "?", title: language === "de" ? "Individuelle Angebote" : "Scoped offers", copy: language === "de" ? "Projekte und Programme nach Scope" : "Projects and programmes quoted individually"},
                        {icon: "B2B", title: language === "de" ? "B2B Scope" : "B2B scope", copy: language === "de" ? "Budgetklarheit vor Angebot" : "Budget clarity before proposal"},
                    ]}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <p className="mt-8 rounded-[1rem] border border-sky-100/16 bg-sky-100/[0.07] p-4 text-sm leading-7 text-slate-300">{copy.currencyNote}</p>
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="booking-eligibility" className="mt-10 scroll-mt-36 overflow-hidden rounded-[2rem] border border-sky-200/24 bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,.25),transparent_38%),linear-gradient(135deg,rgba(14,35,66,.96),rgba(7,13,27,.94)_58%,rgba(20,28,54,.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.13),0_30px_120px_rgba(0,0,0,.34),0_0_70px_rgba(56,189,248,.08)] sm:p-8">
                    <div className="grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-end">
                        <div>
                            <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">{copy.eligibility.eyebrow}</div>
                            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">{copy.eligibility.title}</h2>
                            <p className="mt-5 max-w-5xl text-base leading-8 text-slate-200">{copy.eligibility.copy}</p>
                        </div>
                        <div className="grid gap-3">
                            {copy.eligibility.points.map((point) => (
                                <div key={point} className="rounded-[1.1rem] border border-white/13 bg-white/[0.075] px-4 py-3 text-sm font-black leading-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.09)]">
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="rates" className="mt-14 grid scroll-mt-36 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {copy.cards.map((item) => (
                        <Card key={item.title} className="pricing-rate-card self-start">
                            <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{copy.unit}</div>
                            <h2 className="mt-4 text-2xl font-black text-white">{item.title}</h2>
                            <div className="price-chip mt-6 rounded-[1.4rem] border border-white/12 bg-white/[0.08] p-4">
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

                <section id="currency" className="mt-14 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="cyan">{language === "de" ? "Währungen" : "Currencies"}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.currencyTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.currencyCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {currencies.map((item) => (
                            <Card key={item.title} className="pricing-currency-card p-5 sm:p-6">
                                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                    {[["EUR", item.eur], ["AUD", item.aud], ["USD", item.usd]].map(([currency, value]) => (
                                        <div key={currency} className="rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4">
                                            <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{currency}</div>
                                            <div className="mt-2 text-sm font-black leading-6 text-white">{value}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-5 text-sm leading-7 text-slate-300">{item.note}</p>
                            </Card>
                        ))}
                    </div>
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
