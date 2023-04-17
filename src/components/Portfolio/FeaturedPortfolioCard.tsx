import { useProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useState } from "react";
import urlFor from "../../../sanity/config/urlFor";
import { Project } from "../../../types/Project";
import ProjectModal from "./ProjectModal";

type Props = {
  item: Project;
  index: number;
};

const FeaturedPortfolioCard = ({ item: project, index }: Props) => {
  const [show, setShow] = useState(false);
  const { setCurrentProjectIndex } = useProjectContext();
  const handleSelect = () => {
    setCurrentProjectIndex(index);
    setShow(true);
  };
  const handelClose = () => {
    setCurrentProjectIndex(-1);
    setShow(false);
  };
  return (
    <>
      <div className="cursor-pointer" onClick={handleSelect}>
        <div className="relative lg:h-[530px] h-[269px]">
          <Image
            src={urlFor(project?.mainImage).url()}
            fill
            alt="feature-image"
            loading="lazy"
            className="grayscale hover:grayscale-0 object-cover"
          />
        </div>
        <div className="mt-10">
          <p className="mb-5 text-2xl">{project?.title}</p>
          <p className="text-gray-light text-md line-clamp-2">
            {project?.description}
          </p>
          <p className="mt-5 text-2xl">
            {new Date(project?.publishedAt).getFullYear()}
          </p>
        </div>
      </div>
      <ProjectModal show={show} onClose={handelClose} />
    </>
  );
};

export default FeaturedPortfolioCard;
