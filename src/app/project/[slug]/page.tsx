import ProjectImageSlide from "@/features/projects/ProjectImageSlide";
import { getProject } from "../../../../sanity/sanity-utils";

const page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <>
      <div className="container relative p-4 py-10">
        <div className="relative py-10">
          <div className="flex justify-between">
            <div>
              <h2 className="capitalize font-semibold break-words text-5xl md:text-7xl ">
                {project?.current.title}
              </h2>
              <p className=" text-gray-light mt-10 lg:max-w-[50%]">
                {project?.current.description}
              </p>
            </div>
            <div>
              <p className="text-gray-light text:xl lg:text-xl font-light">
                {new Date(project?.current?.publishedAt as Date).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <ProjectImageSlide images={project.current.images} />
      </div>
    </>
  );
};

export default page;
