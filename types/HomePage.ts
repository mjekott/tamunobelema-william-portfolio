import { Project } from "./Project";

export interface HomePageData {
  homeData: HomeData;
  projects: Project[];
}

export interface HomeData {
  mainImage: string;
  testimonials: Testimonial[];
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
  profilePic: string;
  relationship: string;
}
