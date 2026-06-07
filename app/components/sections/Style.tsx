import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';

const Style = () => {
    const b = "absolute w-3 h-3 border-custom1";



  return (
    <>
    <section className="flex flex-col items-center justify-center gap-10 py-20 bg-white w-full px-10 ">
        {/* TOP */}
        <div className="text-center">
            <div className="relative inline-flex items-center px-3">
                <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                <span className="text-sm font-light tracking-widest text-gray-700">STYLE</span>
            </div>

            <p className="text-[72px] font-light pt-3">Zavian’s Signature</p>
            <p className="text-[72px] font-light leading-17.5 text-custom1">Portrait Style</p>
            <p className="text-[17px] text-gray-700 max-w-lg pt-3">
                Raw. Cinematic. Unfiltered. Every frame I shoot is built
                on light, emotion, and attitude. No cliche presets
                just real presence, captured with precision.
            </p>

            <Button variant="black" href="/about" className="mt-4">Learn more about me</Button>
         
        </div>

        {/* MIDDLE */}
        <div className="flex gap-3 justify-center mt-4 ">

            <div className="w-118.25 h-120 relative border-8 border-white lines lines-top shadow-xl">
                <Image src="/assets/asset 2.png" alt="Style 1" width={473} height={300} sizes="(max-width: 768px) 100vw, 473px" className="object-cover w-full h-[68.5%]" />
                
                <div className="absolute  bottom-0 z-30 p-8 max-w-full h-36.75 space-y-2 bg-custom1">
                    <h1 className="text-[25px] leading-7.5 text-white">Lit Like Cinema</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">Light isn't just technical, it's emotional. I use it to build mood, not just exposure.</p>
                </div>
            </div>

            <div className="w-118.25 h-120 relative border-8 border-white lines lines-bottom shadow-xl">
               <Image src="/assets/asset 32.png" alt="Style 2" width={473} height={300} sizes="(max-width: 768px) 100vw, 473px" className="object-cover w-full h-[68.5%] absolute bottom-0" />

                <div className="absolute inset-x-0 top-0 z-30 p-8 max-w-full space-y-2 bg-black">
                    <h1 className="text-[25px] leading-7.5 text-white">Unscripted Emotion</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">No stiff poses. Just raw, instinctive moments caught between the beats.</p>
                </div>
            </div>

            <div className="w-118.25 h-120 relative border-8 border-white lines lines-top shadow-xl">
                <Image src="/assets/asset 5.png" alt="Style 3" width={473} height={300} sizes="(max-width: 768px) 100vw, 473px" className="object-cover w-full h-[68.5%]" />

                    <div className="absolute inset-x-0 bottom-0 z-30 p-8 max-w-full space-y-2 bg-custom1 ">
                    <h1 className="text-[25px] leading-7.5 text-white">Undeniably You</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">No distractions. No personas. Just the version of you that hits hardest.</p>
                </div>
            </div>

        </div>

        {/* BOTTOM */}
        <div className='w-full'>
            <hr className=" border-gray-300" />
             <span className="flex justify-between pt-3.5 text-[17px]">
                <p>[ 2 ]</p>
                <p>3 Pillars of Zavian's Style</p>
             </span>
        </div>

    </section>
    </>
  )
}

export default Style