// ------------------------------------------------------------------
//  Soch - single source of content & config.
//  Copy, services, packages, process, proof and the scheduler/booking
//  links all live here so the client can update everything from one file.
// ------------------------------------------------------------------

import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "Marketing for restaurants, cafes and shisha lounges",
  headline: "Get more people ",
  headlineEmphasis: "through your door.",
};

export const SITE = {
  name: "Soch",
  tagline:
    "Instagram, Google, reviews and delivery-app marketing for restaurants, cafes and shisha lounges. Starting in Tallinn.",
  // Placeholder contact details, replace before launch.
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
//  Services grouped into the 7 categories we sell. No prices here:
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
    blurb: "Your feed stays busy every week without you touching it.",
    highlights: [
      "8 to 20 posts a month, written and scheduled for you",
      "Captions written in Estonian and English",
    ],
    services: [
      {
        title: "Instagram Essentials",
        description:
          "Eight posts a month, written, designed and scheduled. Your page stops looking like the kind of place that might have closed.",
      },
      {
        title: "Instagram Standard",
        description:
          "12 posts, 12 stories and 2 short videos a month. You see the whole month on one calendar and approve it in about 20 minutes.",
      },
      {
        title: "Instagram Plus",
        description:
          "20 posts, daily stories and 4 short videos a month. People who follow you see you most days, which is when they start turning up.",
      },
      {
        title: "TikTok Channel",
        description:
          "Eight videos a month, cut the way the app rewards, using sounds already working locally. Reaches people who have never heard of you.",
      },
      {
        title: "Facebook Page",
        description:
          "Your Instagram content mirrored to Facebook, with events and opening hours kept right. Catches the older half of your local crowd.",
      },
      {
        title: "LinkedIn Presence",
        description:
          "Eight posts a month on your business page, aimed at nearby offices. That is where Christmas parties and lunches for twelve come from.",
      },
      {
        title: "Inbox & Comments",
        description:
          "We answer your DMs and comments Monday to Friday, usually within a few hours. Nobody asking about a table gets left on read.",
      },
      {
        title: "Estonian + English Captions",
        description:
          "Every caption written twice, once in Estonian and once in English. Locals and visitors both read it properly and both book.",
      },
    ],
  },
  {
    slug: "google",
    icon: "pin",
    name: "Google",
    blurb: "Show up when someone two streets away searches for dinner.",
    highlights: [
      "Profile claimed, verified and fully built out",
      "Every review answered within 24 hours",
    ],
    services: [
      {
        title: "Google Business Profile Setup",
        description:
          "We claim your profile, verify it and fill every field Google offers: hours, menu, photos, categories. You stop being hard to find.",
      },
      {
        title: "Google Profile Management",
        description:
          "A Google post every week, fresh photos monthly, hours right including public holidays. Google ranks active listings above dormant ones.",
      },
      {
        title: "Review Replies",
        description:
          "Every review answered inside 24 hours, in Estonian or English. Angry ones handled calmly, and we check with you before replying to those.",
      },
      {
        title: "Google Maps Visibility",
        description:
          "A one-off deep pass on categories, service area, photos and the words in each field. Moves you up the map for searches near you.",
      },
    ],
  },
  {
    slug: "reviews",
    icon: "star",
    name: "Reviews",
    blurb: "Get the reviews you are owed, without anyone feeling awkward.",
    highlights: ["Table cards, till prompts and a staff script"],
    services: [
      {
        title: "Review Generation System",
        description:
          "Table cards, a prompt at the till and a short script for your team. Your rating stops being decided by the two people who complained.",
      },
    ],
  },
  {
    slug: "ai-content",
    icon: "image",
    name: "AI Content",
    blurb: "Photos and video of your food, without closing for a shoot day.",
    highlights: ["10 to 25 custom images a month", "Short videos, no film crew needed"],
    services: [
      {
        title: "Custom Images a Month",
        description:
          "Professional-looking images of your food and your room every month, produced from what you already have. No photographer, no closing early.",
      },
      {
        title: "Short Videos a Month",
        description:
          "Short videos built for the feed, the kind that normally need a crew and a full day. You get them monthly without shutting the kitchen.",
      },
      {
        title: "Seasonal Campaign Pack",
        description:
          "12 images and 2 videos on one theme for a holiday, a launch or a new menu. Ready the week before you need them, not the week after.",
      },
    ],
  },
  {
    slug: "foundations",
    icon: "globe",
    name: "Foundations",
    blurb: "The profile, brand and website you never got round to.",
    highlights: ["Instagram profile rebuilt properly", "A one-page website on your own domain"],
    services: [
      {
        title: "Instagram Profile Build",
        description:
          "Bio, highlights, buttons and pinned posts rebuilt from scratch. Someone landing on your page can see what you serve and book in two taps.",
      },
      {
        title: "Brand Basics Kit",
        description:
          "Your colours, your fonts and a set of reusable post templates. Everything you publish afterwards looks like the same restaurant.",
      },
      {
        title: "One-Page Website",
        description:
          "One fast page on your own domain: menu, photos, hours, location, phone number. Somewhere to send people that is not a delivery app.",
      },
      {
        title: "Menu & Website Updates",
        description:
          "Changed your prices or your hours? We update the page, up to two changes a month. Hosting, security and domain renewal are in the price.",
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
          "A photo on every dish, descriptions rewritten, best-sellers moved to the top. People order what they see first, so put the right thing there.",
      },
      {
        title: "Delivery Platform Management",
        description:
          "New dishes, seasonal items, promotions and photos kept current every month. Your listing stops looking like nobody has opened it since signup.",
      },
    ],
  },
  {
    slug: "growth",
    icon: "trend",
    name: "Ads & Reporting",
    blurb: "Paid reach, and a report you can read in two minutes.",
    highlights: ["Instagram & Facebook ads management", "A one-page report, in plain language"],
    services: [
      {
        title: "Instagram & Facebook Ads",
        description:
          "Setup, targeting and weekly changes based on what is actually converting. You pay Meta directly for the budget, so you see what it really costs.",
      },
      {
        title: "Monthly Report",
        description:
          "One page, plain words: who saw you, who opened your profile, and how many people asked Google for directions to your door.",
      },
    ],
  },
];

