import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />}></Route>
          <Route path="/create" exact element={<Create />}></Route>
          <Route path="/blogs" exact element={<Hero />}></Route>
          <Route path="/blogs/:id" exact element={<BlogDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
