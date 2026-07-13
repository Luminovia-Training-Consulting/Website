import ClientProofSection from "../components/ClientProofSection.jsx";
import {useLanguage} from "../i18n.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

export default function ClientsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Lieferkontexte",
            title: "Erfahrung aus Bildung, Kooperationen und digitaler Praxis.",
            intro: "Diese Seite ordnet öffentlich belegbare Bildungs- und Kooperationskontexte ein, die das fachliche Profil von Luminovia geprägt haben. Anonymisierte Rückmeldungen werden ausdrücklich nicht als benannte Kundenstimmen dargestellt.",
        }
        : {
            badge: "Delivery contexts",
            title: "Education partners, collaboration contexts and topic areas.",
            intro: "A careful overview of public organisations, education partners and collaboration contexts that shaped the Luminovia profile. Feedback text is anonymised pattern language, not named customer quotes.",
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
                        {icon: "OK", title: language === "de" ? "Transparente Nachweise" : "Honest proof", copy: language === "de" ? "Keine erfundenen Logos oder Kundenstimmen" : "No invented logos or testimonials"},
                    ]}/>}
                />
            </div>
            <ClientProofSection includeProof={false}/>
        </main>
    );
}
