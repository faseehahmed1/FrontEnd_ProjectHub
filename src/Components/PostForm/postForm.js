import React from "react";
import { useState } from "react";
import { AppContext } from "../App/App.js";
import { useContext } from "react";
import "./postFrom.css";

export default function PostForm() {
  const { createNewPost } = useContext(AppContext);

  const [weekInput, setWeekInput] = useState("");
  const [LanguageInput, setLangaugeInput] = useState("");
  const [postContentInput, setpostContentInput] = useState("");

  //Call function to create a new post
  function handleNewPost() {
    createNewPost(postContentInput, LanguageInput, weekInput);
    setWeekInput("");
    setLangaugeInput("");
    setpostContentInput("");
  }

  return (
    <div className="showpost">
      <div className="showpost_input_langduration">
        <input
          value={weekInput}
          type="number"
          min="1"
          placeholder="Duration (weeks)"
          onChange={(e) => setWeekInput(e.target.value)}
        ></input>
        <input
          value={LanguageInput}
          type="text"
          placeholder="Language"
          onChange={(e) => setLangaugeInput(e.target.value)}
        ></input>
      </div>
      <div className="showpost_input_textarea">
        <textarea
          value={postContentInput}
          rows="12"
          cols="55"
          placeholder="Type project idea here..."
          onChange={(e) => setpostContentInput(e.target.value)}
        ></textarea>
      </div>
      <div className="showpost_input_button">
        <button onClick={handleNewPost}>Submit</button>
      </div>
      <div className="showpost_input_solidLine"></div>
    </div>
  );
}
