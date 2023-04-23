import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { AutoplayOptions } from "swiper/types";

type Props<T> = {
  data: T[];
  title: string;
  component: React.ComponentType<React.PropsWithChildren<any & T>>;
  breakPoints?: any;
  prefix: string;
  autoplay?: AutoplayOptions;
};

const defaultBreakpoints = {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

const FeatureSwiperList = <T,>({
  component: Component,
  data,
  title,
  breakPoints = defaultBreakpoints,
  autoplay,
  prefix,
}: Props<T>) => {
  if (data && data.length === 0) return null;

  return (
    <div className="container px-4">
      <div className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5">
        <h2 className="text-xl lg:text-4xl  font-semibold">{title}</h2>

        <div className="flex items-center gap-5">
          <button className={`icon-button  button-${prefix}-prev-slide`}>
            <ChevronLeftIcon className=" w-4 h-4 " />
          </button>
          <button className={`icon-button  button-${prefix}-next-slide`}>
            <ChevronRightIcon className=" w-4 h-4 " />
          </button>
        </div>
      </div>
      <div className="">
        <Swiper
          centerInsufficientSlides={true}
          slidesPerView="auto"
          freeMode={false}
          autoplay={autoplay}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.button-${prefix}-next-slide`,
            prevEl: `.button-${prefix}-prev-slide`,
          }}
          spaceBetween={50}
          className=""
          breakpoints={breakPoints}
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                <Component item={item} index={index} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureSwiperList;
