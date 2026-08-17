// ------------------------------------------------------------------
//  Soch - single source of content & config.
//  Copy, services, process, proof and the scheduler/booking links all
//  live here so the client can update everything from one file.
// ------------------------------------------------------------------

import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "Organic social growth, not paid ads",
  headline: "Your social presence should build your business, not just your following.",
  headlineEmphasis: "We make it one.",
};

export const SITE = {
  name: "Soch",
  tagline:
    "Organic social media management for B2B founders and CEOs on LinkedIn, Instagram, X, TikTok and beyond.",
  // Placeholder contact details — replace before launch.
  email: "hello@soch.co",
  linkedin: "https://www.linkedin.com/company/soch/",
};

/**
 * Where every "Book a Discovery Call" CTA sends people. Centralised here so
 * it's defined once instead of duplicated across every booking button.
 * Replace with the real Cal.com / Calendly link, or set
 * NEXT_PUBLIC_BOOKING_URL to override without a code change.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/soch/30min";

/**
 * Where the CTAs send people to schedule via an embedded calendar.
 * Replace with your real Calendly / TidyCal link and the embed lights up
 * automatically. Until then a styled fallback card is shown.
 */
export const SCHEDULER_URL = process.env.NEXT_PUBLIC_SCHEDULER_URL ?? "";

export const CTAS = {
  primary: { label: "Book a Discovery Call", href: "/book" },
  secondary: { label: "Get a Free Social Audit", href: "/audit" },
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  hook: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "profile-bio-optimisation",
    icon: "profile",
    title: "Profile & Bio Optimisation",
    hook: "Win the visitor in the first five seconds, on every channel.",
    description:
      "A founder checks your LinkedIn, then your Instagram, then your X bio, before they ever reply. If those don't agree on who you are, you lose them. We rebuild your profile, bio, and pinned content across every channel you use so visitors instantly understand what you stand for and who you serve.",
    points: [
      "Consistent positioning across LinkedIn, Instagram, X & TikTok",
      "Bio, headline & link-in-bio rebuilt for conversion",
      "Featured/pinned content that routes to your offer",
    ],
  },
  {
    slug: "content-writing-production",
    icon: "pen",
    title: "Content Writing & Production",
    hook: "Show up everywhere, without writing or filming a thing yourself.",
    description:
      "You have opinions and expertise worth sharing. You don't have time to turn that into consistent posts, carousels, and short-form video for LinkedIn, Instagram, X and TikTok at once. We run a monthly interview, write and produce in your voice, build the cross-channel calendar, and publish. You spend under two hours a month.",
    points: [
      "Founder-voice writing for text, carousel & short-form video",
      "One interview, content repurposed across every channel",
      "Editorial calendar built and scheduled for you",
    ],
  },
  {
    slug: "community-engagement",
    icon: "chat",
    title: "Community & Engagement Management",
    hook: "Every comment and DM handled like it's your reputation on the line, because it is.",
    description:
      "Growth stalls when nobody replies. We manage comments, DMs, and community engagement across your channels daily, in your voice, so conversations turn into relationships instead of going stale. You see everything that matters; we handle the rest.",
    points: [
      "Daily comment & DM management across channels",
      "Warm conversations flagged straight to you",
      "A consistent, human voice, never a bot",
    ],
  },
  {
    slug: "personal-brand-strategy",
    icon: "spark",
    title: "Personal Brand Strategy",
    hook: "Be the name your market already trusts, wherever they scroll.",
    description:
      "Before we write anything, we establish what you stand for and who needs to hear it. Your narrative, content pillars, and channel mix become the foundation every post builds on. This is the strategy work most 'social media management' skips, and the reason results compound instead of plateauing.",
    points: [
      "Positioning & messaging pillars, channel by channel",
      "A point of view you own, not a trend you chase",
      "A narrative that compounds over 12 months, not 12 days",
    ],
  },
  {
    slug: "channel-strategy-coaching",
    icon: "compass",
    title: "Channel Strategy & Coaching",
    hook: "Know exactly which platforms deserve your time, and which don't.",
    description:
      "Not every channel is worth your attention. We help you pick the 2-3 platforms where your buyers actually are, then run live coaching and workshops so you and your team can show up on camera and in comments with confidence.",
    points: [
      "Channel-fit assessment: where your buyers actually are",
      "1:1 founder & executive coaching",
      "Team workshops your people keep using",
    ],
  },
  {
    slug: "social-growth-audit",
    icon: "audit",
    title: "Free Social Growth Audit",
    hook: "Know exactly what's holding your channels back.",
    description:
      "A straight read on your profiles, content, and engagement across every channel you're active on. We show you what's working, what isn't, and the moves that matter most over the next 90 days. No ad spend recommendations, no SEO tactics: this is organic, channel-native growth advice.",
    points: [
      "Cross-channel profile & content teardown",
      "Competitor & positioning gaps",
      "Prioritised 90-day organic roadmap",
    ],
  },
];

