import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {cn} from "./utils.js";

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
        {label: labels[0] || "AI", tone: "blue", icon: "⌘"},
        {label: labels[1] || "IT", tone: "cyan", icon: "</>"},
        {label: labels[2] || "Cybersecurity", tone: "teal", icon: "⛨"},
        {label: labels[3] || "Learning design", tone: "violet", icon: "□"},
        {label: labels[4] || "Remote-first", tone: "blue", icon: "••"},
        {label: labels[5] || "DE / EN", tone: "gold", icon: "◎"},
    ];

    return (
        <div className="lumo-orbit-visual" aria-label={alt}>
            <div className="lumo-orbit-ring lumo-orbit-ring-a" aria-hidden="true"/>
            <div className="lumo-orbit-ring lumo-orbit-ring-b" aria-hidden="true"/>
            <div className="lumo-orbit-ring lumo-orbit-ring-c" aria-hidden="true"/>
            <div className="lumo-orbit-core">
                <img src={logoMark} alt={alt} width="180" height="180" loading="eager" fetchPriority="high"/>
                <strong>Luminovia</strong>
                <span>Training & Consulting</span>
            </div>
            <div className="lumo-orbit-node-wrap">
                {nodes.map((node, index) => (
                    <div key={node.label} className={cn("lumo-orbit-node", `lumo-orbit-node-${index + 1}`)} data-tone={node.tone}>
                        <span>{node.icon}</span>
                        <strong>{node.label}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TrustRail({items}) {
    return (
        <div className="lumo-trust-rail">
            {items.map((item) => (
                <div key={item.title} className="lumo-trust-item">
                    <span aria-hidden="true">{item.icon}</span>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                </div>
            ))}
        </div>
    );
}

export function RouteCard({title, copy, bullets, cta, to, tone = "blue", icon = "◇"}) {
    return (
        <article className="lumo-route-card" data-tone={tone}>
            <div className="lumo-route-icon" aria-hidden="true">{icon}</div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ul>
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <Button to={to} variant="secondary">{cta}</Button>
        </article>
    );
}

export function OfferCard({service, detailLabel, detailLink, tone = "blue"}) {
    const meta = [service.format, service.duration].filter(Boolean).join("  •  ");
    const displayTitle = service.title
        .replace("Cybersecurity & Pentesting Fundamentals", "Cybersecurity Essentials")
        .replace("Cybersecurity & Pentesting-Grundlagen", "Cybersecurity Essentials")
        .replace("Python, SQL & Data Skills", "Python / SQL / Data Skills")
        .replace("Python, SQL & Datenkompetenz", "Python / SQL / Data Skills")
        .replace("Prompt Engineering & Agentische Workflows", "Prompt Engineering & Agentic Workflows")
        .replace("AI Literacy für Teams", "AI Literacy for Teams");

    return (
        <article className="lumo-offer-card" data-tone={tone}>
            <div className="lumo-offer-icon" aria-hidden="true"/>
            <h3>{displayTitle}</h3>
            <p>{service.description}</p>
            <div className="lumo-offer-meta">
                <span>{meta}</span>
                {detailLink ? <Link to={detailLink} className="lumo-offer-arrow" aria-label={detailLabel}>→</Link> : null}
            </div>
        </article>
    );
}

export function ProcessTimeline({steps}) {
    return (
        <div className="lumo-process-timeline">
            {steps.map(([number, title, copy]) => (
                <article key={number} className="lumo-process-step">
                    <div className="lumo-process-node">{number}</div>
                    <h3>{title}</h3>
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
