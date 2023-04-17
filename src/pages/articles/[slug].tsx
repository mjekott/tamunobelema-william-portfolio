import BlogContent from "@/components/Blog/BlogContent";
import { SEO } from "@/components/SEO";
import BackButton from "@/layout/BackButton";
import Footer from "@/layout/Footer";
import { motion } from "framer-motion";
import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { getAllArticles, getArticleBySlug } from "../../../sanity/sanity-utils";

const ArticleDetailPage = ({
  article,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const navigate = useRouter();
  const handleBack = () => {
    navigate.push("/articles");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="min-h-screen container p-4 flex flex-col"
    >
      <BackButton handleClose={handleBack} />
      <SEO title={`Tamunobelema William | ${article.title}`} />

      <BlogContent {...article} />
      <Footer />
    </motion.div>
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
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const article: Article = await getArticleBySlug(
    context.params?.slug as string
  );
  return {
    props: {
      article,
    },
  };
};
