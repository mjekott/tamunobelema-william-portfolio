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
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAmACYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMEBQYBAv/EABwQAAEFAQEBAAAAAAAAAAAAAAABAgMRMQQhQf/EABcBAQEBAQAAAAAAAAAAAAAAAAECAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwDZnLQjO6UrRDur3TDqws6QGdN/SQyazE8Dwj0AzM8/q80iyddLoh71oiSuWxqJVrD12uljD0X9MzFIqKWEE9JpLo0DZ/NAqm9PmgIVrsESIADUZKTxRrHKgAS6mpIoAAof/9k='
                placeholder="blur"
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
