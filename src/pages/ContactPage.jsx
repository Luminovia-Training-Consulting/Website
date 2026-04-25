import { useState } from "react";
import { PROFILE } from "../data/profile.js";
import { faqs } from "../data/content.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

const contacts = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Booking", value: "Online training consultation", href: PROFILE.booking },
  { label: "LinkedIn", value: "linkedin.com/in/carinaschoppe", href: PROFILE.linkedin },
  { label: "GitHub", value: "github.com/CarinaSchoppe", href: PROFILE.github },
];

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
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "The message could not be sent.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent. I will reply by email." });
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
          <div>
            <Badge>Book training</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">Book me for lectures, workshops, training or talks.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Send topic, audience, learner level, timeframe and desired outcome. I will suggest a suitable format: keynote, workshop, multi-day training, course delivery or curriculum support.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PROFILE.booking}>Book an appointment</Button>
              <Button href={`mailto:${PROFILE.email}?subject=Training%20or%20lecture%20request%20for%20Carina%20Sophie%20Schoppe`} variant="secondary">Write an email</Button>
            </div>
            <div className="mt-8 grid gap-3">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-200/30 hover:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  <div className="mt-1 font-bold text-white">{item.value}</div>
                </a>
              ))}
            </div>
          </div>
          <Card>
            <h2 className="text-3xl font-black text-white">Send a request</h2>
            <form onSubmit={submitForm} className="mt-6 grid gap-4">
              <input className="hidden" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Name *
                  <input required name="name" value={form.name} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Email *
                  <input required type="email" name="email" value={form.email} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="you@example.com" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Phone
                  <input name="phone" value={form.phone} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="+49 ..." />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Topic
                  <input name="topic" value={form.topic} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="AI training, keynote, course..." />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Audience / timeframe
                <input name="audience" value={form.audience} onChange={updateField} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="Team size, learner level, preferred date" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Message *
                <textarea required name="message" value={form.message} onChange={updateField} rows="6" className="resize-y rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60" placeholder="Tell me what you need, who the training is for, and what outcome you want." />
              </label>
              <button disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60">
                {sending ? "Sending..." : "Send request"}
              </button>
              {status.message && (
                <div className={status.type === "success" ? "rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm font-bold text-emerald-50" : "rounded-2xl border border-rose-300/30 bg-rose-300/10 p-4 text-sm font-bold text-rose-50"}>
                  {status.message}
                </div>
              )}
            </form>
          </Card>
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
