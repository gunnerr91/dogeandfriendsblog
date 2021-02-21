import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./blogdetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8080/blogs/" + id
  );
  return (
    <div className="blog-details">
      {isPending && <div>loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <i>written by {blog.author}</i>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
