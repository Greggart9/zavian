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

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjectsStack />
      <Services />
      <Style />
      <Benefits />
      <Testimonial />
      <Blog />
      <Pricing />
      <FAQ />
      <Slide />
    </>
  )
}

export default Home