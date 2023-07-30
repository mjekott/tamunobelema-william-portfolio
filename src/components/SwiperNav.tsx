import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-5">
      <button
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        className={`icon-button`}
      >
        <ChevronLeftIcon className=" w-6 h-6 " />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next"
        className={`icon-button`}
      >
        <ChevronRightIcon className=" w-6 h-6 " />
      </button>
    </div>
  );
};
