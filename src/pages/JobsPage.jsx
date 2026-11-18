import {ArrowUpRight, BriefcaseBusiness, Clock3, Euro, Laptop, Mail} from "lucide-react";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import {useLanguage} from "../i18n.jsx";
import "../styles/business.css";
import "../styles/jobs.css";

const applicationEmail = "info@luminovia.org";
const subject = "Bewerbung: Freiberufliche Lehrkraft Online-Unterricht";
const body = "Guten Tag,\n\nich bewerbe mich als freiberufliche Lehrkraft.\n\nFachliche Schwerpunkte:\nUnterrichtserfahrung:\nVerfügbarkeit:\n\nMeinen Lebenslauf füge ich als Anhang bei.\n\nFreundliche Grüße";
const applicationHref = `mailto:${applicationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const copy = {
    de: {
        title: "Erwachsene online unterrichten.",
        intro: "Luminovia sucht fortlaufend erfahrene freiberufliche Lehrkräfte für die berufliche Weiterbildung. Je nach Fachgebiet unterrichtest du IT, Wirtschaftsinformatik oder Betriebswirtschaft – praxisnah und live.",
        posted: "Veröffentlicht am 18. November 2026",
        kind: "Freiberuflicher Lehrauftrag",
        location: "Homeoffice · Online-Unterricht",
        payTitle: "Honorar je zweiwöchigem Kursauftrag",
        pay: "2.000 €",
        payNote: "Für zwei Kursaufträge in einem Monat entspricht das 4.000 €. Eine bestimmte monatliche Auslastung oder Folgeaufträge sind nicht garantiert.",
        schedule: "Geplante Unterrichtszeit pro zweiwöchigem Block",
        hours: "43 Std. 15 Min.",
        scheduleNote: "Vorbereitung, Materialien sowie vereinbarte Klausuren und Korrekturen kommen hinzu und sind im Blockhonorar enthalten. Pausen sind vor Auftragsbeginn abgestimmt.",
        tasksTitle: "Deine Aufgaben",
        tasks: ["Live-Online-Unterricht nach dem vereinbarten Lehrplan durchführen.", "Einheiten eigenständig vorbereiten und gestalten.", "Präsentationen, Handouts und Übungen erstellen oder anpassen.", "Vereinbarte Klausuren und Leistungsnachweise erstellen und korrigieren.", "Fachfragen beantworten und Teilnehmende begleiten.", "Kursdokumentation erledigen und dich mit Luminovia abstimmen."],
        aiTitle: "Materialien und Werkzeuge",
        ai: "Themenpläne und Vorlagen stellen wir bereit. KI-Werkzeuge können dich bei Vorbereitung, Materialerstellung und Korrektur unterstützen. Du prüfst jedes Ergebnis fachlich selbst. Personenbezogene Daten verarbeitest du ausschließlich mit ausdrücklich freigegebenen Werkzeugen.",
        profileTitle: "Das bringst du mit",
        profile: ["Mindestens Bachelorabschluss in Informatik, Wirtschaftsinformatik, BWL oder vergleichbar.", "Mindestens zwei Jahre Unterrichtserfahrung; Erwachsenenbildung ist ein Plus.", "Fundiertes Fachwissen und eine klare, praxisnahe Vermittlung.", "Sehr gutes Deutsch und sichere Kommunikation.", "Erfahrung mit Online-Unterricht und digitalen Lernplattformen.", "Eigenständige, strukturierte und zuverlässige Arbeitsweise.", "Flexibilität bei der Kursabstimmung und verbindliche Verfügbarkeit für übernommene Einsätze.", "Eigene technische Ausstattung, stabiles Internet und ein ruhiger Arbeitsplatz."],
        scheduleTitle: "Unterrichtszeiten",
        scheduleItems: ["Montag bis Donnerstag: 08:00–13:00 Uhr", "An einem Freitag je zweiwöchigem Block: 08:00–11:15 Uhr", "Der jeweils andere Freitag ist unterrichtsfrei."],
        scheduleFoot: "Die Zeiten richten sich nach deutscher Ortszeit. Das sind 43 Stunden und 15 Minuten geplante Anwesenheit je Block, vor Abzug etwaiger Pausen. Termine und Pausen stimmen wir vorab ab.",
        termsTitle: "So läuft die Zusammenarbeit",
        terms: "Du arbeitest freiberuflich auf Honorarbasis von zu Hause aus und wirst entsprechend deiner Fachgebiete und Verfügbarkeit eingesetzt. Weitere Kursaufträge sind nach Bedarf und gemeinsamer Absprache möglich. Eine monatliche Auslastung ist nicht zugesichert. Der konkrete Leistungsumfang wird vor jedem Auftrag festgelegt.",
        question: "Wichtig für deine Bewerbung",
        questionText: "Bitte bestätige in deiner E-Mail, dass dir die freiberufliche Zusammenarbeit bewusst ist und es sich nicht um eine Festanstellung handelt. Für die Bewerbung benötigen wir deinen Lebenslauf, deine fachlichen Schwerpunkte, eine kurze Übersicht deiner Unterrichtserfahrung und deine Verfügbarkeit.",
        applyBottom: "Passt das zu dir? Dann freuen wir uns auf deine Nachricht.",
        apply: "Bewerbung per E-Mail starten",
        mailNote: "Der Button öffnet dein E-Mail-Programm mit Empfänger, Betreff und einer kurzen Vorlage. Lebenslauf bitte anhängen.",
    },
    en: {
        title: "Teach adults online.",
        intro: "Luminovia is continuously looking for experienced freelance instructors for professional education. Depending on your expertise, you will teach IT, business information systems or business administration in practical live sessions.",
        apply: "Apply by email",
        posted: "Posted 18 November 2026",
        kind: "Freelance teaching assignment",
        location: "Work from home · Online teaching",
        payTitle: "Fee per two-week course assignment",
        pay: "€2,000",
        payNote: "Two assignments in a month would total €4,000. A specific monthly workload or follow-on assignments are not guaranteed.",
        schedule: "Planned teaching time per two-week block",
        hours: "43 hr 15 min",
        scheduleNote: "Preparation, learning materials and agreed assessments and marking are additional and included in the block fee. Breaks are agreed before accepting an assignment.",
        tasksTitle: "What you will do",
        tasks: ["Deliver live online lessons using the agreed syllabus.", "Prepare and structure each session independently.", "Create or adapt presentations, handouts and exercises.", "Prepare and mark agreed exams and assessments.", "Answer subject questions and support learners.", "Complete agreed course records and coordinate with Luminovia."],
        aiTitle: "Materials and tools",
        ai: "We provide topic plans and templates. AI tools may support preparation, material creation and marking. You remain responsible for checking every result. Personal data may only be processed with tools explicitly approved for that purpose.",
        profileTitle: "What you bring",
        profile: ["At least a bachelor’s degree in computer science, business information systems, business administration or a comparable field.", "At least two years of teaching experience; adult or vocational education is preferred.", "Strong subject knowledge and the ability to explain it clearly through practical examples.", "Very good German and confident communication.", "Experience with online teaching and digital learning platforms.", "An independent, organised and reliable working style.", "Flexibility when scheduling courses and dependable availability for assignments you accept.", "Your own suitable equipment, stable internet and a quiet workspace."],
        scheduleTitle: "Teaching hours",
        scheduleItems: ["Monday to Thursday: 08:00–13:00", "One Friday per two-week block: 08:00–11:15", "The other Friday is non-teaching."],
        scheduleFoot: "Hours follow German local time. This is 43 hours and 15 minutes of planned attendance per block, before any breaks. Dates and breaks are agreed in advance.",
        termsTitle: "How we work together",
        terms: "You work from home as a freelancer on a fee basis and are assigned according to your subject expertise and availability. Further assignments may be offered as demand and mutual agreement allow. A monthly workload is not guaranteed. We agree the precise scope before each assignment.",
        question: "Please confirm in your application",
        questionText: "Please confirm that you understand this is freelance work and not an employee position. Include your CV, subject areas, a short overview of your teaching experience and your availability.",
        applyBottom: "Does this sound like a fit? We look forward to hearing from you.",
        mailNote: "The button opens your email app with the recipient, subject and a short template. Please attach your CV.",
    },
};

function BulletList({items}) {
    return <ul className="jobs-bullets">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function JobsPage() {
    const {language} = useLanguage();
    const c = copy[language];
    return (
        <main className="business-page jobs-page" data-business-section="jobs">
            <PageHero label={language === "de" ? "Mit Luminovia arbeiten" : "Work with Luminovia"} title={c.title} copy={c.intro} actions={<a className="lumo-button" href={applicationHref}><span>{c.apply}</span><ArrowUpRight size={18} aria-hidden="true"/></a>} visual={
                <div className="jobs-hero-card">
                    <p><BriefcaseBusiness aria-hidden="true"/>{c.kind}</p>
                    <p><Laptop aria-hidden="true"/>{c.location}</p>
                    <p><Euro aria-hidden="true"/>{c.pay}</p>
                    <p><Clock3 aria-hidden="true"/>{c.hours}</p>
                </div>
            }/>
            <Container className="business-body jobs-content">
                <p className="jobs-posted">{c.posted}</p>
                <section className="jobs-compensation" aria-label={c.payTitle}>
                    <div><span>{c.payTitle}</span><strong>{c.pay}</strong></div>
                    <p>{c.payNote}</p>
                </section>
                <div className="jobs-columns">
                    <section><h2>{c.tasksTitle}</h2><BulletList items={c.tasks}/><h2>{c.aiTitle}</h2><p>{c.ai}</p></section>
                    <section><h2>{c.profileTitle}</h2><BulletList items={c.profile}/><h2>{c.scheduleTitle}</h2><BulletList items={c.scheduleItems}/><p>{c.scheduleFoot}</p></section>
                </div>
                <section className="jobs-terms"><h2>{c.termsTitle}</h2><p>{c.terms}</p></section>
                <section className="jobs-application"><div><p className="business-kicker">{c.question}</p><p>{c.questionText}</p></div><a className="lumo-button" href={applicationHref}><Mail size={18} aria-hidden="true"/><span>{c.apply}</span><ArrowUpRight size={18} aria-hidden="true"/></a><small>{c.mailNote}</small></section>
            </Container>
        </main>
    );
}
