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

export type TResponseGetPostsAll = {
  post: {
    caption: string;
    // @todo imageの型をファイル型に修正する
    image: string;
    location: string;
    post_id: number;
    created_at: string;
    updated_at: string;
    user_id: number;
  };
  user: {
    user_id: number;
    username: string;
    created_at: string;
    updated_at: string;
    comments: [];
    posts: [];
  };
};

export type TUser = {
  user_id?: number;
  username?: string;
  access_token?: string;
};

export type TAuthUser = TUser | null;

export type TResponseGetComment = {
  comment: {
    comment: string;
    post_id: number;
    user_id: number;
    comment_id: number;
    created_at: string;
    updated_at: string;
  };
  user: {
    user_id: number;
    username: string;
    created_at: string;
    updated_at: string;
    comments: [];
    posts: [];
  };
};
