import { PROFILE } from "../data/profile.js";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import { cn } from "../components/utils.js";

function AssetButtons({ t }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button href={PROFILE.lecturerProfile} variant="secondary" download="lecturer.zip" showArrow={false}>{t.assets.lecturerProfile}</Button>
      <Button href={PROFILE.trainingPortfolio} variant="secondary" download="carina-sophie-schoppe-training-portfolio.html" showArrow={false}>{t.assets.trainingPortfolio}</Button>
      <Button href={PROFILE.trainingCatalogue} variant="secondary" download="carina-sophie-schoppe-ai-it-training-catalogue.html" showArrow={false}>{t.assets.trainingCatalogue}</Button>
    </div>
  );
}

function ServiceCard({ service, t }) {
  return (
    <Card>
      <h2 className="text-2xl font-black text-white">{service.title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
      <div className="mt-5 grid gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.audience}:</strong> {service.audience}</div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.format}:</strong> {service.format}</div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-slate-200"><strong className="text-sky-100">{t.serviceLabels.duration}:</strong> {service.duration}</div>
      </div>
      <div className="mt-5">
        <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{t.serviceLabels.outcomes}</div>
        <div className="mt-3 grid gap-2">
          {service.outcomes.map((outcome) => <span key={outcome} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{outcome}</span>)}
        </div>
      </div>
      <div className="mt-6">
        <Button to="/contact#contact-options" variant="secondary">{t.requestTraining}</Button>
      </div>
    </Card>
  );
}

export default function TrainingPage() {
  const { language, t } = useLanguage();
  const { coreOffers, trainingTopics, formats, serviceOfferings, audienceCards, trustSignals } = useSiteContent();
  const copy = language === "de"
    ? {
      badge: "Training & Services",
      title: "Buchbare AI-, IT- und Business-Technology-Trainings.",
      intro: "Klare Service-Angebote für Bildungsanbieter, Unternehmen, Hochschulen und internationale Partner, die professionelle digitale Bildung brauchen.",
      topics: "Themen",
      areas: "Zentrale Lehrbereiche",
      custom: "Individuelles Thema anfragen",
      formats: "Formate",
      formatsTitle: "Trainingsformate, die ich durchführen kann",
      services: "Services",
      servicesTitle: "Wofür Carina gebucht werden kann",
      audiences: "Zielgruppen",
      audiencesTitle: "Professionelle B2B- und Bildungsumgebungen",
      proof: "Trust & Proof",
      proofTitle: "Warum das Profil für ernsthafte Trainingsprojekte passt",
    }
    : {
      badge: "Training & Services",
      title: "Bookable AI, IT and business technology training services.",
      intro: "Clear service offers for training providers, companies, universities and international partners that need professional digital education delivery.",
      topics: "Topics",
      areas: "Core teaching areas",
      custom: "Ask for custom topic",
      formats: "Formats",
      formatsTitle: "Training formats I can deliver",
      services: "Services",
      servicesTitle: "What Carina can be booked for",
      audiences: "Who I work with",
      audiencesTitle: "Professional B2B and education-sector environments",
      proof: "Trust & proof",
      proofTitle: "Why the profile fits serious training projects",
    };
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>{copy.badge}</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
          <div>
            <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
            <div className="mt-6">
              <AssetButtons t={t} />
            </div>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-7 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Badge tone="cyan">{copy.services}</Badge>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{copy.servicesTitle}</h2>
            </div>
            <p className="text-base leading-8 text-slate-300">{t.home.servicesCopy}</p>
          </div>
          <div className="stagger-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceOfferings.map((service) => <ServiceCard key={service.title} service={service} t={t} />)}
          </div>
        </section>

        <section className="mt-16">
          <Badge tone="violet">{copy.audiences}</Badge>
          <h2 className="mt-4 text-3xl font-black text-white">{copy.audiencesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((audience) => (
              <Card key={audience.title}>
                <h3 className="text-xl font-black text-white">{audience.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{audience.copy}</p>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {coreOffers.map((offer) => (
            <Card key={offer.title} className={cn("bg-gradient-to-br", offer.gradient)}>
              <Badge tone="cyan">{offer.kicker}</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{offer.title}</h2>
              <p className="mt-3 text-lg font-black text-sky-100">{offer.outcome}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{offer.copy}</p>
              <div className="mt-7 grid gap-3">
                {offer.deliverables.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">{item}</div>)}
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-16">
          <Badge tone="emerald">{copy.proof}</Badge>
          <h2 className="mt-4 text-3xl font-black text-white">{copy.proofTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <Card key={signal.title}>
                <h3 className="text-xl font-black text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{signal.copy}</p>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <Badge tone="emerald">{copy.topics}</Badge>
              <h2 className="mt-4 text-3xl font-black text-white">{copy.areas}</h2>
            </div>
            <Button to="/contact#contact-options" variant="secondary">{copy.custom}</Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {trainingTopics.map((topic) => (
              <Card key={topic.group}>
                <h2 className="text-2xl font-black text-white">{topic.group}</h2>
                <div className="mt-5 space-y-3">
                  {topic.items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-slate-200">{item}</div>)}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Badge tone="violet">{copy.formats}</Badge>
          <h2 className="mt-4 text-3xl font-black text-white">{copy.formatsTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <Card key={format.title}>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">{format.label}</div>
                <h3 className="mt-3 text-2xl font-black text-white">{format.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{format.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
