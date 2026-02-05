'use client';

import Section from "../Layout/Section";
import ColorBends from '@/src/component/Library/ColorBends/ColorBends';
import SplitText from '@/src/component/Library/SplitText/SplitText';
import DecryptedText from '@/src/component/Library/DecryptedText/DecryptedText';
import ShinyText from '@/src/component/Library/Shiny Text/ShinyText';
import TextType from '@/src/component/Library/TextType/TextType'

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <Section id="hero" className="relative min-h-[300px] h-[750px] max-h-screen overflow-hidden " >

      {/* Background – ColorBends */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          rotation={70}
          autoRotate={5}
          speed={0.3}
          scale={1.1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.1}
          transparent
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4 sm:px-6 space-y-6 mt-16">

        {/* Optional ShinyText on top */}
        <ShinyText
          text="Hi There Im Tengku Hanafi"
          speed={1.4}
          delay={0.8}
          color="#ffffff"
          shineColor="#fca311"
          spread={90}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />

        {/* SplitText Headline */}
        <SplitText
          text="Build Clean, Scalable Web Experiences"
          className="text-4xl sm:text-5xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          showCallback
        />
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button
            className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg
            shadow-lg transition-all duration-300
            hover:bg-orange-500 hover:text-white
            hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            View My Project
          </button>

          <button
            className="px-6 py-3 bg-white/10 text-white rounded-lg
            backdrop-blur-md border border-white/30
            transition-all duration-300
            hover:bg-white/20 hover:-translate-y-0.5"
          >
            Contact Me 
          </button>
        </div>

      </div>

    </Section>
  );
}
