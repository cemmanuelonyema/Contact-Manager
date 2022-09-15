import React, { useContext, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import { ContactContext } from "../../../context/contacts/ContactProvider";
import "./contactForm.scss";

export const ContactForm = () => {
  const { addContact, current, clearCurrentContact } =
    useContext(ContactContext);
  //Local State
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    contact_label: "",
    linkedIn: "",
    instagram: "",
    twitter: "",
  });

  const { name, email, phone, contact_label, linkedIn, instagram, twitter } =
    contact;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        contact_label: "",
        linkedIn: "",
        instagram: "",
        twitter: "",
      });
    }
  }, [current]);

  //methods
  const handleChange = (e) =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    addContact(contact);

    setContact({
      name: "",
      email: "",
      phone: "",
      contact_label: "",
      linkedIn: "",
      instagram: "",
      twitter: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="">{current !== null ? "Edit contact " : "Add Contact"}</h2>

      <div className="form__group">
        <div className="label-group">
          <label>Name</label>
          <span>*</span>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <div className="label-group">
          <label>Email</label>
          <span>*</span>
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <div className="label-group">
          <label>Phone number</label>
          <span>*</span>
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <label>LinkedIn</label>
        <input
          type="link"
          placeholder="linkedIn"
          name="linkedIn"
          value={linkedIn}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <label>Instagram</label>

        <input
          type="link"
          placeholder="instagram"
          name="instagram"
          value={instagram}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <label>Twitter</label>
        <input
          type="link"
          placeholder="twitter"
          name="twitter"
          value={twitter}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value={current !== null ? "Update " : "Add "}
        className="btn btn-primary btn-block"
      />

      {current !== null ? (
        <input
          onClick={() => clearCurrentContact()}
          type="submit"
          value={"Clear fields "}
          className="btn btn-primary btn-block"
        />
      ) : (
        ""
      )}
    </form>
  );
};

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterContacts, clearFilter, current } = useContext(ContactContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    //   console.log(searchValue);
    filterContacts(searchValue);
  };
  const handleClear = () => {
    setSearchValue("");
    clearFilter();
  };
  return (
    <form className="search--form-web" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue !== "" ? <FaTimes onClick={handleClear} /> : ""}
    </form>
  );
};

export const SearchFormMobile = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    //   console.log(searchValue);
    filterContacts(searchValue);
  };
  const handleClear = () => {
    setSearchValue("");
    clearFilter();
  };
  return (
    <form className="search--form-mobile" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue !== "" ? <FaTimes onClick={handleClear} /> : ""}
    </form>
  );
};
