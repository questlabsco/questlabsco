"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";

const faqs = [
  {
    question: "What is an automation audit, and why start there?",
    answer:
      "The audit is a 1–2 week deep-dive into your business. We interview your team, map your workflows, and identify the 3–5 highest-value automation opportunities — with a real dollar figure attached to each one. You walk away with a clear roadmap and an honest ROI picture before spending anything on a build. Most clients find the audit alone worth the fee.",
  },
  {
    question: "What kinds of automations do you actually build?",
    answer:
      "We work across your existing tools — CRM, helpdesk, email, billing, spreadsheets. Common builds include: lead follow-up and qualification, document processing and data extraction, internal routing and approval workflows, reporting automation, AI-powered knowledge tools, and customer-facing chatbots. If it's repetitive and rule-based, we can almost always automate it.",
  },
  {
    question: "Can I take my automations with me if I stop?",
    answer:
      "Yes, always. We build on tools you own — not proprietary platforms that hold your workflows hostage. No lock-in, no proprietary trap. If you decide to move on, everything we built goes with you, fully documented.",
  },
  {
    question: "How does the monthly retainer work in practice?",
    answer:
      "At the start of each month we run a roadmap session to align on priorities. We then build new automations or expand existing ones from a shared backlog you control. At the end of the month you get a report tying our work to the metrics you care about — hours saved, response time improvements, error rates reduced. You direct the work; we own the execution.",
  },
  {
    question: "Do I need to change my existing tools or software?",
    answer:
      "No. We work within your current stack. If you're on HubSpot, Salesforce, Zendesk, Gmail, Slack, QuickBooks — we integrate with what you already have. The goal is to automate your existing processes, not to sell you new software.",
  },
  {
    question: "How long does the first automation build take?",
    answer:
      "It depends on scope, which your audit defines precisely. Most individual workflow automations take 2–4 weeks to build, test, and hand over. More complex multi-system integrations can take 6–8 weeks. The audit eliminates guesswork — you'll know the timeline before you commit.",
  },
  {
    question: "Is the $3,500 audit fee refundable if I don't move forward?",
    answer:
      "The audit fee isn't refundable — it covers real work delivered (a full workflow map, prioritized opportunity list, and ROI roadmap). But if you move forward with a build, the entire audit fee credits against your build invoice. Either way, you walk away with a valuable asset.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border-b transition-colors duration-300 ${
        open ? "border-violet-500/20" : "border-white/6"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-200 transition-colors duration-200">
          {question}
        </span>
        <span
          className={`shrink-0 size-6 border flex items-center justify-center transition-all duration-300 ${
            open
              ? "border-violet-500/50 bg-violet-500/10 text-violet-300"
              : "border-white/10 bg-white/5 text-slate-500"
          }`}
        >
          {open ? <Minus className="size-3" /> : <Plus className="size-3" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="pb-5 pr-10">
              <p className="text-sm text-slate-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-background border-t border-white/6 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-12 lg:gap-20">

          {/* Left: sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            {/* Decorative accent */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-violet-500" />
              <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase">
                FAQ
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-heading leading-tight">
              Questions we actually get
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              No fluff. Straight answers to what most people ask before booking an audit.
            </p>

            {/* Count graphic */}
            <div className="border border-white/8 bg-white/[0.02] p-5 mb-8">
              <p className="text-3xl font-bold text-white font-heading mb-1">
                {faqs.length}
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">common questions</p>
            </div>

            <a
              href="mailto:hello@questlabs.ai"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-300 transition-colors duration-200 group"
            >
              <Mail className="size-4 text-slate-500 group-hover:text-violet-400 transition-colors duration-200" />
              Still have a question? Email us
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="border-t border-white/6">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} {...faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
