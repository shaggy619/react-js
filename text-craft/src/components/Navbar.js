import React from "react";
// import logo from "../logo.png";
import PropTypes from "prop-types";

export default function Navbar(props) {
  // const [menuItem, changeMenu] = useState(true);

  // const displayMenu = () => {
  //   let mobileMenu = document.querySelector(".mobile-menu");
  //   mobileMenu.style = "none";
  //   let menuItems = document.querySelector(".menu-items");
  // };
  return (
    <nav>
      <div className="title">
        <h2>
          <a href="/">{props.title}</a>
        </h2>
      </div>
      <div>
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <ul className="mobile-menu">
          <li>
            <i className="uil uil-list-ui-alt"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Here",
};
