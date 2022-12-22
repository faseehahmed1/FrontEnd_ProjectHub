import React from "react";
import './dropDown.css'

export default function DropDown({ post, setPost }) {
  function filterLanguage(e) {
    console.log(e.target.value);
    let result = post.filter((currentItem) => { return currentItem.post_language === e.target.value; })
    setPost(result);
  }

  function filterDruation(e) {
     console.log(typeof e.target.value);
   let result = post.filter((currentItem) => {
     return (currentItem.post_duration) === +e.target.value;
   });
   setPost(result);
  }

  async function handleRest() {
    console.log('I was clicked')
    const response = await fetch("http://localhost:3001/api/posts");
    const data = await response.json();
    setPost(data.payload);
  }

  return (
    <div className="dropDown">
      <form>
        <div className="dropDown_buttons">
          <select
            onChange={(e) => {
              filterLanguage(e);
            }}
          >
            <option value="" hidden>
              Language
            </option>
            {post.map((current) => {
              return <option key={current.id}>{current.post_language}</option>;
            })}
          </select>
          <select
            onChange={(e) => {
              filterDruation(e);
            }}
          >
            <option value="" hidden>
              Duration
            </option>
            {post.map((current) => {
              return <option key={current.id}>{current.post_duration}</option>;
            })}
          </select>
          <input type="reset" value="Reset" onClick={handleRest}/>
        </div>
      </form>
    </div>
  );
}


