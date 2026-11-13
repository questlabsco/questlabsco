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
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg md:text-xl font-normal text-white/90 group-hover:text-white transition-colors">
              {item.q}
            </h3>
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-45 group-open:text-white"
            />
          </summary>
          <p className="pb-7 pr-10 text-base md:text-lg text-white/60 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
