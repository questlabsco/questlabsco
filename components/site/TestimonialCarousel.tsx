"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { colorForName } from "@/lib/logoColors";
import LogoMark from "./LogoMark";

// EDIT-ME: quotes come from lib/data/testimonials.ts
export default function TestimonialCarousel({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div
      className={`border p-8 md:p-12 ${
        onDark ? "border-line-dark bg-ink" : "border-line bg-white"
      }`}
    >
      <div className="min-h-[180px] md:min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <p
              className={`text-lg md:text-xl leading-relaxed font-medium ${
                onDark ? "text-white" : "text-ink"
              }`}
            >
              “{t.quote}”
            </p>
            <footer className="mt-6 flex items-center gap-4">
              {/* EDIT-ME: initials avatar until a real photo is set in lib/data/testimonials.ts */}
              {t.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={t.photo}
                  alt={t.author}
                  className="size-12 object-cover border border-line"
                />
              ) : (
                <span
                  className="size-12 shrink-0 flex items-center justify-center select-none"
                  style={{ backgroundColor: `${colorForName(t.company)}1a` }}
                >
                  <LogoMark name={t.company} className="size-6" />
                </span>
              )}
              <div>
                <p
                  className={`text-sm font-bold ${
                    onDark ? "text-white" : "text-ink"
                  }`}
                >
                  {t.author}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    onDark ? "text-white/50" : "text-muted-foreground"
                  }`}
                >
                  {t.role}, {t.company}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1 transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : `w-4 ${onDark ? "bg-white/20" : "bg-line"}`
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className={`size-10 border flex items-center justify-center transition-colors ${
              onDark
                ? "border-line-dark text-white/60 hover:text-white hover:border-accent"
                : "border-line text-muted-foreground hover:text-primary hover:border-primary"
            }`}
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className={`size-10 border flex items-center justify-center transition-colors ${
              onDark
                ? "border-line-dark text-white/60 hover:text-white hover:border-accent"
                : "border-line text-muted-foreground hover:text-primary hover:border-primary"
            }`}
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
