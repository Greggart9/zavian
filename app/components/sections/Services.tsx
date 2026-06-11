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
        className="flex h-fit flex-col bg-[#f2f7fa] px-5 md:px-10 py-10 md:py-20"
      >
        {/* TOP */}
        <div>
          <p className="lx:w-325 text-[38px] md:text-[48px] lg:text-[56px] font-light leading-13 md:leading-15 lg:leading-17.25">
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
          className=" mt-10 md:mt-20 flex origin-center flex-col gap-5"
        >
          {/* SERVICE 1 */}
          <div className="service-card flex flex-col md:flex-row justify-between items-center bg-[#F2F7FA] lg:h-45 gap-10 p-5 lg:p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex md:justify-between  md:w-[60%] lg:flex-[2.2] md:h-60 lg:h-fit flex-col gap-3">
              <div>
              <span className="flex justify-between">
                <p className="text-[20px] md:text-[32px] leading-[38.4px]">
                  Portraits & Headshots
                </p>
                <p >[ 1 ]</p>
              </span>

              <hr className="border-gray-300 mt-2" />
              </div>

              <p className="text-[17px] leading-[23.8px] text-gray-700  ">
                Showcase your truest self with clarity. Bold, clean
                 portraits crafted with cinematic light.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row md:ml-20 md:w-[40%] justify-between md:flex-col   lg:flex-row md:flex-1 gap-5">
              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 25.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 26.png"
                  alt="Service 2"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="service-card flex flex-col md:flex-row justify-between items-center bg-[#F2F7FA] lg:h-45 gap-10 p-5 lg:p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex md:justify-between  md:w-[60%] lg:flex-[2.2] md:h-60 lg:h-fit flex-col gap-3">
              <div>
              <span className="flex justify-between">
                <p className="text-[20px] md:text-[32px] leading-[38.4px]">
                  Commercial & Branding
                </p>
                <p >[ 2 ]</p>
              </span>

              <hr className="border-gray-300 mt-2" />
              </div>

              <p className="text-[17px] leading-[23.8px] text-gray-700  ">
                Stand out with visuals that sell. Product, campaign,
                 and brand shoots with style.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row md:ml-20 md:w-[40%] justify-between md:flex-col   lg:flex-row md:flex-1 gap-5">
              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 27.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 28.png"
                  alt="Service 2"
                />
              </div>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="service-card flex flex-col md:flex-row justify-between items-center bg-[#F2F7FA] lg:h-45 gap-10 p-5 lg:p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex md:justify-between  md:w-[60%] lg:flex-[2.2] md:h-60 lg:h-fit flex-col gap-3">
              <div>
              <span className="flex justify-between">
                <p className="text-[20px] md:text-[32px] leading-[38.4px]">
                  Creative Editorials
                </p>
                <p >[ 3 ]</p>
              </span>

              <hr className="border-gray-300 mt-2" />
              </div>

              <p className="text-[17px] leading-[23.8px] text-gray-700  ">
                Concept-led shoots with striking mood. Where art
                 direction meets timeless imagery.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row md:ml-20 md:w-[40%] justify-between md:flex-col   lg:flex-row md:flex-1 gap-5">
              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[75%_25%] shadow-2xl"
                  width={200}
                  height={120}
                  src="/assets/asset 29.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className=" h-45 w-50 md:h-30 md:w-50 border-4 border-white object-cover object-[90%_10%] shadow-2xl"
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