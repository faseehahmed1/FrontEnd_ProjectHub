import React from "react";
import ShowComment from "../ShowComment/showComment.js";
import { AppContext } from "../App/App.js";
import { useContext } from "react";
import CommentForm from "../CommentForm/commentForm.js";
import { blogPostContext } from "../BlogPost/blogPost.js";
import "./ShowPost.css";

export default function ShowPostRenderShowCommentCommentFrom() {
  const { post } = useContext(AppContext);
  const { comment } = useContext(blogPostContext);
  return (
    <div>
      {post.map((currentPostItem) => {
        let postIdToCheckComments = currentPostItem.id;
        return (
          <div className="showpost_main">
            <div className="showpost_main_postandcomment_map">
              <div className="showpost_main_postandcomment_map_header">
                <div className="showpost_main_postandcomment_map_duration">
                  <p>Duration: {currentPostItem.post_week} Weeks</p>
                </div>
                <div className="showpost_main_postandcomment_map_topic">
                  <p>{currentPostItem.post_topic}</p>
                </div>
                <div className="showpost_main_postandcomment_map_buttons">
                  <button onClick={() => console.log("I was clicked")}></button>
                  <button></button>
                </div>
              </div>
              <div className="showpost_main_postandcomment_map_postTextContent">
                <p>{currentPostItem.post_text}</p>
              </div>
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
