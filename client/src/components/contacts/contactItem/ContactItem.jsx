import React from "react";
import {
  FiEdit,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiPhoneCall,
  FiUser,
  FiUsers,
  FiImage,
} from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import "./contactItem.scss";

export const ContactItem = () => {
  return (
    <div className="card">
      <div className="card__avatar">
        <img src="/photo.jpg" alt="avatar" />
      </div>
      <div className="social-links">
        <a href="twitter">
          <span className="social-link">
            <FiTwitter />
          </span>
        </a>
        <a href="instagram">
          <span className="social-link">
            <FiInstagram />
          </span>
        </a>
        <a href="linked">
          <span className="social-link">
            <FiLinkedin />
          </span>
        </a>
      </div>
      <div>
        <div className="input__group">
          <FiUser />
          <span>Emmanuel Onyema</span>
        </div>
        <div className="input__group">
          <FiMail /> <span>cemmanuelonyema@gmail.com</span>
        </div>
        <div className="input__group">
          <FiPhoneCall />
          <span>07025053595</span>
        </div>
        <div className="input__group">
          <FiUsers />
          <span>Family</span>
        </div>
      </div>
      <div className="btns">
        <div className="edit">
          <FiEdit />
        </div>
        <div className="delete">
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};
