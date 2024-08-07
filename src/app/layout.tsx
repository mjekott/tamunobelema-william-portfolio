import Loader from "@/components/Loader";
import { siteConfig } from "@/config/site";
import { Viewport } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
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
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon-light.ico",
      href: "/favicon-light.ico",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon-dark.ico",
      href: "/favicon-dark.ico",
    },
  ],
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
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`text-white bg-[#111111] relative ${ppMori.className}`}>
        <Provider>
          {children} {modal}
        </Provider>
        <Loader />
      </body>
    </html>
  );
}
