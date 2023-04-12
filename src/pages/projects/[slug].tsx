import PortoflioDetails from "@/components/Portfolio/PorfolioDetails";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { motion as m } from "framer-motion";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getProject, getProjects } from "../../../sanity/sanity-utils";

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ y: "100%" }}
      className="min-h-screen container p-4"
    >
      <Header />
      <PortoflioDetails {...project} />
      <Footer />
    </m.div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const projects = await getProjects();
  const params = projects.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));
  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug || "";
  const project = await getProject(slug as string);

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}
