import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../sanity/config/urlFor";

const sharedClasses = "dark:text-white";
const bodyClasses = "text-md ";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full  h-[300px] lg:h-[500px] my-10">
          <Image
            className="object-cover"
            src={urlFor(value.asset).url()}
            alt={value.alt || "blog image"}
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className={`mb-4 text-4xl  md:text-5xl lg:text-6xl ${sharedClasses}`}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={`mb-4 text-3xl  md:text-5xl lg:text-6xl ${sharedClasses}`}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className={`text-3xl ${sharedClasses}`}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className={`text-2xl ${sharedClasses}`}>{children}</h4>
    ),
    normal: ({ children }: any) => <p className={`my-4 text-md`}>{children}</p>,

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoreration-[#8F00FF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
