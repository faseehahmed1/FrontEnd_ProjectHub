import React from "react";
import ShowComment from "../ShowComment/showComment.js";
import { AppContext } from "../App/App.js";
import { useContext, useState } from "react";
import CommentForm from "../CommentForm/commentForm.js";
import { blogPostContext } from "../BlogPost/blogPost.js";
import "./ShowPost.css";
import ShowPost from '../ShowPost/ShowPost.js'

export default function ShowPostRenderShowCommentCommentFrom() {
  const { post, deletePost, editPost } = useContext(AppContext);
  const { comment } = useContext(blogPostContext);
  const [canEdit, setCanEdit] = useState(false);
  const [postTextBeforeEdit, setPostTextAfterEdit] =
    useState('');
  const [postDurationBeforeEdit, setPostDurationAfterEdit] = useState("");
  const [postLanguageBeforeEdit, setPostLanguageAfterEdit] = useState("");
  const [editableClass, setEditableClass] = useState(
    "showComment_main_not-editable"
  );
  const [eidtButtonIcon, setEditButtonIcon] = useState(
    "showComment_main_editButton"
  );

  function handleEdit(
    postIdToCheckComments,
    post_duration,
    post_language,
    post_text
  ) {
    setPostDurationAfterEdit(post_duration);
    setPostLanguageAfterEdit(post_language);
    setPostTextAfterEdit(post_text);
    if (canEdit === true) {
      editPost(
        postTextBeforeEdit,
        postLanguageBeforeEdit,
        postDurationBeforeEdit,
        postIdToCheckComments
      );
      setCanEdit(!canEdit);
      setEditableClass("showComment_main_not-editable");
      setEditButtonIcon("showComment_main_editButton");
    } else {
      setCanEdit(!canEdit);
      setEditableClass("showComment_main_editable");
      setEditButtonIcon("showComment_main_saveButton");
    }
  }

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
