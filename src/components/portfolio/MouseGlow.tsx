import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, oklch(0.65 0.18 240 / 0.4), oklch(0.75 0.15 210 / 0.2), transparent 70%)",
      }}
    />
  );
}
