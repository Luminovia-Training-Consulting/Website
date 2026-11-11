import {lazy, Suspense, useEffect, useLayoutEffect, useRef, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigationType} from "react-router-dom";
import AnalyticsConsent from "./components/AnalyticsConsent.jsx";
import AppErrorBoundary from "./components/AppErrorBoundary.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Seo from "./components/Seo.jsx";
import {LanguageProvider, useLanguage} from "./i18n.jsx";
import HomePage from "./pages/HomePage.jsx";
import {isChunkLoadError, safeGetSessionItem, safeGetStorageItem, safeRemoveSessionItem, safeSetSessionItem, safeSetStorageItem} from "./utils/browser.js";

const CHUNK_RECOVERY_KEY = "luminovia_chunk_recovery_v1";
const SW_RELOAD_KEY = "luminovia_sw_reload_version";
const THEME_KEY = "luminovia_color_scheme_v1";
const ROUTER_BASENAME = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

function getInitialTheme() {
    const storedTheme = safeGetStorageItem(THEME_KEY);
    if (storedTheme === "day" || storedTheme === "night") return storedTheme;

    return "day";
}

function lazyWithRecovery(loader) {
    return lazy(async () => {
        try {
            const module = await loader();
            safeRemoveSessionItem(CHUNK_RECOVERY_KEY);
            return module;
        /* v8 ignore start -- stale chunk recovery depends on browser cache state after deployment */
        } catch (error) {
            if (isChunkLoadError(error) && safeGetSessionItem(CHUNK_RECOVERY_KEY) !== "used"
                && safeSetSessionItem(CHUNK_RECOVERY_KEY, "used")) {
                globalThis.location.reload();
                return new Promise(() => {});
            }

            throw error;
        }
        /* v8 ignore stop */
    });
}

const TrainingPage = lazyWithRecovery(() => import("./pages/TrainingPage.jsx"));
const TrainingTopicPage = lazyWithRecovery(() => import("./pages/TrainingTopicPage.jsx"));
const ConsultingPage = lazyWithRecovery(() => import("./pages/ConsultingPage.jsx"));
const OffersPage = lazyWithRecovery(() => import("./pages/OffersPage.jsx"));
const ClientsPage = lazyWithRecovery(() => import("./pages/ClientsPage.jsx"));
const AboutPage = lazyWithRecovery(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazyWithRecovery(() => import("./pages/ContactPage.jsx"));
const PricingPage = lazyWithRecovery(() => import("./pages/PricingPage.jsx"));
const SoftwarePage = lazyWithRecovery(() => import("./pages/SoftwarePage.jsx"));
const ImprintPage = lazyWithRecovery(() => import("./pages/ImprintPage.jsx"));
const PrivacyPage = lazyWithRecovery(() => import("./pages/PrivacyPage.jsx"));
const TermsPage = lazyWithRecovery(() => import("./pages/TermsPage.jsx"));
const NotFoundPage = lazyWithRecovery(() => import("./pages/NotFoundPage.jsx"));

function getHashTarget(hash) {
    if (!hash.startsWith("#") || hash.length === 1) return null;

    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
    /* v8 ignore start -- invalid URI hashes are normalized by browsers in ordinary navigation */
    } catch {
        return document.getElementById(hash.slice(1));
    }
    /* v8 ignore stop */
}

function RouteScroll() {
    const {key, pathname, search, hash} = useLocation();
    const navigationType = useNavigationType();
    const previousRoute = useRef(null);
    const positions = useRef(new Map());

    useLayoutEffect(() => {
        const previous = previousRoute.current;
        previousRoute.current = {key, pathname, search, hash};
        const searchChanged = navigationType === "REPLACE" && previous?.pathname === pathname
            && previous.hash === hash && previous.search !== search;
        const savedPosition = navigationType === "POP" ? positions.current.get(key) : undefined;
        if (navigationType === "REPLACE" && previous && previous.key !== key) positions.current.delete(previous.key);

        const content = document.getElementById("site-content");
        const savePosition = () => positions.current.set(key, window.scrollY);
        const trackPosition = () => {
            savePosition();
            window.addEventListener("scroll", savePosition, {passive: true});
        };
        let frame;
        let observer;
        let timeout;

        const scrollWhenReady = () => {
            const target = hash ? getHashTarget(hash) : null;
            if (savedPosition !== undefined) {
                if (!content.querySelector('main:not([aria-busy="true"])')) return false;
            } else if (!target) {
                return false;
            }
            frame = globalThis.requestAnimationFrame(() => {
                if (savedPosition !== undefined) {
                    window.scrollTo({top: savedPosition, behavior: "auto"});
                } else {
                    target.scrollIntoView({behavior: "auto", block: "start"});
                    if (target.hasAttribute("tabindex")) target.focus({preventScroll: true});
                }
                trackPosition();
            });
            return true;
        };

        if (savedPosition === undefined && (!hash || searchChanged)) {
            if (previous && previous.key !== key && !searchChanged) {
                if (navigationType !== "POP") content.focus({preventScroll: true});
                window.scrollTo({top: 0, behavior: "auto"});
            }
            trackPosition();
        } else {
            if (savedPosition === undefined && previous?.pathname !== pathname) {
                window.scrollTo({top: 0, behavior: "auto"});
            }
            if (!scrollWhenReady()) {
                observer = new MutationObserver(() => {
                    if (scrollWhenReady()) {
                        observer.disconnect();
                        globalThis.clearTimeout(timeout);
                    }
                });
                observer.observe(content, {childList: true, subtree: true});
                timeout = globalThis.setTimeout(() => {
                    observer.disconnect();
                    trackPosition();
                }, 10000);
            }
        }

        return () => {
            if (frame !== undefined) globalThis.cancelAnimationFrame(frame);
            observer?.disconnect();
            globalThis.clearTimeout(timeout);
            window.removeEventListener("scroll", savePosition);
        };
    }, [key, pathname, search, hash, navigationType]);

    return null;
}

