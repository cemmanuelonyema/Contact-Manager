import React from "react";
import { NavLink } from "react-router-dom";

export const NavHeader = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="logo" className="logo__img" />
      </div>
      <ul>
        <li>
          <NavLink to="/landing">Landing</NavLink>
        </li>
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
