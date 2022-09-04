import React from "react";
import { Outlet } from "react-router-dom";
import { NavHeader } from "./components/layout/nav/Nav";

const Layout = () => {
  return (
    <main className="App-container">
      <NavHeader />
      <Outlet />
    </main>
  );
};

export default Layout;
