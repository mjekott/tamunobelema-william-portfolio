import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogList;
