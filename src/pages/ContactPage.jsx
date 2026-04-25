import { useState } from "react";
import { PROFILE } from "../data/profile.js";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  audience: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const { language, t } = useLanguage();
  const { faqs } = useSiteContent();
  const contacts = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: language === "de" ? "Telefon Australien" : "Australia phone", value: PROFILE.phoneAustralia, href: `tel:${PROFILE.phoneAustralia.replaceAll(" ", "")}` },
    { label: language === "de" ? "Telefon Deutschland" : "Germany phone", value: PROFILE.phoneGermany, href: `tel:${PROFILE.phoneGermany.replaceAll(" ", "")}` },
    { label: "LinkedIn", value: "linkedin.com/in/carinaschoppe", href: PROFILE.linkedin },
    { label: "GitHub", value: "github.com/CarinaSchoppe", href: PROFILE.github },
  ];
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const contentType = response.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await response.json().catch(() => ({}))
        : {};

      if (!contentType.includes("application/json")) {
        throw new Error(t.contact.localUnavailable);
      }

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "The message could not be sent.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: t.contact.success });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || `Please email ${PROFILE.email} directly.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <Badge>{t.contact.badge}</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{t.contact.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t.contact.copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${PROFILE.email}?subject=Training%20or%20lecture%20request%20for%20Carina%20Sophie%20Schoppe`} variant="secondary">{t.contact.emailButton}</Button>
            </div>
            <div className="mt-8 grid gap-3">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-200/30 hover:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  <div className="mt-1 font-bold text-white">{item.value}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="order-1 grid gap-5 lg:order-2">
            <Card>
              <h2 className="text-3xl font-black text-white">{t.contact.formTitle}</h2>
              <form onSubmit={submitForm} className="mt-6 grid gap-4">
                <input className="hidden" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-slate-200">
                    {t.contact.name} *
                    <input required name="name" value={form.name} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.namePlaceholder} />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-slate-200">
                    {t.contact.email} *
                    <input required type="email" name="email" value={form.email} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.emailPlaceholder} />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-slate-200">
                    {t.contact.phone}
                    <input name="phone" value={form.phone} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.phonePlaceholder} />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-slate-200">
                    {t.contact.topic}
                    <input name="topic" value={form.topic} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.topicPlaceholder} />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  {t.contact.audience}
                  <input name="audience" value={form.audience} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.audiencePlaceholder} />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  {t.contact.message} *
                  <textarea required name="message" value={form.message} onChange={updateField} rows="6" className="resize-y rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-200/60" placeholder={t.contact.messagePlaceholder} />
                </label>
                <button disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-sky-500/20 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60">
                  {sending ? t.contact.sending : t.contact.send}
                </button>
                {status.message && (
                  <div className={status.type === "success" ? "rounded-2xl border border-blue-300/30 bg-blue-300/10 p-4 text-sm font-bold text-blue-50" : "rounded-2xl border border-rose-300/30 bg-rose-300/10 p-4 text-sm font-bold text-rose-50"}>
                    {status.type === "error" && <div className="mb-2 text-base font-black">{t.contact.errorTitle}</div>}
                    <p>{status.message}</p>
                    {status.type === "error" && (
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <a href={`mailto:${PROFILE.email}?subject=Training%20or%20lecture%20request%20for%20Carina%20Sophie%20Schoppe`} className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200/80">{t.contact.emailButton}</a>
                        <a href={PROFILE.appointmentSchedule} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-200/80">{t.contact.calendarFallback}</a>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </Card>

            <Card>
              <h2 className="text-2xl font-black text-white">{t.contact.fallbackTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{t.contact.fallbackCopy}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href={`mailto:${PROFILE.email}?subject=Training%20or%20lecture%20request%20for%20Carina%20Sophie%20Schoppe`} variant="secondary">{t.contact.emailButton}</Button>
                <Button href={PROFILE.appointmentSchedule} variant="secondary">{t.contact.calendarFallback}</Button>
              </div>
            </Card>

            <section id="appointment" className="glass-sheen rounded-[2.15rem] border border-white/13 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.16),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.055)_48%,rgba(255,255,255,.035))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_26px_96px_rgba(0,0,0,.28)] backdrop-blur-2xl sm:p-6">
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
