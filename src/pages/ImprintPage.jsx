import LegalLayout from "../components/LegalLayout.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

export default function ImprintPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Rechtliches",
            title: "Impressum",
            intro: "Rechtliche Angaben für diese Website.",
            info: "Angaben gemäß § 5 DDG",
            contact: "Kontakt",
            phone: "Telefon",
            email: "E-Mail",
            editorial: "Redaktionell verantwortlich",
            consumer: "Verbraucherstreitbeilegung",
            consumerCopy: "Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
            australia: "Australien",
            germany: "Deutschland",
        }
        : {
            badge: "Legal notice",
            title: "Imprint",
            intro: "Legal information for this website.",
            info: "Information according to Section 5 DDG (German Digital Services Act)",
            contact: "Contact",
            phone: "Phone",
            email: "Email",
            editorial: "Editorial responsibility",
            consumer: "Consumer dispute resolution",
            consumerCopy: "I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
            australia: "Australia",
            germany: "Germany",
        };

    return (
        <LegalLayout label={copy.badge} title={copy.title} intro={copy.intro}>
            <section className="legal-section">
                <h2>{copy.info}</h2>
                <address>
                    <p>{PROFILE.name}</p>
                    {PROFILE.addressLines.map((line) => <p key={line}>{line}</p>)}
                </address>
            </section>

            <section className="legal-section">
                <h2>{copy.contact}</h2>
                <ul>
                    <li>{copy.phone} {copy.australia} <a href={`tel:${PROFILE.phoneAustralia.replaceAll(" ", "")}`}>{PROFILE.phoneAustralia}</a></li>
                    <li>{copy.phone} {copy.germany} <a href={`tel:${PROFILE.phoneGermany.replaceAll(" ", "")}`}>{PROFILE.phoneGermany}</a></li>
                    <li>{copy.email} <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
                </ul>
            </section>

            <section className="legal-section">
                <h2>{copy.editorial}</h2>
                <p>{PROFILE.name}</p>
            </section>

            <section className="legal-section">
                <h2>{copy.consumer}</h2>
                <p>{copy.consumerCopy}</p>
            </section>
        </LegalLayout>
    );
}
