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
import { LanguageProvider } from "./i18n.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#08090B] text-white selection:bg-teal-200 selection:text-zinc-950">
          <div className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,#08090B_0%,#0B1012_42%,#08090B_100%)]" />
          <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
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
    </LanguageProvider>
  );
}
