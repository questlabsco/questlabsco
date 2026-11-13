import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Problems from "@/components/home/Problems";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import HowItWorks from "@/components/home/HowItWorks";
import AuditOffer from "@/components/home/AuditOffer";
import Practices from "@/components/home/Practices";
import HomeFaq from "@/components/home/HomeFaq";
import BookCall from "@/components/site/BookCall";
import Zigzag from "@/components/site/Zigzag";

// The homepage is a stack of sections that alternate white and pale blue,
// joined by zigzag edges. Each section lives in components/home.
//
//   Hero (blue) > ProofBar (white) > Problems (pale) > Case studies (white)
//   > How it works (pale) > Audit offer (white) > Practices (pale)
//   > FAQ (white) > Booking (blue)
export default function Home() {
  return (
    <main>
      <Hero />
      <Zigzag from="hero" to="white" />
      <ProofBar />
      <Zigzag from="white" to="pale" />
      <Problems />
      <Zigzag from="pale" to="white" />
      <CaseStudiesSection />
      <Zigzag from="white" to="pale" />
      <HowItWorks />
      <Zigzag from="pale" to="white" />
      <AuditOffer />
      <Zigzag from="white" to="pale" />
      <Practices />
      <Zigzag from="pale" to="white" />
      <HomeFaq />
      <BookCall />
    </main>
  );
}
