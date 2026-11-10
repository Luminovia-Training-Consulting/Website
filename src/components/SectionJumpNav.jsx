import {Container} from "./LuminoviaDesign.jsx";

export default function SectionJumpNav({items, label}) {
    return (
        <nav className="section-jump-nav" aria-label={label}>
            <Container className="section-jump-inner">
                <span className="section-jump-label">{label}</span>
                <div className="section-jump-track">
                    {items.map(([href, text]) => <a key={href} href={href}>{text}</a>)}
                </div>
            </Container>
        </nav>
    );
}
