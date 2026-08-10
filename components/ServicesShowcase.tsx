"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AuditButton } from "@/components/AuditButton";
import { BookButton } from "@/components/BookButton";
import { Icon } from "@/components/Icons";
import { ServiceVisual } from "@/components/ServiceVisual";
import { SERVICES } from "@/lib/content";

// Short rail labels (the full titles are too long for the index).
const LABELS: Record<string, string> = {
  "profile-bio-optimisation": "Profile",
  "content-writing-production": "Content",
  "community-engagement": "Community",
  "personal-brand-strategy": "Branding",
  "channel-strategy-coaching": "Coaching",
  "social-growth-audit": "Audit",
};

const num = (i: number) => String(i + 1).padStart(2, "0");

export function ServicesShowcase() {
  const [active, setActive] = useState(SERVICES[0].slug);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band near the upper-middle of the viewport: whichever service
      // crosses it becomes "active".
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      {/* mobile quick-jump chip strip */}
      <div className="sticky top-[4.5rem] z-20 border-b border-line bg-white/85 backdrop-blur lg:hidden">
        <div className="container-x overflow-x-auto py-3">
          <div className="flex w-max gap-2">
            {SERVICES.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === s.slug
                    ? "border-brand bg-peach/50 text-brand-dark"
                    : "border-line text-ink-soft"
                }`}
              >
                <span
                  className="mr-1.5 text-[0.65rem] text-muted"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {num(i)}
                </span>
                {LABELS[s.slug]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x grid gap-x-12 pt-14 lg:grid-cols-[13rem_1fr] lg:pt-20 xl:gap-x-20">
        {/* sticky index rail (lg+) */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 self-start">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Services
            </p>
            <nav className="mt-4 border-l border-line">
              {SERVICES.map((s, i) => {
                const isActive = active === s.slug;
                return (
                  <a
                    key={s.slug}
                    href={`#${s.slug}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group -ml-px flex items-baseline gap-3 border-l py-2 pl-4 transition-colors ${
                      isActive ? "border-brand" : "border-transparent hover:border-line"
                    }`}
                  >
                    <span
                      className={`text-[0.7rem] transition-colors ${
                        isActive ? "text-brand" : "text-muted"
                      }`}
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {num(i)}
                    </span>
                    <span
                      className={`text-[0.925rem] transition-colors ${
                        isActive
                          ? "font-medium text-ink"
                          : "text-muted group-hover:text-ink-soft"
                      }`}
                    >
                      {LABELS[s.slug]}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-dashed border-line pt-6">
              <p className="text-[0.85rem] leading-relaxed text-slate">
                Take one service, or hand us the whole system.
              </p>
              <div className="mt-4">
                <BookButton variant="dark" size="md" arrow>
                  Book a call
                </BookButton>
              </div>
            </div>
          </div>
        </aside>

        {/* editorial service rows */}
        <div>
          {SERVICES.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal
                key={s.slug}
                className="border-t border-dashed border-line py-14 first:border-t-0 first:pt-0 lg:py-20"
              >
                <article
                  id={s.slug}
                  ref={(el) => {
                    refs.current[s.slug] = el;
                  }}
                  className="scroll-mt-32"
                >
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* copy */}
                    <div className={flipped ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[0.8rem] font-semibold text-brand"
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          {num(i)}
                        </span>
                        <span className="h-px w-8 bg-line" />
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
                          {LABELS[s.slug]}
                        </span>
                      </div>

                      <h2 className="mt-4 text-[clamp(1.55rem,1.2rem+1.1vw,2.15rem)] leading-[1.12]">
                        {s.title}
                      </h2>

                      <p
                        className="mt-3 text-[1.05rem] leading-snug text-ink-soft"
                        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                      >
                        {s.hook}
                      </p>

                      <p className="mt-4 text-[0.975rem] leading-relaxed text-slate">
                        {s.description}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 text-[0.925rem] text-ink-soft"
                          >
                            <Icon
                              name="check"
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                              strokeWidth={2.4}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* visual */}
                    <div className={flipped ? "lg:order-1" : ""}>
                      <ServiceVisual slug={s.slug} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* rail CTA repeated inline for mobile, where the rail is hidden */}
          <Reveal className="border-t border-dashed border-line pt-10 lg:hidden">
            <p className="text-[0.975rem] leading-relaxed text-slate">
              Take one service, or hand us the whole system.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <BookButton variant="primary" size="lg" arrow>
                Book a Discovery Call
              </BookButton>
              <AuditButton variant="secondary" size="lg" className="cursor-pointer">
                Get a Free Social Audit
              </AuditButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
