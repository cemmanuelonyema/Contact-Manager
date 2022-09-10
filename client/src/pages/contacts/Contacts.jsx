import React, { Fragment, useContext } from "react";
import { SearchFormMobile } from "../../components/contacts/contactform/ContactForm";
import { ContactItem } from "../../components/contacts/contactItem/ContactItem";
import { ContactContext } from "../../context/contacts/ContactProvider";
import "./contacts.scss";

export const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <section className="contacts" id="section--contacts">
      <div className="page__container">
        <SearchFormMobile />

        <div className=" contacts__container">
          {contacts?.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
