import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavItem from "./navItem";
import { websiteLinks } from "./values";

export default function Navbar() {
  const urls = websiteLinks();
  return (
    <nav className="navbar navbar-expand-md navbar-light py-sm-2 sticky-top">
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link
              className="nav-link active col"
              id="nav-item"
              // aria-current="Home Page"
              to="/"
            >
              HOME
            </Link>
          </li>
          {urls.map((item, index) => (
            <NavItem to={item.to} title={item.title} key={index} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
