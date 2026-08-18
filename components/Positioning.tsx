import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/Icons";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "pin",
    title: "Found on Google, first",
    body: "Most people decide where to eat by searching nearby, not by scrolling. We build and run your Google Business Profile so you're the one they find, and every review gets a reply within 24 hours.",
  },
  {
    icon: "image",
    title: "Look active, every week",
    body: "A quiet feed reads as a closed venue. We keep Instagram, Facebook and TikTok posting on a real schedule, with photos and video produced for you, in Estonian and English.",
  },
  {
    icon: "bag",
    title: "Orders, not just likes",
    body: "If you take delivery orders, your Wolt or Bolt Food listing is doing half your selling. We rebuild it properly and keep it current, so browsing turns into an order.",
  },
];

export function Positioning() {
  // Flat peach surface — the design system deliberately has no gradients.
  return (
    <section className="bg-peach py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">
            Most agencies sell posts. We build the system behind them.
          </h2>
          <p className="lead mt-5">
            Your customers are already deciding where to eat — on Google, on
            Instagram, in the Wolt app. We handle the profile, the content and
            the listings on the platforms they actually use, so your venue
            looks active and easy to find.
          </p>
        </Reveal>

        {/* pillars as an editorial row, divided by hairlines, not boxes */}
        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-ink/15 pt-12 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={i > 0 ? "md:border-l md:border-dashed md:border-ink/15 md:pl-10" : ""}
            >
              <Icon name={p.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
              <h3 className="text-h3 mt-4">{p.title}</h3>
              <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
