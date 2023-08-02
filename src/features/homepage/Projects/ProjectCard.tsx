import { shimmer, toBase64 } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../../sanity/config/urlFor";
import { Project } from "../../../../types/Project";

type Props = {
  item: Project;
};

const ProjectCard = ({ item: project }: Props) => {
  return (
    <>
      <Link
        href={`/project/${project.slug}`}
        className="cursor-pointer h-full "
        prefetch={false}
      >
        <div className="flex flex-col h-full">
          <div className="relative lg:h-[530px] h-[269px]">
            <Image
              src={project?.mainImage ? urlFor(project?.mainImage).url() : ""}
              fill
              alt="feature-image"
              className="grayscale hover:grayscale-0 object-cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(300, 530)
              )}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
