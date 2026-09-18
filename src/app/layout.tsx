import type { Metadata } from "next";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ComplianceBar } from "@/components/ComplianceBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/lib/cart";

export const metadata: Metadata = {
  metadataBase: new URL("https://evlvtoday.com"),
  title: {
    default: "EVLV Today | Reference-Grade Research Compounds",
    template: "%s | EVLV Today",
  },
  description:
    "Reference-grade research compounds with eight-stage independent testing, verified purity, and transparent COAs. Sold strictly for laboratory research use only.",
  keywords: [
    "research compounds",
    "reference-grade peptides",
    "certificates of analysis",
    "laboratory reagents",
    "research use only",
  ],
  authors: [{ name: "EVLV Today Research Labs" }],
  openGraph: {
    type: "website",
    siteName: "EVLV Today",
    title: "EVLV Today — Reference-Grade Research Compounds",
    description:
      "Eight-stage independent testing on every batch. Verified purity, documented potency, transparent COAs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVLV Today — Reference-Grade Research Compounds",
    description:
      "Premium research compounds for laboratory study. Third-party tested. Research use only.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-white text-ink-950">
            <AnnouncementBar />
            <ComplianceBar />
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
