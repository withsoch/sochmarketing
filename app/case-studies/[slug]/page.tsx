import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { CTAS, CASE_STUDIES } from "@/lib/content";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.company} | Soovita Case Study`,
    description: `Illustrative results from a Soovita engagement: ${study.scope}. ${study.metrics.map((m) => `${m.value} ${m.label}`).join(", ")}.`,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded bg-peach px-3 py-1 text-xs font-bold text-brand-dark">
              {study.scope}
            </span>

            <h1 className="mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]">
              {study.company}
            </h1>

            <p className="lead mt-6 text-muted">
              {study.industry} · {study.region} · {study.duration}
            </p>

            <p className="mt-4 text-sm font-medium text-brand-dark">
              This is a placeholder case study for layout purposes. Replace with a
              real client result before launch.
            </p>

            {/* stat rows */}
            <div className="mt-10 divide-y divide-line">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline gap-5 py-5">
                  <span
                    className="shrink-0 leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem,1.6rem+1.6vw,2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                    }}
                  >
                    {m.value}
                  </span>
                  <span className="text-sm text-slate">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right column - accent panel */}
          <div>
            <div
              className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded border border-line"
              style={{ background: study.accent }}
            >
              <span
                className="text-8xl font-bold text-white/80"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {study.initials}
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-line" />

      {/* ── Quote ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl">
            <figure className="rounded border-l-4 border-brand bg-cream p-8">
              <span
                className="block text-[3.5rem] leading-none text-brand opacity-25"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="-mt-2 text-[1.1rem] italic leading-relaxed text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {study.quote}
              </p>
              <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                <span className="block text-sm font-semibold text-ink">{study.author}</span>
                <span className="block text-xs text-muted">{study.authorRole}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-h2">Your results should be here next.</h2>
              <p className="lead mt-5 text-muted">
                Get a quote. We&apos;ll be straight with you about what&apos;s
                achievable for your venue and how long it takes.
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
