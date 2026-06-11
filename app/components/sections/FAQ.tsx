"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const faqs = [
  {
    question: "What types of photography do you specialise in?",
    answer:
      "I focus on portraits, headshots, commercial branding, and creative editorials each crafted with cinematic lighting and bold style.",
  },
  {
    question: "Do you travel for shoots?",
    answer:
      "Yes, I travel for selected shoots. Travel fees may apply depending on the location and shoot requirements.",
  },
  {
    question: "How involved do I need to be during the shoot?",
    answer:
      "You do not need to worry too much. I guide you through posing, direction, mood, and expression throughout the session.",
  },
  {
    question: "How soon will I receive my photos?",
    answer:
      "Delivery time depends on the package, but most edited galleries are delivered within 4 to 7 days.",
  },
  {
    question: "Do you offer retouching services?",
    answer:
      "Yes, selected retouching is included in each package, with extra retouching available on request.",
  },
  {
    question: "What makes your photography different?",
    answer:
      "My style focuses on bold lighting, clean direction, cinematic mood, and portraits that feel confident and intentional.",
  },
  {
    question: "Can I book a consultation before scheduling?",
    answer:
      "Yes, you can book a consultation first so we can discuss your goals, style, location, and ideal package.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const b = "absolute h-3 w-3 border-custom1";

  return (
    <section className="h-fit w-full bg-white px-5 pb-16 md:px-10 md:py-20">
      <div className="flex flex-col items-stretch justify-between gap-10 xl:flex-row xl:gap-16">
        {/* LEFT FAQ LIST */}
        <div className="order-2 flex w-full flex-col gap-2 xl:order-1 xl:flex-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full cursor-pointer bg-[#f2f7fa] p-4 text-left transition-all duration-600 md:p-5"
              >
                <div className="flex w-full items-start justify-between gap-4 md:gap-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] leading-6 text-black md:text-[20px]">
                      {faq.question}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-5 text-[15px] leading-[22px] text-black/75 md:pt-7 md:text-[17px] md:leading-[22.1px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="mt-1 shrink-0 text-black">
                    {isOpen ? (
                      <X size={24} strokeWidth={1.5} />
                    ) : (
                      <Plus size={24} strokeWidth={1.5} />
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 flex h-auto w-full flex-col gap-10 pt-1 xl:order-2 xl:w-150 xl:shrink-0 xl:gap-0">
          <div>
            <div className="relative mb-4 inline-flex w-fit items-center px-2 py-1">
              <span className={`${b} left-0 bottom-0 border-b-3 border-l-3`} />
              <span className={`${b} right-0 top-0 border-t-3 border-r-3`} />
              <span className="text-[16px] leading-none text-gray-700 font-light tracking-widest">
                FAQ
              </span>
            </div>

            <h2 className="text-[40px] font-light leading-[50px] text-black md:text-[60px] md:leading-[70px] xl:text-[72px] xl:leading-[79.2px]">
              Your Questions
              <br />
              <span className="text-custom1">Answered here</span>
            </h2>

            <p className="mt-5 max-w-125 text-[15px] leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px] xl:max-w-100">
              From booking to final edits, here’s everything you need to know
              before stepping in front of my lens.
            </p>

            <Button variant="black" href="/contact" className="mt-6 w-fit">
              Book a call
            </Button>
          </div>

          <div className="mt-auto hidden xl:flex items-center gap-4 md:h-20 md:gap-6">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border-4 border-white shadow-sm md:h-20 md:w-20">
              <Image
                src="/assets/asset 67.png"
                alt="Zavian"
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="max-w-140 text-[17px] leading-6 text-black md:text-[20px] md:leading-6.5">
                &quot;Every frame tells a story. Let&apos;s make yours unforgettable.&quot;
              </p>
              <p className="mt-2 text-[15px] leading-[22.5px] text-black/70 md:mt-3">
                Zavian, Behind The Lens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
