import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/AuditModal";
import { BookAutoOpen } from "@/components/BookAutoOpen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Geometric sans for headlines and the wordmark. Poppins is not a variable
// font on Google Fonts, so every weight we use has to be requested explicitly.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Placeholder domain, replace with the real one before launch.
const SITE_URL = "https://soch.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Soch: Marketing for Restaurant, Cafe & Lounge Owners",
    template: "%s · Soch",
  },
  description:
    "We run Instagram, Google, review replies and your Wolt or Bolt Food listing, for restaurants, cafes and shisha lounges. You approve every post. Packages from €290/month, starting in Tallinn.",
  keywords: [
    "restaurant marketing agency",
    "cafe social media management",
    "shisha lounge marketing",
    "Google Business Profile management",
    "restaurant review management",
    "Instagram management for restaurants",
    "Wolt listing management",
    "Bolt Food listing management",
    "restaurant marketing Tallinn",
  ],
  openGraph: {
    title: "Soch: Marketing for Restaurant, Cafe & Lounge Owners",
    description:
      "We run Instagram, Google, review replies and your Wolt or Bolt Food listing, for restaurants, cafes and shisha lounges. You approve every post. Packages from €290/month, starting in Tallinn.",
    url: SITE_URL,
    siteName: "Soch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soch: Marketing for Restaurant, Cafe & Lounge Owners",
    description:
      "We run Instagram, Google, review replies and your Wolt or Bolt Food listing, for restaurants, cafes and shisha lounges. You approve every post. Packages from €290/month, starting in Tallinn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <AuditModalProvider>
          <BookAutoOpen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AuditModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
