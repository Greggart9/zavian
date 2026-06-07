import React from 'react'
import FeaturedProjectsStack from '../components/sections/FeaturedProjectsStack';
import Slide from '../components/sections/Slide';

const page = () => {

     const b = "absolute w-3 h-3 border-custom1";

  return (
    <>
    <section className='w-full h-fit flex flex-col items-center justify-center '>

        {/* HEADING */}
        <div className='w-full h-fit flex flex-col items-center justify-center gap-5  grid-overlay px-10 pt-35 pb-20'>

            <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                <span className="text-[17px] leading-[23.8px] font-light text-gray-700">PROJECTS</span>
             </div>
          <h1 className='text-[84px] font-light leading-[92.4px] text-center'>Crafting Ideas Into <br/> <span className='text-custom1'>Bold Masterpieces</span></h1>
          <p className='text-[25px] leading-7.5 font-normal max-w-135 text-center text-gray-900'>From striking portraits to branding campaigns and editorial shoots, here’s a glimpse of my creative shots.</p>
        </div>


        {/* MAIN BODY */}
          <div className='w-full h-full'>
            <FeaturedProjectsStack />
          </div>

        <div className='w-full h-full pt-30'>
            <Slide />
          </div>
      
      
    </section>

      
    </>
  )
}

export default page