import "./App.css";
import NavBar from "../NavBar/navbar";
import PostForm from "../PostForm/postForm";
import DropDown from "../DropDown/dropDown";
import BlogPost from "../BlogPost/blogPost";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

const POST = [
  {
    id: 1,
    user_id: 1,
    post_text: "Sample Post Text 1",
    post_topic: "Topic 1",
    post_week: 3,
  },
  {
    id: 2,
    user_id: 1,
    post_text: "Sample Post Text 2",
    post_topic: "Topic 4",
    post_week: 4,
  },
  {
    id: 3,
    user_id: 1,
    post_text: "Sample Post Text 3",
    post_topic: "Topic 5",
    post_week: 5,
  },
  {
    id: 4,
    user_id: 1,
    post_text: "Sample Post Text 4",
    post_topic: "Topic 4",
    post_week: 7,
  },
  {
    id: 5,
    user_id: 1,
    post_text: "Sample Post Text 5",
    post_topic: "Topic 5",
    post_week: 9,
  },
];

let i = 6;

function App() {
  const [post, setPost] = useState(POST);

  console.table(post);

  function createNewPost(postContentInput, TopicInput, weekInput) {
    i++;
    const newPostObj = [
      {
        id: i,
        user_id: 1,
        post_text: postContentInput,
        post_topic: TopicInput,
        post_week: +weekInput,
      },
    ];
    setPost([...post, ...newPostObj]);
    console.table(post);
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ post, createNewPost }}>
        <NavBar />
        <h1 style={{ marginTop: "70px", color: "white" }}>
          What project are you working on?
        </h1>
        <PostForm />
        <DropDown post={post} />
        <h1 style={{ marginTop: "15px", color: "white" }}>
          Projects
        </h1>

        <BlogPost />
      </AppContext.Provider>
    </div>
  );
}

export default App;