// ------------------------------------------------------------------
//  Packages: the only place prices appear on the public site.
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
    audience: "For a small cafe or lounge with no time to spare.",
    outcome: "Your feed and your Google listing stop looking abandoned.",
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
    outcome: "Get found on Google, and post twice a week without doing it.",
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
    outcome: "Show up on every app your customers already use, in two languages.",
    monthly: "€960",
    setup: "€730",
    setupNote: "website included free",
    popular: true,
    track: "core",
    features: [
      "Instagram profile rebuild plus brand basics kit (colours, fonts, templates)",
      "Google Business Profile setup and ongoing management",
      "A one-page website, free on a 6-month term",
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
    outcome: "Get more orders out of the listing you already pay commission on.",
    monthly: "€690",
    setup: "€850",
    track: "specialist",
    features: [
      "Full Wolt and Bolt Food rebuild (photos, descriptions, item order)",
      "Ongoing delivery listing management",
      "25 custom images a month",
      "Review system at the table and the till (cards, prompts, staff script)",
      "Google Business Profile setup and management",
      "Monthly plain-language performance report",
    ],
  },
  {
    slug: "full",
    name: "Full",
    audience: "For an owner with two or three sites, or big plans for one.",
    outcome: "Every channel that brings people in, run by one team.",
    monthly: "€2,330",
    setup: "€2,050",
    track: "specialist",
    features: [
      "Everything above: Instagram (top tier), TikTok, brand kit, website, the full Google suite, delivery management, review system",
      "25 custom images and 2 short videos a month",
      "Paid Instagram and Facebook ads management",
      "Monthly plain-language performance report",
    ],
  },
];

export const PACKAGE_TERMS = [
  { value: "6 mo", label: "Minimum term, then 30 days' notice" },
  { value: "100%", label: "Posts approved by you before going live" },
  { value: "excl. VAT", label: "Every price on this page, always" },
];

export const PACKAGE_FINE_PRINT = [
  "All prices in EUR, excluding VAT.",
  "Minimum term: 6 months, then month to month with 30 days' notice.",
  "You approve every post before it goes live. Nothing is published without your sign-off.",
  "Website: one page, two rounds of changes, domain registered in your name.",
  "Ad budget, where it applies, is paid by you directly to Meta and is not in the package price.",
];

export type FaqItem = { q: string; a: string };

