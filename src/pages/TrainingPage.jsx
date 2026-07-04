import {Link} from "react-router-dom";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useSiteContent} from "../data/localizedContent.js";
import {topicLinkForLabel, trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import DemoVideoSection from "../components/DemoVideoSection.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";
import {cn} from "../components/utils.js";

function AssetButtons({t}) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/offers" variant="secondary" showArrow={false}>{t.nav.offers}</Button>
            <Button to="/contact#contact-options" variant="secondary" showArrow={false}>{t.nav.book}</Button>
        </div>
    );
}

function ServiceCard({detailLabel, service, t}) {
    const detailLink = topicLinkForLabel(service.title);

    return (
        <Card>
            <h2 className="text-2xl font-black text-white">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            <div className="mt-5 grid gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.audience}:</strong> {service.audience}</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.format}:</strong> {service.format}</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.duration}:</strong> {service.duration}</div>
            </div>
            <div className="mt-5">
                <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{t.serviceLabels.outcomes}</div>
                <div className="mt-3 grid gap-2">
                    {service.outcomes.map((outcome) => <span key={outcome} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{outcome}</span>)}
                </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {detailLink && <Button to={detailLink}>{detailLabel}</Button>}
                <Button to="/contact#contact-options" variant="secondary">{t.requestTraining}</Button>
            </div>
        </Card>
    );
}

