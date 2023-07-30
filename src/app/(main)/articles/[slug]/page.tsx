import BlogContent from "@/components/Blog/BlogContent";
import { siteConfig } from "@/config/site";
import BackButton from "@/layout/BackButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { groq } from "next-sanity";
import Link from "next/link";
import { clientFetch } from "../../../../../sanity/config/sanity.client";
import { getArticleBySlug } from "../../../../../sanity/sanity-utils";
import { IArticlePage } from "../../../../../types/Articles";

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const article: IArticlePage = await getArticleBySlug(params.slug);
  return {
    title: article.current.title,
    openGraph: {
      images: article.current.thumbnail,
      title: article.current.title,
      url: `${siteConfig.host}/articles/${params.slug}`,
      siteName: article.current.title,
      type: "website",
    },
  };
};

// Generate Static Params Function
export const generateStaticParams = async () => {
  try {
    const articles = await clientFetch(groq`*[_type=='article'] [0...20] {
      'slug': slug.current,
    }`);

    const params = articles.map((article: any) => {
      return {
        slug: article.slug,
      };
    });

    return params;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching articles");
  }
};

const page = async ({ params }: { params: { slug: string } }) => {
  const article: IArticlePage = await getArticleBySlug(params.slug);

  return (
    <div className="fixed z-50 bg-[#111111]  inset-0 px-4 lg:px-0 lg:relative overflow-y-auto py-20 lg:py-0">
      <BackButton className="lg:hidden" href="/articles" />
      <BlogContent {...article?.current} />
      <div className="w-full flex  justify-between items-center ">
        <Link
          href={`/articles/${article?.previous?.slug}`}
          className={`${
            article.previous?.slug ? "inline-flex" : "hidden"
          } text-[#B3B3B6] hover:text-white lg:text-xl flex gap-1 items-center`}
        >
          <ChevronLeftIcon /> Prev
        </Link>
        <Link
          href={`/articles/${article?.next?.slug}`}
          className={`${
            article.next?.slug ? "inline-flex" : "hidden"
          } text-[#B3B3B6] hover:text-white lg:text-xl flex gap-1 items-center ml-auto`}
        >
          Next <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default page;
