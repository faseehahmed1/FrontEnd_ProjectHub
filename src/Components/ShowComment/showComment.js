import React from 'react'
import { useContext } from 'react';
import { blogPostContext } from '../BlogPost/blogPost';
import './showComment.css'

export default function ShowComment({ commentText, commentID }) {
  const { deleteComment } = useContext(blogPostContext);
  return (
    <div className="showComment_main">
      <div className="showComment_main_commentText">
        <p>{commentText}</p>
      </div>
      <div className="showComment_main_buttons">
        <button></button>
        <button onClick={() => deleteComment(commentID)}></button>
      </div>
    </div>
  );
}
