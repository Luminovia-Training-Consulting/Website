import {cn} from "./utils.js";

export default function Card({children, className = "", shine = true, ...props}) {
    return (
        <div {...props}
            className={cn("color-card lumo-panel group relative flex h-auto min-h-0 flex-col !justify-start overflow-hidden rounded-[1rem] border border-sky-200/12 bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,.14),transparent_34%),linear-gradient(145deg,rgba(9,22,43,.94),rgba(6,13,27,.96)_54%,rgba(11,16,32,.92))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.09),0_18px_64px_rgba(0,0,0,.34)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-200/26 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.13),0_24px_86px_rgba(0,0,0,.38),0_0_34px_rgba(56,189,248,.055)] sm:p-5", className)}>
            {shine && <div className="card-accent-topline pointer-events-none absolute inset-x-7 top-0 h-px"/>}
            <div className="card-accent-pin pointer-events-none absolute right-5 top-5 h-1.5 w-9 rounded-full opacity-90 transition duration-300 group-hover:w-12"/>
            <div className="card-accent-orb-a pointer-events-none absolute -left-16 -top-20 h-36 w-36 rounded-full opacity-35 blur-3xl transition duration-300 group-hover:opacity-60"/>
            <div className="card-accent-orb-b pointer-events-none absolute right-[-4rem] top-1/4 h-28 w-28 rounded-full opacity-50 blur-3xl transition duration-300 group-hover:translate-y-2"/>
            <div className="card-accent-left pointer-events-none absolute inset-y-0 -left-1 w-px opacity-40 transition duration-300 group-hover:opacity-100"/>
            <div className="card-accent-bottom pointer-events-none absolute -bottom-1 left-8 right-8 h-px opacity-0 transition duration-300 group-hover:opacity-100"/>
            <div className="relative z-10 flex min-h-0 flex-col !justify-start">{children}</div>
        </div>
    );
}
