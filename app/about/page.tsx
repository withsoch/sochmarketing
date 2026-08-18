import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { BookButton } from "@/components/BookButton";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Soch runs the marketing for restaurants, cafes and shisha lounges — Instagram, Google, reviews and delivery listings, starting with a pilot in Tallinn.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over shortcuts",
    body: "Fake followers, review-bombing your own page, and boosted engagement pods are all shortcuts we don't take. Every account we run is built on real posts, real replies and a real Google listing, done properly, every week.",
  },
  {
    icon: "chat",
    title: "Your voice, in two languages",
    body: "We learn how your venue talks, and write captions in Estonian and English so locals and visitors both feel spoken to. We never publish a template.",
  },
  {
    icon: "target",
    title: "Orders, not vanity",
    body: "Follower counts show up in every report. They are context, not the goal. The goal is always a booked table, a delivery order, or someone walking in because your listing came up first.",
  },
  {
    icon: "spark",
    title: "A small number of venues, done properly",
    body: "We take a limited number of venues at a time, deliberately. If something isn't working — a package, a platform, a listing — we say so and change it, rather than letting it quietly underperform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <span className="eyebrow">About Soch</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display mt-5 text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
                Built for restaurants, not for everyone.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-6 max-w-2xl">
                Most marketing agencies serve everyone — SaaS, e-commerce,
                consultants and restaurants — with the same generic playbook.
                We built Soch around one kind of business: restaurants, cafes
                and shisha lounges, starting with a pilot in Tallinn, because
                a bar or grill needs its Google listing and its Wolt menu
                handled properly, not a content calendar borrowed from a
                software company.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <BookButton variant="primary" size="lg" arrow>
                  Get a quote
                </BookButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2">The problem we kept seeing</h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most social media services sell posts. They write content,
                schedule it, and call it done, one channel at a time. For a
                restaurant, that&apos;s rarely the real bottleneck. The
                bottleneck is a Google listing nobody claimed, reviews nobody
                answered, and a delivery menu with three photos and no
                best-sellers.
              </p>
              <p>
                The venues that fill up are not the ones posting the most.
                They are the ones that are easy to find, that answer their
                reviews the same day, and whose Wolt or Bolt Food listing
                actually sells the menu. That doesn&apos;t come from a
                content calendar alone. It comes from treating Google,
                reviews and delivery apps as seriously as the Instagram feed.
              </p>
              <p className="font-medium text-ink">
                Soch was built to do that work, for restaurants specifically.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-2xl border border-line bg-cream p-8 sm:p-10">
              <p
                className="text-[1.6rem] leading-snug text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t just make your feed look busy. We make you{" "}
                <span className="text-brand">easy to find</span>{" "}
                and easy to order from.&rdquo;
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
                    Your restaurant marketing partners
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
            <h2 className="text-h2">Principles that shape every venue we run.</h2>
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

      {/* why Tallinn first */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Why we started in Tallinn.</h2>
            <p className="lead mt-5">
              We&apos;re piloting Soch with a limited number of restaurants,
              cafes and shisha lounges in Tallinn before expanding further.
              That means closer attention per venue while we prove the
              system, not a generic rollout across a city we don&apos;t know.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
