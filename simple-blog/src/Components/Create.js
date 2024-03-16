import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [author, setAuthor] = useState("Samyam");
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const [body, setBody] = useState("");
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const [isPending, setIsPending] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setTimeout(() => {
        setIsPending(false);
      }, 1000);
    });
  };

  return (
    <div className="container create">
      <h2>Create a new blog.</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleTitleChange}
        />
        <label htmlFor="body"> Blog Body:</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="5"
          onChange={handleBodyChange}
        ></textarea>
        <label htmlFor="author">Choose Author</label>
        <select name="author" id="author" onChange={handleAuthorChange}>
          <option value="Samyam">Samyam</option>
          <option value="Kritan">Kritan</option>
        </select>
        {!isPending && <button className="btn btn-primary">Create</button>}
        {isPending && (
          <button className="btn btn-primary" disabled>
            Creating...{" "}
          </button>
        )}
      </form>
    </div>
  );
}
