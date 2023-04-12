import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

type Props<T> = {
  data: T[];
  title: string;
  component: React.ComponentType<React.PropsWithChildren<any & T>>;
  breakPoints?: any;
  prefix: string;
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
  prefix,
}: Props<T>) => {
  if (data && data.length === 0) return null;

  return (
    <div className="container p-4">
      <div className="flex justify-between items-center mb-5 gap-5 lg:mb-12 py-5">
        <h2 className="text-3xl lg:text-[100px] lg:leading-[110px] font-semibold">
          {title}
        </h2>

        <div className="flex items-center gap-5">
          <button className={`icon-button  button-${prefix}-prev-slide`}>
            <ChevronLeftIcon className=" w-4 h-4 " />
          </button>
          <button className={`icon-button  button-${prefix}-next-slide`}>
            <ChevronRightIcon className=" w-4 h-4 " />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.button-${prefix}-next-slide`,
          prevEl: `.button-${prefix}-prev-slide`,
        }}
        spaceBetween={50}
        className="mySwiper"
        breakpoints={breakPoints}
      >
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <Component item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeatureSwiperList;
