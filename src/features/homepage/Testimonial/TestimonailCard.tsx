import Image from "next/image";
import urlFor from "../../../../sanity/config/urlFor";
import { Testimonial } from "../../../../types/HomePage";

interface Props {
  item: Testimonial;
}

const TestimonialCard = ({ item: testimonial }: Props) => {
  return (
    <div className="overflow-hidden  flex flex-col h-full">
      <div className="mb-2">
        <div className="border-l-2 ease-out border-white px-4 ">
          <p className=" italic">
            {testimonial.comment} {' "'}
          </p>
        </div>
      </div>
      <div className="sm:mt-auto">
        <svg
          width="772"
          height="26"
          viewBox="0 0 772 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M771 0V11.4998H94.7674H78.0984L66.3371 18.9998L54.5758 11.4998H47.7222H0"
            stroke="#B3B3B6"
            stroke-opacity="0.2"
          />
          <path
            d="M762.877 4V16.9999H94.7674H78.7754L67.014 24.4999L55.2527 16.9999H47.7222H0"
            stroke="#B3B3B6"
            stroke-opacity="0.2"
          />
        </svg>

        <div className="flex items-center gap-4 py-4">
          <div className="relative w-[41px] flex-shrink-0 lg:w-[100px]  h-[41px] lg:h-[100px] rounded-full overflow-hidden">
            <Image
              src={urlFor(testimonial.image).url()}
              alt="avatar"
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              className="object-cover grayscale"
            />
          </div>
          <div>
            <p className="capitalize text-white font-semibold text-sm md:text-xl">
              {testimonial.name}
            </p>
            <p className="uppercase text-[12px] break-all lg:text-[14px] text-[#B3B3B6] font-semibold mt-1">
              {testimonial.relationship}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
