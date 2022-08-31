import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { createStyles, makeStyles, Modal, Theme } from "@material-ui/core";
import NewPostIndex from "./NewPostIndex";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex bg-white">
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
          <a href="/">
            <HomeRoundedIcon className="mx-4 hover:cursor-pointer" />
          </a>
          <a className="no-underline" onClick={handleOpen}>
            <AddCircleOutlineRoundedIcon className="mx-4 hover:cursor-pointer" />
          </a>
          <a href="/component">
            <FavoriteBorderRoundedIcon className="mx-4 hover:cursor-pointer" />
          </a>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <NewPostIndex />
          </Modal>

          <Menu>
            <MenuButton>
              <AccountCircleIcon className="mx-4 hover:cursor-pointer" />
            </MenuButton>
            <MenuList className="block bg-white border border-gray-400 rounded-lg px-4 py-1 w-32">
              <MenuItem className="mt-1 font-extralight text-xs hover:text-pink-500">
                <a href="/mypage">Profile</a>
              </MenuItem>
              <br />
              <MenuItem className="mt-1 font-extralight text-xs hover:text-pink-500">
                Settings
              </MenuItem>
              <br />
              <Divider className="mt-1" />
              <MenuItem className="my-1 font-extralight text-xs hover:text-pink-500">
                <a href="/login">Log Out</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <hr />
    </>
  );
}
