import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-[#111111] relative text-white  min-h-screen ">
        <Main />
        <NextScript />
        <div id="portal" />
      </body>
    </Html>
  );
}
