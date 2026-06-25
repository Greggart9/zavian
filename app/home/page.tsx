import React from 'react'
import Hero from '../components/sections/Hero';
import FeaturedProjectsStack from '../components/sections/FeaturedProjectsStack';
import Services from '../components/sections/Services';
import Style from '../components/sections/Style';
import Benefits from '../components/sections/Benefits';
import Testimonial from '../components/sections/Testimonial';
import Blog from '../components/sections/Blog';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Slide from '../components/sections/Slide';
import RevealOnScroll from "../components/ui/RevealOnScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjectsStack />

      <RevealOnScroll >
      <Services />
      </RevealOnScroll>
       
       <RevealOnScroll>
      <Style />
      </RevealOnScroll>
      
      <RevealOnScroll >
      <Benefits />
      </RevealOnScroll>

      <RevealOnScroll >
      <Testimonial />
      </RevealOnScroll>

      <RevealOnScroll >
      <Blog />
      </RevealOnScroll>

      <RevealOnScroll >
      <Pricing />
      </RevealOnScroll>

      <RevealOnScroll >
      <FAQ />
      </RevealOnScroll>

      <Slide />
    </>
  )
}

export default Home