import Link from "next/link";

// Two interlocking circles - a redrawn, vector-only echo of the Soch
// Catalyst mark. No dependency on raster artwork, so it's a placeholder the
// client can swap for real brand assets later without touching call sites.
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="15" cy="14" r="8.5" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="25" cy="26" r="8.5" fill="none" stroke="var(--color-brand)" strokeWidth="3.2" />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = dark wordmark on light bg (navbar); "light" variant = white wordmark on dark bg (footer)
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="Soch home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Mark className={`h-8 w-8 ${isLight ? "text-white" : "text-ink"}`} />
      <span
        className={`text-[1.5rem] leading-none font-medium ${isLight ? "text-white" : "text-ink"}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        Soch
      </span>
    </Link>
  );
}
