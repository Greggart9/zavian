"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProject from "./FeaturedProjectCard";
import { featuredProjects } from "@/data/types/featuredProjects";

export default function FeaturedProjectsStack() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      // Run the stacking effect only on tablets and desktops.
      matchMedia.add("(min-width: 768px)", () => {
        const wrapper = section.querySelector<HTMLElement>(
          ".featured-projects-wrapper"
        );

        const cards = gsap.utils.toArray<HTMLElement>(
          ".featured-project-card",
          section
        );

        if (!wrapper || cards.length === 0) return;

        cards.forEach((card, index) => {
          const isLastCard = index === cards.length - 1;

          card.style.zIndex = String(index + 1);

          // Let the last card scroll normally.
          if (isLastCard) return;

          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: wrapper,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          gsap.to(card, {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => {
        matchMedia.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="focus-cursor-area no-custom-cursor relative bg-white md:min-h-[420vh]"
    >
      <div className="featured-projects-wrapper relative flex flex-col gap-0 md:gap-24">
        {featuredProjects.slice(0, 4).map((project, index) => (
          <div
            key={project.id ?? index}
            className="featured-project-card relative min-h-screen md:h-auto"
          >
            <FeaturedProject project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}