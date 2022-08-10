import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <ul className={classes["cart-items"]}>
          <li className={classes["cart-item"]}>
            <div>
              <h2>iPhone 13 Pro</h2>
              <div className={classes.summary}>
                <span className={classes.price}>1299.90</span>
                <span className={classes.amount}>x1</span>
              </div>
            </div>
            <div className={classes["item-actions"]}>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
          <li className={classes["cart-item"]}>
            <div>
              <h2>iPhone 13 Pro</h2>
              <div className={classes.summary}>
                <span className={classes.price}>1299.90</span>
                <span className={classes.amount}>x1</span>
              </div>
            </div>
            <div className={classes["item-actions"]}>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
          <li className={classes["cart-item"]}>
            <div>
              <h2>iPhone 13 Pro</h2>
              <div className={classes.summary}>
                <span className={classes.price}>1299.90</span>
                <span className={classes.amount}>x1</span>
              </div>
            </div>
            <div className={classes["item-actions"]}>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>1299.90</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["close-btn"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes["order-btn"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
