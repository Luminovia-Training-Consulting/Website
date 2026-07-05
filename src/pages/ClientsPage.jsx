import ClientProofSection from "../components/ClientProofSection.jsx";
import {useLanguage} from "../i18n.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

export default function ClientsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Lieferkontexte",
            title: "Bildungspartner, Kooperationskontexte und Themenbereiche.",
            intro: "Eine sorgfältige Übersicht öffentlicher Organisationen, Bildungspartner und Kooperationskontexte, die das Luminovia-Profil fachlich geprägt haben. Die Feedback-Texte sind anonymisierte Muster, keine benannten Kunden-Zitate.",
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
                        {icon: "EDU", title: language === "de" ? "Bildungskontexte" : "Education contexts", copy: language === "de" ? "Ausgewählte Lieferumfelder" : "Selected delivery environments"},
                        {icon: "B2B", title: language === "de" ? "Organisationsfit" : "Organisation fit", copy: language === "de" ? "Training und Enablement" : "Training and enablement capability"},
                        {icon: "OK", title: language === "de" ? "Ehrliche Nachweise" : "Honest proof", copy: language === "de" ? "Keine erfundenen Logos oder Testimonials" : "No invented logos or testimonials"},
                    ]}/>}
                />
            </div>
            <ClientProofSection includeProof={false}/>
        </main>
    );
}
