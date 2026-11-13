import { Clock, Search, BarChart2, ShieldOff } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import CalendlyEmbed from "@/components/site/CalendlyEmbed";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import Mascot from "@/components/art/Mascot";
import { HandArrow } from "@/components/art/Doodles";
import BlueSky from "@/components/art/offer/BlueSky";
import { booking, siteConfig } from "@/lib/data/site";

const expectations = [
  {
    icon: Clock,
    title: `${booking.duration}, with the people who do the work`,
    body: "A real conversation with the team that would build it, not a sales sequence.",
  },
  {
    icon: Search,
    title: "An honest feasibility read",
    body: "If your idea won't work or isn't worth the cost, we'll say so up front.",
  },
  {
    icon: BarChart2,
    title: "Numbers, not adjectives",
    body: "Proposals are itemized, with expected returns attached to every line.",
  },
  {
    icon: ShieldOff,
    title: "Zero obligation",
    body: "No pressure tactics, no expiring discounts. Decide on the merits.",
  },
];

export default function ContactPageContent() {
  return (
    <main>
      {/* Hero + calendar: booking is the first thing on the page */}
      <section className="relative overflow-hidden bg-hero text-white">
        <BlueSky dense />
        <div className="container-site relative page-hero pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pill">Free · {booking.duration}</p>
            <h1 className="h-page mt-5 text-white">
              Get Your <span className="hl-blue">Free Automation Audit</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Pick a time that suits you. Tell us about the workflow that eats
              your team&apos;s week, and we&apos;ll tell you what&apos;s
              automatable and whether it&apos;s worth doing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14">
            <div>
              <ul className="space-y-4">
                {expectations.map((e) => {
                  const Icon = e.icon;
                  return (
                    <li key={e.title} className="card-pop flex items-start gap-4 p-4 text-ink md:p-5">
                      <span
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun shadow-pop-sm"
                      >
                        <Icon className="size-5 text-ink" strokeWidth={2.5} />
                      </span>
                      <span>
                        <span className="block text-base font-extrabold leading-snug">{e.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink/75 md:text-base">
                          {e.body}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-8 text-base font-semibold leading-relaxed text-white/90">
                25+ active clients. Tens of thousands of hours of manual work
                saved. 4.9 / 5 average client rating.
              </p>

              <div aria-hidden="true" className="mt-8 hidden items-end gap-3 lg:flex">
                <div className="w-28 animate-float">
                  <Mascot wave mood="wink" className="w-full" />
                </div>
                <div className="mb-10 flex flex-col items-start">
                  <span className="note-hand -rotate-3 !text-white">Pick any open slot</span>
                  <HandArrow className="mt-1 w-12 -rotate-12 [&_path]:stroke-white" />
                </div>
              </div>
            </div>

            <div className="card-pop-lg overflow-hidden text-ink">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Message form, for people who would rather write */}
      <section id="message" className="bg-white">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="Or Send Us A Message"
            highlight="A Message"
            lede={
              <>
                A workflow that eats your team&apos;s week, a product idea, a
                website that needs to work harder: describe it in your own
                words and we&apos;ll reply within one business day. Prefer
                email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-bold text-brand underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </>
            }
          />
          <Reveal className="card-pop-lg mx-auto max-w-3xl p-5 sm:p-7 md:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
