import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  if (!token) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoute;