export type Step = {
  no: string;
  icon: IconName;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    no: "01",
    icon: "audit",
    title: "Audit & Channel Strategy",
    description:
      "We read your profiles, audience and goals across every channel, then agree the position and the 2-3 platforms worth focusing on.",
  },
  {
    no: "02",
    icon: "profile",
    title: "Optimise Every Profile",
    description:
      "We rewrite your bio, headline and pinned content on each channel so visitors see the same credible story wherever they land.",
  },
  {
    no: "03",
    icon: "pen",
    title: "Content & Community",
    description:
      "We write, produce, publish and manage engagement in your voice, consistently, across every channel we agree on.",
  },
  {
    no: "04",
    icon: "trend",
    title: "Inbound & Pipeline",
    description:
      "The work compounds. Inbound messages and booked calls start arriving from more than one channel, and we double down on what's working.",
  },
];

export const STATS = [
  { value: "6", label: "Platforms managed under one strategy" },
  { value: "10-20", label: "Qualified conversations / month" },
  { value: "40+", label: "Founders & execs we work with" },
  { value: "0", label: "Dollars spent on paid ads, ever" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  region: string;
  duration: string;
  scope: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
  authorRole: string;
  accent: string;
  initials: string;
  image?: string;
};

// NOTE: Placeholder case studies — illustrative only, not real clients.
// Replace with real client results before launch.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "placeholder-fintech-founder",
    company: "Placeholder Co. — Sample Case Study",
    industry: "B2B FinTech (illustrative example)",
    region: "Remote",
    duration: "90 days",
    scope: "Multi-channel growth: LinkedIn, Instagram, X",
    metrics: [
      { value: "3.2×", label: "Combined follower growth (illustrative)" },
      { value: "18", label: "Qualified conversations (illustrative)" },
      { value: "3", label: "Channels running under one strategy" },
      { value: "0", label: "Dollars spent on ads" },
    ],
    quote:
      "This is a placeholder case study for layout purposes — replace with a real client result before launch.",
    author: "Placeholder Name",
    authorRole: "Founder & CEO (placeholder)",
    accent: "#103129",
    initials: "PC",
  },
  {
    slug: "placeholder-advisory-partner",
    company: "Placeholder Advisory — Sample Case Study",
    industry: "Management Consulting (illustrative example)",
    region: "United Kingdom",
    duration: "5 months",
    scope: "Personal brand: LinkedIn, YouTube Shorts",
    metrics: [
      { value: "4×", label: "Reach growth across channels (illustrative)" },
      { value: "27%", label: "Engagement rate lift (illustrative)" },
      { value: "2", label: "Channels added mid-engagement" },
      { value: "0", label: "Dollars spent on ads" },
    ],
    quote:
      "This is a placeholder case study for layout purposes — replace with a real client result before launch.",
    author: "Placeholder Name",
    authorRole: "Managing Partner (placeholder)",
    accent: "#1f7a8c",
    initials: "PA",
  },
  {
    slug: "placeholder-saas-cofounder",
    company: "Placeholder SaaS — Sample Case Study",
    industry: "B2B SaaS (illustrative example)",
    region: "United States",
    duration: "6 weeks",
    scope: "Content & community: Instagram, TikTok, X",
    metrics: [
      { value: "5.6×", label: "Short-form video reach (illustrative)" },
      { value: "31%", label: "DM reply rate (illustrative)" },
      { value: "9", label: "Qualified conversations (illustrative)" },
      { value: "100%", label: "Posting consistency maintained" },
    ],
    quote:
      "This is a placeholder case study for layout purposes — replace with a real client result before launch.",
    author: "Placeholder Name",
    authorRole: "Co-founder (placeholder)",
    accent: "#1f8a66",
    initials: "PS",
  },
];

// NOTE: Placeholder testimonials: replace with real client quotes & names.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "In two months my LinkedIn and Instagram finally told the same story. Inbound picked up on both, without a dollar spent on ads.",
    name: "Placeholder Founder",
    role: "Founder & CEO, B2B SaaS (placeholder)",
    initials: "PF",
    accent: "#ff5c35",
  },
  {
    quote:
      "They write and post like me, everywhere, without me having to think about which platform needs what today.",
    name: "Placeholder Operator",
    role: "Managing Partner, Advisory (placeholder)",
    initials: "PO",
    accent: "#1f7a8c",
  },
  {
    quote:
      "This isn't a content mill. A real team runs my channels with me, and I'm finally the name people bring up in my category.",
    name: "Placeholder Client",
    role: "Co-founder, FinTech (placeholder)",
    initials: "PC",
    accent: "#1f8a66",
  },
];

