"use client";
import BlurImage from "@/components/BlurImage";
import Lightbox from "@/components/LighHouseBox";
import { SwiperNavButtons } from "@/components/SwiperNav";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import urlFor from "../../../../sanity/config/urlFor";

const ProjectImageSlide = ({ images = [] }: { images: any }) => {
  const [imageToShow, setImageToShow] = useState("");

  const projectImagesUrl: string[] = images.map((el: any) =>
    el ? urlFor(el).url() : ""
  );

  return (
    <div>
      <Swiper
        slidesPerView={2}
        freeMode={false}
        autoplay={{
          delay: 15000,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
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
            slidesPerGroup: 2,
            slidesPerGroupSkip: 2,
          },
        }}
      >
        <div
          className="flex justify-end items-center mb-5 gap-5 lg:mb-12 py-5"
          slot="container-start"
        >
          <SwiperNavButtons />
        </div>

        {projectImagesUrl.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <ProjectImageCard
              image={image}
              onClick={() => {
                setImageToShow(image);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {imageToShow && (
        <Lightbox
          images={projectImagesUrl}
          imageToShow={imageToShow}
          hideLightBox={() => setImageToShow("")}
        />
      )}
    </div>
  );
};

export default ProjectImageSlide;

const ProjectImageCard = ({ image, onClick }: ProjectImageCardProps) => {
  return (
    <div className="relative lg:h-[530px] h-[269px]">
      <BlurImage
        onClick={onClick}
        src={image}
        fill
        alt="other images"
        className="duration-700 grayscale hover:grayscale-0 object-cover cursor-pointer ease-in-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

type ProjectImageCardProps = {
  image: string;
  onClick: () => void;
};
