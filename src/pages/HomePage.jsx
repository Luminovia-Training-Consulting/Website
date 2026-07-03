import {IMAGES} from "../data/profile.js";
import {useHomeContent} from "../data/homeContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Metric from "../components/Metric.jsx";
import Photo from "../components/Photo.jsx";
import ConversionStrip from "../components/ConversionStrip.jsx";
import StickyBookingBar from "../components/StickyBookingBar.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import DemoVideoSection from "../components/DemoVideoSection.jsx";
import ClientProofSection from "../components/ClientProofSection.jsx";

function HeroVisual() {
    const {t} = useLanguage();
    const brandSignals = [t.home.signalTeaching, t.home.signalWorkflows, t.home.remote];

    return (
        <div className="hero-float relative mx-auto hidden w-full max-w-[520px] lg:block">
            <div className="glass-sheen relative rounded-[3rem] border border-white/12 bg-gradient-to-br from-white/[0.15] via-white/[0.07] to-white/[0.035] p-2 shadow-[0_36px_135px_rgba(0,0,0,.36)] backdrop-blur-2xl transition duration-700 hover:-translate-y-1.5">
                <div className="breathing-halo pointer-events-none absolute -inset-2 rounded-[3.1rem] bg-gradient-to-br from-sky-200/22 via-transparent to-blue-300/18 opacity-75 blur-xl"/>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.1rem] border border-sky-100/14 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,.2),transparent_34%),linear-gradient(145deg,rgba(10,20,40,.96),rgba(7,13,27,.98)_55%,rgba(14,25,48,.96))] p-6">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[length:36px_36px] opacity-45"/>
                    <div className="pointer-events-none absolute -right-12 top-10 h-56 w-56 rounded-full bg-sky-300/15 blur-3xl xl:-right-20"/>
                    <div className="pointer-events-none absolute -bottom-24 left-4 h-64 w-64 rounded-full bg-blue-500/16 blur-3xl"/>
                    <div className="relative flex h-full flex-col justify-center gap-5">
                        <div className="rounded-[1.9rem] border border-white/70 bg-white p-7 shadow-[0_24px_90px_rgba(0,0,0,.32),0_0_56px_rgba(125,211,252,.14)]">
                            <img
                                src={IMAGES.luminoviaLogoFull}
                                alt="Luminovia Training & Consulting logo"
                                className="mx-auto h-auto w-full object-contain"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {brandSignals.map((signal) => (
                                <div key={signal} className="min-h-20 rounded-[1.15rem] border border-sky-100/18 bg-white/[0.075] px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl">
                                    <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-100 via-blue-300 to-amber-300"/>
                                    <div className="mt-3 text-[11px] font-black uppercase leading-4 tracking-[0.1em] text-white">{signal}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.6rem] border border-sky-100/20 bg-[#071225]/90 p-4 shadow-[0_18px_70px_rgba(0,0,0,.42),0_0_38px_rgba(56,189,248,.12)] backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{t.home.mainFocus}</div>
                            <div className="mt-1 text-lg font-black text-white">{t.home.focusValue}</div>
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-xs font-black text-zinc-950">{t.home.remote}</div>
                    </div>
                </div>
            </div>
            <div className="absolute -right-2 top-8 rounded-[1.35rem] border border-sky-100/25 bg-[#071225]/92 p-4 shadow-[0_20px_80px_rgba(0,0,0,.42),0_0_44px_rgba(56,189,248,.15)] backdrop-blur-xl transition duration-700 hover:-translate-y-1 sm:-right-8">
                <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100 drop-shadow-[0_1px_10px_rgba(0,0,0,.8)]">{t.home.learnerRating}</div>
                <div className="mt-1 text-sm font-black text-white drop-shadow-[0_1px_10px_rgba(0,0,0,.85)]">DE / EN · Remote</div>
            </div>
            <div className="absolute -left-10 top-1/3 grid gap-3">
                <span className="signal-pill">{t.home.signalTeaching}</span>
                <span className="signal-pill translate-x-6">{t.home.signalWorkflows}</span>
            </div>
        </div>
    );
}

function MobileHeroSignal() {
    const {t} = useLanguage();
    return (
        <div className="glass-sheen mt-5 grid grid-cols-[5.5rem_1fr] items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.085] p-2 shadow-[0_22px_80px_rgba(0,0,0,.2)] backdrop-blur-2xl lg:hidden">
            <div className="grid aspect-square place-items-center overflow-hidden rounded-[1.35rem] border border-white/70 bg-white p-2 shadow-[0_12px_42px_rgba(0,0,0,.2)]">
                <img src={IMAGES.luminoviaLogoMark} alt="" className="h-full w-full object-contain" loading="eager" fetchPriority="high"/>
            </div>
            <div className="pr-2">
                <div className="text-[11px] font-black uppercase tracking-[0.14em] text-sky-100">{t.home.mainFocus}</div>
                <div className="mt-1 text-sm font-black leading-5 text-white">{t.home.focusValue}</div>
                <div className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-black text-zinc-950">{t.home.remote}</div>
            </div>
        </div>
    );
}

function MiniServiceCard({service, t}) {
    return (
        <Card className="self-start">
            <h3 className="text-xl font-black text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{service.description}</p>
            <div className="mt-5 grid gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.audience}:</strong> {service.audience}</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.format}:</strong> {service.format}</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.duration}:</strong> {service.duration}</div>
            </div>
            <div className="mt-5">
                <Button to="/contact#contact-options" variant="secondary">{t.requestTraining}</Button>
            </div>
        </Card>
    );
}

function BookingFitSection({t}) {
    const {bookingFit, bookingFitTitle, bookingFitCopy, bookingRoutes, popularRoute} = t.home;

    return (
        <section id="booking-fit" className="soft-section scroll-mt-40 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <Badge tone="emerald">{bookingFit}</Badge>
                        <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{bookingFitTitle}</h2>
                    </div>
                    <p className="text-base leading-8 text-zinc-300">{bookingFitCopy}</p>
                </div>
                <div className="grid items-start gap-4 lg:grid-cols-3">
                    {bookingRoutes.map((route, index) => (
                        <Card key={route.title} className={index === 1 ? "self-start border-sky-200/30" : "self-start"}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-sky-100/20 bg-sky-100 text-sm font-black text-slate-950">{String(index + 1).padStart(2, "0")}</div>
                                {index === 1 && <span className="rounded-full border border-sky-100/20 bg-sky-100/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-sky-100">{popularRoute}</span>}
                            </div>
                            <h3 className="mt-5 text-xl font-black text-white">{route.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-zinc-300">{route.copy}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {route.bullets.map((bullet) => (
                                    <span key={String(bullet)} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-sky-100">{bullet}</span>
                                ))}
                            </div>
                            <div className="mt-6">
                                <Button to={route.to} variant={index === 1 ? "primary" : "secondary"}>{route.cta}</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FounderSection() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Unternehmensführung",
            title: "Luminovia wird fachlich und strategisch von Carina Sophie Schoppe geführt.",
            intro: "Das Unternehmen verbindet Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung, Didaktik und Business-Consulting zu klaren Trainings- und Beratungsformaten. Die Marke steht dabei für strukturierte Lieferung, belastbare Inhalte und professionelle Umsetzung für Organisationen.",
            imageAlt: "Carina Sophie Schoppe, CEO und Gründerin von Luminovia Training & Consulting",
            cta: "Unternehmen ansehen",
            points: [
                ["AI | IT | Security", "fachliche Kernbereiche"],
                ["Training + Consulting", "kombinierte Leistungsbereiche"],
                ["DE / EN", "Durchführung auf Deutsch und Englisch"],
                ["Remote-first", "für verteilte Teams und Programme"],
            ],
        }
        : {
            badge: "Company leadership",
            title: "Luminovia is led strategically and professionally by Carina Sophie Schoppe.",
            intro: "The company connects business computer science, AI, cybersecurity, software development, didactics and business consulting into clear training and advisory formats. Luminovia stands for structured delivery, robust content and professional implementation for organisations.",
            imageAlt: "Carina Sophie Schoppe, CEO and founder of Luminovia Training & Consulting",
            cta: "View company",
            points: [
                ["AI | IT | Security", "core capability areas"],
                ["Training + Consulting", "combined service divisions"],
                ["DE / EN", "German and English delivery"],
                ["Remote-first", "for distributed teams and programmes"],
            ],
        };

    return (
        <section id="founder" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-7 rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_15%_0%,rgba(125,211,252,.18),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.045))] p-5 shadow-[0_26px_100px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <Photo src={IMAGES.hero} alt={copy.imageAlt} className="aspect-[4/3] rounded-[1.7rem] bg-white lg:aspect-[5/4]" imgClass="object-[50%_18%]" sizes="(min-width: 1024px) 520px, 100vw"/>
                <div>
                    <Badge tone="cyan">{copy.badge}</Badge>
                    <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{copy.title}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-300">{copy.intro}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {copy.points.map(([value, label]) => (
                            <div key={value} className="rounded-[1.25rem] border border-white/12 bg-white/[0.07] p-4">
                                <div className="text-xl font-black text-white">{value}</div>
                                <div className="mt-1 text-sm leading-6 text-slate-300">{label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-7">
                        <Button to="/about" variant="secondary">{copy.cta}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    const {language, t} = useLanguage();
    const {trustStats, serviceOfferings, faqs} = useHomeContent();
    const featuredServices = serviceOfferings;
    const {
        badge,
        title,
        intro,
        coreOffer,
        coreCopy,
        exploreCapability,
        downloadProfile,
        remote,
        remoteTitle,
        remoteCopy,
        trainingOffers,
        servicesTitle,
        servicesCopy,
        process,
        processTitle,
        processSteps,
        faq,
        faqTitle,
        faqCopy,
        jumpNav,
        jumpNavLabel,
    } = t.home;
    const consultingCopy = language === "de"
        ? {
            badge: "Consulting-Bereich",
            title: "Von klaren Einzelfragen bis zu größeren Digital- und AI-Programmen.",
            copy: "Luminovia unterstützt Bildungsanbieter, Unternehmen und Institutionen mit IT- und Business-Consulting, Konzeptarbeit, Workshops, Projektstruktur, AI-Use-Case-Design und Umsetzungsbegleitung. Kleine Einzelprojekte, Workshop-Sprints und größere Programmvorhaben sind möglich.",
            cards: [
                ["Einzelprojekte", "Klare Fragestellung, kurzer Sprint, konkretes Ergebnis: etwa AI-Use-Case-Map, Prozessanalyse, Tool-Check, Workshop-Konzept oder Entscheidungsvorlage."],
                ["Großprojekte", "Mehrteilige Vorhaben mit Trainingspfad, Consulting-Sprints, Stakeholder-Workshops, Roadmap, Materialien und fortlaufender Umsetzungsbegleitung."],
                ["Preise auf Anfrage", "Consulting und Projektumsetzung werden individuell kalkuliert, abhängig von Umfang, Verantwortung, Materialtiefe, Laufzeit und gewünschtem Ergebnis."],
            ],
            primary: "Consulting anfragen",
            secondary: "Portfolio ansehen",
        }
        : {
            badge: "Consulting division",
            title: "From clear individual questions to larger digital and AI programmes.",
            copy: "Luminovia supports education providers, companies and institutions with IT and business consulting, concept work, workshops, project structure, AI use-case design and implementation support. Small individual projects, workshop sprints and larger programme work are possible.",
            cards: [
                ["Individual projects", "A clear question, short sprint and concrete result: for example an AI use-case map, process analysis, tool check, workshop concept or decision brief."],
                ["Larger programmes", "Multi-part work with a training path, consulting sprints, stakeholder workshops, roadmap, materials and ongoing implementation support."],
                ["Pricing on request", "Consulting and project implementation are quoted individually depending on scope, responsibility, material depth, duration and target outcome."],
            ],
            primary: "Request consulting",
            secondary: "View portfolio",
        };

    return (
        <main className="pb-28 sm:pb-24">
            <SectionJumpNav items={jumpNav} label={jumpNavLabel} fixed/>

            <section className="soft-section relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(56,189,248,.18),transparent_34%),linear-gradient(245deg,rgba(37,99,235,.17),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_42%)]"/>
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
                    <div>
                        <Badge tone="rose">{badge}</Badge>
                        <MobileHeroSignal/>
                        <h1 className="hero-title mt-6 max-w-5xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                            {intro}
                        </p>
                        <div className="glass-sheen mt-7 rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 text-sm leading-7 text-zinc-300 shadow-[0_18px_70px_rgba(0,0,0,.2)] backdrop-blur-2xl">
                            <strong className="text-white">{coreOffer}</strong> {coreCopy}
                        </div>
                        <div className="button-stack mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button to="/contact#appointment">{t.bookTrainingCall}</Button>
                            <Button to="/training" variant="secondary">{exploreCapability}</Button>
                            <Button to="/offers" variant="secondary" showArrow={false}>{downloadProfile}</Button>
                        </div>
                        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {trustStats.map((stat) => <Metric key={stat.label} {...stat} />)}
                        </div>
                    </div>
                    <HeroVisual/>
                </div>
            </section>

            <section id="remote" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-sky-100/16 bg-[linear-gradient(135deg,rgba(56,189,248,.12),rgba(37,99,235,.08),rgba(255,255,255,.035))] p-5 shadow-[0_20px_80px_rgba(37,99,235,.12)] backdrop-blur-xl sm:p-7">
                    <Badge tone="cyan">{remote}</Badge>
                    <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <h2 className="max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{remoteTitle}</h2>
                            <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">{remoteCopy}</p>
                        </div>
                        <div className="button-stack flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Button to="/contact#appointment">{t.bookConsultation}</Button>
                            <Button to="/pricing" variant="secondary">{t.nav.pricing}</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="consulting-projects" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-[2.25rem] border border-sky-100/16 bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,.22),transparent_38%),linear-gradient(135deg,rgba(12,27,54,.94),rgba(7,12,25,.96)_60%,rgba(21,28,48,.94))] p-5 shadow-[0_24px_95px_rgba(0,0,0,.28)] sm:p-7">
                        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                            <div>
                                <Badge tone="violet">{consultingCopy.badge}</Badge>
                                <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{consultingCopy.title}</h2>
                                <p className="mt-5 text-base leading-8 text-zinc-300">{consultingCopy.copy}</p>
                                <div className="button-stack mt-7 flex flex-col gap-3 sm:flex-row">
                                    <Button to="/contact#contact-options">{consultingCopy.primary}</Button>
                                    <Button to="/portfolio#consulting" variant="secondary">{consultingCopy.secondary}</Button>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                {consultingCopy.cards.map(([cardTitle, cardCopy]) => (
                                    <div key={cardTitle} className="rounded-[1.35rem] border border-white/12 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                                        <h3 className="text-lg font-black text-white">{cardTitle}</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">{cardCopy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="orange">{trainingOffers}</Badge>
                            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{servicesTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-zinc-300">{servicesCopy}</p>
                    </div>
                    <div className="grid items-start gap-5 md:grid-cols-3">
                        {featuredServices.map((service) => <MiniServiceCard key={service.title} service={service} t={t}/>)}
                    </div>
                    <div className="mt-7 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:flex-row sm:items-center">
                        <p className="text-sm leading-7 text-zinc-300">{t.assets.copy}</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button to="/offers" variant="secondary">{t.nav.offers}</Button>
                            <Button to="/contact#contact-options">{t.nav.book}</Button>
                        </div>
                    </div>
                </div>
            </section>

            <DemoVideoSection/>

            <BookingFitSection t={t}/>

            <ClientProofSection compact/>

            <section id="process" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <Badge tone="emerald">{process}</Badge>
                        <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{processTitle}</h2>
                    </div>
                    <div className="grid items-start gap-4 md:grid-cols-5">
                        {processSteps.map(([step, stepTitle, copy]) => (
                            <Card key={String(step)}>
                                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-100/20 bg-sky-100 text-base font-black text-slate-950">{step}</div>
                                <h3 className="mt-5 text-lg font-black text-white">{stepTitle}</h3>
                                <p className="mt-3 text-sm leading-7 text-zinc-300">{copy}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                        <Badge tone="rose">{faq}</Badge>
                            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{faqTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-zinc-300">{faqCopy}</p>
                    </div>
                    <div className="grid items-start gap-4 md:grid-cols-2">
                        {faqs.slice(0, 6).map((item, index) => (
                            <Card key={item.q} className="self-start">
                                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-sky-100/20 bg-sky-100 text-sm font-black text-slate-950">{String(index + 1).padStart(2, "0")}</div>
                                <h3 className="text-xl font-black text-white">{item.q}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-7 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:flex-row sm:items-center">
                        <p className="text-sm leading-7 text-zinc-300">{faqCopy}</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button to="/training" variant="secondary">{exploreCapability}</Button>
                            <Button to="/contact#contact-options">{t.bookTrainingCall}</Button>
                        </div>
                    </div>
                </div>
            </section>

            <FounderSection/>

            <div id="contact-cta" className="scroll-mt-40">
                <ConversionStrip/>
            </div>
            <StickyBookingBar/>
        </main>
    );
}
