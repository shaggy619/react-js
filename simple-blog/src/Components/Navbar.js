import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container-fluid">
          <a
            className="navbar-brand logo"
            asp-area=""
            asp-controller="Home"
            asp-action="Index"
            href="/"
          >
            SomeAim
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Index"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Privacy"
                  href="/"
                >
                  Skills
                </a>
              </li>
              <li>
                <div className="btn2">
                  <a href="/">Add Blog</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
