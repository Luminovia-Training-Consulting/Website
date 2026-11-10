import {cn} from "./utils.js";

export function Container({children, className = ""}) {
    return <div className={cn("lumo-container", className)}>{children}</div>;
}

export function PageHero({label, title, copy, actions, visual}) {
    return (
        <section className="lumo-page-hero">
            <Container className="lumo-page-hero-grid">
                <div className="lumo-page-hero-copy">
                    {label ? <p className="lumo-section-label">{label}</p> : null}
                    <h1>{title}</h1>
                    {copy ? <p>{copy}</p> : null}
                    {actions ? <div className="lumo-action-row">{actions}</div> : null}
                </div>
                {visual ? <div className="lumo-page-hero-visual">{visual}</div> : null}
            </Container>
        </section>
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
