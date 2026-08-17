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

// Placeholder domain — replace with the real one before launch.
const SITE_URL = "https://soch.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Soch: Social Media Management for Founders & CEOs",
    template: "%s · Soch",
  },
  description:
    "Soch is an organic social media management agency for B2B founders and senior executives. We run your profile, content and community on LinkedIn, Instagram, X and TikTok — no paid ads, no SEO.",
  keywords: [
    "social media management agency",
    "organic social media growth",
    "personal branding for founders",
    "multi-channel content strategy",
    "LinkedIn management for founders",
    "Instagram management for founders",
    "X (Twitter) content management",
    "TikTok management for founders",
    "YouTube and Facebook content management",
  ],
  openGraph: {
    title: "Soch: Social Media Management for Founders & CEOs",
    description:
      "Soch is an organic social media management agency for B2B founders and senior executives. We run your profile, content and community on LinkedIn, Instagram, X and TikTok — no paid ads, no SEO.",
    url: SITE_URL,
    siteName: "Soch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soch: Social Media Management for Founders & CEOs",
    description:
      "Soch is an organic social media management agency for B2B founders and senior executives. We run your profile, content and community on LinkedIn, Instagram, X and TikTok — no paid ads, no SEO.",
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
