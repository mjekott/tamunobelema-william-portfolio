import Image from "next/image";
import urlFor from "../../../sanity/config/urlFor";
import { Testimonial } from "../../../types/HomePage";
import TestimonialBorderSvg from "../../assets/testimonial-border.svg";

interface Props {
  item: Testimonial;
}

const TestimonialCard = ({ item: testimonial }: Props) => {
  return (
    <div className="overflow-hidden">
      <div>
        <div className="border-l-2 border-white px-4 mb-8 text-sm lg:text-2xl ">
          {testimonial.comment}
        </div>
        <TestimonialBorderSvg />
      </div>
      <div className="flex items-center gap-4 py-8">
        <div className="relative w-[41px] lg:w-[100px]  h-[41px] lg:h-[100px] rounded-full overflow-hidden">
          <Image
            src={urlFor(testimonial.profilePic).url()}
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p>{testimonial.name}</p>
          <p>{testimonial.relationship}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
