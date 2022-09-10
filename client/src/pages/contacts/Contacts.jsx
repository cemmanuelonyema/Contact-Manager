import React, { Fragment, useContext } from "react";
import { SearchFormMobile } from "../../components/contacts/contactform/ContactForm";
import { ContactItem } from "../../components/contacts/contactItem/ContactItem";
import { ContactContext } from "../../context/contacts/ContactProvider";
import "./contacts.scss";

export const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  const renderContacts = filtered ? filtered : contacts;

  return (
    <section className="contacts" id="section--contacts">
      <div className="page__container">
        <SearchFormMobile />

        <div className=" contacts__container">
          {filtered && filtered.length === 0 ? <h4>No contact matched</h4> : ""}

          {contacts && contacts.length === 0 ? (
            <h4>Please add contacts</h4>
          ) : (
            renderContacts?.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
