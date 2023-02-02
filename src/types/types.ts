// 投稿の型
export type TPost = {
  caption: string;
  // @todo imageの型をファイル型に修正する
  image: string;
  location: string;
  post_id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
};
