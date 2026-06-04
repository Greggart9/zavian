"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          scale: 0.92,
          y: 20,
        },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <>
      <section
        ref={sectionRef}
    className="flex h-fit flex-col bg-[#ebeff2] px-10 py-20"
      >
        {/* TOP */}
        <div>
          <p className="w-325 text-[60px] font-thin leading-17.25">
            I create bold <span className="text-custom1">portraits</span>,
            editorial <span className="text-custom1">headshots</span>, and{" "}
            <span className="text-custom1">cinematic event</span> coverage
            capturing real emotion with lighting and style that feel powerful,
            timeless, and true to who you are.
          </p>
        </div>

        {/* MIDDLE */}
        <div
          ref={middleRef}
          className="mt-20 flex origin-center flex-col gap-5"
        >
          {/* SERVICE 1 */}
          <div className="service-card flex justify-between items-center bg-[#F2F7FA] h-45 gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-[2.2] flex-col gap-3">
              <span className="flex justify-between">
                <p className="text-[32px] leading-[38.4px]">
                  Portraits & Headshots
                </p>
                <p>[ 1 ]</p>
              </span>

              <hr className="border-gray-300" />

              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Showcase your truest self with clarity. Bold, clean
                <br /> portraits crafted with cinematic light.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 gap-5">
              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 25.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 26.png"
                  alt="Service 2"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="service-card flex justify-between items-center bg-[#F2F7FA] h-45 gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-[2.2] flex-col gap-3">
              <span className="flex justify-between">
                <p className="text-[32px] leading-[38.4px]">
                  Commercial & Branding
                </p>
                <p>[ 2 ]</p>
              </span>

              <hr className="border-gray-300" />

              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Stand out with visuals that sell. Product, campaign,
                <br /> and brand shoots with style.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 gap-5">
              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 27.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 28.png"
                  alt="Service 2"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="service-card flex justify-between items-center bg-[#F2F7FA] h-45 gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-[2.2] flex-col gap-3">
              <span className="flex justify-between">
                <p className="text-[32px] leading-[38.4px]">
                  Creative Editorials
                </p>
                <p>[ 3 ]</p>
              </span>

              <hr className="border-gray-300" />

              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Concept-led shoots with striking mood. Where art
                <br /> direction meets timeless imagery.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 gap-5">
              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 29.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 30.png"
                  alt="Service 2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10">
          <hr className="border-gray-300" />

          <span className="flex justify-between pt-3.5 text-[17px]">
            <p>[ 1 ]</p>
            <p>Explore Zavian's Services</p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Services;