import React from 'react'
import Image from 'next/image'
import AboutStorySection from '../components/sections/AboutStorySection';
import AwardsHoverList from '../components/sections/AwardsHoverList';
import AboutService from '../components/sections/AboutService';


const page = () => {


  return (
    <>
       <section>
      
      {/* TOP */}
      <div className="relative h-screen min-h-175 w-full overflow-hidden md:h-[90vh]">

        {/* Background Image */}
        <Image
          src="/assets/asset 62.png"
          alt="Project Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover -z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full black-glow pointer-events-none -z-10" />

        {/* Content */}
        <div className="relative z-150 flex h-full w-full flex-col justify-end px-5 pb-8 pt-24 md:px-10 md:pb-10 md:pt-20">

          {/* BOTTOM */}
          <div className=" flex flex-col w-full">

            {/* FIRST BOTTOM */}
              <div>
                <p className="text-[42px] leading-[50px] text-white md:text-[64px] md:leading-[72px] xl:text-[84px] xl:leading-[92.4px]">
                Hey,<br />I’m Zavian Markus Holm
                </p>
                <p className="max-w-210 text-[17px] leading-6.5 text-white/90 md:text-[25px] md:leading-7.5">Your go-to guy for cinematic portraits that are powerful, honest, and undeniably you.</p>
              </div>


            {/* SECOND BOTTOM */}
            <div className="pt-8 text-white/90 md:pt-10">
              <hr />
              <div className="flex flex-col gap-2 pt-3 text-[15px] leading-[22.5px] md:text-[17px] md:leading-[23.8px] lg:flex-row lg:justify-between lg:gap-6">
                <p>[ 300+ HAPPY CLIENTS SERVED ]</p>
                <p>20+ BRAND & AGENCY PARTNERSHIPS</p>
                <p>[ 12+ YEARS CRAFTING VISUAL STORIES ]</p>
              </div>
            </div>

          </div>

      </div>
      </div>
       
       {/* MIDDLE */}
      <div className="w-full h-fit bg-[#eef6fa]">
        <AboutStorySection />
        <AwardsHoverList />
        <AboutService />

      </div>


      </section>
    </>
  )
}

export default page
