import "./App.css";
import NavBar from "../NavBar/navbar";
import PostForm from "../PostForm/postForm";
import DropDown from "../DropDown/dropDown";
import BlogPost from "../BlogPost/blogPost";
import { createContext } from "react";

export const x = createContext(null);

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
const COMMENT = [
  { id: 1, user_id: 1, post_id: 1, comment_text: "This is comment on Post 1" },
  { id: 2, user_id: 1, post_id: 2, comment_text: "This is comment on Post 2" },
  { id: 3, user_id: 1, post_id: 3, comment_text: "This is comment on Post 3" },
];

function App() {
  return (
    <div className="App">
      <x.Provider value={{ POST, COMMENT }}>
        <NavBar />
        <PostForm />
        <DropDown POST={POST} />
        <BlogPost />
      </x.Provider>
    </div>
  );
}

export default App;
