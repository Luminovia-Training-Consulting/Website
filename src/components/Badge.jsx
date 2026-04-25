import { cn } from "./utils.js";

export default function Badge({ children, tone = "cyan" }) {
  const tones = {
    cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
    emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
    amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
    white: "border-white/10 bg-white/6 text-slate-200",
  };

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em]", tones[tone])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_16px_currentColor]" />
      {children}
    </span>
  );
}
