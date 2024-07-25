import Link from "next/link";
import userImage from "../../assets/images/userImage.png";
import BlurImage from "../BlurImage";

const BlogCard = ({
  title,
  slug,
  date,
  isActive = false,
  thumbnail,
}: BlogCardProps) => {
  return (
    <Link href={`/articles/${slug}`}>
      <article className="flex  gap-4  py-6 cursor-pointer items-start pr-3 hover:text-[#B3B3B6]">
        <BlurImage
          src={thumbnail ?? userImage}
          className="grayscale hover:grayscale-0"
          height={50}
          width={50}
          alt="user-image w-[50px] h-[50px]"
          sizes="100vw"
        />
        <div>
          <h2
            className={`font-normal ${
              isActive ? "lg:text-white" : " "
            } text-[#B3B3B6] text-[16px]`}
          >
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;

type BlogCardProps = {
  title: string;
  slug: string;
  date: string;
  isActive?: boolean;
  thumbnail: string;
};
