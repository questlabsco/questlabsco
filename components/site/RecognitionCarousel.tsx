"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { recognition } from "@/lib/data/recognition";

// No card/border wrapper by design — this sits directly on its parent
// section's background so it reads as part of the page, not a boxed widget.
export default function RecognitionCarousel({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const item = recognition[index];

  const prev = () =>
    setIndex((index - 1 + recognition.length) % recognition.length);
  const next = () => setIndex((index + 1) % recognition.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="min-h-[280px] md:min-h-[560px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <h3
              className={`text-2xl md:text-4xl font-bold leading-tight ${
                onDark ? "text-white" : "text-ink"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-4 text-base leading-relaxed max-w-md ${
                onDark ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {item.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-8 max-w-md">
          <div className="flex gap-1.5">
            {recognition.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Recognition ${i + 1}`}
                className={`h-1 transition-all ${
                  i === index
                    ? "w-8 bg-primary"
                    : `w-4 ${onDark ? "bg-white/20" : "bg-line"}`
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className={`transition-colors ${
                onDark
                  ? "text-white/50 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className={`transition-colors ${
                onDark
                  ? "text-white/50 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative aspect-[4/3] md:h-[640px] overflow-hidden">
        <AnimatePresence mode="wait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            key={index}
            src={item.image}
            alt={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/20 to-transparent" />
        <div className="absolute top-5 left-5 right-5">
          <span className="inline-block bg-accent text-white text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1.5">
            {item.kind}
          </span>
        </div>
        <p className="absolute bottom-16 left-5 right-5 text-white text-xl font-bold leading-snug">
          {item.title}
        </p>
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
          className="absolute bottom-5 left-5 size-10 rounded-full border border-white/50 bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4 translate-x-px" />
          )}
        </button>
        <div className="absolute bottom-5 right-5 left-[76px] h-px bg-white/25">
          <div
            className="h-px bg-white transition-all duration-500"
            style={{ width: `${((index + 1) / recognition.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
