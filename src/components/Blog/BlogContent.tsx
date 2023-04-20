import { PortableText } from "@portabletext/react";
import RichTextComponents from "../RichTextComponent";

const BlogContent = ({ title, date, content }: BlogContentProps) => {
  console.log(date);
  return (
    <article className="py-5">
      <header className="flex gap-2 md:gap-6   py-5">
        <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full md:gap-1">
          <h2 className="font-semibold text-2xl md:text-4xl capitalize">
            {title}
          </h2>
        </div>
      </header>
      <div className="max-w-3xl mx-auto py-1">
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
