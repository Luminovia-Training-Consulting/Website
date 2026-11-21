import {ArrowUpRight, BriefcaseBusiness, Clock3, Euro, Laptop, Mail} from "lucide-react";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import {useLanguage} from "../i18n.jsx";
import "../styles/business.css";
import "../styles/jobs.css";

const applicationEmail = "info@luminovia.org";
const applicationHref = (subject, body) => `mailto:${applicationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const copy = {
    de: {
        title: "Freiberuflich lehren und mitgestalten.",
        intro: "Luminovia baut sein internationales freiberufliches Team aus. Aktuell suchen wir Lehrkräfte für Online-Weiterbildung und Unterstützung im Management und in den Betriebsabläufen.",
        posted: "Veröffentlicht am 18. November 2026",
        kind: "Zwei freiberufliche Aufgabenfelder",
        location: "Remote · internationale Bewerbungen",
        feeSummary: "Honorar je Auftrag",
        hoursSummary: "Umfang nach Einsatz",
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
        roleNavTitle: "Aktuelle Aufgabenfelder",
        lecturerNav: "Online-Lehre",
        managementNav: "Management & Assistenz",
        generalTitle: "Freiberufliche Zusammenarbeit",
        generalCopy: "Alle Aufgaben erfolgen freiberuflich auf Honorarbasis. Einsatz, Umfang, Zeitzone und Honorar werden je Auftrag vereinbart. Eine feste monatliche Auslastung ist nicht garantiert. Bewerbungen aus verschiedenen Ländern sind willkommen; die Zusammenarbeit wird passend zu Einsatz und Zeitzone abgestimmt.",
        lecturerHeading: "Lehrkraft für berufliche Weiterbildung",
        lecturerIntro: "Für Online-Unterricht in IT, Wirtschaftsinformatik oder Betriebswirtschaft suchen wir fortlaufend erfahrene Lehrkräfte.",
        lecturerSubject: "Bewerbung: Freiberufliche Lehrkraft Online-Unterricht",
        lecturerBody: "Guten Tag,\n\nich bewerbe mich als freiberufliche Lehrkraft.\n\nFachliche Schwerpunkte:\nUnterrichtserfahrung:\nVerfügbarkeit und Zeitzone:\n\nMeinen Lebenslauf füge ich als Anhang bei.\n\nFreundliche Grüße",
        managementHeading: "Management, Operations & Geschäftsführungsassistenz",
        managementIntro: "Wir suchen eine zuverlässige freiberufliche Unterstützung, die Organisation, Kundenarbeit und interne Abläufe strukturiert voranbringt.",
        managementFeeTitle: "Honorar",
        managementFee: "Vorschlag je Einsatz",
        managementFeeCopy: "Das Honorar richtet sich nach Verantwortung, Aufgaben, Erfahrung und Umfang. Bitte nenne deine Honorarvorstellung – zum Beispiel je Stunde, Tag oder Projekt.",
        managementHoursTitle: "Arbeitsumfang und Zeiten",
        managementHours: "Nach Einsatz vereinbart",
        managementHoursCopy: "Wochenstunden, Verfügbarkeit und Überschneidung mit relevanten Zeitzonen werden je Auftrag abgestimmt. Bitte gib deine mögliche Kapazität und bevorzugten Zeiten an.",
        managementTasksTitle: "Mögliche Aufgaben",
        managementTasks: ["Geschäftsführung im Tagesgeschäft organisatorisch unterstützen und Abläufe nachhalten.", "Verwaltung, Termin- und Dokumentenorganisation strukturieren.", "Belege und Rechnungsabläufe vorbereiten sowie Buchhaltungsunterlagen abstimmen; steuerliche Beratung ist nicht Teil der Rolle.", "Kundenanfragen begleiten, Informationen nachhalten und die Kundenabwicklung koordinieren.", "Kunden- und Kooperationspartner recherchieren, Kontakte vorbereiten und abgestimmte Erstansprachen organisieren.", "Freiberufliche Lehrkräfte und Fachpersonen im Recruiting, Onboarding und bei Einsatzplanung unterstützen."],
        managementProfileTitle: "Was du mitbringst",
        managementProfile: ["Erfahrung in Assistenz, Office Management, Operations, Kundenservice oder vergleichbaren Aufgaben.", "Sehr gute Organisation, Verlässlichkeit und ein sicherer Umgang mit vertraulichen Informationen.", "Selbstständiges Arbeiten, klare Kommunikation und ein sorgfältiger Blick für offene Punkte.", "Sicherer Umgang mit digitalen Büro-, Kalender- und Dokumentenwerkzeugen.", "Sehr gutes Deutsch oder Englisch; die jeweils andere Sprache ist willkommen.", "Eigene geeignete Ausstattung und eine ruhige Remote-Arbeitsumgebung."],
        managementQuestion: "Bitte nenne in deiner Bewerbung",
        managementQuestionCopy: "deine Erfahrung und passenden Aufgabenbereiche, deine Honorarvorstellung, gewünschte Wochenstunden, Verfügbarkeit und Zeitzone. Bitte bestätige außerdem, dass du die freiberufliche Zusammenarbeit suchst.",
        managementSubject: "Bewerbung: Freiberufliche Management- und Operations-Unterstützung",
        managementBody: "Guten Tag,\n\nich interessiere mich für die freiberufliche Management- und Operations-Unterstützung.\n\nErfahrung und passende Aufgabenbereiche:\nHonorarvorstellung (Stunde/Tag/Projekt):\nGewünschte Wochenstunden und Verfügbarkeit:\nZeitzone und bevorzugte Arbeitszeiten:\n\nIch bestätige, dass ich eine freiberufliche Zusammenarbeit suche.\n\nFreundliche Grüße",
        managementApply: "Für Management-Unterstützung bewerben",
        managementMailNote: "Der Button öffnet eine vorbereitete E-Mail an info@luminovia.org. Lebenslauf oder Profil bitte bei Bedarf ergänzen.",
    },
    en: {
        title: "Teach and help shape how we work.",
        intro: "Luminovia is growing its international freelance team. We are currently looking for online instructors for professional learning and support with management and business operations.",
        apply: "Apply by email",
        posted: "Posted 18 November 2026",
        kind: "Two freelance work areas",
        location: "Remote · international applicants welcome",
        feeSummary: "Fee agreed per assignment",
        hoursSummary: "Hours depend on the assignment",
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
        roleNavTitle: "Current opportunities",
        lecturerNav: "Online teaching",
        managementNav: "Management support",
        generalTitle: "Freelance collaboration",
        generalCopy: "All assignments are freelance and fee-based. Scope, schedule, time zone and fee are agreed for each assignment. A fixed monthly workload is not guaranteed. Applicants in different countries are welcome; collaboration is arranged around the assignment and relevant time zones.",
        lecturerHeading: "Instructor for professional learning",
        lecturerIntro: "We continuously look for experienced instructors to teach online courses in IT, business information systems or business administration.",
        lecturerSubject: "Application: Freelance online instructor",
        lecturerBody: "Hello,\n\nI am applying for freelance teaching assignments.\n\nSubject areas:\nTeaching experience:\nAvailability and time zone:\n\nI have attached my CV.\n\nKind regards",
        managementHeading: "Management, operations and executive assistance",
        managementIntro: "We are looking for reliable freelance support to organise client work, internal operations and day-to-day business administration.",
        managementFeeTitle: "Fee",
        managementFee: "Propose per assignment",
        managementFeeCopy: "The fee depends on responsibilities, tasks, experience and scope. Please share your expected rate, for example hourly, daily or per project.",
        managementHoursTitle: "Workload and schedule",
        managementHours: "Agreed per assignment",
        managementHoursCopy: "Weekly hours, availability and overlap with relevant time zones are agreed for each assignment. Please tell us your capacity and preferred working times.",
        managementTasksTitle: "Potential responsibilities",
        managementTasks: ["Provide organisational support to the founder and follow up on day-to-day operations.", "Coordinate administration, scheduling and document workflows.", "Prepare receipts and invoice processes and coordinate bookkeeping records; tax advice is outside the role.", "Support customer enquiries and coordinate the customer journey.", "Research prospective clients and partners, prepare contacts and organise agreed initial outreach.", "Support freelancer and specialist recruitment, onboarding and assignment scheduling."],
        managementProfileTitle: "What you bring",
        managementProfile: ["Experience in executive assistance, office management, operations, customer service or similar work.", "Strong organisation, reliability and care when handling confidential information.", "Independent working style, clear communication and good follow-through.", "Confidence with digital office, calendar and document tools.", "Very good German or English; the other language is welcome.", "Suitable equipment and a quiet remote working environment."],
        managementQuestion: "Please include in your application",
        managementQuestionCopy: "your relevant experience, expected fee, preferred weekly hours, availability and time zone. Please also confirm that you are seeking freelance work.",
        managementSubject: "Application: Freelance management and operations support",
        managementBody: "Hello,\n\nI am interested in freelance management and operations support.\n\nRelevant experience and tasks:\nExpected fee (hour/day/project):\nPreferred weekly hours and availability:\nTime zone and preferred working times:\n\nI confirm that I am seeking a freelance collaboration.\n\nKind regards",
        managementApply: "Apply for management support",
        managementMailNote: "The button opens a prepared email to info@luminovia.org. Add your CV or profile if relevant.",
    },
};

function BulletList({items}) {
    return <ul className="jobs-bullets">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function JobsPage() {
    const {language} = useLanguage();
    const c = copy[language];
    const lecturerApplication = applicationHref(c.lecturerSubject, c.lecturerBody);
    const managementApplication = applicationHref(c.managementSubject, c.managementBody);
    return (
        <main className="business-page jobs-page" data-business-section="jobs">
            <PageHero label={language === "de" ? "Mit Luminovia arbeiten" : "Work with Luminovia"} title={c.title} copy={c.intro} actions={<a className="lumo-button" href="#opportunities"><span>{c.roleNavTitle}</span><ArrowUpRight size={18} aria-hidden="true"/></a>} visual={
                <div className="jobs-hero-card">
                    <p><BriefcaseBusiness aria-hidden="true"/>{c.kind}</p>
                    <p><Laptop aria-hidden="true"/>{c.location}</p>
                    <p><Euro aria-hidden="true"/>{c.feeSummary}</p>
                    <p><Clock3 aria-hidden="true"/>{c.hoursSummary}</p>
                </div>
            }/>
            <Container id="opportunities" className="business-body jobs-content">
                <nav className="jobs-role-nav" aria-label={c.roleNavTitle}>
                    <h2>{c.roleNavTitle}</h2>
                    <a href="#teaching-role">{c.lecturerNav}<ArrowUpRight size={16} aria-hidden="true"/></a>
                    <a href="#management-role">{c.managementNav}<ArrowUpRight size={16} aria-hidden="true"/></a>
                </nav>
                <section className="jobs-general-note" aria-labelledby="jobs-general-heading">
                    <h2 id="jobs-general-heading">{c.generalTitle}</h2>
                    <p>{c.generalCopy}</p>
                </section>

                <section id="teaching-role" className="jobs-opportunity" aria-labelledby="teaching-role-heading">
                    <div className="jobs-opportunity-heading">
                        <div><p className="business-kicker">{c.lecturerNav}</p><h2 id="teaching-role-heading">{c.lecturerHeading}</h2><p>{c.lecturerIntro}</p></div>
                        <p className="jobs-posted">{c.posted}</p>
                    </div>
                    <section className="jobs-compensation" aria-label={c.payTitle}>
                        <div><span>{c.payTitle}</span><strong>{c.pay}</strong></div>
                        <p>{c.payNote}</p>
                    </section>
                    <div className="jobs-columns">
                        <section><h3>{c.tasksTitle}</h3><BulletList items={c.tasks}/><h3>{c.aiTitle}</h3><p>{c.ai}</p></section>
                        <section>
                            <h3>{c.profileTitle}</h3>
                            <BulletList items={c.profile}/>
                            <h3>{c.scheduleTitle}</h3>
                            <BulletList items={c.scheduleItems}/>
                            <p>{c.scheduleFoot}</p>
                            <p className="jobs-schedule-note">{c.scheduleNote}</p>
                        </section>
                    </div>
                    <section className="jobs-terms"><h3>{c.termsTitle}</h3><p>{c.terms}</p></section>
                    <section className="jobs-application"><div><p className="business-kicker">{c.question}</p><p>{c.questionText}</p></div><a className="lumo-button" href={lecturerApplication}><Mail size={18} aria-hidden="true"/><span>{c.apply}</span><ArrowUpRight size={18} aria-hidden="true"/></a><small>{c.mailNote}</small></section>
                </section>

                <section id="management-role" className="jobs-opportunity" aria-labelledby="management-role-heading">
                    <div className="jobs-opportunity-heading"><div><p className="business-kicker">{c.managementNav}</p><h2 id="management-role-heading">{c.managementHeading}</h2><p>{c.managementIntro}</p></div></div>
                    <div className="jobs-management-metrics">
                        <article><span><Euro size={18} aria-hidden="true"/>{c.managementFeeTitle}</span><strong>{c.managementFee}</strong><p>{c.managementFeeCopy}</p></article>
                        <article><span><Clock3 size={18} aria-hidden="true"/>{c.managementHoursTitle}</span><strong>{c.managementHours}</strong><p>{c.managementHoursCopy}</p></article>
                    </div>
                    <div className="jobs-columns">
                        <section><h3>{c.managementTasksTitle}</h3><BulletList items={c.managementTasks}/></section>
                        <section><h3>{c.managementProfileTitle}</h3><BulletList items={c.managementProfile}/></section>
                    </div>
                    <section className="jobs-application"><div><p className="business-kicker">{c.managementQuestion}</p><p>{c.managementQuestionCopy}</p></div><a className="lumo-button" href={managementApplication}><Mail size={18} aria-hidden="true"/><span>{c.managementApply}</span><ArrowUpRight size={18} aria-hidden="true"/></a><small>{c.managementMailNote}</small></section>
                </section>
            </Container>
        </main>
    );
}
