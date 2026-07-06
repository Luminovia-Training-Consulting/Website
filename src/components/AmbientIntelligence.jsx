import {useEffect, useRef} from "react";

export default function AmbientIntelligence() {
    const pointerRef = useRef(null);

    useEffect(() => {
        const mobileQuery = globalThis.matchMedia?.("(max-width: 768px)");
        if (mobileQuery?.matches) return undefined;

        const viewport = {
            width: window.innerWidth || 1,
            height: window.innerHeight || 1,
        };

        function updateViewport() {
            viewport.width = window.innerWidth || 1;
            viewport.height = window.innerHeight || 1;
        }

        function updatePointer(event) {
            pointerRef.current?.style.setProperty("--pointer-x", `${(event.clientX / viewport.width) * 100}%`);
            pointerRef.current?.style.setProperty("--pointer-y", `${(event.clientY / viewport.height) * 100}%`);
        }

        globalThis.addEventListener("resize", updateViewport, {passive: true});
        globalThis.addEventListener("pointermove", updatePointer, {passive: true});

        return () => {
            globalThis.removeEventListener("resize", updateViewport);
            globalThis.removeEventListener("pointermove", updatePointer);
        };
    }, []);

    return (
        <>
            <div className="scroll-progress" aria-hidden="true">
                <span/>
            </div>
            <div ref={pointerRef} className="pointer-aura" aria-hidden="true"/>
            <div className="intelligence-layer" aria-hidden="true">
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <div className="data-orbit" aria-hidden="true">
                <span/>
                <span/>
                <span/>
            </div>
        </>
    );
}
