import HeroWrapper from "@/components/HeroWrapper";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroWrapper />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <BookingSection />
      <Footer />
    </main>
  );
}
