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
    <div className="flex flex-col justify-center items-center w-full gap-6 ">

    <div className="w-full max-w-230 border-4 border-white bg-[#f2f7fa] px-10 py-10 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-[17px] leading-[23.8px] text-black/75">
              Full Name
            </label>

            <input
              type="text"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
              className="h-14 w-full rounded-md border border-black/5 bg-white px-4 text-[17px] leading-[23.8px] text-black outline-none transition focus:border-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-[17px] leading-[23.8px] text-black/75">
              Your Email
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-14 w-full rounded-md border border-black/5 bg-white px-4 text-[17px] leading-[23.8px] text-black outline-none transition focus:border-gray-400"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-7">
          <label className="mb-1 block text-[17px] leading-[23.8px] text-black/75">
            Project Type
          </label>

          <select
            value={form.projectType}
            onChange={(e) =>
              setForm({ ...form, projectType: e.target.value })
            }
            className="h-14 w-full appearance-none rounded-md border border-black/5 bg-white px-4 text-[17px] leading-[23.8px] text-black outline-none transition focus:border-gray-400"
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
          <label className="mb-1 block text-[17px] leading-[23.8px] text-black/75">
            Your message
          </label>

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="h-40 w-full resize-none rounded-sm border border-black/5 bg-white p-4 text-[17px] leading-[23.8px] text-black outline-none transition focus:border-gray-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isComplete}
          className={`mt-6 flex h-15 w-full items-center justify-center gap-2 border-3 cursor-pointer border-white text-[20px] leading-6.5 font-medium shadow-xl transition-all duration-300 ${
            isComplete
              ? "bg-black text-white hover:bg-black/70"
              : "cursor-not-allowed bg-black/35 text-white/50 shadow-none"
          }`}
        >
          Send Message <ArrowRight size={26} strokeWidth={1.5} />
        </button>
      </form>

      {/* Bottom Stats */}
      <div className="mt-9 flex items-center justify-between text-[17px] leading-[23.8px] text-black/75">
        <div className="flex items-center gap-2">
          <Aperture size={26} strokeWidth={1.8} />
          <span>5000+ Photos Snapped</span>
        </div>

        <div className="h-8 w-px bg-black/35" />

        <div className="flex items-center gap-2">
          <Focus size={26} strokeWidth={1.8} />
          <span>145 Happy Clients</span>
        </div>
      </div>
    </div>

    <div className="w-full max-w-230 border-4 border-gray-300 bg-white px-12 py-8 mb-20 shadow-xl">
      <h2 className="text-center text-[32px] font-normal leading-[38.4px] text-black/80">
        Questions or ideas?
      </h2>

      {/* EMAIL BOX */}
      <div className="mt-9 flex h-31.5 items-center justify-center border-4 border-white bg-[#f2f7fa] shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <MessageCircleMore
              size={20}
              strokeWidth={1.5}
              className="text-custom1 hover:scale-120 transition-transform cursor-pointer"
            />
          </div>

          <p className="text-[20px] font-light leading-6.5 text-black/45">
            Drop me a line at{" "}
            <a
              href="mailto:hello@zavian.com"
              className="text-custom1 text-[25px] leading-7.5 transition-opacity hover:opacity-70"
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

        <p className="mt-7 max-w-162.5 text-[20px] font-normal leading-6.5 text-black">
          "Looking forward to capturing your story with clarity
          <br />
          and style."
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