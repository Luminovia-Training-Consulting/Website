import {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import AppErrorBoundary from "./components/AppErrorBoundary.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Seo from "./components/Seo.jsx";
import {LanguageProvider} from "./i18n.jsx";
import HomePage from "./pages/HomePage.jsx";
import {isChunkLoadError, safeGetSessionItem, safeRemoveSessionItem, safeSetSessionItem} from "./utils/browser.js";

const CHUNK_RECOVERY_KEY = "carina_chunk_recovery_v1";

function lazyWithRecovery(loader) {
    return lazy(async () => {
        try {
            const module = await loader();
            safeRemoveSessionItem(CHUNK_RECOVERY_KEY);
            return module;
        } catch (error) {
            if (isChunkLoadError(error) && safeGetSessionItem(CHUNK_RECOVERY_KEY) !== "used") {
                safeSetSessionItem(CHUNK_RECOVERY_KEY, "used");
                globalThis.location.reload();
                return new Promise(() => {});
            }

            throw error;
        }
    });
}

const AnalyticsConsent = lazyWithRecovery(() => import("./components/AnalyticsConsent.jsx"));
const AmbientIntelligence = lazyWithRecovery(() => import("./components/AmbientIntelligence.jsx"));
const TrainingPage = lazyWithRecovery(() => import("./pages/TrainingPage.jsx"));
const TrainingTopicPage = lazyWithRecovery(() => import("./pages/TrainingTopicPage.jsx"));
const KeynotesPage = lazyWithRecovery(() => import("./pages/KeynotesPage.jsx"));
const CorporatePage = lazyWithRecovery(() => import("./pages/CorporatePage.jsx"));
const CredentialsPage = lazyWithRecovery(() => import("./pages/CredentialsPage.jsx"));
const PortfolioPage = lazyWithRecovery(() => import("./pages/PortfolioPage.jsx"));
const AboutPage = lazyWithRecovery(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazyWithRecovery(() => import("./pages/ContactPage.jsx"));
const MyWayPage = lazyWithRecovery(() => import("./pages/MyWayPage.jsx"));
const SkillsPage = lazyWithRecovery(() => import("./pages/SkillsPage.jsx"));
const PricingPage = lazyWithRecovery(() => import("./pages/PricingPage.jsx"));
const BlogPage = lazyWithRecovery(() => import("./pages/BlogPage.jsx"));
const BlogPostPage = lazyWithRecovery(() => import("./pages/BlogPostPage.jsx"));
const SoftwarePage = lazyWithRecovery(() => import("./pages/SoftwarePage.jsx"));
const ImprintPage = lazyWithRecovery(() => import("./pages/ImprintPage.jsx"));
const PrivacyPage = lazyWithRecovery(() => import("./pages/PrivacyPage.jsx"));
const NotFoundPage = lazyWithRecovery(() => import("./pages/NotFoundPage.jsx"));

function getHashTarget(hash) {
    if (!hash.startsWith("#") || hash.length === 1) return null;

    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
        return document.getElementById(hash.slice(1));
    }
}

function ScrollToHash() {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({top: 0, behavior: "auto"});
            return;
        }

        window.scrollTo({top: 0, behavior: "auto"});

        const scrollToTarget = () => {
            getHashTarget(hash)?.scrollIntoView({behavior: "auto", block: "start"});
        };

        globalThis.requestAnimationFrame(scrollToTarget);
        const timeout = globalThis.setTimeout(scrollToTarget, 120);
        const lateTimeout = globalThis.setTimeout(scrollToTarget, 360);
        return () => {
            globalThis.clearTimeout(timeout);
            globalThis.clearTimeout(lateTimeout);
        };
    }, [pathname, hash]);

    return null;
}

