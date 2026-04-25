import { cn } from "./utils.js";

export default function Card({ children, className = "", shine = true }) {
  return (
    <div className={cn("rainbow-edge group relative overflow-hidden rounded-[2.25rem] border border-white/13 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,.17),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.125),rgba(255,255,255,.062)_52%,rgba(255,255,255,.034))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.11),inset_0_-36px_76px_rgba(255,255,255,.025),0_30px_110px_rgba(0,0,0,.34)] backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-2 hover:rotate-[.18deg] hover:border-white/28 hover:bg-white/[0.105] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_42px_150px_rgba(0,0,0,.34),0_0_62px_rgba(255,255,255,.05)] sm:p-6", className)}>
      {shine && <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />}
      <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-white/10 opacity-40 blur-3xl transition duration-700 group-hover:opacity-70" />
      <div className="pointer-events-none absolute right-[-4rem] top-1/4 h-36 w-36 rounded-full bg-cyan-100/5 opacity-70 blur-3xl transition duration-700 group-hover:translate-y-4" />
      <div className="pointer-events-none absolute inset-y-0 -left-1 w-px bg-gradient-to-b from-transparent via-white/28 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-1 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
