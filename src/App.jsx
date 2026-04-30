import {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Seo from "./components/Seo.jsx";
import {LanguageProvider} from "./i18n.jsx";
import HomePage from "./pages/HomePage.jsx";

const AnalyticsConsent = lazy(() => import("./components/AnalyticsConsent.jsx"));
const AmbientIntelligence = lazy(() => import("./components/AmbientIntelligence.jsx"));
const TrainingPage = lazy(() => import("./pages/TrainingPage.jsx"));
const TrainingTopicPage = lazy(() => import("./pages/TrainingTopicPage.jsx"));
const KeynotesPage = lazy(() => import("./pages/KeynotesPage.jsx"));
const CorporatePage = lazy(() => import("./pages/CorporatePage.jsx"));
const CredentialsPage = lazy(() => import("./pages/CredentialsPage.jsx"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const MyWayPage = lazy(() => import("./pages/MyWayPage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage.jsx"));
const PricingPage = lazy(() => import("./pages/PricingPage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.jsx"));
const SoftwarePage = lazy(() => import("./pages/SoftwarePage.jsx"));
const ImprintPage = lazy(() => import("./pages/ImprintPage.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function ScrollToHash() {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({top: 0, behavior: "auto"});
            return;
        }

        window.scrollTo({top: 0, behavior: "auto"});

        const scrollToTarget = () => {
            document.querySelector(hash)?.scrollIntoView({behavior: "auto", block: "start"});
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
            <Suspense fallback={null}>
                <AmbientIntelligence/>
            </Suspense>
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
        <Suspense fallback={null}>
            <AnalyticsConsent/>
        </Suspense>
    ) : null;
}

function routeElement(Component) {
    return (
        <Suspense fallback={<div className="min-h-[55vh] bg-[#08090b]" aria-hidden="true"/>}>
            <Component/>
        </Suspense>
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
                            <Route path="/" element={<HomePage/>}/>
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
