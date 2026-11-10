import {cn} from "./utils.js";

export default function Card({children, className = "", shine = true, ...props}) {
    return (
        <div {...props}
            className={cn("lumo-panel group relative flex h-auto min-h-0 flex-col justify-start", className)}>
            {shine && <div className="card-accent-topline pointer-events-none absolute inset-x-7 top-0 h-px"/>}
            <div className="relative z-10 flex min-h-0 flex-col justify-start">{children}</div>
        </div>
    );
}
