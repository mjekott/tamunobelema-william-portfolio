import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../sanity/config/urlFor";
import { Project } from "../../../types/Project";

type Props = {
  item: Project;
};

const FeaturedPortfolioCard = ({ item: project }: Props) => {
  return (
    <Link href={`/projects/${project?.slug}`}>
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
        <p className="text-gray-light text-lg">{project?.description}</p>
        <p className="mt-5 text-2xl">
          {new Date(project?.publishedAt).getFullYear()}
        </p>
      </div>
    </Link>
  );
};

export default FeaturedPortfolioCard;
