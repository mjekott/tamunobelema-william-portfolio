import StudioNavbar from "@/components/StudioNavbar/StudioNavbar";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Website",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
