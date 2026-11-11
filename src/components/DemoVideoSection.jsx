import {useState} from "react";
import {ArrowUpRight, Play} from "lucide-react";
import {Container} from "./LuminoviaDesign.jsx";
import {IMAGES} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {cn} from "./utils.js";
import "../styles/people.css";

const DEMO_VIDEO_URL = "https://www.youtube-nocookie.com/embed/sYMO5sb-YKg?rel=0";
const DEMO_WATCH_URL = "https://www.youtube.com/watch?v=sYMO5sb-YKg";

const copy = {
    en: {
        training: {
            label: "From a live session",
            title: "How we teach AI in practice",
            intro: "This German-language session shows how to choose an everyday use for AI, check what the tool produces and spot where human review matters.",
        },
        consulting: {
            label: "Consulting demo",
            title: "AI in a business context",
            intro: "Carina Schoppe shows how teams can choose a practical AI use case, check the results and decide where human review is needed.",
        },
        meta: "12 minutes · In German",
        videoTitle: "Luminovia AI session in a company context",
        watch: "Watch on YouTube",
        load: "Load video preview",
        note: "YouTube loads when you activate the preview.",
    },
    de: {
        training: {
            label: "Aus einem Live-Training",
            title: "So vermitteln wir KI in der Praxis",
            intro: "In diesem Ausschnitt geht es darum, einen sinnvollen KI-Anwendungsfall für den Arbeitsalltag zu finden, Ergebnisse zu prüfen und zu erkennen, wo menschliche Kontrolle nötig ist.",
        },
        consulting: {
            label: "Beratungsdemo",
            title: "KI im Unternehmenskontext",
            intro: "Carina Schoppe zeigt, wie Teams einen sinnvollen KI-Anwendungsfall auswählen, Ergebnisse prüfen und festlegen, wo menschliche Kontrolle nötig ist.",
        },
        meta: "12 Minuten · Auf Deutsch",
        videoTitle: "Luminovia KI-Session im Unternehmenskontext",
        watch: "Auf YouTube ansehen",
        load: "Video-Vorschau laden",
        note: "YouTube wird erst geladen, wenn Sie die Vorschau aktivieren.",
    },
};

function focusPlayer(frame) {
    frame?.focus();
}

export default function DemoVideoSection({className = "", variant = "training"}) {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const {language} = useLanguage();
    const c = copy[language];
    const {label, title, intro} = c[variant];

    return (
        <section id="demo-session" className={cn("people-demo people-section", className)} aria-labelledby="demo-session-heading">
            <Container>
                <div className="people-demo-layout">
                    <div>
                        <p className="lumo-section-label">{label}</p>
                        <h2 id="demo-session-heading">{title}</h2>
                        <p>{intro}</p>
                        <a className="people-text-link" href={DEMO_WATCH_URL} target="_blank" rel="noreferrer">{c.watch} <ArrowUpRight aria-hidden="true"/></a>
                    </div>
                    <figure className="people-demo-media">
                        {videoLoaded ? (
                            <iframe
                                ref={focusPlayer}
                                src={DEMO_VIDEO_URL}
                                title={c.videoTitle}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ) : (
                            <button type="button" className="people-demo-preview" onClick={() => setVideoLoaded(true)} aria-describedby="demo-note">
                                <img src={IMAGES.luminoviaLogoMark} width="50" height="50" alt=""/>
                                <span className="people-demo-play"><Play aria-hidden="true" size={30}/></span>
                                <span>{c.load}</span>
                            </button>
                        )}
                        <figcaption>{c.meta} <span id="demo-note">{c.note}</span></figcaption>
                    </figure>
                </div>
            </Container>
        </section>
    );
}
