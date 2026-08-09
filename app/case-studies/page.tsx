import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CTAS, CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies: Client Results | Soch",
  description:
    "Illustrative results from Soch client engagements across multi-channel social strategy, personal branding, and community growth.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">

      {/* ── Page header ── */}
      <section className="border-b border-line bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h1 className="text-display">
              Results that speak for themselves.
            </h1>
            <p className="lead mt-5 max-w-2xl text-muted">
              A selection of illustrative client engagements across multi-channel social
              strategy, community growth, and personal brand builds. These are
              placeholder case studies for layout purposes: replace with real client
              results before launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[68.75rem] px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.1}>
                <article className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_22px_48px_-22px_rgba(20,30,25,0.28)]">
                  <div className="flex flex-row">

                    {/* initials disc */}
                    <div
                      className="flex shrink-0 items-center justify-center self-stretch"
                      style={{ width: "35%", minWidth: 0, background: study.accent }}
                    >
                      <span
                        className="text-4xl font-bold text-white/80"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {study.initials}
                      </span>
                    </div>

                    {/* content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between overflow-hidden p-5">
                      <div>
                        <span className="inline-block rounded-md bg-brand px-2.5 py-1 text-[11px] font-semibold leading-snug text-white">
                          {study.scope}
                        </span>

                        <h2
                          className="mt-4 text-[1rem] font-semibold leading-snug text-ink"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {study.company}
                        </h2>
                        <p className="mt-1 text-[0.8rem] text-muted">{study.industry}</p>
                      </div>

                      {/* stat boxes */}
                      <div className="mt-6 grid w-full grid-cols-2 gap-2">
                        {study.metrics.slice(0, 2).map((s) => (
                          <div
                            key={s.label}
                            className="min-w-0 overflow-hidden rounded-lg border border-line p-3"
                          >
                            <p
                              className="leading-none text-ink"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                letterSpacing: "-0.022em",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {s.value}
                            </p>
                            <p className="mt-1 text-[11px] leading-[1.4] text-muted">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="text-[14px] font-semibold text-brand transition-colors hover:text-brand-dark"
                        >
                          Read success story →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h2">
                Your results should be on this page.
              </h2>
              <p className="lead mt-5 text-muted">
                Book a discovery call. We will be straight with you about what
                is achievable and how long it will take.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookButton variant="primary" size="lg">
                  {CTAS.primary.label}
                </BookButton>
                <AuditButton variant="secondary" size="lg" className="cursor-pointer hover:bg-[#1a1a1a] hover:text-white hover:!ring-[#1a1a1a]">
                  {CTAS.secondary.label}
                </AuditButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
