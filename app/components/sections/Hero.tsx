import React from 'react'
import Navbar from '../ui/Navbar';
import Button from '../ui/Button';
import ExpandableGallery from './ExpandableGallery';
import { Aperture, Users } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen bg-white p-4">
        {/* BACKGROUND GRID */}
        <div className="grid-overlay w-full h-full px-6 py-3 flex flex-col">

          <div className="flex-1">
          {/* <Navbar /> */}

         {/* HERO CONTENT */}
        <div className="pt-26 mb-8 flex justify-between relative ">
          <h1 className="text-[84px] leading-23 font-thin mb-6">Capturing <span className="text-custom1">Moments</span> & <br/> Crafting Beautiful <span className="text-custom1">Stories</span></h1>
           
          <Button className="self-end" href="/contact" variant="black">
            Get in touch
          </Button>
        </div>

        {/* EXPANDABLE GALLERY */}
        <div className="  flex justify-center items-center">
          <ExpandableGallery />
        </div>

          </div>

        <div className="flex justify-between font-medium">
          <p>I’m Zavian, a seasoned photographer with 10 years of experience </p>
          <p className="flex"><span className="pr-2"><Aperture /></span>5000+ Photos Snapped <span className="pr-2 pl-2"><Users strokeWidth={2} /></span> 145 Happy Clients</p>
        </div>


        </div>
      </section>
    </>
  )
}

export default Hero