import Image from "next/image";

type AvatarProps = {
  /** Path rooted at `public/`, e.g. "/images/team/mahad.jpg". Omit for the disc. */
  src?: string;
  /** Person or venue name. Used as alt text, and to label the fallback disc. */
  name: string;
  /** Shown in the coloured disc when there is no photo. */
  initials: string;
  /** Disc background when there is no photo. */
  accent?: string;
  /** Rendered px size. Square. */
  size?: number;
  className?: string;
  /**
   * True when the name already appears in adjacent caption text - the usual
   * case in a <figcaption>. Keeps a screen reader from announcing it twice.
   */
  captioned?: boolean;
};

/**
 * A round person/venue image that falls back to the initials disc the site
 * used everywhere before photos existed. Same conditional shape as the
 * original in components/Testimonials.tsx, but on next/image.
 */
export function Avatar({
  src,
  name,
  initials,
  accent = "var(--color-brand)",
  size = 44,
  className = "",
  captioned = false,
}: AvatarProps) {
  const box = { width: size, height: size };

  if (src) {
    return (
      <span
        className={`relative shrink-0 overflow-hidden rounded-full ${className}`}
        style={box}
      >
        <Image
          src={src}
          alt={captioned ? "" : name}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white ${className}`}
      style={{ ...box, background: accent, fontSize: Math.round(size * 0.32) }}
      aria-hidden={captioned || undefined}
      aria-label={captioned ? undefined : name}
      role={captioned ? undefined : "img"}
    >
      {initials}
    </span>
  );
}
