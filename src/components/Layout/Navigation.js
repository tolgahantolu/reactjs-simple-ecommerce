import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import classes from "./Navigation.module.css";
const Navigation = () => {
  const cartCounter = useSelector((state) => state.cart.counter);
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <nav className={classes.nav}>
      <NavLink to="/" className={classes.logo}>
        ReactStore
      </NavLink>
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <button onClick={showCartHandler}>
        Your Cart <span> {cartCounter} </span>
      </button>
    </nav>
  );
};

export default Navigation;
