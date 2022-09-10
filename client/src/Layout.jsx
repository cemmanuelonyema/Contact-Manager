import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, NavHeader } from "./components/layout/nav/Nav";

const Layout = () => {
  return (
    <Fragment>
      {/* <NavBar /> */}
      <Outlet />
    </Fragment>
  );
};

export default Layout;
