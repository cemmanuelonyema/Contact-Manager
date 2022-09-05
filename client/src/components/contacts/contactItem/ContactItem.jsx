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
        <img src="" alt="avatar" />
        <FiImage />
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
        <div className="input_group">
          <i>Name: </i> <FiUser />
          <span>Emmanuel Onyema</span>
        </div>
        <div className="input_group">
          <i>Email: </i>
          <FiMail /> <span>cemmanuelonyema@gmail.com</span>
        </div>
        <div className="input_group">
          <i>Phone: </i> <FiPhoneCall />
          <span>07025053595</span>
        </div>
        <div className="input_group">
          <i>Label: </i> <FiUsers />
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
