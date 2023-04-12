export interface TypeHomePage {
  featuredProjects: FeaturedProject[];
  mainImage: string;
  testimonials: Testimonial[];
}

export interface FeaturedProject {
  coverImage?: string;
  description?: string;
  slug?: string;
  title: string;
  publishedAt: Date;
}

export interface Testimonial {
  comment: string;
  name: string;
  profilePic: string;
  relationship: string;
}
