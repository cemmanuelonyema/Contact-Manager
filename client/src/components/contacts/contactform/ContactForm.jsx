import React, { useState } from "react";
import "./contactForm.scss";

export const ContactForm = () => {
  //Local State
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    linkedIn: "",
    instagram: "",
    twitter: "",
  });

  const { name, email, phone, type, linkedIn, instagram, twitter } = contact;

  //methods
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />

      <input
        type="link"
        placeholder="linkedIn"
        name="linkedIn"
        value={linkedIn}
        onChange={handleChange}
      />

      <input
        type="link"
        placeholder="instagram"
        name="instagram"
        value={instagram}
        onChange={handleChange}
      />

      <input
        type="link"
        placeholder="twitter"
        name="twitter"
        value={twitter}
        onChange={handleChange}
      />

      <input
        type="submit"
        value={"Add Contact"}
        className="btn btn-primary btn-block"
      />
      <div className="clear">clear</div>
    </form>
  );
};

// const ContactForm = () => {
//   const [contact, setContact] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     type: "personal",
//   });

//   const { name, email, phone, type } = contact;

//   const clearAll = () => {
//     clearCurrent();
//   };

//   const handleChange = (e) =>
//     setContact({
//       ...contact,
//       [e.target.name]: e.target.value,
//     });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!current) {
//       addContact(contact);
//     } else {
//       updateContact(contact);
//     }
//     setContact({ name: "", email: "", phone: "", type: "personal" });
//   };
// };
