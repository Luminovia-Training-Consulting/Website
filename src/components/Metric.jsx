export default function Metric({ value, label }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
      <div className="text-lg font-black text-white">{value}</div>
      <div className="mt-1 text-xs leading-5 text-slate-400">{label}</div>
    </div>
  );
}
