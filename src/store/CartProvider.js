import React, { useReducer } from "react";
import CartContext from "./cart-context";

// Defining the initial state and the reducer
const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const a = action.item.price * action.item.amount;

    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    //this one for check the item already exist or not in  header Cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    //console.log(existingCartItem);

    let updatedItems;

    if (existingCartItem) {
      //console.log(existingCartItem);

      //here if the item already availabe ex-shushi have 2 item so here we also add the amount 2 shushi amount
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, //here we add amount of 2 shushi
      };

      updatedItems = [...state.items]; //creating the new arry and copying the old object
      console.log(updatedItems);
      updatedItems[existingCartItemIndex] = updatedItem;
      //console.log(updatedItems);
    } else {
      //updatedItem is simply a brand new item
      //updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
      console.log(updatedItems);
    }
    //const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalamount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((items) => items.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items]; //copying the old object
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // Initialising useReducer hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    //console.log(item);
    dispatchCartAction({ type: "ADD", item: item });
  };
  const hideCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemToCartHandler,
    removeItem: hideCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
