import { siteConfig } from "@/config/site";
import ProjectImageSlide from "@/features/projects/ProjectImageSlide";
import { groq } from "next-sanity";
import { clientFetch } from "../../../../sanity/config/sanity.client";
import urlFor from "../../../../sanity/config/urlFor";
import { getProject } from "../../../../sanity/sanity-utils";

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = await getProject(params.slug);
  return {
    title: project.current.title,
    openGraph: {
      images: [urlFor(project.current.mainImage).url()],
      title: project.current.title,
      url: `${siteConfig.host}/project/${params.slug}`,
      siteName: project.current.title,
      type: "website",
    },
  };
};

// Generate Static Params Function
export const generateStaticParams = async () => {
  try {
    const projects = await clientFetch(groq`*[_type=='project'] [0...20] {
      'slug': slug.current,
    }`);

    const params = projects.map((project: any) => {
      return {
        slug: project.slug,
      };
    });

    return params;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching projects");
  }
};

export const revalidate = 60;

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
