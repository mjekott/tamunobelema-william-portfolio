import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

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

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <main className={ppMori.className}>
        <Component key={router.pathname} {...pageProps} />
      </main>
    </AnimatePresence>
  );
}
