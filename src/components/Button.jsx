import { Link } from "react-router-dom";
import { cn } from "./utils.js";

export default function Button({ href, to, children, variant = "primary", onClick }) {
  const base = "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-black leading-tight transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-300/60 sm:w-auto";
  const styles = variant === "primary"
    ? "bg-white text-zinc-950 shadow-[0_12px_36px_rgba(45,212,191,.18)] hover:bg-teal-50"
    : variant === "dark"
      ? "bg-zinc-950 text-white ring-1 ring-white/10 hover:bg-zinc-900"
      : "border border-white/12 bg-white/[0.045] text-white hover:border-teal-200/35 hover:bg-white/[0.075]";
  const arrow = <span className="shrink-0" aria-hidden="true">&gt;</span>;

  if (to) return <Link to={to} className={cn(base, styles)}>{children}{arrow}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cn(base, styles)}>{children}{arrow}</a>;
  return <button onClick={onClick} className={cn(base, styles)}>{children}{arrow}</button>;
}
