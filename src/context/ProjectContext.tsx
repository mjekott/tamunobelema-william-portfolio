import { createContext, useContext, useMemo, useState } from "react";
import { Project } from "../../types/Project";

type ProjectContextState = {
  goToNextProject: () => void;
  goToPreviousProject: () => void;
  currentProject: Project | undefined;
  setCurrentProjectIndex: (index: number) => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  isLoading: boolean;
};

type ProjectContextProps = {
  children: React.ReactNode;
  projects: Project[];
};

const projectContext = createContext<ProjectContextState | undefined>(
  undefined
);

const ProjectContextProvider = ({
  children,
  projects,
}: ProjectContextProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goToNextProject = () => {
    if (currentProjectIndex < projects.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => prevIndex + 1);
        setIsLoading(false);
      }, 500); // Set a timeout to simulate a loading delay
    }
  };

  const goToPreviousProject = () => {
    if (currentProjectIndex > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => prevIndex - 1);
        setIsLoading(false);
      }, 500); // Set a timeout to simulate a loading delay
    }
  };

  const setCurrentProject = (index: number) => {
    if (index < 1 || index > projects.length) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setCurrentProjectIndex(index);
      setIsLoading(false);
    }, 500); // Set a timeout to simulate a loading delay
  };

  const currentProject = projects[currentProjectIndex];

  const memoizedValues = useMemo(() => {
    return {
      goToNextProject,
      goToPreviousProject,
      currentProject,
      setCurrentProjectIndex,
      isNextDisabled: currentProjectIndex + 1 === projects.length,
      isPreviousDisabled: currentProjectIndex === 0,
      isLoading,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProjectIndex, isLoading, projects]);

  return (
    <projectContext.Provider value={memoizedValues}>
      {children}
    </projectContext.Provider>
  );
};

export default ProjectContextProvider;

export const useProjectContext = () => {
  const context = useContext(projectContext);
  if (!context) {
    throw new Error(
      "useProjectContext must be used within a ProjectContextProvider"
    );
  }
  return context;
};
