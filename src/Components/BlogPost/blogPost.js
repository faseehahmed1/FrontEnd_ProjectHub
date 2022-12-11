import ShowPostRenderShowCommentCommentFrom from "../ShowPostRenderShowCommentCommentFrom/ShowPostRenderShowCommentCommentFrom";
import { createContext } from "react";
import { useState } from "react";

export const blogPostContext = createContext(null);

const COMMENT = [
  { id: 1, user_id: 1, post_id: 1, comment_text: "This is comment on Post 1" },
  {
    id: 4,
    user_id: 1,
    post_id: 1,
    comment_text: "This is comment on Post 1 x2",
  },
  {
    id: 4,
    user_id: 1,
    post_id: 1,
    comment_text: "This is comment on Post 1 x2",
  },
  { id: 2, user_id: 1, post_id: 2, comment_text: "This is comment on Post 2" },
  { id: 3, user_id: 1, post_id: 3, comment_text: "This is comment on Post 3" },
];

let i = 6;

export default function BlogPost() {
  const [comment, setComment] = useState(COMMENT);
  console.table(comment);

  function createNewComment(text, id) {
    const newCommnetObj = [
      {
        id: i,
        user_id: 1,
        post_id: id,
        comment_text: text,
      },
    ];
    setComment([...comment, ...newCommnetObj]);
  }

  function deleteComment(id) {
    const index = comment
      .map((currentComment) => currentComment.id)
      .indexOf(id);
    setComment([...comment.slice(0, index), ...comment.slice(index+1)]);
  }

  return (
    <div>
      <blogPostContext.Provider
        value={{ comment, createNewComment, deleteComment }}
      >
        <ShowPostRenderShowCommentCommentFrom />
      </blogPostContext.Provider>
    </div>
  );
}
