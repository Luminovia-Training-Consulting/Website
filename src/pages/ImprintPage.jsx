import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import { useLanguage } from "../i18n.jsx";

export default function ImprintPage() {
  const { language } = useLanguage();
  const copy = language === "de"
    ? {
      badge: "Rechtliches",
      title: "Impressum",
      intro: "Rechtliche Angaben für diese Website.",
      info: "Angaben gemäß § 5 TMG",
      contact: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      editorial: "Redaktionell verantwortlich",
      odr: "EU-Streitschlichtung",
      odrCopy: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:",
      odrTail: "Die E-Mail-Adresse finden Sie oben im Impressum.",
      consumer: "Verbraucherstreitbeilegung",
      consumerCopy: "Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    }
    : {
      badge: "Legal notice",
      title: "Imprint",
      intro: "Legal information for this website.",
      info: "Information according to Section 5 TMG",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      editorial: "Editorial responsibility",
      odr: "EU dispute resolution",
      odrCopy: "The European Commission provides a platform for online dispute resolution:",
      odrTail: "You can find the email address in the legal notice above.",
      consumer: "Consumer dispute resolution",
      consumerCopy: "I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    };

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Badge>{copy.badge}</Badge>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">{copy.intro}</p>

        <div className="mt-10 grid gap-5">
          <Card>
            <h2 className="text-2xl font-black text-white">{copy.info}</h2>
            <div className="mt-5 space-y-1 text-slate-300">
              <p>Carina Sophie Schoppe</p>
              <p>Under the Hakenberge 5</p>
              <p>37619 Bodenwerder</p>
              <p>Germany</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.contact}</h2>
            <div className="mt-5 space-y-1 text-slate-300">
              <p>{copy.phone}: 01755738757</p>
              <p>{copy.email}: <a className="font-bold text-cyan-100 hover:text-white" href="mailto:info@carinaschoppe.com">info@carinaschoppe.com</a></p>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.editorial}</h2>
            <p className="mt-5 text-slate-300">Carina Sophie Schoppe</p>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.odr}</h2>
            <p className="mt-5 leading-7 text-slate-300">
              {copy.odrCopy} <a className="font-bold text-cyan-100 hover:text-white" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr/</a>. {copy.odrTail}
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.consumer}</h2>
            <p className="mt-5 leading-7 text-slate-300">{copy.consumerCopy}</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
