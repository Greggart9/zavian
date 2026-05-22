import React from 'react'
import Hero from '../components/sections/Hero';
import FeaturedProject from '../components/sections/FeaturedProjectCard';
import { featuredProjects } from "@/data/types/featuredProjects";
import Services from '../components/sections/Services';

const LandingPage = () => {
  return (
    <>
     <Hero />
     <FeaturedProject project={featuredProjects[0]} />
     <FeaturedProject project={featuredProjects[1]} />
     <FeaturedProject project={featuredProjects[2]} />
     <FeaturedProject project={featuredProjects[3]} />
     <Services />
    </>
  )
}

export default LandingPage