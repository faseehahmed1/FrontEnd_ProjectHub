import React from "react";
import { useContext, useState } from "react";
import { blogPostContext } from "../BlogPost/blogPost";
import "./showComment.css";

export default function ShowComment({ commentText, commentID }) {
  const { deleteComment, editComment } = useContext(blogPostContext);
  const [canEdit, setCanEdit] = useState(false);
  const [editableClass, setEditableClass] = useState(
    "showComment_main_not-editable"
  );
  const [eidtButtonIcon, setEditButtonIcon] = useState(
    "showComment_main_editButton"
  );
  const [commentTextBeforeEdit, setCommentTextAfterEdit] =
    useState(commentText);
  
  function handleEdit() {
    if (canEdit === true) {
      editComment(commentTextBeforeEdit, commentID);
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
    <div className="showComment_main">
      <div className="showComment_main_commentText">
        <p
          contentEditable={canEdit}
          className={editableClass}
          onInput={(e) => setCommentTextAfterEdit(e.currentTarget.textContent)}
        >
          {commentText}
        </p>
      </div>
      <div className="showComment_main_buttons">
        <button
          onClick={handleEdit}
          className={eidtButtonIcon}
        ></button>
        <button onClick={() => deleteComment(commentID)}></button>
      </div>
    </div>
  );
}
