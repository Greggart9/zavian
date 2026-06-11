"use client";

import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { CircleCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pricing = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const b = "absolute w-3 h-3 border-custom1";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 1280px)", () => {
        const section = sectionRef.current;
        const left = section?.querySelector<HTMLElement>(".pricing-left");
        const cardsWrapper = section?.querySelector<HTMLElement>(".pricing-cards");
        const cards = gsap.utils.toArray<HTMLElement>(".pricing-card");

        if (!section || !left || !cardsWrapper) return;

        // LEFT SIDE PIN
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: left,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // RIGHT STACKING CARDS
        cards.forEach((card, index) => {
          const isLast = index === cards.length - 1;

          card.style.zIndex = String(index + 1);

          if (!isLast) {
            ScrollTrigger.create({
              trigger: card,
              start: "top 120px",
              endTrigger: cardsWrapper,
              end: "bottom bottom",
              pin: true,
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
            });

            gsap.to(card, {
              scale: 0.88,
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 120px",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        });

        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col gap-10 overflow-hidden bg-white px-5 py-16 md:px-10 md:py-20 xl:min-h-[260vh] xl:flex-row xl:justify-between xl:gap-16"
    >
      {/* LEFT SIDE*/}
      <div className="pricing-left flex w-full flex-col justify-between gap-10 xl:h-[calc(100vh-160px)] xl:w-[calc(100%-44rem)] xl:gap-0">
        {/* TOP */}
        <div>
          <div className="relative inline-flex items-center px-3 mb-4 w-fit">
            <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
            <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
            <span className="text-sm font-light tracking-widest text-gray-700">
              PRICING
            </span>
          </div>

          <div>
            <h1 className="text-[40px] font-light leading-[50px] text-black md:text-[60px] md:leading-[70px] xl:text-[72px] xl:leading-[79.2px]">
              Effortless Booking. <br />{" "}
              <span className="text-custom1">Honest Pricing</span>
            </h1>

            <p className="mt-5 max-w-125 text-[15px] leading-[22.5px] text-gray-700 md:mt-10 md:text-[17px] md:leading-[23.8px] xl:max-w-100">
              Clear packages, honest rates, and results worth every penny. No
              hidden fees, just effortless booking and bold portraits delivered
              fast.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="w-full hidden xl:block">
          <hr className="border-gray-300" />
          <span className="flex justify-between pt-3.5 text-[17px]">
            <p>[ 6 ]</p>
            <p>Photos Worth Every Penny</p>
          </span>
        </div>
      </div>

      {/* RIGHT SIDE - sticky stacked cards */}
      <div className=" pricing-cards relative flex w-full flex-col gap-5 md:gap-8 xl:w-166 xl:gap-24">
        {/* CARD ONE */}
        <div className="pricing-card price-card-lines price-card-lines-light relative min-h-118 w-full border-8 border-white bg-custom1 p-6 text-white shadow-xs md:min-h-128 md:p-10 xl:h-128 xl:w-166">
          <h1 className="text-[28px] leading-[34px] font-medium md:text-[32px] md:leading-[38.4px]">
            Portraits & Headshots
          </h1>
          <p className="text-[17px] leading-6 text-white/65 md:text-[20px] md:leading-6.5">
            Clean, powerful portraits for professionals and creatives.
          </p>
          <p className="flex items-center gap-2 py-4 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px]">
            $490
            <span className="text-[15px] leading-[22.5px]">/ session</span>
          </p>

          <ul className="text-[15px] text-white/75 z-30 gap-1.5 flex flex-col">
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              1-hour studio shoot
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              10 retouched photos
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              Direction & styling guidance
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              Flexible Timings
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              Full gallery access
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck size={15} />
              4-day delivery
            </li>
          </ul>

          <Button
            variant="white"
            href="/contact"
            className="mt-9 w-full text-center z-30 items-center justify-center flex"
          >
            Book Portrait Shoot
          </Button>
        </div>

        {/* CARD TWO */}
        <div className="pricing-card price-card-lines price-card-lines-red relative min-h-118 w-full border-8 border-white bg-[#ebeff2] p-6 text-black shadow-xs md:min-h-128 md:p-10 xl:h-128 xl:w-166">
          <h1 className="text-[28px] leading-[34px] font-medium md:text-[32px] md:leading-[38.4px]">
            Commercial & Branding
          </h1>
          <p className="text-[17px] leading-6 text-gray-700 md:text-[20px] md:leading-6.5">
            Brand-focused shoots for products, teams, and campaigns.
          </p>
          <p className="flex items-center gap-2 py-4 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px]">
            $1250
            <span className="text-[15px] leading-[22.5px]">/ session</span>
          </p>

          <ul className="text-[15px] text-gray-700 z-30 gap-1.5 flex flex-col">
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              2-hour shoot
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Product & team shots
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              20 retouched photos
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Lighting & set styling
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Full gallery access
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              4-day delivery
            </li>
          </ul>

          <Button
            variant="black"
            href="/contact"
            className="mt-9 w-full text-center z-30 items-center justify-center flex"
          >
            Book Portrait Shoot
          </Button>
        </div>

        {/* CARD THREE */}
        <div className="pricing-card price-card-lines price-card-lines-red relative min-h-118 w-full border-8 border-white bg-[#ebeff2] p-6 text-black shadow-xs md:min-h-128 md:p-10 xl:h-128 xl:w-166">
          <h1 className="text-[28px] leading-[34px] font-medium md:text-[32px] md:leading-[38.4px]">
            Creative Editorials
          </h1>
          <p className="text-[17px] leading-6 text-gray-700 md:text-[20px] md:leading-6.5">
            Concept-driven editorial shoots with bold styling.
          </p>
          <p className="flex items-center gap-2 py-4 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px]">
            $2200
            <span className="text-[15px] leading-[22.5px]">/ session</span>
          </p>

          <ul className="text-[15px] text-black/75 z-30 gap-1.5 flex flex-col">
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              4-hour shoot
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Concept & art direction
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              100 retouched photos
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Cinematic lighting & styling
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              Full gallery access
            </li>
            <li className="flex gap-1 items-center">
              <CircleCheck className="text-custom1" size={15} />
              5-day delivery
            </li>
          </ul>

          <Button
            variant="black"
            href="/contact"
            className="mt-9 w-full text-center z-30 items-center justify-center flex"
          >
            Book Portrait Shoot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
