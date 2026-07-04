import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import {cn} from "./utils.js";

export function Container({children, className = ""}) {
    return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({children, id, className = "", tight = false}) {
    return (
        <section id={id} className={cn("soft-section scroll-mt-40", tight ? "py-9" : "py-14 sm:py-16", className)}>
            <Container>{children}</Container>
        </section>
    );
}

export function GradientText({children}) {
    return (
        <span className="bg-gradient-to-r from-white via-sky-100 to-amber-100 bg-clip-text text-transparent">
            {children}
        </span>
    );
}

export function SectionHeader({badge, title, copy, align = "left", className = ""}) {
    return (
        <div className={cn("mb-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end", align === "center" && "mx-auto max-w-4xl text-center lg:block", className)}>
            <div>
                {badge && <p className="brand-kicker">{badge}</p>}
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
            </div>
            {copy && <p className={cn("text-base leading-8 text-slate-300 sm:text-lg", align === "center" && "mx-auto mt-5 max-w-3xl")}>{copy}</p>}
        </div>
    );
}

export function CapabilityChip({children, tone = "blue"}) {
    return <span data-tone={tone} className="capability-chip">{children}</span>;
}

export function LogoSystemVisual({logoFull, logoMark, alt, labels}) {
    const nodes = labels.slice(0, 5);

    return (
        <div className="luminovia-system-visual" aria-label={alt}>
            <div className="system-orbit" aria-hidden="true"/>
            <div className="system-logo-panel">
                <img src={logoFull} alt={alt} width="720" height="720" loading="eager" fetchPriority="high"/>
            </div>
            <div className="system-node-grid">
                {nodes.map((node, index) => (
                    <div key={node} className="system-node-card">
                        <span className="system-node-index">{String(index + 1).padStart(2, "0")}</span>
                        <span>{node}</span>
                    </div>
                ))}
            </div>
            <div className="system-route-card">
                <img src={logoMark} alt="" width="72" height="72" loading="eager"/>
                <div>
                    <span>{labels[5]}</span>
                    <strong>{labels[6]}</strong>
                </div>
            </div>
        </div>
    );
}

export function RouteCard({number, title, copy, bullets, cta, to, featured = false}) {
    return (
        <Card className={cn("premium-route-card h-full p-5 sm:p-6", featured && "premium-route-card-featured")}>
            <div className="flex items-start justify-between gap-4">
                <div className="route-number">{number}</div>
                {featured && <span className="route-feature-label">Core route</span>}
            </div>
            <h3 className="mt-6 text-2xl font-black tracking-[-0.02em] text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
            <div className="mt-5 flex flex-wrap gap-2">
                {bullets.map((bullet) => <CapabilityChip key={bullet}>{bullet}</CapabilityChip>)}
            </div>
            <div className="mt-7">
                <Button to={to} variant={featured ? "primary" : "secondary"}>{cta}</Button>
            </div>
        </Card>
    );
}

export function OfferCard({service, labels, detailLabel, detailLink}) {
    return (
        <Card className="offer-card h-full p-5 sm:p-6">
            <h3 className="text-2xl font-black tracking-[-0.025em] text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            <dl className="mt-5 grid gap-3">
                <div className="offer-meta-row">
                    <dt>{labels.bestFor}</dt>
                    <dd>{service.audience}</dd>
                </div>
                <div className="offer-meta-row">
                    <dt>{labels.format}</dt>
                    <dd>{service.format}</dd>
                </div>
                <div className="offer-meta-row">
                    <dt>{labels.duration}</dt>
                    <dd>{service.duration}</dd>
                </div>
            </dl>
            <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{labels.outcomes}</p>
                <ul className="mt-3 grid gap-2">
                    {service.outcomes.slice(0, 3).map((outcome) => (
                        <li key={outcome} className="offer-outcome">{outcome}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {detailLink ? <Button to={detailLink}>{detailLabel}</Button> : null}
                <Button to="/contact#contact-options" variant="secondary">{labels.request}</Button>
            </div>
        </Card>
    );
}

export function ProcessStep({number, title, copy}) {
    return (
        <div className="process-step-card">
            <div className="process-step-node">{number}</div>
            <div>
                <h3>{title}</h3>
                <p>{copy}</p>
            </div>
        </div>
    );
}

export function ProofCard({title, copy}) {
    return (
        <div className="proof-card">
            <div className="proof-mark" aria-hidden="true"/>
            <h3>{title}</h3>
            <p>{copy}</p>
        </div>
    );
}

export function TextLinkCard({to, title, copy, cta}) {
    return (
        <Link to={to} className="text-link-card">
            <span>{title}</span>
            <p>{copy}</p>
            <strong>{cta}</strong>
        </Link>
    );
}
