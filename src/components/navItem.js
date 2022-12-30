import React from "react";
import "./navbar.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="nav-item">
      <CustomLink className="nav-link active col" id="nav-item" to={props.to}>
        {props.title}
      </CustomLink>
    </li>
  );
}

function CustomLink({ children, to, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  );
}

export default NavItem;
