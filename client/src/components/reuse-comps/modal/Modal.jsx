import React, { useState } from "react";
import { Fragment } from "react";
import { ContactForm } from "../../contacts/contactform/ContactForm";
import "./modal.css";

export const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    }
  };

  return (
    <div className="modal__container" id="modal-container">
      <div className="modal__content">
        <button className="btn-close" onClick={handleClick}>
          X
        </button>
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
