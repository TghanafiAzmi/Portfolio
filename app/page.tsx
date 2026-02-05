// src/app/page.tsx

import Hero from "@/src/component/Pages/Homepage/Hero";
import Process from "@/src/component/Pages/Homepage/Process";
import Showcase from "@/src/component/Pages/Homepage/Showcase";
import CTA from "@/src/component/Pages/Homepage/CTA";
import Scroll from "@/src/component/Pages/Homepage/Scroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Scroll/>
      <Process />
      <Showcase />
      <CTA />
    </>
  );
}
