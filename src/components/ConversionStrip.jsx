import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { useLanguage } from "../i18n.jsx";

export default function ConversionStrip() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="glass-sheen relative mx-auto max-w-7xl overflow-hidden rounded-[2.35rem] border border-white/10 bg-gradient-to-br from-white/[0.13] via-white/[0.07] to-white/[0.035] p-5 shadow-[0_30px_115px_rgba(0,0,0,.26)] backdrop-blur-2xl sm:p-7">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/70 to-transparent" />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-black text-white">{t.conversion.title}</div>
            <p className="mt-1 text-sm text-zinc-300">{t.conversion.copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/contact#appointment">{t.bookTrainingCall}</Button>
            <Link to="/training" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,0,0,.14)] transition duration-500 hover:-translate-y-1 hover:border-sky-200/40 hover:bg-white/[0.13]">{t.conversion.topics} &gt;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
