import BlurImage from "@/components/BlurImage";
import Link from "next/link";
import urlFor from "../../../../sanity/config/urlFor";
import { Project } from "../../../../types/Project";

type Props = {
  item: Project;
  index?: number;
};

const ProjectCard = ({ item: project, index }: Props) => {
  return (
    <>
      <Link
        href={`/project/${project.slug}`}
        className="cursor-pointer h-full "
        prefetch={false}
      >
        <div className="flex flex-col h-full">
          <div className="relative lg:h-[530px] h-[269px]">
            <BlurImage
              src={project?.mainImage ? urlFor(project?.mainImage).url() : ""}
              fill
              alt="feature-image"
              className="grayscale hover:grayscale-0 object-cover"
              sizes="(min-width: 1540px) 475px, (min-width: 1280px) 389px, (min-width: 1040px) 304px, (min-width: 780px) 348px, (min-width: 640px) 284px, (min-width: 400px) calc(100vw - 32px), (min-width: 340px) calc(50vw + 138px), calc(1160vw - 3424px)"
            />
          </div>
          <p className="mt-5 text-2xl ">{project?.title}</p>
          <p className="text-gray-light text-md line-clamp-2 my-3 pr-2">
            {project?.description}
          </p>
          <p className=" text-2xl mt-auto">
            {new Date(project?.publishedAt).getFullYear()}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
