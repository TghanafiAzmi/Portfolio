import Section from "../Layout/Section";
import Container from "../Layout/Container";

export default function CTA() {
  return (
    <Section id="contact" className="bg-[#0a0a0a] "> {/* Increased top/bottom padding */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in Touch
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.  
              Fill out the form, and I’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <form className="bg-neutral-900 rounded-2xl p-10 md:p-12 space-y-6 text-white shadow-lg">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="rounded-lg bg-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#E95203] placeholder:text-neutral-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="rounded-lg bg-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#E95203] placeholder:text-neutral-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-medium text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                className="rounded-lg bg-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#E95203] placeholder:text-neutral-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E95203] hover:bg-[#ff7033] transition-colors py-3 rounded-xl font-semibold text-white"
            >
              Send Message
            </button>
          </form>

        </div>
      </Container>
    </Section>
  );
}
