import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ramenImg from "../../assets/images/tori.png";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Modal } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../providers/useAuth";
import { TResponseGetComment } from "../../types/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postButton: {
      color: "#fb8c00",
      fontWeight: "bold",
    },
    paper: {
      width: 320,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 10,
      borderColor: "white",
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

type Props = {
  image: string;
  caption?: string;
  location?: string;
  username: string;
  userId: number;
  postId: number;
};

export default function PostIndex({
  image,
  caption,
  location,
  username,
  userId,
  postId,
}: Props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [showAllCaption, setShowAllCaption] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [commentList, setCommentList] = useState<TResponseGetComment[]>([]);
  const [isShowComment, setIsShowComment] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickLike = () => {
    like ? setLike(false) : setLike(true);
  };

  const getCommentList = () => {
    api
      .get(`/get_comment/${postId}`)
      .then((response) => {
        setCommentList(response.data);
        // console.log(response.data);
        setIsShowComment(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClickDelete = useCallback(() => {
    if (window.confirm("本当に削除しますか？")) {
      api
        .post(`/delete_post/${postId}`)
        .then(() => {
          setOpen(false);
          window.location.reload();
        })
        .catch((error) => {
          alert("削除に失敗しました。");
          setOpen(false);
          console.error(error);
        });
    }
  }, []);

  const onClickViewComment = () => {
    if (!isShowComment) {
      getCommentList();
    } else {
      setIsShowComment(false);
    }
  };

  const onClickCreateComment = () => {
    api
      .post("/create_comment", {
        comment,
        post_id: postId,
        user_id: loginUser?.user_id,
      })
      .then(() => {
        setComment("");
        getCommentList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClickDeleteComment = (commentId: number, commentUserId: number) => {
    if (loginUser?.user_id !== commentUserId) return;
    api
      .post(`/delete_comment/${commentId}`)
      .then(() => {
        getCommentList();
      })
      .catch((error) => {
        alert("削除に失敗しました。");
        console.error(error);
      });
  };

  const body = (
    <div className={classes.paper}>
      <ul>
        <li className="text-red-500 text-sm font-bold my-3 text-center">
          Report
        </li>
        <hr className="w-80" />
        <li className="text-red-500 text-sm font-bold my-3 text-center">
          Unfollow
        </li>
        <hr className="w-80" />
        <li className="text-sm my-3 text-center">Add to favorites</li>
        <hr className="w-80" />
        <li
          className="text-sm my-3 text-center"
          onClick={() => navigate("/profile")}
        >
          Go to profile
        </li>
        <hr className="w-80" />
        <li
          className="text-sm my-3 text-center"
          onClick={() => navigate(`/edit/${postId}`)}
        >
          Edit
        </li>
        <hr className="w-80" />
        <li
          className="text-sm my-3 text-center"
          onClick={() => onClickDelete()}
        >
          Delete
        </li>
        <hr className="w-80" />
        <li className="text-sm my-3 text-center" onClick={handleClose}>
          Cancel
        </li>
      </ul>
    </div>
  );

  return (
    <div className="md:flex md:justify-evenly p-4">
      <div className="bg-white border-2 border-gray-100 rounded-lg w-fit">
        {/* header */}
        <header className="flex justify-between items-center p-2">
          <a href="/profile" className="flex items-center">
            <AccountCircleIcon />
            <div className="ml-2">
              <p className="text-sm">{username}</p>
              <p className="text-xs text-gray-500">{location}</p>
            </div>
          </a>
          <button
            className="text-sm hover:opacity-50 hover:cursor-pointer"
            onClick={handleOpen}
          >
            ･･･
          </button>
        </header>
        {/* img */}
        <div className="w-96 bg-white ">
          <Carousel
            infiniteLoop={false}
            autoFocus={true}
            autoPlay={false}
            showThumbs={false}
            showStatus={false}
          >
            <img src={ramenImg} alt="" />
            <img src={image} alt="" />
            <img src={ramenImg} alt="" />
          </Carousel>
          <div className="flex w-96 my-2 justify-between">
            <div>
              {like ? (
                <FavoriteRoundedIcon
                  className="mx-2 text-red-500 hover:cursor-pointer"
                  onClick={onClickLike}
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  className="mx-2 text-red-500 hover:cursor-pointer"
                  onClick={onClickLike}
                />
              )}

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
          <p className="font-bold">{username}</p>
          <div className="flex">
            {!!caption && caption?.length >= 20 ? (
              !showAllCaption ? (
                <>
                  <p>{caption.substring(0, 20)}...</p>
                  <button
                    className="ml-2 text-gray-400 hover:cursor-pointer"
                    onClick={() => setShowAllCaption(true)}
                  >
                    more
                  </button>
                </>
              ) : (
                <div className="flex flex-col w-full">
                  <p className="w-full max-w-[368px]">{caption}</p>
                  <button
                    className="text-gray-400 hover:cursor-pointer text-right"
                    onClick={() => {
                      setShowAllCaption(false);
                      setIsShowComment(false);
                    }}
                  >
                    close
                  </button>
                </div>
              )
            ) : (
              <p>{caption}</p>
            )}
          </div>
          {/* comment */}
          {isShowComment && (
            <ul className="mt-6 text-sm text-gray-600">
              {commentList.map((data) => (
                <li
                  className="mt-2 flex items-start max-w-[368px]"
                  key={data.comment.comment_id}
                >
                  <p className="">{data.user.username}:</p>
                  <p className="ml-2">{data.comment.comment}</p>
                  {loginUser?.user_id === data.user.user_id ? (
                    <DeleteIcon
                      fontSize="small"
                      onClick={() =>
                        onClickDeleteComment(
                          data.comment.comment_id,
                          data.user.user_id
                        )
                      }
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          )}
          {isShowComment ? (
            <button
              className="text-gray-400 mb-4 hover:cursor-pointer hover:font-semibold"
              onClick={onClickViewComment}
            >
              close all comments
            </button>
          ) : (
            <button
              className="text-gray-400 mb-4 hover:cursor-pointer hover:font-semibold"
              onClick={onClickViewComment}
            >
              View all comments
            </button>
          )}
        </div>
        <hr />

        <div className="flex justify-between m-2">
          <div className="flex items-center">
            <AccountCircleIcon />
            <input
              className="ml-2 outline-none"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button
            className={classes.postButton}
            onClick={onClickCreateComment}
            disabled={!loginUser}
          >
            Post
          </Button>
        </div>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
