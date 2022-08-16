import ProductForm from "./ProductForm";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  // ! burada DUMMY_PRODUCTS'dan gelen verileri <ProductForm>'a props olarak gönderiyoruz.
  const addToCartHandler = {
    id: props.id,
    name: props.name,
    price: props.price,
  };

  return (
    <li key={props.id} className={classes.item}>
      <h2> {props.name} </h2>
      <p> {props.description} </p>
      <b> ${props.price} </b>
      <ProductForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default ProductItem;
