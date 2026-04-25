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
import BlogPostPage from "./pages/BlogPostPage.jsx";
import SoftwarePage from "./pages/SoftwarePage.jsx";
import ImprintPage from "./pages/ImprintPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import AnalyticsConsent from "./components/AnalyticsConsent.jsx";
import { LanguageProvider } from "./i18n.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen overflow-hidden bg-[#08090b] text-white">
          <div className="ambient-veil fixed inset-0 -z-10" />
          <div className="ambient-wash fixed -inset-x-24 top-0 -z-10 h-[68vh]" />
          <div className="ambient-ribbon fixed left-[-12vw] top-[14vh] -z-10 h-32 w-[124vw] rotate-[-8deg] opacity-70" />
          <div className="ambient-ribbon fixed left-[-12vw] top-[72vh] -z-10 h-28 w-[124vw] rotate-[7deg] opacity-45" />
          <div className="ambient-grid fixed inset-0 -z-10 opacity-70" />
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
              <Route path="/blog/:slug" element={<BlogPostPage />} />
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
