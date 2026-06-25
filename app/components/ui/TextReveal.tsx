// components/ui/TextReveal.tsx
"use client";

import { useEffect, useRef } from "react";
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
  as: Tag = "p",
  className = "",
  delay = 0,
  stagger = 0.08,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const el = ref.current;
    if (!el) return;

    let splitInstance: SplitText;
    let animation: gsap.core.Tween;

    document.fonts.ready.then(() => {
      const ctx = gsap.context(() => {
        // Make element visible before splitting (avoids FOUC of unsplit text)
        gsap.set(el, { opacity: 1 });

        splitInstance = SplitText.create(el, {
          type: "lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines", // auto-wraps each line in an overflow-hidden mask
          onSplit: (self) => {
            animation = gsap.from(self.lines, {
              yPercent: 100,
              opacity: 0,
              duration: 1.5,
              delay,
              stagger,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
            return animation;
          },
        });
      }, ref);

      return () => ctx.revert();
    });

    return () => {
      splitInstance?.revert();
    };
  }, [delay, stagger]);

  return (
    <Tag ref={ref as any} className={`opacity-0 ${className}`}>
      {children}
    </Tag>
  );
}