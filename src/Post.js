import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  let post = props.post.data;
  console.log(post.thumbnail);
  return (
    <div className="post">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.onLinkClick}
      >
        {post.title}
      </a>
      <Link to={`/authors/${post.author}`}>{post.author}</Link>
      <p>{post.score} upvotes</p>
      {post.thumbnail !== "self" && typeof post.thumbnail !== "undefined" ? (
        <img src={post.thumbnail} alt="unavailable" />
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
}
