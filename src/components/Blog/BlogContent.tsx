import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import RichTextComponents from "../RichTextComponent";

const BlogContent = ({ title, date, content }: BlogContentProps) => {
  console.log(date);
  return (
    <article className="py-10 ">
      <header className="flex gap-2 md:gap-6   py-5 border-b border-gray-dark">
        <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full md:gap-1">
          <h2 className="font-semibold text-2xl md:text-4xl capitalize">
            {title}
          </h2>
          <p className="text-md mt-2 italic text-right">
            {dayjs(date).format("MMM DD, YYYY")}
          </p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto py-4">
        <PortableText value={content} components={RichTextComponents} />
      </div>
    </article>
  );
};

export default BlogContent;

type BlogContentProps = {
  title: string;
  slug: string;
  date: string;
  content: any;
};
