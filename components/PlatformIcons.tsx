// Brand marks for the channels we run.
//
// Deliberately kept out of components/Icons.tsx: that set is a stroke-based
// line-icon system (fill: none, 1.6 stroke) and these are solid brand marks.
//
// Two kinds of mark live here:
//   - `glyph`    a real brand glyph, drawn to the platform's own artwork.
//                Instagram / Facebook / TikTok are single-colour and take
//                their colour from the caller; Google is the official
//                four-colour G, so it carries its own fills; Wolt is traced
//                from Wolt's own logo PDF (public/logos/wolt-logo.pdf).
//   - `monogram` a plain initial on the channel's brand colour. Unused for
//                now, kept for a future wordmark-only brand with no source
//                artwork at all.
// Bolt Food is neither: it's rendered straight from public/logos/Bolt_logo.png
// (see PlatformMark below) since that's the source file we have for it.
import Image from "next/image";
import type { SVGProps } from "react";
import { CHANNEL_VAR, PLATFORMS, type Channel } from "@/lib/channels";

export type GlyphChannel = "instagram" | "facebook" | "tiktok" | "google" | "wolt";

/**
 * Wolt's script "Wolt" wordmark, traced from Wolt's own logo PDF
 * (public/logos/wolt-logo.pdf) with the circular badge backing stripped
 * out — the two paths below are the letterforms only, so they sit on our
 * own tinted-circle tile like every other glyph.
 */
const WOLT_VIEWBOX = "137.068 216.996 250.956 91.618";
const WOLT_PATHS = [
  "M0 0C-2.839 .026-5.36-.094-6.61-.214-9.099-.448-9.959-2.801-9.8-5.127-7.471-38.801-15.219-77.902-23.65-77.829-29.923-77.769-31.518-59.455-31.372-43.173-31.292-33.548-30.664-24.283-30.36-16.096-30.253-13.055-31.352-12.473-33.542-12.192-36.864-11.758-39.246-11.737-42.555-12.439-45.083-12.98-45.698-15.046-48.405-21.329-61.897-52.644-74.867-77.782-74.867-77.782-78.017-52.443-73.477-27.933-69.639-10.053-69.11-7.586-70.274-6.123-72.299-6.137-76.118-6.169-81.974-6.243-84.634-7.947-87.128-9.552-88.062-11.276-88.81-14.852-93.077-35.339-95.962-61.052-92.019-80.99-91.165-85.302-90.179-86.324-88.373-87.468-86.566-88.61-78.778-89.687-75.754-89.713-72.319-89.747-69.169-88.851-66.516-84.387-60.898-74.941-56.378-65.504-47.842-47.31-47.187-71.111-43.991-89.82-27.276-89.967-5.115-90.161 9.668-34.924 9.893-8.288 9.959-1.243 6.472-.061 0 0",
  "M0 0C0 0-7.484 .461-16.1 .915-16.1 .915-14.273 10.467-13.387 14.363-12.949 16.269-13.942 18.174-16.351 18.782-18.739 19.384-24.245 19.47-26.098 19.276-27.64 19.116-29.148 18.207-29.506 16.609-30.412 12.619-31.358 7.813-32.49 1.657-35.687 1.764-38.796 1.817-40.953 1.798-42.965 1.777-43.925 .762-44.348-.896-44.778-2.547-45.136-4.906-45.295-7.353-45.413-9.204-43.396-10.106-41.311-10.047-41.311-10.047-38.757-9.953-34.747-9.793-35.521-13.295-37.082-22.68-37.698-28.521-41.417-40.64-49-49.542-55.465-49.482-59.422-49.449-61.765-47.076-61.705-39.951-61.619-30.079-59.243-17.619-55.829-5.141-51.071 6.042-48.279 18.494-48.232 24.149-48.213 26.274-48.842 28.66-51.382 29.188-55.975 30.145-60.349 30.011-63.419 29.089-66.165 28.26-66.747 25.386-67.092 23.854-68.739 16.489-71.438 3.436-73.352-8.015-77.414-12.854-82.073-16.235-87.082-17.031-87.73-1.845-96.505 4.752-108.674 4.859-130.041 5.053-143.825-13.869-144.01-35.238-144.162-52.55-134.779-59.85-121.028-59.977-104.796-60.117-92.614-48.7-87.922-27.612-83.316-26.717-79.313-24.518-75.846-21.449-75.846-21.449-78.546-34.517-78.612-42.203-78.718-53.854-73.769-60.391-62.029-60.491-52.368-60.577-43.879-53.84-38.538-45.605-37.215-56.434-31.604-60.765-22.426-60.846-13.995-60.919-5.829-55.645-.007-46.02 1.158-44.102 2.005-42.417 1.291-41.575-.363-39.644-3.533-38.621-4.42-40.205-8.271-47.103-12.36-49.863-16.794-49.823-20.302-49.797-23.12-47.685-23.067-41.602-22.994-32.846-17.859-9.225-17.859-9.225-13.525-9.104-8.708-8.997-4.129-8.938-.112-8.877 2.739-7.68 3.468-3.87 3.897-1.604 2.581-.141 0 0M-118.521-50.585C-123.437-50.545-126.686-46.273-126.613-37.865-126.474-21.737-120.585-4.438-110.275-4.532-109.117-4.539-108.092-4.706-107.185-5.073-107.351-5.695-107.482-6.21-107.536-6.497-109.157-15.635-107.324-21.477-102.983-24.738-105.339-38.881-111.704-50.645-118.521-50.585",
];
const WOLT_TRANSFORMS = [
  "matrix(1,0,0,-1,233.0303,217.02213)",
  "matrix(1,0,0,-1,384.1265,247.69492)",
];

