export default function Metric({value, label}) {
    const isLanguageMetric = value === "DE / EN";

    return (
        <div className="metric-tile glass-sheen relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/[0.08] p-4 shadow-[0_18px_58px_rgba(0,0,0,.18)] backdrop-blur-2xl transition duration-700 hover:-translate-y-1.5 hover:border-sky-200/35 hover:bg-white/[0.12]">
            <span className="metric-accent pointer-events-none absolute right-4 top-4 h-2.5 w-8 rounded-full"/>
            <div className="text-lg font-black text-white">
                {isLanguageMetric ? (
                    <span className="inline-flex items-center gap-2">
            <span className="flag-icon flag-de" aria-label="German" role="img"/>
            <span className="text-sm text-slate-400">/</span>
            <span className="flag-icon flag-us" aria-label="English" role="img"/>
          </span>
                ) : value}
            </div>
            <div className="mt-1 text-xs leading-5 text-zinc-400">{label}</div>
        </div>
    );
}
