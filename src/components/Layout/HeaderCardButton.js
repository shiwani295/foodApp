import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadCardButton.module.css";

const HeaderCardButton = (props) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItem = cartctx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //console.log(numberOfCartItem);
  return (
    // <Fragment>
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
    // </Fragment>
  );
};

export default HeaderCardButton;
