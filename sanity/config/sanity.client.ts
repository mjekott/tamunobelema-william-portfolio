import { createClient } from "next-sanity";
import { cache } from "react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: process.env.NODE_ENV === "production",
});

export const clientFetch = cache(client.fetch.bind(client));

export default client;
