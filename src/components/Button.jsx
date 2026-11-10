import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";

export default function Button({href, to, children, variant = "primary", onClick, download, showArrow = true}) {
    const props = {className: "lumo-button", "data-button-variant": variant, onClick};
    const content = <>{children}{showArrow && <ArrowUpRight size={18} aria-hidden="true"/>}</>;

    if (to) return <Link to={to} {...props}>{content}</Link>;
    if (href) return <a href={href} target="_blank" rel="noreferrer" download={download} {...props}>{content}</a>;
    return <button type="button" {...props}>{content}</button>;
}
