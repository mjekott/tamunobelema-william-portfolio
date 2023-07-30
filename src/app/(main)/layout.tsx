import Favicon from "@/components/Favicon";
import Loader from "@/components/Loader";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Loader />
      <Favicon />
    </>
  );
}
