import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="links">
      <h1>wow bar</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default NavBar;
