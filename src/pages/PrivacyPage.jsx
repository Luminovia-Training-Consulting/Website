import {Link} from "react-router-dom";
import {ANALYTICS_PREFERENCES_ID} from "../components/AnalyticsConsent.jsx";
import LegalLayout from "../components/LegalLayout.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const controllerAddress = `${PROFILE.name}, ${PROFILE.addressLines.join(", ")}`;

const enSections = [
    ["Controller", `The controller responsible for this website is ${controllerAddress}. You can contact me by email at ${PROFILE.email}, by Australian phone at ${PROFILE.phoneAustralia}, or by German phone at ${PROFILE.phoneGermany}.`],
    ["Access data and hosting", "The hosting provider may process technical access data such as IP address, date and time of access, requested files, browser type, operating system and referrer URL to deliver and protect the website."],
    ["Contact", "If you contact me by email or phone, the information you provide is processed to answer your request and organise the requested training, lecture, workshop or call."],
    ["Google Analytics", "This site uses Google Analytics only after visitor consent. The measurement ID is G-YNGD292XE5. IP anonymisation is enabled.", true],
    ["YouTube preview", "The training page loads the embedded YouTube video after you activate the preview. Activating the preview or following the YouTube link connects your browser to YouTube."],
    ["Local storage", "This website stores the analytics consent choice in local storage so the banner does not appear on every page view."],
    ["Your rights", "Depending on applicable data protection law, you may have rights to access, rectification, erasure, restriction of processing, portability, objection and withdrawal of consent."],
];

const deSections = [
    ["Verantwortliche Stelle", `Verantwortlich für diese Website ist ${controllerAddress}. Kontakt ist per E-Mail unter ${PROFILE.email}, telefonisch in Australien unter ${PROFILE.phoneAustralia} oder telefonisch in Deutschland unter ${PROFILE.phoneGermany} möglich.`],
    ["Zugriffsdaten und Hosting", "Der Hosting-Anbieter kann technische Zugriffsdaten wie IP-Adresse, Zeitpunkt, abgerufene Dateien, Browsertyp, Betriebssystem und Referrer verarbeiten, um die Website bereitzustellen und zu schützen."],
    ["Kontakt", "Wenn Sie Luminovia per E-Mail oder Telefon kontaktieren, werden die angegebenen Daten verarbeitet, um Ihre Anfrage zu beantworten und Training, Vortrag, Workshop oder Call zu organisieren."],
    ["Google Analytics", "Diese Website nutzt Google Analytics nur nach Zustimmung. Die Measurement ID lautet G-YNGD292XE5. IP-Anonymisierung ist aktiviert.", true],
    ["YouTube-Vorschau", "Die Trainingsseite lädt das eingebettete YouTube-Video, sobald Sie die Vorschau aktivieren. Wenn Sie die Vorschau aktivieren oder dem YouTube-Link folgen, stellt Ihr Browser eine Verbindung zu YouTube her."],
    ["Local Storage", "Diese Website speichert die Analytics-Einwilligung im lokalen Browser-Speicher, damit der Banner nicht auf jeder Seite erneut erscheint."],
    ["Ihre Rechte", "Je nach anwendbarem Datenschutzrecht können Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf einer Einwilligung bestehen."],
];

export default function PrivacyPage() {
    const {language} = useLanguage();
    const isDe = language === "de";
    const sections = isDe ? deSections : enSections;

    const label = isDe ? "Rechtliches" : "Legal";
    const title = isDe ? "Datenschutzerklärung" : "Privacy Policy";
    const intro = isDe
        ? "Diese Erklärung beschreibt, welche Daten bei der Nutzung dieser Website verarbeitet werden können."
        : "This policy explains what data may be processed when using this website and how analytics works.";

    return (
        <LegalLayout label={label} title={title} intro={intro}>
            {sections.map(([heading, copy, preferences]) => (
                <section className="legal-section" key={heading}>
                    <h2>{heading}</h2>
                    <p>{copy}</p>
                    {preferences && (
                        <div id={ANALYTICS_PREFERENCES_ID}>
                            <Link to={`#${ANALYTICS_PREFERENCES_ID}`} className="mt-2 inline-block">
                                {isDe ? "Analyse-Einstellungen ändern" : "Change analytics settings"}
                            </Link>
                        </div>
                    )}
                </section>
            ))}
            <section className="legal-section">
                <h2>{isDe ? "Datenschutzfragen" : "Privacy enquiries"}</h2>
                <p>
                    {isDe ? "Bei Datenschutzfragen kontaktieren Sie " : "For privacy questions, contact "}
                    <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
                </p>
            </section>
        </LegalLayout>
    );
}
