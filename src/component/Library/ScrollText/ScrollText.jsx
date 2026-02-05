"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./ScrollText.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Target all the spans (words) inside the container
    const words = el.querySelectorAll(".word");

    gsap.to(words, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      color: "#FFFFFF",    /* Target color: White */
      stagger: 0.1,        /* This creates the 'one by one' effect */
    });
  }, []);

  // Split text by spaces and wrap each word in a span
  const wordsArray = text.split(" ");

  return (
    <div
      ref={containerRef}
      className="scroll-text text-center text-white text-4xl sm:text-5xl leading-snug sm:leading-relaxed max-w-4xl mx-auto mt-10"
    >
      {wordsArray.map((word, i) => (
        <span key={i} className="word">
          {word}{" "}
        </span>
      ))}
    </div>
  );
};

export default ScrollText;
