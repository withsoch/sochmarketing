// ------------------------------------------------------------------
//  Soch - single source of content & config.
//  Copy, services, packages, process, proof and the scheduler/booking
//  links all live here so the client can update everything from one file.
// ------------------------------------------------------------------

import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "Marketing for restaurants, cafes & shisha lounges",
  headline: "Look active, get found, and ",
  headlineEmphasis: "get more orders.",
};

export const SITE = {
  name: "Soch",
  tagline:
    "Social media, Google, reviews and delivery-app marketing for restaurants, cafes and shisha lounges — starting in Tallinn.",
  // Placeholder contact details — replace before launch.
  email: "hello@soch.co",
  linkedin: "https://www.linkedin.com/company/soch/",
};

/**
 * Where every "Get a quote" CTA sends people. Centralised here so it's
 * defined once instead of duplicated across every booking button.
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
  primary: { label: "Get a quote", href: "/book" },
  secondary: { label: "Get a Free Venue Audit", href: "/audit" },
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
];

// ------------------------------------------------------------------
//  Services — grouped into the 7 categories we sell. No prices here:
//  pricing only ever appears at the package level, on /packages.
// ------------------------------------------------------------------

export type Service = { title: string; description: string };

export type ServiceCategory = {
  slug: string;
  icon: IconName;
  name: string;
  /** One line of framing shown on the home page card and the /services chapter header. */
  blurb: string;
  /** 2–3 short highlights for the home page card preview. */
  highlights: string[];
  /** Full list, with descriptions, shown on the /services page. */
  services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "social-media",
    icon: "social",
    name: "Social Media",
    blurb: "Posts, stories and video, written and produced for your venue.",
    highlights: [
      "8–20 Instagram posts a month, planned and scheduled",
      "Captions written in Estonian and English",
    ],
    services: [
      {
        title: "Instagram Essentials",
        description:
          "8 planned Instagram posts every month, written, designed and scheduled for you.",
      },
      {
        title: "Instagram Standard",
        description:
          "12 posts, 12 stories and 2 short videos every month, plus a monthly content calendar you approve in advance.",
      },
      {
        title: "Instagram Plus",
        description:
          "20 posts, daily stories and 4 short videos every month. We stay on top of trends so your feed never goes quiet.",
      },
      {
        title: "TikTok Channel",
        description:
          "8 TikTok videos every month, edited in the style the platform rewards, using trending sounds.",
      },
      {
        title: "Facebook Page",
        description:
          "Your Instagram content mirrored to Facebook, plus events and opening hours kept current.",
      },
      {
        title: "LinkedIn Presence",
        description:
          "8 LinkedIn posts a month for your business page, written to reach local partners and corporate clients.",
      },
      {
        title: "Inbox & Comments",
        description:
          "We answer your DMs and comments Monday to Friday, usually within a few hours.",
      },
      {
        title: "Estonian + English Captions",
        description:
          "Every caption written in both Estonian and English, so locals and visitors both feel spoken to.",
      },
    ],
  },
  {
    slug: "google",
    icon: "pin",
    name: "Google",
    blurb: "Show up properly when someone nearby searches for a place to eat.",
    highlights: [
      "Profile claimed, verified and fully built out",
      "Every review answered within 24 hours",
    ],
    services: [
      {
        title: "Google Business Profile Setup",
        description:
          "We claim, verify and fully build your Google profile so you show up properly when someone searches your name.",
      },
      {
        title: "Google Profile Management",
        description:
          "Weekly Google posts, fresh photos every month, and your hours always correct — including holidays.",
      },
      {
        title: "Review Replies",
        description:
          "Every Google review answered within 24 hours, in Estonian or English. Bad reviews handled calmly, with you in the loop.",
      },
      {
        title: "Google Maps Visibility",
        description:
          "A one-time deep optimization so you rank higher when people nearby search for places to eat.",
      },
    ],
  },
  {
    slug: "reviews",
    icon: "star",
    name: "Reviews",
    blurb: "Turn happy customers into public proof, without asking awkwardly.",
    highlights: ["Table cards, till prompts and a staff script"],
    services: [
      {
        title: "Review Generation System",
        description:
          "A simple system that turns happy customers into Google reviews — table cards, a prompt at the till, and a short script for your team.",
      },
    ],
  },
  {
    slug: "ai-content",
    icon: "image",
    name: "AI Content",
    blurb: "Polished photos and video of your food, without a shoot day.",
    highlights: ["10–25 custom images a month", "Short videos, no film crew needed"],
    services: [
      {
        title: "Custom Images a Month",
        description:
          "Polished, professional-looking images of your food and space every month. No photographer, no shoot day.",
      },
      {
        title: "Short Videos a Month",
        description:
          "Short, scroll-stopping videos every month — the kind that usually need a film crew.",
      },
      {
        title: "Seasonal Campaign Pack",
        description:
          "A full themed creative set for a holiday, launch or seasonal menu — 12 images and 2 videos, ready to post.",
      },
    ],
  },
  {
    slug: "foundations",
    icon: "globe",
    name: "Foundations",
    blurb: "The profile, brand and website your venue is missing.",
    highlights: ["Instagram profile rebuilt properly", "A one-page website on your own domain"],
    services: [
      {
        title: "Instagram Profile Build",
        description:
          "We rebuild your Instagram profile properly — bio, highlights, buttons — so it looks like a real business.",
      },
      {
        title: "Brand Basics Kit",
        description:
          "Your colors, fonts and a set of reusable post templates, so everything you publish looks like it belongs together.",
      },
      {
        title: "One-Page Website",
        description:
          "A fast, clean web page with your menu, photos, hours, location, phone number and social links, on your own domain.",
      },
      {
        title: "Menu & Website Updates",
        description:
          "Changed your menu, prices or opening hours? We update your site — up to two changes a month. Hosting, security and domain renewal included.",
      },
    ],
  },
  {
    slug: "delivery-apps",
    icon: "bag",
    name: "Delivery Apps",
    blurb: "Wolt and Bolt Food listings that actually sell your menu.",
    highlights: ["Full listing rebuild: photos, descriptions, placement"],
    services: [
      {
        title: "Wolt & Bolt Food Listing Rebuild",
        description:
          "We rebuild your delivery listings properly — a photo on every dish, better descriptions, best-sellers placed where people see them.",
      },
      {
        title: "Delivery Platform Management",
        description:
          "We keep your Wolt and Bolt Food listings current every month — new dishes, seasonal items, promotions and photos.",
      },
    ],
  },
  {
    slug: "growth",
    icon: "trend",
    name: "Growth",
    blurb: "Paid reach and a report you can actually read.",
    highlights: ["Instagram & Facebook ads management", "A one-page report, in plain language"],
    services: [
      {
        title: "Instagram & Facebook Ads",
        description:
          "We run your paid ads — setup, targeting and weekly optimization. Ad budget paid directly by you.",
      },
      {
        title: "Monthly Report",
        description:
          "A one-page monthly report in plain language: who saw you, who engaged, and who asked for directions.",
      },
    ],
  },
];

