"use client";
import { SwiperNavButtons } from "@/components/SwiperNav";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "../../../../types/HomePage";
import TestimonialCard from "./TestimonailCard";

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="container px-4">
      <Swiper
        slidesPerView={2}
        freeMode={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        <div
          className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5"
          slot="container-start"
        >
          <h2 className="text-xl lg:text-4xl  font-semibold">
            Feedback From Our Clients
          </h2>

          <div className="flex items-center gap-5">
            <SwiperNavButtons />
          </div>
        </div>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

type TestimonialsProps = {
  testimonials: Testimonial[];
};
