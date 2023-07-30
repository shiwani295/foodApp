import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
import mealsImage from "../../assets/meal.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />;
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
