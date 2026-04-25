import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.085] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,.17),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_40%)] opacity-70" />}
      <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl transition duration-700 group-hover:scale-150" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
