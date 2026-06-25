"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../ui/TextReveal";

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
        className="flex h-fit flex-col bg-[#f2f7fa] px-5 py-10 md:px-10 md:py-20"
      >
        {/* TOP */}
        <div className="w-full bg-[#eef6fa] ">
            <TextReveal
              as="p"
              className="max-w-375 text-[30px] font-light leading-tight text-black md:text-[42px] xl:text-[50px]"
            >
              For me, photography isn't just about beautiful images -
              it's about capturing what words miss: your quiet
              strength, freedom, and timeless presence.
            </TextReveal>

            <div className="mt-12 border-t border-black/35 pt-5 md:mt-24">
                <div className="flex flex-col gap-2 text-[15px] leading-[22.5px] text-black/75 md:text-[18px] md:leading-none lg:flex-row lg:items-center lg:justify-between">
                <p>[ ZAVIAN&quot;S SERVICES ]</p>
                <p>Bold portraits. Editorial frames.</p>
                </div>
            </div>
            </div>

        {/* MIDDLE */}
        <div
          ref={middleRef}
          className="mt-12 flex origin-center flex-col gap-5 md:mt-25"
        >

          {/* SERVICE 1 */}
           <div className="service-card flex flex-col justify-between gap-8 border-4 border-white bg-[#F2F7FA] p-5 shadow-sm md:p-7.5 lg:flex-row lg:gap-10">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between gap-4">
                        <p className="text-[26px] leading-8 md:text-[32px] md:leading-[38.4px]">Portraits & Headshots</p>
                        <p>[ 1 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="mt-6 text-[15px] leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px] lg:mt-0">
                Showcase your truest self with clarity. Bold, clean portraits crafted with cinematic light.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-col">
              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[75%_25%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 25.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[90%_10%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 26.png"
                  alt="Service 2"
                />
              </div>
            </div>

           </div>

            {/* SERVICE 2 */}
           <div className="service-card flex flex-col justify-between gap-8 border-4 border-white bg-[#F2F7FA] p-5 shadow-sm md:p-7.5 lg:flex-row lg:gap-10">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between gap-4">
                        <p className="text-[26px] leading-8 md:text-[32px] md:leading-[38.4px]">Commercial & Branding</p>
                        <p>[ 2 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="mt-6 text-[15px] leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px] lg:mt-0">
                Stand out with visuals that sell. Product, campaign, and brand shoots with style.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-col">
              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[75%_25%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 27.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[90%_10%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 28.png"
                  alt="Service 2"
                />
              </div>
            </div>

           </div>

          {/* SERVICE 3 */}
           <div className="service-card flex flex-col justify-between gap-8 border-4 border-white bg-[#F2F7FA] p-5 shadow-sm md:p-7.5 lg:flex-row lg:gap-10">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between gap-4">
                        <p className="text-[26px] leading-8 md:text-[32px] md:leading-[38.4px]">Creative Editorials</p>
                        <p>[ 3 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="mt-6 text-[15px] leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px] lg:mt-0">
                Concept-led shoots with striking mood. Where art direction meets timeless imagery.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-col">
              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[75%_25%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 29.png"
                  alt="Service 1"
                />
              </div>

              <div>
                <Image
                  className="h-30 w-full border-4 border-white object-cover object-[90%_10%] shadow-2xl lg:w-50"
                  width={200}
                  height={120}
                  src="/assets/asset 30.png"
                  alt="Service 2"
                />
              </div>
            </div>

           </div>


        </div>

      </section>
    </>
  );
};

export default Services;
