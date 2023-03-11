import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  
  const submitHandler = (event) => {
    event.preventDefault();
    const amount = cartInputRef.current.value;
    props.onAddToCart(+amount);
  };
  const cartInputRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={cartInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
