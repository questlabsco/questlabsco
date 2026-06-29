"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 250, suffix: "k+", label: "Saved vs. a single in-house hire", prefix: "$" },
  { value: 2, suffix: " weeks", label: "To first automation roadmap", prefix: "" },
  { value: 48, suffix: "k", label: "Annual retainer vs. $250k+ hiring", prefix: "from $" },
  { value: 0, suffix: " lock-in", label: "You keep everything we build", prefix: "" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const end = value;
    if (end === 0) { setDisplay(0); return; }
    const duration = 1200;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };
    requestAnimationFrame((t) => step(t, t));
  }, [inView, value]);

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

const comparisonRows = [
  { label: "Annual cost", inhouse: "$250k+", team: "from $48k" },
  { label: "Skills coverage", inhouse: "One person", team: "Full team" },
  { label: "Redundancy", inhouse: "None", team: "Built in" },
  { label: "Time to productive", inhouse: "2–3 months hiring", team: "Live in weeks" },
  { label: "Ongoing management", inhouse: "You", team: "Us" },
];

export default function SocialProof() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-background border-t border-white/6 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            The Math
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-heading">
            Why an embedded team beats hiring
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl">
            A single in-house AI/automation engineer costs{" "}
            <strong className="text-white">$250,000+/year</strong> — once you
            account for salary, benefits, recruiting, and management. And
            you&apos;re betting on one person.
          </p>
        </motion.div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20 border border-white/5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-background"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="border border-white/8 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/8">
              <div className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest"></div>
              <div className="px-5 py-4 text-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  In-house hire
                </span>
              </div>
              <div className="px-5 py-4 text-center bg-violet-600/10 border-l border-violet-500/20">
                <span className="text-xs font-semibold text-violet-300 uppercase tracking-widest">
                  Embedded team
                </span>
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                }`}
              >
                <div className="px-5 py-4 text-sm text-slate-400 font-medium">
                  {row.label}
                </div>
                <div className="px-5 py-4 text-center text-sm text-slate-500">
                  {row.inhouse}
                </div>
                <div className="px-5 py-4 text-center text-sm font-semibold text-violet-300 bg-violet-600/5 border-l border-violet-500/10">
                  {row.team}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-sm text-slate-500"
          >
            The math only favors an in-house hire once the workload justifies
            more than two full-time employees.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5"
        >
          {[
            {
              title: "Every price maps to ROI",
              body: "We don't quote a number without showing you what it returns.",
            },
            {
              title: "Itemized, always",
              body: "You'll see exactly what you're paying for — no single-line 'AI package' totals.",
            },
            {
              title: "No manufactured urgency",
              body: "Our prices don't expire in 48 hours. We build long-term relationships.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-background hover:bg-white/[0.02] transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold text-white mb-2 font-heading">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
