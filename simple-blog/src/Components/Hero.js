import React, { useState } from "react";
import Blogs from "./Blogs";

export default function Hero() {
  const [blogs, setBlocks] = useState([
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
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return id !== blog.id;
    });
    setBlocks(newBlogs);
  };

  return (
    <>
      <Blogs blogs={blogs} handleDelete={handleDelete} />
    </>
  );
}
