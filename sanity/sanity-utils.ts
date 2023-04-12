import { groq } from "next-sanity";
import { TypeHomePage } from "../types/HomePage";
import { Project } from "../types/Project";
import { default as client } from "./config/sanity.client";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type=='project']{
    _id,
    _createdAt,
    name,
    'slug':slug.current,
    'image':image.asset->url,
    url,
    content
  }`);
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type=='project' && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    'slug':slug.current,
    'image':image.asset->url,
    url,
    content
  }`,
    { slug }
  );
}

export async function getHomePage(): Promise<TypeHomePage> {
  return client.fetch(
    groq`*[_type=='homePage']{
      featuredProjects[]->{title,'slug':slug.current,description,'coverImage':mainImage.asset->url,publishedAt},
      'mainImage':mainImage.asset->url,
      testimonials[]->{name,comment,relationship,'profilePic':image.asset->url},
    }[0]`
  );
}
