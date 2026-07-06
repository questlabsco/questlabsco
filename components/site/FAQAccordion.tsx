"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-line">
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-line"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left">
              <span className="text-base md:text-lg font-semibold text-ink group-hover:text-primary transition-colors">
                {item.q}
              </span>
              <Plus className="size-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-fade-up">
            <p className="pb-6 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
