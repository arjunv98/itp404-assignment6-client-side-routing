import React from "react";
import Post from "./Post";

export default function PostList(props) {
  return props.posts.map(post => {
    return <Post post={post} key={post.data.id} />;
  });
}
