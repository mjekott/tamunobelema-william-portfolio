export type Article = {
  title: string;
  slug: string;
  date: string;
  content: any;
};

export interface IArticlePage {
  current: Article;
  next: { slug: string } | null;
  previous: { slug: string } | null;
}
