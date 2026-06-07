"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";

const awards = [
  {
    id: "01",
    title: "LensCrafters Portrait Excellence Award",
    year: "2025",
    image: "/assets/asset 25.png",
  },
  {
    id: "02",
    title: "Nordic Light Photo Festival Winner",
    year: "2023",
    image: "/assets/asset 26.png",
  },
  {
    id: "03",
    title: "Visionary Frames International Award",
    year: "2021",
    image: "/assets/asset 27.png",
  },
  {
    id: "04",
    title: "Monochrome Masterpiece Award",
    year: "2019",
    image: "/assets/asset 28.png",
  },
];

export default function AwardsHoverList() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(awards[0].image);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const preview = previewRef.current;
    if (!preview) return;

    gsap.set(preview, {
      autoAlpha: 0,
      scale: 0.92,
      xPercent: 0,
      yPercent: -50,
    });

    const setX = gsap.quickTo(preview, "x", {
      duration: 0.35,
      ease: "power3.out",
    });

    const setY = gsap.quickTo(preview, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const movePreview = (e: MouseEvent) => {
      setX(e.clientX -20);
      setY(e.clientY -50);
    };

    const rows = document.querySelectorAll<HTMLElement>(".award-row");

    rows.forEach((row) => {
      const image = row.dataset.image;

      row.addEventListener("mouseenter", (e) => {
        if (image) setActiveImage(image);

        gsap.to(preview, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.18,
          ease: "power2.out",
        });

        movePreview(e as MouseEvent);
        document.addEventListener("mousemove", movePreview);
      });

      row.addEventListener("mouseleave", () => {
        gsap.to(preview, {
          autoAlpha: 0,
          scale: 0.92,
          duration: 0.18,
          ease: "power2.out",
        });

        document.removeEventListener("mousemove", movePreview);
      });
    });

    return () => {
      document.removeEventListener("mousemove", movePreview);
    };
  }, [isMounted]);

  return (
    <section className="relative w-full bg-[#eef6fa] px-10 py-20 no-custom-cursor flex justify-between items-center">

    <div className="w-full max-w-187.5">
      <div className=" ">
        {awards.map((award) => (
          <div
            key={award.id}
            data-image={award.image}
            className="award-row flex h-26 cursor-pointer items-center justify-between border-t border-black/15 text-black/75 last:border-b"
          >
            <div className="flex items-center gap-6 ">
              <span className="text-[20px] leading-6.5 tracking-wide">
                [ {award.id} ]
              </span>

              <h3 className="text-[25px] font-normal leading-7.5">
                {award.title}
              </h3>
            </div>

            <span className="text-[20px] leading-6.5">{award.year}</span>
          </div>
        ))}
      </div>

      {/* ONE GLOBAL HOVER IMAGE */}
      {isMounted &&
        createPortal(
          <div
            ref={previewRef}
            className="pointer-events-none fixed left-0 top-0 z-999999 h-47.5 w-47.5 overflow-hidden  opacity-0 shadow-2xl"
          >
            <Image
              src={activeImage}
              alt=""
              fill
              sizes="200px"
              className="object-cover "
            />
          </div>,
          document.body
        )}
    </div>

    <div className="relative w-145 h-93.75 border-4 border-white shadow-2xl">
        <Image 
        src="/assets/asset 51.png"
        alt=""
        sizes="375px"
        className="object-cover"
         fill
         
         />
     </div>

    </section>
  );
}