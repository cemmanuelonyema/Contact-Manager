import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import "./register.scss";
import { useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-z](?=.*[ @])/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {
  //refs
  const nameRef = useRef();
  const errRef = useRef();

  //Local Form State
  //password states
  const [validPassWd, setValidPassWd] = useState(false);
  const [passWdFocus, setPassWdFocus] = useState(false);
  //user states
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  //useEffects
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const res = NAME_REGEX.test(name);
  }, [name]);

  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
  }, [email]);

  useEffect(() => {
    const res = PASSWORD_REGEX.test(password);
    const match = password === password2;
  }, [password, password2]);

  //   useEffect(() => {
  //     nameRef.current.focus();
  //     const isNameValid = NAME_REGEX.test(name);
  //     const isEmailvalid = EMAIL_REGEX.test(email);
  //     const isPasswordValid = PASSWORD_REGEX.test(password);
  //     const passwordMatched = password === password2;
  //   }, [name, email, password, password2]);

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
                ref={nameRef}
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

//register features

// Accesible custom login and register validation to take the load off backed
