import Link from "next/link";
import { ArrowRight, Clock, Search, BarChart2, ShieldOff } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import CalendlyEmbed from "@/components/site/CalendlyEmbed";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import Mascot from "@/components/art/Mascot";
import { HandArrow, Sparkle } from "@/components/art/Doodles";
import BlueSky from "@/components/art/offer/BlueSky";
import { booking, siteConfig } from "@/lib/data/site";

const expectations = [
  {
    icon: Clock,
    title: `${booking.duration}, with the people who'd build it`,
    body: "You talk to the team that would do the work. No sales rep, no follow-up email sequence.",
  },
  {
    icon: Search,
    title: "A straight answer",
    body: "If your idea won't work, or isn't worth what it would cost, we'll tell you on the call.",
  },
  {
    icon: BarChart2,
    title: "Rough numbers to decide on",
    body: "Roughly what it would take, so you're not guessing about whether it's worth doing.",
  },
  {
    icon: ShieldOff,
    title: "No obligation",
    body: "No pressure and no expiring discounts. Decide in your own time.",
  },
];

export default function ContactPageContent() {
  return (
    <main>
      {/* Hero + calendar: booking is the first thing on the page */}
      <section className="relative overflow-hidden bg-hero text-white">
        <BlueSky />
        <div className="container-site relative pb-14 pt-8 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h-page text-white">
              Pick <span className="hl-blue">A Time</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Your free audit is {booking.duration} with the team that would do
              the work. Bring the job that eats your week.
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Want us to come prepared?{" "}
              <Link
                href={booking.page}
                className="inline-flex min-h-[44px] items-center gap-1 font-bold text-sun-light underline underline-offset-4 hover:text-white"
              >
                Take the 60-second audit quiz
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
            {/* Calendar first on phones */}
            <div className="card-pop-lg overflow-hidden text-ink lg:order-2">
              <CalendlyEmbed />
            </div>

            <div className="lg:order-1">
              <ul className="space-y-3">
                {expectations.map((e) => {
                  const Icon = e.icon;
                  return (
                    <li key={e.title} className="card-pop flex items-start gap-4 p-4 text-ink">
                      <span
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun shadow-pop-sm"
                      >
                        <Icon className="size-5 text-ink" strokeWidth={2.5} />
                      </span>
                      <span>
                        <span className="block text-base font-extrabold leading-snug">{e.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink/75">
                          {e.body}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 text-base font-semibold leading-relaxed text-white/90">
                25+ active clients. Tens of thousands of hours of manual work
                saved. 4.9 / 5 average client rating.
              </p>

              <div aria-hidden="true" className="relative mt-6 hidden items-end gap-3 lg:flex">
                <div className="w-28 animate-float [animation-duration:4.2s]">
                  <Mascot wave mood="wink" className="w-full" />
                </div>
                <div className="mb-10 flex flex-col items-start">
                  <span className="note-hand -rotate-3 !text-white">Pick any open slot</span>
                  <HandArrow className="mt-1 w-12 -rotate-12 animate-wiggle [&_path]:stroke-white" />
                </div>
                <Sparkle className="absolute left-24 top-0 w-6 animate-twinkle [animation-delay:-1.2s]" />
              </div>
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
                Rather write it down? Tell us what&apos;s eating your
                team&apos;s week, in your own words, and we&apos;ll reply
                within one business day. Prefer email?{" "}
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
