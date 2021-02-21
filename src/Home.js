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
    },
    {
      title: "too lazy jaaaa!",
      body: "lorem ipsum...",
      author: "tartel",
      id: 4
    }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "doge")}
        title="doge blogs"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "tartel")}
        title="tartle blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
