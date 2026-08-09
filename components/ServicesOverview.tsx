import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/content";

/**
 * Replaces the old hand-coded SVG hex-flower (which baked 6 LinkedIn service
 * names into fixed-coordinate <text> elements) with a content-driven layout
 * that keeps the same visual grammar: a center orange statement card,
 * dashed outer ring, editorial serif center line - but renders the 6
 * services as a responsive chip grid generated from SERVICES.
 */
export function ServicesOverview() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="relative rounded-[28px] border border-dashed border-line p-6 sm:p-10">
        <div className="mx-auto flex max-w-[19rem] flex-col items-center rounded-full bg-brand px-8 py-10 text-center shadow-[var(--shadow-lift)]">
          <svg viewBox="0 0 48 48" className="h-8 w-8 text-cream" aria-hidden="true">
            <path
              d="M14 25l7-7 5 5 10-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p
            className="mt-3 text-[1.35rem] font-semibold leading-tight text-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The most credible voice in your space
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white px-3 py-4 text-center transition-colors hover:border-ink/25"
            >
              <Icon name={s.icon} className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <span className="text-[0.8rem] font-semibold leading-snug text-ink-soft">
                {s.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
