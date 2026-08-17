// ------------------------------------------------------------------
//  Soch - the channels we actually run.
//  One list, shared by the homepage platform strip, the footer column
//  and the hero animation, so the platforms we name never drift apart.
// ------------------------------------------------------------------

export type Channel =
  | "linkedin"
  | "instagram"
  | "x"
  | "tiktok"
  | "youtube"
  | "facebook";

/** Brand colours, defined as tokens in globals.css. Badges and glyphs only. */
export const CHANNEL_VAR: Record<Channel, string> = {
  linkedin: "var(--color-channel-linkedin)",
  instagram: "var(--color-channel-instagram)",
  x: "var(--color-channel-x)",
  tiktok: "var(--color-channel-tiktok)",
  youtube: "var(--color-channel-youtube)",
  facebook: "var(--color-channel-facebook)",
};

/**
 * Ordered for display. The four `primary` platforms are where most of our
 * clients live and lead everywhere in the copy; YouTube and Facebook are
 * supported and rendered at lower emphasis rather than hidden.
 */
export const PLATFORMS: { id: Channel; name: string; primary: boolean }[] = [
  { id: "linkedin", name: "LinkedIn", primary: true },
  { id: "instagram", name: "Instagram", primary: true },
  { id: "x", name: "X", primary: true },
  { id: "tiktok", name: "TikTok", primary: true },
  { id: "youtube", name: "YouTube", primary: false },
  { id: "facebook", name: "Facebook", primary: false },
];
