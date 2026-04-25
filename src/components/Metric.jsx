export default function Metric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[0_16px_50px_rgba(0,0,0,.18)] backdrop-blur-2xl transition duration-500 hover:-translate-y-0.5 hover:border-teal-200/30 hover:bg-white/[0.1]">
      <div className="text-lg font-black text-white">{value}</div>
      <div className="mt-1 text-xs leading-5 text-zinc-400">{label}</div>
    </div>
  );
}
