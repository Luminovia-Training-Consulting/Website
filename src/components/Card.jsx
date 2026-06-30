import {cn} from "./utils.js";

export default function Card({children, className = "", shine = true, ...props}) {
    return (
        <div {...props}
             className={cn("color-card rainbow-edge group relative flex h-auto min-h-0 flex-col !justify-start overflow-hidden rounded-[1.45rem] border border-white/13 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,.17),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.125),rgba(255,255,255,.062)_52%,rgba(255,255,255,.034))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.11),inset_0_-26px_56px_rgba(255,255,255,.022),0_22px_78px_rgba(0,0,0,.32)] backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-1.5 hover:rotate-[.12deg] hover:border-white/28 hover:bg-white/[0.105] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_30px_110px_rgba(0,0,0,.34),0_0_46px_rgba(255,255,255,.045)] sm:p-5", className)}>
            {shine && <div className="card-accent-topline pointer-events-none absolute inset-x-7 top-0 h-px"/>}
            <div className="card-accent-orb card-accent-orb-a pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full opacity-45 blur-3xl transition duration-700 group-hover:opacity-80"/>
            <div className="card-accent-orb card-accent-orb-b pointer-events-none absolute right-[-4rem] top-1/4 h-36 w-36 rounded-full opacity-70 blur-3xl transition duration-700 group-hover:translate-y-4"/>
            <div className="card-accent-left pointer-events-none absolute inset-y-0 -left-1 w-px opacity-0 transition duration-700 group-hover:opacity-100"/>
            <div className="card-accent-bottom pointer-events-none absolute -bottom-1 left-8 right-8 h-px opacity-0 transition duration-700 group-hover:opacity-100"/>
            <div className="relative z-10 flex min-h-0 flex-col !justify-start">{children}</div>
        </div>
    );
}
