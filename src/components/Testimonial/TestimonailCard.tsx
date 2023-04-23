import Image from "next/image";
import urlFor from "../../../sanity/config/urlFor";
import { Testimonial } from "../../../types/HomePage";
import TestimonialBorderSvg from "../../assets/testimonial-border.svg";

interface Props {
  item: Testimonial;
}

const TestimonialCard = ({ item: testimonial }: Props) => {
  return (
    <div className="overflow-hidden  flex flex-col h-full">
      <div className="mb-2">
        <div className="border-l-2 ease-out border-white px-4 ">
          <p className=" italic">
            {' "'}
            {testimonial.comment} {' "'}
          </p>
        </div>
      </div>
      <div className="sm:mt-auto">
        <TestimonialBorderSvg />
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
