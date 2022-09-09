import React, { Fragment, useContext } from "react";
import { SearchForm } from "../../components/contacts/contactform/ContactForm";
import { ContactItem } from "../../components/contacts/contactItem/ContactItem";
import { ContactContext } from "../../context/contacts/ContactProvider";
import "./contacts.scss";

export const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <Fragment>
      <section className="contacts" id="section--contacts">
        <div className="container contacts__container">
          {contacts?.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};
