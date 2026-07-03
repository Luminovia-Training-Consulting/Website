import {useLanguage} from "../i18n.jsx";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";
import {cn} from "./utils.js";

const DEMO_VIDEO_URL = "https://www.youtube-nocookie.com/embed/sYMO5sb-YKg?rel=0";
const DEMO_WATCH_URL = "https://www.youtube.com/watch?v=sYMO5sb-YKg";

const copy = {
    en: {
        badge: "Demo video",
        title: "See how a live AI session can feel before you book.",
        intro: "This 12-minute demo shows how I explain productive and safe AI use in a business context: clear concepts, practical examples, realistic risks and a structure that works for professional learners.",
        eyebrow: "AI in a company context",
        videoTitle: "KI Unternehmenskontext Carina Schoppe",
        meta: ["12-minute excerpt", "German demo", "Responsible AI use"],
        points: [
            "Calm, structured remote delivery instead of abstract AI hype.",
            "Business-oriented examples for tool use, limits and quality checks.",
            "A realistic impression for customers planning workshops, talks or team training.",
        ],
        primary: "Discuss a demo format",
        secondary: "Watch on YouTube",
        note: "Embedded with YouTube's privacy-enhanced domain.",
    },
    de: {
        badge: "Demo-Video",
        title: "So kann eine Live-Session zu produktivem und sicherem KI-Einsatz aussehen.",
        intro: "Dieser ca. 12-minutige Demo-Ausschnitt zeigt, wie ich KI im Unternehmenskontext erkläre: verständliche Konzepte, praktische Beispiele, realistische Risiken und eine Struktur, die für professionelle Lernende funktioniert.",
        eyebrow: "KI im Unternehmenskontext",
        videoTitle: "KI Unternehmenskontext Carina Schoppe",
        meta: ["ca. 12 Minuten", "deutsche Demo", "Responsible AI Use"],
        points: [
            "Ruhige, strukturierte Remote-Durchführung statt abstraktem KI-Hype.",
            "Businessnahe Beispiele für Tool-Nutzung, Grenzen und Qualitätschecks.",
            "Ein realistischer Eindruck für Kunden, die Workshops, Vorträge oder Teamtrainings planen.",
        ],
        primary: "Demo-Format besprechen",
        secondary: "Auf YouTube ansehen",
        note: "Eingebettet über die datenschutzfreundlichere YouTube-NoCookie-Domain.",
    },
};

export default function DemoVideoSection({className = ""}) {
    const {language} = useLanguage();
    const t = copy[language];

    return (
        <section id="demo-session" className={cn("demo-video-section scroll-mt-40 px-4 py-12 sm:px-6 lg:px-8", className)}>
            <div className="mx-auto max-w-7xl">
                <div className="demo-video-panel relative overflow-hidden rounded-[2.35rem] border border-white/12 bg-[radial-gradient(circle_at_14%_0%,rgba(251,113,133,.18),transparent_36%),radial-gradient(circle_at_90%_16%,rgba(52,211,153,.16),transparent_34%),linear-gradient(135deg,rgba(9,22,46,.93),rgba(7,13,27,.96)_58%,rgba(24,31,57,.92))] p-5 shadow-[0_28px_110px_rgba(0,0,0,.30)] backdrop-blur-2xl sm:p-7 lg:p-8">
                    <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-80"/>
                    <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                        <div>
                            <Badge tone="rose">{t.badge}</Badge>
                            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">{t.eyebrow}</p>
                            <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">{t.title}</h2>
                            <p className="mt-5 text-base leading-8 text-slate-300">{t.intro}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {t.meta.map((item) => (
                                    <span key={item} className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-sky-100">{item}</span>
                                ))}
                            </div>
                            <div className="mt-6 grid gap-3">
                                {t.points.map((point, index) => (
                                    <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm font-bold leading-6 text-slate-200">
                                        <span className="mr-2 text-sky-100">{String(index + 1).padStart(2, "0")}</span>
                                        {point}
                                    </div>
                                ))}
                            </div>
                            <div className="button-stack mt-7 flex flex-col gap-3 sm:flex-row">
                                <Button to="/contact#appointment">{t.primary}</Button>
                                <Button href={DEMO_WATCH_URL} variant="secondary">{t.secondary}</Button>
                            </div>
                        </div>
                        <div>
                            <div className="demo-video-frame glass-sheen relative overflow-hidden rounded-[1.65rem] border border-white/14 bg-black shadow-[0_24px_90px_rgba(0,0,0,.36),0_0_42px_rgba(56,189,248,.10)]">
                                <iframe
                                    className="aspect-video w-full border-0"
                                    src={DEMO_VIDEO_URL}
                                    title={t.videoTitle}
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 text-xs font-bold leading-5 text-slate-400">{t.note}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
