const { Link } = require("react-router-dom");

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>wow</h2>
      <p>Very sad, much wrong, super page</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
