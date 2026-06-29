"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { Clock, Search, BarChart2, ShieldOff } from "lucide-react";

const callItems = [
  {
    icon: Clock,
    title: "30 minutes",
    body: "No prep needed. We'll guide the conversation.",
  },
  {
    icon: Search,
    title: "We map your workflows",
    body: "Show us what your team does manually. We'll find what's automatable.",
  },
  {
    icon: BarChart2,
    title: "Real numbers, not estimates",
    body: "You'll leave with a dollar figure attached to each opportunity.",
  },
  {
    icon: ShieldOff,
    title: "Zero obligation",
    body: "No sales pitch. Book only if the numbers make sense for you.",
  },
];

export default function BookingSection() {
  return (
    <section id="book" className="relative bg-background border-t border-white/6 py-16 md:py-24 overflow-hidden">
      {/* Subtle dot grid in top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(124,58,237,0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at top right, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at top right, black 30%, transparent 80%)",
        }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-12 lg:gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-violet-500" />
              <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase">
                Book your audit
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-heading leading-tight">
              Pick a time that works for you
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              30 minutes. We&apos;ll map out your workflows and show you what&apos;s automatable — no sales pitch, just the numbers.
            </p>

            {/* What to expect */}
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              What to expect
            </p>
            <div className="space-y-5">
              {callItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 size-8 bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 text-violet-400">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-white/6">
              <p className="text-xs text-slate-600">
                from $3,500 · 1–2 weeks · zero obligation
              </p>
            </div>
          </motion.div>

          {/* Right: Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-white/8"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/questlabsco/questlabs"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
