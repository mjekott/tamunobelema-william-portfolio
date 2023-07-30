import About from "@/features/homepage/About";
import Hero from "@/features/homepage/Hero/Hero";
import Projects from "@/features/homepage/Projects";
import Testimonials from "@/features/homepage/Testimonial";
import { getHomePage } from "../../../sanity/sanity-utils";

export const revalidate = 60;

const page = async () => {
  try {
    const data = await getHomePage();

    return (
      <>
        <Hero />
        <Projects projects={data.projects} />
        <About about={data.homeData.about} process={data.homeData.process} />
        <Brand brands={data.homeData.brand} />
        <Testimonials testimonials={data.homeData.testimonials} />
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default page;
