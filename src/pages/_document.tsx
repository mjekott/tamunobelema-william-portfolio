import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#111111] p-0 text-white flex flex-col min-h-screen overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
