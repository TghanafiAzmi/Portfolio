'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'About Me', href: '#about-me' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Me', href: '#contact', cta: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full pointer-events-none">
      <div
        className={`flex justify-center px-4 transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-[5px]'
        }`}
      >
        <div
          className={`
            pointer-events-auto
            w-full max-w-[1240px]
            flex items-center justify-between
            rounded-full
            backdrop-blur-xl bg-black/30
            border border-white/10
            shadow-[0_12px_40px_rgba(0,0,0,0.5)]
            transition-all duration-300 ease-out
            ${scrolled ? 'mt-2 px-5 py-2' : 'mt-5 px-6 py-3'}
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            className={`text-white font-semibold tracking-wide transition-all duration-300 ${
              scrolled ? 'text-sm' : 'text-base'
            }`}
          >
            NapiCode.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) =>
              item.cta ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 bg-white text-black rounded-full
                             hover:bg-[#E95203] hover:text-white hover:scale-105
                             transition duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-[#E95203] transition duration-200"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden pointer-events-auto mx-4 mt-3 rounded-2xl
          backdrop-blur-xl bg-black/40 border border-white/10
          shadow-[0_12px_40px_rgba(0,0,0,0.5)]
          transition-all duration-300
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col divide-y divide-white/10">
          {navItems.map((item) =>
            item.cta ? (
              <a
                key={item.label}
                href={item.href}
                onClick={handleClick}
                className="w-full px-6 py-4 bg-[#E95203] text-white rounded-full
                           hover:bg-[#ff7033] transition duration-200"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={handleClick}
                className="px-6 py-4 text-white/80 hover:text-[#E95203]
                           hover:bg-white/5 transition duration-200"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
