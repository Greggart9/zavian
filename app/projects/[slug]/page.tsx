import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Slide from "@/app/components/sections/Slide";
import { projects } from "@/data/projects";

// Pre-render all known slugs at build time
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="zavian-grid w-full">

      {/* ── HEAD SECTION ──────────────────────────── */}
      <div
        className="relative w-full min-h-[90vh] overflow-hidden"
        style={{ background: project.background }}
      >
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="black-glow pointer-events-none absolute inset-0 z-10" />

        <div className="relative z-20 flex items-center justify-between px-10 mt-40">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-6 py-1"
          >
            Back
          </Link>
          <span className="bg-white/90 text-black text-[14px] font-medium px-4 py-1">
            {project.category}
          </span>
        </div>

        <div className="z-50 flex flex-col gap-4 px-10 pb-20 mt-auto absolute bottom-0 left-0 right-0">
          <h1 className="text-white text-[80px] font-light leading-none">
            {project.title}
          </h1>
          <p className="text-white/90 text-[22px] leading-relaxed max-w-155">
            {project.description}
          </p>

          <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/20 text-white/80 text-[15px] tracking-widest">
            <span>{project.credit}</span>
            <span>{project.shotCount}</span>
            <span>[ {project.date} ]</span>
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ──────────────────────────── */}
      <section className="w-full px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.galleryImages.map((img, index) => {
            const isLast = index === project.galleryImages.length - 1;

            return (
              <div
                key={img.id}
                className={`relative h-100 overflow-hidden ${
                  isLast ? "md:col-span-2 md:h-125" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={isLast ? "100vw" : "50vw"}
                  className="object-cover border-4 border-white"
                />
              </div>
            );
          })}
        </div>
      </section>

      <Slide />

    </main>
  );
}
