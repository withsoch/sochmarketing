// Bespoke, presentational mini-mockups - one per service slug.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, skeleton bars, avatar circles and brand/channel/leaf accents.
import { Icon } from "@/components/Icons";

/* ---------- shared primitives ---------- */

function Avatar({ c, t, className = "" }: { c: string; t: string; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white ${className}`}
      style={{ background: c }}
    >
      {t}
    </span>
  );
}

const card =
  "relative z-10 rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line";
const chip =
  "absolute z-20 rounded-xl bg-white p-2.5 shadow-[var(--shadow-lift)] ring-1 ring-line";

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-full max-w-sm px-2 py-4 lg:px-3">{children}</div>;
}

function ChannelDot({ color }: { color: string }) {
  return <span className="h-2 w-2 rounded-full" style={{ background: color }} />;
}

/* ---------- per-service visuals ---------- */

function ProfileVisual() {
  return (
    <Stage>
      <div className="relative">
        {/* Main card */}
        <div
          className="animate-float-a overflow-hidden"
          style={{ background: "#fff", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        >
          <div style={{ background: "var(--color-ink)", height: 80, position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="James Whitfield"
              style={{ width: 72, height: 72, borderRadius: "50%", border: "3px solid white", position: "absolute", bottom: -36, left: 20, objectFit: "cover" }}
            />
            <div style={{ position: "absolute", top: 12, right: 12, background: "white", borderRadius: 20, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#1a7a4a" }}>
              ✓ Optimised
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "48px 20px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>James Whitfield</span>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--color-brand)", color: "white", fontSize: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
            </div>

            <div style={{ marginTop: 8, marginBottom: 10, lineHeight: 1.4 }}>
              <p style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a" }}>Helping B2B founders close deals through social, without ad spend.</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 4 }}>CEO · Whitfield Advisory · London, UK</p>
            </div>

            {/* channel-dot row */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              {["var(--color-channel-linkedin)", "var(--color-channel-instagram)", "var(--color-channel-x)", "var(--color-channel-youtube)"].map((c) => (
                <ChannelDot key={c} color={c} />
              ))}
              <span style={{ fontSize: 10, color: "#6b6560" }}>4 channels, one story</span>
            </div>

            {/* Featured & Offer boxes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: "#f5f0e8", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#6b6560" }}>FEATURED</div>
                <div style={{ background: "#e8633e", height: 4, width: "50%", borderRadius: 2, marginTop: 8 }} />
                <p style={{ fontSize: 10, color: "#6b6560", marginTop: 4 }}>Case Study: 3 clients, 6 figures in 90 days</p>
              </div>
              <div style={{ background: "#f5f0e8", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "#6b6560" }}>OFFER</div>
                <div style={{ background: "#e8633e", height: 4, width: "50%", borderRadius: 2, marginTop: 8 }} />
                <p style={{ fontSize: 10, color: "#6b6560", marginTop: 4 }}>Free Social Growth Audit →</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating search visibility card */}
        <div
          className="animate-float-c"
          style={{ position: "absolute", bottom: -16, left: -16, background: "white", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", padding: "12px 16px" }}
        >
          <span style={{ fontSize: 11, color: "#6b6560", display: "block" }}>Profile consistency</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#1a7a4a" }}>↑ Top 1%</span>
        </div>
      </div>
    </Stage>
  );
}

function ContentVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} alt="James Whitfield" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">James Whitfield</p>
            <p className="text-xs text-muted">Founder & CEO · Whitfield Advisory</p>
          </div>
        </div>
        <div style={{ marginTop: 12, marginBottom: 14, lineHeight: 1.5 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>Most founders post once and disappear.</p>
          <p style={{ fontSize: 12, color: "#6b6560", marginTop: 6 }}>Consistency beats brilliance, on every channel.</p>
          <p style={{ fontSize: 12, color: "#6b6560", marginTop: 4 }}>Your audience remembers who shows up.</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <div className="flex -space-x-1">
            {["var(--color-channel-linkedin)", "var(--color-channel-instagram)", "var(--color-channel-x)"].map((c) => (
              <span key={c} className="h-5 w-5 rounded-full ring-2 ring-white" style={{ background: c }} />
            ))}
          </div>
          <p className="text-[0.65rem] font-medium text-muted">1,204 · 86 comments</p>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
              "https://randomuser.me/api/portraits/women/22.jpg",
            ].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid white", marginLeft: i === 0 ? 0 : -8, objectFit: "cover" }} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 flex w-auto items-center gap-2 animate-float-b`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="calendar" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.6rem] text-muted">Scheduled</p>
          <p className="text-xs font-semibold text-ink">Mon · 9:00</p>
        </div>
      </div>
    </Stage>
  );
}

function CommunityVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Inbox, handled</p>
          <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-leaf">
            <Icon name="chat" className="h-3.5 w-3.5" /> 18 replies today
          </span>
        </div>
        <div className="mt-3.5 space-y-2.5">
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="var(--color-channel-linkedin)" t="AR" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Alex Reynolds</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>MD · Reynolds Capital</p>
            </div>
            <span className="rounded-md px-2 py-0.5 text-[0.6rem] font-semibold bg-leaf/12 text-leaf">Booked call</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="var(--color-channel-instagram)" t="JO" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Jamie Okafor</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>Founder · Okafor Ventures</p>
            </div>
            <span className="rounded-md px-2 py-0.5 text-[0.6rem] font-semibold bg-mist text-ink-soft ring-1 ring-line">Replied</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/60 p-2">
            <Avatar c="#7a817d" t="MK" className="h-7 w-7" />
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Marcus Klein</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 3 }}>CEO · Klein &amp; Partners</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${chip} -bottom-1 right-2 w-32 animate-float-b`}>
        <p className="text-[0.6rem] font-semibold text-muted">Calls booked</p>
        <p className="mt-0.5 text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          9 <span className="text-[0.65rem] font-medium text-muted">/ mo</span>
        </p>
      </div>
    </Stage>
  );
}

function BrandingVisual() {
  const pillars = ["Authority", "Point of view", "Narrative"];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <p className="text-xs font-semibold text-ink">Positioning</p>
        <div className="mt-3 space-y-2">
          {pillars.map((p, i) => (
            <div
              key={p}
              className="flex items-center gap-2.5 rounded-full border border-line bg-mist/60 px-3 py-2"
            >
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" style={{ opacity: 1 - i * 0.22 }} />
              <span className="text-[0.7rem] font-semibold text-ink-soft">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-line bg-cream p-3.5">
          <span className="text-2xl leading-none text-brand" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;
          </span>
          <div className="mt-1">
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.5 }}>People don&apos;t follow profiles.</p>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.5, marginTop: 4 }}>They follow a point of view.</p>
            <p style={{ fontSize: 11, color: "#6b6560", marginTop: 10, fontStyle: "italic" }}>James Whitfield, after 90 days</p>
          </div>
        </div>
      </div>
      <div className="absolute z-20 -right-1 top-4 flex w-auto items-center rounded-full bg-brand px-3 py-1.5 shadow-[var(--shadow-lift)] animate-float-c">
        <p className="text-xs font-semibold text-white">✦ Signature voice</p>
      </div>
    </Stage>
  );
}

function CoachingVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Live workshop</p>
          <span className="inline-flex items-center gap-1 rounded-md bg-peach px-2 py-0.5 text-[0.6rem] font-semibold text-brand">
            <Icon name="clock" className="h-3 w-3" /> Thu · 60m
          </span>
        </div>
        <div className="mt-3.5 rounded-xl border border-line bg-mist/60 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white">
              <Icon name="chat" className="h-4 w-4" />
            </span>
            <div className="flex-1" style={{ lineHeight: 1.4 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Multi-Channel Content for Founders</p>
              <p style={{ fontSize: 11, color: "#6b6560", marginTop: 4 }}>How to show up with authority and turn views into calls</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f0ece4" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8633e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span style={{ fontSize: 11, color: "#6b6560", marginLeft: 4 }}>Next session: Thu 19 Jun</span>
            </div>
            <span style={{ fontSize: 11, color: "#e8633e", fontWeight: 600 }}>12 spots left</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
            ].map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="h-7 w-7 rounded-full ring-2 ring-white" style={{ objectFit: "cover" }} />
            ))}
            <Avatar c="#33403b" t="+6" className="h-7 w-7 ring-2 ring-white" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-[0.65rem] font-semibold text-white">
            Join <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className={`${chip} -left-1 bottom-2 flex w-auto items-center gap-1.5 animate-float-b`}>
        <span className="text-sm font-semibold text-brand">⊘</span>
        <p className="text-xs font-semibold text-ink">1:1 coaching</p>
      </div>
    </Stage>
  );
}

function AuditVisual() {
  const checks = ["Profile & bio audited across channels", "Content gaps identified", "90-day channel roadmap built"];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <p className="text-sm font-semibold text-ink">Social Growth Audit</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[0.7rem] font-bold text-brand">◆</span>
          <span className="text-[0.75rem] font-semibold text-ink">Channel Score:</span>
          <span className="text-[0.75rem] font-semibold text-brand">94/100</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-brand" style={{ width: "94%" }} />
        </div>
        <div className="mt-4 space-y-2.5">
          {checks.map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-leaf/12 text-leaf">
                <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-[0.7rem] text-ink-soft">{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${chip} -right-1 -top-2 flex w-auto items-center gap-2 animate-float-c`}>
        <span className="h-2 w-2 rounded-full bg-leaf" />
        <p className="text-xs font-semibold text-ink">Ready to send</p>
      </div>
    </Stage>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "profile-bio-optimisation": ProfileVisual,
  "content-writing-production": ContentVisual,
  "community-engagement": CommunityVisual,
  "personal-brand-strategy": BrandingVisual,
  "channel-strategy-coaching": CoachingVisual,
  "social-growth-audit": AuditVisual,
};

export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug];
  if (!Visual) {
    return (
      <Stage>
        <div className={`${card} flex items-center justify-center p-10`}>
          <Icon name="spark" className="h-10 w-10 text-brand" />
        </div>
      </Stage>
    );
  }
  return <Visual />;
}
