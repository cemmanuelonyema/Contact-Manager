import React, { useState } from "react";
import "./register.scss";

export const Login = () => {
  // Local state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  // Methods
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = () => {};

  return (
    <section className="page_container">
      <div className="left"></div>

      <div className=" right form__container">
        <h1>
          Account <span className="">Login</span>{" "}
        </h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
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
        </form>
      </div>
    </section>
  );
};
