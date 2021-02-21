import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./blogdetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8080/blogs/" + id
  );
  const history = useHistory();
  const handleClick = (e) => {
    fetch("http://localhost:8080/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <i>written by {blog.author}</i>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
