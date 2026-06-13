"use client";

import { useState } from "react";
import { Aperture, ArrowRight, Focus, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import FAQ from "./FAQ";

export default function ContactFormBox() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    projectType: "Portraits",
    message: "",
  });

  const isComplete =
    form.fullName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.projectType.trim() !== "" &&
    form.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isComplete) return;

    console.log(form);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-5 md:px-10">

    <div className="w-full max-w-230 border-4 border-white bg-[#f2f7fa] px-5 py-8 shadow-sm md:px-10 md:py-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-[15px] leading-[22.5px] text-black/75 md:text-[17px] md:leading-[23.8px]">
              Full Name
            </label>

            <input
              type="text"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
              className="h-13 w-full rounded-md border border-black/5 bg-white px-4 text-[15px] leading-[22.5px] text-black outline-none transition focus:border-gray-400 md:h-14 md:text-[17px] md:leading-[23.8px]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-[15px] leading-[22.5px] text-black/75 md:text-[17px] md:leading-[23.8px]">
              Your Email
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-13 w-full rounded-md border border-black/5 bg-white px-4 text-[15px] leading-[22.5px] text-black outline-none transition focus:border-gray-400 md:h-14 md:text-[17px] md:leading-[23.8px]"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-7">
          <label className="mb-1 block text-[15px] leading-[22.5px] text-black/75 md:text-[17px] md:leading-[23.8px]">
            Project Type
          </label>

          <select
            value={form.projectType}
            onChange={(e) =>
              setForm({ ...form, projectType: e.target.value })
            }
            className="h-13 w-full appearance-none rounded-md border border-black/5 bg-white px-4 text-[15px] leading-[22.5px] text-black outline-none transition focus:border-gray-400 md:h-14 md:text-[17px] md:leading-[23.8px]"
          >
            <option value="Portraits">Portraits</option>
            <option value="Headshots">Headshots</option>
            <option value="Commercial & Branding">
              Commercial & Branding
            </option>
            <option value="Creative Editorials">Creative Editorials</option>
            <option value="Events">Events</option>
          </select>
        </div>

        {/* Message */}
        <div className="mt-7">
          <label className="mb-1 block text-[15px] leading-[22.5px] text-black/75 md:text-[17px] md:leading-[23.8px]">
            Your message
          </label>

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="h-36 w-full resize-none rounded-sm border border-black/5 bg-white p-4 text-[15px] leading-[22.5px] text-black outline-none transition focus:border-gray-400 md:h-40 md:text-[17px] md:leading-[23.8px]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isComplete}
          className={`mt-6 flex h-14 w-full cursor-pointer items-center justify-center gap-2 border-3 border-white text-[18px] font-medium leading-6 shadow-xl transition-all duration-300 md:h-15 md:text-[20px] md:leading-6.5 ${
            isComplete
              ? "bg-black text-white hover:bg-black/70"
              : "cursor-not-allowed bg-black/35 text-white/50 shadow-none"
          }`}
        >
          Send Message <ArrowRight size={26} strokeWidth={1.5} />
        </button>
      </form>

      {/* Bottom Stats */}
      <div className="mt-8 flex flex-col gap-4 text-[15px] leading-[22.5px] text-black/75 md:mt-9 md:flex-row md:items-center md:justify-between md:text-[17px] md:leading-[23.8px]">
        <div className="flex items-center gap-2">
          <Aperture size={26} strokeWidth={1.8} />
          <span>5000+ Photos Snapped</span>
        </div>

        <div className="hidden h-8 w-px bg-black/35 md:block" />

        <div className="flex items-center gap-2">
          <Focus size={26} strokeWidth={1.8} />
          <span>145 Happy Clients</span>
        </div>
      </div>
    </div>

    <div className="mb-16 w-full max-w-230 border-4 border-gray-200 bg-white px-5 py-8 shadow-xl md:mb-20 md:px-12">
      <h2 className="text-center text-[26px] font-normal leading-[32px] text-black/80 md:text-[32px] md:leading-[38.4px]">
        Questions or ideas?
      </h2>

      {/* EMAIL BOX */}
      <div className="mt-8 flex min-h-31.5 items-center justify-center border-4 border-white bg-[#f2f7fa] px-4 py-6 shadow-md md:mt-9">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <MessageCircleMore
              size={20}
              strokeWidth={1.5}
              className="text-custom1 hover:scale-120 transition-transform cursor-pointer"
            />
          </div>

          <p className="text-[17px] font-normal leading-6 text-black/45 md:text-[20px] md:leading-6.5">
            Drop me a line at{" "}
            <a
              href="mailto:hello@zavian.com"
              className="block text-[20px] leading-7 text-custom1 transition-opacity hover:opacity-70 md:inline md:text-[25px] md:leading-7.5"
            >
              hello@zavian.com
            </a>
          </p>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mt-14 flex flex-col items-center text-center">
        <div className="relative h-18 w-18 overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/assets/asset 67.png"
            alt="Zavian"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <p className="mt-7 max-w-162.5 text-[17px] font-normal leading-6 text-black md:text-[20px] md:leading-6.5">
          &quot;Looking forward to capturing your story with clarity and style.&quot;
        </p>

        <p className="mt-4 text-[15px] leading-[22.5px] text-black/70">
          Zavian, Behind The Lens
        </p>
      </div>
    </div>

    <FAQ />

    </div>
  );
}
