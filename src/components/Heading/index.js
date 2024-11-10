import React from "react";
import "./style.css";
import Button from "../Button";
const Heading = () => {
  return (
    <h1 className="heading">
      Hi!
      <Button content="new button" />
    </h1>
  );
};

export default Heading;
