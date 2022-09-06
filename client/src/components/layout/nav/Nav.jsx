import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";

export const NavHeader = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src="" alt="logo" className="logo__img" />
        </a>
      </div>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export const NavSide = () => {
  return <nav>NavSide</nav>;
};
