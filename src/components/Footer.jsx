import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="text-2xl font-black text-white">Carina Sophie Schoppe</div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Freelance IT lecturer, AI trainer and business technology speaker based in Brisbane, Australia. Remote delivery across Europe and APAC.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">{item.label}</NavLink>)}
          <Link to="/imprint" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">Imprint</Link>
          <Link to="/privacy" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
