import { IMAGES, PROFILE } from "../data/profile.js";
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
    <div className="hero-float relative mx-auto hidden w-full max-w-[520px] lg:block">
      <div className="glass-sheen relative rounded-[3rem] border border-white/12 bg-gradient-to-br from-white/[0.15] via-white/[0.07] to-white/[0.035] p-2 shadow-[0_36px_135px_rgba(0,0,0,.36)] backdrop-blur-2xl transition duration-700 hover:-translate-y-1.5">
        <div className="breathing-halo pointer-events-none absolute -inset-2 rounded-[3.1rem] bg-gradient-to-br from-sky-200/22 via-transparent to-blue-300/18 opacity-75 blur-xl" />
        <Photo src={IMAGES.hero} alt="Portrait of Carina Sophie Schoppe for AI and IT lecturer profile" className="relative aspect-[4/5] rounded-[2.1rem]" imgClass="object-[50%_25%]" loading="eager" />
        <div className="absolute bottom-4 left-4 right-4 rounded-[1.6rem] border border-sky-100/20 bg-[#071225]/90 p-4 shadow-[0_18px_70px_rgba(0,0,0,.42),0_0_38px_rgba(56,189,248,.12)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{t.home.mainFocus}</div>
              <div className="mt-1 text-lg font-black text-white">{t.home.focusValue}</div>
            </div>
            <div className="rounded-full bg-white px-3 py-1 text-xs font-black text-zinc-950">{t.home.remote}</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 top-8 rounded-[1.35rem] border border-sky-100/25 bg-[#071225]/92 p-4 shadow-[0_20px_80px_rgba(0,0,0,.42),0_0_44px_rgba(56,189,248,.15)] backdrop-blur-xl transition duration-700 hover:-translate-y-1 sm:-right-8">
        <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100 drop-shadow-[0_1px_10px_rgba(0,0,0,.8)]">{t.home.learnerRating}</div>
        <div className="mt-1 text-sm font-black text-white drop-shadow-[0_1px_10px_rgba(0,0,0,.85)]">4.7 / 5</div>
      </div>
      <div className="absolute -left-10 top-1/3 grid gap-3">
        <span className="signal-pill">AI teaching</span>
        <span className="signal-pill translate-x-6">Agentic workflows</span>
      </div>
    </div>
  );
}

function MobileHeroSignal() {
  const { t } = useLanguage();
  return (
    <div className="glass-sheen mt-5 grid grid-cols-[5.5rem_1fr] items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.085] p-2 shadow-[0_22px_80px_rgba(0,0,0,.2)] backdrop-blur-2xl lg:hidden">
      <Photo src={IMAGES.headshot} alt="Headshot of Carina Sophie Schoppe" className="aspect-square rounded-[1.35rem]" imgClass="object-[50%_18%]" loading="eager" />
      <div className="pr-2">
        <div className="text-[11px] font-black uppercase tracking-[0.14em] text-sky-100">{t.home.mainFocus}</div>
        <div className="mt-1 text-sm font-black leading-5 text-white">{t.home.focusValue}</div>
        <div className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-black text-zinc-950">{t.home.remote}</div>
      </div>
    </div>
  );
}

function AssetButtons({ t }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button href={PROFILE.lecturerProfile} variant="secondary" download="lecturer.zip" showArrow={false}>{t.assets.lecturerProfile}</Button>
      <Button href={PROFILE.trainingPortfolio} variant="secondary" download="carina-sophie-schoppe-training-portfolio.html" showArrow={false}>{t.assets.trainingPortfolio}</Button>
      <Button href={PROFILE.trainingCatalogue} variant="secondary" download="carina-sophie-schoppe-ai-it-training-catalogue.html" showArrow={false}>{t.assets.trainingCatalogue}</Button>
    </div>
  );
}

function MiniServiceCard({ service, t }) {
  return (
    <Card>
      <h3 className="text-xl font-black text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{service.description}</p>
      <div className="mt-5 grid gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.audience}:</strong> {service.audience}</div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.format}:</strong> {service.format}</div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><strong className="text-sky-100">{t.serviceLabels.duration}:</strong> {service.duration}</div>
      </div>
      <div className="mt-5">
        <Button to="/contact" variant="secondary">{t.requestTraining}</Button>
      </div>
    </Card>
  );
}

