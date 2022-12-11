import React from "react";
import { useContext } from "react";
import { blogPostContext } from "../BlogPost/blogPost";
import { useState } from "react";

export default function CommentForm({postIdForComment}) {
  const { createNewComment } = useContext(blogPostContext);
  const [inputComment, setInputComment] = useState("");
  
  function handleNewComment() {
    createNewComment(inputComment, postIdForComment);
    setInputComment("");
  }

  return (
    <div>
      <textarea
        value={inputComment}
        style={{ resize: "none" }}
        rows="2"
        cols="50"
        placeholder="Type comment..."
        onChange={(e) => {
          setInputComment(e.target.value);
        }}
      ></textarea>
      <button onClick={handleNewComment}>Send</button>
    </div>
  );
}
