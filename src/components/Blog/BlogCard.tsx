import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import userImage from "../../assets/images/userImage.png";

const BlogCard = ({ title, slug, date }: BlogCardProps) => {
  return (
    <Link href={`/articles/${slug}`}>
      <article className="flex  gap-4  py-6 cursor-pointer">
        <Image
          src={userImage}
          className="grayscale"
          height={50}
          alt="user-image"
          sizes="(max-width: 768px) 264px,
            (max-width: 1024px) 264px,
            264px
            "
        />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-xs mt-2"> {dayjs(date).format("MMM DD, YYYY")}</p>
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
};
