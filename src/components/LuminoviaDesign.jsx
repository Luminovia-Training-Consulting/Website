import {Link} from "react-router-dom";
import {
    BookOpenCheck,
    BrainCircuit,
    BriefcaseBusiness,
    Code2,
    Database,
    Globe2,
    GraduationCap,
    Languages,
    Layers3,
    ShieldCheck,
    Target,
    UsersRound,
    Waypoints,
    Workflow,
} from "lucide-react";
import Button from "./Button.jsx";
import {cn} from "./utils.js";

const TRUST_ICONS = [ShieldCheck, Languages, Globe2, Waypoints, BriefcaseBusiness];

export function Container({children, className = ""}) {
    return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({children, id, className = "", tight = false}) {
    return (
        <section id={id} className={cn("lumo-section scroll-mt-32", tight ? "py-7" : "py-12 sm:py-16", className)}>
            <Container>{children}</Container>
        </section>
    );
}

export function GradientText({children}) {
    return <span className="lumo-gradient-text">{children}</span>;
}

export function SectionHeader({label, badge, title, copy, action, className = ""}) {
    const visibleLabel = label || badge;

    return (
        <div className={cn("lumo-section-header", className)}>
            <div>
                {visibleLabel ? <p className="lumo-section-label">{visibleLabel}</p> : null}
                <h2>{title}</h2>
            </div>
            <div className="lumo-section-header-copy">
                {copy ? <p>{copy}</p> : null}
                {action}
            </div>
        </div>
    );
}

export function CapabilityChip({children, icon, tone = "blue"}) {
    return (
        <span className="lumo-chip" data-tone={tone}>
            {icon ? <span aria-hidden="true">{icon}</span> : null}
            {children}
        </span>
    );
}

export function PageHero({label, title, copy, children, actions, visual, centered = false}) {
    return (
        <section className={cn("lumo-page-hero", centered && "lumo-page-hero-centered")}>
            <Container>
                <div className="lumo-page-hero-grid">
                    <div className="lumo-page-hero-copy">
                        {label ? <p className="lumo-section-label">{label}</p> : null}
                        <h1>{title}</h1>
                        {copy ? <p>{copy}</p> : null}
                        {actions ? <div className="lumo-action-row">{actions}</div> : null}
                        {children}
                    </div>
                    {visual ? <div className="lumo-page-hero-visual">{visual}</div> : null}
                </div>
            </Container>
        </section>
    );
}

export function LogoSystemVisual({logoMark, alt, labels = []}) {
    const nodes = [
        {label: labels[0] || "AI", tone: "blue", Icon: BrainCircuit},
        {label: labels[1] || "IT", tone: "cyan", Icon: Code2},
        {label: labels[2] || "Cybersecurity", tone: "teal", Icon: ShieldCheck},
        {label: labels[3] || "Learning design", tone: "violet", Icon: BookOpenCheck},
        {label: labels[4] || "Remote-first", tone: "blue", Icon: UsersRound},
        {label: labels[5] || "DE / EN", tone: "gold", Icon: Languages},
    ];

    return (
        <div className="lumo-orbit-visual" aria-label={alt}>
            <div className="lumo-orbit-core">
                <img src={logoMark} alt={alt} width="180" height="180" loading="eager" fetchPriority="high"/>
                <div>
                    <strong>Luminovia</strong>
                    <span>Training & Consulting</span>
                </div>
            </div>
            <div className="lumo-orbit-node-wrap">
                {nodes.map(({label, tone, Icon}) => (
                    <div key={label} className="lumo-orbit-node" data-tone={tone}>
                        <span><Icon aria-hidden="true" strokeWidth={1.8}/></span>
                        <strong>{label}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TrustRail({items}) {
    return (
        <div className="lumo-trust-rail">
            {items.map((item, index) => {
                const Icon = TRUST_ICONS[index % TRUST_ICONS.length];
                return <div key={item.title} className="lumo-trust-item">
                    <span aria-hidden="true"><Icon strokeWidth={1.8}/></span>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                </div>;
            })}
        </div>
    );
}

function routeIconForTitle(title) {
    const normalized = title.toLowerCase();
    if (normalized.includes("consulting") || normalized.includes("beratung")) return "target";
    if (normalized.includes("programme") || normalized.includes("programm")) return "layers";
    return "training";
}

function RouteIcon({type}) {
    const Icon = type === "target" ? Target : type === "layers" ? Layers3 : GraduationCap;
    return <Icon aria-hidden="true" strokeWidth={1.8}/>;
}

export function RouteCard({title, copy, bullets, cta, to, tone = "blue"}) {
    const iconType = routeIconForTitle(title);

    return (
        <article className="lumo-route-card" data-tone={tone}>
            <div className="lumo-route-icon">
                <RouteIcon type={iconType}/>
            </div>
            <h2>{title}</h2>
            <p>{copy}</p>
            <ul>
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <Button to={to} variant="secondary">{cta}</Button>
        </article>
    );
}

function offerIconForTitle(title) {
    const normalized = title.toLowerCase();
    if (normalized.includes("literacy")) return "team";
    if (normalized.includes("prompt") || normalized.includes("agent")) return "workflow";
    if (normalized.includes("cyber") || normalized.includes("security")) return "shield";
    if (normalized.includes("python") || normalized.includes("sql") || normalized.includes("daten")) return "database";
    if (normalized.includes("curriculum") || normalized.includes("blended") || normalized.includes("lern")) return "book";
    return "brain";
}

function OfferIcon({type}) {
    const icons = {
        team: UsersRound,
        workflow: Workflow,
        shield: ShieldCheck,
        database: Database,
        book: BookOpenCheck,
        brain: BrainCircuit,
    };
    const Icon = icons[type] || BrainCircuit;
    return <Icon aria-hidden="true" strokeWidth={1.8}/>;
}

export function OfferCard({service, detailLabel, detailLink, tone = "blue"}) {
    const meta = [service.format, service.duration].filter(Boolean).join("  •  ");
    const displayTitle = service.title
        .replace("Cybersecurity & Pentesting Fundamentals", "Cybersecurity Essentials")
        .replace("Python, SQL & Data Skills", "Python / SQL / Data Skills")
        .replace("AI & GenAI Training", service.description.startsWith("Praxisnahes") ? "KI- & GenAI-Training" : "AI & GenAI Training")
        .replace("AI Literacy für Teams", "KI-Kompetenz für Teams")
        .replace("Prompt Engineering & Agentische Workflows", "Prompt Engineering & agentische Workflows")
        .replace("Cybersecurity & Pentesting-Grundlagen", "Cybersecurity- & Pentesting-Grundlagen")
        .replace("Python, SQL & Datenkompetenz", "Python, SQL & Datenkompetenz")
        .replace("Curriculum Design & Blended Learning", service.description.startsWith("Unterstützung") ? "Lerndesign & Blended Learning" : "Curriculum Design & Blended Learning");
    const iconType = offerIconForTitle(service.title);

    return (
        <article className="lumo-offer-card" data-tone={tone}>
            <div className="lumo-offer-icon">
                <OfferIcon type={iconType}/>
            </div>
            <h3>{displayTitle}</h3>
            <p>{service.description}</p>
            <div className="lumo-offer-meta">
                <span>{meta}</span>
                {detailLink ? <Link to={detailLink} className="lumo-offer-arrow" aria-label={detailLabel}>→</Link> : null}
            </div>
        </article>
    );
}

export function ProcessTimeline({steps, headingLevel = 3}) {
    const Heading = `h${headingLevel}`;

    return (
        <div className="lumo-process-timeline">
            {steps.map(([number, title, copy]) => (
                <article key={number} className="lumo-process-step">
                    <div className="lumo-process-node">{number}</div>
                    <Heading>{title}</Heading>
                    <p>{copy}</p>
                </article>
            ))}
        </div>
    );
}

export function ProcessStep({number, title, copy}) {
    return (
        <article className="lumo-process-step">
            <div className="lumo-process-node">{number}</div>
            <h3>{title}</h3>
            <p>{copy}</p>
        </article>
    );
}

export function ProofCard({title, copy, icon = "◎"}) {
    return (
        <article className="lumo-proof-card">
            <span aria-hidden="true">{icon}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
        </article>
    );
}

export function CTASection({title, copy, primary, secondary}) {
    return (
        <Container>
            <section className="lumo-final-cta">
                <div>
                    <h2>{title}</h2>
                    {copy ? <p>{copy}</p> : null}
                </div>
                <div className="lumo-action-row">
                    {primary}
                    {secondary}
                </div>
            </section>
        </Container>
    );
}

export function TextLinkCard({to, title, copy, cta}) {
    return (
        <Link to={to} className="lumo-text-link-card">
            <span>{title}</span>
            <p>{copy}</p>
            <strong>{cta}</strong>
        </Link>
    );
}
