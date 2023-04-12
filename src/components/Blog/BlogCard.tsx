import Image from "next/image";
import Link from "next/link";
import userImage from "../../assets/images/userImage.png";
const BlogCard = () => {
  return (
    <Link href="/articles/my">
      <article className="flex  gap-4 p-4">
        <Image
          src={userImage}
          className="grayscale"
          height={100}
          alt="user-image"
          sizes="(max-width: 768px) 264px,
            (max-width: 1024px) 264px,
            264px
            "
        />
        <div>
          <h2 className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
