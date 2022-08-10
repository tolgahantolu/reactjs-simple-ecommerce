import { useState } from "react";
import Cart from "../Cart/Cart";
import classes from "./Navigation.module.css";
const Navigation = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <nav className={classes.nav}>
      <a className={classes.logo}>ReactStore</a>
      <ul>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <button onClick={showCartHandler}>
        Your Cart <span>0</span>
      </button>
    </nav>
  );
};

export default Navigation;
