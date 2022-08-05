import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Provider/ProductsProvider";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.header_item}>Description</span>
        <span>Quantity</span>
        <span>Price</span>
      </div>
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            onIncrement={() => dispatch({ type: "increment", id: product.id })}
            onDecrement={() => dispatch({ type: "decrement", id: product.id })}
            onDelete={() => dispatch({ type: "delete", id: product.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
