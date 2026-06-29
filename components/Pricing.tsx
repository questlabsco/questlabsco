"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    step: "Step 1 — Start Here",
    tier: "Automation Audit",
    price: "from $3,500",
    period: "· 1–2 weeks",
    bestFor:
      "We map your workflows, find what's automatable, and put a real dollar figure on it. Zero obligation to continue.",
    CTA: "Book your audit",
    href: "#book",
    highlighted: false,
    delay: 0.1,
    benefits: [
      { text: "Full review of manual, repetitive workflows", checked: true },
      { text: "3–5 highest-value opportunities prioritized", checked: true },
      { text: "Real ROI calculation in hours and dollars", checked: true },
      { text: "Clear build roadmap with scope & timeline", checked: true },
      { text: "Audit fee credits toward build", checked: true },
      { text: "No obligation to continue", checked: true },
    ],
  },
  {
    step: "Step 2 — Build It",
    tier: "Build & Implementation",
    price: "custom",
    period: "· based on audit",
    bestFor:
      "We build the automations from your audit — tested on your real data, documented, handed over working. Most engagements start at $6,000.",
    CTA: "Get a quote",
    href: "#book",
    highlighted: true,
    delay: 0.2,
    benefits: [
      { text: "Workflow automation across your existing tools", checked: true },
      { text: "AI document processing & data extraction", checked: true },
      { text: "Lead capture, qualification & follow-up", checked: true },
      { text: "Internal AI assistants & knowledge tools", checked: true },
      { text: "Two rounds of revisions per workflow", checked: true },
      { text: "Exact quote comes from your audit", checked: true },
    ],
  },
  {
    step: "Step 3 — Scale It",
    tier: "Embedded Automation Team",
    price: "from $4,000",
    period: "/mo",
    bestFor:
      "Your outsourced AI & automation department. We own, run, and continuously expand your systems — shipping new automations every month.",
    CTA: "Get a quote",
    href: "#book",
    highlighted: false,
    delay: 0.3,
    benefits: [
      { text: "New automations shipped each month", checked: true },
      { text: "Full ownership — monitoring & maintenance", checked: true },
      { text: "Monthly report tied to your metrics", checked: true },
      { text: "Priority response & direct team access", checked: true },
      { text: "Monthly roadmap session", checked: true },
      { text: "No lock-in — you keep everything", checked: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-background border-t border-white/6 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-heading leading-tight">
            Simple, transparent, tied to ROI
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl">
            Every engagement starts with an audit — so you know the return
            before you commit to anything bigger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.tier} {...tier} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto border border-white/8 bg-white/[0.02] p-7 md:p-9"
        >
          <h3 className="text-base font-bold text-white mb-5 font-heading">
            How we keep pricing fair
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Every price maps to ROI. We don't quote a number without showing you what it returns.",
              "Itemized, always. You'll see exactly what you're paying for.",
              "We name our stack. Real tools, real integrations — not vague 'AI-powered' claims.",
              "No manufactured urgency, ever. Our prices don't expire in 48 hours.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                <span className="mt-0.5 size-4 rounded-sm bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 text-violet-400">
                  <svg className="size-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-5 text-base max-w-lg mx-auto">
            Ready to see the numbers for your business? Start with an audit. In
            two weeks you&apos;ll know exactly what&apos;s automatable and what it returns.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold py-3.5 px-8 rounded transition-all duration-200 shadow-lg shadow-violet-500/25 group"
          >
            Book your automation audit
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
