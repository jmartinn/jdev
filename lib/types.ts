import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets: any[];
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export type Tweet = {
  author: {
    id: string;
    name: string;
    profile_image_url: string;
    protected: boolean;
    url: string;
    username: string;
    verified: boolean;
  };
  author_id: string;
  created_at: string;
  edit_history_tweet_ids: number[];
  id: string;
  in_reply_to_user_id?: string;
  media?: any[];
  public_metrics: {
    impression_count: number;
    like_count: number;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
  };
  text: string;
  referenced_tweets?: {
    author: {
      id: string;
      name: string;
      profile_image_url: string;
      protected: boolean;
      url: string;
      username: string;
      verified: boolean;
    };
    author_id: string;
    created_at: string;
    edit_history_tweet_ids: number[];
    id: string;
    in_reply_to_user_id?: string;
    media?: any[];
    public_metrics: {
      impression_count: number;
      like_count: number;
      quote_count: number;
      reply_count: number;
      retweet_count: number;
    };
    type: string;
    text: string;
  }[];
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type GitHub = {
  stars: number;
};
