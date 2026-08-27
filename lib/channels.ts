// ------------------------------------------------------------------
//  Soch - the channels we actually run for restaurants & cafes.
//  One list, shared by the homepage platform strip, the footer column
//  and the hero animation, so the platforms we name never drift apart.
// ------------------------------------------------------------------

export type Channel =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "google"
  | "wolt"
  | "bolt";

/** Brand colours, defined as tokens in globals.css. Badges and glyphs only. */
export const CHANNEL_VAR: Record<Channel, string> = {
  instagram: "var(--color-channel-instagram)",
  facebook: "var(--color-channel-facebook)",
  tiktok: "var(--color-channel-tiktok)",
  google: "var(--color-channel-google)",
  wolt: "var(--color-channel-wolt)",
  bolt: "var(--color-channel-bolt)",
};

/**
 * Ordered for display. Instagram, Google and Facebook are where nearly
 * every venue needs to show up; TikTok, Wolt and Bolt Food are marked
 * non-primary because not every venue needs them - but they still get a
 * full-strength mark, since a faded logo reads as "broken", not "optional".
 *
 * `mark` picks how the logo is drawn (see components/PlatformIcons.tsx):
 * a real brand glyph, traced or extracted from each platform's own
 * artwork. Bolt is the one exception — PlatformMark renders it straight
 * from public/logos/Bolt_logo.png regardless of this field.
 */
export const PLATFORMS: {
  id: Channel;
  name: string;
  role: string;
  primary: boolean;
  mark: "glyph" | "monogram";
}[] = [
  {
    id: "instagram",
    name: "Instagram",
    role: "Reels & Stories",
    primary: true,
    mark: "glyph",
  },
  {
    id: "google",
    name: "Google",
    role: "Search & reviews",
    primary: true,
    mark: "glyph",
  },
  {
    id: "facebook",
    name: "Facebook",
    role: "Events & local reach",
    primary: true,
    mark: "glyph",
  },
  {
    id: "tiktok",
    name: "TikTok",
    role: "Short‑form video",
    primary: false,
    mark: "glyph",
  },
  {
    id: "wolt",
    name: "Wolt",
    role: "Delivery listing",
    primary: false,
    mark: "glyph",
  },
  {
    id: "bolt",
    name: "Bolt Food",
    role: "Delivery listing",
    primary: false,
    mark: "glyph",
  },
];
