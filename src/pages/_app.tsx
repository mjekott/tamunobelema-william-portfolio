import Loader from "@/components/Loader";
import { SEO } from "@/components/SEO";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { useEffect, useState } from "react";

const ppMori = localFont({
  src: [
    {
      path: "../assets/font/pp-mori/PPMori-Extralight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/font/pp-mori/PPMori-ExtralightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/font/pp-mori/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/pp-mori/PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/font/pp-mori/PPMori-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/pp-mori/PPMori-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
});

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SEO />
      <AnimatePresence>
        <main className={ppMori.className}>
          {!isLoaded ? <Loader key="loader" /> : <Component {...pageProps} />}
        </main>
      </AnimatePresence>
    </QueryClientProvider>
  );
}
