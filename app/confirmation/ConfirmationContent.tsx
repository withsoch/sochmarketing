"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/content";

const STEPS = [
  {
    num: 1,
    title: "I review your profiles personally within 24 hours.",
    body: "Bio, headline, pinned content, last ten posts across every channel you shared. Every section.",
  },
  {
    num: 2,
    title: "You get the full breakdown over email.",
    body: "What is working, what is costing you, what to fix first. Specific to your channels.",
  },
  {
    num: 3,
    title: "Book a Strategy call with me.",
    body: "Strategy call link is in the email. Take it or leave it. Completely your call.",
  },
];

const FAQS = [
  {
    q: "What does the audit actually cover?",
    a: "We review your bio, headline, pinned content, and last ten posts across every channel you're active on. You get a written breakdown of what is working, what is costing you visibility, and what to fix first.",
  },
  {
    q: "How does working together work?",
    a: "We start with a strategy call to go through the audit findings. From there, most clients move into a full engagement covering profile, content, and community, across the channels that matter most for them. You approve everything before it goes live.",
  },
  {
    q: "What should I have ready?",
    a: "Nothing. Just check your inbox within 24 hours. If you want to move fast, book a strategy call now so we can go through the findings together.",
  },
];

export function ConfirmationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── SECTION 1: HERO BAR ──────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] px-6 py-7 sm:px-14">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1.5 8L7 13.5L18.5 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand">
                Social Audit · Submitted
              </p>
              <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-display)" }}>
                Your profiles are with us.
              </h1>
              <p className="mt-1 text-sm text-white/50">
                One quick thing below before we send the audit.
              </p>
            </div>
          </div>

          <div className="shrink-0 whitespace-nowrap rounded-full bg-[#1e3a28] px-4 py-2 text-[0.8rem] text-[#4ade80]">
            ● Your audit is confirmed
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT HAPPENS NEXT ─────────────────────────────── */}
      <Reveal>
        <div className="mx-6 my-8 overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:mx-14 sm:max-w-2xl">
          <div className="p-8 sm:p-10">
            <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand">
              What happens next
            </p>
            <h2 className="text-[1.4rem] font-bold leading-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
              Three things, in order.
            </h2>

            <div className="mt-6">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`flex items-start gap-4 ${i < STEPS.length - 1 ? "border-b border-line/70 pb-6" : ""} ${i > 0 ? "mt-6" : ""}`}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-peach text-sm font-bold text-brand-dark">
                    {step.num}
                  </div>
                  <div>
                    <p className="text-[0.95rem] font-semibold leading-snug text-ink">{step.title}</p>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-slate">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border-l-[3px] border-brand bg-cream p-4">
              <p className="text-[0.8rem] font-semibold text-ink">Umair reviews every submission personally.</p>
              <p className="mt-1 text-[0.75rem] leading-relaxed text-slate">
                Not a template. Not a tool. If you don&apos;t hear back within 24 hours, email{" "}
                <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-dark">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── SECTION 3: FAQ ACCORDION ─────────────────────────────────── */}
      <Reveal>
        <div className="mx-6 mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] sm:mx-14 sm:max-w-2xl">
          {FAQS.map((item, i) => (
            <div key={item.q} className={i < FAQS.length - 1 ? "border-b border-line" : ""}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-mist/50"
              >
                <span className="text-[0.95rem] font-semibold text-ink">{item.q}</span>
                <span className="ml-4 shrink-0 text-xl leading-none text-brand-dark">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-[0.8rem] leading-relaxed text-slate">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
