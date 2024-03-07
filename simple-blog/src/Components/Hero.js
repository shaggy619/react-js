import React, { useEffect, useState } from "react";
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

  const [name, setName] = useState("Samyam");

  const changeName = () => {
    setName("Kritan");
  };

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return id !== blog.id;
    });
    setBlocks(newBlogs);
  };

  useEffect(() => {
    console.log("The dom was re-rendered!");
  }, [name]);

  return (
    <>
      <Blogs blogs={blogs} handleDelete={handleDelete} />
      <button onClick={changeName}>Change Name</button>
      <p>{name}</p>
    </>
  );
}
