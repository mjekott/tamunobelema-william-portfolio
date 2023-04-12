import FeatureSwiperList from "@/components/FeatureSwiperList";
import FeaturedPortfolioCard from "@/components/Portfolio/FeaturedPortfolioCard";
import TestimonialCard from "@/components/Testimonial/TestimonailCard";
import About from "@/features/homepage/components/About";
import Brand from "@/features/homepage/components/Brand";
import Hero from "@/features/homepage/components/Hero/Hero";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { motion } from "framer-motion";
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
    homeData: { testimonials },
    projects,
  } = homePageData;
  console.log(projects);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Header />
      <Hero />
      <FeatureSwiperList
        prefix="projects"
        data={projects || []}
        title="Projects"
        component={FeaturedPortfolioCard}
      />

      <About />
      <Brand />
      <FeatureSwiperList
        prefix="testimonial"
        data={testimonials || []}
        title="Feedback From Our Clients"
        component={TestimonialCard}
        breakPoints={testimonialBreakPoint}
      />

      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  const homePageData: HomePageData = await getHomePage();
  return {
    props: {
      homePageData,
    },
  };
}
