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
            title: "KI-, IT- und Digitalkompetenz für moderne Teams",
            intro: "Praxisnahe Trainings und strukturierte Beratung für Organisationen, die digitale Werkzeuge sicher, wirksam und eigenständig nutzen wollen.",
            primary: "Erstgespräch buchen",
            secondary: "Training-Angebote ansehen",
            consulting: "Training oder Beratung anfragen",
            visualLabels: ["KI", "IT", "Cybersecurity", "Lerndesign", "Remote-first", "DE / EN", "Workshops bis Programme"],
            heroChips: ["Praxisnah", "Rollenbezogen", "Sicher umsetzbar", "Workshop bis Programm"],
            trust: [
                {icon: "◎", title: "KI | IT | Sicherheit", copy: "Kernbereiche digitaler Arbeit"},
                {icon: "◇", title: "DE / EN Durchführung", copy: "Deutsch und Englisch"},
                {icon: "✦", title: "Remote-first", copy: "Flexible Live-Durchführung"},
                {icon: "↗", title: "Workshops bis Programme", copy: "Von Kurzformat bis Lernpfad"},
                {icon: "▣", title: "Training und Beratung", copy: "Kompetenzaufbau mit Praxisbezug"},
            ],
            routes: [
                {title: "Training und Workshops", copy: "Rollenbezogene Formate für Teams, die konkrete digitale Aufgaben sicherer und effizienter bearbeiten wollen.", bullets: ["Direkter Bezug zu Rollen und Arbeitsabläufen", "Übungen, Beispiele und wiederverwendbare Materialien", "Remote, vor Ort oder hybrid"], cta: "Training ansehen", to: "/training", tone: "blue"},
                {title: "Beratung und Kompetenzaufbau", copy: "Strukturierte Unterstützung für digitale Entscheidungen, Verantwortlichkeiten und tragfähige nächste Schritte.", bullets: ["KI-, IT- und Sicherheitsfragen einordnen", "Prozesse und Werkzeuge gezielt bewerten", "Umsetzung mit klaren Entscheidungspunkten begleiten"], cta: "Beratung ansehen", to: "/consulting", tone: "teal"},
                {title: "Individuelle Programme", copy: "Zusammenhängende Lernpfade für Organisationen, die mehrere Rollen, Themen oder Standorte befähigen müssen.", bullets: ["Bedarf und Zielgruppen sauber abgrenzen", "Inhalte, Übungen und Transfer verzahnen", "Fortschritt prüfen und Formate weiterentwickeln"], cta: "Programme ansehen", to: "/offers", tone: "violet"},
            ],
            offersLabel: "Ausgewählte Trainingsangebote",
            processLabel: "Vorgehen in der Beratung",
            processSteps: [
                ["1", "Verstehen", "Ziele, Zielgruppe, Kontext und Risiken klären."],
                ["2", "Analysieren", "Kompetenzen, Prozesse, Tools und Ausgangslage auswerten."],
                ["3", "Gestalten", "Trainingspfad, Fahrplan, Materialien oder Workshop-Konzept entwickeln."],
                ["4", "Befähigen", "Training, Beratung und Umsetzungsbegleitung durchführen."],
                ["5", "Weiterentwickeln", "Transfer prüfen und die nächste Kompetenzstufe planen."],
            ],
            founderLabel: "Gründerinnengeführte Expertise",
            founderTitle: "Technische Tiefe trifft klare Vermittlung.",
            founderCopy: "Luminovia wird von Carina Sophie Schoppe geführt. Ihre Erfahrung in Wirtschaftsinformatik, KI, Cybersecurity, Softwareentwicklung und Lerndesign prägt Formate, die fachlich belastbar und im Arbeitsalltag nutzbar sind.",
            companyProfile: "Unternehmen ansehen",
            portfolio: "carinaschoppe.com öffnen",
            finalTitle: "Nächste digitale Kompetenz gezielt aufbauen.",
            finalCopy: "Nennen Sie Thema, Zielgruppe, Zeitrahmen und gewünschtes Ergebnis. Luminovia empfiehlt ein passendes Format mit klarem Leistungsumfang und nächsten Schritten.",
        }
        : {
            title: "AI, IT and Digital Capability for Modern Teams",
            intro: "Practical training and structured consulting for organisations that want people to use digital tools safely, effectively and independently.",
            primary: "Book discovery call",
            secondary: "View training offers",
            consulting: "Request training or consulting",
            visualLabels: ["AI", "IT", "Cybersecurity", "Learning Design", "Remote-first", "DE / EN", "Workshops to programmes"],
            heroChips: ["Practical", "Role-specific", "Safe to apply", "Workshop to programme"],
            trust: [
                {icon: "◎", title: "AI | IT | Security", copy: "Core capability areas"},
                {icon: "◇", title: "DE / EN delivery", copy: "Bilingual training and consulting"},
                {icon: "✦", title: "Remote-first", copy: "Global teams, flexible delivery"},
                {icon: "↗", title: "Workshops to programmes", copy: "From short formats to structured programmes"},
                {icon: "▣", title: "Training + consulting", copy: "Learning and implementation"},
            ],
            routes: [
                {title: "Training and Workshops", copy: "Role-specific formats for teams that want to handle real digital tasks with greater confidence and efficiency.", bullets: ["Direct connection to roles and workflows", "Exercises, examples and reusable materials", "Remote, onsite or hybrid delivery"], cta: "Explore training", to: "/training", tone: "blue"},
                {title: "Consulting and Enablement", copy: "Structured support for digital decisions, responsibilities and practical next steps.", bullets: ["Frame AI, IT and security questions", "Assess processes and tools", "Support implementation with clear decision points"], cta: "Explore consulting", to: "/consulting", tone: "teal"},
                {title: "Custom Programmes", copy: "Connected learning paths for organisations that need to enable several roles, topics or locations.", bullets: ["Define needs and audiences", "Connect content, practice and transfer", "Review progress and improve the programme"], cta: "Explore programmes", to: "/offers", tone: "violet"},
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
            founderTitle: "Technical depth, clearly taught.",
            founderCopy: "Luminovia is led by Carina Sophie Schoppe. Her background in business information systems, AI, cybersecurity, software development and instructional design shapes formats that are technically sound and useful at work.",
            companyProfile: "View company profile",
            portfolio: "Open carinaschoppe.com",
            finalTitle: "Build capability for your next digital priority.",
            finalCopy: "Share the topic, audience, timeframe and required outcome. Luminovia will recommend a suitable format, clear scope and practical next steps.",
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
                            {(language === "de" ? ["Wirtschaftsinformatik", "KI & Digitalstrategie", "Cybersecurity", "Softwareentwicklung", "Lerndesign & Lehre"] : ["Business Systems", "AI & Digital Strategy", "Cybersecurity", "Software Development", "Instructional Design & Teaching"]).map((item) => (
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
