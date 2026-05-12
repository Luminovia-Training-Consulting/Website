import {cn} from "./utils.js";

export default function SectionJumpNav({items, label, fixed = false, className = ""}) {
    const variantClass = fixed
        ? "fixed left-0 right-0 top-[5.35rem] z-40 border-b border-t border-white/10 bg-[#070B16]/78 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,.24)] backdrop-blur-2xl sm:px-6 sm:py-4 lg:top-[5.75rem] lg:px-8"
        : "sticky top-[4.7rem] z-30 rounded-[1.65rem] border border-white/10 bg-[#070B16]/82 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,.18)] backdrop-blur-2xl";

    return (
        <nav className={cn(variantClass, className)} aria-label={label}>
            <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:gap-9">
                <span className="shrink-0 whitespace-nowrap border-white/10 text-xs font-black uppercase tracking-[0.16em] text-sky-100 lg:border-r lg:pr-9">
                    {label}
                </span>
                <div className="flex min-w-0 flex-1 snap-x gap-3 overflow-x-auto pb-1 pl-[5px] lg:gap-4 [scrollbar-color:rgba(125,211,252,.42)_rgba(255,255,255,.06)] [scrollbar-width:thin]">
                    {items.map(([href, text]) => (
                        <a
                            key={href}
                            href={href}
                            className="shrink-0 snap-start rounded-full border border-white/10 bg-white/[0.065] px-5 py-2.5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-200/40 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200/80"
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
