import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PROFILE, navItems } from "../data/profile.js";
import Button from "./Button.jsx";

function navClass({ isActive }) {
  return isActive
    ? "rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950"
    : "rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white";
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070B16]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3 text-left">
          <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 via-white to-violet-300 text-slate-950 shadow-xl shadow-cyan-500/20">
            <span className="text-sm font-black">CS</span>
            <span className="absolute inset-0 rounded-2xl bg-white/0 blur-xl transition group-hover:bg-cyan-200/40" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-tight text-white">Carina Sophie Schoppe</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Lecturer · Trainer · Speaker</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{item.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">LinkedIn</a>
          <Button href={PROFILE.booking}>Book training</Button>
        </div>

        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070B16]/95 p-5 backdrop-blur-xl lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-lg font-black text-white">Navigation</span>
            <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white">Close</button>
          </div>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left text-lg font-black text-white transition hover:bg-white/10">{item.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
