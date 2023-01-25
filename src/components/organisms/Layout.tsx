import { ReactNode } from "react";
import Footer from "./Footer";
import { SideBar } from "./Sidebar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-gray-50 flex ">
        <SideBar />
        <div className="ml-52 w-full m-auto min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};
