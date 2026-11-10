export default function Badge({children, tone = "cyan"}) {
    return <span data-accent={tone} className="lumo-badge">{children}</span>;
}
