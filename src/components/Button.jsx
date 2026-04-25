import { Link } from "react-router-dom";
import { cn } from "./utils.js";

export default function Button({ href, to, children, variant = "primary", onClick }) {
  const base = "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-black leading-tight transition duration-500 ease-out hover:-translate-y-1.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-teal-300/60 sm:w-auto";
  const styles = variant === "primary"
    ? "glass-sheen bg-gradient-to-r from-white via-teal-50 to-pink-50 text-zinc-950 shadow-[0_16px_44px_rgba(45,212,191,.24)] hover:shadow-[0_24px_90px_rgba(244,114,182,.24)]"
    : variant === "dark"
      ? "bg-zinc-950/80 text-white ring-1 ring-white/10 hover:bg-zinc-900"
      : "border border-white/12 bg-white/[0.08] text-white shadow-[0_14px_46px_rgba(0,0,0,.14)] backdrop-blur-xl hover:border-teal-200/40 hover:bg-white/[0.13] hover:shadow-[0_20px_72px_rgba(20,184,166,.13)]";
  const arrow = <span className="shrink-0 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">&gt;</span>;

  if (to) return <Link to={to} className={cn("group", base, styles)}>{children}{arrow}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cn("group", base, styles)}>{children}{arrow}</a>;
  return <button onClick={onClick} className={cn("group", base, styles)}>{children}{arrow}</button>;
}
