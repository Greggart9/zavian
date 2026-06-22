// components/sections/FeaturedProjectCard.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import type { FeaturedProject } from "@/data/types/featuredProjects";

export default function FeaturedProjectCard({
  project,
}: {
  project: FeaturedProject;
}) {
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const bgImage = bgImageRef.current;

    if (!section || !bgImage) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile: show the image normally without ScrollTrigger animation.
      mm.add("(max-width: 767px)", () => {
        gsap.set(bgImage, {
          scale: 1,
          clearProps: "transform",
        });
      });

      // Tablet and desktop: run the one-time zoom-out effect.
      mm.add("(min-width: 768px)", () => {
        gsap.set(bgImage, {
          scale: 1.65,
          transformOrigin: "center center",
        });

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 35%",
          once: true,
          invalidateOnRefresh: true,

          onEnter: () => {
            gsap.to(bgImage, {
              scale: 1,
              duration: 3,
              ease: "power3.out",
            });
          },
        });

        return () => {
          trigger.kill();
        };
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const getThumbClassName = (id: number) => {
    const isHovered = hoveredThumb === id;
    const isOther = hoveredThumb !== null && !isHovered;

    if (isHovered) {
      return "z-10 -translate-y-3 scale-150 rotate-0";
    }

    if (isOther) {
      const tiltAway: Record<number, string> = {
        1: "z-[1] scale-[0.92] -rotate-12",
        2: "z-[1] scale-[0.92] -rotate-4",
        3: "z-[1] scale-[0.92] rotate-[14deg]",
      };

      return tiltAway[id] ?? "z-[1] scale-[0.92]";
    }

    const restingState: Record<number, string> = {
      1: "z-[1] rotate-0",
      2: "z-[2] rotate-0",
      3: "z-[3] rotate-0",
    };

    return restingState[id] ?? "z-[1] rotate-0";
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* MAIN BACKGROUND IMAGE */}
        <div
          ref={bgImageRef}
          className="absolute inset-0 z-0"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="black-glow pointer-events-none absolute inset-0 z-10" />

        {/* CONTENT */}
        <div className="relative z-50 flex min-h-screen w-full flex-col justify-between px-5 py-10 md:px-10 lg:py-20">
          {/* TOP */}
          <div className="flex w-full flex-col justify-between md:h-27 lg:h-29.25">
            <span className="w-fit bg-red-800 px-2 py-1 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-4px_12px_rgba(0,0,0,0.35)]">
              {project.category}
            </span>

            <h1 className="mt-5 text-[30px] leading-tight text-white/90 md:mt-0 md:text-[45px] lg:text-[60px] lg:leading-17">
              {project.title}
            </h1>
          </div>

          {/* BOTTOM */}
          <div className="mt-auto pt-10 md:pt-0">
            <div className="flex flex-col-reverse justify-between gap-7 xl:flex-row">
              {/* LEFT */}
              <div>
                <p className="text-[16px] leading-6 text-white/90 md:w-125 md:text-[20px] md:leading-7 lg:text-[25px]">
                  {project.description}
                </p>

                <Button
                  href={project.href}
                  variant="white"
                  className="mt-4"
                >
                  View Project
                </Button>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-end pb-5 xl:items-end xl:pb-0">
                <span className="hidden text-[20px] tracking-widest text-white xl:inline-flex">
                  {project.shotCount}
                </span>

                <div
                  className="flex gap-3 xl:mt-5"
                  onMouseLeave={() => setHoveredThumb(null)}
                >
                  {project.thumbnails.map((thumb) => (
                    <div
                      key={thumb.id}
                      className={`relative h-18 w-18 overflow-hidden border-3 border-white/80 transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] xl:h-22.5 xl:w-22.5 ${getThumbClassName(
                        thumb.id
                      )}`}
                      onMouseEnter={() => setHoveredThumb(thumb.id)}
                    >
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        sizes="(max-width: 1279px) 72px, 90px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER DETAILS */}
            <div className="pt-5 text-white/90 md:pt-10">
              <hr className="border-white/50" />

              <div className="flex justify-between gap-4 pt-3 text-sm md:text-base">
                <p>[ {project.date} ]</p>
                <p className="text-right">{project.credit}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}