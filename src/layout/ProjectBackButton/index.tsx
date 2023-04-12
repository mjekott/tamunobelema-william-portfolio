import { X } from "@phosphor-icons/react";
import { useRouter } from "next/router";

const ProjectBackButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.replace("/");
  };
  return (
    <div className=" py-2 lg:py-4 flex justify-center items-center">
      <button onClick={handleGoBack}>
        <X size="32" />
      </button>
    </div>
  );
};

export default ProjectBackButton;
