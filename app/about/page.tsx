import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About. Built for Founders Done Being Invisible",
  description:
    "Soch is an organic social media agency for founders and senior executives. We run personal branding, content, community and profile management across every channel, so your presence brings you work.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over hacks",
    body: "The social media services market is full of shortcuts: engagement pods, growth bots, algorithm hacks, and paid boosts dressed up as strategy. They work briefly and erode credibility permanently. Every account Soch runs is built on a genuine point of view, published consistently, without shortcuts and without a dollar spent on ads.",
  },
  {
    icon: "chat",
    title: "Your voice, always",
    body: "We run an interview before writing anything. We study how you explain things, what you believe, where you disagree with the consensus in your industry. The result sounds like you because it starts with you, on every channel we run. We never use templates.",
  },
  {
    icon: "target",
    title: "Outcomes, not vanity",
    body: "We measure success by qualified conversations started, inbound leads generated, and opportunities created. Follower counts and impression numbers appear in every monthly report. They are context, not the goal. The goal is always a business outcome.",
  },
  {
    icon: "spark",
    title: "Partners, not vendors",
    body: "Soch takes a small number of clients at a time, deliberately. We are not a content mill. Every client gets direct access to the people doing the work. If something is not working, we say so. If the channel mix needs changing, we change it. That is what a partner does.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .about-hero { flex-direction: column !important; min-height: unset !important; }
          .about-hero-text { flex: unset !important; width: 100% !important; padding: 48px 24px !important; }
          .about-hero-img-col { min-height: 350px !important; width: 100% !important; flex: unset !important; }
        }
      `}</style>
      <section className="about-hero border-b border-line bg-mist" style={{ display: "flex", alignItems: "flex-start", minHeight: "600px", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="about-hero-text" style={{ flex: "0 0 45%", padding: "40px clamp(16px, 5vw, 80px) 80px clamp(16px, 5vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignSelf: "flex-start" }}>
          <Reveal delay={0}>
            <h1 className="text-display text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
              Built by a practitioner. Built for founders.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">
              Soch is a social media management agency led by Umair Shahzad, an award-winning LinkedIn creator and LinkedIn Top Voice, recognised globally in Venture Capital. We work with founders and senior executives who want their presence, across every channel, to reflect the seriousness of what they are building.
            </p>
          </Reveal>
        </div>
        <div className="about-hero-img-col" style={{ flex: 1, margin: 0, overflow: "hidden", borderRadius: "16px", alignSelf: "flex-start", display: "flex", alignItems: "flex-start" }}>
          <Reveal delay={0.2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="http://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a3237b03252cba28a8ab02c_2%20(2).jpg"
              alt="Soch team"
              style={{ width: "100%", height: "auto", maxHeight: "580px", objectFit: "cover", objectPosition: "center top", display: "block", borderRadius: "16px", margin: 0, padding: 0 }}
            />
          </Reveal>
        </div>
      </section>

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2">The problem we kept seeing</h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most social media services sell posts. They write content, schedule it,
                and call it done, one channel at a time. The problem is that content without
                positioning is noise. A founder can post every day for a year across five
                platforms and still be invisible if the underlying strategy is missing.
              </p>
              <p>
                The founders who build real authority online are not the ones who
                post the most. They are the ones who are clear on what they stand for,
                who they are trying to reach, and why their perspective is worth
                following, consistently, across the channels their buyers actually use.
                That clarity does not come from a content calendar. It comes
                from doing the positioning work first.
              </p>
              <p className="font-medium text-ink">
                Soch was built to do that work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-2xl border border-line bg-cream p-8 sm:p-10">
              <p
                className="text-[1.6rem] leading-snug text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t make you go viral. We make you{" "}
                <span className="text-brand">credible</span>{" "}to the people who can say
                yes.&rdquo;
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-line pt-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  S
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    The Soch team
                  </span>
                  <span className="block text-xs text-muted">
                    Your social media growth partners
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* values - editorial 2-col, dashed dividers, no glossy tiles */}
      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-h2">Principles that shape every account we run.</h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 0.1}
                className={`${i % 2 === 1 ? "sm:border-l sm:border-dashed sm:border-line sm:pl-12" : ""} ${i >= 2 ? "border-t border-dashed border-line pt-10 sm:border-t-0 sm:pt-0" : ""}`}
              >
                <Icon name={v.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
                <h3 className="text-h3 mt-4">{v.title}</h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* founder bio */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* image - replace placeholder with <Image src="/umair.jpg" alt="Umair Shahzad" fill className="object-cover" /> */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-cream">
              <img
                src="https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/694e752108dbf4bfac6a9469_Umair%20co-founder.webp"
                alt="Umair Shahzad"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </Reveal>

          {/* text */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="space-y-4 text-slate">
              <p>
                Umair Shahzad is an award-winning LinkedIn creator recognised as a
                LinkedIn Top Voice, ranked in the top 200 globally in Venture
                Capital. He has built his own presence publicly, with real results,
                and spent years working with founders in high-stakes sectors where
                trust and credibility are not optional.
              </p>
              <p>
                Before starting Soch, Umair managed LinkedIn strategy for founders
                in institutional finance and construction, industries where a single
                poorly placed post can damage relationships built over years. Soch grew
                out of that work: founders kept asking for the same discipline on
                Instagram, X and YouTube that we had already built for LinkedIn. That
                experience shaped the Soch approach: positioning first, content
                second, consistent across channels, always in your voice, always
                pointed at a business outcome.
              </p>
              <p>
                The practitioners who advise on personal brand should have one worth
                examining.
              </p>
            </div>

            {/* credentials */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "LinkedIn Top Voice",
                "Top 200 globally in Venture Capital",
                "Award-winning LinkedIn creator",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-line bg-white px-3 py-1 text-xs font-semibold text-ink"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/consult-with-umair"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-mist px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-mist/70"
            >
              <Icon name="social" className="h-4 w-4 shrink-0" />
              View Umair on LinkedIn
            </a>

            {/* pull quote */}
            <figure className="mt-8 rounded-xl border border-dashed border-line bg-white p-6">
              <p
                className="text-[1.05rem] leading-relaxed text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t make you go viral. We make you{" "}
                <span className="text-brand">credible</span>{" "}to the people who can
                say yes.&rdquo;
              </p>
              <figcaption className="mt-4 flex items-center gap-2.5 border-t border-dashed border-line pt-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  S
                </span>
                <span className="text-xs font-semibold text-ink">
                  The Soch team
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
