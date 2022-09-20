import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import "./register.scss";
import Lottie from "react-lottie";
import animationData from "../../lottie/contacts-book.json";
import { AuthContext } from "../../context/auth/AuthProvider";

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

  const { registerUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/contacts");
  }, [isAuthenticated]);

  //Methods
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    registerUser({ name, email, password });
  };

  return (
    <section className="register">
      <div className="page__container">
        <div className="right">
          <div className="form__container">
            <h1>Register</h1>
            <h3>Manage all your contacts efficiently</h3>
            <p>
              Let's set you up quickly so you can start managing your contacts
            </p>

            <form onSubmit={handleSubmit} className="form">
              <div className="form_group">
                <label htmlFor="name">First Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="your first name"
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="youraddress@mail.com"
                />
              </div>
              <div className="form_group">
                <label className="htmlFor=''password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="your password"
                />
              </div>
              <div className="form_group">
                <label className="htmlFor=''email">Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                  placeholder="your  password confirmation"
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
      </div>
    </section>
  );
};

//register features

// Accesible custom login and register validation to take the load off backed