// ------------------------------------------------------------------
//  Packages — the only place prices appear on the public site.
//  All prices are "starting from" and excl. VAT.
// ------------------------------------------------------------------

export type Package = {
  slug: string;
  name: string;
  audience: string;
  outcome: string;
  monthly: string;
  setup: string;
  setupNote?: string;
  popular?: boolean;
  track: "core" | "specialist";
  features: string[];
};

export const PACKAGES: Package[] = [
  {
    slug: "essentials",
    name: "Essentials",
    audience: "For a small cafe or shisha lounge just getting started.",
    outcome: "Look active online, without lifting a finger.",
    monthly: "€290",
    setup: "€200",
    track: "core",
    features: [
      "6 posts a month, photos included",
      "Your Google listing kept current",
      "Every review answered",
    ],
  },
  {
    slug: "starter",
    name: "Starter",
    audience: "For a restaurant with almost nothing online yet.",
    outcome: "Go from invisible to easy to find, fast.",
    monthly: "€470",
    setup: "€450",
    track: "core",
    features: [
      "Instagram profile rebuilt properly",
      "Google Business Profile claimed, verified and built out",
      "8 Instagram posts a month",
      "10 custom images a month",
      "Every Google review answered within 24 hours",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    audience: "For a restaurant that posts sometimes and knows it should do more.",
    outcome: "Show up everywhere your customers already are, in two languages.",
    monthly: "€960",
    setup: "€730",
    setupNote: "website included free",
    popular: true,
    track: "core",
    features: [
      "Instagram profile rebuild + brand basics kit (colors, fonts, templates)",
      "Google Business Profile setup + ongoing management",
      "A one-page website — included free on a 6-month term",
      "12 Instagram posts, 12 stories, 2 short videos a month",
      "10 custom images a month",
      "Every Google review answered within 24 hours",
      "Captions written in Estonian and English",
      "Monthly plain-language performance report",
    ],
  },
  {
    slug: "delivery-led",
    name: "Delivery-Led",
    audience: "For a restaurant where most orders come through Wolt or Bolt Food.",
    outcome: "Turn your delivery listings into your best-performing sales channel.",
    monthly: "€690",
    setup: "€850",
    track: "specialist",
    features: [
      "Full Wolt & Bolt Food listing rebuild (photos, descriptions, item placement)",
      "Ongoing delivery listing management",
      "25 custom images a month",
      "Review generation system (table cards, till prompts, staff script)",
      "Google Business Profile setup + management",
      "Monthly plain-language performance report",
    ],
  },
  {
    slug: "full",
    name: "Full",
    audience: "For an ambitious owner, or a small group of venues.",
    outcome: "Run every channel that gets people through your door, in one system.",
    monthly: "€2,330",
    setup: "€2,050",
    track: "specialist",
    features: [
      "Everything above: Instagram (top tier), TikTok, brand kit, website, full Google suite, delivery management, review generation",
      "25 custom images + 2 short videos a month",
      "Paid Instagram & Facebook ads management",
      "Monthly plain-language performance report",
    ],
  },
];

export const PACKAGE_TERMS = [
  { value: "6 mo", label: "Minimum term, then 30 days' notice" },
  { value: "100%", label: "Posts approved by you before going live" },
  { value: "excl. VAT", label: "Every price shown, always" },
];

export const PACKAGE_FINE_PRINT = [
  "All prices in EUR, excluding VAT.",
  "Minimum term: 6 months, then month-to-month with 30 days' notice.",
  "You approve every post before it goes live — nothing is published without sign-off.",
  "Website: one page, two rounds of changes; domain registered in the client's name.",
  "Advertising budget, where applicable, is paid by the client directly to Meta and is not included in package pricing.",
];

export type FaqItem = { q: string; a: string };

export const PRICING_FAQS: FaqItem[] = [
  {
    q: "Why is there a one-off setup fee?",
    a: "The first month is heavier than every month after it: rebuilding your Instagram profile, claiming and building your Google listing, or rebuilding a delivery menu is real, one-time work. The setup fee covers that build; the monthly fee covers running it afterwards.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Six months on every package, then month-to-month with 30 days' notice. Marketing for a local venue takes a few months to show up in bookings and orders — six months is roughly the shortest honest window to judge it in.",
  },
  {
    q: "Can I move to a different package later?",
    a: "Yes. Most venues start with Essentials or Starter and move up once the basics are working. Tell us what's changed and we'll requote the difference.",
  },
  {
    q: "Is the ad budget included in the Full package price?",
    a: "No. The €2,330/month covers running your ads — setup, targeting, weekly optimisation. Whatever you spend on the ads themselves goes directly from you to Meta, on top of that.",
  },
  {
    q: "Which package is right for my venue?",
    a: "If most of your orders already come through Wolt or Bolt Food, start with Delivery-Led. If you're just getting online, start with Essentials or Starter. If in doubt, get a quote — we'll ask a few questions about your venue and recommend one honestly, even if it's the cheapest one.",
  },
];

// ------------------------------------------------------------------
//  How we work
// ------------------------------------------------------------------

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
    title: "Audit & Quick Wins",
    description:
      "We read your Instagram, Google listing and delivery apps by hand, then fix the fastest wins first — the ones that cost nothing and change how you show up this week.",
  },
  {
    no: "02",
    icon: "pin",
    title: "Get Found on Google",
    description:
      "We claim, verify and fully build your Google Business Profile, so when someone nearby searches for a place to eat, you're the one they see.",
  },
  {
    no: "03",
    icon: "image",
    title: "Look Active, Every Week",
    description:
      "Photos, posts, stories and reviews handled on a real schedule, written for your venue and posted in Estonian and English.",
  },
  {
    no: "04",
    icon: "trend",
    title: "Turn Views Into Orders",
    description:
      "Delivery listings, review generation and a monthly report so the activity turns into bookings, walk-ins and orders, not just likes.",
  },
];

