// src/components/home/Showcase.tsx
'use client';

import Section from "../Layout/Section";
import Container from "../Layout/Container";
import CircularGallery from "@/src/component/Library/CircularGallery/CircularGallery";

  const galleryItems = [
    { image: '/assets/Photos/g1.png', text: 'Power Cool' },
    { image: '/assets/Photos/g2.png', text: '5RS' },
    { image: '/assets/Photos/g3.png', text: 'Multico' },
    { image: '/assets/Photos/g4.png', text: 'Recca Holdings' },
    { image: '/assets/Photos/g5.png', text: 'Markerry Manufacturing' },
    { image: '/assets/Photos/g6.png', text: 'Complete Delight' },
    { image: '/assets/Photos/g7.png', text: 'Traderpreneur Xcellence' },
    { image: '/assets/Photos/g8.png', text: 'Brief Academy' },
    { image: '/assets/Photos/g9.png', text: 'Solaroo System' },
    { image: '/assets/Photos/g10.png', text: 'Double Class' },
    { image: '/assets/Photos/g11.png', text: 'Easyspad' },
    { image: '/assets/Photos/g12.png', text: 'GSE M Technology' },
    { image: '/assets/Photos/g13.png', text: 'Home IHC' },
    { image: '/assets/Photos/g14.png', text: 'IG Premium' },
    { image: '/assets/Photos/g15.png', text: 'Institute Darul Uloom' },
    { image: '/assets/Photos/g16.png', text: 'K3V Real Estate' },
    { image: '/assets/Photos/g17.png', text: 'KL Bar Committee' },
    { image: '/assets/Photos/g18.png', text: 'Language Solutions' },
    { image: '/assets/Photos/g19.png', text: 'Leader Autopart' },
    { image: '/assets/Photos/g20.png', text: 'Magister' },
    { image: '/assets/Photos/g21.png', text: 'Mattex' },
    { image: '/assets/Photos/g22.png', text: 'Medik-Link' },
    { image: '/assets/Photos/g23.png', text: 'Muaz Force' },
    { image: '/assets/Photos/g24.png', text: 'Prestar Marketing' },
    { image: '/assets/Photos/g25.png', text: 'Dr Cermin' },
    { image: '/assets/Photos/g26.png', text: 'St John' },
    { image: '/assets/Photos/g27.png', text: 'Trio Sales' },
    { image: '/assets/Photos/g28.png', text: 'Wasser Works' },
    { image: '/assets/Photos/g29.png', text: 'WWM Travel' },
    { image: '/assets/Photos/g30.png', text: 'Xpel' },
  ];

export default function Showcase() {
  return (
    <Section id="projects" className="relative bg-[#0a0a0a]">

      {/* 🔹 Top container (text + button) */}
      <Container className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Explore My Work
        </h2>

        <p className="text-white/70 max-w-xl mx-auto">
          Here are some of my projects, showcasing my skills in front-end development and design.
        </p>

        <button
          className="px-6 py-3 bg-[#E95203] text-white rounded-lg
          hover:bg-[#ff7033] transition-all duration-300"
        >
          View All Projects
        </button>
      </Container>

      {/* 🔹 Bottom container (gallery) */}
      <Container className="">
        <div className="relative w-full h-[600px]">
          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </Container>
    <div className="w-full h-px bg-[#252525]  "></div>
    </Section>
  );
}
