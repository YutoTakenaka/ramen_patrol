import { Button } from "@material-ui/core";
import Header from "../organisms/Header";

export default function TopPageIndex() {
  return (
    <>
      <Header />
      {/* main contents */}
      <div className="bg-gray-50 h-screen">
        <Button href="/component">コンポーネントページへ</Button>
      </div>
    </>
  );
}
