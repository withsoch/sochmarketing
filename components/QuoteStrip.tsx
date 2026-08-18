import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

/**
 * Short quote cards from venue owners — a lighter, honest alternative to
 * the case-study carousel (which stays tied to the placeholder B2B case
 * studies at /case-studies and isn't shown here).
 */
export function QuoteStrip() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">Venues that stopped being invisible.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-line pt-4">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: t.accent }}
                  >
                    {t.initials}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
