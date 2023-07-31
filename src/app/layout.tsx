import Favicon from "@/components/Favicon";
import Loader from "@/components/Loader";
import { siteConfig } from "@/config/site";
import localFont from "next/font/local";
import "swiper/swiper.min.css";
import "./globals.css";
import Provider from "./provider";

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

export const metadata = {
  metadataBase: new URL(siteConfig.host),
  title: {
    template: "%s | " + siteConfig.siteName,
    default: siteConfig.siteName,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    url: siteConfig.host,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.host}/opengraph-image.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en",
    type: "website",
  },
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`text-white bg-[#111111] relative ${ppMori.className}`}>
        <Provider>{children}</Provider>
        <Loader />
        <Favicon />
      </body>
    </html>
  );
}
