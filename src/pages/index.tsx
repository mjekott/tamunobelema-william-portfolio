import FeatureSwiperList from "@/components/FeatureSwiperList";
import FeaturedPortfolioCard from "@/components/Portfolio/FeaturedPortfolioCard";
import TestimonialCard from "@/components/Testimonial/TestimonailCard";
import ProjectContextProvider from "@/context/ProjectContext";
import About from "@/features/homepage/components/About";
import Brand from "@/features/homepage/components/Brand";
import Hero from "@/features/homepage/components/Hero/Hero";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { motion as m } from "framer-motion";
import { InferGetStaticPropsType } from "next";
import { getHomePage } from "../../sanity/sanity-utils";
import { HomePageData } from "../../types/HomePage";

const testimonialBreakPoint = {
  640: {
    slidesPerView: 2,
  },
};

export default function Home({
  homePageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    homeData: { testimonials, about, process, brand },
    projects,
  } = homePageData;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
      }}
      className="min-h-screen"
    >
      <Header />
      <div id="modal" />

      <Hero />
      <ProjectContextProvider projects={projects || []}>
        <FeatureSwiperList
          prefix="projects"
          data={projects || []}
          title="Projects"
          component={FeaturedPortfolioCard}
        />
      </ProjectContextProvider>

      <About about={about} process={process} />
      <Brand brands={brand} />

      <FeatureSwiperList
        prefix="testimonial"
        data={testimonials || []}
        title="Feedback From Our Clients"
        component={TestimonialCard}
        breakPoints={testimonialBreakPoint}
      />

      <Footer />
    </m.div>
  );
}

export async function getStaticProps() {
  const homePageData: HomePageData = await getHomePage();
  return {
    props: {
      homePageData,
    },
    revalidate: 1000 * 60,
  };
}
