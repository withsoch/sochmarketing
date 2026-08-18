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
 * every venue needs to show up; TikTok, Wolt and Bolt Food are rendered at
 * lower emphasis rather than hidden, since not every venue needs them.
 */
export const PLATFORMS: {
  id: Channel;
  name: string;
  primary: boolean;
  mark: "glyph" | "wordmark";
}[] = [
  { id: "instagram", name: "Instagram", primary: true, mark: "glyph" },
  { id: "google", name: "Google", primary: true, mark: "glyph" },
  { id: "facebook", name: "Facebook", primary: true, mark: "glyph" },
  { id: "tiktok", name: "TikTok", primary: false, mark: "glyph" },
  { id: "wolt", name: "Wolt", primary: false, mark: "wordmark" },
  { id: "bolt", name: "Bolt Food", primary: false, mark: "wordmark" },
];
