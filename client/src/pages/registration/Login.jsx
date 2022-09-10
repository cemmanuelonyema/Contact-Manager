import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./register.scss";

const EMAIL_REGEX = /^[a-z](?=.*[ @])/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Login = () => {
  //refs
  const userRef = useRef();
  // Local state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  //useEffect
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
  }, [email]);

  useEffect(() => {
    const res = PASSWORD_REGEX.test(password);
  }, [password]);

  //   useEffect(() => {
  //     userRef.current.focus();
  //     const isEmailValid = EMAIL_REGEX.test(email);
  //     const isPasswordValid = PASSWORD_REGEX.test(password);
  //   });

  // Methods
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = () => {};

  return (
    <section className="register">
      <div className="page__container">
        <div className="left"></div>

        <div className=" right">
          <div className="form__container">
            <h1>Login</h1>
            <h3>Manage all your contacts efficiently</h3>
            <p>
              Let's get you back quickly so you can start managing your contacts
            </p>
            <form onSubmit={handleSubmit} className="form">
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  ref={userRef}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="address@mail.com"
                  required
                />
              </div>

              <div className="form_group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="your password"
                  required
                />
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
                required
              />
              <span>
                Don't' have an account? <Link to="/register">Register</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