export const PRICING_FAQS: FaqItem[] = [
  {
    q: "Why is there a one-off setup fee?",
    a: "The first month is much heavier than the ones after it. Rebuilding your Instagram profile, claiming and building a Google listing, or rebuilding a delivery menu is real one-time work. The setup fee pays for that build. The monthly fee pays for running it afterwards.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Six months on every package, then month to month with 30 days' notice. Marketing for a local venue takes a few months to show up in bookings and orders. Six months is about the shortest honest window to judge it in.",
  },
  {
    q: "Can I move to a different package later?",
    a: "Yes. Most venues start on Essentials or Starter and move up once the basics are working. Tell us what changed and we'll requote the difference.",
  },
  {
    q: "Is the ad budget included in the Full package price?",
    a: "No. The €2,330 a month covers running your ads: setup, targeting, weekly changes. Whatever you spend on the ads themselves goes from you straight to Meta, on top of that.",
  },
  {
    q: "Which package is right for my venue?",
    a: "If most of your orders already come through Wolt or Bolt Food, start with Delivery-Led. If you're barely online yet, start with Essentials or Starter. If you're not sure, get a quote. We'll ask a few questions about your venue and name one honestly, even if it's the cheapest one.",
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
      "We read your Instagram, your Google listing and your delivery apps by hand, then fix the free things first, the ones that change how you show up this week. From you: the logins, and about 30 minutes on a call while we ask what actually sells.",
  },
  {
    no: "02",
    icon: "pin",
    title: "Get Found on Google",
    description:
      "We claim, verify and fill out your Google Business Profile, so the person searching for dinner two streets away sees you. From you: nothing, unless Google posts a verification card to the venue. Then five minutes to read us the code.",
  },
  {
    no: "03",
    icon: "image",
    title: "Look Active, Every Week",
    description:
      "Photos, posts, stories and review replies on a fixed schedule, written for your venue in Estonian and English. From you: about 20 minutes a month approving the calendar, on your phone, between services.",
  },
  {
    no: "04",
    icon: "trend",
    title: "Turn Views Into Orders",
    description:
      "Delivery listings rebuilt, review cards on the tables, and a one-page report showing directions requested and orders placed. From you: 15 minutes reading it, and a word with your staff about the cards.",
  },
];

export const STATS = [
  { value: "6", label: "Platforms & apps run under one plan" },
  { value: "24h", label: "Every Google review answered within" },
  { value: "10+", label: "Custom images delivered, every month" },
  { value: "100%", label: "Posts approved by you before going live" },
];

// ------------------------------------------------------------------
//  Team
// ------------------------------------------------------------------

export type TeamMember = {
  name: string;
  role: string;
  /** One or two sentences. Who they are, what they actually do here. */
  bio: string;
  /** Photo rooted at public/, e.g. "/images/team/mahad.jpg". */
  photo?: string;
  /** Fallback disc when there is no photo yet. */
  initials: string;
  accent: string;
};

// Add real people here. The About page team section renders nothing at all
// while this is empty, so the page is never left with a heading over
// whitespace. Photos go in public/images/team/ - see that folder's README.
export const TEAM: TeamMember[] = [];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
  /**
   * Head-and-shoulders photo of the speaker, rooted at public/
   * (e.g. "/images/team/marek.jpg"). Falls back to the initials disc.
   *
   * These cards name a specific person at a specific venue, so this slot takes
   * an owned photo of that person only - never a stock face.
   */
  photo?: string;
};

// NOTE: Placeholder testimonials, invented for internal review only, and
// marked "(placeholder)" in the role line so they cannot be mistaken for
// real proof. Replace with real client quotes & names before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our Google listing sat half empty for four years. A fortnight after they filled it in, people we'd never met started phoning to ask if we took bookings.",
    name: "Marek T.",
    role: "Owner, Tallinn cafe (placeholder)",
    initials: "MT",
    accent: "#ff5c35",
  },
  {
    quote:
      "The reviews get answered the same day now. Answering reviews was the job I moved to tomorrow, every day, for about three years.",
    name: "Liis K.",
    role: "General Manager, shisha lounge (placeholder)",
    initials: "LK",
    accent: "#1f7a8c",
  },
  {
    quote:
      "Every dish has a photo on Wolt now. Same menu, same kitchen, same prices, and noticeably more orders on the nights that used to be dead.",
    name: "Andrei S.",
    role: "Owner, delivery-led restaurant (placeholder)",
    initials: "AS",
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
  /**
   * Venue photo rooted at public/, e.g. "/images/venues/kalda-interior.jpg".
   * Falls back to the accent panel with the initials glyph.
   *
   * This is captioned with a named venue, so it takes an owned photo of that
   * venue only - a stock interior here would be a false claim about a client.
   */
  image?: string;
};

