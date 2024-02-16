import React from "react";
// import logo from "../logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMoonVisible, setIsMoonVisible] = useState(true);

  //Function to switch between dark mode and light mode
  const handleChangeMode = () => {
    let textBox = document.getElementById("textArea");
    let clipboard = document.querySelector(".uil-clipboard-alt");
    setIsMoonVisible(!isMoonVisible);
    // Toggle dark mode
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      if (textBox) {
        textBox.classList.toggle("dark-mode", !isDarkMode);
      }

      if (clipboard) {
        clipboard.classList.toggle("dark-mode", !isDarkMode);
      }
    } else {
      document.body.classList.add("dark-mode");
      if (textBox) {
        textBox.classList.toggle("dark-mode", !isDarkMode);
      }

      if (clipboard) {
        clipboard.classList.toggle("dark-mode", !isDarkMode);
      }
    }
  };
  return (
    <>
      <nav>
        <div className="title">
          <h2>
            <Link to="/">{props.title}</Link>
          </h2>
        </div>
        <div>
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul className="mobile-menu">
            <li>
              <i className="uil uil-list-ui-alt"></i>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mode-icons" onClick={handleChangeMode}>
        {isMoonVisible ? (
          <i className="uil uil-moon" style={{ display: "flex" }}></i>
        ) : (
          <i className="uil uil-moon" style={{ display: "none" }}></i>
        )}
        {isMoonVisible ? (
          <i className="uil uil-sun" style={{ display: "none" }}></i>
        ) : (
          <i className="uil uil-sun" style={{ display: "flex" }}></i>
        )}
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Here",
};
