import Image from "next/image";
import TextReveal from "../ui/TextReveal";

const people = [
  {
    name: "Astrid Jensen",
    role: "Model",
    image: "/assets/asset 61.png",
  },
  {
    name: "Niko Madsen",
    role: "Tech Entrepreneur",
    image: "/assets/asset 63.png",
  },
  {
    name: "Sofia Lehtinen",
    role: "Singer-Songwriter",
    image: "/assets/asset 38.png",
  },
  {
    name: "Emil Sørensen",
    role: "Fashion Model",
    image: "/assets/asset 64.png",
  },
];

export default function AboutStorySection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#eef6fa] px-5 py-16 md:px-10 md:py-20">
      {/* background grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-size-[16.66%_100%]" />

      <div className="relative z-10">
        {/* TEXT */}
        <div className="max-w-312.5">
          <TextReveal as="p" className="text-[30px] font-light leading-tight text-black md:text-[42px] xl:text-[48px]">
          Based in <span className="text-custom1">Copenhagen, Denmark</span>, I'm a
          portrait and editorial photographer capturing raw, cinematic stories
          through light, mood, and honest expression.
        </TextReveal>

        <TextReveal
          as="p"
          delay={0.15}
          className="mt-8 text-[32px] font-light leading-tight text-black md:mt-14 md:text-[44px] xl:text-[52px]"
        >
          Over the past decade, I've photographed{" "}
          <span className="text-custom1">models,</span>{" "}
          <span className="text-custom1">musicians, and creative entrepreneurs</span>{" "}
          for brands and editorials including:
        </TextReveal>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-12 xl:grid-cols-4">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex w-full flex-col items-center justify-center border-4 border-white bg-[#eef6fa]/60 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden border-4 border-white sm:h-44">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-[22px] font-normal leading-7 text-black md:text-[25px] md:leading-7.5">
                  {person.name}
                </h3>
                <p className="mt-1 text-[17px] leading-6 text-black/45 md:text-[20px] md:leading-6.5">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
