import React from "react";
import './dropDown.css'

export default function DropDown({ post }) {

  return (
    <div className="dropDown">
      <form>
        <div className="dropDown_buttons">
          <select>
            <option value="" selected hidden>
              Topic
            </option>
            {post.map((current) => {
              return <option placeholder="heyy">{current.post_topic}</option>;
            })}
          </select>
          <select>
            <option value="" selected hidden>
              Week
            </option>
            {post.map((current) => {
              return <option>{current.post_week}</option>;
            })}
          </select>
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}


