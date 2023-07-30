"use client";

import BlogCard from "@/components/Blog/BlogCard";
import SearchInput from "@/components/SearchInput";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getAllArticles } from "../../../sanity/sanity-utils";
import { Article } from "../../../types/Articles";

const Sidebar = ({ articles = [] }: { articles: Article[] }) => {
  const params = useParams();

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
    <div className="p-4 w-full lg:w-[350px] relative">
      <div className="sticky top-28">
        <SearchInput />
        <div className="grid divide-y divide-gray-dark gap-2  mt-4">
          {data?.map((item: any) => {
            return (
              <BlogCard
                isActive={
                  params.slug
                    ? item.slug === params.slug
                    : item.slug === articles[0].slug
                }
                date={item.date}
                title={item.title}
                slug={item.slug}
                key={item.slug}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </div>

        <div className={`flex items-center justify-end gap-5 mt-4`}>
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
  );
};

export default Sidebar;
