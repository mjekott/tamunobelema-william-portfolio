import BlogList from "@/components/Blog/BlogList";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { motion } from "framer-motion";
const ArticlesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className=" container p-4 min-h-screen"
    >
      <Header />
      <BlogList />
      <Footer />
    </motion.div>
  );
};

export default ArticlesPage;
