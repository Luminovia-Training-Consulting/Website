import { PROFILE } from "../data/profile.js";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

function cleanPhone(value) {
  return value.replace(/[^\d+]/g, "");
}

export default function ContactPage() {
  const { language, t } = useLanguage();
  const { faqs } = useSiteContent();
  const subject = encodeURIComponent("Training or lecture request for Carina Sophie Schoppe");
  const contacts = [
    {
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}?subject=${subject}`,
      copy: language === "de" ? "Direkte Anfrage per E-Mail" : "Direct request by email",
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
      copy: language === "de" ? "DACH-Kontakt fuer deutsche Kunden" : "DACH contact for German-speaking clients",
    },
  ];

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>{t.contact.badge}</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{t.contact.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t.contact.copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${PROFILE.email}?subject=${subject}`} variant="secondary">{t.contact.emailButton}</Button>
              <Button to="/contact#appointment">{t.contact.calendarFallback}</Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-sky-200/30 hover:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-sky-200/70">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">LinkedIn</div>
                <div className="mt-1 font-bold text-white">linkedin.com/in/carinaschoppe</div>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-sky-200/30 hover:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-sky-200/70">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">GitHub</div>
                <div className="mt-1 font-bold text-white">github.com/CarinaSchoppe</div>
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

            <section id="appointment" className="glass-sheen scroll-mt-32 rounded-[2.15rem] border border-white/13 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.16),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.055)_48%,rgba(255,255,255,.035))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_26px_96px_rgba(0,0,0,.28)] backdrop-blur-2xl sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">{t.contact.appointmentTitle}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{t.contact.appointmentCopy}</p>
                </div>
                <Button href={PROFILE.appointmentSchedule}>{t.contact.appointment}</Button>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
                <iframe
                  src={PROFILE.appointmentSchedule}
                  title={t.contact.calendarTitle}
                  className="h-[600px] w-full"
                  style={{ border: 0 }}
                  frameBorder="0"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
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
