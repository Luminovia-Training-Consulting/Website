import { Link } from "react-router-dom";
import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";

export default function BlogPage() {
  const { language } = useLanguage();
  const { blogPosts } = useSiteContent();
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);
  const copy = language === "de"
    ? {
      title: "Blog zu AI, Projektmanagement und Lehre mit KI.",
      intro: "Ausfuehrliche, veroeffentlichungsfertige Beitraege zu Themen, die zu meiner Arbeit als AI Lecturer, IT Trainerin und Business Consultant passen.",
      featured: "Neuester Beitrag",
      latest: "Alle Blogbeitraege",
      read: "Artikel lesen",
      all: "Weitere Beitraege untereinander",
      suggest: "Thema vorschlagen",
    }
    : {
      title: "Blog on AI, project work and teaching with AI.",
      intro: "Long-form, publish-ready articles on topics connected to my work as an AI lecturer, IT trainer and business consultant.",
      featured: "Featured latest post",
      latest: "All blog posts",
      read: "Read article",
      all: "More articles listed below",
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
            <Badge tone="cyan">{copy.featured}</Badge>
            <Button to="/contact" variant="secondary">{copy.suggest}</Button>
          </div>
          <Link to={`/blog/${featuredPost.slug}`} className="soft-link-card group flex min-h-[360px] flex-col p-6 sm:p-8">
            <Badge tone="cyan">{copy.featured}</Badge>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
              <span>{featuredPost.category}</span>
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">{featuredPost.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{featuredPost.excerpt}</p>
            <span className="mt-auto pt-8 text-sm font-black text-sky-100">{copy.read} &gt;</span>
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-black text-white">{copy.latest}</h2>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-color:rgba(125,211,252,.5)_rgba(255,255,255,.08)] [scrollbar-width:thin]">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="soft-link-card group flex min-h-[280px] w-[84vw] shrink-0 snap-start flex-col p-5 sm:w-[28rem] lg:w-[31rem]"
              >
                <Badge tone="white">{post.category}</Badge>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                <span className="mt-auto pt-6 text-sm font-black text-sky-100">{copy.read} &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-white">{copy.all}</h2>
          <div className="mt-5 grid gap-3">
            {remainingPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="soft-link-card group grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <Badge tone="white">{post.category}</Badge>
                  <h2 className="mt-4 text-xl font-black leading-7 text-white">{post.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
                </div>
                <span className="text-sm font-black text-sky-100">{copy.read} &gt;</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
