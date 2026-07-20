import {PROFILE} from "../data/profile.js";
import {pricingForLanguage} from "../data/pricing.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

const content = {
    en: {
        badge: "Pricing",
        title: "Clear rates for training, consulting and working sessions.",
        intro: "Luminovia uses four transparent net rates: recurring teaching by 45-minute unit, consulting by hour, and fixed half-day or full-day session packages.",
        currencyNote: "EUR is the reference currency. AUD or USD can be agreed in the proposal without publishing exchange-rate values that may become outdated.",
        customTitle: "Need something outside these ranges?",
        customCopy: "Larger curriculum projects, extensive custom material production, multi-week programmes, licensing, travel or implementation responsibility receive a scoped proposal before work begins.",
        contact: "Request pricing",
        appointment: "Book a pricing call",
        eligibility: {
            eyebrow: "Pricing scope",
            title: "The rate follows the way the work is delivered.",
            copy: "The teaching-unit rate is intended for recurring course delivery. Focused advisory work uses the consulting rate. Standalone workshops, training days, talks and intensive sessions use the half-day or full-day package rate.",
            points: ["EUR 55 per 45-minute teaching unit", "EUR 100 per 60 minutes of consulting", "EUR 500 half day / EUR 1,000 full day"],
        },
        footnote: "All prices are net planning rates, not binding offers. The proposal confirms the exact duration, deliverables, invoice currency, tax treatment and any additional costs before booking.",
        jumpLabel: "On this page",
        jumpItems: [["#booking-eligibility", "Rate model"], ["#rates", "Rates"], ["#currency", "International quotes"], ["#custom", "Custom quote"]],
        currencyTitle: "EUR reference rates, international quotes on request.",
        currencyCopy: "AUD and USD amounts are calculated from the EUR reference when the proposal is prepared. This keeps international quotes current and avoids misleading fixed exchange-rate figures.",
    },
    de: {
        badge: "Preise",
        title: "Klare Preise für Training, Beratung und Sessions.",
        intro: "Luminovia arbeitet mit vier transparenten Netto-Sätzen: Unterricht je 45-Minuten-Einheit, Beratung je Stunde sowie festen Halb- und Tagessätzen.",
        currencyNote: "EUR ist die Referenzwährung. AUD oder USD werden im Angebot vereinbart, ohne schnell veraltende feste Wechselkurswerte zu veröffentlichen.",
        customTitle: "Andere Situation oder größerer Umfang?",
        customCopy: "Größere Curriculum-Projekte, umfangreiche individuelle Materialproduktion, mehrwöchige Programme, Lizenzen, Reisen oder Umsetzungsverantwortung werden vor Beginn als klar abgegrenztes Projekt angeboten.",
        contact: "Preise anfragen",
        appointment: "Preisgespräch buchen",
        eligibility: {
            eyebrow: "Buchungshinweis",
            title: "Der Preis richtet sich nach der Durchführungsform.",
            copy: "Der Unterrichtssatz gilt für laufende Kursdurchführung. Fokussierte Fachberatung wird nach Beratungszeit abgerechnet. Einzelne Workshops, Trainingstage, Vorträge und intensive Sessions nutzen den Halb- oder Tagessatz.",
            points: ["55 EUR je 45-Minuten-Unterrichtseinheit", "100 EUR je 60 Minuten Beratung", "500 EUR Halbtag / 1.000 EUR Tag"],
        },
        footnote: "Alle Preise sind Netto-Planungswerte und keine bindenden Angebote. Das Angebot bestätigt Dauer, Leistungen, Rechnungswährung, steuerliche Behandlung und mögliche Zusatzkosten vor der Buchung.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#booking-eligibility", "Preismodell"], ["#rates", "Preise"], ["#currency", "International"], ["#custom", "Anfrage"]],
        currencyTitle: "EUR-Referenzpreise, internationale Angebote auf Anfrage.",
        currencyCopy: "AUD- und USD-Beträge werden bei Angebotserstellung aus dem EUR-Referenzwert berechnet. So bleiben internationale Angebote aktuell und enthalten keine irreführenden festen Wechselkurswerte.",
    },
};

export default function PricingPage() {
    const {language} = useLanguage();
    const copy = content[language];
    const {rates, currencies} = pricingForLanguage(language);

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={copy.badge}
                    title={copy.title}
                    copy={copy.intro}
                    actions={<><Button to="/contact#contact-options">{copy.contact}</Button><Button href={PROFILE.appointmentSchedule} variant="secondary">{copy.appointment}</Button></>}
                    visual={<TrustRail items={[
                        {icon: "45", title: language === "de" ? "55 EUR / 45 Min." : "EUR 55 / 45 min", copy: language === "de" ? "Laufende Kursdurchführung" : "Recurring course delivery"},
                        {icon: "60", title: language === "de" ? "100 EUR / 60 Min." : "EUR 100 / 60 min", copy: language === "de" ? "Consulting und Fachberatung" : "Consulting and advisory"},
                        {icon: "1/2", title: language === "de" ? "500 EUR Halbtag" : "EUR 500 half day", copy: language === "de" ? "Vorbereitung und Materialien inklusive" : "Preparation and materials included"},
                        {icon: "1", title: language === "de" ? "1.000 EUR Tag" : "EUR 1,000 full day", copy: language === "de" ? "Vorbereitung und Materialien inklusive" : "Preparation and materials included"},
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
                    {rates.map((item) => (
                        <Card key={item.title} className="pricing-rate-card self-start">
                            <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{item.label}</div>
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
