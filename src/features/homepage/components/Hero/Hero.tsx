import { motion } from "framer-motion";
import RightLogo from "../../../../assets/right-logo.svg";
import LeftLogo from "./image/left-logo.svg";

const services = [
  {
    heading: "Design",
    subHeadings: ["Interior", "Exterior", "Furniture", "Lighting", "Product"],
  },
  {
    heading: "Project",
    subHeadings: ["Offices", "Retail", "Hospitality", "Residential"],
  },
  {
    heading: "Offerings",
    subHeadings: ["Photo Rendering", "Animation", "Bim Modeling"],
  },
  {
    heading: "Services",
    subHeadings: [
      "Consultation",
      "Sourcing",
      "Concept Development",
      "Construction Management",
    ],
  },
];
const Hero = () => {
  return (
    <div className="relative min-h-[60vh]  lg:min-h-[70vh] mb-1 lg:mb-20">
      <LeftLogo className="absolute lg:h-[255px] lg:w-[232px] w-[70px] h-[132px]  lg:bottom-[10%] bottom-[20%] " />
      <RightLogo className="absolute z-0 right-0 lg:h-[340px] lg:w-[400px] h-[200px] w-[120px] top-[1%]  lg:top-[10%]  " />
      <div className="container relative h-full z-10 p-4">
        <div className=" py-2 lg:py-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
            className="text-[2.25rem] leading-snug lg:text-[128px] lg:leading-[130px] font-semibold"
          >
            Tamunobelema <br /> William - Design <br /> Storyteller.
          </motion.p>
        </div>
        <div className="justify-end lg:justify-start mt-5 lg:mt-0  lg:pl-[300px] flex-wrap gap-5 lg:gap-20  z-10 py-0 lg:py-28 flex">
          {services.map((el, idx) => {
            return (
              <motion.div
                className={` text-lg lg:text-2xl ${
                  ["Design", "Offerings"].includes(el.heading)
                    ? ""
                    : "hidden lg:block"
                }`}
                key={el.heading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + idx * 0.1,
                  ease: "easeInOut",
                }}
              >
                <p className=" text-gray-light mb-5">{el.heading}</p>
                <ul className="space-y-2">
                  {el.subHeadings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
