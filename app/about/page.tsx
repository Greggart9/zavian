import React from 'react'
import Image from 'next/image'
import Button from '../components/ui/Button'
import AboutStorySection from '../components/sections/AboutStorySection';
import AwardsHoverList from '../components/sections/AwardsHoverList';
import AboutService from '../components/sections/AboutService';


const page = () => {


  return (
    <>
       <section>
      
      {/* TOP */}
      <div className="relative w-full h-[90vh] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/assets/asset 62.png"
          alt="Project Hero"
          fill
          sizes="80vw"
          priority
          className="object-cover -z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full black-glow pointer-events-none -z-10" />

        {/* Content */}
        <div className="relative z-150 px-10 pt-20 pb-10 flex flex-col justify-end w-full h-full">

          {/* BOTTOM */}
          <div className=" flex flex-col w-full">

            {/* FIRST BOTTOM */}
              <div>
                <p className="text-white text-[84px] leading-[92.4px] ">
                Hey,<br />I’m Zavian Markus Holm
                </p>
                <p className="text-white/90 text-[25px] leading-7.5">Your go-to guy for cinematic portraits that are powerful, honest,<br /> and undeniably you.</p>
              </div>


            {/* SECOND BOTTOM */}
            <div className="pt-10 text-white/90">
              <hr />
              <div className="flex justify-between pt-3 text-[17px] leading-[23.8px]">
                <p>[ 300+ HAPPY CLIENTS SERVED ]</p>
                <p>20+ BRAND & AGENCY PARTNERSHIPS</p>
                <p>[ 12+ YEARS CRAFTING VISUAL STORIES ]</p>
              </div>
            </div>

          </div>

      </div>
      </div>
       
       {/* MIDDLE */}
      <div className="bg-red-400 w-full h-fit">
        <AboutStorySection />
        <AwardsHoverList />
        <AboutService />

      </div>


      </section>
    </>
  )
}

export default page