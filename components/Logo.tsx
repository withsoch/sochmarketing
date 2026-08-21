import Image from "next/image";
import Link from "next/link";

// Wordmark images live in public/logos/. NOTE: despite the filenames,
// soch-logo-dark.png renders as a light/white mark (built for dark
// backgrounds) and soch-logo-light.png renders full-color (built for light
// backgrounds) - the opposite of what the names imply. Mapped here exactly
// as specified; swap the two src paths below if the navbar/footer render
// with the wrong contrast.
const LOGO_SRC = {
  dark: "/logos/soch-logo-light.png",
  light: "/logos/soch-logo-dark.png",
};

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = navbar; "light" variant = footer
  return (
    <Link
      href="/"
      aria-label="Soch home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={LOGO_SRC[variant]}
        alt="Soch Catalyst"
        width={1000}
        height={250}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}
