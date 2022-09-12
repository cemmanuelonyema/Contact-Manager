import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchForm } from "../../contacts/contactform/ContactForm";

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

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <SearchForm />

        <ul className={`nav__menu ${isActive ? "open" : ""} `}>
          <li className="nav__item" onClick={handleToggle}>
            <a className="nav__link" href="#section__projects">
              Projects
            </a>
          </li>
          <li className="nav__item" onClick={handleToggle}>
            <a className="nav__link" href="#section__about">
              About Me
            </a>
          </li>
          <li className="nav__item" onClick={handleToggle}>
            <a className="nav__link" href="#section__contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div
          className={`menuIcon ${isActive ? "open" : ""} `}
          onClick={handleToggle}
        >
          <span className="menuIcon__bar menuIcon__bar-a"></span>
          <span className="menuIcon__bar menuIcon__bar-b"></span>
          <span className="menuIcon__bar menuIcon__bar-c"></span>
        </div>
      </div>
    </nav>
  );
};
