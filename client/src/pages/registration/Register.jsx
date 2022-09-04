import React, { useState } from "react";
import "./register.css";

export const Register = () => {
  //Local State
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
    <section className="page_container">
      <div className="left"></div>

      <div className="right form_container">
        <h1>
          Account <span className="">Register</span>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
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
              placeholder="your password confirmation"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </section>
  );
};