export const STATS = [
  { value: "6", label: "Platforms & apps run under one plan" },
  { value: "24h", label: "Every Google review answered within" },
  { value: "10+", label: "Custom images delivered, every month" },
  { value: "100%", label: "Posts approved by you before going live" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

// NOTE: Placeholder testimonials — replace with real client quotes & names.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our Google listing finally looks like a real restaurant. We started showing up in searches within weeks, no ad spend involved.",
    name: "Placeholder Owner",
    role: "Owner, Tallinn cafe (placeholder)",
    initials: "PO",
    accent: "#ff5c35",
  },
  {
    quote:
      "Someone else is finally answering every review, the same day. That used to be the thing we never got round to.",
    name: "Placeholder Manager",
    role: "General Manager, shisha lounge (placeholder)",
    initials: "PM",
    accent: "#1f7a8c",
  },
  {
    quote:
      "Our Wolt listing looks like a different menu now — better photos, better placement, more orders coming through.",
    name: "Placeholder Owner",
    role: "Owner, delivery-led restaurant (placeholder)",
    initials: "PW",
    accent: "#1f8a66",
  },
];

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
// Left as originally authored: kept off the main nav and out of the home
// page while the case-studies section is rebuilt for restaurant clients.
// Replace with real venue results before launch.
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

