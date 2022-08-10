import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add To Cart</button>
      {!amountIsValid && (
        <p style={{ fontSize: "2rem", color: "#F2DF3A" }}>
          Please enter a amount (1-5).
        </p>
      )}
    </form>
  );
};

export default ProductForm;
