"use client";

import Section from "../Layout/Section";
import Container from "../Layout/Container";
import ScrollText from '@/src/component/Library/ScrollText/ScrollText';
import LogoLoop from "@/src/component/Library/LogoLoop/LogoLoop";
import ShinyText from '@/src/component/Library/Shiny Text/ShinyText';
import ImageTrail from '@/src/component/Library/ImageTrail/ImageTrail';
import StarBorder from '@/src/component/Library/StarBorder/StarBorder';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiFigma, 
  SiAdobephotoshop, 
  SiAdobeillustrator 
} from "react-icons/si";

// Images
const imageItems: string[] = [
  '/assets/Photos/p1.jpg',
  '/assets/Photos/p2.jpg',
  '/assets/Photos/p3.jpg',
  '/assets/Photos/p4.jpg',
  '/assets/Photos/p5.jpg',
  '/assets/Photos/p6.jpg',
];

// Tech logos
const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiPython />, title: "Python" },
  { node: <SiCplusplus />, title: "C++" },
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiCss3 />, title: "CSS" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiAdobephotoshop />, title: "Photoshop" },
  { node: <SiAdobeillustrator />, title: "Illustrator" },
];

export default function ScrollSection() {
  return (
    <Section id="about-me" className="relative bg-[#0a0a0a]">

      {/* Logo loop / marquee */}
      <div className="w-full overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Technology partners"
        />
      </div>

      {/* Divider line */}
      <div className="w-full h-px bg-white/20 mt-10"></div>

      <Container className="flex flex-col items-center pt-20 gap-10">

        {/* Shiny Text */}
        <ShinyText
          text="~ About Me ~"
          speed={1.8}
          delay={0.8}
          color="#ffffff"
          shineColor="#FCA311"
          spread={90}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-center text-xl sm:text-2xl font-bold"
        />

        {/* Scrollable Text */}
        <ScrollText
          text={`Hi, I’m Tengku Hanafi, a UI/UX designer passionate about creating modern, responsive websites and digital experiences. I focus on intuitive interfaces and seamless interactions while continuously expanding my skills in front-end development to bring ideas to life.`}
        />

        {/* ImageTrail with Star Border */}
        <StarBorder
          as="div"
          color="#FCA311"
          speed="3s"
          className="block w-full rounded-2xl"
          thickness={5}
        >
          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[400px] overflow-hidden rounded-2xl">

            {/* ImageTrail component */}
            <div className="absolute inset-0">
              <ImageTrail
                items={imageItems as any}  
                variant={3}
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="text-white/70 text-2xl sm:text-3xl font-bold animate-pulse">
                Hover Me
              </span>
            </div>

          </div>
        </StarBorder>

      </Container>

    </Section>
  );
}