// NOTE: Placeholder case studies, invented for internal review only, every
// number labelled illustrative. Kept off the main nav and off the home page.
// Slugs are deliberately unchanged so existing URLs still resolve.
// Replace with real venue results before launch.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "placeholder-fintech-founder",
    company: "Placeholder Kohvik (Sample Case Study)",
    industry: "Neighbourhood cafe (illustrative example)",
    region: "Tallinn",
    duration: "90 days",
    scope: "Google listing, Instagram, review system",
    metrics: [
      { value: "2.4×", label: "Directions requests on Google (illustrative)" },
      { value: "31", label: "New Google reviews (illustrative)" },
      { value: "3", label: "Channels run under one plan" },
      { value: "0", label: "Euros spent on ads" },
    ],
    quote:
      "This is a placeholder case study for layout purposes. Replace it with a real venue result before launch.",
    author: "Placeholder Name",
    authorRole: "Owner (placeholder)",
    accent: "#103129",
    initials: "PK",
  },
  {
    slug: "placeholder-advisory-partner",
    company: "Placeholder Bistro (Sample Case Study)",
    industry: "Delivery-led restaurant (illustrative example)",
    region: "Tallinn",
    duration: "5 months",
    scope: "Wolt and Bolt Food listings, food photography, reviews",
    metrics: [
      { value: "1.8×", label: "Delivery orders per week (illustrative)" },
      { value: "100%", label: "Dishes with a photo, up from a handful" },
      { value: "2", label: "Delivery listings rebuilt" },
      { value: "0", label: "Euros spent on ads" },
    ],
    quote:
      "This is a placeholder case study for layout purposes. Replace it with a real venue result before launch.",
    author: "Placeholder Name",
    authorRole: "Owner (placeholder)",
    accent: "#1f7a8c",
    initials: "PB",
  },
  {
    slug: "placeholder-saas-cofounder",
    company: "Placeholder Lounge (Sample Case Study)",
    industry: "Shisha lounge (illustrative example)",
    region: "Tallinn",
    duration: "6 weeks",
    scope: "Instagram, TikTok, review system",
    metrics: [
      { value: "4.1×", label: "Short-form video reach (illustrative)" },
      { value: "27", label: "New Google reviews (illustrative)" },
      { value: "24h", label: "Review reply time, held every week" },
      { value: "100%", label: "Posting consistency maintained" },
    ],
    quote:
      "This is a placeholder case study for layout purposes. Replace it with a real venue result before launch.",
    author: "Placeholder Name",
    authorRole: "Owner (placeholder)",
    accent: "#1f8a66",
    initials: "PL",
  },
];

// NOTE: Placeholder venue roster, invented names, rendered as text wordmarks
// (not fabricated logo art) until a real client roster exists.
export type ClientLogo = {
  name: string;
  /**
   * Real logo artwork rooted at public/, e.g. "/images/logos/kalda.svg".
   * While absent, LogoMarquee keeps rendering the name as a text wordmark.
   */
  logo?: string;
};

