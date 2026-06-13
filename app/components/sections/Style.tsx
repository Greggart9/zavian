import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';

const Style = () => {
    const b = "absolute w-3 h-3 border-custom1";



  return (
    <>
    <section className="flex flex-col items-center justify-center gap-10 py-15 md:py-20 bg-white w-full px-5 lg:px-10 ">
        {/* TOP */}
        <div className="text-center">
            <div className="relative inline-flex items-center px-3">
                <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                <span className="text-sm font-light tracking-widest text-gray-700">STYLE</span>
            </div>

            <p className=" text-[30px] md:text-[60px] lg:text-[72px] font-light pt-3">Zavian’s Signature</p>
            <p className="text-[30px] md:text-[60px] lg:text-[72px] font-light leading-13 md:leading-17.5 text-custom1">Portrait Style</p>
            <p className="text-[15px] md:text-[17px] text-gray-700 max-w-lg pt-3">
                Raw. Cinematic. Unfiltered. Every frame I shoot is built
                on light, emotion, and attitude. No cliche presets
                just real presence, captured with precision.
            </p>

            <Button variant="black" href="/about" className="mt-4">Learn more about me</Button>
         
        </div>

        {/* MIDDLE */}
        <div className="mt-4 flex w-full max-w-8xl flex-col gap-3 md:gap-5 md:flex-row md:flex-wrap md:justify-center xl:flex-nowrap">

            <div className="relative h-112 w-full overflow-hidden border-8 border-white shadow-xl md:h-120 md:w-[calc(50%-0.625rem)] xl:h-120 xl:w-1/3 lines lines-top">
                <Image src="/assets/asset 2.png" alt="Style 1" width={473} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 473px" className="h-[68.5%] w-full object-cover" />
                
                <div className="absolute bottom-0 z-30 flex h-[31.5%] w-full flex-col justify-center space-y-2 bg-custom1 p-5 md:p-8">
                    <h1 className="text-[22px] leading-7.5 text-white md:text-[25px]">Lit Like Cinema</h1>
                    <p className="text-[15px] leading-[23.8px] text-white/90 md:text-[17px]">Light isn&apos;t just technical, it&apos;s emotional. I use it to build mood, not just exposure.</p>
                </div>
            </div>

            <div className="relative h-112 w-full overflow-hidden border-8 border-white shadow-xl md:h-120 md:w-[calc(50%-0.625rem)] xl:h-120 xl:w-1/3 lines lines-bottom">
               <Image src="/assets/asset 32.png" alt="Style 2" width={473} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 473px" className="absolute bottom-0 h-[68.5%] w-full object-cover" />

                <div className="absolute inset-x-0 top-0 z-30 flex h-[31.5%] w-full flex-col justify-center space-y-2 bg-black p-5 md:p-8">
                    <h1 className="text-[22px] leading-7.5 text-white md:text-[25px]">Unscripted Emotion</h1>
                    <p className="text-[15px] leading-[23.8px] text-white/90 md:text-[17px]">No stiff poses. Just raw, instinctive moments caught between the beats.</p>
                </div>
            </div>

            <div className="relative h-112 w-full overflow-hidden border-8 border-white shadow-xl md:h-120 md:w-[calc(50%-0.625rem)] xl:h-120 xl:w-1/3 lines lines-top">
                <Image src="/assets/asset 5.png" alt="Style 3" width={473} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 473px" className="h-[68.5%] w-full object-cover" />

                    <div className="absolute inset-x-0 bottom-0 z-30 flex h-[31.5%] w-full flex-col justify-center space-y-2 bg-custom1 p-5 md:p-8 ">
                    <h1 className="text-[22px] leading-7.5 text-white md:text-[25px]">Undeniably You</h1>
                    <p className="text-[15px] leading-[23.8px] text-white/90 md:text-[17px]">No distractions. No personas. Just the version of you that hits hardest.</p>
                </div>
            </div>

        </div>

        {/* BOTTOM */}
        <div className='w-full'>
            <hr className=" border-gray-300" />
             <span className="flex justify-between pt-3.5 text-[17px]">
                <p>[ 2 ]</p>
                <p>3 Pillars of Zavian&apos;s Style</p>
             </span>
        </div>

    </section>
    </>
  )
}

export default Style
