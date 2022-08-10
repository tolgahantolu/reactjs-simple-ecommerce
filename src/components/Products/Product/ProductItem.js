import ProductForm from "./ProductForm";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  return (
    <li key={props.id} className={classes.item}>
      <h2> {props.name} </h2>
      <p> {props.description} </p>
      <b> ${props.price} </b>
      <ProductForm />
    </li>
  );
};

export default ProductItem;
