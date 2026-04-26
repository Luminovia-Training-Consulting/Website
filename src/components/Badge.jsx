import {cn} from "./utils.js";

export default function Badge({children, tone = "cyan"}) {
    const tones = {
        cyan: "border-sky-300/30 bg-sky-300/15 text-sky-100",
        violet: "border-blue-300/30 bg-blue-500/15 text-blue-100",
        emerald: "border-indigo-300/30 bg-indigo-400/15 text-indigo-100",
        amber: "border-blue-200/30 bg-blue-300/10 text-blue-100",
        white: "border-white/10 bg-white/[0.06] text-zinc-200",
    };

    return (
        <span className={cn("rainbow-edge inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] shadow-[0_10px_30px_rgba(0,0,0,.12)] backdrop-blur-xl", tones[tone])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_18px_currentColor]"/>
            {children}
    </span>
    );
}