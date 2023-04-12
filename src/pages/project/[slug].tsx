import { motion as m } from "framer-motion";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 1, y: "100%" }}
      className="min-h-screen"
    >
      <button onClick={() => router.back()}>x</button>
    </m.div>
  );
};

export default ProjectPage;
