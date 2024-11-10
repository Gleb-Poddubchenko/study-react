import React from "react";
import "./style.css";

const Button = (props) => {
  const { content } = props;

  return <button className="btn">{content}</button>;
};

export default Button;