const PATHS: Record<Exclude<GlyphChannel, "google" | "wolt">, string> = {
  instagram:
    "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  tiktok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  facebook:
    "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z",
};

/**
 * Official four-colour Google G. Drawn as four separate fills, which is the
 * whole point: the previous single-path version merged all four segments into
 * one flat blue blob that read as a smudge rather than a logo.
 */
const GOOGLE_G: { d: string; fill: string }[] = [
  {
    fill: "#4285F4",
    d: "M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3.09h3.86c2.26-2.09 3.56-5.17 3.56-8.91z",
  },
  {
    fill: "#34A853",
    d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.09c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z",
  },
  {
    fill: "#FBBC05",
    d: "M5.27 14.2a7.2 7.2 0 0 1 0-4.6V6.51H1.29a12 12 0 0 0 0 10.78l3.98-3.09z",
  },
  {
    fill: "#EA4335",
    d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.61l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z",
  },
];

export function PlatformIcon({
  id,
  className,
  ...props
}: { id: GlyphChannel; className?: string } & SVGProps<SVGSVGElement>) {
  if (id === "google") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
        {GOOGLE_G.map((p) => (
          <path key={p.fill} d={p.d} fill={p.fill} />
        ))}
      </svg>
    );
  }

  if (id === "wolt") {
    return (
      <svg
        viewBox={WOLT_VIEWBOX}
        fill="currentColor"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {WOLT_PATHS.map((d, i) => (
          <path key={i} transform={WOLT_TRANSFORMS[i]} d={d} />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d={PATHS[id]} />
    </svg>
  );
}

const BY_ID = Object.fromEntries(PLATFORMS.map((p) => [p.id, p])) as Record<
  Channel,
  (typeof PLATFORMS)[number]
>;

const TILE_SIZE = {
  sm: "h-7 w-7 rounded-[7px]",
  md: "h-9 w-9 rounded-[10px]",
  lg: "h-11 w-11 rounded-xl",
} as const;

const GLYPH_SIZE = {
  sm: "h-[15px] w-[15px]",
  md: "h-[19px] w-[19px]",
  lg: "h-[23px] w-[23px]",
} as const;

// Wolt's wordmark is ~2.74:1 (wide), not square like the other glyphs, so
// it gets its own height and lets width follow the viewBox aspect ratio.
const WOLT_GLYPH_SIZE = {
  sm: "h-[11px]",
  md: "h-[14px]",
  lg: "h-[17px]",
} as const;

const MONOGRAM_SIZE = {
  sm: "text-[0.72rem]",
  md: "text-[0.9rem]",
  lg: "text-[1.05rem]",
} as const;

/**
 * One consistent tile per channel, so a row of six marks reads as a single
 * set instead of four icons plus two text pills. Glyph channels sit on a
 * light tint of their own brand colour; monogram channels use the brand
 * colour solid with a white initial.
 */
export function PlatformMark({
  id,
  size = "md",
  className = "",
}: {
  id: Channel;
  size?: keyof typeof TILE_SIZE;
  className?: string;
}) {
  const platform = BY_ID[id];
  const color = CHANNEL_VAR[id];
  const base = `inline-flex shrink-0 items-center justify-center ${TILE_SIZE[size]} ${className}`;

  if (id === "bolt") {
    return (
      <span
        className={base}
        style={{
          background: `color-mix(in srgb, ${color} 12%, white)`,
          boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${color} 18%, transparent)`,
        }}
        aria-hidden="true"
      >
        <Image
          src="/logos/Bolt_logo.png"
          alt=""
          width={1447}
          height={849}
          className={`${GLYPH_SIZE[size]} w-auto max-w-[85%] object-contain`}
        />
      </span>
    );
  }

  if (platform.mark === "monogram") {
    return (
      <span
        className={`${base} font-semibold text-white`}
        style={{ background: color, fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        <span className={MONOGRAM_SIZE[size]}>{platform.name.charAt(0)}</span>
      </span>
    );
  }

  return (
    <span
      className={base}
      style={{
        background: `color-mix(in srgb, ${color} 12%, white)`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${color} 18%, transparent)`,
      }}
      aria-hidden="true"
    >
      <PlatformIcon
        id={id as GlyphChannel}
        className={
          id === "wolt" ? `${WOLT_GLYPH_SIZE[size]} w-auto max-w-[85%]` : GLYPH_SIZE[size]
        }
        style={id === "google" ? undefined : { color }}
      />
    </span>
  );
}
