import React from 'react'
import Slide from '../components/sections/Slide';
import Image from 'next/image';
import { Plus, ArrowUpRight } from 'lucide-react';

const page = () => {

      const b = "absolute w-3 h-3 border-custom1";

  return (
    <>
         <section className='w-full h-fit flex flex-col items-center justify-center zavian-grid '>

        {/* HEADING */}
        <div className='w-full h-fit flex flex-col items-center justify-center gap-5 px-10 pt-35 pb-20'>

            <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                        <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                        <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                        <span className="text-[17px] leading-[23.8px] font-light text-gray-700">BLOG</span>
             </div>
          <h1 className='text-[84px] font-light leading-[92.4px] text-center'>Photography Tips<br/> <span className='text-custom1'>& Stories</span></h1>
          <p className='text-[25px] leading-7.5 font-normal max-w-lg text-center text-gray-900'>Discover photography tips, creative techniques, and behind-the-scenes stories.</p>
        </div>


        {/* MAIN BODY */}
        <div className='w-full h-full '>
          
            
            <div className="px-10 gap-5 flex flex-col ">             
              <div className="flex justify-between gap-5">
              {/* LEFT */}
              <div className="group relative flex no-custom-cursor h-156 w-177.5 flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer">
                {/* IMAGE AREA */}
                <div className="group relative h-87.5 w-full overflow-hidden lines lines-top">
                  <Image
                    src="/assets/asset 12.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 710px"
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
                <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-10">
                  <span
                    className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                  >
                    Client Guides
                  </span>

                  <div className="flex justify-between gap-8 pt-4">
                    <span className="w-[67%]">
                      <h1 className="pb-3 text-[32px] leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[20px] leading-6.5 text-black/80">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-end text-[20px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                {/* Right */}
              <div className="group relative flex no-custom-cursor h-156 w-177.5 flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer">
                {/* IMAGE AREA */}
                <div className="group relative h-87.5 w-full overflow-hidden lines lines-top">
                  <Image
                    src="/assets/asset 43.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 710px"
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
                <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-10">
                  <span
                    className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                  >
                    Photography Tips
                  </span>

                  <div className="flex justify-between gap-8 pt-4">
                    <span className="w-[75%]">
                      <h1 className="pb-3 text-[32px] leading-[38.4px]">
                        Lighting Secrets For Bold Portraits
                      </h1>

                      <p className="text-[20px] leading-6.5 text-black/80 ">
                        Discover my approach to cinematic lighting setups that bring out depth,
                        emotion, and sharp editorial style in every portrait session.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-end text-[20px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                </div>

              <div className="flex justify-between gap-5">
              {/* LEFT */}
              <div className="group relative flex no-custom-cursor h-156 w-177.5 flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer">
                {/* IMAGE AREA */}
                <div className="group relative h-87.5 w-full overflow-hidden lines lines-top">
                  <Image
                    src="/assets/asset 44.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 710px"
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
                <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-10">
                  <span
                    className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                  >
                    Client Guides
                  </span>

                  <div className="flex justify-between gap-8 pt-4">
                    <span className="w-[67%]">
                      <h1 className="pb-3 text-[32px] leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[20px] leading-6.5 text-black/80">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-end text-[20px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                {/* Right */}
              <div className="group relative flex no-custom-cursor h-156 w-177.5 flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer">
                {/* IMAGE AREA */}
                <div className="group relative h-87.5 w-full overflow-hidden lines lines-top">
                  <Image
                    src="/assets/asset 66.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 710px"
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
                <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-10">
                  <span
                    className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                  >
                    Client Guides
                  </span>

                  <div className="flex justify-between gap-8 pt-4">
                    <span className="w-[67%]">
                      <h1 className="pb-3 text-[32px] leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[20px] leading-6.5 text-black/80">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-end text-[20px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              </div>

            </div> 

        </div>




        <div className='w-full h-full pt-30'>
            <Slide />
        </div>
      
      
    </section>
    </>
  )
}

export default page