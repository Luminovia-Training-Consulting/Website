import {useEffect, useRef} from "react";

export default function AmbientIntelligence() {
    const progressRef = useRef(null);
    const pointerRef = useRef(null);

    useEffect(() => {
        const mobileQuery = globalThis.matchMedia?.("(max-width: 768px)");
        if (mobileQuery?.matches) return undefined;

        let frame = 0;
        let scrollable = 0;

        function measureScrollable() {
            scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        }

        function updateProgress() {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
                progressRef.current?.style.setProperty("--scroll-progress", progress);
            });
        }

        function handleResize() {
            measureScrollable();
            updateProgress();
        }

        function updatePointer(event) {
            pointerRef.current?.style.setProperty("--pointer-x", `${(event.clientX / window.innerWidth) * 100}%`);
            pointerRef.current?.style.setProperty("--pointer-y", `${(event.clientY / window.innerHeight) * 100}%`);
        }

        measureScrollable();
        updateProgress();
        globalThis.addEventListener("scroll", updateProgress, {passive: true});
        globalThis.addEventListener("resize", handleResize);
        globalThis.addEventListener("pointermove", updatePointer, {passive: true});

        return () => {
            cancelAnimationFrame(frame);
            globalThis.removeEventListener("scroll", updateProgress);
            globalThis.removeEventListener("resize", handleResize);
            globalThis.removeEventListener("pointermove", updatePointer);
        };
    }, []);

    return (
        <>
            <div className="scroll-progress" aria-hidden="true">
                <span ref={progressRef}/>
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
