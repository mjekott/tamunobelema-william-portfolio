import FeatureSwiperList from "@/components/FeatureSwiperList";
import RichTextComponents from "@/components/RichTextComponent";
import { PortableText } from "@portabletext/react";
import ProcessItem from "./ProcessItem";

const testimonialBreakPoint = {
  640: {
    slidesPerView: 1,
  },
};
const About = ({ about, process }: AboutProps) => {
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
          <div className="lg:hidden">
            <FeatureSwiperList
              breakPoints={testimonialBreakPoint}
              prefix="process"
              data={process}
              title="Design Philosophies"
              component={ProcessItem}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            />
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