export const CLIENT_LOGOS: ClientLogo[] = [
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
//  Free Venue Audit: landing page (/audit) and post-submit (/confirmation)
// ------------------------------------------------------------------

/** What we hand back. Rendered as a numbered editorial grid, not icon tiles. */
export const AUDIT_DELIVERABLES: { title: string; body: string }[] = [
  {
    title: "Profile & listing teardown",
    body: "Your Instagram bio, highlights and pinned posts, read next to your Google listing and marked against what makes a hungry local pick you over the place two doors down.",
  },
  {
    title: "Content review",
    body: "Your last ten posts. The hooks, the formats, how often you post, and the specific gaps costing you reach. Named, with examples pulled from your own feed.",
  },
  {
    title: "Google & delivery gaps",
    body: "Where you sit on Google Maps for searches nearby, and if you're on Wolt or Bolt Food, how your photos, descriptions and item order compare to listings that sell.",
  },
  {
    title: "90-day plan",
    body: "The jobs in the order we would do them, biggest first. Yours to keep and run, with us or without us.",
  },
];

export const AUDIT_STEPS: { title: string; body: string }[] = [
  {
    title: "Send us your links",
    body: "Your Instagram, your Google listing, and your Wolt or Bolt Food page if you have one. Under a minute on your phone. Nothing to install, no call to book.",
  },
  {
    title: "We read it by hand",
    body: "A person on our team goes through your profiles and listings. No scoring tool, no scraped dashboard, no templated export.",
  },
  {
    title: "You get the plan in 24 hours",
    body: "A written breakdown in your inbox: what is working, what is costing you, and what to fix first.",
  },
];

/** Things we deliberately do not do in the free audit: the honest differentiator strip. */
export const AUDIT_EXCLUSIONS = [
  "No ad spend recommendations",
  "No generic scoring tool",
  "No templated report",
  "No obligation to work with us",
];

export const AUDIT_FAQS: FaqItem[] = [
  {
    q: "Is the audit actually free?",
    a: "Yes. No trial, no card, no call to sit through. We do it because a written plan is the most honest sample of our work we can hand you. If you want help running it, ask for a quote. If you'd rather run it yourself, take it and go.",
  },
  {
    q: "What do you need from me?",
    a: "A link to your Instagram or your Google listing, and an email address to send the report to. If you're on Wolt or Bolt Food as well, add that link and we'll cover it too.",
  },
  {
    q: "How long does it take?",
    a: "The report lands within 24 hours of you sending it. If it's been longer, email hello@soch.co and we'll chase it. A person reads every submission, so now and then one gets stuck behind another.",
  },
  {
    q: "Will this just be a pitch?",
    a: "No. It's a plan you can act on without us. There is one line at the end offering a quote. Everything above that line is work.",
  },
  {
    q: "Which platforms do you look at?",
    a: "Instagram, Google Business Profile, Facebook, and your Wolt or Bolt Food listing if you have one. Send the ones you actually use.",
  },
];

/** Post-submit sequence shown on /confirmation. */
export const CONFIRMATION_STEPS: { title: string; body: string }[] = [
  {
    title: "A person reads your profiles and listings",
    body: "Instagram, your Google listing, and your delivery app if you sent one. Every section, by hand.",
  },
  {
    title: "The full breakdown lands in your inbox",
    body: "What is working, what is costing you, and what to fix first, specific to your venue, within 24 hours.",
  },
  {
    title: "Get a quote, or take the plan and run",
    body: "A quote is 30 minutes where we go through the findings and decide what is worth doing first. Entirely your call.",
  },
];

export const CONFIRMATION_FAQS: FaqItem[] = [
  {
    q: "What does the audit actually cover?",
    a: "Your Instagram, your Google Business Profile, and your Wolt or Bolt Food listing if you sent one. You get a written breakdown of what is working, what is costing you customers, and what to fix first.",
  },
  {
    q: "How does working together work?",
    a: "We start by going through the audit findings together. From there most venues pick a package covering the channels that matter most to them. You approve everything before it goes live.",
  },
  {
    q: "What should I have ready?",
    a: "Nothing. Just check your inbox within 24 hours. If you want to move faster, get a quote now and we'll go through the findings on a call.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "I paid an agency before and got a monthly PDF for it.",
    a: "That's a fair thing to hold against us. Two differences you can check for yourself: you approve every post before it goes live, so you see the work as it happens instead of reading a summary a month later. And the report is one page that says how many people asked Google for directions to your door. If the work stops, you'll notice in week one, not in month six.",
  },
  {
    q: "How long before I see anything?",
    a: "Google can move inside two weeks, because that part is just becoming findable: claimed profile, right categories, real photos. Content and reviews take longer, usually two to three months before it shows up in covers. Anyone promising you next Tuesday is guessing.",
  },
  {
    q: "What if it doesn't work?",
    a: "Then after six months you still own a rebuilt Google profile, a claimed listing, a stack of new reviews and a few hundred posts. That's the floor. The honest part: we can make you easy to find and worth choosing on a Tuesday. We can't fix food that people don't come back for, and we'll tell you on the call if we think that's the real problem.",
  },
  {
    q: "Do I have to be on TikTok, or run ads?",
    a: "No to both. TikTok sits on two of the five packages and plenty of venues skip it. Paid ads only sit on the Full package, and the budget goes from you straight to Meta so you see the real cost. For most local restaurants, Instagram, Google and the delivery listing do more than either. Nobody is going to ask you to dance.",
  },
  {
    q: "How much of my week does this take?",
    a: "About 20 minutes a month approving the content calendar, plus one 30-minute call at the start. You don't write captions, pick photos or answer reviews. We will ask how your venue talks, once, so the captions sound like you in both Estonian and English. If a month needs more than that from you, we've built it wrong.",
  },
];
