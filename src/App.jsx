import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import TrainingPage from "./pages/TrainingPage.jsx";
import KeynotesPage from "./pages/KeynotesPage.jsx";
import CorporatePage from "./pages/CorporatePage.jsx";
import CredentialsPage from "./pages/CredentialsPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MyWayPage from "./pages/MyWayPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import SoftwarePage from "./pages/SoftwarePage.jsx";
import ImprintPage from "./pages/ImprintPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import AnalyticsConsent from "./components/AnalyticsConsent.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070B16] text-white selection:bg-cyan-300 selection:text-slate-950">
        <div className="fixed inset-0 -z-10 bg-[#070B16]" />
        <div className="fixed left-1/2 top-0 -z-10 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="fixed bottom-0 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-3xl" />
        <Header />
        <div className="enter-up">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/keynotes" element={<KeynotesPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/my-way" element={<MyWayPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>
        <Footer />
        <AnalyticsConsent />
      </div>
    </BrowserRouter>
  );
}
