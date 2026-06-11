// components/sections/FeaturedProjectCard.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import type { FeaturedProject } from "@/data/types/featuredProjects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectCard({
  project,
}: {
  project: FeaturedProject;
}) {
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!sectionRef.current || !bgImageRef.current) return;

  const section = sectionRef.current;
  const bgImage = bgImageRef.current;

  const ctx = gsap.context(() => {
    gsap.set(bgImage, {
      scale: 1.65,
      transformOrigin: "center center",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 35%",
      once: true,

      onEnter: () => {
        gsap.to(bgImage, {
          scale: 1,
          duration: 3,
          ease: "power3.out",
        });
      },
    });
  }, section);

  return () => ctx.revert();
}, []);

  const getThumbStyle = (id: number) => {
    const isHovered = hoveredThumb === id;
    const isOther = hoveredThumb !== null && !isHovered;

    const restingAngles: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
    const tiltAway: Record<number, number> = { 1: -12, 2: -4, 3: 14 };

    if (isHovered) {
      return {
        transform: "scale(1.5) rotate(0deg) translateY(-12px)",
        zIndex: 10,
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    }

    if (isOther) {
      return {
        transform: `scale(0.92) rotate(${tiltAway[id]}deg)`,
        zIndex: 1,
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    }

    return {
      transform: `rotate(${restingAngles[id]}deg)`,
      zIndex: id,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with GSAP One-Time Zoom Out */}
        <div ref={bgImageRef} className="absolute inset-0 -z-10 scale-[1.35]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full black-glow pointer-events-none -z-10" />

        {/* Content */}
        <div className="relative z-150 px-5 md:px-10 py-10 lg:py-20 flex flex-col justify-between w-full h-full">
          {/* TOP */}
          <div className=" md:h-27 lg:h-29.25 w-full flex flex-col justify-between">
            <span className="w-fit px-2 py-1 text-white text-[15px] bg-red-800 text-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-4px_12px_rgba(0,0,0,0.35)]">
              {project.category}
            </span>

            <h1 className="text-white/90 text-[30px] md:text-[45px] lg:text-[60px] leading-17">
              {project.title}
            </h1>
          </div>

          {/* BOTTOM */}
          <div>
            {/* FIRST BOTTOM */}
            <div className="flex flex-col-reverse xl:flex-row justify-between">
              {/* LEFT */}
              <div>
                <p className="text-white/90 text-[16px] md:text-[20px] lg:text-[25px] md:leading-7 md:w-125">
                  {project.description}
                </p>

                <Button
                  href={project.href}
                  variant="white"
                  className=" mt-4"
                >
                  View Project
                </Button>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-end xl:items-end mb-5 xl:mb-0">
                <span className="text-white text-[20px] tracking-widest hidden xl:inline-flex">
                  {project.shotCount}
                </span>

                {/* Stacked thumbnails */}
                <div
                  className="flex gap-3 mt-5"
                  onMouseLeave={() => setHoveredThumb(null)}
                >
                  {project.thumbnails.map((thumb) => (
                    <div
                      key={thumb.id}
                      className="relative w-[72px] xl:w-[90px] h-[72px] xl:h-[90px] overflow-hidden border-3 border-white/80"
                      style={{ ...getThumbStyle(thumb.id) }}
                      onMouseEnter={() => setHoveredThumb(thumb.id)}
                    >
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECOND BOTTOM */}
            <div className="pt-10 text-white/90">
              <hr />

              <div className="flex justify-between pt-3">
                <p>[ {project.date} ]</p>
                <p>{project.credit}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}