'use client';
import TextPressure from '@/src/component/Library/TextPreassure/TextPressure';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Parent container with consistent vertical spacing */}
      <div className="flex flex-col gap-8">

      <Container className="pt-12">
        <div className="flex flex-col gap-4">
          {/* Top label */}
          <p className="text-xs uppercase tracking-widest text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} NapiCode. All rights reserved.
          </p>

          {/* Heading row */}
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

        {/* 3️⃣ Divider */}
        <Container>
          <div className="h-px w-full bg-white/15" />
        </Container>

        {/* 4️⃣ Info grid */}
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-sm ">
            <div>
              <p className="mb-4 text-white/50">[ Navigation ]</p>
              <ul className="space-y-2">
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-white/50">[ Connect ]</p>
              <ul className="space-y-2">
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-white/50">[ Get in Touch ]</p>
              <ul className="space-y-2">
                <li>+60 19 965 1820</li>
                <li>tghanafiazmi@gmail.com</li>
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

        {/* 5️⃣ TextPressure logo row */}
        <Container>
          <div className="border-t border-white/10 flex justify-center overflow-hidden">
            <TextPressure
              text="NapiCode."
              flex
              stroke ={false}
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
