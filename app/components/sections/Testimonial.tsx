import React from 'react'
import Image from 'next/image';
import { Brackets, Quote } from 'lucide-react';

const Testimonial = () => {


    const b = "absolute w-3 h-3 border-custom1";
     const c = "absolute w-10 h-10 border-custom1";

  return (
    <div>
        <section className="flex flex-col items-center justify-center gap-10 py-20 bg-white w-full px-5  md:px-10 ">
            {/* TOP */}
            <div className="text-center">                                                                                                                                   
                <div className="relative inline-flex items-center px-3">
                    <span className={`${b} top-0 right-0 border-t-2 border-r-2`} />
                    <span className={`${b} bottom-0 left-0 border-b-2 border-l-2`} />
                    <span className="text-sm font-light tracking-widest text-gray-700">TESTIMONIALS</span>
                </div>

                <p className="text-[40px] md:text-[60px] xl:text-[72px] font-light pt-3">What Clients Say</p>
                <p className="text-[40px] md:text-[60px] xl:text-[72px] leading-12 md:leading-14 xl:leading-17.5 font-light text-custom1">Boldly</p>
                <p className=" text-[15px] md:text-[17px] text-gray-700 max-w-sm md:max-w-lg pt-3">
                   Real words from real people. Bold portraits, effortless shoots,
                    and a style that leaves a lasting impression.
                </p>

            
            </div>

            {/* MIDDLE */}
            <div className="grid w-full grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:mt-10 xl:grid-cols-4">
                    
                    {/* FIRST */}
                <div className="relative h-97.75 w-full border-4 border-white p-10 shadow-xl overflow-hidden">
                  
                  
                    <Image src="/assets/asset 38.png" alt="" fill sizes="(max-width: 768px) 100vw, 345px" className="object-cover" />
                

                    <div className="absolute inset-0 z-10 bg-black/30 m-4 backdrop-blur-xs" />

                    <span className={`${c} top-2 right-2 border-t-3 border-r-3`} />
                    <span className={`${c} bottom-2 left-2 border-b-3 border-l-3`} />

                    {/* Content */}
                    <div className="relative z-20 h-full flex flex-col justify-between pb-20 font-normal">
                        {/* Top — avatar + name */}
                        <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 border-3 border-white rounded-sm overflow-hidden shrink-0">
                            <Image src="/assets/asset 39.png" alt="" fill sizes="48px" className="object-cover" />
                        </div>
                        <div>
                            <p className="text-white/70 text-[17px] ">Mia Torres</p>
                            <p className="text-white/70 text-[15px]">Creative Director</p>
                        </div>
                        </div>

                        {/* Quote */}
                        <p className="text-white text-[20px] leading-6.5">
                        Zavian captures moments I didn’t even realise were powerful. Every photo felt like art.
                        </p>

                            {/* Divider */}
                        <hr className="text-custom1 " />

                        {/* Closing quote mark */}
                        <span className="absolute text-white/60 text-[64px] bottom-0 right-0"><Quote size={54} strokeWidth={1.5} /></span>
                    </div>
                    
                </div>
                   
                   {/* SECOND */}
                <div className="relative h-97.75 w-full bg-[#ebeff2] border-4 border-white p-10 shadow-xl">
                    <span className={`${c} top-2 right-2 border-t-3 border-r-3`} />
                    <span className={`${c} bottom-2 left-2 border-b-3 border-l-3`} />

                         {/* Opening quote mark */}
                            <span className="absolute text-[#e63b1f] text-[64px] top-8 left-8 -scale-x-100 -scale-y-100"><Quote size={54} strokeWidth={1.5} /></span>

                            {/* Quote */}
                            <p className="text-black text-[20px] font-normal leading-6.5 flex-1 flex items-center mt-20">
                               Fast, professional, and cinematic results. Zavian just gets it.
                            </p>

                            {/* Divider */}
                            <hr className="text-custom1 my-10" />


                           {/* Top — avatar + name */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 overflow-hidden shrink-0">
                                <Image src="/assets/asset 40.png" alt="" fill sizes="48px" className="object-cover rounded-sm border-3 border-white" />
                                </div>
                                <div>
                                <p className="text-black text-[17px] font-normal">Luca Hansen</p>
                                <p className="text-black/70 text-[15px] font-normal">Model & Actor</p>
                                </div>
                            </div>
                   
                </div>
                    
                    {/* THIRD */}
                <div className="relative h-97.75 w-full bg-black border-4 border-white shadow-xl p-10">
                    <span className={`${c} top-2 right-2 border-t-3 border-r-3`} />
                    <span className={`${c} bottom-2 left-2 border-b-3 border-l-3`} />

                          {/* Top — avatar + name */}
                            <div className="flex items-center gap-3 font-normal">
                                <div className="relative w-12 h-12 overflow-hidden shrink-0">
                                <Image src="/assets/asset 41.png" alt="" fill sizes="48px" className="object-cover rounded-sm border-3 border-white" />
                                </div>
                                <div>
                                <p className="text-white/70 text-[17px]">Daniel Kim</p>
                                <p className="text-white/70 text-[15px]">Brand Strategist</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="text-custom1 my-10" />

                            {/* Quote */}
                            <p className="text-white text-[20px] font-normal leading-6.5 flex-1 flex items-center">
                               Bold, editorial, and real. Our brand visuals instantly levelled up with his eye for style.
                            </p>

                            {/* Closing quote mark */}
                            <span className="absolute text-[#e63b1f] text-[64px] bottom-8 right-8"><Quote size={54} strokeWidth={1.5} /></span>
                    
                </div>

                    {/* FOURTH */}
                <div className="relative flex h-97.75 w-full flex-col justify-end bg-[#ebeff2] border-4 border-white p-10 shadow-xl">
                    <span className={`${c} top-2 right-2 border-t-3 border-r-3`} />
                    <span className={`${c} bottom-2 left-2 border-b-3 border-l-3`} />


                        {/* Opening quote mark */}
                            <span className="absolute text-[#e63b1f] text-[64px] top-8 left-8 -scale-x-100 -scale-y-100"><Quote size={54} strokeWidth={1.5} /></span>

                            {/* Quote */}
                            <p className="text-black text-[20px] font-normal leading-6.5 flex-1 flex items-center mt-40">
                               The shoot was so easy and natural. I’ve never felt more confident in front of a camera.
                            </p>

                            {/* Divider */}
                            <hr className="text-custom1 my-10" />


                           {/* Top — avatar + name */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 overflow-hidden shrink-0">
                                <Image src="/assets/asset 42.png" alt="" fill sizes="48px" className="object-cover rounded-sm border-3 border-white" />
                                </div>
                                <div>
                                <p className="text-black text-[17px] font-normal">Priya Nair</p>
                                <p className="text-black/70 text-[15px] font-normal">Freelance Writer</p>
                                </div>
                            </div>
                    
                </div>
            </div>

            {/* BOTTOM */}
            <div className='w-full'>
                <hr className=" border-gray-300" />
                <span className="flex justify-between pt-3.5 text-[17px]">
                    <p>[ 4 ]</p>
                    <p>Clients Speak. Results Show</p>
                </span>
            </div>

        </section>
    </div>
  )
}

export default Testimonial
