"use client";

import Section from "../Layout/Section";
import Container from "../Layout/Container";
import { useState } from "react";

export default function CTA() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-[#0a0a0a]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Left Column */}
          <div className="text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-neutral-400 text-lg md:text-xl">
              I’m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 rounded-2xl p-10 md:p-12 space-y-6 text-white shadow-lg"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm text-neutral-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="rounded-lg bg-neutral-800 px-4 py-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm text-neutral-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="rounded-lg bg-neutral-800 px-4 py-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="rounded-lg bg-neutral-800 px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E95203] py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </Container>
    </Section>
  );
}
