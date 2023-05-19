import { useProjectContext } from "@/context/ProjectContext";
import Footer from "@/layout/Footer";
import { useEffect, useRef } from "react";
import urlFor from "../../../sanity/config/urlFor";
import RightLogo from "../../assets/right-logo.svg";
import BlurImage from "../BlurImage";
import FeatureSwiperList from "../FeatureSwiperList";
import Modal from "../Modal/Modal";

type ProjectModalProps = {
  show: boolean;
  onClose: () => void;
};

const projectSwiperBreakpoints = {
  640: {
    slidesPerView: 2,
  },
};

const ProjectModal = ({ show, onClose }: ProjectModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    isLoading: isLoadingProject,
    isNextDisabled: isNextProjectDisabled,
    isPreviousDisabled: isPreviousProjectDisabled,
    currentProject,
    goToNextProject,
    goToPreviousProject,
  } = useProjectContext();

  useEffect(() => {
    ref.current &&
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [currentProject]);

  const projectImagesUrl =
    (currentProject &&
      currentProject.images &&
      currentProject.images.map((el: any) => urlFor(el).url())) ||
    [];

  return (
    <Modal show={show} onClose={onClose}>
      <div className="container relative p-4 py-10" ref={ref}>
        {isLoadingProject && (
          <div className="absolute inset-0 z-30 flex justify-center items-center">
            <div
              className="inline-block relative h-6 w-6 animate-spin rounded-full border-gray-300 border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        )}
        <div className="relative py-10">
          <div className="flex justify-between">
            <div>
              <h2 className="capitalize font-semibold break-words text-5xl md:text-7xl ">
                {currentProject?.title}
              </h2>
              <p className=" text-gray-light mt-10 lg:max-w-[50%]">
                {currentProject?.description}
              </p>
            </div>
            <div>
              <p className="text-gray-light text:xl lg:text-xl font-light">
                {new Date(currentProject?.publishedAt as Date).getFullYear()}
              </p>
            </div>
          </div>
          <RightLogo className="absolute -z-10 -right-6 lg:-right-44 lg:h-[180px] lg:w-[521px] h-[130px] w-[100px] top-[6%] lg:top-[14%]" />
        </div>
        <FeatureSwiperList
          prefix="project"
          data={projectImagesUrl}
          title=""
          component={ProjectImageCard}
          breakPoints={projectSwiperBreakpoints}
        />
        <div className="flex justify-between items-center py-5 mt-6 text-md">
          {!isPreviousProjectDisabled && (
            <button className=" font-normal" onClick={goToPreviousProject}>
              Previous Project
            </button>
          )}
          {!isNextProjectDisabled && (
            <button className=" font-normal ml-auto" onClick={goToNextProject}>
              Next Project
            </button>
          )}
        </div>
      </div>
      <Footer />
    </Modal>
  );
};

export default ProjectModal;

type ProjectImageCardProps = {
  item: string;
};

const ProjectImageCard = ({ item: src }: ProjectImageCardProps) => {
  return (
    <div className="relative lg:h-[530px] h-[269px]">
      <BlurImage
        src={src}
        fill
        alt="other images"
        className="grayscale hover:grayscale-0 object-cover cursor-pointer"
      />
    </div>
  );
};
