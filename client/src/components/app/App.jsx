//Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

//files
import Layout from "../../Layout";
import "./App.scss";

//pages
import { Landing } from "../../pages/landing/Landing";
import { Login } from "../../pages/registration/Login";
import { Register } from "../../pages/registration/Register";
import { ContactItem } from "../contacts/contactItem/ContactItem";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<ContactItem />} />
      </Route>
    </Routes>
  );
};

export default App;
