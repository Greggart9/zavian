import React from 'react'
import FeaturedProjectsStack from '../components/sections/FeaturedProjectsStack';
import ProjectSlide from '../components/sections/ProjectSlide';

const page = () => {

     const b = "absolute w-3 h-3 border-custom1";

  return (
    <>
    <section className='w-full h-fit flex flex-col items-center justify-center '>

        {/* HEADING */}
        <div className='w-full h-fit flex flex-col items-center justify-center gap-5 zavian-grid px-5 pt-30 pb-14 md:px-10 md:pt-35 md:pb-20'>

            <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                <span className={`${b} top-0 right-0 border-t-3 border-r-3`} />
                <span className={`${b} bottom-0 left-0 border-b-3 border-l-3`} />
                <span className="text-[15px] leading-[22.5px] font-light text-gray-700 md:text-[17px] md:leading-[23.8px]">PROJECTS</span>
             </div>
          <h1 className='text-[42px] font-light leading-12.5 text-center md:text-[64px] md:leading-18 xl:text-[84px] xl:leading-[92.4px]'>Crafting Ideas Into <br/> <span className='text-custom1'>Bold Masterpieces</span></h1>
          <p className='max-w-125 text-center text-[17px] font-normal leading-6.5 text-gray-900 md:max-w-135 md:text-[25px] md:leading-7.5'>From striking portraits to branding campaigns and editorial shoots, here&apos;s a glimpse of my creative shots.</p>
        </div>


        {/* MAIN BODY */}
          <div className='w-full h-full'>
            <FeaturedProjectsStack />
          </div>

        <div className='w-full h-full'>
            <ProjectSlide />
          </div>
      
      
    </section>

      
    </>
  )
}

export default page
