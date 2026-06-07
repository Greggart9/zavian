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
        className="flex h-fit flex-col bg-[#f2f7fa] px-10 py-10"
      >
        {/* TOP */}
        <div className="w-full bg-[#eef6fa] ">
            <p className="max-w-375 text-[56px] font-thin leading-tight tracking-[-0.04em] text-black">
                For me, photography isn’t just about beautiful images -<br />
                it’s about capturing what words miss: your quiet
                <br />
                strength, freedom, and timeless presence.
            </p>

            <div className="mt-24 border-t border-black/35 pt-5">
                <div className="flex items-center justify-between text-[18px] leading-none text-black/75">
                <p>[ ZAVIAN&quot;S SERVICES ]</p>
                <p>Bold portraits. Editorial frames.</p>
                </div>
            </div>
            </div>

        {/* MIDDLE */}
        <div
          ref={middleRef}
          className="mt-25 flex origin-center flex-col gap-5"
        >

          {/* SERVICE 1 */}
           <div className="service-card flex justify-between bg-[#F2F7FA] gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between">
                        <p className="text-[32px] leading-[38.4px]">Portraits & Headshots</p>
                        <p>[ 1 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Showcase your truest self with clarity. Bold, clean<br /> portraits crafted with cinematic light.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="flex flex-col gap-5">
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
           <div className="service-card flex justify-between bg-[#F2F7FA] gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between">
                        <p className="text-[32px] leading-[38.4px]">Commercial & Branding</p>
                        <p>[ 2 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Stand out with visuals that sell. Product, campaign,<br /> and brand shoots with style.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="flex flex-col gap-5">
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
           <div className="service-card flex justify-between bg-[#F2F7FA] gap-10 p-7.5 border-4 border-white shadow-sm">
            {/* LEFT */}
            <div className="flex flex-col justify-between flex-3">
                <div >
                    <span className="flex justify-between">
                        <p className="text-[32px] leading-[38.4px]">Creative Editorials</p>
                        <p>[ 3 ]</p>
                    </span> 
                    <hr className="border-gray-300 mt-3" />          
                </div>
              <p className="text-[17px] leading-[23.8px] text-gray-500">
                Concept-led shoots with striking mood. Where art <br /> direction meets timeless imagery.
                
              </p>

            </div>

            {/* RIGHT */}
             <div className="flex flex-col gap-5">
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

      </section>
    </>
  );
};

export default Services;