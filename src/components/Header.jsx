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
    const label = language === "de" ? "DE / EN, Sprache auf Englisch wechseln" : "DE / EN, switch language to German";

    return (
        <button
            onClick={toggleLanguage}
            className={`lumo-language-toggle ${className}`}
            title={label}
        >
            <span>DE</span>
            <span>/</span>
            <span>EN</span>
            <span className="sr-only">{label}</span>
        </button>
    );
}

function ThemeToggle({theme, onToggleTheme, language = "en", className = ""}) {
    const isDay = theme === "day";
    const visibleLabel = language === "de"
        ? isDay ? "Hell" : "Dunkel"
        : isDay ? "Day" : "Night";
    const actionLabel = language === "de"
        ? isDay ? "Zum Dunkelmodus wechseln" : "Zum Hellmodus wechseln"
        : isDay ? "Switch to night scheme" : "Switch to day scheme";
    const label = `${visibleLabel}, ${actionLabel}`;

    return (
        <button
            type="button"
            onClick={onToggleTheme}
            className={`lumo-theme-toggle ${className}`}
            title={label}
            aria-pressed={isDay}
        >
            <span className="theme-toggle-icon" data-mode={isDay ? "day" : "night"} aria-hidden="true"/>
            <span>{visibleLabel}</span>
            <span className="sr-only">{actionLabel}</span>
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
        <div className="mobile-menu-overlay min-[1180px]:hidden" role="dialog" aria-modal="true" aria-label={t.navigation}>
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
                    <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-[0.75rem] border border-white/12 bg-white/[0.06] px-5 py-4 text-left text-lg font-bold text-white">{t.nav[item.key]}</NavLink>
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
                    <NavLink to="/" className="lumo-header-brand group">
                        <img src={IMAGES.luminoviaLogoMark} alt="" loading="eager" width="52" height="52"/>
                        <span>
                            <strong>Luminovia</strong>
                            <small>Training & Consulting</small>
                        </span>
                    </NavLink>

                    <nav className="hidden items-center gap-0.5 min-[1180px]:flex">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t.nav[item.key]}</NavLink>)}
                    </nav>

                    <div className="hidden items-center gap-2 min-[1180px]:flex">
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage}/>
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                        <Button to="/contact#contact-options">{t.bookTraining}</Button>
                    </div>

                    <div className="lumo-mobile-header-actions min-[1180px]:hidden">
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
