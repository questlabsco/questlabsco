import type { Metadata } from "next";
import { Gochi_Hand, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import StickyBookBar from "@/components/site/StickyBookBar";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import LeadPopup from "@/components/site/LeadPopup";
import JsonLd from "@/components/site/JsonLd";
import { siteConfig } from "@/lib/data/site";
import { ogImage } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Handwriting for the side notes that point at things.
const hand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

const homeTitle = "Quest Labs Co.: AI Automation Agency | Free Automation Audit";
const homeDescription =
  "AI automation agency building AI agents, workflow automation, and fast websites for 25+ active clients. Get a free automation audit.";

export const metadata: Metadata = {
  // Makes every relative URL in metadata (canonicals, Open Graph) absolute.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: "%s | Quest Labs Co.",
  },
  description: homeDescription,
  // Resolved against each page's own path, so every page gets a
  // self-referencing canonical unless it sets one itself.
  alternates: { canonical: "./" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${hand.variable}`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationSchema()} />
        <AnnouncementBar />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyBookBar />
        <LeadPopup />
      </body>
    </html>
  );
}
