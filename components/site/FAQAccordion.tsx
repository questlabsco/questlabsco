import { Plus } from "lucide-react";

// Native <details> accordion: the answers are in the HTML whether or not a
// question is open, so search engines and AI crawlers can read them, and it
// works with the keyboard and without JavaScript.
export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-base md:text-lg font-semibold text-ink group-hover:text-primary transition-colors">
              {item.q}
            </h3>
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="pb-6 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
