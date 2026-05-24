import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (
    <>
    <section className='flex flex-col bg-neutral-100 h-fit px-10 py-20'>

        {/* TOP */}
        <div>
           <p className="w-325 text-[60px] font-thin leading-17.25">I create bold <span className="text-custom1">portraits</span>,
            editorial <span className="text-custom1">headshots</span>, and <span className="text-custom1">cinematic event</span>
             coverage capturing real emotion with lighting and style
              that feel powerful, timeless, and true to who you are.</p>
        </div>

        {/* MIDDLE */}
        <div className='flex flex-col gap-10 mt-20'>

              {/* SERVICE 1 */}
            <div className='flex justify-between items-center bg-blue-50/40 h-45 gap-10 p-7.5 border-4 border-white shadow-xl'>

                {/* LEFT */}
                <div className='flex flex-col flex-[2.2] gap-3'>
                    <span className="flex justify-between"><p className="text-[32px] leading-[38.4px]">Portraits & Headshots</p>  <p>[ 1 ]</p></span>
                    <hr className="border-gray-300" />
                    <p className="text-[17px] text-gray-500 leading-[23.8px]">Showcase your truest self with clarity. Bold, clean<br/> portraits crafted with cinematic light.</p>
                </div>

                {/* RIGHT */}
                <div className='flex flex-1 gap-5 '>
                    <div className="">
                        <Image className="object-cover object-[75%_25%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 25.png" alt="Service 1" />
                    </div>
                    <div className="">
                        <Image className="object-cover object-[90%_10%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 26.png" alt="Service 2" />
                    </div>
                </div>

            </div>

             {/* SERVICE 2 */}
            <div className='flex justify-between items-center bg-blue-50/40 h-45 gap-10 p-7.5 border-4 border-white shadow-xl'>

                {/* LEFT */}
                <div className='flex flex-col flex-[2.2] gap-3'>
                    <span className="flex justify-between"><p className="text-[32px] leading-[38.4px]">Commercial & Branding</p>  <p>[ 2 ]</p></span>
                    <hr className="border-gray-300" />
                    <p className="text-[17px] text-gray-500 leading-[23.8px]">Stand out with visuals that sell. Product, campaign,<br /> and brand shoots with style.</p>
                </div>

                {/* RIGHT */}
                <div className='flex flex-1 gap-5 '>
                    <div className="">
                        <Image className="object-cover object-[75%_25%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 27.png" alt="Service 1" />
                    </div>
                    <div className="">
                        <Image className="object-cover object-[90%_10%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 28.png" alt="Service 2" />
                    </div>
                </div>

            </div>

            {/* SERVICE 3 */}
            <div className='flex justify-between items-center bg-blue-50/40 h-45 gap-10 p-7.5 border-4 border-white shadow-xl'>

                {/* LEFT */}
                <div className='flex flex-col flex-[2.2] gap-3'>
                    <span className="flex justify-between"><p className="text-[32px] leading-[38.4px]">Creative Editorials</p>  <p>[ 3 ]</p></span>
                    <hr className="border-gray-300" />
                    <p className="text-[17px] text-gray-500 leading-[23.8px]">Concept-led shoots with striking mood. Where art<br /> direction meets timeless imagery.</p>
                </div>

                {/* RIGHT */}
                <div className='flex flex-1 gap-5 '>
                    <div className="">
                        <Image className="object-cover object-[75%_25%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 29.png" alt="Service 1" />
                    </div>
                    <div className="">
                        <Image className="object-cover object-[90%_10%] w-[200px] h-[120px] border-4 border-white shadow-2xl" width={200} height={120} src="/assets/asset 30.png" alt="Service 2" />
                    </div>
                </div>

            </div>



        </div>

        {/* BOTTOM */}
        <div className='mt-10'>
            <hr className=" border-gray-300" />
             <span className="flex justify-between pt-3.5 text-[17px]">
                <p>[ 1 ]</p>
                <p>Explore Zavian's Services</p>
             </span>
        </div>

    </section>
    </>
  )
}

export default Services