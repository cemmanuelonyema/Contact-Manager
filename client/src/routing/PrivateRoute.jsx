import React, { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthProvider";

export const PrivateRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const location = useLocation();
  return !isAuthenticated && !loading ? (
    <Navigate to="/register" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
