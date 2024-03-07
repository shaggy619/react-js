import React from "react";

export default function Blogs(props) {
  const { blogs } = props;
  return (
    <>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div className="blogs-content" key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
              <p>{blog.author}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
