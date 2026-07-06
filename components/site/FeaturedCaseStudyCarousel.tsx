"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/data/case-studies";

// Big-image horizontal gallery. Vertical wheel motion over the strip drives
// horizontal scrolling (until the strip runs out of room, then the page
// keeps scrolling normally). Hovering a card swaps the pointer for a
// "Check out the project" circle that follows the mouse; clicking a card
// opens that case study.
export default function FeaturedCaseStudyCarousel({
  items,
}: {
  items: CaseStudy[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    const goingDown = e.deltaY > 0;
    if ((goingDown && atEnd) || (!goingDown && atStart)) return; // let the page scroll
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onWheel={onWheel}
        onMouseMove={(e) => setHoverPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setHoverPos(null)}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-16 md:pb-24 pt-2 px-5 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}/`}
            className="group relative shrink-0 w-[85vw] sm:w-[65vw] lg:w-[42vw] aspect-[4/3] snap-start overflow-hidden cursor-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-black/10" />

            <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-accent px-2.5 py-1">
                {cs.industry}
              </span>
              {cs.services.slice(0, 2).map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-semibold uppercase tracking-wider text-white border border-white/30 bg-black/20 backdrop-blur px-2.5 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2 max-w-md">
                {cs.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Cursor-following "view project" circle (fine pointers only).
          Positioning transform lives on this plain wrapper div; the inner
          motion.div owns its own transform for the scale/opacity animation,
          so the two never fight over the `transform` style property. */}
      {hoverPos && (
        <div
          className="hidden md:block fixed top-0 left-0 z-[90] pointer-events-none"
          style={{ transform: `translate(${hoverPos.x}px, ${hoverPos.y}px) translate(-50%, -50%)` }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="flex size-28 rounded-full bg-primary text-white items-center justify-center text-center text-xs font-bold uppercase tracking-wide leading-tight p-2"
            >
              Check out the project
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
