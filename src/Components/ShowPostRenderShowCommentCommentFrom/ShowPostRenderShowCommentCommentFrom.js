import React from "react";
import ShowComment from "../ShowComment/showComment.js";
import { AppContext } from "../App/App.js";
import { useContext } from "react";
import CommentForm from "../CommentForm/commentForm.js";
import { blogPostContext } from "../BlogPost/blogPost.js";
import "./ShowPost.css";
import ShowPost from '../ShowPost/ShowPost.js'

export default function ShowPostRenderShowCommentCommentFrom() {
  const { post, deletePost, editPost } = useContext(AppContext);
  const { comment } = useContext(blogPostContext);

  return (
    <div>
      {post.map((currentPostItem) => {
        let postIdToCheckComments = currentPostItem.id;
        return (
          <>
            <div key={currentPostItem.id} className="showpost_main">
              <div className="showpost_main_postandcomment_map">
                <ShowPost
                  deletePost={deletePost}
                  postIdToCheckComments={postIdToCheckComments}
                  currentPostItem={currentPostItem}
                  editPost={editPost}
                />
                {comment.map((currentCommentItem) => {
                  if (currentCommentItem.post_id === postIdToCheckComments) {
                    return (
                      <ShowComment
                        commentText={currentCommentItem.comment_text}
                        commentID={currentCommentItem.id}
                        key={currentCommentItem.id}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
                <CommentForm postIdForComment={currentPostItem.id} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
