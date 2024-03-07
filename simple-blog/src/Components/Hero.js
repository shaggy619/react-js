import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";

export default function Hero() {
  const [blogs, setBlocks] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => {
  //     return id !== blog.id;
  //   });
  //   setBlocks(newBlogs);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlocks(data);
      });
  }, []);

  return <>{blogs && <Blogs blogs={blogs} />}</>;
}
