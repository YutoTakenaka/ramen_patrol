import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Theme,
} from "@material-ui/core";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { ChangeEvent, useState } from "react";
import dummyPhoto from "../../assets/images/dummy-photo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Textarea } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import SwitchButton from "../molecules/inputs/Switch";

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
  const [isCaption, setIsCaption] = useState(false);
  const [textArea, setTextArea] = useState("");
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };
  const onClickNext = () => {
    setIsCaption(true);
  };
  const onClickPost = () => {
    setIsCaption(false);
  };

  return (
    <div className="bg-white w-3/5 max-w-2xl rounded-lg h-2/5">
      <div className="flex items-center justify-between px-2 py-1">
        <KeyboardBackspaceRoundedIcon onClick={onClickPost} />
        <p className="ml-8">Create new post</p>
        {isCaption ? (
          <Button className={classes.postButton} onClick={onClickPost}>
            Post
          </Button>
        ) : (
          <Button className={classes.postButton} onClick={onClickNext}>
            Next
          </Button>
        )}
      </div>
      <Divider />
      {isCaption ? (
        <div className="h-4/5">
          <div className="flex items-center p-2">
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <p className="ml-2 font-light">Takenaka Yuto</p>
          </div>
          <div className="flex h-4/5">
            <div className="w-1/2 font-light text-xs text-gray-400 h-full m-2">
              <Textarea
                value={textArea}
                onChange={(e) => handleChangeTextArea(e)}
                placeholder="Write a caption...   "
                className="w-full h-full text-black p-1 "
                colorScheme="pink"
                variant="filled"
              />
            </div>
            <div className="w-1/2 m-2">
              <Input
                placeholder="Add location"
                size="xs"
                variant="unstyled"
                className="font-light text-xs text-gray-500 my-2 py-1 pl-1 w-full"
              />
              <Divider />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton className="w-full">
                    <div className="w-full flex justify-between items-center py-1">
                      <p className="font-light text-xs my-2">
                        Advanced settings
                      </p>
                      <AccordionIcon className="w-6 h-6" />
                    </div>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <div className="font-light text-sm w-full">
                      <div className="flex items-center">
                        <p>Hide like and view counts on this post</p>
                        <SwitchButton />
                      </div>
                      <p className="text-xs font-thin text-gray-400 mt-1 ml-1 mb-1">
                        Only ypu will see the total number of likes and views on
                        this post. You can change this later by going to the
                        ...menu at the top og the post. To hide like counts on
                        other people's posts, go to your account settings
                      </p>
                      <div className=" w-full flex items-center justify-between">
                        <p className="">Turn off commenting</p>
                        <SwitchButton />
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Divider />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-12 h-96">
          <div>
            <div className="mt-12 w-32 h-32 mx-auto flex justify-center items-center font-thin">
              <img src={dummyPhoto} />
            </div>
            <div className="flex justify-center">
              <button className="py-1 px-8 mt-8 bg-pink-500 text-white text-center rounded-md hover:opacity-80 text-xs">
                Select from computer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
