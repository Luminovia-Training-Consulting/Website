import ClientProofSection from "../components/ClientProofSection.jsx";
import {useLanguage} from "../i18n.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

export default function ClientsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Lieferkontexte",
            title: "Erfahrung aus Bildung, Kooperationen und digitaler Praxis.",
            intro: "Diese Seite dokumentiert öffentlich belegbare Bildungs- und Kooperationskontexte, die die Arbeitsweise von Luminovia geprägt haben. Benannte Referenzen führen zu öffentlichen Quellen; Rückmeldungsthemen werden keinem einzelnen Auftraggeber zugeschrieben.",
        }
        : {
            badge: "Delivery contexts",
            title: "Education partners, collaboration contexts and topic areas.",
            intro: "This page documents public education and collaboration contexts that shaped Luminovia's delivery practice. Named references link to public sources; feedback themes are not attributed to individual clients.",
        };

    return (
        <main className="lumo-subpage pb-24 pt-24">
            <div className="-mt-24">
                <PageHero
                    label={copy.badge}
                    title={copy.title}
                    copy={copy.intro}
                    visual={<TrustRail items={[
                        {icon: "EDU", title: language === "de" ? "Bildungskontexte" : "Education contexts", copy: language === "de" ? "Ausgewählte Lehr- und Lernumfelder" : "Selected delivery environments"},
                        {icon: "B2B", title: language === "de" ? "Organisationen" : "Organisation fit", copy: language === "de" ? "Training und Kompetenzaufbau" : "Training and enablement capability"},
                        {icon: "TOP", title: language === "de" ? "Themenbreite" : "Topic breadth", copy: language === "de" ? "AI, IT, Security und Learning Design" : "AI, IT, security and learning design"},
                        {icon: "OK", title: language === "de" ? "Quellenklarheit" : "Source clarity", copy: language === "de" ? "Öffentliche Quellen und klar eingeordnete Kontexte" : "Public references and clearly labelled context"},
                    ]}/>}
                />
            </div>
            <ClientProofSection includeProof={false}/>
        </main>
    );
}
