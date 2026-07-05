import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {NavLink} from "react-router-dom";
import {IMAGES, navItems, PROFILE} from "../data/profile.js";
import Button from "./Button.jsx";
import {useLanguage} from "../i18n.jsx";

function navClass({isActive}) {
    return isActive
        ? "lumo-nav-link lumo-nav-link-active"
        : "lumo-nav-link";
}

function LanguageToggle({language, toggleLanguage, className = ""}) {
    const label = language === "de" ? "Sprache auf Englisch wechseln" : "Switch language to German";

    return (
        <button
            onClick={toggleLanguage}
            className={`lumo-language-toggle ${className}`}
            aria-label={label}
        >
            <span>DE</span>
            <span aria-hidden="true">/</span>
            <span>EN</span>
        </button>
    );
}

function ThemeToggle({theme, onToggleTheme, language = "en", className = ""}) {
    const isDay = theme === "day";
    const label = language === "de"
        ? isDay ? "Zum Dunkelmodus wechseln" : "Zum Hellmodus wechseln"
        : isDay ? "Switch to night scheme" : "Switch to day scheme";
    const visibleLabel = language === "de"
        ? isDay ? "Hell" : "Dunkel"
        : isDay ? "Day" : "Night";

    return (
        <button
            type="button"
            onClick={onToggleTheme}
            className={`lumo-theme-toggle ${className}`}
            aria-label={label}
            aria-pressed={isDay}
        >
            <span className="theme-toggle-icon" data-mode={isDay ? "day" : "night"} aria-hidden="true"/>
            <span>{visibleLabel}</span>
        </button>
    );
}

export default function Header({theme = "night", onToggleTheme}) {
    const [open, setOpen] = useState(false);
    const {t, toggleLanguage, language} = useLanguage();

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    const mobileMenu = open ? (
        <div className="mobile-menu-overlay xl:hidden" role="dialog" aria-modal="true" aria-label={t.navigation}>
            <div className="sticky top-0 z-10 -mx-5 mb-8 flex items-center justify-between border-b border-white/10 bg-[#08090B]/92 px-5 py-4">
                <span className="text-lg font-black text-white">{t.navigation}</span>
                <div className="flex gap-2">
                    <LanguageToggle language={language} toggleLanguage={toggleLanguage} className="px-4 text-white"/>
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language} className="px-4"/>
                    <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-black text-white" aria-label={t.close}>
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
            </div>
            <div className="grid gap-3 pb-8">
                {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-[1.7rem] border border-white/14 bg-white/[0.12] px-5 py-5 text-left text-xl font-black text-white shadow-[0_18px_58px_rgba(0,0,0,.24)]">{t.nav[item.key]}</NavLink>
                ))}
            </div>
            <div className="grid gap-3 border-t border-white/10 pt-5">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/14 bg-white/[0.08] px-5 py-4 text-base font-black text-white">{t.linkedin}</a>
                <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/14 bg-white/[0.08] px-5 py-4 text-base font-black text-white">{t.founderPortfolio}</a>
                <Button to="/contact#contact-options" onClick={() => setOpen(false)}>{t.bookTraining}</Button>
            </div>
        </div>
    ) : null;

    return (
        <>
            <header className="lumo-site-header sticky top-0 z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                    <NavLink to="/" className="lumo-header-brand group" aria-label="Luminovia Training & Consulting home">
                        <img src={IMAGES.luminoviaLogoMark} alt="" loading="eager" width="52" height="52"/>
                        <span>
                            <strong>Luminovia</strong>
                            <small>Training & Consulting</small>
                        </span>
                    </NavLink>

                    <nav className="hidden items-center gap-0.5 xl:flex">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t.nav[item.key]}</NavLink>)}
                    </nav>

                    <div className="hidden items-center gap-3 xl:flex">
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage}/>
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                        <Button to="/contact#contact-options">{t.bookTraining}</Button>
                    </div>

                    <div className="lumo-mobile-header-actions xl:hidden">
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage} className="lumo-mobile-toggle"/>
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language} className="lumo-mobile-toggle"/>
                        <button className="lumo-mobile-menu-button" onClick={() => setOpen(true)} aria-label={`${t.open} ${t.menu}`}>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </header>

            {mobileMenu && createPortal(mobileMenu, document.body)}
        </>
    );
}
