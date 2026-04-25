import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.065] p-5 shadow-[0_22px_80px_rgba(0,0,0,.24)] backdrop-blur-2xl transition duration-500 ease-out hover:-translate-y-1 hover:border-teal-200/35 hover:bg-white/[0.09] hover:shadow-[0_28px_110px_rgba(20,184,166,.12)] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-100/70 to-transparent" />}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-teal-100/10 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
