import { booking } from "@/lib/data/site";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import HeroScene from "@/components/art/home/HeroScene";

// Homepage hero: the page's only <h1>, the main button, and the workflow
// machine illustration sitting on the bottom edge. The page shell adds the
// zigzag below, so the section ends flush on the gradient's bottom colour.
//
// The opening is kept short so the art is on the first screen. From lg up
// the scene is pulled up under the button (negative top margin): its upper
// pills sit either side of the button and Questy's antenna starts just under
// the small print. The text block sits above the scene (z-10) and the scene
// ignores the pointer, so the button stays clickable.
export default function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      {/* sky decorations beside the headline, wide screens only */}
      <div aria-hidden="true" className="hidden xl:block">
        <div className="absolute left-[4%] top-16 w-28 animate-drift">
          <Cloud className="block h-auto w-full" />
        </div>
        <div className="absolute right-[5%] top-40 w-24 animate-drift" style={{ animationDelay: "-6s" }}>
          <Cloud className="block h-auto w-full" />
        </div>
        <div className="absolute left-[9%] top-48 w-7 animate-twinkle">
          <Sparkle className="block h-auto w-full" />
        </div>
        <div className="absolute right-[11%] top-12 w-6 animate-twinkle" style={{ animationDelay: "-1s" }}>
          <Sparkle className="block h-auto w-full" color="#FFFFFF" />
        </div>
      </div>

      <div className="container-site relative pt-8 md:pt-10">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="h-display text-[2rem] text-white sm:text-[2.4rem] md:text-[2.6rem] lg:text-[2.75rem] xl:text-[3rem]">
            AI Automation That Gives Your Team <span className="hl-blue">Its Hours Back</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:mt-4 md:text-lg">
            We build the AI agents and automations that take the copy-paste, the chasing and the
            same-question-forty-times off your team&apos;s plate.
          </p>
          <div className="mt-5 flex flex-col items-center gap-2 md:mt-6">
            <a href={booking.anchor} className="btn-primary btn-lg">
              <span className="sm:hidden">{booking.label}</span>
              <span className="hidden sm:inline">{booking.labelLong}</span>
            </a>
            <p className="text-sm font-semibold text-white/85">{booking.duration}. No sales pitch.</p>
          </div>
        </div>

        <div className="pointer-events-none relative mt-5 md:mt-6 lg:-mt-20 xl:-mt-24">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
