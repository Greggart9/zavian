

export type FeaturedProject = {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  credit: string;
  shotCount: string;
  href: string;
  heroImage: string;
  thumbnails: { id: number; src: string; alt: string }[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    category: "Studio Editorial",
    title: "Blue Noir",
    description: "A minimalist studio series exploring serenity, strength, and futuristic silhouettes through a pure blue monochrome palette.",
    date: "JUNE 2025",
    credit: "ELSE HARPER EDITORIAL",
    shotCount: "20+ BRAND & AGENCY SHOTS",
    href: "/projects/blue-noir",
    heroImage: "/assets/asset 4.png",
    thumbnails: [
      { id: 1, src: "/assets/asset 12.png", alt: "Shot 1" },
      { id: 2, src: "/assets/asset 13.png", alt: "Shot 2" },
      { id: 3, src: "/assets/asset 14.png", alt: "Shot 3" },
    ],
  },
  {
    id: 2,
    category: "Men's Editorial",
    title: "Amber Shadows",
    description: "A moody studio series using yellow-red gradients to create dramatic silhouettes and cinematic depth for men’s editorial.",
    date: "MAY 2025",
    credit: "HORIZON MEN'S STUDIO",
    shotCount: "36 EDITORIAL PORTRAITS AND SILHOUETTES",
    href: "/projects/amber-shadows",
    heroImage: "/assets/asset 2.png",
    thumbnails: [
      { id: 1, src: "/assets/asset 15.png", alt: "Shot 1" },
      { id: 2, src: "/assets/asset 16.png", alt: "Shot 2" },
      { id: 3, src: "/assets/asset 17.png", alt: "Shot 3" },
    ],
  },
  {
    id: 3,
    category: "Fashion Campaign",
    title: "Lime Light",
    description: "An outdoor fashion editorial playing with movement, vibrant lime green fabrics, and dynamic low-angle perspectives for a powerful narrative.",
    date: "APRIL 2025",
    credit: "MAISON VERA CAMPAIGN",
    shotCount: "55 CAMPAIGN and MOTION SHOTS",
    href: "/projects/lime-light",
    heroImage: "/assets/asset 3.png",
    thumbnails: [
      { id: 1, src: "/assets/asset 18.png", alt: "Shot 1" },
      { id: 2, src: "/assets/asset 19.png", alt: "Shot 2" },
      { id: 3, src: "/assets/asset 20.png", alt: "Shot 3" },
    ],
  },
  {
    id: 4,
    category: "Beauty Editorial",
    title: "Scarlet Gaze",
    description: "A high-impact beauty shoot celebrating bold femininity with saturated red-orange lighting, confident poses, and sharp styling.",
    date: "MARCH 2025",
    credit: "VIVA MODE MAGAZINE",
    shotCount: "42 BEAUTY and PORTRAIT SHOTS",
    href: "/projects/scarlet-gaze",
    heroImage: "/assets/asset 21.png",
    thumbnails: [
      { id: 1, src: "/assets/asset 22.png", alt: "Shot 1" },
      { id: 2, src: "/assets/asset 23.png", alt: "Shot 2" },
      { id: 3, src: "/assets/asset 24.png", alt: "Shot 3" },
    ],
  },
];