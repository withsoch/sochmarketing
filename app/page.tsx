import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { PlatformStrip } from "@/components/PlatformStrip";
import { Positioning } from "@/components/Positioning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><LogoMarquee /></Reveal>
      <Reveal><PlatformStrip /></Reveal>
      <Reveal><Positioning /></Reveal>
      <Reveal><ServicesGrid /></Reveal>
      <Reveal><HowWeWork /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><CtaBand /></Reveal>
    </>
  );
}
