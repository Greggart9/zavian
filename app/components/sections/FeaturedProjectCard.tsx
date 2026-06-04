// components/sections/FeaturedProjectCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { featuredProjects } from "@/data/types/featuredProjects";

export default function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const getThumbStyle = (id: number) => {
    const isHovered = hoveredThumb === id;
    const isOther = hoveredThumb !== null && !isHovered;

    const restingAngles: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
    const tiltAway: Record<number, number> = { 1: -12, 2: -4, 3: 14 };

    if (isHovered) return {
      transform: "scale(1.5) rotate(0deg) translateY(-12px)",
      zIndex: 10,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };

    if (isOther) return {
      transform: `scale(0.92) rotate(${tiltAway[id]}deg)`,
      zIndex: 1,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };

    return {
      transform: `rotate(${restingAngles[id]}deg)`,
      zIndex: id,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-screen">

        {/* Background Image */}
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="100vw"
          priority
          className="object-cover -z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full black-glow pointer-events-none -z-10" />

        {/* Content */}
        <div className="relative z-150 px-10 py-20 flex flex-col justify-between w-full h-full">

          {/* TOP */}
          <div className="h-29.25 w-full flex flex-col justify-between">
            <span className=" w-fit px-2 py-1  text-white text-[15px] bg-red-800 text-center
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-4px_12px_rgba(0,0,0,0.35)]">
              {project.category}
            </span>
            <h1 className="text-white/90 text-[60px] leading-17">{project.title}</h1>
          </div>

          {/* BOTTOM */}
          <div>

            {/* FIRST BOTTOM */}
            <div className="flex justify-between">

              {/* LEFT */}
              <div>
                <p className="text-white/90 text-[25px] leading-7 w-125">
                  {project.description}
                </p>
                <Button href={project.href} variant="white" className="px-6 py-3 mt-4">
                  View Project
                </Button>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-end items-end">
                <span className="text-white text-[18px] tracking-widest">
                  {project.shotCount}
                </span>

                {/* Stacked thumbnails */}
                <div className="flex gap-3 mt-5" onMouseLeave={() => setHoveredThumb(null)}>
                  {project.thumbnails.map((thumb) => (
                    <div
                      key={thumb.id}
                      className="relative w-22.5 h-22.5 overflow-hidden border-3 border-white/80"
                      style={{ ...getThumbStyle(thumb.id) }}
                      onMouseEnter={() => setHoveredThumb(thumb.id)}
                    >
                      <Image src={thumb.src} alt={thumb.alt} fill sizes="90px" className="object-cover" />
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