import React from "react";

export default function Blogs(props) {
  const { title, body, author } = props;
  return (
    <>
      <div className="blogs-content">
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{author}</p>
      </div>
    </>
  );
}
