import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ramenImg from "../../assets/images/4.png";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postButton: {
      color: "#fb8c00",
      fontWeight: "bold",
    },
  })
);

export default function PostIndex() {
  const classes = useStyles();

  const showModal = () => {
    alert();
  };
  return (
    <div className="md:flex md:justify-evenly m-4">
      <div className="bg-white border-2 border-gray-100 rounded-lg w-fit">
        {/* header */}
        <div className="flex justify-between items-center m-2">
          <div className="flex items-center">
            <AccountCircleIcon />
            <p className="text-sm ml-2">takenaka_yuto</p>
          </div>
          <div
            className="text-sm hover:opacity-50 hover:cursor-pointer"
            onClick={showModal}
          >
            ･･･
          </div>
        </div>
        {/* img */}
        <div className="w-96 bg-white ">
          <img src={ramenImg} alt="" />
          <div className="flex w-96 my-2 justify-between">
            <div>
              <FavoriteBorderRoundedIcon className="mx-2 text-red-500 hover:cursor-pointer" />
              <ChatBubbleOutlineIcon className="mx-2 hover:cursor-pointer" />
            </div>
            <BookmarkBorderIcon className="mr-4 hover:cursor-pointer" />
          </div>
          <p>
            <span className="ml-2 mr-1">123</span>likes
          </p>
        </div>
        {/* caption */}
        <div className="m-2">
          <div className="flex">
            <p className="font-bold">takenaka_yuto</p>
            <p className="ml-2">This Ramen is ...</p>
            <p className="text-gray-400 hover:cursor-pointer">more</p>
          </div>
          <p className="text-gray-400 mb-4 hover:cursor-pointer">
            View all comments
          </p>
        </div>
        <hr />
        {/* comment */}
        <div className="flex justify-between m-2">
          <div className="flex items-center">
            <AccountCircleIcon />
            <input
              className="ml-2 outline-none"
              type="text"
              placeholder="Add a comment..."
            />
          </div>
          <Button className={classes.postButton}>Post</Button>
        </div>
      </div>
    </div>
  );
}
