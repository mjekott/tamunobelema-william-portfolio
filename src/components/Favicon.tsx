"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image_url?: string;
}

const Favicon = (props: SEOProps) => {
  const [faviconHref, setFaviconHref] = useState("/favicon-light.ico");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      setFaviconHref("/favicon-light.ico");
    } else {
      setFaviconHref("/favicon-dark.ico");
    }
  }, []);

  return (
    <Head>
      <link rel="shortcut icon" href={faviconHref} />
    </Head>
  );
};

export default Favicon;
