"use client";
import { useEffect, useState } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image_url?: string;
}

const Favicon = () => {
  const [faviconHref, setFaviconHref] = useState("/favicon-light.ico");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      setFaviconHref("/favicon-dark.ico");
    } else {
      setFaviconHref("/favicon-light.ico");
    }
  }, []);

  return <link rel="icon" href={faviconHref} />;
};

export default Favicon;
