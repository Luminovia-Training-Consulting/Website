import {Container} from "./LuminoviaDesign.jsx";

export default function LegalLayout({label, title, intro, children}) {
    return (
        <main className="legal-page">
            <Container className="legal-container">
                <header className="legal-heading">
                    <p className="lumo-section-label">{label}</p>
                    <h1>{title}</h1>
                    <p>{intro}</p>
                </header>
                <div className="legal-content">{children}</div>
            </Container>
        </main>
    );
}
