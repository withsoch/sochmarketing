import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a quote for your restaurant, cafe or shisha lounge. We show you where your venue is losing visibility and how to turn it into more orders. No pitch, just a plan.",
};

const EXPECT = [
  "A clear read on where your venue is losing visibility today",
  "Which package fits your venue, and why, even if it's the cheapest one",
  "Which platforms and services will get you results fastest, for your goals",
  "A straight recommendation, no pressure. Work with us, or take the plan and run",
];

const META = [
  { icon: "clock" as const, label: "30 minutes" },
  { icon: "chat" as const, label: "No pitch, just a plan" },
  { icon: "shield" as const, label: "100% free" },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Let&apos;s map your path from{" "}
            <span className="text-gradient">overlooked to fully booked.</span>
          </>
        }
        intro="Get a quote in a free 30-minute call. We look at where your venue is now, show you what's possible on Instagram, Google and your delivery apps, and give you a clear plan. Take it and run, or take it with us."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal delay={0}>
            <div className="flex flex-wrap gap-2.5">
              {META.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
                >
                  <Icon name={m.icon} className="h-4 w-4 text-brand-dark" />
                  {m.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0}>
            <h2 className="text-h2 mt-8">What you&apos;ll walk away with</h2>
          </Reveal>

          <ul className="mt-6 space-y-4">
            {EXPECT.map((e, i) => (
              <Reveal key={e} delay={i * 0.1} as="li" className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand-dark">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-[0.975rem] leading-relaxed text-slate">{e}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-line bg-cream p-6">
              <p className="text-sm font-semibold text-ink">Who it&apos;s for</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Restaurant, cafe and shisha lounge owners who want to look
                active, get found on Google, and turn that into more orders,
                without becoming a full-time content creator themselves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton variant="primary" size="lg">
                Get a quote
              </BookButton>
              <AuditButton variant="secondary" size="lg" className="!ring-brand !text-brand hover:!ring-brand-dark hover:!text-brand-dark">
                Get a Free Venue Audit
              </AuditButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
