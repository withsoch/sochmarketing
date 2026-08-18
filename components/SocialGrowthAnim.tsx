"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CHANNEL_VAR, type Channel } from "@/lib/channels";

function ChannelDot({ channel }: { channel: Channel }) {
  return (
    <span
      className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
      style={{ background: CHANNEL_VAR[channel] }}
      aria-hidden="true"
    />
  );
}

const CALENDAR: { channel: Channel; label: string; day: string }[] = [
  { channel: "instagram", label: "Reel · new menu item", day: "Mon" },
  { channel: "google", label: "Google post · weekend hours", day: "Tue" },
  { channel: "facebook", label: "Event · live music night", day: "Wed" },
  { channel: "bolt", label: "Listing update · seasonal dish", day: "Thu" },
  { channel: "tiktok", label: "Plating close-up", day: "Fri" },
];

const METRICS: { label: string; target: number }[] = [
  { label: "Reach", target: 18200 },
  { label: "Profile visits", target: 1340 },
  { label: "Directions asked", target: 146 },
  { label: "Reviews replied", target: 32 },
];

const NOTIFS: { channel: Channel; title: string; sub: string; top?: string; bottom?: string; left?: string; right?: string }[] = [
  { channel: "google", title: "New 5-star review", sub: "“Best shisha lounge around”", top: "8%", left: "-14%" },
  { channel: "instagram", title: "12 new comments on your Reel", sub: "Growing conversation", top: "38%", right: "-16%" },
  { channel: "bolt", title: "Listing photos updated", sub: "Best-sellers repositioned", top: "62%", left: "-16%" },
  { channel: "facebook", title: "3 people asked for directions", sub: "From today's event post", bottom: "4%", right: "-14%" },
];

function formatNumber(v: number) {
  if (v >= 1000) return (v / 1000).toFixed(v >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k";
  return v.toLocaleString();
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function CountUpMetric({ target, label, delay }: { target: number; label: string; delay: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now() + delay * 1000;
        const dur = 1600;
        function tick(now: number) {
          const p = Math.min(Math.max((now - start) / dur, 0), 1);
          setValue(Math.round(easeOutQuart(p) * target));
          if (now < start + dur) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay, reduce]);

  const display = reduce ? target : value;

  return (
    <div ref={ref}>
      <p className="text-[1.35rem] font-semibold leading-none text-ink" style={{ fontFamily: "var(--font-display)" }}>
        {formatNumber(display)}
      </p>
      <p className="mt-1 text-[0.7rem] text-muted">{label}</p>
    </div>
  );
}

/**
 * Replaces the old fake-LinkedIn-profile mockup with a channel-agnostic
 * "content calendar / control room" card - communicates multi-channel
 * breadth without impersonating any single platform's real UI chrome.
 */
export function SocialGrowthAnim() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]">
        <div className="flex items-center justify-between">
          <h3 className="text-[0.95rem] font-semibold text-ink">This week&apos;s content</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-slate">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Live across 5 channels
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {CALENDAR.map((c, i) => (
            <motion.div
              key={c.label}
              className="flex items-center gap-3 rounded-lg border border-line/70 bg-cream px-3 py-2.5"
              initial={reduce ? undefined : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.09 }}
            >
              <ChannelDot channel={c.channel} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.8rem] font-medium text-ink-soft">{c.label}</p>
              </div>
              <span className="shrink-0 text-[0.7rem] text-muted">{c.day}</span>
            </motion.div>
          ))}
        </div>

        <div className="rule-dashed my-4" />

        <div className="grid grid-cols-4 gap-2">
          {METRICS.map((m, i) => (
            <CountUpMetric key={m.label} target={m.target} label={m.label} delay={0.6 + i * 0.1} />
          ))}
        </div>
      </div>

      {/* floating notification chips */}
      {NOTIFS.map((n, i) => (
        <motion.div
          key={n.title}
          className="pointer-events-none absolute z-10 hidden w-56 items-center gap-2.5 rounded-lg border border-line bg-white p-2.5 shadow-card sm:flex"
          style={{ top: n.top, bottom: n.bottom, left: n.left, right: n.right }}
          initial={reduce ? undefined : { opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.1 + i * 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <ChannelDot channel={n.channel} />
          <div className="min-w-0">
            <p className="truncate text-[0.72rem] font-semibold text-ink">{n.title}</p>
            <p className="truncate text-[0.68rem] text-muted">{n.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
