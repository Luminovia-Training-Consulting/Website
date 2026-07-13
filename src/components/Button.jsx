import {Link} from "react-router-dom";
import {cn} from "./utils.js";

export default function Button({href, to, children, variant = "primary", onClick, download, showArrow = true}) {
    const base = "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[0.6rem] px-5 py-3 text-center text-sm font-bold leading-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300/70 sm:w-auto";
    const styles = variant === "primary"
        ? "lumo-primary-action bg-[#f4b52c] text-[#07111f] shadow-[0_10px_28px_rgba(245,158,11,.18)] hover:bg-[#ffc449]"
        : variant === "dark"
            ? "border border-white/10 bg-[#081426] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#0b1b34]"
            : "lumo-secondary-action border border-sky-200/18 bg-[#071426]/82 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_14px_42px_rgba(0,0,0,.22)] backdrop-blur-xl hover:border-sky-200/38 hover:bg-[#0b1d37]";
    const arrow = <span className="shrink-0 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>;
    const buttonProps = {"data-button-variant": variant};

    if (to) return <Link to={to} onClick={onClick} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</Link>;
    if (href) return <a href={href} onClick={onClick} target="_blank" rel="noreferrer" download={download} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</a>;
    return <button onClick={onClick} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</button>;
}
