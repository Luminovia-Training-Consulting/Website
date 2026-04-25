import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import { PROFILE } from "../data/profile.js";

const sections = [
  {
    title: "Controller",
    copy: [
      "The controller responsible for this website is Carina Sophie Schoppe, Under the Hakenberge 5, 37619 Bodenwerder, Germany.",
      "You can contact me by email at info@carinaschoppe.com.",
    ],
  },
  {
    title: "Access data and hosting",
    copy: [
      "When this website is visited, the hosting provider may process technical access data such as IP address, date and time of access, requested files, browser type, operating system and referrer URL.",
      "This data is used to deliver the website securely, detect technical problems and protect the site from misuse.",
    ],
  },
  {
    title: "Contact and booking links",
    copy: [
      "If you contact me by email or use an external booking link, the information you provide is processed to answer your request and organise the requested training, lecture, workshop or call.",
      "The website links to external services such as Google Calendar, LinkedIn and GitHub. Their own privacy policies apply once you leave this website.",
    ],
  },
  {
    title: "Google Analytics",
    copy: [
      "This site is prepared to use Google Analytics only after the visitor gives consent in the analytics banner.",
      "The Google Analytics measurement ID used for this website is G-YNGD292XE5.",
      "Google Analytics helps understand which pages are visited and how the site can be improved. IP anonymisation is enabled in the implementation.",
      "You can decline analytics in the banner. If you accept it and later want to reset your choice, clear this website's local storage or browser site data.",
    ],
  },
  {
    title: "Local storage",
    copy: [
      "This website stores the analytics consent choice in the browser's local storage so the banner does not appear on every page view.",
      "No analytics script is loaded when analytics is declined.",
    ],
  },
  {
    title: "Legal basis",
    copy: [
      "Technical hosting and security processing is based on legitimate interest in providing a secure and reliable website.",
      "Contact processing is based on the steps needed to respond to requests or prepare a possible business relationship.",
      "Analytics processing is based on consent.",
    ],
  },
  {
    title: "Your rights",
    copy: [
      "Depending on applicable data protection law, you may have rights to access, rectification, erasure, restriction of processing, portability and objection.",
      "You may also withdraw consent for consent-based processing at any time with effect for the future.",
    ],
  },
  {
    title: "Updates",
    copy: [
      "This privacy policy may be updated when website features, analytics settings, providers or legal requirements change.",
      "Last updated: 25 April 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Badge>Data protection</Badge>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          This policy explains what data may be processed when using this website and how analytics works.
        </p>

        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <Card key={section.title}>
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Card>
          ))}

          <Card>
            <h2 className="text-2xl font-black text-white">Contact</h2>
            <p className="mt-5 leading-7 text-slate-300">
              For privacy questions, contact
              {" "}
              <a className="font-bold text-cyan-100 hover:text-white" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
