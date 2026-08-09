import type { Metadata } from "next";
import { AuditButton } from "@/components/AuditButton";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Get a Free Social Audit",
  description:
    "Request a free social media audit. We review your profiles, content and community across every channel and send back a prioritised plan of the moves that will get you the most return. No ads, no SEO.",
};

const AUDIT_CARDS = [
  {
    icon: "profile" as const,
    title: "Profile Teardown",
    body: "Bio, headline, pinned content: checked across every channel against what turns visitors into leads.",
  },
  {
    icon: "pen" as const,
    title: "Content Review",
    body: "Hooks, formats, consistency, and the gaps holding your reach back, channel by channel.",
  },
  {
    icon: "target" as const,
    title: "Positioning Gaps",
    body: "Where you blur into competitors and how to become the obvious choice.",
  },
  {
    icon: "trend" as const,
    title: "90-Day Roadmap",
    body: "A prioritised plan you can start on right away, with or without us.",
  },
];

const AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

export default function AuditPage() {
  return (
    <>
      {/* ── HERO - two column ─────────────────────────────────────── */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left - copy */}
            <div className="max-w-xl">
              <Reveal delay={0}>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                  Free Social Audit
                </p>
              </Reveal>

              <Reveal delay={0}>
                <h1 className="text-display mt-4 text-[clamp(2.2rem,1.3rem+3.2vw,3.6rem)]">
                  See exactly what&apos;s holding your channels back.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5 font-light">
                  Request a free audit, no strings. We review your profiles,
                  content and community across every channel you&apos;re on, by hand, then
                  send back a clear plan of what to fix first. No ad spend or SEO
                  recommendations, just organic growth.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8">
                  <AuditButton variant="primary" size="lg">
                    Get Your Free Audit
                  </AuditButton>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="mt-4 text-sm text-muted">
                  No commitment required. The audit is yours to keep.
                </p>
              </Reveal>
            </div>

            {/* Right - deliverable cards */}
            <div className="flex flex-col gap-3">
              {AUDIT_CARDS.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.1}>
                  <div
                    className="flex items-start gap-3 rounded-lg border border-line bg-white px-6 py-5"
                    style={{
                      borderLeftWidth: "3px",
                      borderLeftColor: "var(--color-brand)",
                    }}
                  >
                    <Icon
                      name={card.icon}
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                      strokeWidth={1.6}
                    />
                    <div>
                      <p className="text-[15px] font-semibold text-ink">
                        {card.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <hr className="border-line" />

      {/* ── SOCIAL PROOF STRIP ────────────────────────────────────── */}
      <section className="bg-mist py-12">
        <div className="container-x flex flex-col items-center text-center">
          <Reveal delay={0}>
            <p
              className="font-display italic text-ink"
              style={{ fontSize: "1.25rem", lineHeight: 1.5 }}
            >
              Trusted by 40+ founders and senior executives across Europe,
              North America, and the UK.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-center justify-center">
              {AVATARS.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid white",
                    marginLeft: i === 0 ? 0 : -10,
                    display: "block",
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
