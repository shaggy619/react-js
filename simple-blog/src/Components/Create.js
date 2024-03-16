import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [option, setOption] = useState("Samyam");

  const handleAuthorChange = (e) => {
    setOption(e.target.value);
  };

  const [body, setBody] = useState("");

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  return (
    <div className="container create">
      <h2>Create a new blog.</h2>
      <form>
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
        <button className="btn btn-primary">Create</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{option}</p>
      </form>
    </div>
  );
}
