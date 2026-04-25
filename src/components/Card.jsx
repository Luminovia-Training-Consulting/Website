import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("rainbow-edge group relative overflow-hidden rounded-[2.15rem] border border-sky-100/15 bg-[linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.062)_50%,rgba(255,255,255,.04))] p-5 shadow-[0_28px_100px_rgba(0,0,0,.32),0_0_0_1px_rgba(147,197,253,.05)] backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-2 hover:rotate-[.18deg] hover:border-sky-200/50 hover:bg-white/[0.11] hover:shadow-[0_38px_145px_rgba(37,99,235,.2),0_24px_90px_rgba(0,0,0,.28)] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/80 to-transparent" />}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-sky-100/14 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-y-0 -left-1 w-px bg-gradient-to-b from-transparent via-blue-100/30 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-1 left-8 right-8 h-px bg-gradient-to-r from-transparent via-sky-200/45 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
