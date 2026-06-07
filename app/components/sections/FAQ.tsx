"use client";

import { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
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
    <section className="w-full h-fit bg-white px-10 py-20">
      <div className="flex items-stretch justify-between">
        {/* LEFT FAQ LIST */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="bg-[#f2f7fa] p-5 text-left transition-all duration-600 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-6 w-179.75">
                  <div>
                    <h3 className="text-[20px] leading-6 text-black">
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
                        <p className="pt-7 text-[17px] leading-[22.1px] text-black/75">
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
        <div className="flex h-auto w-150 flex-col pt-1">
          <div>
            <div className="relative mb-4 inline-flex w-fit items-center px-2 py-1">
              <span className={`${b} left-0 bottom-0 border-b-2 border-l-2`} />
              <span className={`${b} right-0 top-0 border-t-2 border-r-2`} />
              <span className="text-[16px] leading-none text-black/65">
                FAQ
              </span>
            </div>

            <h2 className="text-[72px] font-thin leading-[79.2px] text-black">
              Your Questions
              <br />
              <span className="text-custom1">Answered here</span>
            </h2>

            <p className="mt-5 max-w-100 text-[17px] leading-[23.8px] text-black/75">
              From booking to final edits, here’s everything you need to know
              before stepping in front of my lens.
            </p>

            <Button variant="black" href="/contact" className="mt-6 w-fit">
              Book a call
            </Button>
          </div>

          <div className="mt-auto flex h-20 items-center gap-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-sm border-4 border-white shadow-sm">
              <Image
                src="/assets/asset 67.png"
                alt="Zavian"
                fill
                className="object-cover"
              />
            </div>

            <div >
              <p className="max-w-140 text-[20px] leading-6.5 text-black">
                "Every frame tells a story. Let's make yours unforgettable."
              </p>
              <p className="mt-3 text-[15px] leading-[22.5px] text-black/70">
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