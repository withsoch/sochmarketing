import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { CONFIRMATION_FAQS, CONFIRMATION_STEPS, NAV, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Audit Submitted",
  description:
    "Your profiles are with us. Umair will review them personally and send you the full breakdown within 24 hours.",
  robots: { index: false, follow: false },
};

const CALL_COVERS = [
  "We walk your audit findings together, line by line",
  "You leave with the three moves worth making first",
  "If we're not the right fit, we say so on the call",
];

export default function ConfirmationPage() {
  return (
    <>
      {/* ── CONFIRMATION BANNER ───────────────────────────────────── */}
      <section className="bg-forest">
        <div className="container-x py-14 sm:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-leaf text-white">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                Social audit received
              </span>

              <h1 className="text-display mt-6 text-[clamp(2.1rem,1.4rem+2.6vw,3.2rem)] text-white">
                Your profiles are with us.
              </h1>
              <p className="lead mt-4 text-white/70">
                Nothing else is needed from you. The written breakdown lands in
                your inbox within 24 hours — check spam if it hasn&apos;t arrived by
                then.
              </p>
            </div>

            <div className="shrink-0 lg:text-right">
              <p className="text-[0.8rem] text-white/55">Don&apos;t want to wait?</p>
              <div className="mt-3">
                <BookButton variant="primary" size="lg" arrow>
                  Book your strategy call
                </BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* timeline */}
          <div>
            <Reveal>
              <span className="eyebrow">What happens next</span>
              <h2 className="text-h2 mt-5">Three things, in order.</h2>
            </Reveal>

            <ol className="mt-10">
              {CONFIRMATION_STEPS.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.08}
                  as="li"
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* vertical rule linking the steps */}
                  {i < CONFIRMATION_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 left-[1.4rem] top-12 w-px border-l border-dashed border-line"
                    />
                  )}
                  <span
                    className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-[1rem] text-ink ring-1 ring-line"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 560,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="text-h3">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-[0.975rem] leading-relaxed text-slate">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <figure className="mt-4 rounded-2xl border border-dashed border-line bg-cream p-6 sm:p-7">
                <p
                  className="text-[1.15rem] leading-snug text-ink"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  Every submission is read by a person. Not a template, not a
                  tool.
                </p>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-dashed border-line pt-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    US
                  </span>
                  <span className="text-[0.8rem] leading-tight text-slate">
                    <span className="block font-semibold text-ink">Umair Shahzad</span>
                    Nothing back in 24 hours?{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-brand-dark underline underline-offset-2"
                    >
                      {SITE.email}
                    </a>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* sidebar */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
              <h2 className="text-h3">Move faster: take the strategy call</h2>
              <p className="mt-2.5 text-[0.925rem] leading-relaxed text-slate">
                The call is in your email too, but the calendar is open now. Thirty
                minutes, no pitch.
              </p>

              <ul className="mt-6 space-y-3">
                {CALL_COVERS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      strokeWidth={2.4}
                    />
                    <span className="text-[0.9rem] leading-relaxed text-ink-soft">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <BookButton variant="primary" size="lg" className="w-full">
                  Book a Discovery Call
                </BookButton>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-mist p-7">
              <p className="text-sm font-semibold text-ink">While you wait</p>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="group inline-flex items-center gap-2 text-[0.925rem] text-slate transition-colors hover:text-ink"
                    >
                      {n.label}
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2">Common questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={CONFIRMATION_FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
