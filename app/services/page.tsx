import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services: Organic Social Media Management, End to End",
  description:
    "Profile & bio optimisation, content production, community management, personal brand strategy, channel coaching and audits. The full Soch social media system for founders and senior executives. No ads, no SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-[48px]">
            <div className="min-w-0 md:[flex:0_0_45%] md:pr-10">
              <Reveal delay={0}>
                <h1 className="text-display text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
                  Every service Soch offers. Take the full system or start with the piece you need most.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead mt-6 max-w-2xl">
                  Each service is built around one goal: making you the most credible voice in your space, across every channel that matters. No ads, no SEO, just organic growth.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-[400px] md:max-w-none mx-auto md:mx-0">
                <Reveal delay={0.2}>
                  <ServicesOverview />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <ServicesShowcase />
      </Reveal>
    </>
  );
}
