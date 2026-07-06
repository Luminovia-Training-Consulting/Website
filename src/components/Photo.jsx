import {useState} from "react";
import {useLanguage} from "../i18n.jsx";
import {cn} from "./utils.js";

export default function Photo({
                                  src,
                                  alt,
                                  className = "",
                                  imgClass = "",
                                  fallback = "CS",
                                  fallbackCopy,
                                  fetchPriority,
                                  loading,
                                  sizes = "(min-width: 1024px) 520px, 92vw",
                              }) {
    const {t} = useLanguage();
    const [failed, setFailed] = useState(false);
    const fallbackText = fallbackCopy || t.home.photoFallback;
    const avifSrcSet = src.endsWith(".jpg")
        ? [480, 640, 960].map((width) => `${src.replace(/\.jpg$/, `-${width}.avif`)} ${width}w`).join(", ")
        : null;
    const webpSrcSet = src.endsWith(".jpg")
        ? [480, 640, 960].map((width) => `${src.replace(/\.jpg$/, `-${width}.webp`)} ${width}w`).join(", ")
        : null;
    const priority = fetchPriority || "auto";
    const imageLoading = loading || (priority === "high" ? "eager" : "lazy");
    const decoding = priority === "high" ? "sync" : "async";

    return (
        <div className={cn("relative overflow-hidden bg-gradient-to-br from-sky-200/20 via-slate-900 to-blue-300/16 shadow-[0_24px_90px_rgba(0,0,0,.24)]", className)}>
            {!failed ? (
                <picture>
                    {avifSrcSet && <source srcSet={avifSrcSet} sizes={sizes} type="image/avif"/>}
                    {webpSrcSet && <source srcSet={webpSrcSet} sizes={sizes} type="image/webp"/>}
                    <img
                        src={src}
                        alt={alt}
                        sizes={sizes}
                        loading={imageLoading}
                        fetchPriority={priority}
                        decoding={decoding}
                        className={cn("h-full w-full object-cover", imgClass)}
                        onError={() => setFailed(true)}
                    />
                </picture>
            ) : (
                <div className="grid h-full min-h-[260px] place-items-center text-center">
                    <div>
                        <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white text-2xl font-black text-slate-950">{fallback}</div>
                        <p className="mt-4 max-w-xs text-sm text-slate-300">{fallbackText}</p>
                    </div>
                </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B16]/55 via-transparent to-white/5"/>
        </div>
    );
}
