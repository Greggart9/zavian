
import React from 'react'
import Image from "next/image";
import Button from "../ui/Button";

const Slide = () => {

const topImages = [
  "/assets/asset 49.png",
  "/assets/asset 50.png",
  "/assets/asset 51.png",
  "/assets/asset 52.png",
  "/assets/asset 47.png",
  "/assets/asset 48.png",
];

const bottomImages = [
  "/assets/asset 52.png",
  "/assets/asset 27.png",
  "/assets/asset 53.png",
  "/assets/asset 28.png",
  "/assets/asset 54.png",
];

  const b = "absolute h-3 w-3 border-custom1";

  return (
    <section className="relative w-full overflow-hidden bg-[#eef6fa]">
      {/* IMAGE MARQUEE AREA */}
      <div className="relative h-180 overflow-hidden">
        {/* TOP ROW - slides right */}
        <div className="marquee-row marquee-right flex gap-3">
          {[...topImages, ...topImages].map((src, index) => (
            <div
              key={`top-${index}`}
              className="relative h-62.5 w-[320px] shrink-0 overflow-hidden rounded-sm"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* BOTTOM ROW - slides left */}
        <div className="marquee-row marquee-left mt-3 flex gap-3">
          {[...bottomImages, ...bottomImages].map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="relative h-90 w-90 shrink-0 overflow-hidden rounded-sm"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* FADE TO CONTENT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-115 bg-linear-to-b from-[#f2f7fa]/30 via-[#f2f7fa] to-[#f2f7fa]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-45 flex flex-col items-center justify-between gap-8 px-5 pb-16 text-center md:px-10 md:pb-20 lg:flex-row lg:items-end lg:text-left">
        <div className="flex w-full flex-col items-center lg:items-start">
          <div className="relative mb-6 inline-flex w-fit items-center px-2 py-1">
            <span className={`${b} left-0 bottom-0 border-b-3 border-l-3`} />
            <span className={`${b} right-0 top-0 border-t-3 border-r-3`} />
            <span className="text-[15px] font-light leading-none text-gray-700 md:text-[17px]">
              Let’s Make It Happen
            </span>
          </div>

          <h2 className="text-[40px] font-light leading-12.5 text-black md:text-[60px] md:leading-17.5 xl:text-[72px] xl:leading-[79.2px]">
            Ready For Your
            <br />
            <span className="text-custom1">Best Shot?</span>
          </h2>
        </div>

        <div className="flex w-full max-w-125 flex-col items-center gap-6 lg:max-w-85 lg:items-end lg:gap-10">
          <p className="text-center text-[15px] leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px] lg:text-right">
            Every face tells a different story, and every frame is a proof of
            moments captured with purpose and style. Yours could be next.
          </p>

          <Button variant="black" href="/contact">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Slide
