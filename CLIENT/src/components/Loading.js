import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ size = 100 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
      ></Spinner>
    </div>
  );
};

export default Loading;
