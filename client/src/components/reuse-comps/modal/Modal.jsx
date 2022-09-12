import React, { useState } from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ContactContext } from "../../../context/contacts/ContactProvider";
import { ContactForm } from "../../contacts/contactform/ContactForm";
import "./modal.scss";

export const Modal = () => {
  const { toggleModal } = useContext(ContactContext);

  return (
    <div className="modal__container" id="modal-container">
      <div className="modal__content">
        <FaTimes onClick={() => toggleModal()} />
        <ContactForm />
      </div>
      {/*
                    <div className="modal__close close-modal" title="Close">
                        <i className='bx bx-x'></i>
                    </div>


                    <h1 className="modal__title">Good Job!</h1>
                    <p className="modal__description">Click the button to close</p>

                    <button className="modal__button modal__button-width">
                        View status
                    </button>

                    <button className="modal__button-link close-modal">
                        Close
                    </button> 
                </div>
                    */}
    </div>
  );
};
