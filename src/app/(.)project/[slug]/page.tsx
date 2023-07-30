import ProjectImageSlide from "@/features/projects/ProjectImageSlide";
import BackButton from "@/layout/BackButton";
import Link from "next/link";
import { getProject } from "../../../../sanity/sanity-utils";

export const revalidate = 60;

const page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <div className="bg-black overflow-y-auto   inset-0 fixed h-full w-full z-50 min-h-screen pb-20">
      <BackButton />
      <div className="container relative p-4 py-10">
        <div className="relative py-10">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h2 className="capitalize font-semibold break-words text-5xl md:text-7xl ">
                {project?.current.title}
              </h2>
              <p className=" text-gray-light mt-10 lg:max-w-[50%]">
                {project?.current.description}
              </p>
            </div>
            <div>
              <p className="text-gray-light text:xl lg:text-xl font-light mt-5 md:mt-0">
                {new Date(project?.current?.publishedAt as Date).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <ProjectImageSlide images={project.current.images} />
        <div className="flex justify-between items-center py-5 mt-6 text-md">
          {project.next?.slug && (
            <Link
              href={`/project/${project.next?.slug}`}
              className=" font-normal lg:text-xl"
            >
              Previous Project
            </Link>
          )}
          {project.previous?.slug && (
            <Link
              href={`/project/${project.previous?.slug}`}
              className=" font-normal ml-auto lg:text-xl"
            >
              Next Project
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
