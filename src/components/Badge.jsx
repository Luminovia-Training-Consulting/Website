import {cn} from "./utils.js";

export default function Badge({children, tone = "cyan"}) {
    const tones = {
        cyan: "border-sky-300/30 bg-sky-300/15 text-sky-100",
        blue: "border-blue-300/30 bg-blue-500/15 text-blue-100",
        violet: "border-violet-300/30 bg-violet-500/15 text-violet-100",
        emerald: "border-emerald-300/30 bg-emerald-500/15 text-emerald-100",
        rose: "border-rose-300/30 bg-rose-500/15 text-rose-100",
        orange: "border-orange-300/35 bg-orange-500/15 text-orange-100",
        amber: "border-amber-300/35 bg-amber-400/15 text-amber-100",
        white: "border-white/10 bg-white/[0.06] text-zinc-200",
    };

    return (
        <span data-accent={tone} className={cn("rainbow-edge inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] shadow-[0_10px_30px_rgba(0,0,0,.12)] backdrop-blur-xl", tones[tone])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_18px_currentColor]"/>
            {children}
    </span>
    );
}
