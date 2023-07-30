import BlogCard from "@/components/Blog/BlogCard";
import BlogContent from "@/components/Blog/BlogContent";
import { SEO } from "@/components/SEO";
import BackButton from "@/layout/BackButton";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAllArticles, getArticleBySlug } from "../../../sanity/sanity-utils";
import { Article, IArticlePage } from "../../../types/Articles";

const ArticleDetailPage = ({
  article,
  previous,
  next,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const navigate = useRouter();
  const handleBack = () => {
    navigate.push("/articles");
  };

  const [page, setPage] = useState(0);
  const { data, isLoading } = useQuery<Article[]>(
    ["articles", page],
    () => getAllArticles({ offset: page }),

    {
      keepPreviousData: true,
    }
  );

  const disableNext = (page + 1) * 5 >= article?.total;

  return (
    <div className="min-h-screen container p-4 flex flex-col">
      <div className="hidden lg:block sticky top-0 bg-[#111111] z-40">
        <Header />
      </div>
      <div className="lg:hidden">
        <BackButton handleClose={handleBack} />
      </div>
      <SEO title={`Tamunobelema William | ${article.title}`} />
      <div className="flex py-8 gap-14 relative">
        <div className="p-4 w-full hidden lg:block lg:w-[350px] relative">
          <div className="sticky top-28">
            {isLoading && <p className="py-10">loading...</p>}
            <div className="grid divide-y divide-gray-dark gap-2 ">
              {data?.map((item) => {
                return (
                  <BlogCard
                    isActive={item.slug === article.slug}
                    date={item.date}
                    title={item.title}
                    slug={item.slug}
                    key={item.slug}
                    thumbnail={item.thumbnail}
                  />
                );
              })}
            </div>

            <div className={`flex items-center justify-end gap-5`}>
              <button
                disabled={page === 0}
                onClick={() => setPage((prev) => prev - 1)}
                className={`icon-button w-7 h-7  `}
              >
                <ChevronLeftIcon className=" w-4 h-4 " />
              </button>
              <button
                disabled={disableNext}
                onClick={() => setPage((prev) => prev + 1)}
                className={`icon-button w-7 h-7  `}
              >
                <ChevronRightIcon className=" w-4 h-4 " />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col sticky top-0">
          <BlogContent {...article} />
          <div className="w-full flex  justify-between items-center ">
            <Link
              href={`/articles/${previous?.slug}`}
              className={`${
                previous?.slug ? "inline-flex" : "hidden"
              } text-[#B3B3B6] hover:text-white lg:text-xl flex gap-1 items-center`}
            >
              <ArrowLeft /> Prev
            </Link>
            <Link
              href={`/articles/${next?.slug}`}
              className={`${
                next?.slug ? "inline-flex" : "hidden"
              } text-[#B3B3B6] hover:text-white lg:text-xl flex gap-1 items-center ml-auto`}
            >
              Next <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;

export const getStaticPaths = async () => {
  const articles: Article[] = await getAllArticles({ offset: 0 });
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));
  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const response: IArticlePage = await getArticleBySlug(
    context.params?.slug as string
  );

  return {
    props: {
      article: response?.current || {},
      previous: response?.previous || null,
      next: response?.next || null,
    },
    revalidate: 60,
  };
};