function DeferredAmbientIntelligence() {
    const [ready, setReady] = useState(import.meta.env.MODE === "test");

    useEffect(() => {
        if (ready) return undefined;

        const schedule = globalThis.requestIdleCallback || ((callback) => globalThis.setTimeout(callback, 1400));
        const cancel = globalThis.cancelIdleCallback || globalThis.clearTimeout;
        const handle = schedule(() => setReady(true), {timeout: 2200});

        return () => cancel(handle);
    }, [ready]);

    return ready ? (
        <>
            <div className="polygon-field fixed inset-0 z-0" aria-hidden="true">
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <div className="ambient-grid fixed inset-0 z-0 opacity-70"/>
            <AppErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                    <AmbientIntelligence/>
                </Suspense>
            </AppErrorBoundary>
        </>
    ) : null;
}

function DeferredAnalyticsConsent() {
    const [ready, setReady] = useState(import.meta.env.MODE === "test");

    useEffect(() => {
        if (ready) return undefined;

        const schedule = globalThis.requestIdleCallback || ((callback) => globalThis.setTimeout(callback, 900));
        const cancel = globalThis.cancelIdleCallback || globalThis.clearTimeout;
        const handle = schedule(() => setReady(true), {timeout: 1800});

        return () => cancel(handle);
    }, [ready]);

    return ready ? (
        <AppErrorBoundary fallback={null}>
            <Suspense fallback={null}>
                <AnalyticsConsent/>
            </Suspense>
        </AppErrorBoundary>
    ) : null;
}

function routeElement(Component) {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<div className="min-h-[55vh] bg-[#08090b]" aria-hidden="true"/>}>
                <Component/>
            </Suspense>
        </AppErrorBoundary>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Seo/>
                <ScrollToHash/>
                <div className="relative isolate min-h-screen overflow-x-hidden bg-[#08090b] text-white">
                    <div className="ambient-veil fixed inset-0 z-0"/>
                    <div className="ambient-wash fixed -inset-x-24 top-0 z-0 h-[68vh]"/>
                    <div className="ambient-ribbon fixed left-[-12vw] top-[14vh] z-0 h-32 w-[124vw] rotate-[-8deg] opacity-70"/>
                    <div className="ambient-ribbon fixed left-[-12vw] top-[72vh] z-0 h-28 w-[124vw] rotate-[7deg] opacity-45"/>
                    <DeferredAmbientIntelligence/>
                    <Header/>
                    <div className="relative z-10">
                        <Routes>
                            <Route path="/" element={<AppErrorBoundary><HomePage/></AppErrorBoundary>}/>
                            <Route path="/training" element={routeElement(TrainingPage)}/>
                            <Route path="/training/:slug" element={routeElement(TrainingTopicPage)}/>
                            <Route path="/keynotes" element={routeElement(KeynotesPage)}/>
                            <Route path="/corporate" element={routeElement(CorporatePage)}/>
                            <Route path="/credentials" element={routeElement(CredentialsPage)}/>
                            <Route path="/portfolio" element={routeElement(PortfolioPage)}/>
                            <Route path="/about" element={routeElement(AboutPage)}/>
                            <Route path="/contact" element={routeElement(ContactPage)}/>
                            <Route path="/my-way" element={routeElement(MyWayPage)}/>
                            <Route path="/skills" element={routeElement(SkillsPage)}/>
                            <Route path="/pricing" element={routeElement(PricingPage)}/>
                            <Route path="/blog" element={routeElement(BlogPage)}/>
                            <Route path="/blog/:slug" element={routeElement(BlogPostPage)}/>
                            <Route path="/software" element={routeElement(SoftwarePage)}/>
                            <Route path="/imprint" element={routeElement(ImprintPage)}/>
                            <Route path="/privacy" element={routeElement(PrivacyPage)}/>
                            <Route path="*" element={routeElement(NotFoundPage)}/>
                        </Routes>
                    </div>
                    <div className="relative z-10">
                        <Footer/>
                    </div>
                    <DeferredAnalyticsConsent/>
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}
