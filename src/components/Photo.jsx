import { useState } from "react";
import { cn } from "./utils.js";

export default function Photo({ src, alt, className = "", imgClass = "", fallback = "CS" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-teal-200/20 via-slate-900 to-fuchsia-300/16 shadow-[0_24px_90px_rgba(0,0,0,.24)]", className)}>
      {!failed ? (
        <img src={src} alt={alt} className={cn("h-full w-full object-cover", imgClass)} onError={() => setFailed(true)} />
      ) : (
        <div className="grid h-full min-h-[260px] place-items-center text-center">
          <div>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white text-2xl font-black text-slate-950">{fallback}</div>
            <p className="mt-4 max-w-xs text-sm text-slate-300">Portrait image placeholder. Replace the image path in src/data/profile.js with your production media URL.</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B16]/55 via-transparent to-white/5" />
    </div>
  );
}
