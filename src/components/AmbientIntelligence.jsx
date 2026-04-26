import { useEffect, useState } from "react";

export default function AmbientIntelligence() {
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 20 });

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      });
    }

    function updatePointer(event) {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
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
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div
        className="pointer-aura"
        style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` }}
        aria-hidden="true"
      />
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
