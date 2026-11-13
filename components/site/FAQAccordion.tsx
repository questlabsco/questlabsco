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
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.q}
          className="group card-pop open:shadow-pop-sm transition-shadow"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 md:px-6 md:py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-base md:text-lg font-extrabold text-ink">
              {item.q}
            </h3>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun transition-transform duration-200 group-open:rotate-45">
              <Plus aria-hidden="true" className="size-4 text-ink" strokeWidth={3.5} />
            </span>
          </summary>
          <p className="px-5 pb-5 md:px-6 md:pb-6 text-base leading-relaxed text-ink/80">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
