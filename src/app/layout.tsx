import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`text-white bg-[#111111] ${ppMori.className}`}>
        <Header />
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
