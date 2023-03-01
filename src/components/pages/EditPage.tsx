import { Layout } from "../organisms/Layout";
import { Divider } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
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
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { TResponseGetPostsAll } from "../../types/types";

export const EditPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  // @todo キャプション、場所、ファイルの初期値を投稿データから引っ張ってきて指定する。
  const [caption, setCaption] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  // @todo imageの型をファイル型に修正する
  const [file, setFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [targetPost, setTargetPost] = useState<TResponseGetPostsAll>();
  const postId = params.id as string;
  useEffect(() => {
    const getPost = async () => {
      const response = await api.get(`/get_post/${postId}`);
      setTargetPost(response.data);
      return response;
    };
    getPost();
  }, []);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      setFileName(files[0].name);
    }
  };
  const handleChangeCaption = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };
  const handleChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const onClickEdit = async () => {
    await api
      .post(`/edit_post/${postId}`, {
        post_id: postId,
        image: fileName,
        caption,
        location,
        user_id: targetPost?.post.user_id,
      })
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mt-20 w-11/12 m-auto">Edit post</h1>
      <div className="flex items-center justify-between gap-8 py-16 w-11/12 m-auto ">
        {/* 写真選択 */}
        <div className="h-96 w-full bg-white border border-gray-200 rounded-md">
          <div className="flex justify-center">
            <div>
              <div className="mt-12 w-32 h-32 mx-auto flex justify-center items-center font-thin">
                <img src={dummyPhoto} alt="" />
              </div>
              <div className="flex justify-center">
                {/* <button className="py-1 px-8 mt-8 bg-pink-500 text-white text-center rounded-md hover:opacity-80 text-xs">
                    Select from computer
                  </button> */}
                {/* @todo 初期値として画像のプレビューを投稿データから引っ張ってきて指定する。 */}
                <input
                  type="file"
                  accept="image/*"
                  className="text-xs"
                  onChange={handleChangeFile}
                />
              </div>
            </div>
          </div>
        </div>
        {/* キャプション入力 */}
        <div className="h-96 w-full bg-white border border-gray-200 rounded-md">
          <div>
            <div className="flex items-center p-2">
              <AccountCircleIcon style={{ fontSize: 40 }} />
              <p className="ml-2 font-light">
                {targetPost?.user.username && targetPost?.user.username}
              </p>
            </div>
            <div className="flex h-4/5">
              <div className="w-1/2 font-light text-xs text-gray-400 h-full m-2">
                {/* @todo キャプションの初期値を投稿データから引っ張ってきて指定する。 */}
                <Textarea
                  value={caption}
                  onChange={(e) => handleChangeCaption(e)}
                  placeholder="Write a caption..."
                  className="w-full h-full text-black p-1"
                  colorScheme="pink"
                  variant="filled"
                  defaultValue={targetPost?.post.caption}
                  size="lg"
                />
              </div>
              <div className="w-1/2 m-2">
                {/* @todo 場所の初期値を投稿データから引っ張ってきて指定する。 */}
                <Input
                  placeholder="Add location"
                  size="xs"
                  variant="unstyled"
                  className="font-light text-xs text-gray-500 my-2 py-1 pl-1 w-full"
                  value={location}
                  defaultValue={targetPost?.post.location}
                  onChange={(e) => handleChangeLocation(e)}
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
                          Only ypu will see the total number of likes and views
                          on this post. You can change this later by going to
                          the ...menu at the top og the post. To hide like
                          counts on other people's posts, go to your account
                          settings
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
        </div>
      </div>
      <div className="w-11/12 m-auto flex justify-end">
        <PrimaryButton onClick={onClickEdit} disabled={!file}>
          <div className="h-8 w-32 text-sm flex items-center justify-center hover:cursor-pointer">
            <p className="text-white ">edit</p>
          </div>
        </PrimaryButton>
      </div>
    </Layout>
  );
};
