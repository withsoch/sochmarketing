import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/content";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x grid gap-x-12 gap-y-10 lg:grid-cols-[0.85fr_1.4fr]">
        {/* left: intro (asymmetric, sticky) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-h2">
            Everything your social channels need, in one place.
          </h2>
          <p className="lead mt-5">
            From a profile that converts to community that compounds. Take one
            service, or hand us the lot, across every channel you run.
          </p>
          <div className="mt-7">
            <Button href="/services" variant="dark" arrow>
              Explore all services
            </Button>
          </div>
        </div>

        {/* right: rich service cards w/ dashed dividers */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink/25"
              >
                <div className="flex items-center gap-2.5">
                  <Icon name={s.icon} className="h-6 w-6 text-brand" strokeWidth={1.5} />
                  <h3 className="text-[1.05rem] font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>
                    {s.title}
                  </h3>
                </div>

                <div className="rule-dashed my-4" />

                <ul className="flex-1 space-y-2.5">
                  {s.points.slice(0, 2).map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.4} />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="rule-dashed my-4" />

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-dark">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
