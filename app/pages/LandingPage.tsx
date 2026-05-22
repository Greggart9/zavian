import React from 'react'
import Hero from '../components/sections/Hero';
import FeaturedProject from '../components/sections/FeaturedProjectCard';
import { featuredProjects } from "@/data/types/featuredProjects";

const LandingPage = () => {
  return (
    <>
     <Hero />
     <FeaturedProject project={featuredProjects[0]} />
     <FeaturedProject project={featuredProjects[1]} />
     <FeaturedProject project={featuredProjects[2]} />
     <FeaturedProject project={featuredProjects[3]} />
    </>
  )
}

export default LandingPage