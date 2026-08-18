import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { PackageCard } from "@/components/PackageCard";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { PACKAGES, PACKAGE_TERMS, PACKAGE_FINE_PRINT, PRICING_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing for Restaurants, Cafes & Lounges",
  description:
    "Five packages for restaurants, cafes and shisha lounges in Tallinn, starting from €290/month excl. VAT. Social media, Google, reviews, delivery listings and ads — get a quote.",
};

const CORE = PACKAGES.filter((p) => p.track === "core");
const SPECIALIST = PACKAGES.filter((p) => p.track === "specialist");

export default function PackagesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-xl">
              <Reveal delay={0}>
                <span className="eyebrow">Packages</span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-display mt-5 text-[clamp(2.3rem,1.4rem+3vw,3.6rem)]">
                  Five packages.{" "}
                  <span className="italic text-brand">One goal: more orders.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Pick the package that matches where your venue is today.
                  Every price below is a starting point — get a quote and
                  we&apos;ll confirm the exact fit for your venue.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8">
                  <BookButton variant="primary" size="lg" arrow>
                    Get a quote
                  </BookButton>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-dashed border-line pt-7">
                  {PACKAGE_TERMS.map((t) => (
                    <div key={t.label}>
                      <dt className="sr-only">{t.label}</dt>
                      <dd>
                        <span
                          className="block text-[1.5rem] leading-none text-ink"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                        >
                          {t.value}
                        </span>
                        <span className="mt-2 block text-[0.78rem] leading-snug text-muted">
                          {t.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* jump index */}
            <Reveal delay={0.15} className="lg:pl-6">
              <div className="mx-auto w-full max-w-[26rem] rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] lg:max-w-none">
                <div className="px-6 pb-4 pt-6 sm:px-7">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    Starting from, excl. VAT
                  </p>
                </div>
                <ul className="border-t border-line">
                  {PACKAGES.map((p) => (
                    <li key={p.slug} className="border-b border-line last:border-b-0">
                      <a
                        href={`#${p.slug}`}
                        className="flex items-center justify-between gap-4 px-6 py-3.5 transition-colors hover:bg-mist sm:px-7"
                      >
                        <span className="text-[0.95rem] font-medium text-ink-soft">
                          {p.name}
                          {p.popular && (
                            <span className="ml-2 rounded-full bg-peach px-2 py-0.5 text-[0.62rem] font-semibold text-brand-dark">
                              Popular
                            </span>
                          )}
                        </span>
                        <span
                          className="shrink-0 text-[0.95rem] font-semibold text-ink"
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          {p.monthly}/mo
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE LADDER ───────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Start here.</h2>
            <p className="lead mt-5">
              Essentials, Starter and Growth build on each other — pick the
              one that matches how much of your venue is online today.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CORE.map((p, i) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-32">
                <Reveal delay={i * 0.08}>
                  <PackageCard pkg={p} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST TRACKS ─────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Two of these aren&apos;t a step up.</h2>
            <p className="lead mt-5">
              Delivery-Led and Full are different routes, not higher rungs on
              the same ladder — built for venues with a specific shape of
              business, not a bigger version of the same one.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            {SPECIALIST.map((p, i) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-32">
                <Reveal delay={i * 0.08}>
                  <PackageCard pkg={p} dark={p.slug === "full"} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINE PRINT ────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-x">
          <Reveal className="rounded-2xl border border-line bg-mist p-7 sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted">
              The fine print
            </p>
            <ul className="mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {PACKAGE_FINE_PRINT.map((f) => (
                <li key={f} className="text-[0.85rem] leading-relaxed text-slate">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-h2">Questions before you get a quote.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={PRICING_FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about your venue and we'll quote it"
        subtitle="Get a quote. We'll ask a few questions about your venue and recommend a package honestly, even if it's the cheapest one."
      />
    </>
  );
}