// NOTE: Placeholder client roster — rendered as text wordmarks (not fabricated
// logo art) until real client logos exist.
export const CLIENT_LOGOS = [
  { name: "Aurora Labs" },
  { name: "Northwind Studio" },
  { name: "Vantage Partners" },
  { name: "Fieldstone Group" },
  { name: "Harbor & Co." },
  { name: "Meridian Works" },
  { name: "Kestrel Advisory" },
  { name: "Lattice Ventures" },
];

// ------------------------------------------------------------------
//  Free Social Audit — landing page (/audit) and post-submit (/confirmation)
// ------------------------------------------------------------------

/** What we hand back. Rendered as a numbered editorial grid, not icon tiles. */
export const AUDIT_DELIVERABLES: { title: string; body: string }[] = [
  {
    title: "Profile teardown",
    body: "Bio, headline, pinned and featured content, read across every channel you gave us and scored against what actually turns a visitor into a lead.",
  },
  {
    title: "Content review",
    body: "Your last ten posts per channel: hooks, formats, cadence, and the specific gaps holding your reach back. Named, with examples from your own feed.",
  },
  {
    title: "Positioning gaps",
    body: "Where you blur into three competitors saying the same thing, and the angle that would make you the obvious choice instead.",
  },
  {
    title: "90-day roadmap",
    body: "A prioritised plan in the order we would run it. Yours to keep and execute, with us or without us.",
  },
];

export const AUDIT_STEPS: { title: string; body: string }[] = [
  {
    title: "Send us your profile",
    body: "One link and an email address. It takes under a minute, and there is nothing to install or schedule.",
  },
  {
    title: "We read it by hand",
    body: "Umair goes through your channels personally. No scoring tool, no scraped dashboard, no templated export.",
  },
  {
    title: "You get the plan in 24 hours",
    body: "A written breakdown in your inbox: what is working, what is costing you, and what to fix first.",
  },
];

/** Things we deliberately do not do — the honest differentiator strip. */
export const AUDIT_EXCLUSIONS = [
  "No ad spend recommendations",
  "No SEO tactics",
  "No templated report",
  "No obligation to work with us",
];

export const AUDIT_FAQS = [
  {
    q: "Is the audit actually free?",
    a: "Yes, and there is no trial, no card and no call required to receive it. We do this because a written plan is the most honest sample of our work we can give you. If you want help executing it, the strategy call is there. If you would rather run it yourself, take it and run.",
  },
  {
    q: "What do you need from me?",
    a: "A link to your main profile on any platform, and an email address to send the report to. If you are active on more than one channel, add those links too and we will cover them all.",
  },
  {
    q: "How long does it take?",
    a: "The report lands within 24 hours of you submitting. If it has been longer than that, email hello@soch.co and we will chase it — every submission is reviewed by a person, so occasionally one gets stuck behind another.",
  },
  {
    q: "Will this just be a pitch?",
    a: "No. The report is a plan you can act on with or without us. There is one line at the end offering a strategy call. Everything above it is work.",
  },
  {
    q: "Which platforms do you audit?",
    a: "LinkedIn, Instagram, X and TikTok, plus YouTube and Facebook. Most founders send us two or three. Send whichever ones you are actually trying to grow.",
  },
];

/** Post-submit sequence shown on /confirmation. */
export const CONFIRMATION_STEPS: { title: string; body: string }[] = [
  {
    title: "Umair reviews your profiles personally",
    body: "Bio, headline, pinned content and your last ten posts, across every channel you shared. Every section, by hand.",
  },
  {
    title: "The full breakdown lands in your inbox",
    body: "What is working, what is costing you, and what to fix first — specific to your channels, within 24 hours.",
  },
  {
    title: "Take the strategy call, or take the plan and run",
    body: "The call is where we walk the findings together and decide what is worth doing first. Completely your call.",
  },
];

export const CONFIRMATION_FAQS = [
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

export const FAQS = [
  {
    q: "Do you run paid ads?",
    a: "No. Soch is a purely organic social media agency. We don't run paid ads or manage ad budgets. If paid acquisition is part of your plan, we're a complementary, not overlapping, service.",
  },
  {
    q: "Do you do SEO?",
    a: "No. We focus entirely on organic social content, community and channel strategy. SEO is a different discipline with a different team; we don't offer it and won't pretend to.",
  },
  {
    q: "How is this different from a digital marketing agency?",
    a: "Digital marketing agencies typically run ads and optimise for search. We do neither. Soch is a social media management agency: we write, produce, post and manage community across your organic channels. Think of us as running your channels, not your ad account.",
  },
  {
    q: "Which platforms do you cover?",
    a: "We run LinkedIn, Instagram, X and TikTok, plus YouTube and Facebook. Which of those you should be on depends on where your buyers actually are — most founders we work with pick two or three. We help you decide the right mix rather than spreading you thin across all of them.",
  },
  {
    q: "Whose voice is the content in?",
    a: "Always yours. We interview you, learn how you talk, and write and produce in your voice across every channel. You approve every post before it goes live.",
  },
];
