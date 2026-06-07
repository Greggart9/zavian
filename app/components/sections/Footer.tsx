"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";




const Footer = () => {

  const footerRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!footerRef.current || !innerRef.current) return;

  const ctx = gsap.context(() => {
    const animation = gsap.fromTo(
      innerRef.current,
      {
        scale: 0.92,
        y: 80,
      },
      {
        scale: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      animation.kill();
    };
  }, footerRef);

  return () => ctx.revert();
}, []);

  const b = "absolute h-3 w-3 border-custom1";

  return (
    <footer
      ref={footerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f2f7fa] px-10 py-20 grid-overlay"
    >
      <div
        ref={innerRef}
        className="relative grid min-h-[calc(100vh-64px)] origin-center grid-cols-[1fr_1fr] gap-20"
      >
        {/* LEFT */}
        <div className="flex flex-col justify-between py-2 max-w-150">
          <div>
            {/* LOGO */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/asset 0.png"
                alt="Zavian"
                width={160}
                height={100}
                className="h-auto w-40"
              />
            </Link>

            <h2 className="text-[60px] font-thin leading-17.25 text-black">
              Your Story,
              <br />
              <span className="text-custom1">Captured Boldly.</span>
            </h2>

            <Button variant="black" href="/contact" className="mt-12 w-60">
              Let&apos;s talk
            </Button>
          </div>

          <div className="max-w-114.75">
            <div className="relative mb-9 inline-flex w-fit items-center px-2 py-1">
              <span className={`${b} left-0 bottom-0 border-b-2 border-l-2`} />
              <span className={`${b} right-0 top-0 border-t-2 border-r-2`} />
              <span className="text-[17px] leading-none text-black">
                NAVIGATION
              </span>
            </div>

            <div className="">

                <ul className="flex gap-6 text-[20px] justify-between leading-6.5  text-black/80 flex-wrap">
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Projects <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Blogs <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">About <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Contact <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Terms <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Privacy Policy <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                    <li className="group flex gap-2 items-center cursor-pointer hover:text-custom1 transition-colors duration-300">Refund Policy <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={20} /></li>
                </ul>

            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[17px] leading-[23.8px] text-black/75">
              © 2025 Zavian. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-[28px]  text-black/80">
              <IoLogoInstagram className="cursor-pointer hover:text-custom1 transition-colors duration-300" />
              <span className="text-[20px] leading-none cursor-pointer hover:text-custom1 transition-colors duration-300"><BsTwitterX /></span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-end">
          <div className="relative h-[86vh] w-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/assets/asset 60.png"
              alt="Footer portrait"
              fill
              sizes="50vw"
              className="object-cover"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer