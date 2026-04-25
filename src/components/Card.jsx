import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-white/10 bg-[#111418]/88 p-5 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-teal-200/35 hover:bg-[#151A1F] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
