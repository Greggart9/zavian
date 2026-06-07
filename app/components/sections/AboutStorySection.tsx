import Image from "next/image";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#eef6fa] px-10 py-20">
      {/* background grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-size-[16.66%_100%]" />

      <div className="relative z-10">
        {/* TEXT */}
        <div className="max-w-312.5">
          <p className="text-[48px] font-thin leading-tight tracking-[-0.04em] text-black">
            Based in{" "}
            <span className="text-custom1">Copenhagen, Denmark</span>, I’m a
            portrait and
            <br />
            editorial photographer capturing raw, cinematic stories
            <br />
            through light, mood, and honest expression.
          </p>

          <p className="mt-14 text-[52px] font-thin leading-tight tracking-[-0.04em] text-black">
            Over the past decade, I’ve photographed{" "}
            <span className="text-custom1">models,</span>
            <br />
            <span className="text-custom1">
              musicians, and creative entrepreneurs
            </span>{" "}
            for brands and
            <br />
            editorials including:
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 flex items-center justify-between">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-[#eef6fa]/60 backdrop-blur-2xl border-4 w-75 border-white flex flex-col justify-center items-center p-5 shadow-2xl"
            >
              <div className="relative h-44 w-full overflow-hidden border-4 border-white">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-[25px] font-normal leading-7.5 text-black">
                  {person.name}
                </h3>
                <p className="mt-1 text-[20px] leading-6.5 text-black/45">
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