// NOTE: Placeholder venue roster — rendered as text wordmarks (not fabricated
// logo art) until a real client roster exists.
export const CLIENT_LOGOS = [
  { name: "Kalda Kohvik" },
  { name: "Vabaduse Grill" },
  { name: "Telliskivi Lounge" },
  { name: "Rannamõisa Cafe" },
  { name: "Vana Kalamaja Bistro" },
  { name: "Piiri Pizzeria" },
  { name: "Nõmme Kohvik" },
  { name: "Kadrioru Aed" },
];

// ------------------------------------------------------------------
//  Free Venue Audit — landing page (/audit) and post-submit (/confirmation)
// ------------------------------------------------------------------

/** What we hand back. Rendered as a numbered editorial grid, not icon tiles. */
export const AUDIT_DELIVERABLES: { title: string; body: string }[] = [
  {
    title: "Profile & listing teardown",
    body: "Your Instagram bio, highlights and pinned content, alongside your Google Business Profile, read side by side and scored against what actually makes a hungry local pick you.",
  },
  {
    title: "Content review",
    body: "Your last ten posts: hooks, formats, cadence, and the specific gaps holding your reach back. Named, with examples from your own feed.",
  },
  {
    title: "Google & delivery gaps",
    body: "Where you rank on Google Maps, and — if you're on Wolt or Bolt Food — how your listing's photos, descriptions and placement compare to what actually sells.",
  },
  {
    title: "90-day roadmap",
    body: "A prioritised plan in the order we would run it. Yours to keep and execute, with us or without us.",
  },
];

export const AUDIT_STEPS: { title: string; body: string }[] = [
  {
    title: "Send us your links",
    body: "Your Instagram, your Google listing, and your Wolt or Bolt Food page if you have one. It takes under a minute, and there is nothing to install or schedule.",
  },
  {
    title: "We read it by hand",
    body: "Our team goes through your profiles and listings personally. No scoring tool, no scraped dashboard, no templated export.",
  },
  {
    title: "You get the plan in 24 hours",
    body: "A written breakdown in your inbox: what is working, what is costing you, and what to fix first.",
  },
];

