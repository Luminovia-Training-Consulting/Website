import { Link } from "react-router-dom";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";

export default function BlogPage() {
  const { language } = useLanguage();
  const { blogPosts } = useSiteContent();
  const featuredPosts = blogPosts.slice(0, 3);
  const tilePosts = blogPosts.slice(3);
  const copy = language === "de"
    ? {
      title: "Blog zu AI, Projektmanagement und Lehre mit KI.",
      intro: "Ausfuehrliche, veroeffentlichungsfertige Beitraege zu Themen, die zu meiner Arbeit als AI Lecturer, IT Trainerin und Business Consultant passen.",
      featured: "Featured Articles",
      latest: "Scrollbare Leseliste",
      read: "Artikel lesen",
      all: "Weitere Beitraege",
      suggest: "Thema vorschlagen",
    }
    : {
      title: "Blog on AI, project work and teaching with AI.",
      intro: "Long-form, publish-ready articles on topics connected to my work as an AI lecturer, IT trainer and business consultant.",
      featured: "Featured articles",
      latest: "Scrollable reading list",
      read: "Read article",
      all: "More articles",
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

        <section className="mt-12">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge tone="cyan">{copy.featured}</Badge>
              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">{copy.latest}</h2>
            </div>
            <Button to="/contact" variant="secondary">{copy.suggest}</Button>
          </div>

          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-color:rgba(125,211,252,.5)_rgba(255,255,255,.08)] [scrollbar-width:thin]">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="soft-link-card group flex min-h-[360px] w-[86vw] shrink-0 snap-start flex-col p-5 sm:w-[34rem] lg:w-[38rem]"
              >
                <Badge tone="white">{post.category}</Badge>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-5 text-3xl font-black text-white">{post.title}</h2>
                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{post.excerpt}</p>
                <span className="mt-auto pt-6 text-sm font-black text-sky-100">{copy.read} &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-white">{copy.all}</h2>
          <div className="stagger-grid mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tilePosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="soft-link-card group flex min-h-[230px] flex-col p-4">
                <Badge tone="white">{post.category}</Badge>
                <h2 className="mt-4 text-lg font-black leading-6 text-white">{post.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-300">{post.excerpt}</p>
                <span className="mt-auto pt-5 text-sm font-black text-sky-100">{copy.read} &gt;</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
