import FeatureSwiperList from "@/components/FeatureSwiperList";
import ProcessItem from "./ProcessItem";

const testimonialBreakPoint = {
  640: {
    slidesPerView: 1,
  },
};
const About = ({ about, process }: AboutProps) => {
  return (
    <div className="container p-4 pt-20 lg:py-28  ">
      <div className="flex flex-col lg:flex-row space-y-10  divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#292929]">
        <div className="lg:w-1/2  lg:pr-20">
          <p className="text-2xl mb-5 font-semibold">About Me</p>
          <p className="text-md text-gray-light">{about}</p>
        </div>
        <div className="flex-1  lg:py-0 lg:px-20">
          <div className="hidden lg:block">
            <p className="text-2xl mb-5 font-semibold">My Process</p>
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
              title="My Process"
              component={ProcessItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

type AboutProps = {
  about: string;
  process: { description: string; title: string }[];
};
