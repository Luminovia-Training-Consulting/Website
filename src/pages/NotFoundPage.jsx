import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import {useLanguage} from "../i18n.jsx";
import {buildNotFoundReference} from "../utils/notFound.js";

function safeRequestedPath(search, fallbackPath) {
    const requestedPath = new URLSearchParams(search).get("from");
    if (
        !requestedPath?.startsWith("/")
        || requestedPath.startsWith("//")
        || requestedPath.includes("\\")
        || requestedPath.startsWith("/not-found")
    ) {
        return fallbackPath;
    }

    return requestedPath;
}

export default function NotFoundPage() {
    const {t} = useLanguage();
    const location = useLocation();
    const currentAddress = `${location.pathname}${location.search}${location.hash}`;
    const requestedPath = safeRequestedPath(location.search, currentAddress);
    const reference = buildNotFoundReference(requestedPath);
    const isRedirectBridge = location.pathname.replace(/\/+$/, "") === "/not-found"
        && requestedPath !== currentAddress;

    useEffect(() => {
        if (!isRedirectBridge) return;

        globalThis.history.replaceState(globalThis.history.state, "", requestedPath);
    }, [isRedirectBridge, requestedPath]);

    const paths = [
        ["/training", t.nav.training],
        ["/consulting", t.nav.consulting],
        ["/projects", t.nav.software],
        ["/contact", t.nav.book],
    ];

    return (
        <main className="not-found-page px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <section>
                    <Badge tone="cyan">{t.notFound.badge}</Badge>
                    <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                        {t.notFound.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        {t.notFound.copy}
                    </p>
                    <div className="mt-5 max-w-2xl rounded-2xl border legal-inset px-4 py-4">
                        <span className="block text-xs font-bold uppercase tracking-[0.08em] text-sky-200">
                            {t.notFound.requestedPathLabel}
                        </span>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                            {t.notFound.requestedPathPrefix}{" "}
                            <code className="break-all font-bold text-white">“{requestedPath}”</code>{" "}
                            {t.notFound.requestedPathSuffix}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--line)] pt-3">
                            <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                                {t.notFound.referenceLabel}
                            </span>
                            <code className="text-xs font-bold text-sky-200">{reference}</code>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button to="/">{t.notFound.home}</Button>
                        <Button to="/contact#contact-options" variant="secondary">{t.notFound.contact}</Button>
                        <Button to="/training" variant="secondary">{t.notFound.training}</Button>
                    </div>
                </section>

                <Card className="relative overflow-hidden p-6 sm:p-8">
                    <div className="grid h-24 w-24 place-items-center rounded-md bg-[var(--yellow)] text-3xl font-bold text-[#201932]">
                        404
                    </div>
                    <p className="mt-6 text-base leading-8 text-slate-300">{t.notFound.hint}</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {paths.map(([to, label]) => (
                            <a
                                key={to}
                                href={to}
                                className="rounded-md border border-[var(--line)] px-4 py-3 text-sm font-bold hover:underline"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    );
}
