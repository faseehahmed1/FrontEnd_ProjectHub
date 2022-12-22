import ShowPostRenderShowCommentCommentFrom from "../ShowPostRenderShowCommentCommentFrom/ShowPostRenderShowCommentCommentFrom";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const blogPostContext = createContext(null);
const url = process.env.REACT_APP_BACKEND_URL;

export default function BlogPost() {
  const [comment, setComment] = useState([]);

  //GET all comments on mount
  useEffect(() => {
    async function getAllComments() {
      const response = await fetch(`${url}/api/comments`);
      const data = await response.json();
      setComment(data.payload);
    }
    getAllComments();
  }, []);

  //POST a comment
  async function createNewComment(text, id) {
    const newCommnetObj = {
      user_id: 1,
      post_id: +id,
      comment_text: text,
    };
    await fetch(`${url}/api/comments`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newCommnetObj),
    });
    const response = await fetch(`${url}/api/comments`);
    const data = await response.json();
    setComment(data.payload);
  }

  //DELETE a comment
  async function deleteComment(id) {
    await fetch(
      `${url}/api/comments/${id}`,
      {
        method: "DELETE",
      }
    );
    const response = await fetch(`${url}/api/comments`);
    const data = await response.json();
    setComment(data.payload);
  }

  //PATCH a comment
  async function editComment(comment_text, id) {
    const editCommnetObj = {
      comment_text: comment_text,
    };
    await fetch(
      `${url}/api/comments/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        mode: "cors",
        body: JSON.stringify(editCommnetObj),
      }
    );
    const response = await fetch(`${url}/api/comments`);
    const data = await response.json();
    setComment(data.payload);
  }
  return (
    <div>
      <blogPostContext.Provider
        value={{ comment, createNewComment, deleteComment, editComment }}
      >
        <ShowPostRenderShowCommentCommentFrom />
      </blogPostContext.Provider>
    </div>
  );
}
