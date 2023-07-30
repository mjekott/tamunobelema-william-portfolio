import BlogCard from "@/components/Blog/BlogCard";
import BlogContent from "@/components/Blog/BlogContent";
import { SEO } from "@/components/SEO";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeft } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import { getAllArticles } from "../../../sanity/sanity-utils";
import { Article } from "../../../types/Articles";

const ArticlesPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(0);

  const { data } = useQuery<Article[]>(
    ["articles", page],
    () => getAllArticles({ offset: page }),

    {
      keepPreviousData: true,
      placeholderData: articles,
    }
  );

  const disableNext = (page + 1) * 5 >= articles[0].total;

  return (
    <div className=" container  min-h-screen">
      <SEO title="Tamunobelema William | Articles" />
      <Header />
      {!!articles.length && (
        <div className="flex gap-14 py-8">
          <div className="p-4 w-full lg:w-[350px] relative">
            <div className="sticky top-28">
              <div className="grid divide-y divide-gray-dark gap-2 ">
                {data?.map((item) => {
                  return (
                    <BlogCard
                      isActive={item.slug === articles[0].slug}
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
          <div className="flex-1 hidden lg:flex flex-col ">
            <BlogContent {...articles[0]} />
            <div className="max-w-3xl mx-auto w-full ">
              <Link
                href={`/articles/${articles[1]?.slug}`}
                className={`${
                  articles[1]?.slug ? "inline-flex" : "hidden"
                } text-[#B3B3B6] hover:text-white text-2xl gap-1 flex items-center`}
              >
                <ArrowLeft /> Prev
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ArticlesPage;

export const getStaticProps = async () => {
  const articles = await getAllArticles({ offset: 0 });

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};
