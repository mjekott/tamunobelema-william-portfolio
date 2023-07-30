"use client";
import { shimmer, toBase64 } from "@/utils/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import urlFor from "../../../../sanity/config/urlFor";

const ProjectImageSlide = ({ images = [] }: { images: any }) => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const projectImagesUrl: string[] = images.map((el: any) =>
    el ? urlFor(el).url() : ""
  );

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e: any) => {
    e.stopPropagation();
    let currentIndex = projectImagesUrl.indexOf(imageToShow);
    if (currentIndex >= projectImagesUrl.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = projectImagesUrl[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = projectImagesUrl.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = projectImagesUrl[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const swiperRef = useRef<any>();
  return (
    <div>
      <div className="flex justify-end items-center mb-5 gap-5 lg:mb-12 py-5">
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
        {projectImagesUrl.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <ProjectImageCard image={image} onClick={() => showImage(image)} />
          </SwiperSlide>
        ))}
      </Swiper>
      {lightboxDisplay ? (
        <div
          id="lightbox"
          className="bg-black/90 backdrop-blur-sm z-50 inset-0 flex items-center justify-between fixed px-4"
          onClick={hideLightBox}
        >
          <button className="absolute top-5 right-5">
            <XMarkIcon
              className=" w-6 h-6  text-white"
              onClick={hideLightBox}
            />
          </button>
          <button
            onClick={showPrev}
            className="icon-button absolute bottom-5 left-5 lg:relative"
          >
            <ChevronLeftIcon className=" w-4 h-4 " />
          </button>
          <Image
            width={435}
            height={690}
            alt="lightbox-image"
            className="object-cover h-auto w-auto"
            src={imageToShow}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(435, 690)
            )}`}
          />
          <button
            onClick={showNext}
            className="icon-button absolute bottom-5 right-5 lg:relative"
          >
            <ChevronRightIcon className=" w-4 h-4 " />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectImageSlide;

const ProjectImageCard = ({ image, onClick }: ProjectImageCardProps) => {
  return (
    <div className="relative lg:h-[530px] h-[269px]">
      <Image
        onClick={onClick}
        src={image}
        fill
        alt="other images"
        className="grayscale hover:grayscale-0 object-cover cursor-pointer"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 530))}`}
      />
    </div>
  );
};

type ProjectImageCardProps = {
  image: string;
  onClick: () => void;
};
