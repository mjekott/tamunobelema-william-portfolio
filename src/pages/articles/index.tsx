import BlogCard from "@/components/Blog/BlogCard";
import { SEO } from "@/components/SEO";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getAllArticles } from "../../../sanity/sanity-utils";

const ArticlesPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, data } =
    useInfiniteQuery({
      queryKey: ["articles"],
      queryFn: async ({ pageParam = 0 }) => {
        return getAllArticles({ offset: pageParam });
      },

      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length !== 0 ? allPages.indexOf(lastPage) + 1 : false;
      },
      initialData: () => {
        return {
          pageParams: [null],
          pages: [articles],
        };
      },
      enabled: articles.length > 0,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, fetchNextPage, hasNextPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className=" container p-4 min-h-screen"
    >
      <SEO title="Tamunobelema William | Articles" />
      <Header />
      <h2 className="text-xl lg:text-4xl  font-semibold my-5">Articles </h2>
      <div className="grid divide-y divide-gray-dark gap-2">
        {data?.pages &&
          !!data.pages.length &&
          data?.pages.map((page) => {
            return page.map((article: any) => (
              <BlogCard
                date={article.date}
                title={article.title}
                slug={article.slug}
                key={article.slug}
              />
            ));
          })}
      </div>
      <div ref={ref} className="flex justify-center py-6">
        {isFetching && (
          <div
            className="inline-block relative h-6 w-6 animate-spin rounded-full border-gray-300 border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default ArticlesPage;

export const getStaticProps = async () => {
  const articles = await getAllArticles({ offset: 0 });
  return {
    props: {
      articles,
    },
  };
};
