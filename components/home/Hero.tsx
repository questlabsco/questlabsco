import { booking } from "@/lib/data/site";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import HeroScene from "@/components/art/home/HeroScene";

// Homepage hero: the page's only <h1>, the main button, and the workflow
// machine illustration sitting on the bottom edge. The page shell adds the
// zigzag below, so the section ends flush on the gradient's bottom colour.
export default function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      {/* sky decorations beside the headline, wide screens only */}
      <div aria-hidden="true" className="hidden xl:block">
        <div className="absolute left-[4%] top-20 w-28 animate-drift">
          <Cloud className="block h-auto w-full" />
        </div>
        <div className="absolute right-[5%] top-44 w-24 animate-drift" style={{ animationDelay: "-6s" }}>
          <Cloud className="block h-auto w-full" />
        </div>
        <div className="absolute left-[8%] top-64 w-7 animate-twinkle">
          <Sparkle className="block h-auto w-full" />
        </div>
        <div className="absolute right-[10%] top-24 w-6 animate-twinkle" style={{ animationDelay: "-1s" }}>
          <Sparkle className="block h-auto w-full" color="#FFFFFF" />
        </div>
      </div>

      <div className="container-site relative pt-14 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="h-display text-white">
            The AI Automation Agency That Gives Your Team{" "}
            <span className="hl-blue">Its Hours Back</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Finally, an AI agency measured by the hours it saves you. AI agents, workflow
            automation, and fast websites for 25+ active clients.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={booking.anchor} className="btn-primary btn-lg">
              {booking.labelLong}
            </a>
            <p className="text-sm font-semibold text-white/85">
              {booking.duration}. No sales pitch.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
