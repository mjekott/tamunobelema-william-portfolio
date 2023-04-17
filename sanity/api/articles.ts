import client from "../config/sanity.client";

export const getArticles = async () => {
  return client.fetch(`*[_type=='article]{title,'slug':slug.current}`);
};

export async function getBlogBySlug(slug: string) {
  const result = await client
    .fetch(
      `*[_type == 'article' && slug.current == $slug]{title,'slug':slug.current,content}`
    )
    .then((res) => res?.[0]);
}
