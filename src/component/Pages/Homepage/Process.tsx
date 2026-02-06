'use client'
import Section from "../Layout/Section";
import Container from "../Layout/Container";
import MagicBento from "@/src/component/Library/MagicBento/MagicBento";
import ShinyText from '@/src/component/Library/Shiny Text/ShinyText';

export default function Process() {
  return (
    <Section id = "services" >
      <Container>

      <Container className="flex justify-center pb-8">
        <ShinyText
          text="~ What I Can Do ~"
          speed={1.8}
          delay={0.8}
          color="#ffffff"
          shineColor="#FCA311"
          spread={90}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-center text-xl sm:text-4xl font-bold"
        />
      </Container>

        {/* MagicBento effect */}
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={400}
          particleCount={12}
          glowColor="233, 82, 3"
          disableAnimations={false}
        />

      </Container>
      <div className="w-full h-px bg-white/20 mt-16 "></div>
    </Section>
  );
}
