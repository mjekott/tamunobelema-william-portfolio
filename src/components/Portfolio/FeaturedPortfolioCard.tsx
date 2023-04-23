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
      <div className="cursor-pointer h-full " onClick={handleSelect}>
        <div className="flex flex-col h-full">
          <div className="relative lg:h-[530px] h-[269px]">
            <Image
              src={urlFor(project?.mainImage).url()}
              fill
              alt="feature-image"
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              priority
              className="grayscale hover:grayscale-0 object-cover"
            />
          </div>
          <p className="mt-5 text-2xl ">{project?.title}</p>
          <p className="text-gray-light text-md line-clamp-2 my-3">
            {project?.description}
          </p>
          <p className=" text-2xl mt-auto">
            {new Date(project?.publishedAt).getFullYear()}
          </p>
        </div>
      </div>
      <ProjectModal show={show} onClose={handelClose} />
    </>
  );
};

export default FeaturedPortfolioCard;
