import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {topicLinkForLabel} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import Photo from "../components/Photo.jsx";
import {
    CapabilityChip,
    Container,
    CTASection,
    GradientText,
    LogoSystemVisual,
    OfferCard,
    ProcessTimeline,
    RouteCard,
    Section,
    TrustRail,
} from "../components/LuminoviaDesign.jsx";

const offerTones = ["blue", "cyan", "violet", "teal", "gold", "violet"];

function copyForLanguage(language) {
    return language === "de"
        ? {
            title: "AI, IT & Digital Capability Training für moderne Teams",
            intro: "Praxisnahe Workshops, Trainingsprogramme und Consulting für Organisationen, die nutzbare digitale Skills brauchen - keine generische Theorie.",
            primary: "Discovery Call buchen",
            secondary: "Training-Angebote ansehen",
            consulting: "Consulting anfragen",
            visualLabels: ["AI", "IT", "Cybersecurity", "Learning Design", "Remote-first", "DE / EN", "Workshops bis Programme"],
            heroChips: ["Praktisch", "Arbeitsnah", "Outcome-orientiert", "Partner von Training bis Enablement"],
            trust: [
                {icon: "◎", title: "AI | IT | Security", copy: "Kernbereiche für digitale Kompetenz"},
                {icon: "◇", title: "DE / EN delivery", copy: "Deutsch und Englisch"},
                {icon: "✦", title: "Remote-first", copy: "Flexible Live-Durchführung"},
                {icon: "↗", title: "Workshops to programmes", copy: "Von Kurzformat bis Lernpfad"},
                {icon: "▣", title: "Training + consulting", copy: "Enablement und Umsetzung"},
            ],
            routes: [
                {title: "Training & Workshops", copy: "Rollenbasierte Trainings und praktische Workshops für moderne Teams.", bullets: ["Aktuelle Skills, sofort anwendbar", "Hands-on, interaktiv, praktisch", "Kurze Formate bis Deep-Dive-Kurse", "Vor Ort, online und hybrid"], cta: "Training ansehen", to: "/training", tone: "blue", icon: "□"},
                {title: "Consulting & Enablement", copy: "Strategisches und praktisches Consulting, um digitale Herausforderungen in Capability zu übersetzen.", bullets: ["AI-, IT- und Cybersecurity-Strategie", "Prozesse, Workflows und Tool Advisory", "Roadmaps, Governance und Guidance", "Implementation und Change Support"], cta: "Consulting erkunden", to: "/consulting", tone: "teal", icon: "◎"},
                {title: "Custom Programmes", copy: "Maßgeschneiderte Lernreisen rund um Ziele und Kontext.", bullets: ["Skill-Assessments und Alignment", "Curriculum und Content Design", "Blended Learning und Enablement", "Coaching, Support und Evaluation"], cta: "Programme ansehen", to: "/offers", tone: "violet", icon: "▱"},
            ],
            offersLabel: "Featured Training Offers",
            processLabel: "Consulting approach",
            processSteps: [
                ["1", "Discover", "Ziele, Zielgruppe, Kontext und Risiken klären."],
                ["2", "Assess", "Skills, Prozesse, Tools und Ausgangslage analysieren."],
                ["3", "Design", "Trainingspfad, Roadmap, Materialien oder Workshop-System entwickeln."],
                ["4", "Enable", "Training, Beratung, Reviews und Umsetzungssupport liefern."],
                ["5", "Evolve", "Transfer prüfen und nächste Capability-Stufe planen."],
            ],
            founderLabel: "Founder-led expertise",
            founderTitle: "Connecting disciplines. Delivering capability.",
            founderCopy: "Luminovia verbindet Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung, Instructional Design und praktische Lehre zu professionellen Trainings- und Consulting-Formaten. Carinas persönliches Portfolio bleibt separat.",
            companyProfile: "Unternehmen ansehen",
            portfolio: "carinaschoppe.com öffnen",
            finalTitle: "Bauen wir die nächste Fähigkeit Ihres Teams.",
            finalCopy: "Senden Sie Thema, Zielgruppe, Zeitraum, Sprache und Ziel. Luminovia schlägt ein passendes Training, Consulting-Sprint oder Programmformat vor.",
        }
        : {
            title: "AI, IT & Digital Capability Training for Modern Teams",
            intro: "Practical workshops, training programmes and consulting for organisations that need usable digital skills - not generic theory.",
            primary: "Book discovery call",
            secondary: "View training offers",
            consulting: "Request training or consulting",
            visualLabels: ["AI", "IT", "Cybersecurity", "Learning Design", "Remote-first", "DE / EN", "Workshops to programmes"],
            heroChips: ["Practical", "Relevant", "Outcomes", "Partner from strategy to enablement"],
            trust: [
                {icon: "◎", title: "AI | IT | Security", copy: "Core capability areas"},
                {icon: "◇", title: "DE / EN delivery", copy: "Bilingual training and consulting"},
                {icon: "✦", title: "Remote-first", copy: "Global teams, flexible delivery"},
                {icon: "↗", title: "Workshops to programmes", copy: "From short formats to journeys"},
                {icon: "▣", title: "Training + consulting", copy: "Learning and implementation"},
            ],
            routes: [
                {title: "Training & Workshops", copy: "Role-based training and practical workshops for modern teams.", bullets: ["Current skills, immediately applicable", "Hands-on, interactive, practical", "Short formats to deep-dive courses", "Onsite, online and hybrid"], cta: "Explore training", to: "/training", tone: "blue", icon: "□"},
                {title: "Consulting & Enablement", copy: "Strategic and practical consulting to turn digital challenges into capability.", bullets: ["AI, IT and cybersecurity strategy", "Process, workflow and tool advisory", "Roadmaps, governance and guidance", "Implementation and change support"], cta: "Explore consulting", to: "/consulting", tone: "teal", icon: "◎"},
                {title: "Custom Programmes", copy: "Bespoke learning journeys designed around your goals and context.", bullets: ["Skills assessments and alignment", "Curriculum and content design", "Blended learning and enablement", "Coaching, support and evaluation"], cta: "Explore programmes", to: "/offers", tone: "violet", icon: "▱"},
            ],
            offersLabel: "Featured training offers",
            processLabel: "Consulting approach",
            processSteps: [
                ["1", "Discover", "Understand goals, audience, context and risk."],
                ["2", "Assess", "Analyse needs, skills, processes and tools."],
                ["3", "Design", "Create training paths, roadmaps, materials or workshop systems."],
                ["4", "Enable", "Deliver training, guidance, reviews and implementation support."],
                ["5", "Evolve", "Measure transfer and plan the next capability stage."],
            ],
            founderLabel: "Founder-led expertise",
            founderTitle: "Connecting disciplines. Delivering capability.",
            founderCopy: "Luminovia connects business information systems, AI, cybersecurity, software development, instructional design and practical teaching into professional training and consulting formats. Carina's personal portfolio stays separate.",
            companyProfile: "View company profile",
            portfolio: "Open carinaschoppe.com",
            finalTitle: "Let’s build your team’s next capability.",
            finalCopy: "Share your topic, audience, timeframe, language and target outcome. Luminovia will suggest a suitable training, consulting sprint or programme structure.",
        };
}

