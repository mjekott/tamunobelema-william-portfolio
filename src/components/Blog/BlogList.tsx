import BlogCard from "./BlogCard";

type BlogListProps = {
  articles: Article[];
};

const BlogList = ({ articles }: BlogListProps) => {
  return (
    <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article) => (
        <BlogCard
          title={article.title}
          slug={article.slug}
          key={article.slug}
        />
      ))}
    </div>
  );
};

export default BlogList;
