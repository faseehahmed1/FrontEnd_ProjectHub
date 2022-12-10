import React from "react";
import ShowComment from "../ShowComment/showComment.js";
import { x } from "../App/App.js";
import { useContext } from "react";

export default function ShowPost() {
  const { POST, COMMENT } = useContext(x);
  console.table(POST);
  console.table(COMMENT);
  /*
1. After the final p tag of each post:
    - Map the comments array if there is a mathing post_id then return the ShowComment component taking in the comment_text as a prop
*/

  return (
    <div>
      {POST.map((currentPostItem) => {
        let x = currentPostItem.id;
        return (
          <>
            <p>{currentPostItem.post_week}</p>
            <p>{currentPostItem.post_topic}</p>
            <p>{currentPostItem.post_text}</p>
            {COMMENT.map((currentCommentItem) => {
              if (currentCommentItem.post_id === x) {
                return (
                  <ShowComment commentText={currentCommentItem.comment_text} />
                );
              } else {
                return null;
              }
            })}
          </>
        );
      })}
    </div>
  );
}
