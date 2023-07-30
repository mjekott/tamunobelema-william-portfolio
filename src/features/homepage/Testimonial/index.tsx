"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "../../../../types/HomePage";
import TestimonialCard from "./TestimonailCard";

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const swiperRef = useRef<any>();

  return (
    <div className="container px-4">
      <div className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5">
        <h2 className="text-xl lg:text-4xl  font-semibold">
          Feedback From Our Clients
        </h2>

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
          slidesPerView={2}
          freeMode={false}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
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
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

type TestimonialsProps = {
  testimonials: Testimonial[];
};
