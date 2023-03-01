import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TResponseGetPostsAll } from "../../types/types";
import { Layout } from "../organisms/Layout";
import PostIndex from "../organisms/PostIndex";

export default function TopPage() {
  const [postData, setPostData] = useState<TResponseGetPostsAll[]>([]);
  useEffect(() => {
    const getPostsAll = async () => {
      const response = await api.get("/get_posts_all");
      setPostData(response.data);
      return response;
    };
    getPostsAll();
  }, []);

  return (
    <Layout>
      {postData.map((item, i) => (
        <div key={i}>
          <PostIndex
            image={item.post.image}
            caption={item.post.caption}
            location={item.post.location}
            username={item.user.username}
            userId={item.post.user_id}
            postId={item.post.post_id}
          />
        </div>
      ))}
    </Layout>
  );
}
