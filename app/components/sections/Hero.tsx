import React from 'react'
import Button from '../ui/Button';
import ExpandableGallery from './ExpandableGallery';
import { Aperture, Users } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="w-full h-fit bg-white xl:p-4 mb-5">
        {/* BACKGROUND GRID */}
        <div className="zavian-grid w-full h-full px-6 py-3 flex flex-col">

          <div className="flex-1">
          {/* <Navbar /> */}

         {/* HERO CONTENT */}
        <div className="pt-26 mb-8 flex-col xl:flex justify-between relative ">
          <h1 className=" text-[55px] md:text-[70px] lg:text-[80px] lg:w-200 xl:w-250 leading-16 md:leading-20 lg:leading-23 font-light ">Capturing <span className="text-custom1">Moments</span> & Crafting Beautiful <span className="text-custom1">Stories</span></h1>
           
          <Button className="mt-8 md:mt-10" href="/contact" variant="black">
            Get in touch
          </Button>
        </div>

        {/* EXPANDABLE GALLERY */}
        <div className="  flex justify-center items-center">
          <ExpandableGallery />
        </div>

          </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between font-medium border-t border-gray-300 pt-6 text-[12px] md:text-[15px] xl:text-[17px] leading-[23.8px]">
          <p className="md:w-110 lg:w-160 ">I’m Zavian, a seasoned photographer with 10 years of experience in capturing life’s most unforgettable moments.</p>
          <p className="flex flex-col lg:flex-row gap-4"> <span className="flex gap-2"><Aperture size={25} strokeWidth={1.5} />5000+ Photos Snapped </span>
          <span className="flex gap-2"> <Users strokeWidth={2} />145 Happy Clients</span> </p>
        </div>


        </div>
      </section>
    </>
  )
}

export default Hero
