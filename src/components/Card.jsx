import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.055)_50%,rgba(255,255,255,.035))] p-5 shadow-[0_26px_96px_rgba(0,0,0,.25)] backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-2 hover:rotate-[.18deg] hover:border-teal-200/38 hover:bg-white/[0.1] hover:shadow-[0_36px_140px_rgba(20,184,166,.16)] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-100/70 to-transparent" />}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-teal-100/10 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-y-0 -left-1 w-px bg-gradient-to-b from-transparent via-pink-100/25 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-1 left-8 right-8 h-px bg-gradient-to-r from-transparent via-pink-200/40 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
