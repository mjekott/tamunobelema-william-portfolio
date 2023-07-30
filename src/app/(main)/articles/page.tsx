import BlogContent from "@/components/Blog/BlogContent";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getAllArticles } from "../../../../sanity/sanity-utils";

export const metadata = {
  title: "Articles",
};

export const revalidate = 60;

const page = async () => {
  const articles = await getAllArticles({ offset: 0 });

  return (
    <div className="hidden lg:block">
      <BlogContent {...articles[0]} />
      <div className="max-w-3xl mx-auto w-full ">
        <Link
          href={`/articles/${articles[1]?.slug}`}
          className={`${
            articles[1]?.slug ? "inline-flex" : "hidden"
          } text-[#B3B3B6] hover:text-white text-2xl gap-1 flex items-center`}
        >
          <ChevronLeftIcon /> Prev
        </Link>
      </div>
    </div>
  );
};

export default page;