function selectFeaturedOffers(serviceOfferings) {
    const preferred = [
        "AI & GenAI Training",
        "AI Literacy",
        "Prompt Engineering",
        "Cybersecurity",
        "Python",
        "Curriculum Design",
    ];

    return preferred
        .map((term) => serviceOfferings.find((offer) => offer.title.includes(term)))
        .filter(Boolean);
}

export default function HomePage() {
    const {language, t} = useLanguage();
    const c = copyForLanguage(language);
    const {serviceOfferings} = useSiteContent();
    const featuredOffers = selectFeaturedOffers(serviceOfferings);

    return (
        <main className="lumo-home">
            <section className="lumo-hero">
                <Container>
                    <div className="lumo-hero-grid">
                        <div className="lumo-hero-copy">
                            <h1><GradientText>{c.title}</GradientText></h1>
                            <p>{c.intro}</p>
                            <div className="lumo-action-row">
                                <Button to="/contact#appointment">{c.primary}</Button>
                                <Button to="/training" variant="secondary">{c.secondary}</Button>
                            </div>
                            <div className="lumo-hero-chips">
                                {c.heroChips.map((chip) => <CapabilityChip key={chip}>{chip}</CapabilityChip>)}
                            </div>
                        </div>
                        <LogoSystemVisual logoFull={IMAGES.luminoviaLogoFull} logoMark={IMAGES.luminoviaLogoMark} alt="Luminovia Training & Consulting logo-led capability system" labels={c.visualLabels}/>
                    </div>
                </Container>
            </section>

            <Section id="capabilities" tight>
                <TrustRail items={c.trust}/>
            </Section>

            <Section id="routes">
                <div className="lumo-route-grid">
                    {c.routes.map((route) => <RouteCard key={route.title} {...route}/>)}
                </div>
            </Section>

            <Section id="offers">
                <div className="lumo-compact-section-head">
                    <h2>{c.offersLabel}</h2>
                    <Button to="/offers" variant="secondary">{language === "de" ? "Alle Angebote ansehen" : "View all offers"}</Button>
                </div>
                <div className="lumo-offer-grid">
                    {featuredOffers.map((service, index) => (
                        <OfferCard
                            key={service.title}
                            service={service}
                            detailLabel={language === "de" ? "Details" : "Details"}
                            detailLink={topicLinkForLabel(service.title)}
                            labels={{...t.serviceLabels, request: t.requestTraining}}
                            tone={offerTones[index % offerTones.length]}
                        />
                    ))}
                </div>
            </Section>

            <Section id="process">
                <div className="lumo-compact-section-head">
                    <h2>{c.processLabel}</h2>
                </div>
                <ProcessTimeline steps={c.processSteps}/>
            </Section>

            <Section id="founder" className="lumo-founder-section">
                <div className="lumo-founder-panel">
                    <div className="lumo-founder-media">
                        <Photo src={IMAGES.headshot} alt={language === "de" ? "Carina Sophie Schoppe, CEO und Gründerin von Luminovia" : "Carina Sophie Schoppe, CEO and founder of Luminovia"} className="aspect-[4/5] rounded-[1rem] bg-white" imgClass="object-[50%_20%]" loading="lazy" sizes="(min-width: 1024px) 360px, 100vw"/>
                        <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer">carinaschoppe.com</a>
                    </div>
                    <div>
                        <p className="lumo-section-label">{c.founderLabel}</p>
                        <h2>{c.founderTitle}</h2>
                        <p>{c.founderCopy}</p>
                        <div className="lumo-founder-tags">
                            {["Business Systems", "AI & Digital Strategy", "Cybersecurity", "Software Development", "Instructional Design & Teaching"].map((item) => (
                                <CapabilityChip key={item} tone="gold">{item}</CapabilityChip>
                            ))}
                        </div>
                        <div className="lumo-action-row">
                            <Button to="/about" variant="secondary">{c.companyProfile}</Button>
                            <Button href={PROFILE.founderPortfolio} variant="secondary">{c.portfolio}</Button>
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection
                title={c.finalTitle}
                copy={c.finalCopy}
                primary={<Button to="/contact#appointment">{c.primary}</Button>}
                secondary={<Button to="/contact#contact-options" variant="secondary">{c.consulting}</Button>}
            />
        </main>
    );
}
