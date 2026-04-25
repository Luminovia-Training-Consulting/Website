import { Link } from "react-router-dom";
import { PROFILE } from "../data/profile.js";
import Button from "./Button.jsx";
import { useLanguage } from "../i18n.jsx";

export default function ConversionStrip() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-[#111418] p-5 shadow-[0_18px_60px_rgba(0,0,0,.25)] backdrop-blur-xl sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-black text-white">{t.conversion.title}</div>
            <p className="mt-1 text-sm text-zinc-300">{t.conversion.copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={PROFILE.booking}>{t.bookTrainingCall}</Button>
            <Link to="/training" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.045] px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:border-teal-200/35 hover:bg-white/[0.075]">{t.conversion.topics} &gt;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
