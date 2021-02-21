import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8080/blogs"
  );

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
