import React, { useContext } from "react";
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
import { ContactContext } from "../../../context/contacts/ContactProvider";
import "./contactItem.scss";

/**
 * @param {*} { contact - from contacts parent comp }
 * @return {*} { a single contactItem}
 */

export const ContactItem = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const {
    id,
    name,
    email,
    phone,
    contact_label,
    linkedIn,
    twitter,
    instagram,
  } = contact;

  return (
    <div className="card">
      <div className="card__avatar">
        <img src="/photo.jpg" alt="avatar" />
      </div>
      <div className="social-links">
        <a href={twitter ? twitter : ""}>
          <span className="social-link">
            <FiTwitter className="icon" />
          </span>
        </a>
        <a href={instagram ? instagram : ""}>
          <span className="social-link">
            <FiInstagram className="icon" />
          </span>
        </a>
        <a href={linkedIn ? linkedIn : ""}>
          <span className="social-link">
            <FiLinkedin className="icon" />
          </span>
        </a>
      </div>
      <div>
        <div className="input__group">
          <FiUser className="icon" />
          <span>{name ? name : ""}</span>
        </div>
        <div className="input__group">
          <FiMail className="icon" /> <span>{email ? email : ""}</span>
        </div>
        <div className="input__group">
          <FiPhoneCall className="icon" />
          <span>{phone ? phone : ""}</span>
        </div>
        <div className="input__group">
          <FiUsers className="icon" />
          <span>{contact_label ? contact_label : ""}</span>
        </div>
      </div>
      <div className="btns">
        <div className="edit">
          <FiEdit />
        </div>
        <div className="delete" onClick={() => deleteContact(id)}>
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};
