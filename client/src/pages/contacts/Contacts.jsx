import React, { useContext } from "react";
import { ContactItem } from "../../components/contacts/contactItem/ContactItem";
import { ContactContext } from "../../context/contacts/ContactProvider";
import "./contacts.scss";

export const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <section className="contacts" id="section--contacts">
      <div className="container contacts__container">
        {contacts?.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
};
