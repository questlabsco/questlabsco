"use client";

import { useEffect, useRef } from "react";

// Custom cursor: a single purple dot that tracks the pointer, growing
// slightly over interactive elements. Fine-pointer devices only; native
// cursor stays available inside iframes (Calendly) which have their own
// document.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current!;
    let raf = 0;

    const move = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hovering = !!t?.closest(
        "a, button, select, input, textarea, [role='button']"
      );
      const scale = hovering ? 1.8 : 1;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${scale})`;
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 z-[100] size-2.5 rounded-full bg-primary pointer-events-none transition-transform duration-150 ease-out"
      style={{ transform: "translate(-100px, -100px)" }}
    />
  );
}
