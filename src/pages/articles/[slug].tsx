import BlogContent from "@/components/Blog/BlogContent";
import BackButton from "@/layout/BackButton";
import Footer from "@/layout/Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ArticleDetailPage = () => {
  const navigate = useRouter();
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 1, y: "100%" }}
      className="min-h-screen container p-4"
    >
      <BackButton />
      <BlogContent />
      <Footer />
    </motion.div>
  );
};

export default ArticleDetailPage;
