import { Button } from "@material-ui/core";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import PostIndex from "../organisms/PostIndex";

export default function TopPage() {
  return (
    <>
      <Header />
      {/* main contents */}
      <div className="bg-gray-50 h-full w-screen">
        <div className="">
          <PostIndex />
          <PostIndex />
          <PostIndex />
        </div>
      </div>
      <Footer />
    </>
  );
}
