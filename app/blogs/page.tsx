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
        <div className='w-full h-fit flex flex-col items-center justify-center gap-5 px-5 pt-30 pb-14 md:px-10 md:pt-35 md:pb-20'>

            <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                        <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                        <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                        <span className="text-[15px] leading-[22.5px] font-light text-gray-700 md:text-[17px] md:leading-[23.8px]">BLOG</span>
             </div>
          <h1 className='text-[42px] font-light leading-12.5 text-center md:text-[64px] md:leading-18 xl:text-[84px] xl:leading-[92.4px]'>Photography Tips<br/> <span className='text-custom1'>& Stories</span></h1>
          <p className='max-w-lg text-center text-[17px] font-normal leading-6.5 text-gray-900 md:text-[25px] md:leading-7.5'>Discover photography tips, creative techniques, and behind-the-scenes stories.</p>
        </div>


        {/* MAIN BODY */}
        <div className='w-full h-full '>
          
            
            <div className="px-5 gap-5 flex flex-col md:px-10">             
              <div className="flex flex-col justify-between gap-5 xl:flex-row">
              {/* LEFT */}
              <div className="group relative flex no-custom-cursor h-auto w-full flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer xl:h-156 xl:w-177.5">
                {/* IMAGE AREA */}
                <div className="group relative h-72 w-full overflow-hidden lines lines-top md:h-87.5">
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
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-45% via-white/55 via-82% to-white" />
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
                      <h1 className="pb-3 text-[28px] leading-8.5 md:text-[32px] md:leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[17px] leading-6 text-black/80 md:text-[20px] md:leading-6.5">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-start text-[18px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1 md:self-end md:text-[20px]">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                {/* Right */}
              <div className="group relative flex no-custom-cursor h-auto w-full flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer xl:h-156 xl:w-177.5">
                {/* IMAGE AREA */}
                <div className="group relative h-72 w-full overflow-hidden lines lines-top md:h-87.5">
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
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-45% via-white/55 via-82% to-white" />
                </div>

                {/* CONTENT AREA */}
                <div className="flex flex-1 flex-col justify-end px-5 pb-6 pt-8 md:pt-10">
                  <span
                    className="w-fit bg-custom1 px-2.5 py-1.5 text-center text-[15px] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.1)]"
                  >
                    Photography Tips
                  </span>

                  <div className="flex flex-col justify-between gap-5 pt-4 md:flex-row md:gap-8">
                    <span className="w-full md:w-[75%]">
                      <h1 className="pb-3 text-[28px] leading-8.5 md:text-[32px] md:leading-[38.4px]">
                        Lighting Secrets For Bold Portraits
                      </h1>

                      <p className="text-[17px] leading-6 text-black/80 md:text-[20px] md:leading-6.5">
                        Discover my approach to cinematic lighting setups that bring out depth,
                        emotion, and sharp editorial style in every portrait session.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-start text-[18px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1 md:self-end md:text-[20px]">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                </div>

              <div className="flex flex-col justify-between gap-5 xl:flex-row">
              {/* LEFT */}
              <div className="group relative flex no-custom-cursor h-auto w-full flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer xl:h-156 xl:w-177.5">
                {/* IMAGE AREA */}
                <div className="group relative h-72 w-full overflow-hidden lines lines-top md:h-87.5">
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
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-45% via-white/55 via-82% to-white" />
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
                      <h1 className="pb-3 text-[28px] leading-8.5 md:text-[32px] md:leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[17px] leading-6 text-black/80 md:text-[20px] md:leading-6.5">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-start text-[18px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1 md:self-end md:text-[20px]">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

                {/* Right */}
              <div className="group relative flex no-custom-cursor h-auto w-full flex-col overflow-hidden border-8 border-white bg-white shadow-xl cursor-pointer xl:h-156 xl:w-177.5">
                {/* IMAGE AREA */}
                <div className="group relative h-72 w-full overflow-hidden lines lines-top md:h-87.5">
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
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-45% via-white/55 via-82% to-white" />
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
                      <h1 className="pb-3 text-[28px] leading-8.5 md:text-[32px] md:leading-[38.4px]">
                        Camera Confidence Tips
                      </h1>

                      <p className="text-[17px] leading-6 text-black/80 md:text-[20px] md:leading-6.5">
                        Simple mindset shifts and posing guidance to feel powerful, and
                        authentic during a photoshoot.
                      </p>
                    </span>

                    {/* LINK */}
                    <div className="flex self-start text-[18px] font-normal leading-6.5 text-black transition-colors duration-300 group-hover:text-custom1 md:self-end md:text-[20px]">
                      Read more <ArrowUpRight className=" transition-transform duration-300 ease-in-out group-hover:rotate-45" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              </div>

            </div> 

        </div>




        <div className='w-full h-full pt-10 md:pt-20 xl:pt-30'>
            <Slide />
        </div>
      
      
    </section>
    </>
  )
}

export default page
