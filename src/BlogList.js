import "./bloglist.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <h4>{blog.title}</h4>
          <i>{blog.author}</i>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
