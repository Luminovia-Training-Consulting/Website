import { Link } from "react-router-dom";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function BlogPage() {
  const { language } = useLanguage();
  const { blogPosts } = useSiteContent();
  const featured = blogPosts[0];
  const copy = language === "de"
    ? {
      title: "Blog zu AI, Projektmanagement und Lehre mit KI.",
      intro: "Ausführliche, veröffentlichungsfertige Beiträge zu Themen, die zu meiner Arbeit als AI Lecturer, IT Trainerin und Business Consultant passen.",
      featured: "Featured Article",
      read: "Artikel lesen",
      all: "Alle Beiträge",
      suggest: "Thema vorschlagen",
    }
    : {
      title: "Blog on AI, project work and teaching with AI.",
      intro: "Long-form, publish-ready articles on topics connected to my work as an AI lecturer, IT trainer and business consultant.",
      featured: "Featured article",
      read: "Read article",
      all: "All articles",
      suggest: "Suggest a topic",
    };

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>Blog</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            {copy.title}
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            {copy.intro}
          </p>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-gradient-to-br from-teal-300/18 via-white/[0.07] to-pink-300/14">
            <Badge tone="cyan">{copy.featured}</Badge>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
              <span>{featured.category}</span>
              <span>{featured.date}</span>
              <span>{featured.readTime}</span>
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">{featured.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{featured.excerpt}</p>
            <div className="mt-7">
              <Button to={`/blog/${featured.slug}`}>{copy.read}</Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.all}</h2>
            <div className="mt-5 space-y-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block rounded-3xl border border-white/10 bg-white/[0.055] p-4 transition duration-500 hover:-translate-y-0.5 hover:border-teal-200/35 hover:bg-white/[0.09]"
                >
                  <div className="text-xs font-black uppercase tracking-[0.14em] text-teal-100">{post.category}</div>
                  <div className="mt-2 font-black text-white">{post.title}</div>
                  <div className="mt-1 text-xs font-bold text-slate-500">{post.readTime}</div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button to="/contact" variant="secondary">{copy.suggest}</Button>
            </div>
          </Card>
        </section>

        <section className="stagger-grid mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="soft-link-card group flex min-h-[310px] flex-col p-5">
              <Badge tone="white">{post.category}</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{post.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <span className="mt-auto pt-6 text-sm font-black text-teal-100">{copy.read} &gt;</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
