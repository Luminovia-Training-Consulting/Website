import { useEffect, useRef } from "react";

export default function AmbientIntelligence() {
  const progressRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        progressRef.current?.style.setProperty("--scroll-progress", progress);
      });
    }

    function updatePointer(event) {
      pointerRef.current?.style.setProperty("--pointer-x", `${(event.clientX / window.innerWidth) * 100}%`);
      pointerRef.current?.style.setProperty("--pointer-y", `${(event.clientY / window.innerHeight) * 100}%`);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <div ref={pointerRef} className="pointer-aura" aria-hidden="true" />
      <div className="intelligence-layer" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="data-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
