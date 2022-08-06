import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Provider/ProductsProvider";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProducts = () => {
    if (products.length === 0)
      return (
        <div className={styles.text}>there is no product in your cart</div>
      );

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
              onIncrement={() =>
                dispatch({ type: "increment", id: product.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrement", id: product.id })
              }
              onDelete={() => dispatch({ type: "delete", id: product.id })}
            />
          );
        })}
      </div>
    );
  };

  return ( 
    <div>
        {!products.length && <div className={styles.text}>go to shopping</div>}
        {renderProducts()}
      </div>
   );
};

export default ProductsList;
