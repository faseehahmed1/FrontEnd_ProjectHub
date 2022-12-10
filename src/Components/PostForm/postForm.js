import React from 'react'

export default function PostForm() {
  return (
    <div>
      <input placeholder="Week no."></input>
      <input placeholder="Topic"></input>
      <textarea
        style = {{ resize:"none"}}
        rows="12"
        cols="55"
        placeholder="Post Content"
      ></textarea>
      <button>Submit</button>
    </div>
  );
}
