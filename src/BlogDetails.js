import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h3>new much blog</h3>
      <p>id of this blog is: {id}</p>
    </div>
  );
};

export default BlogDetails;
