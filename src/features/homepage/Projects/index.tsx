"use client";

import { SwiperNavButtons } from "@/components/SwiperNav";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project } from "../../../../types/Project";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="container px-4" id="projects">
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
        }}
      >
        <div
          className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5 "
          slot="container-start"
        >
          <h2 className="text-xl lg:text-4xl  font-semibold">Projects</h2>

          <SwiperNavButtons />
        </div>
        {projects.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <ProjectCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;

type ProjectsProps = {
  projects: Project[];
};
