export default function Metric({ value, label }) {
  return (
    <div className="glass-sheen rounded-[1.55rem] border border-white/10 bg-white/[0.08] p-4 shadow-[0_18px_58px_rgba(0,0,0,.18)] backdrop-blur-2xl transition duration-700 hover:-translate-y-1.5 hover:border-teal-200/35 hover:bg-white/[0.12]">
      <div className="text-lg font-black text-white">{value}</div>
      <div className="mt-1 text-xs leading-5 text-zinc-400">{label}</div>
    </div>
  );
}
