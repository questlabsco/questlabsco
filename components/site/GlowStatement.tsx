"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// Scroll-driven section: the purple glow behind the headline fills the
// whole section, holds steady while the headline is readable, then
// dissolves smoothly to white toward the end of the scroll range (rather
// than visibly shrinking to a small floating circle).
export default function GlowStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative bg-white"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            opacity,
            x: "-50%",
            backgroundColor: "#7C5FC2",
            filter: "blur(90px)",
            transformOrigin: "50% 100%",
          }}
          className="absolute left-1/2 bottom-0 w-[160vmax] h-[160vmax] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-site relative text-center px-6">
          <Reveal className="max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
              Software first.
              <br />
              AI where it counts.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              AI doesn&apos;t replace good engineering. It raises the bar for
              it. We bring the delivery discipline of a software team to
              every automation we ship.
            </p>
            <p className="mt-5 text-base font-semibold text-ink/70">
              No black-box demos. Production-grade from day one.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
