import React from "react";

export default function Blogs(props) {
  const { blogs, handleDelete } = props;
  return (
    <>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div className="blogs-content" key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
              <p>{blog.author}</p>
              <button className="btn" onClick={() => handleDelete(blog.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
