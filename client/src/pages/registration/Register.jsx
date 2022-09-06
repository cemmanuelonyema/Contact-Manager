import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import "./register.scss";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {
  //refs
  const userRef = useRef();
  const errRef = useRef();

  //Local State
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  //Methods
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = () => {};
  return (
    <section className="page__container">
      <div className="left">
        <FaCheck />
        <FaInfoCircle />
        <FaTimes />
      </div>

      <div className="right">
        <div className="form__container">
          <h1>Register</h1>
          <h3>Manage all your contacts efficiently</h3>
          <p>
            Let's set you up quickly so you can start managing your contacts
          </p>

          <form onSubmit={handleSubmit} className="form">
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="first name"
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="address@mail.com"
              />
            </div>
            <div className="form_group">
              <label className="htmlFor=''password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <div className="form_group">
              <label className="htmlFor=''email">Confirm Password</label>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
                placeholder="password confirmation"
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block"
            />

            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};
