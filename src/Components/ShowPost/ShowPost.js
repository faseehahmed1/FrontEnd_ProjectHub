import React from 'react'
import { useContext, useState } from "react";

export default function ShowPost({ deletePost, currentPostItem, editPost, postIdToCheckComments }) {
    const [canEdit, setCanEdit] = useState(false);
    const [editableClass, setEditableClass] = useState(
    "showComment_main_not-editable"
  );
   const [postDurationBeforeEdit, setPostDurationAfterEdit] = useState("");
  const [postLanguageBeforeEdit, setPostLanguageAfterEdit] = useState("");
 const [postTextBeforeEdit, setPostTextAfterEdit] =
    useState('');
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
      <div key={currentPostItem.id} className="showpost_main_postandcomment_map">
        <div className="showpost_main_postandcomment_map_header">
          <div className="showpost_main_postandcomment_map_duration">
            <p>
              Duration:{" "}
              <span
                contentEditable={canEdit}
                className={editableClass}
                onInput={(e) =>
                  setPostDurationAfterEdit(e.currentTarget.textContent)
                }
              >
                {currentPostItem.post_duration}
              </span>{" "}
              Weeks
            </p>
          </div>
          <div className="showpost_main_postandcomment_map_topic">
            <strong>
              <p
                contentEditable={canEdit}
                className={editableClass}
                onInput={(e) =>
                  setPostLanguageAfterEdit(e.currentTarget.textContent)
                }
              >
                {currentPostItem.post_language}
              </p>
            </strong>
          </div>
          <div className="showpost_main_postandcomment_map_buttons">
            <button
              onClick={() => {
                handleEdit(
                  postIdToCheckComments,
                  currentPostItem.post_duration,
                  currentPostItem.post_language,
                  currentPostItem.post_text
                );
              }}
              className={eidtButtonIcon}
            ></button>
            <button
              onClick={() => {
                deletePost(currentPostItem.id);
              }}
            ></button>
          </div>
        </div>
        <div className="showpost_main_postandcomment_map_postTextContent">
          <p
            contentEditable={canEdit}
            className={editableClass}
            onInput={(e) => setPostTextAfterEdit(e.currentTarget.textContent)}
          >
            {currentPostItem.post_text}
          </p>
        </div>
      </div>
  );
}
