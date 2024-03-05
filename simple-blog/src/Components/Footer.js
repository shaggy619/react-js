import React from "react";

export default function Footer() {
  return (
    <footer className="border-top footer text-muted footer-content">
      <div className="container footer-text">
        &copy; 2024 - SomeAim - <a href="/">Privacy</a>
      </div>
      <div>
        <ul className="footer-social-icons">
          <li>
            <a href="https://www.facebook.com/someaim.adhikari.1/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SomeAim">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samyam-adhikari-188724230/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/someaim1/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@@crowninkproduction3197/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
