import {IMAGES, PROFILE} from "../data/profile.js";
import {useHomeContent} from "../data/homeContent.js";
import {useSiteContent} from "../data/localizedContent.js";
import {topicLinkForLabel} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import ConversionStrip from "../components/ConversionStrip.jsx";
import Photo from "../components/Photo.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import StickyBookingBar from "../components/StickyBookingBar.jsx";
import {
    CapabilityChip,
    Container,
    GradientText,
    LogoSystemVisual,
    OfferCard,
    ProcessStep,
    ProofCard,
    RouteCard,
    Section,
    SectionHeader,
} from "../components/LuminoviaDesign.jsx";

function copyForLanguage(language) {
    return language === "de"
        ? {
            heroTitle: "AI, IT & Digital Capability Training für moderne Teams",
            heroIntro: "Luminovia entwickelt und liefert praxisnahe Workshops, Trainingsprogramme und Consulting für Organisationen, die nutzbare digitale Kompetenz brauchen: AI, IT, Cybersecurity, Software, Daten, Business Technology und Learning Design.",
            primary: "Discovery Call buchen",
            secondary: "Training ansehen",
            tertiary: "Consulting erkunden",
            visualLabels: ["AI Enablement", "IT & Cybersecurity", "Software & Data", "Business Technology", "Learning Design", "Delivery model", "DE / EN · Remote-first"],
            trustTitle: "Klar positioniert für professionelle Trainings- und Enablement-Anfragen.",
            routesBadge: "Einstieg wählen",
            routesTitle: "Das richtige Format für Ihre Organisation.",
            routesCopy: "Ob fokussierter Workshop, individueller Trainingspfad oder Consulting-Unterstützung: Luminovia strukturiert die Arbeit um Zielgruppe, Kontext und praktische Ergebnisse.",
            routes: [
                {title: "Training & Workshops", copy: "Für Teams, Lernende, Bildungsanbieter und Organisationen, die strukturierte Live-Lernformate brauchen.", bullets: ["AI Literacy", "Cybersecurity", "Software & Data"], cta: "Training ansehen", to: "/training"},
                {title: "Consulting & Enablement", copy: "Für Organisationen, die digitale Ziele in Use Cases, Workflows, Roadmaps oder Lernprogramme übersetzen wollen.", bullets: ["Use-Case Mapping", "Roadmaps", "Workflow Analyse"], cta: "Consulting anfragen", to: "/consulting", featured: true},
                {title: "Custom Programmes", copy: "Für L&D-Teams, Akademien, Hochschulen, Bootcamps und internationale Partner mit mehrteiligen Programmen.", bullets: ["Curriculum", "Blended Learning", "Materialien"], cta: "Programm besprechen", to: "/offers"},
            ],
            offersBadge: "Featured Offers",
            offersTitle: "Buchbare Trainingsangebote mit klarer Zielgruppe, Dauer und Ergebnis.",
            offersCopy: "Die wichtigsten Themen sind so strukturiert, dass Entscheider schnell erkennen, für wen ein Angebot passt, welches Format sinnvoll ist und welche Ergebnisse entstehen.",
            consultingBadge: "Consulting",
            consultingTitle: "Von Einzelfrage bis Digital-Capability-Programm.",
            consultingCopy: "Luminovia unterstützt Organisationen mit fokussierter Beratung, Konzeptarbeit, AI-Use-Case-Design, Prozessanalyse, Trainingsstrategie, Curriculum Design und Umsetzungssparring.",
            consultingCards: [
                ["AI Use-Case Mapping", "Use Cases, Risiken, Datenfragen und menschliche Reviewpunkte strukturiert klären."],
                ["Workflow & Prozessanalyse", "Arbeitsabläufe, Tool-Nutzung, Automatisierungsideen und Engpässe sichtbar machen."],
                ["Digital Capability Roadmap", "Nächste Schritte für Skills, Formate, Materialien und Umsetzung priorisieren."],
                ["Training Strategy", "Lernpfade, Zielgruppenlogik, Materialien und Transferaufgaben sauber planen."],
                ["Curriculum Design", "Module, Labs, Slides, Lernchecks und Blended-Learning-Formate entwickeln."],
                ["Project Support", "Vorhaben mit Scope, Reviewpunkten, Dokumentation und Entscheidungsmaterial begleiten."],
            ],
            processBadge: "Prozess",
            processTitle: "Vom ersten Bedarf zu nutzbarer Kompetenz.",
            proofBadge: "Nachweise",
            proofTitle: "Glaubwürdigkeit ohne erfundene Logos oder Testimonials.",
            founderBadge: "Founder-led expertise",
            founderTitle: "Geführt von Carina Sophie Schoppe, aber klar als Unternehmensmarke aufgebaut.",
            founderCopy: "Luminovia verbindet Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung, Didaktik und praktische Lehre zu professionellen Trainings- und Beratungsformaten. Das persönliche Portfolio bleibt bewusst separat.",
            founderProfile: "Unternehmensprofil ansehen",
            founderPortfolio: "Carina Portfolio öffnen",
            faqBadge: "FAQ",
            finalTitle: "Lassen Sie uns das passende Trainings- oder Consulting-Format entwerfen.",
            finalCopy: "Senden Sie Thema, Zielgruppe, Zeitraum, Sprache und Ziel. Luminovia schlägt ein passendes Workshop-, Consulting- oder Programmformat vor.",
            detail: "Details",
            request: "Anfragen",
            jumpNavLabel: "Zu Abschnitt springen",
            jumpNav: [["#routes", "Formate"], ["#offers", "Angebote"], ["#consulting", "Consulting"], ["#process", "Prozess"], ["#proof", "Nachweise"], ["#founder", "Founder"], ["#faq", "FAQ"], ["#contact-cta", "Kontakt"]],
        }
        : {
            heroTitle: "AI, IT & Digital Capability Training for Modern Teams",
            heroIntro: "Luminovia designs and delivers practical workshops, training programmes and consulting for organisations that need usable digital skills: AI, IT, cybersecurity, software, data, business technology and learning design.",
            primary: "Book discovery call",
            secondary: "View training offers",
            tertiary: "Explore consulting",
            visualLabels: ["AI enablement", "IT & cybersecurity", "Software & data", "Business technology", "Learning design", "Delivery model", "DE / EN · Remote-first"],
            trustTitle: "Positioned for professional training and enablement requests.",
            routesBadge: "Choose your route",
            routesTitle: "Choose the right format for your organisation.",
            routesCopy: "Whether you need a focused workshop, a custom training path or consulting support around digital capability, Luminovia structures the work around your audience, goals and practical outcomes.",
            routes: [
                {title: "Training & Workshops", copy: "For teams, learners, education providers and organisations that need structured live learning.", bullets: ["AI literacy", "Cybersecurity", "Software & data"], cta: "View training", to: "/training"},
                {title: "Consulting & Enablement", copy: "For organisations that need help turning digital goals into practical structures, use cases, workflows or learning programmes.", bullets: ["Use-case mapping", "Roadmaps", "Workflow analysis"], cta: "Request consulting", to: "/consulting", featured: true},
                {title: "Custom Programmes", copy: "For corporate L&D teams, education providers, academies, bootcamps, universities and international partners.", bullets: ["Curriculum", "Blended learning", "Materials"], cta: "Discuss programme", to: "/offers"},
            ],
            offersBadge: "Featured offers",
            offersTitle: "Bookable training offers with clear audience, duration and outcomes.",
            offersCopy: "Core topics are structured so buyers can quickly see who each offer is for, which format makes sense and what participants should be able to do afterwards.",
            consultingBadge: "Consulting",
            consultingTitle: "From individual questions to larger digital capability programmes.",
            consultingCopy: "Luminovia supports organisations with focused consulting, concept work, AI use-case design, process analysis, training strategy, curriculum design and implementation support.",
            consultingCards: [
                ["AI use-case mapping", "Clarify use cases, risks, data questions and human review points."],
                ["Workflow and process analysis", "Make work routines, tool use, automation ideas and bottlenecks visible."],
                ["Digital capability roadmap", "Prioritise next steps for skills, formats, materials and implementation."],
                ["Training strategy", "Plan learning paths, audience logic, materials and transfer tasks."],
                ["Curriculum design", "Design modules, labs, slides, learning checks and blended-learning formats."],
                ["Project support", "Support initiatives with scope, review points, documentation and decision material."],
            ],
            processBadge: "Process",
            processTitle: "From first need to practical capability.",
            proofBadge: "Proof",
            proofTitle: "Credibility without invented logos or testimonials.",
            founderBadge: "Founder-led expertise",
            founderTitle: "Led by Carina Sophie Schoppe, but built as a company brand.",
            founderCopy: "Luminovia connects business information systems, AI, cybersecurity, software development, instructional design and practical teaching into professional training and consulting formats. The personal portfolio stays deliberately separate.",
            founderProfile: "View company profile",
            founderPortfolio: "Open Carina portfolio",
            faqBadge: "FAQ",
            finalTitle: "Let’s design the right training or consulting format for your organisation.",
            finalCopy: "Share your topic, audience, timeframe, language and target outcome. Luminovia will suggest a suitable workshop, consulting sprint or programme structure.",
            detail: "Details",
            request: "Request",
            jumpNavLabel: "Jump to section",
            jumpNav: [["#routes", "Formats"], ["#offers", "Offers"], ["#consulting", "Consulting"], ["#process", "Process"], ["#proof", "Proof"], ["#founder", "Founder"], ["#faq", "FAQ"], ["#contact-cta", "Contact"]],
        };
}

