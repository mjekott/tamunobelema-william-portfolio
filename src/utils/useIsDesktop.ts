import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  return { isDesktop };
};

export default useIsDesktop;
