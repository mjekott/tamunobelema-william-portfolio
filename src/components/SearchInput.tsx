import userImage from "@/assets/images/userImage.png";
import useClickOutside from "@/hooks/useClickOutside";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import client from "../../sanity/config/sanity.client";
import { Article } from "../../types/Articles";

const query: string = groq`
    *[_type == "article" && (title match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
      'thumbnail':thumbnail.asset->url,
    }
`;

const SearchInput = () => {
  const ref = useRef<any>();

  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const clearSearch = () => {
    setSearchText("");
    setArticles([]);
  };

  useClickOutside(ref, clearSearch);

  const fetchArticles = useCallback(async () => {
    setIsLoading(true);
    const products: Article[] = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });
    setArticles(products);
    setIsLoading(false);
  }, [searchText]);

  useEffect(() => {
    if (searchText.trim().length < 3) {
      setArticles([]);
    }
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchArticles();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [fetchArticles, searchText]);

  return (
    <div className="relative w-full max-w-lg" ref={ref}>
      <div>
        <input
          type="search"
          className="block w-full flex-1 py-2 px-3 text-gray-100 border border-slate-300 focus:border-gray-100 focus:outline-none bg-transparent"
          placeholder="Start Typing..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {articles.length === 0 && searchText ? (
        isLoading ? (
          <div className="absolute mt-2 z-50  w-full overflow-hidden flex justify-center items-center bg-white py-5 overflow-y-auto text-black">
            Loading...
          </div>
        ) : (
          <div className="absolute text-black mt-2 z-50 w-full overflow-hidden  bg-white py-5 overflow-y-auto flex justify-center items-center">
            {" "}
            No Article Found
          </div>
        )
      ) : (
        <div className="absolute mt-2 z-50 w-full overflow-hidden  bg-white max-h-[500px] overflow-y-auto">
          {articles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              className="cursor-pointer py-2 px-3 hover:bg-slate-100 flex justify-between items-start gap-4"
              key={article.title}
              onClick={clearSearch}
            >
              <Image
                src={article.thumbnail ?? userImage}
                className="grayscale"
                height={50}
                width={50}
                alt="user-image"
              />
              <div className="text-black">
                <h2>{article.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
