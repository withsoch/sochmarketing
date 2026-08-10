import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ServicesOverview } from "@/components/ServicesOverview";
import { BookButton } from "@/components/BookButton";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services: Organic Social Media Management, End to End",
  description:
    "Profile & bio optimisation, content production, community management, personal brand strategy, channel coaching and audits. The full Soch social media system for founders and senior executives. No ads, no SEO.",
};

const FACTS = [
  { value: "6", label: "Services, run as one system" },
  { value: "5+", label: "Channels under one strategy" },
  { value: "0", label: "Dollars spent on ads, ever" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.88fr] lg:gap-16">
            <div className="max-w-xl">
              <Reveal delay={0}>
                <span className="eyebrow">Services</span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-display mt-5 text-[clamp(2.3rem,1.4rem+3vw,3.6rem)]">
                  Everything your social presence needs.{" "}
                  <span className="italic text-brand">
                    Take the system, or one piece of it.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Every service below is built around one goal: making you the
                  most credible voice in your space, on the channels your buyers
                  actually use. No ads, no SEO, just organic growth.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8">
                  <BookButton variant="primary" size="lg" arrow>
                    Book a Discovery Call
                  </BookButton>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-dashed border-line pt-7">
                  {FACTS.map((f) => (
                    <div key={f.label}>
                      <dt className="sr-only">{f.label}</dt>
                      <dd>
                        <span
                          className="block text-[1.75rem] leading-none text-ink"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 540 }}
                        >
                          {f.value}
                        </span>
                        <span className="mt-2 block text-[0.78rem] leading-snug text-muted">
                          {f.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:pl-6">
              <ServicesOverview />
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesShowcase />

      <CtaBand
        title="Not sure which piece you need"
        subtitle="Book a free discovery call. We will look at your channels, tell you which of these services would move the needle first, and be straight with you if the answer is none of them yet."
      />
    </>
  );
}
