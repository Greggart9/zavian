import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';

const Style = () => {
    const b = "absolute w-3 h-3 border-custom1";

  return (
    <>
    <section className="flex flex-col items-center justify-center gap-10 py-20 bg-neutral-300 w-full px-10 ">
        {/* TOP */}
        <div className="text-center">
            <div className="relative inline-flex items-center px-3 py-2">
                <span className={`${b} top-0 right-0 border-t-2 border-r-2`} />
                <span className={`${b} bottom-0 left-0 border-b-2 border-l-2`} />
                <span className="text-sm font-semibold tracking-widest text-gray-500">STYLE</span>
            </div>

            <p className="text-6xl font-thin pt-3">Zavian’s Signature</p>
            <p className="text-6xl font-thin text-custom1 pt-4">Portrait Style</p>
            <p className="text-[18px] text-gray-700 max-w-lg pt-5">
                Raw. Cinematic. Unfiltered. Every frame I shoot is built
                on light, emotion, and attitude. No cliche presets
                just real presence, captured with precision.
            </p>

            <Button variant="black" href="/about" className="mt-4">Learn more about me</Button>
         
        </div>

        {/* MIDDLE */}
        <div className="flex gap-3 justify-center">

            <div className="w-[473px] h-[480px] relative border-8 border-white lines lines-top shadow-xl">
                <Image src="/assets/asset 2.png" alt="Style 1" width={473} height={300} className="object-cover w-full h-[68.5%]" />
                
                <div className="absolute  bottom-0 z-30 p-8 max-w-[100%] h-[147px] space-y-2 bg-custom1">
                    <h1 className="text-[25px] leading-[30px] text-white">Lit Like Cinema</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">Light isn't just technical, it's emotional. I use it to build mood, not just exposure.</p>
                </div>
            </div>

            <div className="w-[473px] h-[480px] relative border-8 border-white lines lines-bottom shadow-xl">
               <Image src="/assets/asset 32.png" alt="Style 2" width={473} height={300} className="object-cover w-full h-[68.5%] absolute bottom-0" />

                <div className="absolute inset-x-0 top-0 z-30 p-8 max-w-[100%] space-y-2 bg-black">
                    <h1 className="text-[25px] leading-[30px] text-white">Unscripted Emotion</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">No stiff poses. Just raw, instinctive moments caught between the beats.</p>
                </div>
            </div>

            <div className="w-[473px] h-[480px] relative border-8 border-white lines lines-top shadow-xl">
                <Image src="/assets/asset 5.png" alt="Style 3" width={473} height={300} className="object-cover w-full h-[68.5%]" />

                    <div className="absolute inset-x-0 bottom-0 z-30 p-8 max-w-[100%] space-y-2 bg-custom1 ">
                    <h1 className="text-[25px] leading-[30px] text-white">Undeniably You</h1>
                    <p className="text-[17px] leading-[23.8px] text-[#CCCCCC]">No distractions. No personas. Just the version of you that hits hardest.</p>
                </div>
            </div>

        </div>

        {/* BOTTOM */}
        <div className='w-full'>
            <hr className=" border-gray-500" />
             <span className="flex justify-between pt-3.5 text-[17px]">
                <p>[ 1 ]</p>
                <p>Explore Zavian's Services</p>
             </span>
        </div>

    </section>
    </>
  )
}

export default Style