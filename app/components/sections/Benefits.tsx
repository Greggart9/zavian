import React from 'react'
import Button from '../ui/Button';
import Image from 'next/image';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const Benefits = () => {

    const b = "absolute w-3 h-3 border-custom1";

        const services = [
        {
            id: 1,
            title: "Retouching With Precision",
            tagline: "Subtle edits. Maximum impact.",
            image: "/assets/asset 34.png",
            span: "col-span-2 row-span-1", // wide top-left
        },
        {
            id: 2,
            title: "Pro Gear Always",
            tagline: "Shot on top-tier tech",
            image: "/assets/asset 36.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 3,
            title: "Flexible Shooting Styles",
            tagline: "Studio Natural. On-location",
            image: "/assets/asset 9.png",
            span: "col-span-1 row-span-1",
        },
        {
            id: 4,
            title: "Editorial-Level Quality",
            tagline: "Magazine-grade portraits",
            image: "/assets/asset 37.png",
            span: "col-span-1 row-span-2", // tall right column
        },
        ];


  return (
    <>
      <section className="flex flex-col items-center justify-center py-20 grid-overlay w-full h-fit px-10 ">
         
         {/* TOP */}
        <div className="flex flex-col h-[196px] w-full">

                    <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                        <span className={`${b} top-0 right-0 border-t-2 border-r-2`} />
                        <span className={`${b} bottom-0 left-0 border-b-2 border-l-2`} />
                        <span className="text-sm font-semibold tracking-widest text-gray-500">BENEFITS</span>
                    </div>
            
            <div className="flex gap-10 justify-between">
            {/* LEFT */}
            <div>

            <h1 className="text-[72px] leading-[79.2px] font-thin text-black">Why Clients Choose <br /><span className="text-custom1">Zavian</span></h1>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-5 items-end justify-end">
                <p className="text-[17px] text-gray-600 leading-[23.8px] text-right max-w-[340px]">Editorial lighting, smooth process, and portraits that feel like you. No awkward poses. Just real results, fast.</p>
                <Button variant="black" href="/contact" className="">Book a call</Button>

            </div>
            </div>

        </div>

        {/* MIDDLE */}
        <div className="w-full py-10">
                <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[782px]">

                    {/* [1] Wide top-left — before/after slider */}
                    <div className="relative col-span-2 row-span-1 overflow-hidden group border-4 border-white">
                    <BeforeAfterSlider
                        after="/assets/asset 34.png"
                        before="/assets/asset 35.png"
                        label="Retouching With Precision"
                        tagline="Subtle edits. Maximum impact."
                        index="1"
                    />
                    </div>

                    {/* [4] Tall right — spans 2 rows */}
                    <div className="relative col-span-1 row-span-2 overflow-hidden group border-4 border-white">
                    <Image src={services[3].image} alt={services[3].title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 70%)" }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Navbar sits here in the design — skip if you have a global one */}
                        <div />
                        <div className="flex flex-col gap-1">
                        <h2 className="text-white text-[32px] font-thin leading-[38.4px]">
                            Editorial-Level<br/> Quality
                        </h2>
                        <div className="flex justify-between items-center pt-2 border-t border-white/20 text-[17px] leading-[23.8px]">
                            <span className="text-white/60 tracking-widest">[ 4 ]</span>
                            <span className="text-white/80 ">{services[3].tagline}</span>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* [2] Bottom-left */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden group border-4 border-white">
                    <Image src={services[1].image} alt={services[1].title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 70%)" }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div />
                        <div className="flex flex-col gap-1">
                        <h2 className="text-white text-[32px] font-thin leading-[38.4px]">
                            Pro Gear<br />Always
                        </h2>
                        <div className="flex justify-between items-center pt-2 border-t border-white/20 text-[17px] leading-[23.8px]">
                            <span className="text-white/60  tracking-widest">[ 2 ]</span>
                            <span className="text-white/80 ">{services[1].tagline}</span>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* [3] Bottom-middle */}
                    <div className="relative col-span-1 row-span-1 overflow-hidden group border-4 border-white">
                    <Image src={services[2].image} alt={services[2].title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 70%)" }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div />
                        <div className="flex flex-col gap-1">
                        <h2 className="text-white text-[32px] font-thin leading-[38.4px]">
                        Flexible Shooting<br/> Styles
                        </h2>
                        <div className="flex justify-between items-center pt-2 border-t border-white/20 text-[17px] leading-[23.8px]">
                            <span className="text-white/60  tracking-widest">[ 3 ]</span>
                            <span className="text-white/80">{services[2].tagline}</span>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
        </div>

        {/* BOTTOM */}
        <div className='w-full'>
            <hr className=" border-gray-300" />
             <span className="flex justify-between pt-3.5 text-[17px]">
                <p>[ 3 ]</p>
                <p>Designed For Your Vision</p>
             </span>
        </div>

      </section>
    </>
  )
}

export default Benefits