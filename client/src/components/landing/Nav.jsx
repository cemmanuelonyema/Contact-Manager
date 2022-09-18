import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="landing-nav">
      <div className="logo">
        <a href="/">
          <img src="" alt="logo" className="logo__img" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#section--features">Features</a>
        </li>
        <li>
          <a href="#section--tech">Tech</a>
        </li>
        <li>
          <Link to="/contact">Demo</Link>
        </li>
      </ul>
    </nav>
  );
};
