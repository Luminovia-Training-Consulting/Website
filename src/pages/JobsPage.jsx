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
        title: "Menschen online unterrichten.",
        intro: "Luminovia sucht fortlaufend erfahrene freiberufliche Lehrkräfte für die berufliche Weiterbildung. Je nach Fachgebiet unterrichtest du Menschen in IT, Wirtschaftsinformatik oder Betriebswirtschaft – praxisnah und live.",
        posted: "Veröffentlicht am 18. November 2026",
        kind: "Freiberuflicher Lehrauftrag",
        location: "Homeoffice · Online-Unterricht",
        payTitle: "Vergütung im Hauptauftrag",
        pay: "4.000–5.000 € / Monat",
        payNote: "Für den beschriebenen Hauptauftrag beträgt das Honorar je zweiwöchigem Kursblock 2.000–2.500 €. Zwei solcher Blöcke im Monat entsprechen 4.000–5.000 €. Weitere Kundenaufträge können andere Zeiten und Honorare haben; diese richten sich nach Kunde, Kurs und Umfang. Auftragsvolumen und Folgeaufträge sind nicht garantiert.",
        schedule: "Geplante Unterrichtszeit pro Woche",
        hours: "ca. 22 Std. / Woche",
        scheduleNote: "Vorbereitung, eigenständige Erstellung der Unterrichtsmaterialien und Klausuren sowie Korrekturen gehören zum Auftrag und sind mit dem Blockhonorar abgegolten; sie werden nicht gesondert vergütet. Pausen stimmen wir vor Auftragsbeginn ab.",
        tasksTitle: "Deine Aufgaben",
        tasks: ["Live-Online-Unterricht nach dem vereinbarten Lehrplan durchführen.", "Einheiten eigenständig vorbereiten und gestalten.", "Unterrichtsmaterialien, Präsentationen, Handouts und Übungen eigenständig erstellen und für den Unterricht mitbringen.", "Klausuren und Leistungsnachweise selbst erstellen und korrigieren.", "Fachfragen beantworten und Teilnehmende begleiten.", "Kursdokumentation erledigen und dich mit Luminovia abstimmen."],
        aiTitle: "Materialien und Werkzeuge",
        ai: "Themenpläne und Vorlagen dienen als Orientierung. Unterrichtsmaterialien und Klausuren entwickelst du eigenständig und bringst sie in den Unterricht ein. KI-Werkzeuge können unterstützen; du prüfst alle Ergebnisse fachlich. Personenbezogene Daten verarbeitest du nur mit ausdrücklich freigegebenen Werkzeugen.",
        profileTitle: "Das bringst du mit",
        profile: ["Abgeschlossenes einschlägiges Hochschulstudium oder abgeschlossene IHK-Berufsausbildung mit AEVO-Schein; gleichwertige Qualifikationen prüfen wir im Einzelfall.", "Mindestens zwei Jahre Unterrichtserfahrung; Erfahrung in der beruflichen Weiterbildung ist ein Plus.", "Fundiertes Fachwissen und eine klare, praxisnahe Vermittlung.", "Sehr gutes Deutsch und sichere Kommunikation.", "Erfahrung mit Online-Unterricht und digitalen Lernplattformen.", "Eigenständige, strukturierte und zuverlässige Arbeitsweise.", "Flexibilität bei der Kursabstimmung und verbindliche Verfügbarkeit für übernommene Einsätze.", "Eigene technische Ausstattung, stabiles Internet und ein ruhiger Arbeitsplatz."],
        scheduleTitle: "Zeiten im Hauptauftrag",
        scheduleItems: ["Montag bis Donnerstag: 08:00–13:00 Uhr", "Freitag in Woche 1 des zweiwöchigen Rhythmus: 08:00–11:00 Uhr", "Freitag in Woche 2: unterrichtsfrei."],
        scheduleFoot: "Die Zeiten richten sich nach deutscher Ortszeit und ergeben im Hauptauftrag durchschnittlich rund 22 geplante Unterrichtsstunden pro Woche, vor Abzug etwaiger Pausen. Zusätzliche Kurse für andere Kunden können zu abweichenden Zeiten stattfinden. Zeitplan und Honorar werden je Kurs vorab vereinbart.",
        termsTitle: "So läuft die Zusammenarbeit",
        terms: "Du arbeitest freiberuflich auf Honorarbasis von zu Hause aus und wirst entsprechend deiner Fachgebiete und Verfügbarkeit eingesetzt. Neben dem beschriebenen Hauptauftrag können weitere Kurse für andere Kunden hinzukommen. Deren Unterrichtszeiten und Honorare unterscheiden sich je nach Kunde, Kurs und Umfang. Wir stimmen jeden Auftrag einzeln ab; eine bestimmte monatliche Auslastung oder Folgeaufträge sind nicht garantiert.",
        question: "Wichtig für deine Bewerbung",
        questionText: "Bitte bestätige in deiner E-Mail, dass dir die freiberufliche Zusammenarbeit bewusst ist und es sich nicht um eine Festanstellung handelt. Für die Bewerbung benötigen wir deinen Lebenslauf, deine fachlichen Schwerpunkte, eine kurze Übersicht deiner Unterrichtserfahrung und deine Verfügbarkeit.",
        applyBottom: "Passt das zu dir? Dann freuen wir uns auf deine Nachricht.",
        apply: "Bewerbung per E-Mail starten",
        mailNote: "Der Button öffnet dein E-Mail-Programm mit Empfänger, Betreff und einer kurzen Vorlage. Lebenslauf bitte anhängen.",
    },
    en: {
        title: "Teach people online.",
        intro: "Luminovia is continuously looking for experienced freelance instructors for professional learning. Depending on your expertise, you will teach practical live classes in IT, business information systems or business administration.",
        apply: "Apply by email",
        posted: "Posted 18 November 2026",
        kind: "Freelance teaching assignment",
        location: "Work from home · Online teaching",
        payTitle: "Fee for the main assignment",
        pay: "€4,000–€5,000 / month",
        payNote: "For the main assignment described here, the fee is €2,000–€2,500 per two-week course block. Two such blocks in a month would total €4,000–€5,000. Other client assignments may have different hours and fees depending on the client, course and scope. Workload and follow-on assignments are not guaranteed.",
        schedule: "Planned teaching time per week",
        hours: "Approx. 22 hr / week",
        scheduleNote: "Preparation, independently creating teaching materials and exams, and marking are part of the assignment and covered by the block fee; they are not paid separately. Breaks are agreed before accepting an assignment.",
        tasksTitle: "What you will do",
        tasks: ["Deliver live online lessons using the agreed syllabus.", "Prepare and structure each session independently.", "Independently create and bring teaching materials, presentations, handouts and exercises.", "Write and mark exams and other agreed assessments.", "Answer subject questions and support learners.", "Complete agreed course records and coordinate with Luminovia."],
        aiTitle: "Materials and tools",
        ai: "Topic plans and templates are provided as guidance. You independently develop and bring your teaching materials and assessments. AI tools may help, but you remain responsible for checking every result. Process personal data only with tools explicitly approved for that purpose.",
        profileTitle: "What you bring",
        profile: ["A relevant university degree or a completed German IHK vocational qualification with an AEVO trainer aptitude certificate; comparable qualifications are considered individually.", "At least two years of teaching experience; experience in professional or vocational learning is a plus.", "Strong subject knowledge and the ability to explain it clearly through practical examples.", "Very good German and confident communication.", "Experience with online teaching and digital learning platforms.", "An independent, organised and reliable working style.", "Flexibility when scheduling courses and dependable availability for assignments you accept.", "Your own suitable equipment, stable internet and a quiet workspace."],
        scheduleTitle: "Main assignment schedule",
        scheduleItems: ["Monday to Thursday: 08:00–13:00", "Friday in week 1 of the two-week cycle: 08:00–11:00", "Friday in week 2: no teaching."],
        scheduleFoot: "Hours follow German local time. The main assignment averages about 22 planned teaching hours per week, before any breaks. Additional courses for other clients may take place at different times. We agree the schedule and fee for each course in advance.",
        termsTitle: "How we work together",
        terms: "You work from home as a freelancer on a fee basis and are assigned according to your subject expertise and availability. Further courses for other clients may be offered alongside the main assignment. Their hours and fees vary by client, course and scope. We agree each assignment individually; a set monthly workload or follow-on work is not guaranteed.",
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