function DeferredAnalyticsConsent() {
    const [ready, setReady] = useState(import.meta.env.MODE === "test");

    useEffect(() => {
        if (ready) return undefined;

        /* v8 ignore next 5 -- production-only idle deferral is disabled in test mode */
        const schedule = globalThis.requestIdleCallback || ((callback) => globalThis.setTimeout(callback, 900));
        const cancel = globalThis.cancelIdleCallback || globalThis.clearTimeout;
        const handle = schedule(() => setReady(true), {timeout: 1800});

        return () => cancel(handle);
    }, [ready]);

    return ready ? (
        <AppErrorBoundary fallback={null}>
            <AnalyticsConsent/>
        </AppErrorBoundary>
    ) : null;
}

function RouteFallback() {
    const {language} = useLanguage();
    return (
        <main className="lumo-route-fallback" aria-busy="true">
            <span className="sr-only">{language === "de" ? "Seite wird geladen" : "Loading page"}</span>
            <div className="lumo-route-fallback-line" aria-hidden="true"/>
        </main>
    );
}

function routeElement(Component) {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<RouteFallback/>}>
                <Component/>
            </Suspense>
        </AppErrorBoundary>
    );
}

function routePaths(path) {
    return path === "/" ? [path] : [path, `${path}/`];
}

function pageRoutes(path, Component) {
    return routePaths(path).map((routePath) => (
        <Route key={routePath} path={routePath} element={routeElement(Component)}/>
    ));
}

function SkipLink() {
    const {language} = useLanguage();
    return <a className="skip-link" href="#site-content">{language === "de" ? "Zum Inhalt springen" : "Skip to content"}</a>;
}

export default function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "night" ? "#111a2e" : "#f8f5ee");
        safeSetStorageItem(THEME_KEY, theme);
    }, [theme]);

    useEffect(() => {
        /* v8 ignore start -- production-only service worker registration is verified by the Pages build */
        if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return undefined;

        const serviceWorker = navigator.serviceWorker;
        let hadController = Boolean(serviceWorker.controller);
        let handledVersion = safeGetSessionItem(SW_RELOAD_KEY);
        const handleMessage = ({data}) => {
            if (data?.type !== "LUMINOVIA_SW_ACTIVATED" || !data.version || data.version === handledVersion) return;

            handledVersion = data.version;
            safeSetSessionItem(SW_RELOAD_KEY, handledVersion);
            if (hadController) globalThis.location.reload();
            hadController = true;
        };

        const register = () => {
            serviceWorker
                .register(`${import.meta.env.BASE_URL}sw.js`, {updateViaCache: "none"})
                .then((registration) => registration.update().catch(() => {}))
                .catch(() => {});
        };

        serviceWorker.addEventListener("message", handleMessage);
        if (document.readyState === "complete") register();
        else globalThis.addEventListener("load", register, {once: true});

        return () => {
            serviceWorker.removeEventListener("message", handleMessage);
            globalThis.removeEventListener("load", register);
        };
        /* v8 ignore stop */
    }, []);

    const toggleTheme = () => setTheme((current) => current === "day" ? "night" : "day");

    return (
        <LanguageProvider>
            <BrowserRouter basename={ROUTER_BASENAME}>
                <Seo/>
                <RouteScroll/>
                <div data-theme={theme} className="theme-root">
                    <SkipLink/>
                    <Header theme={theme} onToggleTheme={toggleTheme}/>
                    <div id="site-content" tabIndex={-1}>
                        <Routes>
                            <Route path="/" element={<AppErrorBoundary><HomePage/></AppErrorBoundary>}/>
                            {pageRoutes("/training", TrainingPage)}
                            {pageRoutes("/offers", OffersPage)}
                            {pageRoutes("/training/:slug", TrainingTopicPage)}
                            {routePaths("/portfolio").map((routePath) => (
                                <Route key={routePath} path={routePath} element={<Navigate to="/projects" replace/>}/>
                            ))}
                            {pageRoutes("/consulting", ConsultingPage)}
                            {pageRoutes("/clients", ClientsPage)}
                            {pageRoutes("/about", AboutPage)}
                            {pageRoutes("/contact", ContactPage)}
                            {pageRoutes("/pricing", PricingPage)}
                            {pageRoutes("/projects", SoftwarePage)}
                            {pageRoutes("/imprint", ImprintPage)}
                            {pageRoutes("/privacy", PrivacyPage)}
                            {pageRoutes("/terms", TermsPage)}
                            {pageRoutes("/not-found", NotFoundPage)}
                            <Route path="*" element={routeElement(NotFoundPage)}/>
                        </Routes>
                    </div>
                    <Footer/>
                    <DeferredAnalyticsConsent/>
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}
