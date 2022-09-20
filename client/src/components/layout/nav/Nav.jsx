import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchForm } from "../../contacts/contactform/ContactForm";
import { FiUserPlus } from "react-icons/fi";

import "./nav.scss";
import { ContactContext } from "../../../context/contacts/ContactProvider";
import { AuthContext } from "../../../context/auth/AuthProvider";

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
  const { toggleModal } = useContext(ContactContext);
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    handleToggle();
    logout();
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="logo">
          <p>Hi Emmanuel</p>
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
          <button className="nav__link" onClick={handleLogout}>
            Log out{" "}
          </button>
        </ul>

        <div className="mobile-right">
          <div>
            <FiUserPlus className="icon-user" onClick={() => toggleModal()} />
          </div>
          <div
            className={`menuIcon ${isActive ? "open" : ""} `}
            onClick={handleToggle}
          >
            <span className="menuIcon__bar menuIcon__bar-a"></span>
            <span className="menuIcon__bar menuIcon__bar-b"></span>
            <span className="menuIcon__bar menuIcon__bar-c"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
