import React from "react";
import { Login } from "../../pages/registration/Login";
import { Register } from "../../pages/registration/Register";
import { Contacts } from "../contacts/contactContainer/Contacts";
import { ContactForm } from "../contacts/contactform/ContactForm";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Contacts /> */}
      <ContactForm />
    </div>
  );
};

export default App;
