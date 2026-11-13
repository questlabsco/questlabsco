import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Problems from "@/components/home/Problems";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import HowItWorks from "@/components/home/HowItWorks";
import AuditOffer from "@/components/home/AuditOffer";
import Practices from "@/components/home/Practices";
import HomeFaq from "@/components/home/HomeFaq";
import ClientLogos from "@/components/home/ClientLogos";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";
import BlogTeaser from "@/components/blog/BlogTeaser";
import BookCall from "@/components/site/BookCall";
import Zigzag from "@/components/site/Zigzag";
import JsonLd from "@/components/site/JsonLd";
import { homeFaqs } from "@/lib/data/faqs";
import { faqSchema } from "@/lib/schema";

// The homepage is a stack of sections that alternate white and pale blue,
// joined by zigzag edges. Each section lives in components/home.
//
//   Hero (blue) > Client logos + proof (white) > Problems (pale)
//   > Case studies + grid (white) > How it works (pale) > Audit offer (white)
//   > Practices (pale) > FAQ (white) > Blog (pale) > Booking quiz (blue)
export default function Home() {
  return (
    <main>
      {/* The FAQ section below shows these same questions and answers. */}
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <Zigzag from="hero" to="white" />
      <ClientLogos />
      <ProofBar />
      <Zigzag from="white" to="pale" />
      <Problems />
      <Zigzag from="pale" to="white" />
      <CaseStudiesSection />
      <CaseStudyGrid />
      <Zigzag from="white" to="pale" />
      <HowItWorks />
      <Zigzag from="pale" to="white" />
      <AuditOffer />
      <Zigzag from="white" to="pale" />
      <Practices />
      <Zigzag from="pale" to="white" />
      <HomeFaq />
      <Zigzag from="white" to="pale" />
      <BlogTeaser />
      <BookCall />
    </main>
  );
}
