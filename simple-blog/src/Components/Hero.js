import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";

export default function Hero() {
  const [blogs, setBlocks] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => {
  //     return id !== blog.id;
  //   });
  //   setBlocks(newBlogs);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          if (!res.ok) {
            throw Error("Failed to fetch resource!");
          }
          return res.json();
        })
        .then((data) => {
          setBlocks(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="main-content">
        {" "}
        {error && <div className="text-center warning">{error}</div>}
        {isLoading && <div className="text-center">Loading...</div>}
        {blogs && <Blogs blogs={blogs} />}
      </div>
    </>
  );
}
