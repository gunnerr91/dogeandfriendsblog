import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "doge")}
        title="doge blogs"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "tartel")}
        title="tartle blogs"
      />
    </div>
  );
};

export default Home;
