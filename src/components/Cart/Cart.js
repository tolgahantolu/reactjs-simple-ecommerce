import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.cart.products);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(productItems);

  const productsData = productItems.map((products) => products);
  console.log(productsData);

  let newSingleProductData;
  const newProductData = () => {
    for (const product of productsData) {
      console.log(product);
      newSingleProductData = {
        id: product.id,
        name: product.name,
        price: product.price,
      };
    }
  };
  newProductData();
  console.log(newSingleProductData);

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: newSingleProductData.id,
        name: newSingleProductData.name,
        price: newSingleProductData.price,
        counter: 1,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: newSingleProductData.id,
        price: newSingleProductData.price,
        counter: 1,
      })
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <ul className={classes["cart-items"]}>
          {productItems.map((productItem) => {
            return (
              <li className={classes["cart-item"]} key={productItem.id}>
                <div>
                  <h2>{productItem.name}</h2>
                  <div className={classes.summary}>
                    <span className={classes.price}>
                      ${productItem.totalPrice.toFixed(2)}
                    </span>
                    <span className={classes.amount}>
                      {productItem.quantity}
                    </span>
                  </div>
                </div>
                <div className={classes["item-actions"]}>
                  <button onClick={removeItemHandler}>-</button>
                  <button onClick={addItemHandler}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
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