function JumpNavigation({ items, label }) {
  return (
    <nav className="sticky top-[4.45rem] z-30 mt-[4.45rem] border-b border-white/10 bg-[#070B16]/78 px-4 py-4 shadow-[0_18px_70px_rgba(0,0,0,.24)] backdrop-blur-2xl sm:px-6 sm:py-5 lg:px-8" aria-label={label}>
      <div className="mx-auto flex max-w-7xl items-center gap-5">
        <span className="hidden shrink-0 text-xs font-black uppercase tracking-[0.16em] text-sky-100 lg:inline">{label}</span>
        <div className="flex min-w-0 flex-1 snap-x gap-3 overflow-x-auto pb-1 [scrollbar-color:rgba(125,211,252,.42)_rgba(255,255,255,.06)] [scrollbar-width:thin]">
          {items.map(([href, text]) => (
            <a key={href} href={href} className="shrink-0 snap-start rounded-full border border-white/10 bg-white/[0.065] px-5 py-2.5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-200/40 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200/80">
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const { trustStats, teachingProof, coreOffers, capabilities, trainingTopics, audienceCards, formats, serviceOfferings, featuredTrainingTopics, trustSignals, blogPosts } = useSiteContent();
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  return (
    <main>
      <JumpNavigation items={t.home.jumpNav} label={t.home.jumpNavLabel} />

      <section className="soft-section relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(56,189,248,.18),transparent_34%),linear-gradient(245deg,rgba(37,99,235,.17),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="enter-up">
            <Badge>{t.home.badge}</Badge>
            <MobileHeroSignal />
            <h1 className="hero-title mt-6 max-w-5xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {t.home.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              {t.home.intro}
            </p>
            <div className="glass-sheen mt-7 rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 text-sm leading-7 text-zinc-300 shadow-[0_18px_70px_rgba(0,0,0,.2)] backdrop-blur-2xl">
              <strong className="text-white">{t.home.coreOffer}</strong> {t.home.coreCopy}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">{t.bookTrainingCall}</Button>
              <Button to="/skills" variant="secondary">{t.home.exploreCapability}</Button>
              <Button href={PROFILE.lecturerProfile} variant="secondary" download="lecturer.zip" showArrow={false}>{t.home.downloadProfile}</Button>
            </div>
            <div className="mt-5">
              <AssetButtons t={t} />
            </div>
            <div className="stagger-grid mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustStats.map((stat) => <Metric key={stat.label} {...stat} />)}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="overview" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
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
          <div className="stagger-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {teachingProof.map((proof) => (
              <Card key={proof.title}>
                <div className="mb-5 h-1 w-12 rounded-full bg-sky-200" />
                <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{proof.title}</div>
                <h3 className="mt-3 text-xl font-black text-white">{proof.value}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{proof.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="soft-section scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="rounded-[1.4rem] border border-sky-100/14 bg-[#071225]/74 p-4 shadow-[0_16px_60px_rgba(0,0,0,.22)] backdrop-blur-xl">
                <div className="text-xs font-black uppercase tracking-[0.13em] text-sky-100">{signal.title}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training-topics" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Badge>{t.home.topics}</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.topicsTitle}</h2>
            </div>
            <p className="text-base leading-8 text-zinc-300">{t.home.topicsCopy}</p>
          </div>
          <div className="stagger-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trainingTopics.map((topic) => (
              <Card key={topic.group}>
                <h3 className="text-xl font-black text-white">{topic.group}</h3>
                <div className="mt-5 grid gap-2">
                  {topic.items.map((item) => (
                    <span key={item} className="rounded-2xl border border-sky-100/12 bg-[#071225]/72 px-3 py-2 text-sm font-bold text-zinc-200">{item}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="remote" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-sky-100/16 bg-[linear-gradient(135deg,rgba(56,189,248,.12),rgba(37,99,235,.08),rgba(255,255,255,.035))] p-6 shadow-[0_28px_110px_rgba(37,99,235,.16)] backdrop-blur-2xl sm:p-8">
          <Badge tone="cyan">Remote-first</Badge>
          <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.remoteTitle}</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">{t.home.remoteCopy}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">{t.bookConsultation}</Button>
            <Button to="/training" variant="secondary">{t.home.exploreCapability}</Button>
          </div>
        </div>
      </section>

      <section id="services" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Badge tone="cyan">{t.home.trainingOffers}</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.servicesTitle}</h2>
            </div>
            <p className="text-base leading-8 text-zinc-300">{t.home.servicesCopy}</p>
          </div>
          <div className="stagger-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceOfferings.slice(0, 6).map((service) => <MiniServiceCard key={service.title} service={service} t={t} />)}
          </div>
          <div className="mt-7 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-7 text-zinc-300">{t.assets.copy}</p>
            <AssetButtons t={t} />
          </div>
        </div>
      </section>

      <section id="audiences" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Badge tone="violet">{t.home.audiences}</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.audiencesTitle}</h2>
            </div>
            <p className="text-base leading-8 text-zinc-300">{t.home.audiencesCopy}</p>
          </div>
          <div className="stagger-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((audience) => (
              <Card key={audience.title}>
                <h3 className="text-xl font-black text-white">{audience.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{audience.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {audience.bullets.map((bullet) => <span key={bullet} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-sky-100">{bullet}</span>)}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Badge tone="cyan">{t.home.formats}</Badge>
              <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.formatsTitle}</h2>
            </div>
            <Button to="/contact" variant="secondary">{t.home.requestAvailability}</Button>
          </div>
          <div className="stagger-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <Card key={format.title}>
                <Badge tone="white">{format.label}</Badge>
                <h3 className="mt-5 text-xl font-black text-white">{format.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{format.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-topics" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Badge tone="cyan">{t.home.topics}</Badge>
            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.featuredTitle}</h2>
          </div>
          <div className="stagger-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredTrainingTopics.map((service) => <MiniServiceCard key={service.title} service={service} t={t} />)}
          </div>
        </div>
      </section>

      <div id="proof" className="scroll-mt-28">
        <ClientProofSection compact />
      </div>

      <section id="explore" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Badge tone="emerald">{t.home.explore}</Badge>
            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.exploreTitle}</h2>
          </div>
          <div className="stagger-grid grid gap-4 lg:grid-cols-3">
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

      <section id="offers" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Badge>{t.home.trainingOffers}</Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.trainingOffersTitle}</h2>
            </div>
            <Button to="/contact" variant="secondary">{t.home.requestAvailability}</Button>
          </div>
          <div className="stagger-grid grid gap-5 lg:grid-cols-3">
            {coreOffers.map((offer, index) => (
              <Card key={offer.title} className={cn(index === 1 ? "border-blue-200/24" : "")}>
                <Badge tone={index === 0 ? "cyan" : index === 1 ? "emerald" : "violet"}>{offer.kicker}</Badge>
                <h3 className="mt-5 text-xl font-black text-white">{offer.title}</h3>
                <p className="mt-3 text-base font-black text-sky-100">{offer.outcome}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{offer.copy}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm font-bold text-zinc-200">Best for: {offer.bestFor}</div>
                <div className="mt-5 space-y-2">
                  {offer.deliverables.slice(0, 4).map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-zinc-200"><span className="text-sky-200">✓</span>{item}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credibility" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge tone="amber">{t.home.credible}</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.credibleTitle}</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{t.home.credibleCopy}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilities.slice(0, 14).map((capability) => <span key={capability} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-zinc-200 backdrop-blur">{capability}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo src={IMAGES.tablet} alt="Carina Sophie Schoppe reviewing digital learning material on a tablet" className="aspect-[3/4] rounded-[1.8rem]" imgClass="object-[50%_20%]" />
            <Photo src={IMAGES.outdoor} alt="Carina Sophie Schoppe in a professional outdoor portrait" className="aspect-[3/4] translate-y-8 rounded-[1.8rem]" imgClass="object-[50%_20%]" />
          </div>
        </div>
      </section>

      <section id="blog-preview" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Badge tone="violet">{t.home.blogPreview}</Badge>
              <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.blogPreviewTitle}</h2>
            </div>
            <Button to="/blog" variant="secondary">{t.nav.blog}</Button>
          </div>
          <div className="stagger-grid grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="soft-link-card group flex min-h-[260px] flex-col p-5">
                <Badge tone="white">{post.hubCategory || post.category}</Badge>
                <div className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-zinc-400">{post.date} · {post.readTime}</div>
                <h3 className="mt-4 text-xl font-black text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{post.excerpt}</p>
                <span className="mt-auto pt-5 text-sm font-black text-sky-100">{t.open} &gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="software-preview" className="scroll-mt-28">
        <SoftwareProjectsSection compact />
      </div>

      <section id="process" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Badge tone="emerald">{t.home.process}</Badge>
            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.processTitle}</h2>
          </div>
          <div className="stagger-grid grid gap-4 md:grid-cols-5">
            {t.home.processSteps.map(([step, title, copy]) => (
              <Card key={step}>
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-100/20 bg-sky-100 text-base font-black text-slate-950">{step}</div>
                <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="my-way-preview" className="soft-section scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl sm:p-8">
          <Badge tone="white">{t.home.myWayPreview}</Badge>
          <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{t.home.myWayPreviewTitle}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">{t.exploreCards[2][1]}</p>
          <div className="mt-7">
            <Button to="/my-way" variant="secondary">{t.nav.myWay}</Button>
          </div>
        </div>
      </section>

      <div id="contact-cta" className="scroll-mt-28">
        <ConversionStrip />
      </div>
    </main>
  );
}
