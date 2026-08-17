import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a free 30-minute discovery call. We show you where your social channels are leaking opportunity and how to turn them into booked calls. No pitch, just a plan.",
};

const EXPECT = [
  "A clear read on where your channels are leaking opportunity today",
  "The position that would make you the obvious choice in your space",
  "Which channels and services will get you results fastest, for your goals",
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
            <span className="text-gradient">invisible to in-demand.</span>
          </>
        }
        intro="Book a free 30-minute call. We look at where you are now, show you what's possible on LinkedIn, Instagram, X and TikTok, and give you a clear plan. Take it and run, or take it with us."
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
                Founders and senior executives who want their social channels to build
                authority and bring in booked calls, without turning into a full-time
                content creator.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton variant="primary" size="lg">
                Book a Discovery Call
              </BookButton>
              <AuditButton variant="secondary" size="lg" className="!ring-brand !text-brand hover:!ring-brand-dark hover:!text-brand-dark">
                Get a Free Social Audit
              </AuditButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
