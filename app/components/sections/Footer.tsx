"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      className="relative min-h-screen w-full overflow-hidden bg-[#f2f7fa] px-5 py-10 md:px-10 md:py-20 zavian-grid"
    >
      <div
        ref={innerRef}
        className="relative grid min-h-[calc(100vh-64px)] origin-center grid-cols-1 gap-10 xl:grid-cols-[1fr_1fr] xl:gap-20"
      >
        {/* LEFT */}
        <div className="order-2 flex max-w-none flex-col justify-between gap-12 py-2 xl:order-1 xl:max-w-150 xl:gap-0">
          <div>
            {/* LOGO */}
            <Link href="/" className="hidden md:inline-block mb-4">
              <Image
                src="/assets/asset 0.png"
                alt="Zavian"
                width={160}
                height={100}
                className="h-auto w-32 md:w-40"
              />
            </Link>

            <h2 className="text-[40px] font-light leading-12.5 text-black md:text-[60px] md:leading-17.5 xl:text-[72px] xl:leading-[79.2px]">
              Your Story,
              <br />
              <span className="text-custom1">Captured Boldly.</span>
            </h2>

            <Button variant="black" href="/contact" className="mt-8 w-full justify-center md:w-60 xl:mt-12">
              Let&apos;s talk
            </Button>
          </div>

          <div className="max-w-none xl:max-w-114.75">
            <div className="relative mb-6 inline-flex w-fit items-center px-2 py-1 xl:mb-9">
              <span className={`${b} left-0 bottom-0 border-b-3 border-l-3`} />
              <span className={`${b} right-0 top-0 border-t-3 border-r-3`} />
              <span className="text-[15px] leading-none text-gray-700 font-light tracking-widest md:text-[17px]">
                NAVIGATION
              </span>
            </div>

            <div className="">

<ul className="flex flex-col gap-4 text-[17px] leading-6 text-gray-700 sm:grid sm:grid-cols-2 md:text-[20px] md:leading-6.5 xl:flex xl:flex-row xl:flex-wrap xl:justify-between xl:gap-6">
  <li>
    <Link
      href="/"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Home
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/projects"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Projects
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/blogs"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Blogs
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/about"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      About
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/contact"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Contact
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/terms"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Terms
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/privacy-policy"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Privacy Policy
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>

  <li>
    <Link
      href="/refund-policy"
      className="group flex items-center gap-2 transition-colors duration-300 hover:text-custom1"
    >
      Refund Policy
      <ArrowUpRight
        className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
        size={20}
      />
    </Link>
  </li>
</ul>

            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-[15px] leading-[22.5px] text-black/75 md:text-[17px] md:leading-[23.8px]">
              © 2025 Zavian. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-[28px]  text-black/80">
              <IoLogoInstagram className="cursor-pointer hover:text-custom1 transition-colors duration-300" />
              <span className="text-[20px] leading-none cursor-pointer hover:text-custom1 transition-colors duration-300"><BsTwitterX /></span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 flex items-center justify-end xl:order-2">
          <div className="relative h-96 w-full overflow-hidden border-8 border-white shadow-xl md:h-155 xl:h-[86vh]">
            <Image
              src="/assets/asset 60.png"
              alt="Footer portrait"
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
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
