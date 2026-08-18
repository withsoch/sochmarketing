import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/Icons";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "pin",
    title: "It's 7pm on a Tuesday and half the tables are empty",
    body: "Meanwhile your Google listing still says you closed an hour ago. We claim it, fix the hours, and answer every review within 24 hours, so the next person searching nearby actually finds you open.",
  },
  {
    icon: "image",
    title: "You posted the specials board. Six people liked it.",
    body: "Out of 340 followers. A feed that goes quiet for a week reads as a venue that might have closed. We keep Instagram, Facebook and TikTok posting on a real schedule, in Estonian and English, so it doesn't.",
  },
  {
    icon: "bag",
    title: "Wolt takes 30% of every order and shows three blurry photos",
    body: "That listing is doing half your selling and it's dressed like an afterthought. We rebuild it properly, photo on every dish, best-sellers up top, so browsing turns into an order more often.",
  },
];

export function Positioning() {
  // Flat peach surface, the design system deliberately has no gradients.
  return (
    <section className="bg-peach py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">
            Your customers already picked where to eat. Not always you.
          </h2>
          <p className="lead mt-5">
            They decided on Google, on Instagram, in the Wolt app, before
            they ever walked past your door. We run the profile, the content
            and the listings on those apps, so your venue looks open, active
            and worth choosing.
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
