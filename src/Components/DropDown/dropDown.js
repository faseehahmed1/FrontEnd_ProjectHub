import React from "react";

export default function DropDown({ POST }) {

  return (
    <div>
      <form>
        <select>
          <option value="" selected hidden>
            Topic
          </option>
          {POST.map((current) => {
            return <option placeholder="heyy">{current.post_topic}</option>;
          })}
        </select>
        <select>
          <option value="" selected hidden>
            Week
          </option>
          {POST.map((current) => {
            return <option>{current.post_week}</option>;
          })}
        </select>
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}


