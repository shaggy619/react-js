import React from "react";
import Blogs from "./Blogs";

export default function Hero() {
  const blogs = [
    {
      title: "My New Website",
      body: "Lorem Epsum....",
      author: "Eminem",
      id: 1,
    },
    {
      title: "My Second Website",
      body: "Lorem Epsum....",
      author: "Drake",
      id: 2,
    },
    {
      title: "My Third Website",
      body: "Lorem Epsum....",
      author: "Kendrick",
      id: 3,
    },
  ];
  return (
    <>
      <div className="blogs">
        {blogs.map((blog) => {
          return <Blogs {...blog} key={blog.id} />;
        })}
      </div>
    </>
  );
}
