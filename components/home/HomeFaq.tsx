import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import FAQAccordion from "@/components/site/FAQAccordion";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import { homeFaqs } from "@/lib/data/faqs";
import { booking } from "@/lib/data/site";

export default function HomeFaq() {
  return (
    <section className="bg-white py-16 md:py-24">
      <style>{`
        @keyframes faq-q {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-6px) rotate(6deg); }
        }
      `}</style>
      <div className="container-site">
        <div className="relative mx-auto max-w-3xl">
          {/* Questy peeking in beside the headline, with a question mark
              bobbing over his head (desktop only). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 hidden w-28 -rotate-6 lg:block"
          >
            <span
              className="absolute -right-3 -top-8 flex size-10 items-center justify-center rounded-full border-[3px] border-ink bg-sun text-xl font-extrabold text-ink shadow-pop-sm"
              style={{ animation: "faq-q 3.8s ease-in-out infinite" }}
            >
              ?
            </span>
            <Mascot mood="wink" className="w-full animate-float" />
            <Sparkle className="absolute -bottom-4 -left-4 w-6 animate-twinkle [animation-delay:-0.8s]" />
          </div>

          <SectionHeading
            title="Stuff People Ask Us Before They Book"
            highlight="Before They Book"
            lede={
              <>
                Don&apos;t see yours? Bring it to your{" "}
                <Link href={booking.anchor} className="font-bold text-brand underline">
                  {booking.offer}
                </Link>
                . It&apos;s a 60-second quiz and a {booking.durationAdjective} call.
              </>
            }
          />

          <FAQAccordion items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
