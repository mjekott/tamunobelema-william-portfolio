import About from "@/features/homepage/components/About";
import Hero from "@/features/homepage/components/Hero/Hero";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Header />
      <Hero />

      <About />
      <Footer />
    </motion.div>
  );
}
