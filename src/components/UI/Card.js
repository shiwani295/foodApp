import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  // console.log(props.children);
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
//note data come from AvailableMe
