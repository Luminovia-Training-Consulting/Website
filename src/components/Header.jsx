import {ArrowUpRight, Menu, Moon, Sun, X} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {NavLink, Link} from "react-router-dom";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/header.css";

const primaryNavigation = [
    ["/training", "training"],
    ["/consulting", "consulting"],
    ["/offers", "offers"],
    ["/about", "about"],
    ["/clients", "clients"],
];

export default function Header({theme, onToggleTheme}) {
    const [open, setOpen] = useState(false);
    const header = useRef(null);
    const menuToggle = useRef(null);
    const {t, toggleLanguage, language} = useLanguage();
    const isGerman = language === "de";
    const isDay = theme === "day";
    const languageLabel = isGerman ? "DE / EN, Sprache auf Englisch wechseln" : "DE / EN, switch language to German";
    const themeLabel = isGerman
        ? isDay ? "Zum Dunkelmodus wechseln" : "Zum Hellmodus wechseln"
        : isDay ? "Switch to night scheme" : "Switch to day scheme";
    const menuLabel = isGerman ? (open ? "Menü schließen" : "Menü") : (open ? "Close menu" : "Menu");
    const ThemeIcon = isDay ? Moon : Sun;
    const MenuIcon = open ? X : Menu;

    useEffect(() => {
        if (!open) return;

        function closeOnOutsidePress(event) {
            if (!header.current?.contains(event.target)) setOpen(false);
        }

        document.addEventListener("pointerdown", closeOnOutsidePress);
        return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
    }, [open]);

    function closeAfterNavigation(event) {
        if (open && event.detail === 0) {
            document.getElementById("site-content")?.focus({preventScroll: true});
        }
        setOpen(false);
    }

    function closeOnEscape(event) {
        if (event.key !== "Escape" || !open) return;
        setOpen(false);
        menuToggle.current?.focus();
    }

    function closeOnBlur(event) {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }

    return (
        <header className="site-header" ref={header} onBlur={closeOnBlur} onKeyDown={closeOnEscape}>
            <div className="site-header-inner">
                <Link className="site-brand" to="/" aria-label={PROFILE.name} onClick={closeAfterNavigation}>
                    <img src={IMAGES.luminoviaLogoMark} alt="" width="40" height="40"/>
                    <span><strong>Luminovia</strong><small>Training & Consulting</small></span>
                </Link>
                <div className="site-tools">
                    <button type="button" className="language-toggle" title={languageLabel} aria-label={languageLabel} onClick={toggleLanguage}>
                        <span data-current={isGerman}>DE</span><span aria-hidden="true">/</span><span data-current={!isGerman}>EN</span>
                    </button>
                    <button type="button" className="icon-button theme-toggle" aria-label={themeLabel} title={themeLabel} onClick={onToggleTheme}>
                        <ThemeIcon size={19} aria-hidden="true"/>
                    </button>
                    <button type="button" className="icon-button menu-toggle" aria-label={menuLabel} aria-controls="site-navigation" aria-expanded={open} onClick={() => setOpen(!open)} ref={menuToggle}>
                        <MenuIcon size={23} aria-hidden="true"/>
                    </button>
                </div>
                <nav id="site-navigation" className="site-nav" data-open={open} aria-label={isGerman ? "Hauptnavigation" : "Main navigation"}>
                    {primaryNavigation.map(([to, key]) => <NavLink key={to} to={to} onClick={closeAfterNavigation}>{t.nav[key]}</NavLink>)}
                    <NavLink className="lumo-button" data-button-variant="secondary" to="/contact" onClick={closeAfterNavigation}>
                        {t.nav.book}<ArrowUpRight size={18} aria-hidden="true"/>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
