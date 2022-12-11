import React from 'react'
import { useContext } from 'react';
import { blogPostContext } from '../BlogPost/blogPost';


export default function ShowComment({ commentText, commentID }) {
  const { deleteComment } = useContext(blogPostContext);
  return (
    <div>
      <p>{commentText}</p>
      <button onClick={() => deleteComment(commentID)}>delete</button>
      <button>edit</button>
    </div>
  );
}
