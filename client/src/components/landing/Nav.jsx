import React from "react";

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
          <a href="#section--about" to="/login">
            About
          </a>
        </li>
        <li>
          <a href="#section--features" to="/register">
            Features
          </a>
        </li>
        <li>
          <a href="#section--tech" to="/register">
            Tech
          </a>
        </li>
      </ul>
    </nav>
  );
};
