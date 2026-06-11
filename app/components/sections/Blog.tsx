import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, Plus } from 'lucide-react';
import Button from '../ui/Button';

const Blog = () => {
  const b = 'absolute w-3 h-3 border-custom1'

  const blogs = [
    {
      id: 1,
      category: 'Client Guides',
      title: 'Camera Confidence Tips',
      excerpt:
        "Simple mindset shifts and posing guidance to feel powerful, and authentic during a photoshoot.",
      image: '/assets/asset 12.png',
      href: '/blogs/camera-confidence-tips',
      featured: true,
    },
    {
      id: 2,
      category: 'Photography Tips',
      title: 'Lighting Secrets For Bold Portraits',
      excerpt:
        'Discover my approach to cinematic lighting setups that bring out depth, emotion, and sharp editorial style in every portrait session.',
      image: '/assets/asset 43.png',
      href: '/blogs/lighting-secrets',
      featured: false,
    },
    {
      id: 3,
      category: 'Editing Insights',
      title: 'Retouching: Keeping It Real',
      excerpt:
        'My philosophy on natural retouching to maintain true skin texture while enhancing light and mood for a polished yet honest finish.',
      image: '/assets/asset 44.png',
      href: '/blogs/retouching-keeping-it-real',
      featured: false,
    },
  ]

  const featured = blogs.find((b) => b.featured)!
  const side = blogs.filter((b) => !b.featured)

  return (
    <section className="flex flex-col items-center justify-center py-10 lg:py-20 zavian-grid w-full h-fit px-5 lg:px-10">
      {/* TOP */}
      <div className="flex flex-col h-fit xl:h-49 w-full">
        <span className="flex justify-start">
          <div className="relative inline-flex items-center px-3 mb-4 w-fit">
            <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
            <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
            <span className="text-sm font-light tracking-widest text-gray-700">BLOG</span>
          </div>
        </span>

        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* LEFT */}
          <div className="flex items-center">
            <h1 className="text-[40px] md:text-[60px] xl:text-[72px] text-left leading-[50px] md:leading-[70px] lg:leading-[79.2px] font-light text-black">
              Photography
              <br />
              <span className="text-custom1">Stories</span>
            </h1>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col -mt-5 lg:mt-0 gap-5 items-start lg:items-end justify-start lg:justify-end">
            <p className="text-[17px] text-gray-700 leading-[23.8px] lg:text-right md:max-w-125 lg:max-w-85">
              Discover photography tips, creative techniques, and behind-the-scenes stories.
            </p>
            <Button variant="black" href="/blogs" className="">View all articles</Button>

          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="w-full pt-10 md:pt-20 pb-10 flex flex-col xl:flex-row gap-5">

        {/* LEFT */}
        <div className="group relative flex no-custom-cursor h-auto xl:h-156 w-full xl:w-1/2 flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer">
          {/* IMAGE AREA */}
          <div className="group relative h-62 md:h-87.5 w-full overflow-hidden zavian-card-lines">
            <Image
              src="/assets/asset 12.png"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="object-cover"
            />

            {/* bottom-half overlay */}
              <div className="absolute left-0 top-0 h-1/2 w-full translate-y-full bg-custom1/55 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />

              {/* center plus button */}
              <div className="absolute left-1/2 top-1/2 flex h-22 w-22 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-xs transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                <span className="text-5xl font-light leading-none text-white"><Plus size={25} strokeWidth={1.5} /></span>
              </div>

            {/* IMAGE FADE ONLY */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 45%, rgba(255,255,255,0.55) 82%, rgba(255,255,255,1) 100%)",
              }}
            />
          </div>

          {/* CONTENT AREA */}
          <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-8 md:pt-10">
            <span
              className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
            >
              Client Guides
            </span>

            <div className="flex flex-col justify-between gap-5 pt-4 md:flex-row md:gap-8">
              <span className="w-full md:w-[67%]">
                <h1 className="pb-3 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px]">
                  Camera Confidence Tips
                </h1>

                <p className="text-[17px] leading-6 md:text-[20px] md:leading-6.5 text-black/80">
                  Simple mindset shifts and posing guidance to feel powerful, and
                  authentic during a photoshoot.
                </p>
              </span>

              {/* LINK */}
              <div className="flex self-start md:self-end text-[18px] md:text-[20px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-1/2 h-auto relative flex flex-col gap-6 no-custom-cursor">
            {/* RIGHT-TOP */}
           
            <div className="group flex w-full flex-col xl:flex-row h-auto xl:h-75 overflow-hidden border-8 border-white bg-white p-0 shadow-xl cursor-pointer xl:border-0 xl:p-2">
              <div className="group relative w-full xl:w-81.75 h-62 md:h-87.5 xl:h-auto shrink-0 overflow-hidden zavian-card-lines">
              <img
                src="/assets/asset 43.png"
                alt="Bold portrait lighting"
                className="h-full w-full object-cover"
              />

              {/* bottom-half overlay */}
              <div className="absolute left-0 top-1/2 h-1/2 w-full -translate-y-full bg-custom1/45 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />

              {/* center plus button */}
              <div className="absolute left-1/2 top-1/2 flex h-22 w-22 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-xs transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                <span className="text-5xl font-light leading-none text-white"><Plus size={25} strokeWidth={1.5} /></span>
              </div>
            </div>

              <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-8 md:pt-10 xl:justify-center xl:px-7 xl:py-0">
                <span
                  className="w-fit bg-custom1 px-2.5 py-1 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                >
                  Photography Tips
                </span>

                <h2 className="mt-2 max-w-105 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px] xl:text-[25px] xl:leading-7.5 font-normal text-black">
                  Lighting Secrets For Bold Portraits
                </h2>

                <p className="mt-2 max-w-150 xl:max-w-102.5 text-[17px] leading-6 md:text-[20px] md:leading-6.5 xl:text-[15px] xl:leading-[22.5px] text-[#3d3d3d]">
                  Discover my approach to cinematic lighting setups that bring out depth,
                  motion, and sharp editorial style in every portrait session.
                </p>

                <div className="mt-6 flex text-[18px] md:text-[20px] xl:text-[20px] font-medium leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                  Read more <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* RIGHT-BOTTOM */}
            <div className="group flex w-full flex-col xl:flex-row h-auto xl:h-75 overflow-hidden border-8 border-white bg-white p-0 shadow-xl cursor-pointer xl:border-0 xl:p-2">
              <div className="group relative w-full xl:w-81.75 h-62 md:h-87.5 xl:h-auto shrink-0 overflow-hidden zavian-card-lines">
              <img
                src="/assets/asset 44.png"
                alt="Retouching: Keeping It Real"
                className="h-full w-full object-cover"
              />

              {/* bottom-half overlay */}
              <div className="absolute left-0 top-1/2 h-1/2 w-full -translate-y-full bg-custom1/45 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />

              {/* center plus button */}
              <div className="absolute left-1/2 top-1/2 flex h-22 w-22 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                <span className="text-5xl font-light leading-none text-white"><Plus size={25} strokeWidth={1.5} /></span>
              </div>
            </div>

              <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-8 md:pt-10 xl:justify-center xl:px-7 xl:py-0">
                <span className=" w-fit px-2.5 py-1 text-white text-[15px] bg-custom1 text-center
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]">
                  Editing Insights
                </span>

                <h2 className="max-w-105 text-[28px] leading-[34px] md:text-[32px] md:leading-[38.4px] xl:text-[25px] xl:leading-7.5 font-normal text-black mt-2">
                  Retouching: Keeping It Real
                </h2>

                <p className="mt-2 max-w-150 xl:max-w-102.5 text-[17px] leading-6 md:text-[20px] md:leading-6.5 xl:text-[15px] xl:leading-[22.5px] text-[#3d3d3d]">
                  My philosophy on natural retouching to maintain true skin texture 
                  while enhancing light and mood for a polished yet honest finish.
                </p>

                <div className="mt-6 text-[18px] md:text-[20px] xl:text-[20px] flex leading-6.5 font-medium text-black transition-colors duration-300 group-hover:text-custom1">
                  Read more <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                </div>
              </div>
            </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="w-full pt-8">
        <hr className="border-gray-300" />
        <span className="flex justify-between pt-3.5 text-[17px]">
          <p>[ 5 ]</p>
          <p>Notes From Zavian's Studio</p>
        </span>
      </div>
    </section>
  )
}

export default Blog
