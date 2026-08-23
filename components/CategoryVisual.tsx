// Custom, presentational mini-mockups - one per service category.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, and brand/channel/leaf accents.
//
// The photo slots below take real food/venue photography when a file exists in
// public/images/food, and fall back to a flat, CSS-drawn block when it doesn't.
// So these mockups render fine with no assets at all, and get real quality once
// photos land. Paths live in the FOOD manifest just below.
import Image from "next/image";
import { Icon } from "@/components/Icons";

/* ---------- food photo manifest ----------
   Every entry is optional. Leave a value as undefined (or delete the key) and
   that slot quietly falls back to its flat colour block. Paths are rooted at
   public/, so "/images/food/x.jpg" is public/images/food/x.jpg.             */

const FOOD: {
  listing: (string | undefined)[];   // Google Business Profile photo row (3)
  grid: (string | undefined)[];      // AI-content monthly image grid (5)
  websiteHero: string | undefined;   // one-page website hero
  dishes: (string | undefined)[];    // delivery-app dish thumbnails (3)
} = {
  listing: [undefined, undefined, undefined],
  grid: [undefined, undefined, undefined, undefined, undefined],
  websiteHero: undefined,
  dishes: [undefined, undefined, undefined],
};

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

/**
 * A food/venue photo slot. Renders the real image when `src` is set, otherwise
 * the flat CSS-drawn block the mockups used before any photography existed.
 *
 * These sit inside a fake Google listing / Wolt menu / image grid, so they are
 * decorative: alt is empty by default and screen readers skip them. The
 * surrounding mockup text already carries the meaning.
 *
 * `relative` is always on the wrapper - next/image with `fill` needs a
 * positioned parent or it escapes the box.
 */
function PhotoBlock({
  tone = "var(--color-peach)",
  className = "",
  src,
  alt = "",
  sizes = "120px",
  children,
}: {
  tone?: string;
  className?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg ${className}`}
      style={{ background: tone }}
    >
      {src && (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      )}
      {children}
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
      <div className={`${card} p-5 animate-float-a`}>
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
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["var(--color-peach)", "var(--color-cream)", "var(--color-mist)"].map((t, i) => (
            <PhotoBlock key={i} tone={t} className="h-12" src={FOOD.listing[i]} sizes="120px" />
          ))}
        </div>
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
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">This month&apos;s images</p>
          <span className="text-[0.7rem] font-semibold text-brand">10 / 10</span>
        </div>
        <div className="mt-3.5 grid grid-cols-3 gap-2">
          {["var(--color-peach)", "var(--color-mist)", "var(--color-cream)", "var(--color-cream)", "var(--color-peach)"].map(
            (t, i) => (
              <PhotoBlock key={i} tone={t} className="aspect-square" src={FOOD.grid[i]} sizes="112px">
                {/* the icon is a hint that this is an image slot - drop it once a
                    real photo fills the cell, or it sits on top of the food */}
                {i === 4 && !FOOD.grid[i] && (
                  <Icon name="image" className="h-4 w-4 text-muted" strokeWidth={1.6} />
                )}
              </PhotoBlock>
            ),
          )}
          <PhotoBlock tone="var(--color-mist)" className="aspect-square border border-dashed border-line">
            <span className="text-[0.62rem] font-semibold text-muted">+15</span>
          </PhotoBlock>
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
        <div className="p-4">
          <PhotoBlock
            tone="var(--color-peach)"
            className="h-16 w-full"
            src={FOOD.websiteHero}
            sizes="320px"
          />
          <div className="mt-3 h-2.5 w-2/3 rounded-full bg-line" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-line/70" />
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
    { name: "Signature Shawarma Wrap", price: "€8.90", tag: "Best seller" },
    { name: "Mixed Grill Platter", price: "€16.50" },
    { name: "House Mint Lemonade", price: "€4.20" },
  ];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Delivery listing</p>
          <Icon name="bag" className="h-4 w-4 text-brand" strokeWidth={1.7} />
        </div>
        <div className="mt-3.5 space-y-2.5">
          {items.map((it, i) => (
            <div key={it.name} className="flex items-center gap-3">
              <PhotoBlock
                tone="var(--color-cream)"
                className="h-10 w-10 shrink-0"
                src={FOOD.dishes[i]}
                sizes="40px"
              />
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
