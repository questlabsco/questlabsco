import { Cloud, Sparkle } from "@/components/art/Doodles";

// Drifting clouds and a few sparkles for the blue booking sections.
// Purely decorative: sits behind the content, hidden on phones so it never
// crowds the headline.
export default function BlueSky({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      <Cloud className="absolute left-[3%] top-10 w-28 animate-drift opacity-95" />
      <div className="absolute right-[4%] top-20 w-32 animate-drift [animation-delay:-5s]">
        <Cloud className="w-full" />
      </div>
      {dense && (
        <div className="absolute left-[8%] bottom-14 hidden w-20 animate-drift [animation-delay:-8s] lg:block">
          <Cloud className="w-full" />
        </div>
      )}
      <Sparkle className="absolute left-[18%] top-28 w-6 animate-twinkle" />
      <Sparkle className="absolute right-[16%] top-8 w-5 animate-twinkle [animation-delay:-1s]" color="#FFFFFF" />
      {dense && (
        <Sparkle className="absolute right-[9%] bottom-24 hidden w-7 animate-twinkle [animation-delay:-1.6s] lg:block" />
      )}
    </div>
  );
}
