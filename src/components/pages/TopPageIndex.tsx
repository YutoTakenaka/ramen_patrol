import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

export default function TopPageIndex() {
  return (
    <>
      {/* header */}
      <div className="flex">
        <p className="flex justify-center items-center font-bold bg-gradient-to-br from-pink-500 to-yellow-500 h-26 w-1/3 text-white text-2xl bg-clip-text text-transparent">
          <a href="/">Ramen Patrol</a>
        </p>
        <div className="flex items-center w-1/3">
          <div className=" bg-gray-100 hover:opacity-70 my-4 mx-auto rounded-lg pl-2 text-sm">
            <SearchIcon />
            <InputBase placeholder="Search…" className="ml-2" />
          </div>
        </div>
        <div className="flex items-center justify-center w-1/3">
          <HomeRoundedIcon className="mx-4" />
          <AddCircleOutlineRoundedIcon className="mx-4" />
          <FavoriteBorderRoundedIcon className="mx-4" />
        </div>
      </div>
      <hr />
      {/* main contents */}
      <div className="bg-gray-50 h-screen">
        <Button href="/component">コンポーネントページへ</Button>
      </div>
    </>
  );
}
