import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/owners/login" />;
};

export const GuestRoute: React.FC<Props> = ({ children }) => {
  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};
