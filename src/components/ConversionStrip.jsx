import { Link } from "react-router-dom";
import { PROFILE } from "../data/profile.js";
import Button from "./Button.jsx";

export default function ConversionStrip() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-300/15 via-white/[0.08] to-violet-400/15 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-black text-white">Need a lecturer, trainer or speaker for AI, IT or business technology?</div>
            <p className="mt-1 text-sm text-slate-300">Send topic, learner group, timeframe and target outcome — you get a clear format recommendation.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={PROFILE.booking}>Book training call</Button>
            <Link to="/training" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">View topics →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
