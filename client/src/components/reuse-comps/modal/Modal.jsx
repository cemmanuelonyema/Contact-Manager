import React, { useState, useRef } from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ContactContext } from "../../../context/contacts/ContactProvider";
import { ContactForm } from "../../contacts/contactform/ContactForm";
import "./modal.scss";

export const Modal = () => {
  const { toggleModal } = useContext(ContactContext);
  const handleClick = () => toggleModal();

  const modalRef = useRef();

  return (
    <div
      className="modal__container"
      id="modal-container"
      ref={modalRef}
      onClick={handleClick}
    >
      <div className="modal__content">
        <FaTimes onClick={handleClick} />
        <ContactForm />
      </div>
    </div>
  );
};
