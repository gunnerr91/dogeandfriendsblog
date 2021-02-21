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
            <i>much write by {blog.author}</i>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
