import {useEffect, useRef, useState} from "react";
import {PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

function cleanPhone(value) {
    return value.replace(/[^\d+]/g, "");
}

function CalendarEmbed({src, title, loadingLabel}) {
    const frameHostRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (shouldLoad || !frameHostRef.current) return undefined;
        if (!("IntersectionObserver" in window)) {
            const fallbackTimer = window.setTimeout(() => setShouldLoad(true), 0);
            return () => window.clearTimeout(fallbackTimer);
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            setShouldLoad(true);
            observer.disconnect();
        }, {rootMargin: "0px 0px 120px"});

        observer.observe(frameHostRef.current);
        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <div ref={frameHostRef} className="booking-embed-frame mt-5 min-h-[600px] rounded-[1.5rem] border border-white/10 bg-white p-0 sm:p-0">
            {shouldLoad ? (
                <iframe
                    src={src}
                    title={title}
                    style={{border: 0}}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    loading="lazy"
                />
            ) : (
                <div className="grid min-h-[600px] place-items-center p-6 text-center" role="status">
                    <div>
                        <div className="mx-auto h-8 w-8 rounded-full border-4 border-sky-100/25 border-t-sky-500" aria-hidden="true"/>
                        <p className="mt-4 text-sm font-bold text-slate-700">{loadingLabel}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ContactPage() {
    const {language, t} = useLanguage();
    const {faqs} = useSiteContent();
    const subject = encodeURIComponent(language === "de" ? "Training- oder Consulting-Anfrage an Luminovia" : "Training or consulting request for Luminovia");
    const jumpLabel = language === "de" ? "Auf dieser Seite" : "On this page";
    const jumpItems = language === "de"
        ? [["#contact-options", "Kontaktwege"], ["#appointment", "Termin"], ["#contact-faq", "FAQ"]]
        : [["#contact-options", "Contact"], ["#appointment", "Appointment"], ["#contact-faq", "FAQ"]];
    const contacts = [
        {
            label: language === "de" ? "Luminovia E-Mail" : "Luminovia email",
            value: PROFILE.email,
            href: `mailto:${PROFILE.email}?subject=${subject}`,
            copy: language === "de" ? "Für Training, Beratung und Projektanfragen" : "For training, consulting and project requests",
        },
        {
            label: language === "de" ? "Direkt an Carina" : "Direct to Carina",
            value: "info@carinaschoppe.com",
            href: `mailto:info@carinaschoppe.com?subject=${subject}`,
            copy: language === "de" ? "Alternative E-Mail für persönliche Abstimmung" : "Alternative email for direct coordination",
        },
        {
            label: language === "de" ? "Telefon Australien" : "Australia phone",
            value: PROFILE.phoneAustralia,
            href: `tel:${cleanPhone(PROFILE.phoneAustralia)}`,
            copy: language === "de" ? "Anruf oder mobile Kontaktaufnahme" : "Call or mobile contact",
        },
        {
            label: language === "de" ? "Telefon Deutschland" : "Germany phone",
            value: PROFILE.phoneGermany,
            href: `tel:${cleanPhone(PROFILE.phoneGermany)}`,
            copy: language === "de" ? "DACH-Kontakt für deutsche Kunden" : "DACH contact for German-speaking clients",
        },
    ];

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={t.contact.badge}
                    title={t.contact.title}
                    copy={t.contact.copy}
                    actions={<><Button href={`mailto:${PROFILE.email}?subject=${subject}`} variant="secondary">{t.contact.emailButton}</Button><Button to="/contact#appointment">{t.contact.calendarFallback}</Button></>}
                    visual={<TrustRail items={[
                        {icon: "@", title: language === "de" ? "E-Mail" : "Email", copy: PROFILE.email},
                        {icon: "CS", title: language === "de" ? "Carina direkt" : "Carina direct", copy: "info@carinaschoppe.com"},
                        {icon: "AU", title: language === "de" ? "Telefon Australien" : "Australia phone", copy: PROFILE.phoneAustralia},
                        {icon: "DE", title: language === "de" ? "Telefon Deutschland" : "Germany phone", copy: PROFILE.phoneGermany},
                    ]}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <SectionJumpNav label={jumpLabel} items={jumpItems} className="mb-8 mt-8"/>
                <div className="deferred-render grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <div className="mt-8 rounded-[1.75rem] border border-sky-100/14 bg-[#071225]/72 p-5 shadow-[0_16px_60px_rgba(0,0,0,.2)]">
                            <h2 className="text-xl font-black text-white">{t.contact.briefTitle}</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{t.contact.briefCopy}</p>
                            <div className="mt-4 grid gap-2">
                                {t.contact.briefItems.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-bold text-slate-200">
                                        <span className="text-sky-200">+</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-sky-200/30 hover:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-sky-200/70">
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">LinkedIn</div>
                                <div className="mt-1 font-bold text-white">linkedin.com/in/carinaschoppe</div>
                            </a>
                            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-sky-200/30 hover:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-sky-200/70">
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">GitHub</div>
                                <div className="mt-1 font-bold text-white">github.com/Luminovia-Training-Consulting</div>
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <Card className="scroll-mt-32" id="contact-options">
                            <h2 className="text-3xl font-black text-white">{t.contact.fallbackTitle}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{t.contact.fallbackCopy}</p>
                            <div className="mt-6 grid gap-4">
                                {contacts.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="group rounded-[1.35rem] border border-white/12 bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_16px_50px_rgba(0,0,0,.18)] transition hover:-translate-y-1 hover:border-sky-200/35 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-sky-200/70"
                                    >
                                        <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{item.label}</div>
                                        <div className="mt-2 text-xl font-black text-white">{item.value}</div>
                                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.copy}</p>
                                    </a>
                                ))}
                            </div>
                        </Card>

                        <section id="appointment" className="booking-embed-panel glass-sheen scroll-mt-32 rounded-[2.15rem] border border-white/13 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.16),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.055)_48%,rgba(255,255,255,.035))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_26px_96px_rgba(0,0,0,.28)] backdrop-blur-2xl sm:p-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <h2 className="text-2xl font-black text-white">{t.contact.appointmentTitle}</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{t.contact.appointmentCopy}</p>
                                </div>
                                <Button href={PROFILE.appointmentSchedule}>{t.contact.appointment}</Button>
                            </div>
                            <CalendarEmbed
                                src={PROFILE.appointmentSchedule}
                                title={t.contact.calendarTitle}
                                loadingLabel={language === "de" ? "Terminkalender wird geladen" : "Loading appointment calendar"}
                            />
                        </section>
                    </div>
                </div>
                <div id="contact-faq" className="deferred-render mt-16 grid scroll-mt-36 gap-4 lg:grid-cols-4">
                    {faqs.map((item) => (
                        <Card key={item.q}>
                            <h3 className="text-lg font-black text-white">{item.q}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
