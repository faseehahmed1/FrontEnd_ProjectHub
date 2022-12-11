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
    post_text:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",
    post_topic: "Python",
    post_week: 3,
  },
  {
    id: 2,
    user_id: 1,
    post_text:
      " Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.",
    post_topic: "Vanilla JS",
    post_week: 4,
  },
  {
    id: 3,
    user_id: 1,
    post_text:
      "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes",
    post_topic: "C++",
    post_week: 5,
  },
  {
    id: 4,
    user_id: 1,
    post_text:
      "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group.",
    post_topic: "PHP",
    post_week: 7,
  },
  {
    id: 5,
    user_id: 1,
    post_text:
      "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types.",
    post_topic: "Ruby",
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
