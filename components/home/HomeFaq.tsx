import SectionHeading from "@/components/site/SectionHeading";
import FAQAccordion from "@/components/site/FAQAccordion";
import Mascot from "@/components/art/Mascot";
import { homeFaqs } from "@/lib/data/faqs";

export default function HomeFaq() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="relative mx-auto max-w-3xl">
          {/* Questy peeking in beside the headline (desktop only). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 hidden w-28 -rotate-6 lg:block"
          >
            <Mascot mood="wink" className="w-full animate-float" />
          </div>

          <SectionHeading
            title="Questions We Get On Every First Call"
            highlight="Every First Call"
          />

          <FAQAccordion items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
