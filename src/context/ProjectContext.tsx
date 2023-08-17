"use client";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Project } from "../../types/Project";

interface IProjectContext {
  project: Project | undefined;
  onClose: () => void;
  addProject: (item: Project) => void;
}

const ProjectContext = createContext<IProjectContext | undefined>(undefined);

const ProjectContextProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const onClose = () => {
    setProject(undefined);
  };

  const addProject = (item: Project) => {
    setProject(item);
  };

  const value = useMemo(() => ({ project, addProject, onClose }), [project]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error(
      "useProjectContext must be used within ProjectContextProvider"
    );

  return context;
};
