import { Button } from "@material-ui/core";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import PostIndex from "../organisms/PostIndex";
import { SideBar } from "../organisms/Sidebar";

export default function TopPage() {
  return (
    <>
      {/* <Header /> */}
      {/* main contents */}
      <div className="bg-gray-50 flex">
        <SideBar />
        <div className="ml-52">
          <PostIndex />
          <PostIndex />
          <PostIndex />
        </div>
      </div>
      <Footer />
    </>
  );
}
