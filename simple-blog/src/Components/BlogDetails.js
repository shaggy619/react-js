import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="container">
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <div className="text-center warning">{error}</div>}
      {blog && (
        <div className="container">
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
}
