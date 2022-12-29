import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Link to="/" className="container-fluid text-decoration-none">
      <h1 className="h1" id="h1">
        Suffering in Paradise
      </h1>
    </Link>
  );
}

export default Header;
