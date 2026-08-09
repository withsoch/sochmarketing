import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/Icons";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Positioning before content",
    body: "If you don't know what you stand for, no amount of posting will fix that. We start with the narrative before we write a single word.",
  },
  {
    icon: "chat",
    title: "Your voice. Your point of view.",
    body: "We study how you think, how you talk, and what you believe. Then we write and produce content that sounds like you, only sharper and more deliberate, on every channel.",
  },
  {
    icon: "target",
    title: "Pipeline, not applause",
    body: "Follower counts don't pay the bills. We measure success by qualified conversations started, inbound leads generated, and opportunities created, never by ad spend.",
  },
];

export function Positioning() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-28"
      style={{
        backgroundColor: "#fcded2",
        backgroundImage:
          "linear-gradient(257deg, hsla(18,84%,90%,0.3) -32.4%, rgba(255,165,129,0.3) -3.42%, rgba(255,73,0,0.3) 23.87%, rgba(251,223,223,0.3) 50.46%, rgba(253,191,219,0.3) 79.15%, rgba(249,57,166,0.3) 103.64%)",
      }}
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">
            Most social agencies sell posts. We build the system behind them.
          </h2>
          <p className="lead mt-5">
            Your buyers are already scrolling somewhere. We handle the branding,
            content and community across every channel that matters, so your
            presence brings you work instead of wasting your time, without a
            dollar spent on ads.
          </p>
        </Reveal>

        {/* pillars as an editorial row, divided by hairlines, not boxes */}
        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-[#1a1a1a]/15 pt-12 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={i > 0 ? "md:border-l md:border-dashed md:border-line md:pl-10" : ""}
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
