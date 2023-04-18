import { Project } from "./Project";

export interface HomePageData {
  homeData: HomeData;
  projects: Project[];
}

export interface HomeData {
  mainImage: string;
  testimonials: Testimonial[];
  brand: IBrand[];
  about: string;
  process: { description: string; title: string }[];
}

export interface IBrand {
  image: string;
  title: string;
}
export interface FeaturedProject {
  coverImage: string;
  description: null | string;
  publishedAt: Date | null;
  slug: string;
  title: string;
}

export interface Testimonial {
  comment: string;
  name: string;
  image: string;
  relationship: string;
}
