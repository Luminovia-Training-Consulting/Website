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
    const iconProps = {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
    };

    const pathProps = {
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    if (type === "team") {
        return (
            <svg {...iconProps}>
                <circle cx="18" cy="17" r="6" {...pathProps}/>
                <circle cx="32" cy="19" r="5" {...pathProps}/>
                <path d="M7 36c2.4-6.4 6.2-9.6 11-9.6S26.6 29.6 29 36" {...pathProps}/>
                <path d="M26 30c1.7-2.4 3.9-3.6 6.4-3.6 4 0 7.1 2.6 8.6 7.6" {...pathProps}/>
            </svg>
        );
    }

    if (type === "workflow") {
        return (
            <svg {...iconProps}>
                <path d="M12 13h8v8h-8zM28 27h8v8h-8z" {...pathProps}/>
                <path d="M20 17h5.5A6.5 6.5 0 0 1 32 23.5V27" {...pathProps}/>
                <path d="M16 30.5V28a5 5 0 0 1 5-5h6" {...pathProps}/>
                <path d="M34 9l1.2 4.1L39 15l-3.8 1.9L34 21l-1.2-4.1L29 15l3.8-1.9L34 9z" {...pathProps}/>
            </svg>
        );
    }

    if (type === "shield") {
        return (
            <svg {...iconProps}>
                <path d="M24 6l15 6v10c0 9.6-5.6 16.1-15 20-9.4-3.9-15-10.4-15-20V12l15-6z" {...pathProps}/>
                <path d="M18 24l4 4 9-10" {...pathProps}/>
            </svg>
        );
    }

    if (type === "database") {
        return (
            <svg {...iconProps}>
                <ellipse cx="24" cy="11" rx="14" ry="6" {...pathProps}/>
                <path d="M10 11v10c0 3.3 6.3 6 14 6s14-2.7 14-6V11" {...pathProps}/>
                <path d="M10 21v10c0 3.3 6.3 6 14 6s14-2.7 14-6V21" {...pathProps}/>
            </svg>
        );
    }

    if (type === "book") {
        return (
            <svg {...iconProps}>
                <path d="M9 10h12c4 0 7 3 7 7v22c0-3.3-3-6-7-6H9V10z" {...pathProps}/>
                <path d="M39 10H27c-4 0-7 3-7 7v22c0-3.3 3-6 7-6h12V10z" {...pathProps}/>
            </svg>
        );
    }

    return (
        <svg {...iconProps}>
            <path d="M18 9a7 7 0 0 0-7 7 7.5 7.5 0 0 0 .4 2.4A8.5 8.5 0 0 0 13 35h6" {...pathProps}/>
            <path d="M30 9a7 7 0 0 1 7 7 7.5 7.5 0 0 1-.4 2.4A8.5 8.5 0 0 1 35 35h-6" {...pathProps}/>
            <path d="M18 9v30M30 9v30M18 18h-5M30 18h5M18 27h-6M30 27h6M22 14h4M22 24h4M22 34h4" {...pathProps}/>
        </svg>
    );
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
