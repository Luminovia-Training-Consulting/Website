import Button from "./Button.jsx";
import {useLanguage} from "../i18n.jsx";

export default function StickyBookingBar() {
    const {t} = useLanguage();

    return (
        <aside className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:bottom-5" aria-label={t.stickyBooking.label}>
            <div className="pointer-events-auto mx-auto flex max-w-4xl flex-col gap-3 rounded-[1.6rem] border border-white/12 bg-[#071225]/88 p-3 shadow-[0_18px_74px_rgba(0,0,0,.38),0_0_38px_rgba(125,211,252,.08)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <div className="text-sm font-black text-white">{t.stickyBooking.title}</div>
                    <p className="mt-0.5 text-xs leading-5 text-zinc-300">{t.stickyBooking.copy}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                    <Button to="/contact#appointment">{t.stickyBooking.book}</Button>
                    <Button to="/pricing" variant="secondary">{t.stickyBooking.pricing}</Button>
                </div>
            </div>
        </aside>
    );
}
