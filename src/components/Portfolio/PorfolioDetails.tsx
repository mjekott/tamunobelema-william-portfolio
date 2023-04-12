import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../sanity/config/urlFor";
import { IProjectDetails } from "../../../types/Project";
import RightLogo from "../../assets/right-logo.svg";
import FeatureSwiperList from "../FeatureSwiperList";

type Props = {
  current: any;
  next: null | { slug: string };
  previous: null | { slug: string };
};

const breakPoint = {
  640: {
    slidesPerView: 2,
  },
};

const PortoflioDetails = ({ current, previous, next }: IProjectDetails) => {
  const imagesUrl =
    (current &&
      current?.images &&
      current?.images.map((el) => urlFor(el).url())) ||
    [];
  return (
    <div className="page-container">
      <div className="relative  py-10">
        <div className=" flex justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
              className="capitalize font-semibold text-5xl md:text-7xl"
            >
              {current?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.7 }}
              className="text-lg text-gray-light mt-10 max-w-[400px]"
            >
              {current?.description}
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
              className="text-gray-light text:xl lg:text-xl font-light"
            >
              {new Date(current.publishedAt).getFullYear()}
            </motion.p>
          </div>
        </div>
        <RightLogo className="absolute -z-10 -right-6 lg:-right-44 lg:h-[180px] lg:w-[521px] h-[130px] w-[100px] top-[6%]  lg:top-[14%]  " />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.8 }}
      >
        <FeatureSwiperList
          prefix="project"
          data={imagesUrl}
          title=""
          component={ImageCard}
          breakPoints={breakPoint}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.8 }}
        className="flex justify-between items-center py-5 mt-6"
      >
        <Link
          href={`/projects/${previous?.slug}`}
          className="text-sm lg:text-lg font-normal"
        >
          {previous && "Previous Project"}
        </Link>
        <Link
          href={`/projects/${next?.slug}`}
          className="text-sm lg:text-lg font-normal"
        >
          {next && "Next Project"}
        </Link>
      </motion.div>
    </div>
  );
};

export default PortoflioDetails;

const ImageCard = ({ item: src }: { item: string }) => {
  return (
    <div className="relative lg:h-[530px] h-[269px]">
      <Image
        src={src}
        fill
        alt="other images"
        loading="lazy"
        className="grayscale hover:grayscale-0 object-cover cursor-pointer"
      />
    </div>
  );
};
