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
    const fallbackText = fallbackCopy || t.photoFallback;
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
        <div className={cn("lumo-portrait", className)}>
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
                <div className="lumo-portrait-fallback">
                    <strong>{fallback}</strong>
                    <p>{fallbackText}</p>
                </div>
            )}
        </div>
    );
}