export default function TrainingPage() {
    const {language, t} = useLanguage();
    const {coreOffers, trainingTopics, formats, serviceOfferings, audienceCards, trustSignals} = useSiteContent();
    const {durationModels, methods, boundaries} = businessOfferingsForLanguage(language);
    const detailTopics = trainingDetailsForLanguage(language);
    const copy = language === "de"
        ? {
            badge: "Angebote",
            title: "Konkrete Luminovia-Angebote für Training, Consulting und digitale Kompetenz.",
            intro: "Buchbare Remote-Angebote für Bildungsanbieter, Unternehmen, Hochschulen und internationale Teams: Live-Training, Workshops, Consulting-Sprints und Projektbegleitung rund um AI, IT, Cybersecurity und digitale Business-Kompetenz.",
            topics: "Themen",
            areas: "Zentrale Lehrbereiche",
            custom: "Individuelles Thema anfragen",
            formats: "Formate",
            formatsTitle: "Formate, die Luminovia durchführen kann",
            services: "Angebote",
            servicesTitle: "Was Luminovia konkret anbietet",
            detailPages: "Detailseiten",
            detailPagesTitle: "Themen mit klarer Zielgruppe, Inhalt und Durchführungslogik",
            detailPagesCopy: "Die Detailseiten zeigen, für wen ein Thema geeignet ist, welche Formate möglich sind, welche Inhalte behandelt werden und welche Materialien oder Ergebnisse sinnvoll sind.",
            duration: "Umfang",
            durationTitle: "Wie lange ein Training dauern kann und was dabei entsteht.",
            durationCopy: "Luminovia plant Trainings nicht als starre Folienpakete, sondern nach Zielgruppe, Vorwissen, Business-Ziel und benoetigtem Transfer. Ein kurzes Briefing kann reichen; fuer echten Kompetenzaufbau sind Workshop- oder Kursformate sinnvoller.",
            methods: "Methoden",
            methodsTitle: "Arbeitsweise in Training und Enablement.",
            possibleTitle: "Moeglich",
            notIncludedTitle: "Nicht enthalten",
            details: "Details ansehen",
            audiences: "Zielgruppen",
            audiencesTitle: "Professionelle B2B- und Bildungsumgebungen",
            proof: "Vertrauen & Nachweise",
            proofTitle: "Nachweise für zuverlässige Lehre, Trainings- und Consulting-Arbeit",
            consultingTitle: "Consulting, Einzelprojekte und größere Programme",
            consultingCopy: "Training kann mit Beratung und Umsetzung kombiniert werden: AI-Use-Case-Workshops, IT- und Prozessanalyse, Business-Technology-Roadmaps, Curriculum-Design, Enablement-Sprints oder größere mehrteilige Programme. Preise und Umfang erfolgen auf Anfrage.",
            consultingPoints: ["Einzelprojekte", "Großprojekte", "Consulting-Sprints", "Preise auf Anfrage"],
            jumpLabel: "Auf dieser Seite",
            jumpItems: [["#consulting", "Consulting"], ["#duration", "Umfang"], ["#services", "Angebote"], ["#methods", "Methoden"], ["#details", "Details"], ["#topics", "Themen"], ["#formats", "Formate"]],
        }
        : {
            badge: "Angebote",
            title: "Concrete Luminovia offers for training, consulting and digital capability.",
            intro: "Bookable remote offers for education providers, companies, universities and international teams: live training, workshops, consulting sprints and project support around AI, IT, cybersecurity and digital business capability.",
            topics: "Topics",
            areas: "Core teaching areas",
            custom: "Ask for custom topic",
            formats: "Formats",
            formatsTitle: "Formats Luminovia can deliver",
            services: "Services",
            servicesTitle: "What Luminovia offers concretely",
            detailPages: "Detail pages",
            detailPagesTitle: "Topics with clear audience, content and delivery logic",
            detailPagesCopy: "The detail pages show who each topic is for, which formats are possible, what content is covered and which materials or outcomes can be planned.",
            duration: "Scope",
            durationTitle: "How long training can run and what it produces.",
            durationCopy: "Luminovia does not plan training as a fixed slide package. Scope depends on audience, prior knowledge, business goal and required transfer. A short briefing may be enough; real capability building usually needs workshop or course formats.",
            methods: "Methods",
            methodsTitle: "How training and enablement work.",
            possibleTitle: "Possible",
            notIncludedTitle: "Not included",
            details: "View details",
            audiences: "Who Luminovia works with",
            audiencesTitle: "Professional B2B and education-sector environments",
            proof: "Trust & proof",
            proofTitle: "Proof for reliable teaching, training and consulting work",
            consultingTitle: "Consulting, individual projects and larger programmes",
            consultingCopy: "Training can be combined with advisory and implementation work: AI use-case workshops, IT and process analysis, business-technology roadmaps, curriculum design, enablement sprints or larger multi-part programmes. Pricing and scope are available on request.",
            consultingPoints: ["Individual projects", "Large programmes", "Consulting sprints", "Pricing on request"],
            jumpLabel: "On this page",
            jumpItems: [["#consulting", "Consulting"], ["#duration", "Scope"], ["#services", "Services"], ["#methods", "Methods"], ["#details", "Details"], ["#topics", "Topics"], ["#formats", "Formats"]],
        };
    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={copy.badge}
                    title={copy.title}
                    copy={copy.intro}
                    actions={<AssetButtons t={t}/>}
                    visual={<TrustRail items={[
                        {icon: "AI", title: "AI & GenAI", copy: "Workshops, literacy and applied workflows"},
                        {icon: "SEC", title: "Cybersecurity", copy: "Awareness, web security and responsible practice"},
                        {icon: "DATA", title: "Python / SQL / Data", copy: "Hands-on labs and applied analytics"},
                    ]}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="consulting" className="mt-10 scroll-mt-36 rounded-[2rem] border border-sky-200/18 bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,.2),transparent_38%),linear-gradient(135deg,rgba(14,35,66,.94),rgba(7,13,27,.95)_58%,rgba(20,28,54,.94))] p-6 shadow-[0_24px_95px_rgba(0,0,0,.28)] sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{copy.consultingTitle}</h2>
                            <p className="mt-4 max-w-5xl text-base leading-8 text-slate-300">{copy.consultingCopy}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {copy.consultingPoints.map((point) => (
                                    <span key={point} className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-sky-100">{point}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#contact-options">{t.bookConsultation}</Button>
                            <Button to="/consulting" variant="secondary">{language === "de" ? "Consulting ansehen" : "View consulting"}</Button>
                        </div>
                    </div>
                </section>

                <section id="duration" className="mt-14 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="cyan">{copy.duration}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.durationTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.durationCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {durationModels.map((model) => (
                            <Card key={model.title}>
                                <h3 className="text-2xl font-black text-white">{model.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{model.scope}</p>
                                <div className="mt-5 rounded-[1.15rem] border border-sky-100/12 bg-sky-100/[0.07] p-4 text-sm font-bold leading-7 text-sky-50">{model.output}</div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="services" className="mt-14 scroll-mt-36">
                    <div className="mb-7 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="orange">{copy.services}</Badge>
                            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{copy.servicesTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-slate-300">{t.home.servicesCopy}</p>
                    </div>
                    <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {serviceOfferings.map((service) => <ServiceCard key={service.title} detailLabel={copy.details} service={service} t={t}/>)}
                    </div>
                </section>

                <DemoVideoSection className="-mx-4 mt-4 sm:-mx-6 lg:-mx-8"/>

                <section id="methods" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.methods}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.methodsTitle}</h2>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Card shine={false}>
                                <h3 className="text-xl font-black text-white">{copy.possibleTitle}</h3>
                                <div className="mt-4 grid gap-2">
                                    {boundaries.possible.map((item) => <span key={item} className="text-sm leading-6 text-slate-300">{item}</span>)}
                                </div>
                            </Card>
                            <Card shine={false}>
                                <h3 className="text-xl font-black text-white">{copy.notIncludedTitle}</h3>
                                <div className="mt-4 grid gap-2">
                                    {boundaries.notIncluded.map((item) => <span key={item} className="text-sm leading-6 text-slate-300">{item}</span>)}
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {methods.map(([title, description]) => (
                            <Card key={title}>
                                <h3 className="text-2xl font-black text-white">{title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="details" className="mt-16 scroll-mt-36">
                    <div className="mb-7 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="rose">{copy.detailPages}</Badge>
                            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{copy.detailPagesTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-slate-300">{copy.detailPagesCopy}</p>
                    </div>
                    <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {detailTopics.map((topic) => (
                            <Link key={topic.slug} to={`/training/${topic.slug}`} className="group block">
                                <Card className="h-full">
                                    <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">{topic.category}</div>
                                    <h3 className="mt-3 text-2xl font-black text-white transition group-hover:text-sky-100">{topic.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-300">{topic.summary}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                <section id="audiences" className="mt-16 scroll-mt-36">
                    <Badge tone="amber">{copy.audiences}</Badge>
                    <h2 className="mt-4 text-3xl font-black text-white">{copy.audiencesTitle}</h2>
                    <div className="mt-6 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {audienceCards.map((audience) => (
                            <Card key={audience.title}>
                                <h3 className="text-xl font-black text-white">{audience.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{audience.copy}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
                    {coreOffers.map((offer) => (
                        <Card key={offer.title} className={cn("bg-gradient-to-br", offer.gradient)}>
                            <Badge tone="blue">{offer.kicker}</Badge>
                            <h2 className="mt-5 text-2xl font-black text-white">{offer.title}</h2>
                            <p className="mt-3 text-lg font-black text-sky-100">{offer.outcome}</p>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{offer.copy}</p>
                            <div className="mt-7 grid gap-3">
                                {offer.deliverables.map((item) => <div key={String(item)} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">{item}</div>)}
                            </div>
                        </Card>
                    ))}
                </div>

                <section id="proof" className="mt-16 scroll-mt-36">
                    <Badge tone="emerald">{copy.proof}</Badge>
                    <h2 className="mt-4 text-3xl font-black text-white">{copy.proofTitle}</h2>
                    <div className="mt-6 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {trustSignals.map((signal) => (
                            <Card key={signal.title}>
                                <h3 className="text-xl font-black text-white">{signal.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{signal.copy}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="topics" className="mt-16 scroll-mt-36">
                    <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.topics}</Badge>
                            <h2 className="mt-4 text-3xl font-black text-white">{copy.areas}</h2>
                        </div>
                        <Button to="/contact#contact-options" variant="secondary">{copy.custom}</Button>
                    </div>
                    <div className="grid items-start gap-6 lg:grid-cols-4">
                        {trainingTopics.map((topic) => (
                            <Card key={topic.group}>
                                <h2 className="text-2xl font-black text-white">{topic.group}</h2>
                                <div className="mt-5 space-y-3">
                                    {topic.items.map((item) => {
                                        const detailLink = topicLinkForLabel(item);
                                        const className = "block w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-bold leading-6 text-slate-200 transition hover:border-sky-200/40 hover:bg-sky-200/10";

                                        return detailLink
                                            ? <Link key={String(item)} to={detailLink} className={className}>{item}</Link>
                                            : <div key={String(item)} className={className}>{item}</div>;
                                    })}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="formats" className="mt-16 scroll-mt-36">
                    <Badge tone="orange">{copy.formats}</Badge>
                    <h2 className="mt-4 text-3xl font-black text-white">{copy.formatsTitle}</h2>
                    <div className="mt-6 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {formats.map((format) => (
                            <Card key={format.title}>
                                <div className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">{format.label}</div>
                                <h3 className="mt-3 text-2xl font-black text-white">{format.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{format.copy}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
