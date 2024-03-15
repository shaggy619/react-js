import React from "react";
import { Link } from "react-router-dom";

export default function Blogs(props) {
  const { blogs } = props;
  return (
    <>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <Link to={`/blogs/${blog.id}`}>
              <div className="blogs-content" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
