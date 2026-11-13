import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import Mascot from "@/components/art/Mascot";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  // A missing page has no canonical URL of its own.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-hero text-white">
      <Cloud className="hidden md:block absolute left-[6%] top-16 w-28 animate-drift" />
      <Cloud className="hidden md:block absolute right-[7%] top-32 w-20 animate-drift [animation-delay:-5s]" />
      <Cloud className="hidden lg:block absolute left-[18%] bottom-16 w-16 animate-drift [animation-delay:-9s]" />

      <div className="container-site page-hero relative pb-24 md:pb-32 text-center">
        <div className="relative mx-auto w-32 md:w-40">
          <Sparkle className="absolute -left-6 top-2 w-8 animate-twinkle" />
          <Sparkle
            color="#FFFFFF"
            className="absolute -right-5 top-10 w-6 animate-twinkle [animation-delay:-1.2s]"
          />
          <Mascot mood="wow" className="w-full animate-float" />
        </div>
        <p aria-hidden="true" className="mt-4 font-hand text-2xl text-white/90 -rotate-2">
          Error 404
        </p>
        <h1 className="h-page mt-3">
          This Page <span className="hl-blue">Wandered Off</span>
        </h1>
        <p className="mt-5 mx-auto max-w-xl text-lg leading-relaxed text-white/90">
          The link may be outdated. Everything we do is reachable from the
          homepage.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary btn-lg">
            Back To Home
          </Link>
          <Link href="/case-studies" className="btn-outline-dark btn-lg">
            See Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
