import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ThumbUpOutlined } from "@material-ui/icons";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import dummyPhoto from "../../assets/images/dummy-photo.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postButton: {
      color: "#ff1493",
      fontWeight: "bold",
    },
  })
);

export default function NewPostIndex() {
  const classes = useStyles();

  return (
    <div className="bg-white w-3/5 max-w-3xl rounded-lg">
      <div className="flex items-center justify-between px-2 py-1">
        <KeyboardBackspaceRoundedIcon />
        <p className="ml-8">Create new post</p>
        <Button className={classes.postButton}>Next</Button>
      </div>
      <Divider className="mt-1" />
      <div className="flex justify-center p-12 h-96">
        <div>
          <div className="mt-12 w-32 h-32 mx-auto flex justify-center items-center font-thin">
            <img src={dummyPhoto} />
          </div>
          <p className="mx-auto text-lg font-light">
            Drag photos and videos here
          </p>
          <div className="flex justify-center">
            <button className="py-1 px-8 mt-8 bg-pink-500 text-white text-center rounded-md hover:opacity-80 text-xs">
              Select from computer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
