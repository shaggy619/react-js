import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();

  const nav = useNavigate();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      setTimeout(() => {
        nav("/");
      }, 100);
    });
  };

  return (
    <div className="container">
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <div className="text-center warning">{error}</div>}
      {blog && (
        <div className="container">
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.body}</p>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
