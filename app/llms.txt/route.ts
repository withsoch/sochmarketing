import { getAllPosts } from "@/lib/blog";
import { SITE, BOOKING_URL, SERVICE_CATEGORIES, PACKAGES } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

// Rebuilt at build time, which is every deploy — so every new post, service
// or package is reflected automatically, from the same content the pages render.
export const dynamic = "force-static";

/**
 * llms.txt: a plain-text map of the site for language models (llmstxt.org).
 * What the site is, who it's for, every service and package with real detail,
 * and every blog post with its summary — enough for an LLM to answer
 * questions about Soovita without crawling the rendered pages.
 */
export function GET() {
  const services = SERVICE_CATEGORIES.map((cat) => {
    const items = cat.services.map((s) => `  - **${s.title}**: ${s.description}`).join("\n");
    return `### ${cat.name}\n${cat.blurb}\n\n${items}`;
  }).join("\n\n");

  const packages = PACKAGES.map((p) => {
    const features = p.features.map((f) => `  - ${f}`).join("\n");
    const setup = p.setupNote ? `${p.setup} (${p.setupNote})` : p.setup;
    return `### ${p.name} — ${p.monthly}/mo, ${setup} setup\n${p.audience} ${p.outcome}\n\n${features}`;
  }).join("\n\n");

  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ""}`)
    .join("\n");

  const body = `# ${SITE.name}

> ${SITE.tagline} Based in Tallinn, Estonia. Owners approve every post before it goes live.

${SITE.name} is a marketing agency built specifically for independent restaurants, cafes and shisha lounges — not general small businesses. It replaces the in-house marketing hire these venues can't justify: one team runs Instagram, TikTok, Facebook, LinkedIn, Google Business Profile, review replies, AI-generated food photography and video, one-page websites, Wolt & Bolt Food delivery listings, and paid Instagram/Facebook ads. Everything is delivered as fixed monthly packages with a one-off setup fee, a 6-month minimum term, and month-to-month after that with 30 days' notice.

## Pages

- [About](${SITE_URL}/about): Who ${SITE.name} is and the story behind the agency.
- [Services](${SITE_URL}/services): Full breakdown of every service, grouped by category.
- [Packages](${SITE_URL}/packages): Pricing tiers, what's included, and the pricing FAQ.
- [Free Venue Audit](${SITE_URL}/audit): Free audit of a venue's Google, social and review presence.
- [Book a call](${SITE_URL}/book): Book a marketing discovery call.
- [Blog](${SITE_URL}/blog): Practical guides on restaurant, cafe and hospitality marketing.

## Who this is for

Independent restaurant, cafe and shisha lounge owners in Tallinn, Estonia who have little or no time to run their own marketing, and want one team accountable for the channels that actually bring people through the door: Google search and maps, Instagram/TikTok, reviews, and delivery apps.

## Services

${services}

## Packages

All prices are in EUR, excluding VAT, and are "starting from." Every package includes a one-off setup fee for the initial build (profile rebuild, Google listing claim, etc.) plus a monthly fee for ongoing management. Minimum term is 6 months, then month-to-month with 30 days' notice. Every post is approved by the owner before publishing.

${packages}

Book a discovery call: ${BOOKING_URL}

## Posts

${posts}

## Contact

- Email: ${SITE.email}
- LinkedIn: ${SITE.linkedin}
- Location: Tallinn, Estonia
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
