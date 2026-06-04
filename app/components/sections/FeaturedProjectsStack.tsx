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

    const ctx = gsap.context(() => {
      const wrapper = sectionRef.current?.querySelector<HTMLElement>(
        ".featured-projects-wrapper"
      );

      const cards = gsap.utils.toArray<HTMLElement>(".featured-project-card");

      if (!wrapper) return;

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        card.style.zIndex = String(index + 1);

        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 0px",
            endTrigger: wrapper,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          });

          gsap.to(card, {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 0px",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="focus-cursor-area no-custom-cursor relative min-h-[420vh] bg-white">
      <div className="featured-projects-wrapper relative flex flex-col gap-24 ">
        {featuredProjects.slice(0, 4).map((project, index) => (
          <div key={index} className="featured-project-card relative">
            <FeaturedProject project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}