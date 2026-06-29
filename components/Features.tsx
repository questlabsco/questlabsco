"use client";

import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    step: "Step 01",
    icon: Search,
    title: "Automation Audit",
    price: "from $3,500",
    period: "· 1–2 weeks",
    description:
      "We map your workflows, find what's automatable, and put a real dollar figure on it. You walk away with a clear roadmap whether or not you build with us.",
    bullets: [
      "Full review of your team's manual, repetitive workflows",
      "3–5 highest-value opportunities, identified and prioritized",
      "Real ROI calculation — current cost vs. automated",
      "No obligation to continue",
    ],
    color: "from-violet-600/20 to-violet-800/10",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
  },
  {
    step: "Step 02",
    icon: Wrench,
    title: "Build & Implement",
    price: "custom",
    period: "· based on audit",
    description:
      "We build the automations identified in your audit — tested on your real data, documented, and handed over working. No black boxes.",
    bullets: [
      "Workflow automation across your existing tools",
      "AI document processing and data extraction",
      "Lead capture, qualification, and follow-up systems",
      "Two rounds of revisions per workflow included",
    ],
    color: "from-purple-600/20 to-purple-800/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
    step: "Step 03",
    icon: Users,
    title: "Embedded Team",
    price: "from $4,000",
    period: "/mo",
    description:
      "Your outsourced AI & automation department. We own, run, and continuously expand your systems — shipping new automations every month.",
    bullets: [
      "New automations shipped each month from your backlog",
      "Full ownership — monitoring, maintenance, and fixes",
      "Monthly report tying work to your metrics",
      "You keep everything we build, no lock-in",
    ],
    color: "from-indigo-600/20 to-indigo-800/10",
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-background border-t border-white/6 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-heading leading-tight">
            A proven path from discovery to done
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Every engagement starts with an audit — so you know the ROI before
            you commit to anything bigger. No surprises, no black boxes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          id="how-it-works"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative group rounded border p-6 lg:p-7 bg-gradient-to-b ${feature.color} ${feature.borderColor} transition-all duration-300 cursor-default`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                    {feature.step}
                  </span>
                  <div className={`size-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center ${feature.iconColor}`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-heading">
                  {feature.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-sm font-semibold ${feature.iconColor}`}>
                    {feature.price}
                  </span>
                  <span className="text-xs text-slate-500">{feature.period}</span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {feature.description}
                </p>

                <ul className="space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className={`mt-0.5 size-4 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 ${feature.iconColor}`}>
                        <ArrowRight className="size-2.5" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-sm text-slate-500"
        >
          The audit fee credits in full toward your build if you move forward.
        </motion.p>
      </div>
    </section>
  );
}
