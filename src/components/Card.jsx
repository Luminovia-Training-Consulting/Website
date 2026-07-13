import {cn} from "./utils.js";

export default function Card({children, className = "", shine = true, ...props}) {
    return (
        <div {...props}
            className={cn("color-card lumo-panel group relative flex h-auto min-h-0 flex-col !justify-start overflow-hidden rounded-[0.75rem] border border-sky-200/12 bg-[#0a1728] p-5 shadow-[0_14px_40px_rgba(0,0,0,.18)] transition-colors duration-200 hover:border-sky-200/24 sm:p-6", className)}>
            {shine && <div className="card-accent-topline pointer-events-none absolute inset-x-7 top-0 h-px"/>}
            <div className="relative z-10 flex min-h-0 flex-col !justify-start">{children}</div>
        </div>
    );
}
