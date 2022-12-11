import React from "react";
import ShowComment from "../ShowComment/showComment.js";
import { AppContext } from "../App/App.js";
import { useContext } from "react";
import CommentForm from "../CommentForm/commentForm.js";
import { blogPostContext } from "../BlogPost/blogPost.js";

export default function ShowPostRenderShowCommentCommentFrom() {
  const { post } = useContext(AppContext);
  const { comment } = useContext(blogPostContext);
  return (
    <div>
      {post.map((currentPostItem) => {
        let postIdToCheckComments = currentPostItem.id;
        return (
          <>
            <p>{currentPostItem.post_week}</p>
            <p>{currentPostItem.post_topic}</p>
            <p>{currentPostItem.post_text}</p>
            {comment.map((currentCommentItem) => {
              if (currentCommentItem.post_id === postIdToCheckComments) {
                return (
                  <ShowComment
                    commentText={currentCommentItem.comment_text}
                    commentID={currentCommentItem.id}
                  />
                );
              } else {
                return null;
              }
            })}
            <CommentForm postIdForComment={currentPostItem.id} />
          </>
        );
      })}
    </div>
  );
}
