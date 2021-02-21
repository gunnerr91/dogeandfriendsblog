import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isPending && <div>loading...</div>}
      {blogs && (
        <>
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "doge")}
            title="doge blogs"
          />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "tartel")}
            title="tartel blogs"
          />
        </>
      )}
    </div>
  );
};

export default Home;
