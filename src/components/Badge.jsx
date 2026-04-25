import { cn } from "./utils.js";

export default function Badge({ children, tone = "cyan" }) {
  const tones = {
    cyan: "border-teal-300/25 bg-teal-300/10 text-teal-100",
    violet: "border-indigo-300/25 bg-indigo-300/10 text-indigo-100",
    emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
    amber: "border-lime-300/25 bg-lime-300/10 text-lime-100",
    white: "border-white/10 bg-white/[0.06] text-zinc-200",
  };

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]", tones[tone])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
