import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CustomCursor from "@/components/site/CustomCursor";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quest Labs Co.: AI Automation & Software Partner",
    template: "%s | Quest Labs Co.",
  },
  description:
    "Quest Labs Co. designs, builds, and runs AI automation, custom AI solutions, and modern web products for companies across healthcare, finance, retail, logistics, and more.",
  keywords: [
    "AI automation",
    "AI consulting",
    "AI agents",
    "workflow automation",
    "web development",
    "UI/UX design",
  ],
  openGraph: {
    title: "Quest Labs Co.: AI Automation & Software Partner",
    description:
      "We design, build, and run AI automation and modern web products, from strategy and consulting to delivery and ongoing support.",
    type: "website",
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
        <CustomCursor />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
