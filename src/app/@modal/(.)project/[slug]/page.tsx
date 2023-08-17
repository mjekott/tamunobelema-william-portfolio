"use client";
import Modal from "@/components/Modal";
import { useProjectContext } from "@/context/ProjectContext";
import ProjectImageSlide from "@/features/projects/ProjectImageSlide";
import BackButton from "@/layout/BackButton";
import { useEffect } from "react";

const ProjectModal = () => {
  const { project, onClose } = useProjectContext();

  useEffect(() => {
    return () => {
      onClose();
    };
  }, [onClose]);

  return (
    <Modal>
      <div className="h-full w-full pb-20 relative">
        <BackButton />
        {project && (
          <div className="container relative p-4 py-10">
            <div className="relative py-10">
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h2 className="capitalize font-semibold break-words text-5xl md:text-7xl ">
                    {project?.title}
                  </h2>
                  <p className=" text-gray-light mt-10 lg:max-w-[50%]">
                    {project?.description}
                  </p>
                </div>
                <div>
                  <p className="text-gray-light text:xl lg:text-xl font-light mt-5 md:mt-0">
                    {new Date(project?.publishedAt as Date).getFullYear()}
                  </p>
                </div>
              </div>
            </div>
            <ProjectImageSlide images={project?.images} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
