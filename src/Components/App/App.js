import "./App.css";
import NavBar from "../NavBar/navbar";
import PostForm from "../PostForm/postForm";
import DropDown from "../DropDown/dropDown";
import BlogPost from "../BlogPost/blogPost";
import { createContext, useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export const AppContext = createContext(null);
const url = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [post, setPost] = useState([]);
  const [postForFilter, setPostForFiltler] = useState([]);
  const [filterOptionLanguage, setFilterOptionLanguage] = useState([])
 

  //GET all posts on mount
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        `${url}/api/posts`
      );
      const data = await response.json();
      setPost(data.payload);
      setFilterOptionLanguage(data.payload);
      setPostForFiltler(data.payload)
    }
    getPosts();
  }, []);

  //POST a new post
  async function createNewPost(postContentInput, LanguageInput, durationInput) {
    const newPostObj = 
      {
        user_id: 1,
        post_text: postContentInput,
        post_language: LanguageInput,
        post_duration: +durationInput,
      };
    console.log(newPostObj);
    await fetch(`${url}/api/posts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newPostObj),
    });
    const response = await fetch(`${url}/api/posts`);
    const data = await response.json();
    setPost(data.payload);
    setFilterOptionLanguage(data.payload);
    setPostForFiltler(data.payload)
  }

  //DELETE a post
  async function deletePost(id) {
    await fetch(`${url}/api/posts/${id}`, {
      method: "DELETE",
    });
    const response = await fetch(`${url}/api/posts`);
    const data = await response.json();
    setPost(data.payload);
    setFilterOptionLanguage(data.payload);
    setPostForFiltler(data.payload)
  }

  //PATCH a post 
  async function editPost(post_text, post_language, post_duration, id) {
    const editPostObj = {
      post_text: post_text,
      post_language: post_language,
      post_duration: +post_duration,
    };
    await fetch(`${url}/api/posts/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(editPostObj),
    });
    const response = await fetch(`${url}/api/posts`);
    const data = await response.json();
    setPost(data.payload);
    setFilterOptionLanguage(data.payload);
    setPostForFiltler(data.payload)
  }

  return (
    <div className="App">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <AppContext.Provider
        value={{ post, createNewPost, deletePost, editPost }}
      >
        <NavBar />
        <h1
          style={{ marginTop: "70px", color: "white" }}
          className="App_h1_hover-underline-animation"
        >
          What project are you working on?
        </h1>

        <PostForm />
        <DropDown
          setPost={setPost}
          filterOptionLanguage={filterOptionLanguage}
          postForFilter={postForFilter}
          setFilterOptionLanguage={setFilterOptionLanguage}
        />
        <h1
          style={{ marginTop: "15px", color: "white" }}
          className="App_h1_hover-underline-animation"
        >
          Projects
        </h1>

        <BlogPost />
      </AppContext.Provider>
    </div>
  );
}

export default App;
