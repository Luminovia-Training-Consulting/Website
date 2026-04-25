export default function Metric({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111418]/82 p-4 backdrop-blur">
      <div className="text-lg font-black text-white">{value}</div>
      <div className="mt-1 text-xs leading-5 text-zinc-400">{label}</div>
    </div>
  );
}
