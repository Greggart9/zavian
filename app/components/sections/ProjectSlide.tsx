import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Slide = () => {
  const firstRowImages = [
    "/assets/asset 49.png",
    "/assets/asset 50.png",
    "/assets/asset 51.png",
    "/assets/asset 52.png",
    "/assets/asset 47.png",
    "/assets/asset 48.png",
  ];

  const secondRowImages = [
    "/assets/asset 52.png",
    "/assets/asset 27.png",
    "/assets/asset 53.png",
    "/assets/asset 28.png",
    "/assets/asset 54.png",
  ];

  const thirdRowImages = [
    "/assets/asset 55.png",
    "/assets/asset 56.png",
    "/assets/asset 57.png",
    "/assets/asset 58.png",
    "/assets/asset 59.png",
  ];

  const b = "absolute h-3 w-3 border-custom1";

  return (
    <section className="relative w-full overflow-hidden bg-[#eef6fa]">
      {/* IMAGE MARQUEE AREA */}
      <div className="relative h-200 overflow-hidden">
        {/* FIRST ROW - slides right */}
        <div className="marquee-row marquee-right flex gap-3">
          {[...firstRowImages, ...firstRowImages].map((src, index) => (
            <div
              key={`first-${index}`}
              className="relative h-62.5 w-[320px] shrink-0 overflow-hidden rounded-sm"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* SECOND ROW - slides left */}
        <div className="marquee-row marquee-left mt-3 flex gap-3">
          {[...secondRowImages, ...secondRowImages].map((src, index) => (
            <div
              key={`second-${index}`}
              className="relative h-67.5 w-90 shrink-0 overflow-hidden rounded-sm"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* THIRD ROW - slides right */}
        <div className="marquee-row marquee-right mt-3 flex gap-3">
          {[...thirdRowImages, ...thirdRowImages].map((src, index) => (
            <div
              key={`third-${index}`}
              className="relative h-62.5 w-[320px] shrink-0 overflow-hidden rounded-sm"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* FADE TO CONTENT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-200 bg-linear-to-b from-[#f2f7fa]/20 via-[#f2f7fa]/90 to-[#f2f7fa]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-90 flex flex-col justify-between px-10 pb-20">
        <div>
          <div className="relative mb-6 inline-flex w-fit items-center px-2 py-1">
            <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
            <span className={`${b} right-0 top-0 border-r-3 border-t-3`} />

            <span className="text-[17px] font-light leading-none text-gray-700">
              Let’s Make It Happen
            </span>
          </div>

          <h2 className="text-[72px] font-light leading-[79.2px] text-black">
            Ready For Your
            <br />
            <span className="text-custom1">Best Shot?</span>
          </h2>
        </div>

        <div className="flex max-w-85 flex-col gap-10">
          <p className=" text-[17px] leading-[23.8px] text-gray-700 pt-10">
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
};

export default Slide;