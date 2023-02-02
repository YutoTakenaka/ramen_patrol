import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TPost } from "../../types/types";
import { Layout } from "../organisms/Layout";
import PostIndex from "../organisms/PostIndex";

export default function TopPage() {
  const [postData, setPostData] = useState<TPost[]>([]);
  useEffect(() => {
    const getPostsAll = async () => {
      const response = await api.get("/get_posts_all");
      setPostData(response.data);
      return response;
    };
    getPostsAll();
  }, []);
  console.log(postData);

  return (
    <Layout>
      {postData.map((post, i) => (
        <div key={i}>
          <PostIndex
            image={post.image}
            caption={post.caption}
            location={post.location}
            userId={post.user_id}
            postId={post.post_id}
          />
        </div>
      ))}
    </Layout>
  );
}
