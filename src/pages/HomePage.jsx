import { PROFILE, IMAGES } from "../data/profile.js";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Metric from "../components/Metric.jsx";
import Photo from "../components/Photo.jsx";
import ConversionStrip from "../components/ConversionStrip.jsx";
import ClientProofSection from "../components/ClientProofSection.jsx";
import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import { cn } from "../components/utils.js";

function HeroVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative rounded-2xl border border-white/10 bg-[#111418] p-2 shadow-[0_22px_80px_rgba(0,0,0,.35)]">
        <Photo src={IMAGES.hero} alt="Carina Sophie Schoppe portrait" className="aspect-[4/5] rounded-xl" imgClass="object-[50%_25%]" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#08090B]/82 p-4 shadow-xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.14em] text-teal-100">{t.home.mainFocus}</div>
              <div className="mt-1 text-lg font-black text-white">{t.home.focusValue}</div>
            </div>
            <div className="rounded-md bg-white px-3 py-1 text-xs font-black text-zinc-950">{t.home.remote}</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-[#151A1F]/90 p-4 shadow-2xl backdrop-blur-xl sm:-right-8">
        <div className="text-xs font-black uppercase tracking-[0.14em] text-teal-100">{t.home.learnerRating}</div>
        <div className="mt-1 text-sm font-black text-white">4.9 / 5</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const { trustStats, teachingProof, coreOffers, capabilities } = useSiteContent();
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(20,184,166,.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.035),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="enter-up">
            <Badge>{t.home.badge}</Badge>
            <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {t.home.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              {t.home.intro}
            </p>
            <div className="mt-7 rounded-xl border border-white/10 bg-[#111418]/82 p-4 text-sm leading-7 text-zinc-300 backdrop-blur">
              <strong className="text-white">{t.home.coreOffer}</strong> {t.home.coreCopy}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PROFILE.booking}>{t.bookTrainingCall}</Button>
              <Button to="/skills" variant="secondary">{t.home.exploreCapability}</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustStats.map((stat) => <Metric key={stat.label} {...stat} />)}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge tone="violet">{t.home.positioning}</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                {t.home.positioningTitle}
              </h2>
            </div>
            <p className="text-base leading-8 text-zinc-300">
              {t.home.positioningCopy}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {teachingProof.map((proof) => (
              <Card key={proof.title}>
                <div className="mb-5 h-1 w-12 rounded-full bg-teal-200" />
                <div className="text-xs font-black uppercase tracking-[0.14em] text-teal-100">{proof.title}</div>
                <h3 className="mt-3 text-xl font-black text-white">{proof.value}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{proof.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ClientProofSection compact />
      <SoftwareProjectsSection compact />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Badge tone="emerald">{t.home.explore}</Badge>
            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.exploreTitle}</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {t.exploreCards.map(([title, copy, to]) => (
              <Card key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{copy}</p>
                <div className="mt-6">
                  <Button to={to} variant="secondary">{t.open}</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Badge>{t.home.trainingOffers}</Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.trainingOffersTitle}</h2>
            </div>
            <Button to="/contact" variant="secondary">{t.home.requestAvailability}</Button>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {coreOffers.map((offer, index) => (
              <Card key={offer.title} className={cn(index === 1 ? "border-emerald-200/24" : "")}>
                <Badge tone={index === 0 ? "cyan" : index === 1 ? "emerald" : "violet"}>{offer.kicker}</Badge>
                <h3 className="mt-5 text-xl font-black text-white">{offer.title}</h3>
                <p className="mt-3 text-base font-black text-teal-100">{offer.outcome}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{offer.copy}</p>
                <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm font-bold text-zinc-200">Best for: {offer.bestFor}</div>
                <div className="mt-5 space-y-2">
                  {offer.deliverables.slice(0, 4).map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-zinc-200"><span className="text-teal-200">✓</span>{item}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge tone="amber">{t.home.credible}</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.credibleTitle}</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{t.home.credibleCopy}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilities.slice(0, 14).map((capability) => <span key={capability} className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm font-bold text-zinc-200">{capability}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo src={IMAGES.tablet} alt="Carina using a tablet" className="aspect-[3/4] rounded-xl" imgClass="object-[50%_20%]" />
            <Photo src={IMAGES.outdoor} alt="Carina outside a building" className="aspect-[3/4] translate-y-8 rounded-xl" imgClass="object-[50%_20%]" />
          </div>
        </div>
      </section>

      <ConversionStrip />
    </main>
  );
}
