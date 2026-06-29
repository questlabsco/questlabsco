"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BenefitProps {
  text: string;
  checked: boolean;
}

const Benefit = ({ text, checked }: BenefitProps) => (
  <div className="flex items-center gap-3">
    {checked ? (
      <span className="grid size-5 place-content-center rounded-sm bg-violet-600/20 border border-violet-500/30 text-sm text-violet-400 shrink-0">
        <Check className="size-3" />
      </span>
    ) : (
      <span className="grid size-5 place-content-center rounded-sm bg-zinc-800/60 text-sm text-zinc-600 shrink-0">
        <X className="size-3" />
      </span>
    )}
    <span className="text-sm text-zinc-300">{text}</span>
  </div>
);

interface PricingCardProps {
  step: string;
  tier: string;
  price: string;
  period?: string;
  bestFor: string;
  CTA: string;
  href?: string;
  benefits: Array<{ text: string; checked: boolean }>;
  highlighted?: boolean;
  className?: string;
  delay?: number;
}

export const PricingCard = ({
  step,
  tier,
  price,
  period,
  bestFor,
  CTA,
  href = "#",
  benefits,
  highlighted = false,
  className,
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full flex flex-col overflow-hidden border p-6 transition-all duration-300",
          highlighted
            ? "border-violet-500/60 bg-gradient-to-b from-violet-950/60 to-zinc-900/80 shadow-[0_0_40px_rgba(124,58,237,0.2)]"
            : "border-zinc-800/60 bg-gradient-to-b from-zinc-950/50 to-zinc-900/60 hover:border-zinc-700/60",
          className
        )}
      >
        {highlighted && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        )}

        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">
            {step}
          </span>
          <h3 className="text-xl font-bold text-white mb-2 font-heading">{tier}</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-bold text-white">{price}</span>
            {period && (
              <span className="text-sm text-zinc-400">{period}</span>
            )}
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">{bestFor}</p>
        </div>

        <div className="flex-1 border-t border-zinc-800/60 pt-6 space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>

        <Button
          asChild
          variant={highlighted ? "violet" : "violet-outline"}
          size="lg"
          className="w-full group"
        >
          <a href={href}>
            {CTA}
            <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </Card>
    </motion.div>
  );
};
