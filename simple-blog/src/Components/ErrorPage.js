import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container">
      <h2>Sorry the requested page was not found.</h2>
      <Link to="/">Back to homepage...</Link>
    </div>
  );
}

export default ErrorPage;
