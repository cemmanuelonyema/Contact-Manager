import React from "react";
import "./contactItem.css";

export const ContactItem = () => {
  return (
    <div className="card">
      <div className="img">
        <img src="" alt="avatar" />
      </div>
      <div className="social-links">
        <a href="twitter">
          <span className="social-link"></span>
        </a>
        <a href="instagram">
          <span className="social-link"></span>
        </a>
        <a href="linked">
          <span className="social-link"></span>
        </a>
      </div>
      <div>
        <div className="input_group">
          <i>Name: </i> <span>Emmanuel Onyema</span>
        </div>
        <div className="input_group">
          <i>Email: </i> <span>cemmanuelonyema@gmail.com</span>
        </div>
        <div className="input_group">
          <i>Phone: </i> <span>07025053595</span>
        </div>
        <div className="input_group">
          <i>Label: </i> <span>Family</span>
        </div>
      </div>
      <div className="btns">
        <span className="edit"></span>
        <span className="delete"></span>
      </div>
    </div>
  );
};
