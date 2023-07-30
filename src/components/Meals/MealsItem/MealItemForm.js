import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemsForm.module.css";

const MealItemForm = (props) => {
  //check form valid or not thats by using usestate
  const [amounIsValid, setAmounIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    //console.log(enteredAmount);

    //convert into number
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmounIsValid(false);
      return;
    }
    //this is comes from mealitems (call a funtion)
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed! ,,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amounIsValid && <p> Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
