import { Reveal } from "@/components/ui/Reveal";
import { PlatformIcon } from "@/components/PlatformIcons";
import { CHANNEL_VAR, PLATFORMS } from "@/lib/channels";

/**
 * Names the channels we actually run. The homepage otherwise talks about
 * "every channel that matters" without ever saying which, which reads as a
 * LinkedIn-only shop. Heading-light on purpose: the Positioning h2 follows
 * immediately below and should stay the first real headline after the hero.
 */
export function PlatformStrip() {
  return (
    <section className="border-b border-line bg-white py-14 sm:py-16">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Channels we run</span>
          <p className="lead mt-4">
            One plan, run natively across every app your customers use to
            find and order from you.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-9 sm:grid-cols-3 lg:grid-cols-6">
          {PLATFORMS.map((p, i) =>
            p.mark === "glyph" ? (
              <Reveal key={p.id} delay={i * 0.06} className="flex items-center gap-3">
                <PlatformIcon
                  id={p.id as "instagram" | "facebook" | "tiktok" | "google"}
                  className={`h-7 w-7 shrink-0 ${p.primary ? "" : "opacity-45"}`}
                  style={{ color: CHANNEL_VAR[p.id] }}
                />
                <span
                  className={`text-[0.975rem] font-semibold ${
                    p.primary ? "text-ink" : "text-muted"
                  }`}
                >
                  {p.name}
                </span>
              </Reveal>
            ) : (
              <Reveal key={p.id} delay={i * 0.06} className="flex items-center">
                <span
                  className={`inline-flex h-7 shrink-0 items-center rounded-md px-2.5 text-[0.85rem] font-bold text-white ${
                    p.primary ? "" : "opacity-45"
                  }`}
                  style={{ background: CHANNEL_VAR[p.id] }}
                >
                  {p.name}
                </span>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
