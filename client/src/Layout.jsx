import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavHeader } from "./components/layout/nav/Nav";

const Layout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
