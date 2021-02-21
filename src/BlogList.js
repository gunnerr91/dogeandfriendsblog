import { Link } from "react-router-dom";
import "./bloglist.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog, index) => (
        <Link to={`/blogs/${blog.id}`} key={index}>
          <div className="blog-preview">
            <h4>{blog.title}</h4>
            <i>{blog.author}</i>
            <p>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
