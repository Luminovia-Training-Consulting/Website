import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PROFILE, navItems } from "../data/profile.js";
import Button from "./Button.jsx";
import { useLanguage } from "../i18n.jsx";

function navClass({ isActive }) {
  return isActive
    ? "rounded-full bg-white px-3 py-2 text-sm font-bold text-zinc-950 shadow-[0_12px_34px_rgba(45,212,191,.16)]"
    : "rounded-full px-3 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090B]/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3 text-left">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br from-white via-teal-50 to-pink-50 text-sm font-black text-zinc-950 shadow-[0_10px_32px_rgba(45,212,191,.18)] transition duration-500 group-hover:rotate-2">
            CS
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-tight text-white">Carina Sophie Schoppe</div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">{t.headerTagline}</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t.nav[item.key]}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button onClick={toggleLanguage} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/[0.09] hover:text-white" aria-label={`Switch language from ${language}`}>
            {t.switchLabel}
          </button>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/[0.09] hover:text-white">{t.linkedin}</a>
          <Button href={PROFILE.booking}>{t.bookTraining}</Button>
        </div>

        <button className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black text-white backdrop-blur-xl lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">{t.menu}</button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#08090B]/94 p-5 backdrop-blur-2xl lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-lg font-black text-white">Navigation</span>
            <div className="flex gap-2">
              <button onClick={toggleLanguage} className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white">{t.switchLabel}</button>
              <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white">{t.close}</button>
            </div>
          </div>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-3xl border border-white/10 bg-white/[0.07] px-5 py-4 text-left text-lg font-black text-white transition hover:bg-white/[0.11]">{t.nav[item.key]}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
