// components/ui/TextReveal.tsx
"use client";

import { createElement, useEffect, useRef, type JSX } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type TextRevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function TextReveal({
  children,
  as = "p",
  className = "",
  delay = 0,
  stagger = 0.08,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const el = ref.current;
    if (!el) return;

    let splitInstance: SplitText;

    document.fonts.ready.then(() => {
      const ctx = gsap.context(() => {
        gsap.set(el, { opacity: 1 });

        splitInstance = SplitText.create(el, {
          type: "lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
          onSplit: (self) => {
            return gsap.from(self.lines, {
              yPercent: 100,
              opacity: 0,
              duration: 0.7,
              delay,
              stagger,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          },
        });
      }, ref);

      return () => ctx.revert();
    });

    return () => {
      splitInstance?.revert();
    };
  }, [delay, stagger]);

  return createElement(
    as,
    { ref, className: `opacity-0 ${className}` },
    children
  );
}