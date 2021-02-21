import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>loading...</div>}
      {blogs && (
        <>
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "doge")}
            title="doge blogs"
          />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "tartel")}
            title="tartle blogs"
          />
        </>
      )}
    </div>
  );
};

export default Home;
