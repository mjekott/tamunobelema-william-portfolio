import { groq } from "next-sanity";
import { HomePageData } from "../types/HomePage";
import { IProjectDetails, Project } from "../types/Project";
import { default as client } from "./config/sanity.client";

const getProjectQuery = groq`*[_type=='project']{
  _id,
  _createdAt,
  title,
  'slug':slug.current,
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
    testimonials[]->{name,comment,relationship,'profilePic':image.asset->url},
  }[0]`;

  return client.fetch(`{
    'homeData': ${homePageRequest},
    'projects':${getProjectQuery},
  }`);
}
