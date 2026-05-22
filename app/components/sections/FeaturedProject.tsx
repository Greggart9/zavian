// components/sections/FeaturedProject.tsx
"use client";

import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "@/data/types/featuredProjects";

export default function FeaturedProject() {
  return (
    <>
      {featuredProjects.map((project) => (
        <FeaturedProjectCard key={project.id} project={project} />
      ))}
    </>
  );
}