// Custom, presentational mini-mockups - one per service category.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, and brand/channel/leaf accents. No stock photography,
// every "photo" is a flat, CSS-drawn block, honest about being a mockup.
import Image from "next/image";
import { Icon } from "@/components/Icons";

const REVIEWS_IMAGE = {
  src: "/Service Images/reviews-qr-coffee.png",
  alt: "Customer scanning QR code to leave a restaurant review",
  caption: "Quick QR reviews at café tables",
};

const REVIEWS_VARIATION_IMAGE = {
  src: "/Service Images/reviews-from-customer.png",
  alt: "Customer checking phone for restaurant review variation",
  caption: "Variation view of customer reviews",
};

const SOCIAL_MEDIA_IMAGE = {
  src: "/Service Images/social-media-feed.png",
  alt: "Customer browsing restaurant food photos on Instagram",
  caption: "Engaging food content on social media",
};

const DELIVERY_GALLERY: { src: string; alt: string }[] = [
  { src: "/Service Images/delivery-app-shawarma.png", alt: "Signature Shawarma Wrap with grilled meat and vegetables" },
  { src: "/Service Images/delivery-apps-Grill Burger.png", alt: "Mixed Grill Platter with roasted vegetables" },
  { src: "/Service Images/delivery-apps-Lemonade.png", alt: "House Mint Lemonade with fresh mint leaves" },
];

function DeliveryGallery() {
  return (
    <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {DELIVERY_GALLERY.map((img) => (
        <figure key={img.src}>
          <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const AI_CONTENT_GALLERY: { src: string; alt: string }[] = [
  { src: "/Service Images/ai-content-1.png", alt: "Plated dish in restaurant setting" },
  { src: "/Service Images/ai-content-2.png", alt: "Multiple plates of food on wooden table" },
  { src: "/Service Images/ai-content-3.png", alt: "Glass cup of tea or coffee" },
  { src: "/Service Images/ai-content-4.png", alt: "Cozy lounge dining area" },
  { src: "/Service Images/ai-content-5.png", alt: "Honey muffin with drizzle" },
];

function AiContentGallery() {
  return (
    <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {AI_CONTENT_GALLERY.map((img) => (
        <figure key={img.src}>
          <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- shared primitives ---------- */

const card =
  "relative z-10 rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line";
const chip =
  "absolute z-20 rounded-xl bg-white p-2.5 shadow-[var(--shadow-lift)] ring-1 ring-line";

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-full max-w-sm px-2 py-4 lg:px-3">{children}</div>;
}

function ChannelDot({ color }: { color: string }) {
  return <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />;
}

/* ---------- Google Business Profile gallery ---------- */

const GOOGLE_GALLERY: { src: string; alt: string }[] = [
  {
    src: "/Service Images/google-20260825-142103.png",
    alt: "Google Business Profile setup illustration",
  },
  {
    src: "/Service Images/google-20260825-142523.png",
    alt: "Google Maps visibility optimization graphic",
  },
  {
    src: "/Service Images/google-show-up-when-someone-two-streets-a.png",
    alt: "Restaurant visibility when searched nearby",
  },
];

function GoogleGallery() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {GOOGLE_GALLERY.map((img) => (
        <div
          key={img.src}
          className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line"
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- per-category visuals ---------- */

function SocialMediaVisual() {
  const rows: { channel: string; label: string; day: string }[] = [
    { channel: "var(--color-channel-instagram)", label: "Reel · new menu item", day: "Mon" },
    { channel: "var(--color-channel-instagram)", label: "Story · behind the counter", day: "Wed" },
    { channel: "var(--color-channel-facebook)", label: "Weekend hours reminder", day: "Fri" },
    { channel: "var(--color-channel-tiktok)", label: "TikTok · plating close-up", day: "Sat" },
  ];
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={SOCIAL_MEDIA_IMAGE.src}
            alt={SOCIAL_MEDIA_IMAGE.alt}
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">This week&apos;s posts</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[0.65rem] font-medium text-slate">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Scheduled
            </span>
          </div>
          <div className="mt-3.5 space-y-2">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-3 rounded-lg border border-line/70 bg-cream px-3 py-2.5"
              >
                <ChannelDot color={r.channel} />
                <p className="min-w-0 flex-1 truncate text-[0.78rem] font-medium text-ink-soft">
                  {r.label}
                </p>
                <span className="shrink-0 text-[0.68rem] text-muted">{r.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -right-2 -top-3 flex w-auto items-center gap-2 animate-float-b`}>
        <Icon name="globe" className="h-4 w-4 text-brand" strokeWidth={1.8} />
        <p className="text-[0.68rem] font-semibold text-ink">Captions in ET + EN</p>
      </div>
    </Stage>
  );
}

function GoogleVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-brand">
            <Icon name="pin" className="h-5 w-5" strokeWidth={1.7} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink">Your Restaurant Name</p>
            <p className="mt-0.5 text-[0.72rem] text-muted">Restaurant · Tallinn, Estonia</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <Icon name="star" className="h-3.5 w-3.5 text-brand" strokeWidth={0} />
              <span className="text-[0.72rem] font-semibold text-ink">4.8</span>
              <span className="text-[0.68rem] text-muted">(212 reviews)</span>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-leaf/12 px-2 py-1 text-[0.62rem] font-semibold text-leaf">
            Open now
          </span>
        </div>

        <GoogleGallery />

        <div className="mt-3.5 flex items-center justify-between border-t border-dashed border-line pt-3 text-[0.7rem] text-slate">
          <span>Hours updated for the holiday</span>
          <span className="font-semibold text-ink">Today</span>
        </div>
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-c`}>
        <Icon name="clock" className="h-4 w-4 text-brand" strokeWidth={1.8} />
        <p className="text-[0.68rem] font-semibold text-ink">Reviews answered in 24h</p>
      </div>
    </Stage>
  );
}

function ReviewsVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">New Google review</p>
          <span className="flex items-center gap-0.5 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-3.5 w-3.5" strokeWidth={0} />
            ))}
          </span>
        </div>
        <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">
          &ldquo;Best shisha lounge in the area, and the staff remembered our order
          from last time.&rdquo;
        </p>
        <div className="mt-3.5 rounded-lg border border-line bg-cream p-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted">
            Owner response
          </p>
          <p className="mt-1.5 text-[0.75rem] leading-relaxed text-slate">
            Thank you so much for coming back, see you again soon!
          </p>
        </div>

        <p className="mt-3.5 flex items-center gap-2 border-t border-dashed border-line pt-3.5 text-[0.8rem] font-semibold text-ink">
          <Icon name="clock" className="h-4 w-4 text-brand" strokeWidth={1.8} />
          Every review answered inside 24 hours
        </p>

        <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={REVIEWS_IMAGE.src}
                alt={REVIEWS_IMAGE.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
              {REVIEWS_IMAGE.caption}
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={REVIEWS_VARIATION_IMAGE.src}
                alt={REVIEWS_VARIATION_IMAGE.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
              {REVIEWS_VARIATION_IMAGE.caption}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={`${chip} -right-2 -top-3 flex w-auto items-center gap-2 animate-float-b`}>
        <span className="h-2 w-2 rounded-full bg-leaf" />
        <p className="text-[0.68rem] font-semibold text-ink">Replied in 3h</p>
      </div>
    </Stage>
  );
}

function AiContentVisual() {
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/Service Images/ai-content-feature.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">This month&apos;s images</p>
            <span className="text-[0.7rem] font-semibold text-brand">10 / 10</span>
          </div>

          <AiContentGallery />
        </div>
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-b`}>
        <Icon name="spark" className="h-4 w-4 text-brand" strokeWidth={1.6} />
        <p className="text-[0.68rem] font-semibold text-ink">No photographer needed</p>
      </div>
    </Stage>
  );
}

function FoundationsVisual() {
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="flex items-center gap-1.5 border-b border-line bg-mist/60 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-2 truncate text-[0.65rem] text-muted">yourvenue.com</span>
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/Service Images/foundations-20260825-160006.png"
            alt="Cozy modern café interior with warm lighting and plants"
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-center text-[0.65rem] leading-snug text-muted">
            Inviting café interior representing strong foundations
          </p>
          <p className="mt-3.5 text-sm font-semibold text-ink">Your Restaurant Name</p>
          <p className="mt-0.5 text-[0.72rem] text-muted">
            Open today · 11:00–23:00 · Tallinn, Estonia
          </p>
          <div className="mt-3.5 flex gap-2">
            <span className="rounded-md bg-brand px-2.5 py-1 text-[0.62rem] font-semibold text-white">
              View menu
            </span>
            <span className="rounded-md border border-line px-2.5 py-1 text-[0.62rem] font-semibold text-ink-soft">
              Directions
            </span>
          </div>
        </div>
      </div>
      <div className={`${chip} -right-2 -top-3 flex w-auto items-center gap-2 animate-float-c`}>
        <span className="h-3.5 w-3.5 rounded-full bg-brand" />
        <span className="h-3.5 w-3.5 rounded-full bg-forest" />
        <span className="h-3.5 w-3.5 rounded-full bg-leaf" />
        <p className="text-[0.65rem] font-semibold text-ink">Brand kit</p>
      </div>
    </Stage>
  );
}

function DeliveryVisual() {
  const items = [
    {
      name: "Signature Shawarma Wrap",
      price: "€8.90",
      tag: "Best seller",
      image: "/Service Images/delivery-app-shawarma.png",
    },
    {
      name: "Mixed Grill Platter",
      price: "€16.50",
      image: "/Service Images/delivery-apps-Grill Burger.png",
    },
    {
      name: "House Mint Lemonade",
      price: "€4.20",
      image: "/Service Images/delivery-apps-Lemonade.png",
    },
  ];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Delivery listing</p>
          <Icon name="bag" className="h-4 w-4 text-brand" strokeWidth={1.7} />
        </div>
        <div className="mt-3.5 space-y-2.5">
          {items.map((it) => (
            <div key={it.name} className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-line">
                <Image src={it.image} alt={it.name} fill sizes="40px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.78rem] font-medium text-ink-soft">{it.name}</p>
                {it.tag && (
                  <span className="mt-0.5 inline-block rounded bg-peach px-1.5 py-0.5 text-[0.6rem] font-semibold text-brand-dark">
                    {it.tag}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-[0.78rem] font-semibold text-ink">{it.price}</span>
            </div>
          ))}
        </div>

        <DeliveryGallery />
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-b`}>
        <span
          className="rounded px-1.5 py-0.5 text-[0.6rem] font-bold text-white"
          style={{ background: "var(--color-channel-wolt)" }}
        >
          Wolt
        </span>
        <span
          className="rounded px-1.5 py-0.5 text-[0.6rem] font-bold text-white"
          style={{ background: "var(--color-channel-bolt)" }}
        >
          Bolt Food
        </span>
      </div>
    </Stage>
  );
}

function GrowthVisual() {
  const bars = [30, 46, 38, 58, 72, 64, 88];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Monthly report</p>
          <span className="text-[0.7rem] font-semibold text-leaf">Reach ↑ 34%</span>
        </div>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{ height: `${h}%`, background: i === bars.length - 1 ? "var(--color-brand)" : "var(--color-line)" }}
            />
          ))}
        </div>
        <div className="mt-3.5 grid grid-cols-2 gap-3 border-t border-dashed border-line pt-3.5">
          <div>
            <p className="text-[0.68rem] text-muted">Directions requested</p>
            <p className="text-[1.1rem] leading-none text-ink" style={{ fontFamily: "var(--font-display)" }}>146</p>
          </div>
          <div>
            <p className="text-[0.68rem] text-muted">Ad spend managed</p>
            <p className="text-[1.1rem] leading-none text-ink" style={{ fontFamily: "var(--font-display)" }}>€480</p>
          </div>
        </div>
      </div>
      <div className={`${chip} -right-2 -top-3 flex w-auto items-center gap-2 animate-float-c`}>
        <Icon name="chat" className="h-4 w-4 text-brand" strokeWidth={1.7} />
        <p className="text-[0.65rem] font-semibold text-ink">Plain-language, one page</p>
      </div>
    </Stage>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "social-media": SocialMediaVisual,
  google: GoogleVisual,
  reviews: ReviewsVisual,
  "ai-content": AiContentVisual,
  foundations: FoundationsVisual,
  "delivery-apps": DeliveryVisual,
  growth: GrowthVisual,
};

export function CategoryVisual({ slug }: { slug: string }) {
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
