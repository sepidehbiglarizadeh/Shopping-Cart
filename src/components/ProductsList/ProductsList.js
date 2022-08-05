import Product from "../Product/Product";
import { useProducts } from "../Provider/ProductsProvider";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useProducts();

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
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
