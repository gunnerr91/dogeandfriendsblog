import { useState } from "react";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("capybara");
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => setIsPending(false));
  };

  return (
    <div className="create">
      <h3>my new blog</h3>
      <form onSubmit={handleSubmit}>
        <label>Here title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Here body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Very author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="doge">Doge</option>
          <option value="tartel">Tartel</option>
          <option value="capybara">Capybara</option>
        </select>
        {isPending ? (
          <button disabled>Adding blog........</button>
        ) : (
          <button>Add blog</button>
        )}
      </form>
    </div>
  );
};

export default Create;
