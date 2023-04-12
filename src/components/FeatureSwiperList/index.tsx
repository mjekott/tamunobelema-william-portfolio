import useIsDesktop from "@/utils/useIsDesktop";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

type Props<T> = {
  data: T[];
  title: string;
  component: React.ComponentType<
    React.PropsWithChildren<IntrinsicAttributes & T>
  >;
};

const FeatureSwiperList = <T,>({ component: Component, data }: Props<T>) => {
  const { isDesktop } = useIsDesktop();

  if (data && data.length === 0) return null;

  return (
    <div className="container p-4">
      <div className="flex justify-between items-center mb-5 lg:mb-12 py-5">
        <h2 className="text-3xl lg:text-[100px] font-semibold">Portfolio</h2>

        <div className="flex items-center gap-5">
          <button className="icon-button  button-prev-slide disabled:cursor-not-allowed">
            <ChevronLeftIcon className=" w-4 h-4 " />
          </button>
          <button className="icon-button  button-next-slide disabled:cursor-not-allowed">
            <ChevronRightIcon className=" w-4 h-4 " />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        spaceBetween={50}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <Component {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeatureSwiperList;
