'use client';
import { useEffect } from 'react';
import TextPressure from '@/src/component/Library/TextPreassure/TextPressure';
import Container from './Container';

export default function Footer() {
  useEffect(() => {
    // Select all links that point to sections
    const links = document.querySelectorAll('a[href^="#"]');

    const handleScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const target = document.getElementById(targetId!);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    links.forEach(link => link.addEventListener('click', handleScroll));

    // Cleanup on unmount
    return () => {
      links.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="flex flex-col gap-8">

        {/* Top section */}
        <Container className="pt-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/50 text-center sm:text-left">
              © {new Date().getFullYear()} NapiCode. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-[clamp(2.2rem,6vw,4.8rem)] font-light tracking-wide leading-tight text-center sm:text-left">
                LET&apos;S START TO WORK
              </h2>
              <span className="text-4xl sm:text-5xl rotate-90 select-none text-center sm:text-right">
                →
              </span>
            </div>
          </div>
        </Container>

        {/* Divider */}
        <Container>
          <div className="h-px w-full bg-white/15" />
        </Container>

        {/* Info grid */}
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-sm">

            <div>
              <p className="mb-4 text-white/50">[ Navigation ]</p>
              <ul className="space-y-2">
                <li><a href="#about-me" className="hover:text-[#E95203] transition">About</a></li>
                <li><a href="#services" className="hover:text-[#E95203] transition">Services</a></li>
                <li><a href="#projects" className="hover:text-[#E95203] transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-[#E95203] transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-white/50">[ Connect ]</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tghanafi-azmi-172684223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E95203] transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TghanafiAzmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E95203] transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tghanafiazmi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E95203] transition"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/tghanafi.azmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E95203] transition"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-white/50">[ Get in Touch ]</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+60199651820"
                    className="hover:text-[#E95203] transition"
                  >
                    +60 19 965 1820
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tghanafiazmi@gmail.com"
                    className="hover:text-[#E95203] transition"
                  >
                    tghanafiazmi@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-white/50">[ Based In ]</p>
              <p>
                Kuala Lumpur, <br />
                Malaysia
              </p>
            </div>

          </div>
        </Container>

        {/* TextPressure logo */}
        <Container>
          <div className="border-t border-white/10 flex justify-center overflow-hidden">
            <TextPressure
              text="NapiCode."
              flex
              stroke={false}
              width={false}
              weight
              italic
              alpha={false}
              textColor="#ffffff"
              strokeColor="#3b239a"
              minFontSize={36}
              className="w-full text-center tracking-widest"
            />
          </div>
        </Container>

      </div>
    </footer>
  );
}
