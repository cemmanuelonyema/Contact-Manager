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
import { Contacts } from "../../pages/contacts/Contacts";
import { NotFound } from "../../pages/notFound/NotFound";
import { PrivateRoute } from "../../routing/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
