import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ContactContext } from "../../../context/contacts/ContactProvider";
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

export const SearchForm = () => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search Contacts" />
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
