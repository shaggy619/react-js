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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iure
            fugit nemo assumenda odit natus ipsum saepe voluptas explicabo.
            Laboriosam alias tenetur at adipisci atque velit voluptatibus
            impedit facere error.
          </p>
        </div>
      )}
    </div>
  );
}
