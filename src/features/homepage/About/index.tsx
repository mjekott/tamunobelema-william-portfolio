"use client";
import RichTextComponents from "@/components/RichTextComponent";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProcessItem from "./ProcessItem";

const testimonialBreakPoint = {
  640: {
    slidesPerView: 1,
  },
};
const About = ({ about, process }: AboutProps) => {
  const swiperRef = useRef<any>();
  return (
    <div className="container pt-20 lg:py-28  ">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0  divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#292929]">
        <div className="lg:w-1/2  lg:pr-20 px-4">
          <p className="text-2xl mb-5 font-semibold">About Me</p>
          <p className="text-md text-gray-light prose space-y-4 flex flex-col">
            <PortableText value={about} components={RichTextComponents} />
          </p>
        </div>
        <div className="flex-1  lg:py-0 lg:px-20">
          <div className="hidden lg:block">
            <p className="text-2xl mb-5 font-semibold">Design Philosophies</p>
            <div className="divide-y-2 space-y-5 divide-[#292929] ">
              {process.map((process, idx) => (
                <ProcessItem
                  item={process}
                  key={`${idx}-process`}
                  index={idx}
                />
              ))}
            </div>
          </div>
          <div className="lg:hidden px-4">
            <div className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5">
              <h2 className="text-xl lg:text-4xl  font-semibold">
                Design Philosophies
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

            <Swiper
              slidesPerView={1}
              freeMode={false}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {process.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <ProcessItem item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

type AboutProps = {
  about: any;
  process: { description: string; title: string }[];
};
