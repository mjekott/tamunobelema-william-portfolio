import { groq } from "next-sanity";
import { HomePageData } from "../types/HomePage";
import { IProjectDetails, Project } from "../types/Project";
import { clientFetch } from "./config/sanity.client";

const getProjectQuery = groq`*[_type=='project']{
  _id,
  _createdAt,
  title,
  'slug':slug.current,
  images,
  'mainImage':mainImage.asset->url,
  url,
  publishedAt,
  description
}| order(publishedAt desc)`;

export async function getProjects(): Promise<Project[]> {
  return clientFetch(getProjectQuery);
}

export async function getProject(slug: string): Promise<IProjectDetails> {
  const results = await clientFetch(
    `*[_type == 'project' && slug.current == $slug]{
        "current": { 
          "slug": slug.current,description,title,images,'mainImage':mainImage.asset->url,publishedAt
        },
      }[0]`,
    { slug }
  );
  return results;
}

export async function getHomePage(): Promise<HomePageData> {
  const homePageRequest = groq`*[_type=='homePage']{
    about[]{...},
    brand,
    process,
    testimonials,
  }[0]`;

  return clientFetch(`{
    'homeData': ${homePageRequest},
    'projects':${getProjectQuery},
  }`);
}

export async function getAllArticles({
  offset = 0,
  skip = 5,
}: {
  offset?: number;
  skip?: number;
}) {
  const start = offset * skip;
  const end = start + skip;
  const result = await clientFetch(
    groq`*[_type=='article']{
      _id,
    title,
    'slug':slug.current,
    'date':publishedAt,
    'thumbnail':thumbnail.asset->url,
     content[]{...},
     "total": count(*[_type == "article"]) 
  } | order(date desc)[${start}...${end}]`
  );

  return result;
}

export async function getArticleBySlug(slug: string) {
  return clientFetch(
    `*[_type=='article' && slug.current == $slug]{
  "current":{
    title,
    'slug':slug.current,
    'date':publishedAt,
    'thumbnail':thumbnail.asset->url,
    "total": count(*[_type == "article"]) ,
    content[]{...}
  },
  "previous": *[_type == 'article' && ^.publishedAt > publishedAt]| order(publishedAt desc)[0]{ 
            "slug": slug.current, 
        },
        "next": *[_type == 'article' && ^.publishedAt < publishedAt]| order(publishedAt asc)[0]{ 
            "slug": slug.current,
  }}[0]`,
    { slug }
  );
}
