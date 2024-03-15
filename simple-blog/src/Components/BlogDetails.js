import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>Blog Details - {id} </h2>
    </div>
  );
}
