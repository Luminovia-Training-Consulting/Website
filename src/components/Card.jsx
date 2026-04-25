import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-white/[0.095] via-white/[0.06] to-white/[0.035] p-5 shadow-[0_24px_86px_rgba(0,0,0,.24)] backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-1.5 hover:rotate-[.15deg] hover:border-teal-200/35 hover:bg-white/[0.1] hover:shadow-[0_34px_130px_rgba(20,184,166,.14)] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-100/70 to-transparent" />}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-teal-100/10 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-1 left-8 right-8 h-px bg-gradient-to-r from-transparent via-pink-200/40 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