export default function HomePage() {
    const {language, t} = useLanguage();
    const c = copyForLanguage(language);
    const {trustStats, serviceOfferings, faqs} = useHomeContent();
    const {trustSignals} = useSiteContent();
    const featuredOffers = serviceOfferings.slice(0, 8);
    const heroChips = language === "de"
        ? ["AI Enablement", "IT & Cybersecurity", "DE / EN", "Remote-first", "Workshops bis Programme"]
        : ["AI enablement", "IT & cybersecurity", "DE / EN delivery", "Remote-first", "Workshops to programmes"];

    return (
        <main className="pb-28 sm:pb-24">
            <SectionJumpNav items={c.jumpNav} label={c.jumpNavLabel} fixed/>

            <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
                <div className="premium-hero-bg" aria-hidden="true"/>
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
                    <div>
                        <h1 className="hero-title max-w-5xl text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
                            <GradientText>{c.heroTitle}</GradientText>
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg lg:text-xl lg:leading-9">{c.heroIntro}</p>
                        <div className="button-stack mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button to="/contact#appointment">{c.primary}</Button>
                            <Button to="/training" variant="secondary">{c.secondary}</Button>
                            <Button to="/consulting" variant="secondary" showArrow={false}>{c.tertiary}</Button>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                            {heroChips.map((chip) => <CapabilityChip key={chip}>{chip}</CapabilityChip>)}
                        </div>
                    </div>
                    <LogoSystemVisual logoFull={IMAGES.luminoviaLogoFull} logoMark={IMAGES.luminoviaLogoMark} alt="Luminovia Training & Consulting logo-led capability system" labels={c.visualLabels}/>
                </div>
            </section>

            <Section id="trust" tight>
                <div className="trust-strip">
                    <div className="trust-strip-title">{c.trustTitle}</div>
                    <div className="trust-strip-grid">
                        {trustStats.map((stat) => (
                            <div key={stat.label} className="trust-strip-item">
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section id="routes">
                <SectionHeader badge={c.routesBadge} title={c.routesTitle} copy={c.routesCopy}/>
                <div className="grid gap-5 lg:grid-cols-3">
                    {c.routes.map((route, index) => (
                        <RouteCard key={route.title} number={String(index + 1).padStart(2, "0")} {...route}/>
                    ))}
                </div>
            </Section>

            <Section id="offers">
                <SectionHeader badge={c.offersBadge} title={c.offersTitle} copy={c.offersCopy}/>
                <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {featuredOffers.map((service) => (
                        <OfferCard
                            key={service.title}
                            service={service}
                            detailLabel={c.detail}
                            detailLink={topicLinkForLabel(service.title)}
                            labels={{...t.serviceLabels, request: t.requestTraining}}
                        />
                    ))}
                </div>
            </Section>

            <Section id="consulting" className="consulting-band">
                <SectionHeader badge={c.consultingBadge} title={c.consultingTitle} copy={c.consultingCopy}/>
                <div className="consulting-map">
                    {c.consultingCards.map(([title, copy], index) => (
                        <div key={title} className="consulting-map-card">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h3>{title}</h3>
                            <p>{copy}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button to="/consulting">{c.tertiary}</Button>
                    <Button to="/contact#contact-options" variant="secondary">{c.request}</Button>
                </div>
            </Section>

            <Section id="process">
                <SectionHeader badge={c.processBadge} title={c.processTitle}/>
                <div className="process-stepper">
                    {t.home.processSteps.map(([number, title, copy]) => <ProcessStep key={number} number={number} title={title} copy={copy}/>)}
                </div>
            </Section>

            <Section id="proof">
                <SectionHeader badge={c.proofBadge} title={c.proofTitle}/>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {trustSignals.slice(0, 8).map((signal) => <ProofCard key={signal.title} title={signal.title} copy={signal.copy}/>)}
                </div>
            </Section>

            <Section id="founder">
                <div className="founder-panel">
                    <Photo src={IMAGES.hero} alt={language === "de" ? "Carina Sophie Schoppe, CEO und Gründerin von Luminovia" : "Carina Sophie Schoppe, CEO and founder of Luminovia"} className="aspect-[4/3] rounded-[1.7rem] bg-white lg:aspect-[5/4]" imgClass="object-[50%_18%]" sizes="(min-width: 1024px) 520px, 100vw"/>
                    <div>
                        <p className="brand-kicker">{c.founderBadge}</p>
                        <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">{c.founderTitle}</h2>
                        <p className="mt-5 text-base leading-8 text-slate-300">{c.founderCopy}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button to="/about" variant="secondary">{c.founderProfile}</Button>
                            <Button href={PROFILE.founderPortfolio} variant="secondary">{c.founderPortfolio}</Button>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="faq">
                <SectionHeader badge={c.faqBadge} title={t.home.faqTitle} copy={t.home.faqCopy}/>
                <div className="grid items-start gap-4 md:grid-cols-2">
                    {faqs.map((item) => (
                        <article key={item.q} className="faq-card">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Container>
                <div className="final-cta-panel">
                    <div>
                        <h2>{c.finalTitle}</h2>
                        <p>{c.finalCopy}</p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                        <Button to="/contact#appointment">{c.primary}</Button>
                        <Button to="/contact#contact-options" variant="secondary">{c.request}</Button>
                    </div>
                </div>
            </Container>

            <div id="contact-cta" className="scroll-mt-40">
                <ConversionStrip/>
            </div>
            <StickyBookingBar/>
        </main>
    );
}
