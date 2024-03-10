import Blogs from "./Blogs";
import useFetch from "./useFetch";

export default function Hero() {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => {
  //     return id !== blog.id;
  //   });
  //   setBlocks(newBlogs);
  // };

  return (
    <>
      <div className="main-content">
        {" "}
        {error && <div className="text-center warning">{error}</div>}
        {isLoading && <div className="text-center">Loading...</div>}
        {data && <Blogs blogs={data} />}
      </div>
    </>
  );
}
