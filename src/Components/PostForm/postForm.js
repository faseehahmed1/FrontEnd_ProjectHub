import React from "react";
import { useState } from "react";
import { AppContext } from "../App/App.js";
import { useContext } from "react";
import "./postFrom.css";

export default function PostForm() {
  const { createNewPost } = useContext(AppContext);

  const [weekInput, setWeekInput] = useState("");
  const [TopicInput, setTopicInput] = useState("");
  const [postContentInput, setpostContentInput] = useState("");

  function handleNewPost() {
    createNewPost(postContentInput, TopicInput, weekInput);
    setWeekInput("");
    setTopicInput("");
    setpostContentInput("");
  }

  return (
    <div class="showpost">
      <div class="showpost_input_langduration">
        <input
          value={weekInput}
          type="number"
          min="1"
          placeholder="Week no."
          onChange={(e) => setWeekInput(e.target.value)}
        ></input>
        <input
          value={TopicInput}
          type="text"
          placeholder="Topic"
          onChange={(e) => setTopicInput(e.target.value)}
        ></input>
      </div>
      <div class="showpost_input_textarea">
        <textarea
          value={postContentInput}
          rows="12"
          cols="55"
          placeholder="Type post content..."
          onChange={(e) => setpostContentInput(e.target.value)}
        ></textarea>
      </div>
      <div class="showpost_input_button">
        <button onClick={handleNewPost}>Submit</button>
      </div>
      <div class="showpost_input_solidLine"></div>
    </div>
  );
}
