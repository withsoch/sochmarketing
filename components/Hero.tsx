import { AuditButton } from "@/components/AuditButton";
import { CTAS, HERO } from "@/lib/content";
import { SocialGrowthAnim } from "@/components/SocialGrowthAnim";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      {/* one soft, flat peach wash behind the visual, no glow blobs */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(60%_60%_at_70%_35%,var(--color-peach),transparent_70%)] opacity-70 lg:block" />

      <div className="container-x relative grid items-start gap-10 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        {/* ---- copy ---- */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up [animation-delay:0ms]">{HERO.eyebrow}</span>

          <h1 className="text-display text-[clamp(2rem,1.2rem+3vw,3.35rem)] mt-5 animate-fade-up [animation-delay:80ms]">
            {HERO.headline}{" "}
            <span className="italic text-brand">{HERO.headlineEmphasis}</span>
          </h1>

          <p className="lead text-[clamp(0.95rem,0.88rem+0.28vw,1.1rem)] mt-5 animate-fade-up [animation-delay:160ms]">
            Soch is an organic social media agency for founders and senior executives. We
            run your profile, content and community across every channel that matters,
            so you get inbound, booked calls, and a name people trust. No ads, no SEO,
            just consistent, credible presence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <AuditButton
              variant="secondary"
              size="lg"
              className="cursor-pointer hover:bg-[#1a1a1a] hover:text-white hover:!ring-[#1a1a1a]"
            >
              {CTAS.secondary.label}
            </AuditButton>
          </div>

          <div className="mt-9 flex items-center gap-4 animate-fade-up [animation-delay:340ms]">
            <div className="flex items-center">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/67.jpg",
                "https://randomuser.me/api/portraits/women/17.jpg",
              ].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid white",
                    marginLeft: i === 0 ? 0 : -8,
                    display: "block",
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              Trusted by <span className="font-semibold text-ink">40+ founders</span>{" "}
              &amp; executives
            </p>
          </div>
        </div>

        {/* ---- product visual ---- */}
        <div className="animate-pop lg:mx-0 lg:ml-auto lg:scale-[0.88] lg:origin-top">
          <SocialGrowthAnim />
        </div>
      </div>
    </section>
  );
}
