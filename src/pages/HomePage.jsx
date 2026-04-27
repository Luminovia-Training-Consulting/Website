import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Metric from "../components/Metric.jsx";
import Photo from "../components/Photo.jsx";
import ConversionStrip from "../components/ConversionStrip.jsx";
import StickyBookingBar from "../components/StickyBookingBar.jsx";

function HeroVisual() {
    const {t} = useLanguage();
    return (
        <div className="hero-float relative mx-auto hidden w-full max-w-[520px] lg:block">
            <div className="glass-sheen relative rounded-[3rem] border border-white/12 bg-gradient-to-br from-white/[0.15] via-white/[0.07] to-white/[0.035] p-2 shadow-[0_36px_135px_rgba(0,0,0,.36)] backdrop-blur-2xl transition duration-700 hover:-translate-y-1.5">
                <div className="breathing-halo pointer-events-none absolute -inset-2 rounded-[3.1rem] bg-gradient-to-br from-sky-200/22 via-transparent to-blue-300/18 opacity-75 blur-xl"/>
                <Photo src={IMAGES.hero} alt="Portrait of Carina Sophie Schoppe for AI and IT lecturer profile" className="relative aspect-[4/5] rounded-[2.1rem]" imgClass="object-[50%_25%]" fallbackCopy={t.home.photoFallback} fetchPriority="high" sizes="(min-width: 1024px) 520px, 0px"/>
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
                <div className="mt-1 text-sm font-black text-white drop-shadow-[0_1px_10px_rgba(0,0,0,.85)]">4.7 / 5</div>
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
            <Photo src={IMAGES.headshot} alt="Headshot of Carina Sophie Schoppe" className="aspect-square rounded-[1.35rem]" imgClass="object-[50%_18%]" fallbackCopy={t.home.photoFallback} fetchPriority="high" sizes="88px"/>
            <div className="pr-2">
                <div className="text-[11px] font-black uppercase tracking-[0.14em] text-sky-100">{t.home.mainFocus}</div>
                <div className="mt-1 text-sm font-black leading-5 text-white">{t.home.focusValue}</div>
                <div className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-black text-zinc-950">{t.home.remote}</div>
            </div>
        </div>
    );
}

function AssetButtons({t}) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={PROFILE.lecturerProfile} variant="secondary" download="lecturer.zip" showArrow={false}>{t.assets.lecturerProfile}</Button>
            <Button href={PROFILE.trainingPortfolio} variant="secondary" download="carina-sophie-schoppe-training-portfolio.html" showArrow={false}>{t.assets.trainingPortfolio}</Button>
            <Button href={PROFILE.trainingCatalogue} variant="secondary" download="carina-sophie-schoppe-ai-it-training-catalogue.html" showArrow={false}>{t.assets.trainingCatalogue}</Button>
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

function SalesSignalSection({t}) {
    const {salesSignal, salesSignalTitle, salesSignalCopy, salesSignals} = t.home;

    return (
        <section className="soft-section px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_70px_rgba(0,0,0,.18)] backdrop-blur-xl sm:p-7">
                <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                    <div>
                        <Badge tone="violet">{salesSignal}</Badge>
                        <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{salesSignalTitle}</h2>
                        <p className="mt-4 text-base leading-8 text-zinc-300">{salesSignalCopy}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                        {salesSignals.map((signal) => (
                            <div key={String(signal.title)} className="rounded-[1.45rem] border border-sky-100/14 bg-[#071225]/78 p-4 shadow-[0_14px_48px_rgba(0,0,0,.18)]">
                                <div className="mb-4 h-1 w-10 rounded-full bg-sky-200"/>
                                <h3 className="text-base font-black text-white">{signal.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-zinc-300">{signal.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function JumpNavigation({items, label}) {
    return (
        <nav className="fixed left-0 right-0 top-[4.45rem] z-40 border-b border-white/10 bg-[#070B16]/78 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,.24)] backdrop-blur-2xl sm:px-6 sm:py-4 lg:px-8" aria-label={label}>
            <div className="mx-auto flex max-w-7xl items-center gap-5">
                <span className="hidden shrink-0 text-xs font-black uppercase tracking-[0.16em] text-sky-100 lg:inline">{label}</span>
                <div className="flex min-w-0 flex-1 snap-x gap-3 overflow-x-auto pb-1 [scrollbar-color:rgba(125,211,252,.42)_rgba(255,255,255,.06)] [scrollbar-width:thin]">
                    {items.map(([href, text]) => (
                        <a key={href} href={href} className="shrink-0 snap-start rounded-full border border-white/10 bg-white/[0.065] px-5 py-2.5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-200/40 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200/80">
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default function HomePage() {
    const {t} = useLanguage();
    const {trustStats, serviceOfferings, faqs} = useSiteContent();
    const featuredServices = serviceOfferings.slice(0, 3);
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

    return (
        <main className="pb-28 sm:pb-24">
            <JumpNavigation items={jumpNav} label={jumpNavLabel}/>
            <div className="h-[8.9rem] sm:h-[9.25rem]" aria-hidden="true"/>

            <section className="soft-section relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(56,189,248,.18),transparent_34%),linear-gradient(245deg,rgba(37,99,235,.17),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_42%)]"/>
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
                    <div>
                        <Badge>{badge}</Badge>
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
                            <Button href={PROFILE.lecturerProfile} variant="secondary" download="lecturer.zip" showArrow={false}>{downloadProfile}</Button>
                        </div>
                        <div className="mt-5">
                            <AssetButtons t={t}/>
                        </div>
                        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {trustStats.map((stat) => <Metric key={stat.label} {...stat} />)}
                        </div>
                    </div>
                    <HeroVisual/>
                </div>
            </section>

            <SalesSignalSection t={t}/>

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

            <section id="services" className="soft-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="cyan">{trainingOffers}</Badge>
                            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{servicesTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-zinc-300">{servicesCopy}</p>
                    </div>
                    <div className="grid items-start gap-5 md:grid-cols-3">
                        {featuredServices.map((service) => <MiniServiceCard key={service.title} service={service} t={t}/>)}
                    </div>
                    <div className="mt-7 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:flex-row sm:items-center">
                        <p className="text-sm leading-7 text-zinc-300">{t.assets.copy}</p>
                        <AssetButtons t={t}/>
                    </div>
                </div>
            </section>

            <BookingFitSection t={t}/>

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
                            <Badge tone="cyan">{faq}</Badge>
                            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{faqTitle}</h2>
                        </div>
                        <p className="text-base leading-8 text-zinc-300">{faqCopy}</p>
                    </div>
                    <div className="grid items-start gap-4 md:grid-cols-2">
                        {faqs.slice(0, 10).map((item, index) => (
                            <Card key={item.q} className="self-start">
                                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-sky-100/20 bg-sky-100 text-sm font-black text-slate-950">{String(index + 1).padStart(2, "0")}</div>
                                <h3 className="text-xl font-black text-white">{item.q}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <div id="contact-cta" className="scroll-mt-40">
                <ConversionStrip/>
            </div>
            <StickyBookingBar/>
        </main>
    );
}
