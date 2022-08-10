import ProductItem from "./Product/ProductItem";
import classes from "./ProductsList.module.css";
const ProductsList = (props) => {
  return (
    <ul className={classes["products-list"]}>
      {props.products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