/** Things we deliberately do not do in the free audit — the honest differentiator strip. */
export const AUDIT_EXCLUSIONS = [
  "No ad spend recommendations",
  "No generic scoring tool",
  "No templated report",
  "No obligation to work with us",
];

export const AUDIT_FAQS: FaqItem[] = [
  {
    q: "Is the audit actually free?",
    a: "Yes, and there is no trial, no card and no call required to receive it. We do this because a written plan is the most honest sample of our work we can give you. If you want help executing it, a quote is there. If you would rather run it yourself, take it and run.",
  },
  {
    q: "What do you need from me?",
    a: "A link to your Instagram or Google listing, and an email address to send the report to. If you're on Wolt or Bolt Food too, add that link and we'll cover it as well.",
  },
  {
    q: "How long does it take?",
    a: "The report lands within 24 hours of you submitting. If it has been longer than that, email hello@soch.co and we will chase it — every submission is reviewed by a person, so occasionally one gets stuck behind another.",
  },
  {
    q: "Will this just be a pitch?",
    a: "No. The report is a plan you can act on with or without us. There is one line at the end offering a quote. Everything above it is work.",
  },
  {
    q: "Which platforms do you audit?",
    a: "Instagram, Google Business Profile, Facebook, and your Wolt or Bolt Food listing if you have one. Send whichever ones you're actually active on.",
  },
];

/** Post-submit sequence shown on /confirmation. */
export const CONFIRMATION_STEPS: { title: string; body: string }[] = [
  {
    title: "We review your profiles and listings personally",
    body: "Instagram, Google listing, and your delivery app if you shared one. Every section, by hand.",
  },
  {
    title: "The full breakdown lands in your inbox",
    body: "What is working, what is costing you, and what to fix first — specific to your venue, within 24 hours.",
  },
  {
    title: "Get a quote, or take the plan and run",
    body: "A quote is where we walk the findings together and decide what is worth doing first. Completely your call.",
  },
];

export const CONFIRMATION_FAQS: FaqItem[] = [
  {
    q: "What does the audit actually cover?",
    a: "We review your Instagram, your Google Business Profile, and your Wolt or Bolt Food listing if you shared one. You get a written breakdown of what is working, what is costing you visibility, and what to fix first.",
  },
  {
    q: "How does working together work?",
    a: "We start by walking through the audit findings together. From there, most venues move into one of our packages, covering the channels that matter most for them. You approve everything before it goes live.",
  },
  {
    q: "What should I have ready?",
    a: "Nothing. Just check your inbox within 24 hours. If you want to move fast, get a quote now so we can go through the findings together.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "Do you run paid ads?",
    a: "Only as part of our Full package, where we manage Instagram and Facebook ads for you — setup, targeting, weekly optimisation. Ad budget is paid directly by you to Meta and isn't included in the package price. Every other package is organic: profile, content, Google, reviews and delivery listings, no ad spend required.",
  },
  {
    q: "Do you do SEO?",
    a: "Not traditional website SEO. What we do is make sure you rank when someone nearby searches for a place to eat: a fully built Google Business Profile, consistent posting, fresh photos, and a Google Maps visibility pass. That's local visibility for a restaurant, not search engine optimisation for a website.",
  },
  {
    q: "How is this different from a general marketing agency?",
    a: "We built these packages specifically for restaurants, cafes and shisha lounges: the platforms your customers actually use to decide where to eat — Instagram, Google, Wolt, Bolt Food — instead of a one-size-fits-all retainer.",
  },
  {
    q: "Which platforms do you cover?",
    a: "Instagram, Facebook, TikTok and Google as standard, plus Wolt and Bolt Food listing management for venues that take delivery orders. Which mix you need depends on your package.",
  },
  {
    q: "Whose voice is the content in?",
    a: "Yours. Captions are written in Estonian and English, and you approve every post before it goes live, on every package.",
  },
];
