import { BookButton } from "@/components/BookButton";
import { CTAS } from "@/lib/content";

export function CtaBand({
  title = "Turn your social presence into booked calls",
  subtitle = "Book a free discovery call. We will show you where your channels are leaking opportunity and how to fix it, without a dollar spent on ads. No obligation, no pitch.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const accentDot = /[a-zA-Z]$/.test(title);
  return (
    <section className="bg-forest">
      <div className="container-x py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">
            {title}
            {accentDot && <span className="text-brand">.</span>}
          </h2>
          <p className="lead mt-5 max-w-2xl mx-auto text-white/75">{subtitle}</p>

          <div className="mt-9 flex justify-center">
            <BookButton variant="primary" size="lg">
              {CTAS.primary.label}
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
