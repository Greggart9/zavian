// data/projects.ts

export type ProjectGalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  credit: string;
  shotCount: string;
  date: string;
  heroImage: string;
  background: string;
  galleryImages: ProjectGalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "blue-noir",
    category: "Studio Editorial",
    title: "Blue Noir",
    description: "A minimalist studio series exploring serenity, strength, and futuristic silhouettes through a pure blue monochrome palette.",
    credit: "ELSE HARPER EDITORIAL",
    shotCount: "20+ BRAND & AGENCY SHOTS",
    date: "JUNE 2025",
    heroImage: "/assets/asset 4.png",
    background: "radial-gradient(ellipse at 60% 30%, #1a3fc4 0%, #0a1a6e 40%, #050d2e 75%, #020818 100%)",
    galleryImages: [
      { id: 1, src: "/assets/asset 4.png", alt: "Blue Noir 1" },
      { id: 2, src: "/assets/asset 12.png", alt: "Blue Noir 2" },
      { id: 3, src: "/assets/asset 13.png", alt: "Blue Noir 3" },
      { id: 4, src: "/assets/asset 14.png", alt: "Blue Noir 4" },
      { id: 5, src: "/assets/asset 68.png", alt: "Blue Noir 5" },
      { id: 6, src: "/assets/asset 69.png", alt: "Blue Noir 6" },
      { id: 7, src: "/assets/asset 70.png", alt: "Blue Noir 7" },
    ],
  },
  {
    slug: "amber-shadows",
    category: "Men's Editorial",
    title: "Amber Shadows",
    description: "A moody studio series using yellow-red gradients to create dramatic silhouettes and cinematic depth for men’s editorial.",
    credit: "HORIZON MEN'S STUDIO",
    shotCount: "36 EDITORIAL PORTRAITS AND SILHOUETTES",
    date: "MAY 2025",
    heroImage: "/assets/asset 31.png",
    background: "radial-gradient(ellipse at 60% 30%, #c0392b 0%, #6e0a0a 40%, #2e0505 75%, #180202 100%)",
    galleryImages: [
      { id: 1, src: "/assets/asset 2.png", alt: "Amber Shadows 1" },
      { id: 2, src: "/assets/asset 15.png", alt: "Amber Shadows 2" },
      { id: 3, src: "/assets/asset 16.png", alt: "Amber Shadows 3" },
      { id: 4, src: "/assets/asset 17.png", alt: "Amber Shadows 4" },
      { id: 5, src: "/assets/asset 71.png", alt: "Amber Shadows 5" },
      { id: 6, src: "/assets/asset 72.png", alt: "Amber Shadows 6" },
      { id: 7, src: "/assets/asset 73.png", alt: "Amber Shadows 7" },

    ],
  },

   {
    slug: "lime-light",
    category: "Fashion Campaign",
    title: "Lime Light",
    description: "An outdoor fashion editorial playing with movement, vibrant lime green fabrics, and dynamic low-angle perspectives for a powerful narrative.",
    credit: "MAISON VERA CAMPAIGN",
    shotCount: "55 CAMPAIGN and MOTION SHOTS",
    date: "APRIL 2025",
    heroImage: "/assets/asset 3.png",
    background: "radial-gradient(ellipse at 60% 30%, #c0392b 0%, #6e0a0a 40%, #2e0505 75%, #180202 100%)",
    galleryImages: [
      { id: 1, src: "/assets/asset 3.png", alt: "Lime Light 1" },
      { id: 2, src: "/assets/asset 18.png", alt: "Lime Light 2" },
      { id: 3, src: "/assets/asset 19.png", alt: "Lime Light 3" },
      { id: 4, src: "/assets/asset 20.png", alt: "Lime Light 4" },
      { id: 5, src: "/assets/asset 74.png", alt: "Lime Light 5" },
      { id: 6, src: "/assets/asset 75.png", alt: "Lime Light 6" },
      { id: 7, src: "/assets/asset 76.png", alt: "Lime Light 7" },

    ],
  },

   {
    slug: "scarlet-gaze",
    category: "Beauty Editorial",
    title: "Scarlet Gaze",
    description: "A high-impact beauty shoot celebrating bold femininity with saturated red-orange lighting, confident poses, and sharp styling.",
    credit: "VIVA MODE MAGAZINE",
    shotCount: "42 BEAUTY and PORTRAIT SHOTS",
    date: "MARCH 2025",
    heroImage: "/assets/asset 21.png",
    background: "radial-gradient(ellipse at 60% 30%, #c0392b 0%, #6e0a0a 40%, #2e0505 75%, #180202 100%)",
    galleryImages: [
      { id: 1, src: "/assets/asset 21.png", alt: "Scarlet Gaze 1" },
      { id: 2, src: "/assets/asset 22.png", alt: "Scarlet Gaze 2" },
      { id: 3, src: "/assets/asset 23.png", alt: "Scarlet Gaze 3" },
      { id: 4, src: "/assets/asset 24.png", alt: "Scarlet Gaze 4" },
      { id: 5, src: "/assets/asset 77.png", alt: "Scarlet Gaze 5" },
      { id: 6, src: "/assets/asset 78.png", alt: "Scarlet Gaze 6" },
      { id: 7, src: "/assets/asset 79.png", alt: "Scarlet Gaze 7" },

    ],
  },
  // add more projects here — each one is just a data object
];