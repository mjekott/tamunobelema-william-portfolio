export interface IProjectDetails {
  current: Project;
  next: { slug: string } | null;
  previous: { slug: string } | null;
}

export type Project = {
  images: Image[];
  mainImage: string;
  publishedAt: Date;
  slug: string;
  title: string;
  description: string;
};

export interface Image {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
