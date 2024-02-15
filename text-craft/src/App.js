// import logo from "./logo.png";
import "./App.css";
import Form from "./components/Form";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextCraft" />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
