import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "doge is sad", body: "lorem ipsum...", author: "doge", id: 1 },
    { title: "doge is alone!", body: "lorem ipsum...", author: "doge", id: 2 },
    {
      title: "doge and friends party",
      body: "lorem ipsum...",
      author: "doge",
      id: 3
    }
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"doge blogs"} />
    </div>
  );
};

export default Home;
