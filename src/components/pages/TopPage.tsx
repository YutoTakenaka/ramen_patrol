import { Layout } from "../organisms/Layout";
import PostIndex from "../organisms/PostIndex";

export default function TopPage() {
  return (
    <>
      <Layout>
        <PostIndex />
        <PostIndex />
        <PostIndex />
      </Layout>
    </>
  );
}
