import FeaturedProjectsStack from "../components/sections/FeaturedProjectsStack";
import ProjectSlide from "../components/sections/ProjectSlide";

export default function ProjectsPage() {
  const b = "absolute h-3 w-3 border-custom1";

  return (
    <main className="w-full">
      {/* HEADING */}
      <section className="zavian-grid flex w-full flex-col items-center justify-center gap-5 px-5 pb-14 pt-30 md:px-10 md:pb-20 md:pt-35">
        <div className="relative mb-4 inline-flex w-fit items-center px-3">
          <span
            className={`${b} right-0 top-0 border-r-3 border-t-3`}
          />

          <span
            className={`${b} bottom-0 left-0 border-b-3 border-l-3`}
          />

          <span className="text-[15px] font-light leading-[22.5px] text-gray-700 md:text-[17px] md:leading-[23.8px]">
            PROJECTS
          </span>
        </div>

        <h1 className="text-center text-[42px] font-light leading-12.5 md:text-[64px] md:leading-18 xl:text-[84px] xl:leading-[92.4px]">
          Crafting Ideas Into
          <br />

          <span className="text-custom1">
            Bold Masterpieces
          </span>
        </h1>

        <p className="max-w-125 text-center text-[17px] font-normal leading-6.5 text-gray-900 md:max-w-135 md:text-[25px] md:leading-7.5">
          From striking portraits to branding campaigns and editorial shoots,
          here&apos;s a glimpse of my creative shots.
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <FeaturedProjectsStack />

      {/* PROJECT SLIDER */}
      <ProjectSlide />
    </main>
  );
}