"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("@/components/blocks/galaxy-interactive-hero-section").then(
      (m) => ({ default: m.HeroSection })
    ),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="size-8 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export default function HeroWrapper() {
  return <HeroSection />;
}
