import { groq } from "next-sanity";
import { HomePageData } from "../types/HomePage";
import { IProjectDetails, Project } from "../types/Project";
import { default as client } from "./config/sanity.client";

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
  return client.fetch(getProjectQuery);
}

export async function getProject(slug: string): Promise<IProjectDetails> {
  const results = await client.fetch(
    `*[_type == 'project' && slug.current == $slug]{
        "current": { 
          "slug": slug.current,description,title,images,'mainImage':mainImage.asset->url,publishedAt
        },
        "previous": *[_type == 'project' && ^.publishedAt > publishedAt]|order(publishedAt desc)[0]{ 
            "slug": slug.current, 
        },
        "next": *[_type == 'project' && ^.publishedAt < publishedAt]|order(publishedAt asc)[0]{ 
            "slug": slug.current,
        }}[0]`,
    { slug }
  );
  return results;
}

export async function getHomePage(): Promise<HomePageData> {
  const homePageRequest = groq`*[_type=='homePage']{
    about,
    brand,
    process,
    testimonials,
  }[0]`;

  return client.fetch(`{
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
  const result = await client.fetch(
    groq`*[_type=='article']{
      _id,
    title,
    'slug':slug.current,
    'date':publishedAt,
     content[]{...},
     "total": count(*[_type == "article"]) 
  } | order(date desc)[${start}...${end}]`
  );

  return result;
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type=='article' && slug.current == $slug]{
  "current":{
    title,
    'slug':slug.current,
    'date':publishedAt,
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

export async function deleteProject() {
  try {
    const response = await client.delete({
      query: `*[_type == "project" && _id == "drafts.5e94733d-78eb-48d2-9b59-5d7c029b5c33"]`,
    });

    console.log("Document deleted successfully:", response);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}
