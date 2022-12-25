import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function Navbar() {
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
              aria-current="Home Page"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <CustomLink
              className="nav-link active col"
              id="nav-item"
              aria-current="Episodes Page"
              to="/episodes"
            >
              EPISODES
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              className="nav-link active col"
              id="nav-item"
              aria-current="Team Page"
              to="/team"
            >
              TEAM
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              className="nav-link active col"
              id="nav-item"
              aria-current="Sponsors Page"
              to="/sponsors"
            >
              SPONSORS
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ children, to, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
