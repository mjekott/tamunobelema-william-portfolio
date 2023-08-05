import { ReactNode } from "react";
import { getAllArticles } from "../../../../sanity/sanity-utils";
import Sidebar from "./Sidebar";

export const revalidate = 600;

const layout = async ({ children }: { children: ReactNode }) => {
  const articles = await getAllArticles({ offset: 0 });
  return (
    <div className="container">
      <div className="flex gap-14  py-8 flex-col lg:flex-row">
        <Sidebar articles={articles} />
        <div className="flex-1  flex flex-col px-4 lg:px-0">{children}</div>
      </div>
    </div>
  );
};

export default layout;
