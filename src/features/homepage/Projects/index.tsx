"use client";
import FeaturedPortfolioCard from "@/components/Portfolio/FeaturedPortfolioCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project } from "../../../../types/Project";

const Projects = ({ projects }: ProjectsProps) => {
  const swiperRef = useRef<any>();

  return (
    <div className="container px-4" id="projects">
      <div className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5">
        <h2 className="text-xl lg:text-4xl  font-semibold">Projects</h2>

        <div className="flex items-center gap-5">
          <button
            className={`icon-button`}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ChevronLeftIcon className=" w-4 h-4 " />
          </button>
          <button
            className={`icon-button`}
            onClick={() => swiperRef.current.slideNext()}
          >
            <ChevronRightIcon className=" w-4 h-4 " />
          </button>
        </div>
      </div>
      <div>
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <FeaturedPortfolioCard index={index} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;

type ProjectsProps = {
  projects: Project[];
};
