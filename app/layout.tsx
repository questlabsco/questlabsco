import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CustomCursor from "@/components/site/CustomCursor";
import StickyBookBar from "@/components/site/StickyBookBar";
import JsonLd from "@/components/site/JsonLd";
import { siteConfig } from "@/lib/data/site";
import { ogImage } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

const homeTitle = "Quest Labs Co.: AI Automation & Web Development Agency";
const homeDescription =
  "AI automation agency building AI agents, workflow automation, and fast websites. 25+ active clients and tens of thousands of hours saved. Book a free call.";

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
    <html lang="en" className={monaSans.variable}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationSchema()} />
        <CustomCursor />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
