import BackButton from "@/layout/BackButton";
import { motion as m } from "framer-motion";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <m.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0, y: "100%" }}
      className="min-h-screen container p-4"
    >
      <BackButton />
    </m.div>
  );
};

export default ProjectPage;
