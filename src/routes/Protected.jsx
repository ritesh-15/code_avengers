import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function Protected({ isAuthRoute, children }) {
  const user = useSelector((state) => state.user.user);

  return isAuthRoute ? (
    !user ? (
      children
    ) : (
      <Navigate to="/" />
    )
  ) : user ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
