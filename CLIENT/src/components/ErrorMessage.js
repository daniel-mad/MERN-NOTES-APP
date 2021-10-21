import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ varient = "info", children }) => {
  return (
    <Alert variant={varient}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;
